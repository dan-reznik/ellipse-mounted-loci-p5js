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
