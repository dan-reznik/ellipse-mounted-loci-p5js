// MATH UTILS
clr_invert_ui = (rgb) => rgb.map(c=>255-c)

toRad = (tDeg) => tDeg * PI / 180;
toDeg = (tRad) => tRad * 180/ PI;
negl = (v) => (Math.abs(v)<1.0e-9);

trunc_xy = ([x,y],digs) => [+(x.toFixed(digs)),+(y.toFixed(digs))];

half_cos = (cosT) => Math.sqrt((1.0+cosT)/2);
triple_cos = (cosT) => 4*(cosT*cosT*cosT)-3*cosT;
double_cos = (cosT) => 2*cosT*cosT-1;
double_sin = (cosT,sinT) => 2*cosT*sinT; // 2 sA c
sqr = (v) => v*v;

law_of_cosines = (a,b,c) => (b*b+c*c-a*a)/(2*b*c);

function sum(v) {
  let acc=0;
  for(let i=0;i<v.length;i++)
    acc+=v[i];
  return acc;
}

function sum_sqr(v) {
  let acc=0;
  for(let i=0;i<v.length;i++)
    acc+=v[i]*v[i];
  return acc;
}


function dot(v,u) {
  let acc=0;
  for(let i=0;i<v.length;i++)
    acc+=v[i]*u[i];
  return acc;
}

function quadRoots(a, b, c) {
  let discr2 = b * b - 4 * a * c;
  if (discr2 < 0) {
    console.log("quadRoots: negative discriminant!");
    return [0, 0];
  } else {
    let discr = Math.sqrt(discr2);
    return [(-b - discr) / (2 * a), (-b + discr) / (2 * a)];
  }
}

ray = (p0, phat, d) => [p0[0]+phat[0]*d, p0[1]+phat[1]*d];

function rotSinCos([x, y], st, ct) {
  return [ct * x - st * y, st * x + ct * y];
}

rot = (v,th) => rotSinCos(v,Math.sin(th),Math.cos(th)) 

vNaN = (p) => isNaN(p[0])||isNaN(p[1]);
vdiff = (u, v) => [u[0] - v[0], u[1] - v[1]];
vscale = (u, s) => [u[0]*s, u[1]*s];
vscale_xy = (u, sx, sy) => [u[0]*sx, u[1]*sy];
vsum = (u, v) => [u[0] + v[0], u[1] + v[1]];
vrot = (u) => [-u[1],u[0]]
vsum3 = (u, v, w) => [u[0] + v[0] + w[0], u[1] + v[1] + w[1]];
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

function cos_third(c) {
  // return ((c + I*s)^(-1/3) + (c + I s)^(1/3))/2;
  return Math.cos(Math.acos(c)/3)
 }

 function cos_third_minus_2_pi(c) {
  // return ((c + I*s)^(-1/3) + (c + I s)^(1/3))/2;
  return Math.cos((Math.acos(c)-2*PI)/3);
 }

 function cos_third_minus_4_pi(c) {
  // return ((c + I*s)^(-1/3) + (c + I s)^(1/3))/2;
  return Math.cos((Math.acos(c)-4*PI)/3);
 }

 function sec_third(c) {
  // return ((c + I*s)^(-1/3) + (c + I s)^(1/3))/2;
  return 1/cos_third(c);
 }