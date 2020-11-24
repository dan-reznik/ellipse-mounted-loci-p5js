// ELLIPTIC BILLIARD

function in_ell(a,b,[px,py]) {
  return (px*px)/(a*a)+(py*py)/(b*b)<1;
}

function ellInterRay(a, [x, y], [nx, ny]) {
  let a2 = a*a;
  let c2 = nx*nx + a2*ny*ny;
  let c1 = 2*(nx*x + a2*ny*y);
  let c0 = x*x + a2*y*y - a2;
  let ss = quadRoots(c2, c1, c0);
  return ray([x, y], [nx, ny], ss[1]);
}

function ellInterRayBoth(a, [x, y], [nx, ny]) {
  let a2 = a*a;
  let c2 = nx*nx + a2*ny*ny;
  let c1 = 2*(nx*x + a2*ny*y);
  let c0 = x*x + a2*y*y - a2;
  let ss = quadRoots(c2, c1, c0);
  return [ray([x, y], [nx, ny], ss[1]),
          ray([x, y], [nx, ny], ss[0])];
}

function ellInterRayb(a, b, [x, y], [nx, ny]) {
  let a2=a*a, b2=b*b;
  let c2 = b2*nx*nx + a2*ny*ny;
  let c1 = 2*(b2*nx*x + a2*ny*y);
  let c0 = b2*x*x + a2*y*y - a2*b2;
  let ss = quadRoots(c2, c1, c0);
  return ray([x, y], [nx, ny], ss[1]);
}

function ellInterRaybBoth(a, b, [x, y], [nx, ny]) {
  let a2=a*a, b2=b*b;
  let c2 = b2*nx*nx + a2*ny*ny;
  let c1 = 2*(b2*nx*x + a2*ny*y);
  let c0 = b2*x*x + a2*y*y - a2*b2;
  let ss = quadRoots(c2, c1, c0);
  return ss.map(s=>ray([x, y], [nx, ny], s));
}

function circleInterRay(ctr, R, p, phat) {
  const is = ellInterRaybBoth(R,R,vdiff(p,ctr),phat);
  return is.map(i=>vsum(i,ctr));
}

function farthestPoint(ps,p0) {
  const ds = ps.map(p=>edist2(p,p0));
  const imax = arg_max(ds);
  return ps[imax];
}

function ell_norm(a, [x, y]) {
  return vnorm([-x, -y * a * a]);
}

function cos_alpha(a, x) {
  let a2 = a * a;
  let a4 = a2 * a2;
  delta = sqrt(a4 - a2 + 1);
  let num = a2 * sqrt(2 * delta - a2 - 1);
  let denom = (a2 - 1) * sqrt(a4 - (a2 - 1) * x * x);
  return num / denom;
}

// ORBITS

function orbit_normals(a, tDeg) {
  let t = toRad(tDeg);
  let p1 = [a * cos(t), sin(-t)];
  let n1 = ell_norm(a, p1);
  let ca = cos_alpha(a, p1[0]);
  let sa = sqrt(1 - ca * ca);
  let nrot = rotSinCos(n1, sa, ca);
  let nrotNeg = rotSinCos(n1, -sa, ca);
  let p2 = ellInterRay(a, p1, nrot);
  let p3 = ellInterRay(a, p1, nrotNeg);
  let n2 = ell_norm(a, p2);
  let n3 = ell_norm(a, p3);
  let obj = {
    o: [p1, p2, p3],
    n: [n1, n2, n3],
    s: tri_sides([p1, p2, p3])
  };
  return obj;
}
// intersection of current P1P2(t) with P1P2(t+dt)
function get_envelope_trilin(a,tDeg,trilFn1,trilFn2,dt=0.0001) {
  let ons = orbit_normals(a, tDeg-0.5*dt);
  let ons_dt = orbit_normals(a, tDeg+0.5*dt);
  let p1=trilFn1(ons.o, ons.s);
  let p1_dt=trilFn1(ons_dt.o, ons_dt.s);
  let p2=trilFn2(ons.o, ons.s);
  let p2_dt=trilFn2(ons_dt.o, ons_dt.s);
  return inter_lines(p1,p2,p1_dt,p2_dt);
}

function get_envelope(a, tDeg, tri_fn, rot_n, eps = .001) {
  const bef = vec_rotate_left(tri_fn(a, tDeg - eps).o, rot_n);
  const aft = vec_rotate_left(tri_fn(a, tDeg + eps).o, rot_n);
  const inter = inter_rays(
    bef[0], vdiff(bef[1], bef[0]),
    aft[0], vdiff(aft[1], aft[0])
  );
  return inter;
}

function get_orbit_derived(a,tDeg,orbit_fn,tri_type,pn,inv,inv_fn) {
  const ons = orbit_fn(a, tDeg);
  const ons_derived = get_derived_tri(a, ons.o, ons.s, tri_type, pn);
  return inv == "tri"? invert_tri(ons_derived, inv_fn) : ons_derived;
}

function get_Xn_poncelet(a, tDeg, orbit_fn, bary_fn, tri_type, pn, inv, inv_fn, caustic_n) {
  const ons_derived = get_orbit_derived(a,tDeg,orbit_fn,tri_type,pn,inv,inv_fn);
  //const ons = orbit_fn(a, tDeg);
 // let ons_derived = get_derived_tri(a, ons.o, ons.s, tri_type, pn);
 // if (inv == "tri")
 //   ons_derived = invert_tri(ons_derived, inv_fn);
  const xn = caustic_n>=0 ? get_envelope(a, tDeg,
    (a0,tDeg0)=>get_orbit_derived(a0,tDeg0,orbit_fn,tri_type,pn,inv,inv_fn),caustic_n) :
    get_Xn_low_bary(ons_derived.o, ons_derived.s, bary_fn);
  return inv == "xn" ? inv_fn(ons_derived.o, ons_derived.s, xn) : xn;
}

function orbit_homothetic(a, tDeg) {
  let tri0 = regularPoly(3);
  let triRot = rotPoly(tri0, toRad(tDeg));
  let triScale = scalePoly(triRot, a, 1);
  return { o: triScale, s: tri_sides(triScale) };
}

function orbit_incircle(a, tDeg) {
  const b = 1;
  const a2 = a * a, b2 = b * b, a3 = a * a2, b3 = b * b2, a4 = a2 * a2, b4 = b2 * b2;
  const a2b2 = a2 * b2;
  const t = toRad(tDeg);
  const [x1, y1] = [a * Math.cos(t), Math.sin(t)];
  const [x1s, y1s] = [x1 * x1, y1 * y1];
  const k = Math.sqrt(a3 * (a + 2 * b) * x1s + a2 * b * (b + 2 * a) * y1s);
  const x2 = 2 * a2b2 * (-a2 * b * x1 + k * y1);
  const y2 = -2 * a * b3 * (a2 * b * y1 + k * x1);
  const x3 = -2 * a2b2 * (a2 * b * x1 + k * y1);
  const y3 = 2 * b3 * a * (-a2 * b * y1 + k * x1);
  const q2 = 2 * b2 * (a + b) * ((a2 - b2) * x1s + a2 * b2);
  const q3 = (b2 * a4 - y1s * a4 + 2 * a2 * b4 + a2 * b2 * x1s - 2 * x1s * b4) * (a + b);
  const tri = [[x1, y1], vscale([x2, y2], 1 / q2), vscale([x3, y3], 1 / q3)];
  return { o: tri, s: tri_sides(tri) };
}

function orbit_inellipse(a, tDeg) {
  const b = 1;
  const a2 = a * a, b2 = b * b, c2 = a2 - b2, a3 = a * a2; b3 = b * b2;
  const R = a + b;
  const t = toRad(tDeg);
  const [x1, y1] = [R * Math.cos(t), R * Math.sin(t)];
  const x1s = x1 * x1, y1s = y1 * y1;
  const kx = Math.sqrt(a3 * (a + 2 * b) - c2 * x1s);
  const ky = Math.sqrt(c2 * y1s + b3 * (2 * a + b));
  const qx = a / ((-a + b) * x1s + a2 * (a + b));
  const qy = b / ((a - b) * y1s + b2 * (a + b));
  const x2 = (-b2 * x1 + y1 * kx) * qx;
  const y2 = -(y1 * a2 + x1 * ky) * qy;
  const x3 = -(b2 * x1 + y1 * kx) * qx;
  const y3 = (-y1 * a2 + x1 * ky) * qy;
  const tri = [[x1, y1], [x2, y2], [x3, y3]];
  return { o: tri, s: tri_sides(tri) };
}

function orbit_dual(a, tDeg) {
  const b = 1;
  const a2 = a * a, b2 = b * b, c2 = a2 - b2;
  const a4 = a2 * a2, b4 = b2 * b2, a6 = a2*a4, b6=b2*b4;
  const t = toRad(tDeg);
  const [x1, y1] = [a * Math.cos(t), b * Math.sin(t)];
  const x1s = x1 * x1, y1s = y1 * y1;
  
  const s0 = c2*Math.pow(a2 + b2,3);
  const sx = Math.sqrt(s0*x1s + a2*b6*(2*a2 + b2)); 
  const sy = Math.sqrt(-s0*y1s + a6*b2*(a2 + 2*b2));
  const kx = (a2*b)/((a4*x1s + a2*b4 - b4*x1s)*(a2 + b2));
  const ky = (a*b2)/(((b2 - y1s)*a4 + b4*y1s)*(a2 + b2));
   
  const x2 = (-a4*b*x1 + y1*sx)*kx;
  const y2 = -(a*b4*y1 + x1*sy)*ky;
  const x3 = -(a4*b*x1 + y1*sx)*kx;
  const y3 = (-b4*a*y1 + x1*sy)*ky;
   
   const tri = [[x1, y1], [x2, y2], [x3, y3]];
   return { o: tri, s: tri_sides(tri) };
}

/*
poristicVertices[R_, r_, t_] := Module[{d, w, ct, st, p1, p2, p3, d0},
  d = Sqrt[R (R - 2 r)];
  ct = Cos@t;
  st = Sin@t;
  w = Sqrt[R^2 - (d ct + r)^2];
  d0 = (d ct + r);
  p1 = {ct d0 - w st + d, d0 st + w ct};
  p2 = {ct d0 + w st + d, d0 st - w ct};
  p3 = {R (2 d R - (R^2 + d^2) ct), 
      R (d^2 - R^2) st}/(R^2 - 2 d R ct + d^2) + {d, 0};
  {p1, p2, p3}];
*/

function chapple_d(r,R) {
  return sqrt(R*R - 2*r*R);
}

function orbit_poristic(a, tDeg) {
  const R=1+a;
  const r = 1; // assume
  const R2 = R*R;
  const d = chapple_d(r,R); // chapple & euler
  const d2 = d*d;
  const t = toRad(tDeg);
  const ct = cos(t);
  const st = sin(t);
  const w = sqrt(R2 - (d*ct + r)**2);
  const d0 = d*ct + r;
  const p1 = [ct*d0 - w*st, d0*st + w*ct];
  const p2 = [ct*d0 + w*st, d0*st - w*ct];
  let p3 = [2*d*R - (R2 + d2)*ct, (d2 - R2)*st];
  p3 = vscale(p3,R/(R2 - 2*d*R*ct + d2));
  //p3 = vsum(p3,[d, 0]);
  const tri = [p1, p2, p3].map(p=>vdiff(p,[d,0]));
  return { o: tri, s: tri_sides(tri) };
}

function getBrocardInellipseIsosceles(a,b) {
  const a2=a*a,b2=b*b;
  const g = Math.sqrt(4*a2*a2 - 5*a2*b2 + b2*b2);
  const v1 = [0, (2*a2 - g)/b];
  const v2 = [Math.sqrt(5*a2-2*b2+2*g), -b];
  const v3 = vflipx(v2);
  const v1p = [0, (2*a2 + g)/b];
  const v2p = [Math.sqrt(5*a2-2*b2-2*g), -b];
  const v3p = vflipx(v2p);
  return [[v1, v2, v3], [v1p, v2p, v3p]];
}

/*
showPonceletBrocardInellipsePerp[a_, b_, tDeg_, OptionsPattern[]] := 
 Module[{ell, c, fs, gr, pr, pl, v1, v2, v3, brocs, isos, isosL, x3s, 
   x6s, Rs, clrs, x186s, x39, ws, s1s, s2s, s3s, As, t, p0, v1s, 
   tangs, feet, tris, trisL},
  isos = getBrocardInellipseIsosceles[a, b];
  isosL = triLengthsRL /@ isos;
  x3s = MapThread[getCircumcenterTrilin[#1, #2] &, {isos, isosL}];
  Rs = MapThread[magn[#1[[1]] - #2] &, {isos, x3s}];
  clrs = {OptionValue@clrTri1, OptionValue@clrTri2};
  t = toRad@tDeg;
  p0 = {-Sin@t, Cos@t};
  v1s = MapThread[(#1 p0 + #2) &, {Rs, x3s}];
  tangs = ellTangentsbUnprotNoAbs[a, b, #] & /@ v1s;
  feet = Transpose@
    Table[MapThread[
      farthestPoint[
        interRayCirc[#1, #2, #3, #4[[i]] - #3], #3] &, {x3s, Rs, v1s, 
       tangs}], {i, 2}];
  (*Print@{"x3s",x3s,"Rs",Rs,"v1s",v1s,"tangs",tangs,"feet",feet};*)
  tris = Table[{v1s[[i]], feet[[i, 1]], feet[[i, 2]]}, {i, 2}];
  trisL = triLengthsRL /@ tris;
*/

// derived by ronaldo garcia, Sept 2020.
function orbit_brocard(a, tDeg) {
  const b = 1;
  const t = toRad(tDeg);
  const a2 = a * a, b2 = b * b;
  const c2 = a2 - b2, c4 = c2 * c2;
  const c = Math.sqrt(c2);
  const a4 = a2 * a2, b4 = b2 * b2;
  const a6 = a2 * a4, b6 = b2 * b4, b8 = b4 * b4;
  const st = Math.sin(t), ct = Math.cos(t);
  const st2 = st * st, ct2 = ct * ct;
  const ct4 = ct2 * ct2;
  
  const k1 = Math.sqrt(4*a2 - b2);
  const k2 = Math.sqrt(-4*ct2*a2 + 4*ct2*b2 - 4*c*k1*st + 8*a2 - 5*b2);
  const k3 = 16*a4*c4*ct4 + (-8*a6*b2 + 24*a4*b4 - 20*a2*b6 + 4*b8)*ct2 + a4*b4;
  // k4 = (((a4 - a2 b2 + b4/2) ct2 - a2 b2/4) c k1/ 4 + (c2 ct2 - b2/4) a2 (a2 - b2/2) st/2) k2;
  const k4 = (((a4 - a2*b2 + b4/2)*ct2 - a2*b2/4)*c*k1/4 + (c2*ct2 - b2/4)*a2*(a2 - b2/2)*st/2)*k2;
  const k5 = (1/2)*(ct*a + b/2)*c2*(ct*a - b/2)*c*st*k1 + (a6 - (7*a4/4)*b2 + a2*b4 - b6/4)*ct2 - a4*b2/4 + 
      7*a2*b4/16 - b6/8;
  const k6 = -(a2 - b2/2)*c*st*k1 + (a4 - a2*b2)*ct2 - 2*a4 + 9*a2*b2/4 - b4/2;
  const k7 = (a4 - (4*a2/3)*b2 + b4/3)*ct2 + a2*b2/12;
  const k8 = ct2*a4 - 5*a2*b2/4 + b4/2;
 
  const P1 = [2*a2*ct/b, -Math.sqrt(4*a4 - 5*a2*b2 + b4)/b + 2*a2*st/b];
  P2 = [-16*a2*(k4 + ct*k5*b)/k3,
    (4*ct*a2*k6*b*k2 + 8*ct2*k8*c2*c*k1 - 12*a2*k7*b2*st)*b/k3];
  P3 = [-16*a2*(-k4 + ct*k5*b)/k3,
     (-4*ct*a2*k6*b*k2 + 8*ct2*k8*c2*c*k1 - 12*a2*k7*b2*st)*b/k3];

  const tri = [P1, P2, P3];
  return { o: tri, s: tri_sides(tri) };
}


