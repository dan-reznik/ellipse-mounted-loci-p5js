// MATH UTILS
const clr_invert_ui = (rgb) => rgb.map(c => 255 - c)
const get_luminance = ([r, g, b]) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255.0;
// add last of array
if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
};

function arg_max(vs) {
  let imax = 0;
  let vmax = vs[0];
  for (let i = 1; i < vs.length; i++)
    if (vs[i] > vmax) {
      imax = i;
      vmax = vs[i];
    }
  return imax;
}

function arg_min(vs) {
  let imin = 0;
  let vmin = vs[0];
  for (let i = 1; i < vs.length; i++)
    if (vs[i] < vmin) {
      imin = i;
      vmin = vs[i];
    }
  return imax;
}

const toRad = (tDeg) => tDeg * PI / 180;
const toDeg = (tRad) => tRad * 180 / PI;
const negl = (v) => (Math.abs(v) < 1.0e-9);
const negl2 = (v) => (v * v < 1.0e-9);
const safe_div = (a, b) => negl(b) ? 0 : a / b;
const same_triple = ([v1, v2, v3]) => negl(v1 - v2) && negl(v2 - v3) && negl(v3 - v1);

const trunc_xy = ([x, y], digs) => [+(x.toFixed(digs)), +(y.toFixed(digs))];

const half_cos = (cosT) => Math.sqrt((1.0 + cosT) / 2);
const triple_cos = (cosT) => 4 * (cosT * cosT * cosT) - 3 * cosT;
const double_cos = (cosT) => 2 * cosT * cosT - 1;
const double_sin = (cosT, sinT) => 2 * cosT * sinT; // 2 sA c
const sqr = (v) => v * v;

const law_of_cosines = (a, b, c) => (b * b + c * c - a * a) / (2 * b * c);

function sum(v) {
  let acc = 0;
  for (let i = 0; i < v.length; i++)
    acc += v[i];
  return acc;
}

function avg(v) {
  return sum(v) / v.length;
}

function product(v) {
  let acc = 1;
  for (let i = 0; i < v.length; i++)
    acc *= v[i];
  return acc;
}

function sum_sqr(v) {
  let acc = 0;
  for (let i = 0; i < v.length; i++)
    acc += v[i] * v[i];
  return acc;
}

// avg of (x-avg)^2
function std_dev(v) {
  const v_avg = avg(v);
  return sum_sqr(v.map(v0 => v0 - v_avg)) / v.length;
}

function dot(v, u) {
  let acc = 0;
  for (let i = 0; i < v.length; i++)
    acc += v[i] * u[i];
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

const rotSinCos = ([x, y], st, ct) => [ct * x - st * y, st * x + ct * y];
const vrot = (v,th) => rotSinCos(v,Math.sin(th),Math.cos(th)) 

const vNaN = (p) => isNaN(p[0])||isNaN(p[1]);
const vdiff = (u, v) => [u[0] - v[0], u[1] - v[1]];
const vinv = (u) => [1/u[0],1/u[1]]; // u.map(u0=>1/u0);
const vscale = (u, s) => [u[0]*s, u[1]*s];
const vflipx = (u) => [-u[0],u[1]];
const vflipy = (u) => [u[0],-u[1]];
const vneg = (u) => [-u[1],-u[0]];
const vperp = (u) => [-u[1],u[0]];
const vperpNeg = (u) => [u[1],-u[0]];
const vscale_xy = (u, sx, sy) => [u[0]*sx, u[1]*sy];
const vsum = (u, v) => [u[0] + v[0], u[1] + v[1]];
const vrandom = (eps) => vscale([Math.random(),Math.random()],eps); 
const vnoise = (u,eps) => vsum(u,vrandom(eps));
//const vrot = (u) => [-u[1],u[0]]
const vsum3 = (u, v, w) => [u[0] + v[0] + w[0], u[1] + v[1] + w[1]];
const vmid = (u,v) => [(u[0] + v[0])/2, (u[1] + v[1])/2];
const magn2 = (p) => p[0] * p[0] + p[1] * p[1];
const magn = (p) => sqrt(magn2(p));
const vinterp = (p1,p2,t) => vsum(p1,vscale(vdiff(p2,p1),t));
const vray = (p,n,t) => vsum(p,vscale(n,t));
const vdot = (u,v) => u[0]*v[0]+u[1]*v[1];
const vcross = (u,v) => vdot(vperp(u),v);
const vccw = (u,v,w) => vcross(vdiff(v,u),vdiff(w,v))>0

function closest_perp(p, l1, l2) {
  const dl = vdiff(l2, l1);
  const s = safe_div(vdot(vdiff(p, l1), dl), magn2(dl));
  return vray(l1, dl, s);
}

function circle_inversion(p, { ctr, R }) {
  const dp = vdiff(p, ctr);
  const dp2 = vscale(dp, 1 / magn2(dp));
  return vsum(ctr, vscale(dp2, R * R));
}

const edist2 = (p1, p2) => magn2(vdiff(p1, p2));
const edist = (p1, p2) => Math.sqrt(edist2(p1, p2));
const vnorm = (p) => vscale(p,1/magn(p));

const tri_rev = ([p1,p2,p3]) => [p3,p2,p1];

function tri_sides([p1, p2, p3]) {
  let s1 = edist(p2, p3);
  let s2 = edist(p3, p1);
  let s3 = edist(p1, p2);
  return [s1, s2, s3];
}

function tri_sides_sqr([p1, p2, p3]) {
  let s1 = edist2(p2, p3);
  let s2 = edist2(p3, p1);
  let s3 = edist2(p1, p2);
  return [s1, s2, s3];
}

function tri_cosines([a, b, c]) {
  let x = law_of_cosines(a, b, c);
  let y = law_of_cosines(b, c, a);
  let z = law_of_cosines(c, a, b);
  return [x, y, z];
}

const det = ([[a, b], [c, d]]) => a * d - b * c;

function inter_lines([x1, y1], [x2, y2], [x3, y3], [x4, y4]) {
  let tnum = det([[x1 - x3, x3 - x4], [y1 - y3, y3 - y4]]);
  let tden = det([[x1 - x2, x3 - x4], [y1 - y2, y3 - y4]]);

  let t = tnum / tden;
  return [x1 + t * (x2 - x1), y1 + t * (y2 - y1)];
}

function cos_third(c) {
  // return ((c + I*s)^(-1/3) + (c + I s)^(1/3))/2;
  return Math.cos(Math.acos(c) / 3)
}

function cos_third_minus_2_pi(c) {
  // return ((c + I*s)^(-1/3) + (c + I s)^(1/3))/2;
  return Math.cos((Math.acos(c) - 2 * PI) / 3);
}

function cos_third_minus_4_pi(c) {
  // return ((c + I*s)^(-1/3) + (c + I s)^(1/3))/2;
  return Math.cos((Math.acos(c) - 4 * PI) / 3);
}

function sec_third(c) {
  // return ((c + I*s)^(-1/3) + (c + I s)^(1/3))/2;
  return 1 / cos_third(c);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function shuffle_seeded(arr, seed) {
  const r_fn = mulberry32(seed);
  let tmp;
  let new_arr = [...arr];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(r_fn() * i); // seeded random [0, i-1] 
    tmp = new_arr[i];
    new_arr[i] = new_arr[j];
    new_arr[j] = tmp;
  }
  return new_arr;
}

// fischer yates
function shuffle_old(old_arr) {
  let tmp;
  let arr = [...old_arr];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i); // random [0,i-1]
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function rand_ints(min, max, n) {
  let ints = [];
  for (let i = 0; i < n; i++)
    ints.push(min + Math.round(Math.random() * (max - min)));
  return ints;
}

const random32 = () => (Math.random() * 4294967296) >>> 0;


function mulberry32(a) {
  return function () {
    // bizarre lexical scoping: a is a static variable to this dynamically created function
    //console.log(a);
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

const get_det = ([[m11, m12], [m21, m22]]) => m11 * m22 - m21 * m12;

function inter_rays(p1, n1, p2, n2) {
  const m = [[n1[0], n2[0]], [n1[1], n2[1]]];
  const det = get_det(m);
  if (negl(det)) {
    console.log("inter_rays: parallel rays");
    return JSON.parse(JSON.stringify(p1)); //([0, 0]);
  } else {
    const b = vdiff(p2, p1);
    const m1 = [
      [b[0], m[0][1]],
      [b[1], m[1][1]]
    ];
    const sol = get_det(m1) / det;
    return vray(p1, n1, sol);
  }
}

function vec_rotate_left(v, n) {
  if (n == 0) return v;
  const l = v.length;
  return v.map((vi, i) => v[i + n >= l ? i + n - l : i + n]);
}

/*
circleInter[c1_, r1_, c2_, r2_] := Module[{d, x, y, chat},
   d = magn[c2 - c1];
   chat = (c2 - c1)/d;
   x = (d^2 - r2^2 + r1^2)/(2 d);
   y = Sqrt[r1^2 - x^2];
   {c1 + x chat + y perp[chat], c1 + x chat - y perp[chat]}];
*/

function circle_circle_inter(c1, r1, c2, r2) {
  const d = edist(c2, c1);
  const chat = vscale(vdiff(c2, c1), 1 / d);
  const x = (d * d - r2 * r2 + r1 * r1) / (2 * d);
  const y = Math.sqrt(r1 * r1 - x * x);
  const c1_add = vsum(c1, vscale(chat, x));
  const chat_scale = vscale(vperp(chat), y);
  const i1 = vsum(c1_add, chat_scale);
  const i2 = vdiff(c1_add, chat_scale);
  return [i1, y2]
}

function circle_circle_inter_rsqr(c1, r1_sqr, c2, r2_sqr) {
  const d = edist(c2, c1);
  const chat = vscale(vdiff(c2, c1), 1 / d);
  const x = (d * d - r2_sqr + r1_sqr) / (2 * d);
  const y = Math.sqrt(r1_sqr - x * x);
  const c1_add = vsum(c1, vscale(chat, x));
  const chat_scale = vscale(vperp(chat), y);
  const i1 = vsum(c1_add, chat_scale);
  const i2 = vdiff(c1_add, chat_scale);
  return [i1, i2]
}

function cartesian_prod(arr) {
  const res = [];
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      res.push([arr[i], arr[j]]);
  return res;
}

function cartesian_triples(arr) {
  const res = [];
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      for (let k = j + 1; k < arr.length; k++)
        res.push([arr[i], arr[j], arr[k]]);
  return res;
}

function cartesian_quads(arr) {
  const res = [];
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      for (let k = j + 1; k < arr.length; k++)
        for (let l = k + 1; l < arr.length; l++)
          res.push([arr[i], arr[j], arr[k], arr[l]]);
  return res;
}

function int_seq(min, max) {
  const arr = [];
  for (let i = min; i <= max; i++)
    arr.push(i);
  return (arr);
}