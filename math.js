// MATH UTILS

toRad = (tDeg) => tDeg * PI / 180;

triple_cos = (cosT) => 4*(cosT*cosT*cosT)-3*cosT;
double_cos = (cosT) => 2*cosT*cosT-1;
double_sin = (cosT,sinT) => 2*cosT*sinT; // 2 sA cA

law_of_cosines = (a,b,c) => (b*b+c*c-a*a)/(2*b*c);

function sum(v) {
  let acc=0;
  for(let i=0;i<v.length;i++)
    acc+=v[i];
  return acc;
}

function dot(v,u) {
  let acc=0;
  for(let i=0;i<v.length;i++)
    acc+=v[i]*u[i];
  return acc;
}

function quadRoots(a, b, c) {
  let det = sqrt(b * b - 4 * a * c);
  return [(-b - det) / (2 * a), (-b + det) / (2 * a)];
}

ray = (p0, phat, d) => [p0[0]+phat[0]*d, p0[1]+phat[1]*d];

function rotSinCos([x, y], st, ct) {
  return [ct * x - st * y, st * x + ct * y];
}

rot = (v,th) => rotSinCos(v,Math.sin(th),Math.cos(th)) 

vdiff = (u, v) => [u[0] - v[0], u[1] - v[1]];
vscale = (u, s) => [u[0]*s, u[1]*s];
vscale_xy = (u, sx, sy) => [u[0]*sx, u[1]*sy];
vsum = (u, v) => [u[0] + v[0], u[1] + v[1]];
vavg = (u,v) => [(u[0] + v[0])/2, (u[1] + v[1])/2];
magn2 = (p) => p[0] * p[0] + p[1] * p[1];
magn = (p) => sqrt(magn2(p));
vinterp = (p1,p2,t) => vsum(p1,vscale(vdiff(p2,p1),t))

function edist2(p1, p2) {
  d = vdiff(p1,p2);
  return magn2(d);
}

edist = (p1, p2) => sqrt(edist2(p1,p2));

function vnorm(p) {
  let m = magn(p);
  return vscale(p,1/m);
}

function tri_sides([p1,p2,p3]) {
  let s1 = edist(p2, p3);
  let s2 = edist(p3, p1);
  let s3 = edist(p1, p2);
  return [s1,s2,s3];
}

function tri_cosines([a,b,c]) {
  let x=law_of_cosines(a,b,c);
  let y=law_of_cosines(b,c,a);
  let z=law_of_cosines(c,a,b);
  return [x,y,z];
}

det = ([[a,b],[c,d]]) => a*d-b*c;

function inter_lines([x1,y1],[x2,y2],[x3,y3],[x4,y4]) {
  let tnum = det([[x1-x3,x3-x4],[y1-y3,y3-y4]]);
  let tden = det([[x1-x2,x3-x4],[y1-y2,y3-y4]]);

  let t = tnum/tden;
  return [x1+t*(x2-x1), y1+t*(y2-y1)];
}


