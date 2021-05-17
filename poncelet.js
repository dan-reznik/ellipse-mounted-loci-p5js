// ELLIPTIC BILLIARD

function cos_alpha(a, x) {
  const a2 = a * a;
  const a4 = a2 * a2;
  const delta = sqrt(a4 - a2 + 1);
  const num = a2 * sqrt(2 * delta - a2 - 1);
  const denom = (a2 - 1) * sqrt(a4 - (a2 - 1) * x * x);
  return num / denom;
}

// ORBITS

function orbit_normals(a, tDeg) {
  const t = toRad(tDeg);
  const p1 = [a * Math.cos(t), Math.sin(-t)];
  const n1 = ell_norm(a, p1);
  const ca = cos_alpha(a, p1[0]);
  const sa = Math.sqrt(1 - ca * ca);
  const nrot = rotSinCos(n1, sa, ca);
  const nrotNeg = rotSinCos(n1, -sa, ca);
  const p2 = ellInterRay(a, p1, nrot);
  const p3 = ellInterRay(a, p1, nrotNeg);
  const n2 = ell_norm(a, p2);
  const n3 = ell_norm(a, p3);
  const obj = {
    o: [p1, p2, p3],
    n: [n1, n2, n3],
    s: tri_sides([p1, p2, p3])
  };
  return obj;
}

function orbit_excentral(a, tDeg) {
  const ons = orbit_normals(a,tDeg);
  const ts = excentral_triangle(ons.s);
  const exc = generic_triangle(ons.o,ons.s,ts);
  const obj = {
    o: exc,
    s: tri_sides(exc)
  };
  return obj;
}

// s = b*(delta-c^2)/a^3
function orbit_excentral_affine(a, tDeg) {
  const ons = orbit_normals(a,tDeg);
  const ts = excentral_triangle(ons.s);
  const exc = generic_triangle(ons.o,ons.s,ts);
  const b = 1;
  const d = getDelta(a,b);
  const c2 = a*a-b*b;
  const s = b*(d-c2)/(a*a*a);
  const exc_aff = exc.map(v=>[s*v[0],v[1]]);
  const obj = {
    o: exc_aff,
    s: tri_sides(exc_aff)
  };
  return obj;
}


// intersection of current P1P2(t) with P1P2(t+dt)
function get_envelope_trilin(a,tDeg,trilFn1,trilFn2,dt=0.0001) {
  const ons = orbit_normals(a, tDeg-0.5*dt);
  const ons_dt = orbit_normals(a, tDeg+0.5*dt);
  const p1=trilFn1(ons.o, ons.s);
  const p1_dt=trilFn1(ons_dt.o, ons_dt.s);
  const p2=trilFn2(ons.o, ons.s);
  const p2_dt=trilFn2(ons_dt.o, ons_dt.s);
  return inter_lines(p1,p2,p1_dt,p2_dt);
}

function get_side_envelope(a, tDeg, tri_fn, rot_n, eps = .01) {
  const bef = vec_rotate_left(tri_fn(a, tDeg - eps).o, rot_n);
  const aft = vec_rotate_left(tri_fn(a, tDeg + eps).o, rot_n);
  const inter = inter_rays(
    bef[0], vdiff(bef[1], bef[0]),
    aft[0], vdiff(aft[1], aft[0])
  );
  return inter;
}

function get_two_point_envelope(a, tDeg, tri_fn, bary_fn_1, bary_fn_2, eps = .01) {
  const ons_bef = tri_fn(a, tDeg - eps);
  const x1_bef = get_Xn_low_bary(ons_bef.o, ons_bef.s, bary_fn_1);
  const x2_bef = get_Xn_low_bary(ons_bef.o, ons_bef.s, bary_fn_2);

  const ons_aft = tri_fn(a, tDeg + eps);
  const x1_aft = get_Xn_low_bary(ons_aft.o, ons_aft.s, bary_fn_1);
  const x2_aft = get_Xn_low_bary(ons_aft.o, ons_aft.s, bary_fn_2);
  
  const inter = inter_rays(
    x1_bef, vdiff(x2_bef, x1_bef),
    x1_aft, vdiff(x2_aft, x1_aft)
  );
  //console.log(inter);
  return inter;
}

function get_v_x_envelope_low(a, tDeg, tri_fn, bary_fn_1, v, eps = .01) {
  const ons_bef = tri_fn(a, tDeg - eps);
  const v_bef = ons_bef.o[v];
  const x_bef = get_Xn_low_bary(ons_bef.o, ons_bef.s, bary_fn_1);

  const ons_aft = tri_fn(a, tDeg + eps);
  const v_aft = ons_aft.o[v];
  const x_aft = get_Xn_low_bary(ons_aft.o, ons_aft.s, bary_fn_1);
  
  const inter = inter_rays(
    v_bef, vdiff(x_bef, v_bef),
    v_aft, vdiff(x_aft, v_aft)
  );
  //console.log(inter);
  return inter;
}

const get_v1_x_envelope = (a, tDeg, tri_fn, bary_fn_1, bary_fn_2) => get_v_x_envelope_low(a, tDeg, tri_fn, bary_fn_1, 0);
const get_v2_x_envelope = (a, tDeg, tri_fn, bary_fn_1, bary_fn_2) => get_v_x_envelope_low(a, tDeg, tri_fn, bary_fn_1, 1);
const get_v3_x_envelope = (a, tDeg, tri_fn, bary_fn_1, bary_fn_2) => get_v_x_envelope_low(a, tDeg, tri_fn, bary_fn_1, 2);


function get_two_point_orthopole(a, tDeg, tri_fn, bary_fn_1, bary_fn_2) {
  const ons = tri_fn(a, tDeg);
  const x1 = get_Xn_low_bary(ons.o, ons.s, bary_fn_1);
  const x2 = get_Xn_low_bary(ons.o, ons.s, bary_fn_2);

  const feet_L = ons.o.map(v=>closest_perp(v,x1,x2));
  const tri_left = rotate_tri_left(ons.o);
  const tri_right = rotate_tri_right(ons.o);
  const feet_sides = feet_L.map((f,i)=>closest_perp(f,tri_left[i],tri_right[i]));
  
  const inter = inter_rays(
    feet_L[0], vdiff(feet_sides[0],feet_L[0]),
    feet_L[1], vdiff(feet_sides[1],feet_L[1]),
  );
  //console.log(inter);
  return inter;
}

function get_two_points(a, tDeg, tri_fn, bary_fn_1, bary_fn_2) {
  const ons = tri_fn(a, tDeg);
  const x1 = get_Xn_low_bary(ons.o, ons.s, bary_fn_1);
  const x2 = get_Xn_low_bary(ons.o, ons.s, bary_fn_2);
  return [x1,x2];
}

function get_orbit_derived(a,tDeg,orbit_fn,tri_type,cpn, pn,inv,inv_fn, mounting, circ) {
  const ons = orbit_fn(a, tDeg);
  const ons_derived = get_derived_tri(a, ons.o, ons.s, tri_type, cpn, pn, mounting);
  return inv == "tri"? invert_tri(ons_derived, inv_fn) :
  inv=="polar" ? polar_tri(ons_derived, inv_fn, circ, a, mounting) : ons_derived;
}

function get_Xn_poncelet(a, tDeg, orbit_fn, bary_fn, tri_type, cpn, pn, inv, inv_fn, locus_type, mounting, circ) {
  const ons_derived = get_orbit_derived(a,tDeg,orbit_fn,tri_type,cpn, pn,inv,inv_fn, mounting, circ);
  const caustic_n = locus_type in dict_caustic_n ? dict_caustic_n[locus_type] : -1;
  const tri_fn = (a0,tDeg0)=>get_orbit_derived(a0,tDeg0,orbit_fn,tri_type,cpn,pn,inv,inv_fn, mounting, circ);
  const xn = caustic_n>=0 ? get_side_envelope(a, tDeg, tri_fn,caustic_n) :
  locus_type in dict_two_point ? dict_two_point[locus_type](a, tDeg, tri_fn, bary_fn, get_fn_bary(pn)) :
    get_Xn_low_bary(ons_derived.o, ons_derived.s, bary_fn);
  return inv == "xn" ? inv_fn(ons_derived.o, ons_derived.s, xn) : xn;
}

function orbit_homothetic(a, tDeg) {
  const tri0 = regularPoly(3);
  const triRot = rotPoly(tri0, toRad(tDeg));
  const triScale = scalePoly(triRot, a, 1);
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


