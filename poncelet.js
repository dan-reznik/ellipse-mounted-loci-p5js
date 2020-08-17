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
function get_envelope(a,tDeg,trilFn1,trilFn2,dt=0.0001) {
  let ons = orbit_normals(a, tDeg-0.5*dt);
  let ons_dt = orbit_normals(a, tDeg+0.5*dt);
  let p1=trilFn1(ons.o, ons.s);
  let p1_dt=trilFn1(ons_dt.o, ons_dt.s);
  let p2=trilFn2(ons.o, ons.s);
  let p2_dt=trilFn2(ons_dt.o, ons_dt.s);
  return inter_lines(p1,p2,p1_dt,p2_dt);
}

function get_Xn_orbit(a, tDeg, trilin_fn, tri_type) {
  let ons = orbit_normals(a, tDeg);
  let ons_derived = get_derived_tri(ons.o, ons.s, tri_type);
  return get_Xn_low(ons_derived.o, ons_derived.s, trilin_fn);
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

function get_Xn_non_billiard(a, tDeg, orbit_fn, trilin_fn, tri_type) {
  let ons = orbit_fn(a, tDeg);
  let ons_derived = get_derived_tri(ons.o, ons.s, tri_type);
  return get_Xn_low(ons_derived.o, ons_derived.s, trilin_fn);
}

function get_Xn_homothetic(a, tDeg, trilin_fn, tri_type) {
  return get_Xn_non_billiard(a, tDeg, orbit_homothetic, trilin_fn, tri_type);
}

function get_Xn_incircle(a, tDeg, trilin_fn, tri_type) {
  return get_Xn_non_billiard(a, tDeg, orbit_incircle, trilin_fn, tri_type);
}

function get_Xn_inellipse(a, tDeg, trilin_fn, tri_type) {
  return get_Xn_non_billiard(a, tDeg, orbit_inellipse, trilin_fn, tri_type);
}