const tri_fns_dict = {
  // reference        : reference_triangle,
  excentral: excentral_triangle,
  medial: medial_triangle,
  anticompl: anticompl_triangle,
  orthic: orthic_triangle,
  intouch: intouch_triangle,
  extouch: extouch_triangle,
  tangential: tangential_triangle,
  tangentialmidarc: tangential_midarc_triangle,
  extangents: extangents_triangle,
  intangents: intangents_triangle,
  euler: euler_triangle,
  halfaltitude: halfaltitude_triangle,
  hexyl: hexyl_triangle,
  feuerbach: feuerbach_triangle,
  symmedial: symmedial_triangle,
  circumorthic: circumorthic_triangle,
  circummedial: circummedial_triangle,
  circummidarc: circummidarc_triangle,
  morley1: first_morley_adjunct_triangle,
  morley2: second_morley_adjunct_triangle,
  morley3: third_morley_adjunct_triangle,
  incentral: incentral_triangle,
  fuhrmann: fuhrmann_triangle,
  macbeath: macbeath_triangle,
  steiner: steiner_triangle,
  lemoine: lemoine_triangle,
  johnson: johnson_triangle,
  bci: bci_triangle,
  yffcontact: yffcontact_triangle,
  yffcentral: yffcentral_triangle,
  reflection: reflection_triangle,
  brocard1: first_brocard_triangle,
  brocard2: second_brocard_triangle,
  brocard3: third_brocard_triangle,
  brocard4: fourth_brocard_triangle,
  brocard5: fifth_brocard_triangle,
  brocard6: sixth_brocard_triangle,
  brocard7: seventh_brocard_triangle,
  neuberg1: first_neuberg_triangle,
  neuberg2: second_neuberg_triangle,
  outervecten: outer_vecten_triangle,
  innervecten: inner_vecten_triangle,
  mixtilinear: mixtilinear_triangle,
  lucascentral: lucas_central_triangle,
  lucasinner: lucas_inner_triangle,
  lucastangents: lucas_tangents_triangle
};

const tri_pfns_dict = {
  // reference        : reference_triangle,
  cevian: cevian_triangle,
  anticevian: anticevian_triangle,
  circumcevian: circumcevian_triangle,
  pedal: pedal_triangle,
  antipedal: antipedal_triangle,
  tripolar: cevian_triangle
};

const tri_fns_inv_dict = {
  inv_f1: {fn:circle_f1,caustic:false},
  inv_f1c: {fn:circle_f1c,caustic:true},
  inv_f2: {fn:circle_f2,caustic:false},
  inv_ctr: {fn:circle_ctr,caustic:false}
};

const tri_fns_cremona_dict = {
  crem_f1: cremona_f1,
  crem_f2: cremona_f2,
  crem_ctr: cremona_ctr
};

function rotate_tri_left([p1, p2, p3]) {
  return [p2, p3, p1];
}

function get_semiperimeter(sides) {
  return 0.5 * sum(sides);
}

function tri_area2([a, b, c]) {
  const s = get_semiperimeter([a, b, c]);
  return s * (s - a) * (s - b) * (s - c);
}

const tri_area = (sides) => Math.sqrt(tri_area2(sides));

function get_inradius(sides) {
  const area = tri_area(sides);
  const s = get_semiperimeter(sides);
  return area / s;
}

function get_circumradius(sides) {
  const abc = product(sides);
  const r = get_inradius(sides);
  const s = get_semiperimeter(sides);
  return abc / (4 * r * s);
}

function cot_omega(sides) {
  const area = tri_area(sides);
  const l2 = sum_sqr(sides);
  return l2 / (4 * area);
}

function sin2_omega([a, b, c]) {
  const area2 = tri_area2([a, b, c]);
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const denom = a2 * b2 + b2 * c2 + c2 * a2;
  return 4 * area2 / denom;
}

const omega_e2 = (sides) => 1 - 4 * sin2_omega(sides);
const omega_e = (sides) => Math.sqrt(omega_e2(sides));

function get_conway([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const area = tri_area([a, b, c]);
  const S = 2 * area;
  const Sa = (b2 + c2 - a2) / 2;
  const Sb = (c2 + a2 - b2) / 2;
  const Sc = (a2 + b2 - c2) / 2;
  const Sw = (a2 + b2 + c2) / 2;
  return { area: area, S: S, Sa: Sa, Sb: Sb, Sc: Sc, Sw: Sw };
}

function rotate_tri_right([p1, p2, p3]) {
  return [p3, p1, p2];
}

function get_tri_centroid([v1, v2, v3]) {
  return [(v1[0] + v2[0] + v3[0]) / 3, (v1[1] + v2[1] + v3[1]) / 3];
}

function generic_triangle(orbit, sides, ts) {
  return ts.map(t => trilin_to_cartesian(orbit, sides, t));
}

function cevian_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [0, beta, gamma];
  const t2 = [alpha, 0, gamma];
  const t3 = [alpha, beta, 0];
  return [t1, t2, t3];
}

function anticevian_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [-alpha, beta, gamma];
  const t2 = [alpha, -beta, gamma];
  const t3 = [alpha, beta, -gamma];
  return [t1, t2, t3];
}

function circumcevian_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [-a * beta * gamma, (b * gamma + c * beta) * beta, (b * gamma + c * beta) * gamma];
  const t2 = [(c * alpha + a * gamma) * alpha, -b * gamma * alpha, (c * alpha + a * gamma) * gamma];
  const t3 = [(a * beta + b * alpha) * alpha, (a * beta + b * alpha) * beta, -c * alpha * beta];
  return [t1, t2, t3];
}

function pedal_triangle([a, b, c], [alpha, beta, gamma]) {
  const cA = law_of_cosines(a, b, c);
  const cB = law_of_cosines(b, c, a);
  const cC = law_of_cosines(c, a, b);
  const t1 = [0, beta + alpha * cC, gamma + alpha * cB];
  const t2 = [alpha + beta * cC, 0, gamma + beta * cA];
  const t3 = [alpha + gamma * cB, beta + gamma * cA, 0];
  return [t1, t2, t3];  //   generic_triangle(orbit,[a,b,c],[t1,t2,t3]);
}

function antipedal_triangle([a, b, c], [alpha, beta, gamma]) {
  const cA = law_of_cosines(a, b, c);
  const cB = law_of_cosines(b, c, a);
  const cC = law_of_cosines(c, a, b);

  const t1 = [-(cC * alpha + beta) * (cB * alpha + gamma), (alpha + cC * beta) * (cB * alpha + gamma), (cC * alpha + beta) * (alpha + cB * gamma)];
  const t2 = [(cC * alpha + beta) * (cA * beta + gamma), -(alpha + cC * beta) * (cA * beta + gamma), (alpha + cC * beta) * (beta + cA * gamma)];
  const t3 = [(cB * alpha + gamma) * (beta + cA * gamma), (cA * beta + gamma) * (alpha + cB * gamma), -(beta + cA * gamma) * (alpha + cB * gamma)];
  return [t1, t2, t3];  //   generic_triangle(orbit,[a,b,c],[t1,t2,t3]);
}

function reference_triangle(sides) {
  const ts = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  //  return generic_triangle(orbit,sides,ts);
  return ts;
}

function excentral_triangle(sides) {
  const ts = [[-1, 1, 1], [1, -1, 1], [1, 1, -1]];
  //  return generic_triangle(orbit,sides,ts);
  return ts;
}

function medial_triangle([a, b, c]) {
  const ts = [[0, 1 / b, 1 / c], [1 / a, 0, 1 / c], [1 / a, 1 / b, 0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function incentral_triangle(sides) {
  const ts = [[0, 1, 1], [1, 0, 1], [1, 1, 0]];
  return ts; // generic_triangle(orbit,sides,ts);
}

function anticompl_triangle([a, b, c]) {
  const ts = [[-1 / a, 1 / b, 1 / c], [1 / a, -1 / b, 1 / c], [1 / a, 1 / b, -1 / c]];
  return ts; //generic_triangle(orbit,[a,b,c],ts);
}

function orthic_triangle(sides) {
  const [cA, cB, cC] = tri_cosines(sides);
  /* can and will overflow */
  const secA = 1 / cA, secB = 1 / cB, secC = 1 / cC;
  const ts = [[0, secB, secC],
  [secA, 0, secC],
  [secA, secB, 0]];
  return ts; // generic_triangle(orbit,sides,ts);
}

function extouch_triangle([a, b, c]) {
  const ts = [[0, (a - b + c) / b, (a + b - c) / c],
  [(-a + b + c) / a, 0, (a + b - c) / c],
  [(-a + b + c) / a, (a - b + c) / b, 0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function intouch_triangle([a, b, c]) {
  const ts = [[0, (a * c) / (a - b + c), (a * b) / (a + b - c)],
  [(b * c) / (b - a + c), 0, (a * b) / (a + b - c)],
  [(b * c) / (b - a + c), (a * c) / (a - b + c), 0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function tangential_triangle([a, b, c]) {
  const ts = [[-a, b, c], [a, -b, c], [a, b, -c]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

// http://mathworld.wolfram.com/ExtangentsTriangle.html
function extangents_triangle(sides) {
  const [x, y, z] = tri_cosines(sides);
  const ts = [
    [-x - 1, x + z, x + y],
    [y + z, -y - 1, y + x],
    [z + y, z + x, -z - 1]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

function hexyl_triangle(sides) {
  const [x, y, z] = tri_cosines(sides);
  const diag = x + y + z - 1;
  const v1 = x + y - z - 1;
  const v2 = x - y + z - 1;
  const v3 = -x + y + z - 1;
  const ts = [
    [diag, v1, v2],
    [v1, diag, v3],
    [v2, v3, diag]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

// http://mathworld.wolfram.com/EulerTriangle.html
function euler_triangle(sides) {
  const [cA, cB, cC] = tri_cosines(sides);
  const sA = Math.sqrt(1 - cA * cA);
  const sB = Math.sqrt(1 - cB * cB)
  const sC = Math.sqrt(1 - cC * cC);
  const x = sA / cA, y = sB / cB, z = sC / cC;
  const ts = [
    [2 * x + y + z, sA / cB, sA / cC],
    [sB / cA, x + 2 * y + z, sB / cC],
    [sC / cA, sC / cB, x + y + 2 * z]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

function feuerbach_triangle(sides) {
  const [cA, cB, cC] = tri_cosines(sides);
  const sA = Math.sqrt(1 - cA * cA);
  const sB = Math.sqrt(1 - cB * cB)
  const sC = Math.sqrt(1 - cC * cC);

  const f11 = /* -s2[(b-c)/2] = [cos(b-c)-1]/2 */ (cB * cC + sB * sC - 1) / 2;
  const f22 = /* -s2[(c-a)/2] = [cos(c-a)-1]/2 */ (cC * cA + sC * sA - 1) / 2;
  const f33 = /* -s2[(a-b)/2] = [cos(a-b)-1]/2 */ (cA * cB + sA * sB - 1) / 2;
  const f21 = /*  c2[(b-c)/2] = [cos(b-c)+1]/2 */ (cB * cC + sB * sC + 1) / 2;
  const f12 = /*  c2[(c-a)/2] = [cos(c-a)+1]/2 */ (cC * cA + sC * sA + 1) / 2;
  const f13 = /*  c2[(a-b)/2] = [cos(a-b)+1]/2 */ (cA * cB + sA * sB + 1) / 2;

  const ts = [[f11, f12, f13],
  [f21, f22, f13],
  [f21, f12, f33]];

  return ts; // generic_triangle(orbit,sides,ts);
}

function macbeath_triangle([a, b, c]) {
  const [cA, cB, cC] = tri_cosines([a, b, c]);
  const ts = [[0, c * c * cC / cB, b * b],
  [c * c, 0, a * a * cA / cC],
  [b * b * cB / cA, a * a, 0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function reflection_triangle([a, b, c]) {
  const [cA, cB, cC] = tri_cosines([a, b, c]);
  const ts = [[-1, 2 * cC, 2 * cB],
  [2 * cC, -1, 2 * cA],
  [2 * cB, 2 * cA, -1]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function steiner_triangle([a, b, c]) {
  const ba2 = b * b - a * a;
  const ac2 = a * a - c * c;
  const cb2 = c * c - b * b;
  const ts = [[0, ba2 * c, b * ac2], [ba2 * c, 0, a * cb2], [-b * ac2, -a * cb2, 0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function first_brocard_triangle([a, b, c]) {
  const a3 = a * a * a, b3 = b * b * b, c3 = c * c * c;
  const abc = a * b * c;
  const ts = [[abc, c3, b3], [c3, abc, a3], [b3, a3, abc]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function second_brocard_triangle([a, b, c]) {
  const [cA, cB, cC] = tri_cosines([a, b, c]);
  const ab = a * b, ac = a * c, bc = b * c;
  const ts = [[2 * b * c * cA, ab, ac], [ab, 2 * a * c * cB, bc], [ac, bc, 2 * a * b * cC]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function third_brocard_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const a3 = a * a2, b3 = b * b2, c3 = c * c2;
  const ts = [
    [b2 * c2, a * b3, a * c3],
    [a3 * b, a2 * c2, b * c3],
    [a3 * c, b3 * c, a2 * b2]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function fourth_brocard_triangle([a, b, c]) {
  const [cA, cB, cC] = tri_cosines([a, b, c]);
  const ts = [[a / cA, 2 * c, 2 * b], [2 * c, b / cB, 2 * a], [2 * b, 2 * a, c / cC]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

// https://bernard-gibert.pagesperso-orange.fr/gloss/brocardtriangles.html
// A5 = (a^2b^2 + a^2c^2 + b^2c^2 + b^4 + c^4 : - b^4 : - c^4).
function fifth_brocard_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const a3 = a * a2, b3 = b * b2, c3 = c * c2;
  const a4 = a2 * a2, b4 = b2 * b2, c4 = c2 * c2;
  const ts = [
    [(a2 * b2 + a2 * c2 + b2 * c2 + b4 + c4) / a, -b3, -c3],
    [-a3, (b2 * c2 + b2 * a2 + c2 * a2 + c4 + a4) / b, -c3],
    [-a3, -b3, (c2 * a2 + c2 * b2 + a2 * b2 + a4 + b4) / c]
  ];
  return ts;
}

// A6 = (a^2b^2 + a^2c^2 - b^2c^2 : - b^4 + c^4 + b^2c^2 : b^4 - c^4 + b^2c^2)
function sixth_brocard_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const a3 = a * a2, b3 = b * b2, c3 = c * c2;
  const a4 = a2 * a2, b4 = b2 * b2, c4 = c2 * c2;
  const ts = [
    [(a2 * b2 + a2 * c2 - b2 * c2) / a, (-b4 + c4 + b2 * c2) / b, (b4 - c4 + b2 * c2) / c],
    [(c4 - a4 + c2 * a2) / a, (b2 * c2 + b2 * a2 - c2 * a2) / b, (-c4 + a4 + c2 * a2) / c],
    [(-a4 + b4 + a2 * b2) / a, (a4 - b4 + a2 * b2) / b, (c2 * a2 + c2 * b2 - a2 * b2) / c]
  ];
  return ts;
}

// intersections of cevians thru X3 w brocard circle
// invented by D Reznik and P Moses 12-sept-2020
function seventh_brocard_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const a4 = a2 * a2, b4 = b2 * b2, c4 = c2 * c2;
  const ts = [
    [(a4 + b4 + c4 - 2 * b2 * c2) / a, b * (a2 - b2 + c2), c * (a2 + b2 - c2)],
    [a * (b2 + c2 - a2), (b4 + c4 + a4 - 2 * c2 * a2) / b, c * (b2 - c2 + a2)],
    [a * (c2 - a2 + b2), b * (c2 + a2 - b2), (c4 + a4 + b4 - 2 * a2 * b2) / c]
  ];
  return ts;
}

// 9th -- Brocard triangle. Barycentrics are given by
//A* = -((a^2 + b^2 - c^2)*(a^2 - b^2 + c^2)) : 2*a^2*(a^2 + b^2 - c^2) : 2*a^2*(a^2 - b^2 + c^2)
//B* = 2*b^2*(a^2 + b^2 - c^2) : -((a^2 + b^2 - c^2)*(-a^2 + b^2 + c^2)) : 2*b^2*(-a^2 + b^2 + c^2)
//C* = 2*c^2*(a^2 - b^2 + c^2) : 2*c^2*(-a^2 + b^2 + c^2) : -((a^2 - b^2 + c^2)*(-a^2 + b^2 + c^2))

function first_neuberg_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const abc = a * b * c;
  const abc2 = a2 + b2 + c2;
  const kmid = abc * abc2;
  const a4 = a2 * a2, b4 = b2 * b2, c4 = c2 * c2;
  const bc2 = sqr(b * c), ca2 = sqr(a * c), ba2 = sqr(b * a);
  const k1 = c * (-a4 + ca2 - b4 + bc2);
  const k2 = b * (-a4 + ba2 - c4 + bc2);
  const k3 = a * (-b4 + ba2 - c4 + ca2);
  const ts = [[kmid, k1, k2],
  [k1, kmid, k3],
  [k2, k3, kmid]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function second_neuberg_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const abc = a * b * c;
  const abc2 = a2 + b2 + c2;
  const kmid = abc * abc2;
  const a4 = a2 * a2, b4 = b2 * b2, c4 = c2 * c2;
  const bc2 = sqr(b * c), ca2 = sqr(a * c), ba2 = sqr(b * a);
  const k1 = c * (c4 - ca2 - bc2 - 2 * ba2);
  const k2 = b * (b4 - ba2 - bc2 - 2 * ca2);
  const k3 = a * (a4 - ba2 - ca2 - 2 * bc2);
  const ts = [[kmid, k1, k2],
  [k1, kmid, k3],
  [k2, k3, kmid]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function intangents_triangle(sides) {
  const [cA, cB, cC] = tri_cosines(sides);
  const ts = [[1 + cA, cA - cC, cA - cB],
  [cB - cC, 1 + cB, cB - cA],
  [cC - cB, cC - cA, 1 + cC]];
  return ts; // generic_triangle(orbit,sides,ts);
}

function lemoine_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const d1 = -2 * a2 + b2 - 2 * c2;
  const d2 = a2 - 2 * b2 - 2 * c2;
  const d3 = -2 * a2 - 2 * b2 + c2;
  const ts = [
    [0, (a * c) / d1, (a * b) / d3],
    [(b * c) / d2, 0, (a * b) / d3],
    [(b * c) / d2, (a * c) / d1, 0]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

// http://mathworld.wolfram.com/SymmedialTriangle.html
function symmedial_triangle([a, b, c]) {
  const ts = [[0, b, c], [a, 0, c], [a, b, 0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function bci_triangle([a, b, c]) {
  const cs = tri_cosines([a, b, c]);
  const [cha, chb, chc] = cs.map(half_cos);
  const ts = [
    [1, 1 + 2 * chc, 1 + 2 * chb],
    [1 + 2 * chc, 1, 1 + 2 * cha],
    [1 + 2 * chb, 1 + 2 * cha, 1]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function circumorthic_triangle([a, b, c]) {
  // x,y,z should be secants and not cos as in
  // https://mathworld.wolfram.com/Circum-OrthicTriangle.html
  const [x, y, z] = tri_cosines([a, b, c]).map(c0=>1/c0);
  const ts = [
    [-a * y * z, (b * z + c * y) * y, (b * z + c * y) * z],
    [(c * x + a * z) * x, -b * z * x, (c * x + a * z) * z],
    [(a * y + b * x) * x, (a * y + b * x) * y, -c * x * y]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function circummedial_triangle([a, b, c]) {
  //const abc = a * b * c;
  //const ab2 = sqr(a * a + b * b);
  //const bc2 = sqr(b * b + c * c);
  //const ca2 = sqr(c * c + a * a);
  //const ts = [
  //  [-abc, c * bc2, b * bc2],
  //  [c * ca2, -abc, a * ca2],
  //  [b * ab2, a * ab2, -abc]
  //];
  const [x, y, z] = [a,b,c].map(c0=>1/c0);
  const ts = [
    [-a * y * z, (b * z + c * y) * y, (b * z + c * y) * z],
    [(c * x + a * z) * x, -b * z * x, (c * x + a * z) * z],
    [(a * y + b * x) * x, (a * y + b * x) * y, -c * x * y]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function circummidarc_triangle([a, b, c]) {
  const ts = [[-a, b + c, b + c], [a + c, -b, a + c], [a + b, a + b, -c]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function fuhrmann_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;

  const ts = [
    [a, (-a2 + c2 + b * c) / b, (-a2 + b2 + b * c) / c],
    [(-b2 + c2 + a * c) / a, b, (a2 - b2 + a * c) / c],
    [(b2 - c2 + a * b) / a, (a2 - c2 + a * b) / b, c]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

/*
{
  {0, safeDiv[a c, c - a], safeDiv[a b, a - b]},(* 
   error in mathworld http://mathworld.wolfram.com/
   YffContactTriangle.html which shows this as {0,ac/(c-a),ab/(b- a)}*)
   {safeDiv[b c, b - c], 0, safeDiv[a b, a - b]},
   {safeDiv[b c, b - c], safeDiv[a c, c - a], 0}}];
   */

function yffcontact_triangle([a, b, c]) {
  const ts = [
    [0, (a * c) / (c - a), (a * b) / (a - b)],
    [(b * c) / (b - c), 0, (a * b) / (a - b)],
    [(b * c) / (b - c), (a * c) / (c - a), 0]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function yffcentral_triangle(sides) {
  const cs = tri_cosines(sides);
  const [x, y, z] = cs.map(half_cos);
  const ts = [
    [y * z, z * (x + z), y * (x + y)],
    [z * (y + z), z * x, x * (y + x)],
    [y * (z + y), x * (z + x), x * y]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

function tangential_midarc_triangle(sides) {
  const cs = tri_cosines(sides);
  const [x, y, z] = cs.map(half_cos);
  const ts = [
    [-y * z, z * (z + x), y * (y + x)],
    [z * (z + y), -z * x, x * (x + y)],
    [y * (y + z), x * (x + z), -y * x]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

function halfaltitude_triangle(sides) {
  const [cA, cB, cC] = tri_cosines(sides);
  const ts = [
    [1, cC, cB], [cC, 1, cA], [cB, cA, 1]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

function johnson_triangle([a, b, c]) {
  const abc = a * b * c;
  const conway = get_conway([a, b, c]);
  const s2 = conway.S * conway.S;
  const kac = s2 + conway.Sa * conway.Sc;
  const kab = s2 + conway.Sa * conway.Sb;
  const kbc = s2 + conway.Sb * conway.Sc;
  const ts = [
    [-abc * conway.Sa, c * kac, b * kab],
    [c * kbc, -abc * conway.Sb, a * kab],
    [b * kbc, a * kac, -abc * conway.Sc]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function lucas_central_triangle([a, b, c]) {
  const cwy = get_conway([a, b, c]);
  const ts = [
    [a * (2 * cwy.S + cwy.Sa), b * cwy.Sb, c * cwy.Sc],
    [a * cwy.Sa, b * (2 * cwy.S + cwy.Sb), c * cwy.Sc],
    [a * cwy.Sa, b * cwy.Sb, c * (2 * cwy.S + cwy.Sc)]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function lucas_inner_triangle([a, b, c]) {
  const cwy = get_conway([a, b, c]);
  const ts = [
    [a * (4 * cwy.Sa + 3 * cwy.S), 2 * b * (2 * cwy.Sb + cwy.S), 2 * c * (2 * cwy.Sc + cwy.S)],
    [2 * a * (2 * cwy.Sa + cwy.S), b * (4 * cwy.Sb + 3 * cwy.S), 2 * c * (2 * cwy.Sc + cwy.S)],
    [2 * a * (2 * cwy.Sa + cwy.S), 2 * b * (2 * cwy.Sb + cwy.S), c * (4 * cwy.Sc + 3 * cwy.S)]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function lucas_tangents_triangle([a, b, c]) {
  const [cA, cB, cC] = tri_cosines([a, b, c]);
  const abc = a * b * c;
  const area2 = 2 * tri_area([a, b, c]);
  const v1 = a * (area2 + b * c * cA);
  const v2 = c * (area2 + a * b * cC);
  const v3 = b * (area2 + a * c * cB);
  const ts = [
    [abc * cA, v3, v2],
    [v1, abc * cB, v2],
    [v1, v3, abc * cC]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

/*
firstMorleyTriangle[orbit_, {a_, b_, c_}] := Module[{cs, cs3},
   cs = lawOfCosines3[a, b, c];
   cs3 = cosThird /@ cs;
   trilinearMatrixToCartesian[orbit, {a, b, c},
    {{1, 2 cs3[[3]], 2 cs3[[2]]},
     {2 cs3[[3]], 1, 2 cs3[[1]]},
     {2 cs3[[2]], 2 cs3[[1]], 1}}]];
*/
function first_morley_triangle(sides) {
  const cs = tri_cosines(sides);
  const c3 = cs.map(cos_third);
  const ts = [
    [1, 2 * c3[2], 2 * c3[1]],
    [2 * c3[2], 1, 2 * c3[0]],
    [2 * c3[1], 2 * c3[0], 1]];
  return ts; // generic_triangle(orbit,sides,ts);
}

function first_morley_adjunct_triangle(sides) {
  const cs = tri_cosines(sides);
  const cs3 = cs.map(c => 1 / cos_third(c));
  const ts = [
    [2, cs3[2], cs3[1]],
    [cs3[2], 2, cs3[0]],
    [cs3[1], cs3[0], 2]];
  return ts; // generic_triangle(orbit,sides,ts);
}

function second_morley_adjunct_triangle(sides) {
  const cs = tri_cosines(sides);
  const cs3 = cs.map(c => 1 / cos_third_minus_2_pi(c));
  const ts = [
    [2, cs3[2], cs3[1]],
    [cs3[2], 2, cs3[0]],
    [cs3[1], cs3[0], 2]];
  return ts; // generic_triangle(orbit,sides,ts);
}

function third_morley_adjunct_triangle(sides) {
  const cs = tri_cosines(sides);
  const cs3 = cs.map(c => 1 / cos_third_minus_4_pi(c));
  const ts = [
    [2, cs3[2], cs3[1]],
    [cs3[2], 2, cs3[0]],
    [cs3[1], cs3[0], 2]];
  return ts; // generic_triangle(orbit,sides,ts);   
}

function outer_vecten_triangle([a, b, c]) {
  const [cA, cB, cC] = tri_cosines([a, b, c]);
  const [sA, sB, sC] = [cA, cB, cC].map(c => Math.sqrt(1 - c * c));
  const ts = [
    [-a / 2, a * (sC + cC) / 2, a * (sB + cB) / 2],
    [b * (sC + cC) / 2, -b / 2, b * (sA + cA) / 2],
    [c * (sB + cB) / 2, c * (sA + cA) / 2, -c / 2]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function inner_vecten_triangle([a, b, c]) {
  const [cA, cB, cC] = tri_cosines([a, b, c]);
  const [sA, sB, sC] = [cA, cB, cC].map(c => Math.sqrt(1 - c * c));
  const ts = [
    [a / 2, a * (sC - cC) / 2, a * (sB - cB) / 2],
    [b * (sC - cC) / 2, b / 2, b * (sA - cA) / 2],
    [c * (sB - cB) / 2, c * (sA - cA) / 2, c / 2]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function mixtilinear_triangle(sides) {
  const [cA, cB, cC] = tri_cosines(sides);
  const ts = [
    [(cA - cB - cC + 1) / 2, 1, 1],
    [1, (-cA + cB - cC + 1) / 2, 1],
    [1, 1, (-cA - cB + cC + 1) / 2]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

//
function get_mounted_tri(a, tDeg, v2, v3) {
  const t = toRad(tDeg);
  const v1 = [a * Math.cos(t), Math.sin(t)];
  const tri = [v1, v2, v3];
  const sides = tri_sides(tri);
  const normals = tri.map(v => ell_norm(a, v));
  return { o: tri, n: normals, s: sides };
}

function get_derived_tri(a, orbit, sides, tri_type, cpn, pn, mounting) {
  let ret_tri = { o: orbit, s: sides };

  if (tri_type in tri_fns_cremona_dict) {
    const inv_fn = (tri, sides, p) => tri_fns_cremona_dict[tri_type](a, p)
    ret_tri = invert_tri({ o: orbit, s: sides }, inv_fn);
  } else if (tri_type in tri_fns_inv_dict) {
    const inv_fn = (tri, sides, p) => circle_inversion(p, tri_fns_invert(tri_type, a, mounting) /*tri_fns_inv_dict[tri_type].fn(a)*/)
    ret_tri = invert_tri({ o: orbit, s: sides }, inv_fn);
  } else if (tri_type in tri_fns_dict) { // "reference" returns itself
    const ts = tri_fns_dict[tri_type](sides);
    const tri0 = generic_triangle(orbit, sides, ts);
    ret_tri = { o: tri0, s: tri_sides(tri0) };
  }
  
  if (cpn in tri_pfns_dict) {
    const bs = get_Xn_bary(ret_tri.s, pn);
    const ts_p = bary_to_trilin(bs, ret_tri.s);
    const ts = tri_pfns_dict[cpn](ret_tri.s, ts_p);
    let tri0 = generic_triangle(ret_tri.o, ret_tri.s, ts);
    // this looks wrong, tripolar should not depend on cpn
    if (cpn == "tripolar") {
      // needs to intersect orbit sides w/ cevian sides  
      tri0 = ret_tri.o.map((v, i) => inter_rays(
        v, vdiff(ret_tri.o[i == 2 ? 0 : i + 1], v),
        tri0[i], vdiff(tri0[i == 2 ? 0 : i + 1], tri0[i])));
    }
    ret_tri = { o: tri0, s: tri_sides(tri0), o_deriv:ret_tri.o, s_deriv:ret_tri.s };
  } 
  return ret_tri;
}

function invert_tri({ o, s }, inv_fn) {
  const o_inv = o.map(v => inv_fn(o, s, v));
  const sides_inv = tri_sides(o_inv);
  return { o: o_inv, s: sides_inv };
}

// for debugging
function get_tri_generic(a, tDeg, mounting, tri_type, cpn, pn) {
  //
  let ons, ons_derived;
  if (mounting in dict_orbit_fn) {
    const orbit_fn = dict_orbit_fn[mounting];
    ons = orbit_fn(a, tDeg);
    ons_derived = get_derived_tri(a, ons.o, ons.s, tri_type, cpn, pn, mounting);
  } else {
    const [v2, v3] = getV2V3(a, mounting, 0.001);
    ons = get_mounted_tri(a, tDeg, v2, v3);
    ons_derived = get_derived_tri(a, ons.o, ons.s, tri_type, cpn, pn, mounting);
  }
  return {
    a: a, tDeg: tDeg, mounting: mounting, tri_type: tri_type,
    tri: ons.o, tri_s: ons.s, derived: ons_derived.o, derived_s: ons_derived.s
  };
}

// tri_side_ratio(1.3,20.0,"poristic","tangential","intangents")
function tri_side_ratio(a, tDeg, mounting, tri_type_1, tri_type_2) {
  const tri1 = get_tri_generic(a, tDeg, mounting, tri_type_1, "off", 0);
  const tri2 = get_tri_generic(a, tDeg, mounting, tri_type_2, "off", 0);
  return tri1.derived_s.map((s, i) => s / tri2.derived_s[i]);
}

function get_derived_tri_v1_barys(sides, tri_type) {
  if (tri_type in tri_fns_dict) { // "reference" returns itself
    const ts = tri_fns_dict[tri_type](sides);
    // multiply by sides to get barys
    const bs = ts[0].map((t, i) => t * sides[i]);
    return bs;
  } else
    return [sides[0], 0, 0]; // reference tri v1 in baris
}

//barycentrics of vertex are opposite sidelengths
function get_tri_v1_barys(sides) {
  return [sides[0], 0, 0];
}

function get_tri_v2_barys(sides) {
  return [0, sides[1], 0];
}

function get_tri_v3_barys(sides) {
  return [0, 0, sides[2]];
}

function get_caustic_v12_barys(sides) {
  return [sides[0], 0, 0];
}