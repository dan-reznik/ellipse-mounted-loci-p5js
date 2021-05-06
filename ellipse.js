const in_ell = (a, b, [px, py]) => (px * px) / (a * a) + (py * py) / (b * b) < 1;

function ellInterRay(a, [x, y], [nx, ny]) {
  const a2 = a * a;
  const c2 = nx * nx + a2 * ny * ny;
  const c1 = 2 * (nx * x + a2 * ny * y);
  const c0 = x * x + a2 * y * y - a2;
  const ss = quadRoots(c2, c1, c0);
  return vray([x, y], [nx, ny], ss[1]);
}

function ellInterRayBoth(a, [x, y], [nx, ny]) {
  const a2 = a * a;
  const c2 = nx * nx + a2 * ny * ny;
  const c1 = 2 * (nx * x + a2 * ny * y);
  const c0 = x * x + a2 * y * y - a2;
  const ss = quadRoots(c2, c1, c0);
  return [vray([x, y], [nx, ny], ss[1]),
  vray([x, y], [nx, ny], ss[0])];
}

function ellInterRayb(a, b, [x, y], [nx, ny]) {
  const a2 = a * a, b2 = b * b;
  const c2 = b2 * nx * nx + a2 * ny * ny;
  const c1 = 2 * (b2 * nx * x + a2 * ny * y);
  const c0 = b2 * x * x + a2 * y * y - a2 * b2;
  const ss = quadRoots(c2, c1, c0);
  return vray([x, y], [nx, ny], ss[1]);
}

function ellInterRaybBoth(a, b, [x, y], [nx, ny]) {
  const a2 = a * a, b2 = b * b;
  const c2 = b2 * nx * nx + a2 * ny * ny;
  const c1 = 2 * (b2 * nx * x + a2 * ny * y);
  const c0 = b2 * x * x + a2 * y * y - a2 * b2;
  const ss = quadRoots(c2, c1, c0);
  return ss.map(s => vray([x, y], [nx, ny], s));
}

function circleInterRay(ctr, R, p, phat) {
  const is = ellInterRaybBoth(R, R, vdiff(p, ctr), phat);
  return is.map(i => vsum(i, ctr));
}

function farthestPoint(ps, p0) {
  const ds = ps.map(p => edist2(p, p0));
  const imax = arg_max(ds);
  return ps[imax];
}

function collinear_endpoints(ps) {
  const ps_sort = ps.slice().sort((a, b) => a[0] - b[0]);
  return [ps_sort[0], ps_sort[2]];
}

function ell_norm(a, [x, y]) {
  return vnorm([-x, -y * a * a]);
}

function ellTangentsb(a, b, [px, py]) {
  const a2 = a * a, b2 = b * b, px2 = px * px, py2 = py * py;
  const px3 = px * px2; py3 = py * py2;
  const denomx = b2 * px2 + a2 * py2;
  const denomy = b2 * px2 * py + a2 * py3;
  const radicand = b2 * px2 + a2 * (py2 - b2);
  const numFact = Math.sqrt(radicand) * py;
  // 1st tang is CW, 2nd is CCW
  return [
    [a2 * (b2 * px + numFact) / denomx, b2 * (a2 * py2 - px * numFact) / denomy],
    [a2 * (b2 * px - numFact) / denomx, b2 * (a2 * py2 + px * numFact) / denomy]
  ];
}