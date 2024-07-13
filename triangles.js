
/// traditional triangles

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

function cevian_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [0, beta, gamma];
  const t2 = [alpha, 0, gamma];
  const t3 = [alpha, beta, 0];
  return [t1, t2, t3];
}

function subcevian1_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [1, 0, 0];
  const t2 = [alpha, 0, gamma];
  const t3 = [alpha, beta, 0];
  return [t1, t2, t3];
}

function subcevian2_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [0, beta, gamma];
  const t2 = [0, 1, 0];
  const t3 = [alpha, beta, 0];
  return [t1, t2, t3];
}

function subcevian3_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [0, beta, gamma];
  const t2 = [alpha, 0, gamma];
  const t3 = [0, 0, 1];
  return [t1, t2, t3];
}

function anticevian_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [-alpha, beta, gamma];
  const t2 = [alpha, -beta, gamma];
  const t3 = [alpha, beta, -gamma];
  return [t1, t2, t3];
}

function subanticevian1_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [-alpha, beta, gamma];
  const t2 = [0, 1, 0];
  const t3 = [0, 0, 1];
  return [t1, t2, t3];
}

function subanticevian2_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [1, 0, 0];
  const t2 = [alpha, -beta, gamma];
  const t3 = [0, 0, 1];
  return [t1, t2, t3];
}

function subanticevian3_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [1, 0, 0];
  const t2 = [0, 1, 0];
  const t3 = [alpha, beta, -gamma];
  return [t1, t2, t3];
}

function circumcevian_triangle([a, b, c], [alpha, beta, gamma]) {
  const t1 = [-a * beta * gamma, (b * gamma + c * beta) * beta, (b * gamma + c * beta) * gamma];
  const t2 = [(c * alpha + a * gamma) * alpha, -b * gamma * alpha, (c * alpha + a * gamma) * gamma];
  const t3 = [(a * beta + b * alpha) * alpha, (a * beta + b * alpha) * beta, -c * alpha * beta];
  return [t1, t2, t3];
}

// with barycentrics

// intersect sides of reference w cevian.
function tripolar_triangle(o, s, ts) {
  const cev_ts = cevian_triangle(s, ts);
  const cev = generic_triangle(o, s, cev_ts);
  const tripolar = o.map((v, i) => inter_rays(v, vdiff(o[i == 2 ? 0 : i + 1], v),
    cev[i], vdiff(cev[i == 2 ? 0 : i + 1], cev[i])));
  return tripolar;
}

// (i) invert, and (ii) get antipedal
function polar_triangle(o, s, ts) {
  const xn = trilin_to_cartesian(o, s, ts);
  const inv_fn = (tri, sides, p) => circle_inversion(p, { ctr: xn, R: 1 });
  const inv_tri = invert_tri({ o, s }, inv_fn);
  const inv_ts = get_trilins(xn, inv_tri.o, inv_tri.s);
  const antiped_ts = antipedal_triangle(inv_tri.s, inv_ts);
  const antiped = generic_triangle(inv_tri.o, inv_tri.s, antiped_ts)
  return antiped;
}

function invert_triangle(o, s, ts) {
  const xn = trilin_to_cartesian(o, s, ts);
  const inv_fn = (tri, sides, p) => circle_inversion(p, { ctr: xn, R: 1 });
  const inv_tri = invert_tri({ o, s }, inv_fn);
  return inv_tri.o;
}

// (i) get pedal, and (ii) invert: actually congruent with polar, so not used!
function antipolar_triangle(o, s, ts) {
  const xn = trilin_to_cartesian(o, s, ts);
  const ped_ts = pedal_triangle(s, ts);
  const ped_tri = generic_triangle(o, s, ped_ts);
  const inv_fn = (tri, sides, p) => circle_inversion(p, { ctr: xn, R: 1 });
  const inv_tri = invert_tri({ o: ped_tri, s: tri_sides(ped_tri) }, inv_fn);
  return inv_tri.o;
}

function ellcevian_triangle(o, s, ts, a) {
  const xn = trilin_to_cartesian(o, s, ts);
  return o.map(v => ellInterRay(a, v, vdiff(xn, v)));
}

function caucevian_triangle(o, s, ts, ac, bc) {
  const xn = trilin_to_cartesian(o, s, ts);
  return o.map(v => ellInterRayb(ac, bc, v, vdiff(xn, v)));
}

// get excircles, calculate polars, intersect them
function polar_exc_triangle(o, s, ts) {
  const xn = trilin_to_cartesian(o, s, ts);
  const excircles = get_excircles(o, s);
  const invs = excircles.map(e => circle_inversion(xn, e));
  const perps = invs.map(i => vperp(vdiff(i, xn)));
  const tri = invs.map((i, k) => inter_rays(i, perps[k], invs[k == 2 ? 0 : k + 1], perps[k == 2 ? 0 : k + 1]));
  return tri;
}

// identical to x3-map
function three_ctrs_triangle(o, s, ts) {
  const xn = trilin_to_cartesian(o, s, ts);
  const tri = o.map((v, k) => get_circumcenter([xn, v, o[k == 2 ? 0 : k + 1]]));
  return tri;
}


function get_x3_inv_low(tri, M) {
  const tri_inv = tri.map((v, k) => {
    const vnext = tri[k == 2 ? 0 : k + 1];
    const i12 = circle_circle_inter_rsqr(v, edist2(M, v), vnext, edist2(M, vnext));
    return negl(edist2(i12[0], M)) ? i12[1] : i12[0];
  });
  return tri_inv;
}

// in fact this is the inverse of the x3-map.
function x3_inv_triangle(o, s, ts) {
  const xn = trilin_to_cartesian(o, s, ts);
  return get_x3_inv_low(o, xn);
}

// reflect Xn on 3 vertices
function vtx_refl_triangle(o, s, ts) {
  const xn = trilin_to_cartesian(o, s, ts);
  const tri = o.map(v => vray(xn, vdiff(v, xn), 2));
  return tri;
}

function side_refl_triangle(o, s, ts) {
  const xn = trilin_to_cartesian(o, s, ts);
  const perps = o.map((v, i) => closest_perp(xn, v, i == 2 ? o[0] : o[i + 1]));
  const tri = perps.map(v => vray(xn, vdiff(v, xn), 2));
  return tri;
}

function inv_exc_triangle(o, s, ts) {
  const xn = trilin_to_cartesian(o, s, ts);
  const excircles = get_excircles(o, s);
  const tri = excircles.map(e => circle_inversion(xn, e));
  return tri;
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

function subpedal1_triangle([a, b, c], [alpha, beta, gamma]) {
  const cA = law_of_cosines(a, b, c);
  const cB = law_of_cosines(b, c, a);
  const cC = law_of_cosines(c, a, b);
  const t1 = [1, 0, 0];
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

function subantipedal1_triangle([a, b, c], [alpha, beta, gamma]) {
  const cA = law_of_cosines(a, b, c);
  const cB = law_of_cosines(b, c, a);
  const cC = law_of_cosines(c, a, b);

  //const t1 = [-(cC * alpha + beta) * (cB * alpha + gamma), (alpha + cC * beta) * (cB * alpha + gamma), (cC * alpha + beta) * (alpha + cB * gamma)];
  //const t2 = [(cC * alpha + beta) * (cA * beta + gamma), -(alpha + cC * beta) * (cA * beta + gamma), (alpha + cC * beta) * (beta + cA * gamma)];
  const t1 = [1, 0, 0];
  const t2 = [0, 1, 0];
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
  const ts = [
    [0, (a - b + c) / b, (a + b - c) / c],
    [(-a + b + c) / a, 0, (a + b - c) / c],
    [(-a + b + c) / a, (a - b + c) / b, 0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

// {2*a*(b + c), -a^2 - b^2 + c^2, -a^2 + b^2 - c^2}.
function second_extouch_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const ts =
    [[2 * (b + c), (-a2 - b2 + c2) / b, (-a2 + b2 - c2) / c],
    [(-b2 + c2 - a2) / a, 2 * (c + a), (-b2 - c2 + a2) / c],
    [(-c2 - a2 + b2) / a, (-c2 + a2 - b2) / b, 2 * (a + b)]];

  return ts;
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

function gheorghe_triangle(sides) {
  const Xs = [bary_X647, bary_X649, bary_X650].map(b => b(sides));
  return Xs.map(bs => barys_to_trilins(bs, sides));
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
  const [x, y, z] = tri_cosines([a, b, c]).map(c0 => 1 / c0);
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
  const [x, y, z] = [a, b, c].map(c0 => 1 / c0);
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
getFlankTriangleMoses[tri_, {a_, b_, c_}] := 
  Module[{a2 = a a, b2 = b b, c2 = c c, S = 2 triAreaHeron[{a, b, c}],
     bs},
   bs = {
     {1, 0, 0},
     {(a2 + b2 - c2) + 2 S, -2 b2, (-a2 + b2 + c2)},
     {(a2 - b2 + c2) + 2 S, (-a2 + b2 + c2), -2 c2}
     };
   barycentricMatrixToCartesian[tri, bs]];

getMosesFlanks[tri_, triL_] := 
  getFlankTriangleMoses[RotateLeft[tri, #], 
     RotateLeft[triL, #]] & /@ {0, 1, 2};
*/

function flank_triangle(o0, s, pn) {
  const o = vccw(...o0) ? o0 : tri_rev(o0);
  //const xn = trilin_to_cartesian(o, s, ts);
  const perps = o.map((v, i) => vperp(vdiff(o[i == 2 ? 0 : i + 1], v)));
  //MapThread[{#1, #1 - #2, #1 - #3} &, {tri, RotateRight@perps, perps}];
  const flanks = o.map((v, i) => [v, vdiff(v, perps[i == 0 ? 2 : i - 1]), vdiff(v, perps[i])]);
  const flank_sides = flanks.map(tri_sides);
  const bss = flank_sides.map(ss => get_Xn_bary(ss, pn));
  const Xks = flanks.map((t, i) => barys_to_cartesian(t, bss[i]));
  return Xks;
}

function outer_extouch_triangle(tri, sides, pn) {
  const tss = [extouch_outer1_triangle(sides), extouch_outer2_triangle(sides), extouch_outer3_triangle(sides)];
  const tris = tss.map(ts => generic_triangle(tri, sides, ts));
  const Xks = tris.map(t => get_Xn_cartesians(pn, t, tri_sides(t)));
  return Xks;
}

/*
bsA = {{0, s - b, s - c}, {-s + b, 0, s}, {-s + c, s, 0}};
bsB = {{0, -s + a, s}, {s - a, 0, s - c}, {s, -s + c, 0}};
bsC = {{0, s, -s + a}, {s, 0, -s + b}, {s - a, s - b, 0}};
*/

function extouch_outer1_triangle([a, b, c]) {
  const s = (a + b + c) / 2;
  const bs = [[0, s - b, s - c], [-s + b, 0, s], [-s + c, s, 0]];
  return bs.map(b0 => barys_to_trilins(b0, [a, b, c]));
}

function extouch_outer2_triangle([a, b, c]) {
  const s = (a + b + c) / 2;
  const bs = [[0, -s + a, s], [s - a, 0, s - c], [s, -s + c, 0]];
  return bs.map(b0 => barys_to_trilins(b0, [a, b, c]));
}

function extouch_outer3_triangle([a, b, c]) {
  const s = (a + b + c) / 2;
  const bs = [[0, s, -s + a], [s, 0, -s + b], [s - a, s - b, 0]];
  return bs.map(b0 => barys_to_trilins(b0, [a, b, c]));
}

function flank1_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c, S = 2 * tri_area([a, b, c]);
  const ts = [
    [1 / a, 0, 0],
    [((a2 + b2 - c2) + 2 * S) / a, -2 * b, (-a2 + b2 + c2) / c],
    [((a2 - b2 + c2) + 2 * S) / a, (-a2 + b2 + c2) / b, -2 * c]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

// faking rotation
function flank2_triangle([b, c, a]) {
  const a2 = a * a, b2 = b * b, c2 = c * c, S = 2 * tri_area([a, b, c]);
  const ts = [
    [-2 * b, (-a2 + b2 + c2) / c, ((a2 + b2 - c2) + 2 * S) / a],
    [(-a2 + b2 + c2) / b, -2 * c, ((a2 - b2 + c2) + 2 * S) / a],
    [0, 0, 1 / a]
  ];
  return ts;
}

function flank3_triangle([c, a, b]) {
  const a2 = a * a, b2 = b * b, c2 = c * c, S = 2 * tri_area([a, b, c]);
  const ts = [
    [-2 * c, ((a2 - b2 + c2) + 2 * S) / a, (-a2 + b2 + c2) / b],
    [0, 1 / a, 0],
    [(-a2 + b2 + c2) / c, ((a2 + b2 - c2) + 2 * S) / a, -2 * b],
  ];
  return ts;
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

function midarc_triangle(sides) {
  const cs = tri_cosines(sides);
  const [x, y, z] = cs.map(half_cos);
  const [x2, y2, z2] = [x,y,z].map(sqr);
  const ts = [
    [sqr(y+z),x2,x2],
    [y2,sqr(x+z),y2],
    [z2,z2,sqr(x+y)]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

// centers of the 3 midarc circles
// these are tangent to the incircle and two sides.

// peter moses:
// A' = {
// -2*Cos[A/4]^2*(2*Cos[A/2] + Sin[A] + 2*Sin[B] + 2*Sin[C]),
// Cot[A/4]*(-1 + Sin[A/2])*Sin[B],
// Cot[A/4]*(-1 + Sin[A/2])*Sin[C]
// }
function midarc_circs_triangle(a, b, tri, sides, mounting) {
  const ma_ts = midarc_triangle(sides);
  const ma = generic_triangle(tri,sides,ma_ts);
  const X1 = get_incenter(tri);
  const ds = tri.map((v,i)=>edist(v,ma[i])/edist(v,vrefl(ma[i],X1)));
  const new_tri = tri.map((v,i)=>vinterp(v,X1,ds[i]));
  //const new_ts = get_trilins(new_tri, tri, sides);
  //return new_ts;
  return new_tri;
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

function first_morley_triangle(sides) {
  const cs = tri_cosines(sides);
  const c3 = cs.map(cos_third);
  const ts = [
    [1, 2 * c3[2], 2 * c3[1]],
    [2 * c3[2], 1, 2 * c3[0]],
    [2 * c3[1], 2 * c3[0], 1]];
  return ts; // generic_triangle(orbit,sides,ts);
}

function second_morley_triangle(sides) {
  const cs = tri_cosines(sides);
  const cs3 = cs.map(cos_third);
  const ss3 = cs3.map(c => Math.sqrt(1 - c * c));
  const c2p3 = -0.5, s2p3 = 0.5 * Math.sqrt(3);
  const a12 = cs3[2] * c2p3 + ss3[2] * s2p3;
  const a13 = cs3[1] * c2p3 + ss3[1] * s2p3;
  const a23 = cs3[0] * c2p3 + ss3[0] * s2p3;

  const ts = [
    [1, 2 * a12, 2 * a13],
    [2 * a12, 1, 2 * a23],
    [2 * a13, 2 * a23, 1]];
  return ts;
}

function third_morley_triangle(sides) {
  const cs = tri_cosines(sides);
  const cs3 = cs.map(cos_third);
  const ss3 = cs3.map(c => Math.sqrt(1 - c * c));
  const c2p3 = -0.5, s2p3 = -0.5 * Math.sqrt(3);
  const a12 = cs3[2] * c2p3 + ss3[2] * s2p3;
  const a13 = cs3[1] * c2p3 + ss3[1] * s2p3;
  const a23 = cs3[0] * c2p3 + ss3[0] * s2p3;

  const ts = [
    [1, 2 * a12, 2 * a13],
    [2 * a12, 1, 2 * a23],
    [2 * a13, 2 * a23, 1]];
  return ts;
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

// vertices are the centers of the mixtilinear incircles
// https://mathworld.wolfram.com/MixtilinearTriangle.html
function mixtilinear_triangle(sides) {
  const [cA, cB, cC] = tri_cosines(sides);
  const ts = [
    [(cA - cB - cC + 1) / 2, 1, 1],
    [1, (-cA + cB - cC + 1) / 2, 1],
    [1, 1, (-cA - cB + cC + 1) / 2]
  ];
  return ts;
}

// https://faculty.evansville.edu/ck6/encyclopedia/IndexOfTrianglesReferencedInETC.html
// vertices are the centers of the mixtilinear excircles
// (a^3-(b+c)*a^2-(b+c)^2*a+(b^2-c^2)*(b-c))/(4*a*b*c) : 1 : 1
function mixtilinear2nd_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const a3 = a2 * a, b3 = b2 * b, c3 = c2 * c;
  const abc = a * b * c;
  const ts = [
    [(a3 - (b + c) * a2 - sqr(b + c) * a + (b2 - c2) * (b - c)) / (4 * abc), 1, 1],
    [1, (b3 - (c + a) * b2 - sqr(c + a) * b + (c2 - a2) * (c - a)) / (4 * abc), 1],
    [1, 1, (c3 - (a + b) * c2 - sqr(a + b) * c + (a2 - b2) * (a - b)) / (4 * abc)]
  ];
  return ts;
}

// https://faculty.evansville.edu/ck6/encyclopedia/IndexOfTrianglesReferencedInETC.html
// vertices the touchpoints of the circumcircle and the mixtilinear incircles
//  -1 : 2*b/(a-b+c) : 2*c/(a+b-c)
function mixtilinear3rd_triangle([a, b, c]) {
  const ts = [
    [-1, 2 * b / (a - b + c), 2 * c / (a + b - c)],
    [2 * a / (b + c - a), -1, 2 * c / (b - c + a)],
    [2 * a / (c - a + b), 2 * b / (c + a - b), -1]
  ];
  return ts;
}

// https://faculty.evansville.edu/ck6/encyclopedia/IndexOfTrianglesReferencedInETC.html
// vertices the touchpoints of the circumcircle and the mixtilinear excircles
// -1 : 2*b/(a+b-c) : 2*c/(a-b+c)
function mixtilinear4th_triangle([a, b, c]) {
  const ts = [
    [-1, 2 * b / (a + b - c), 2 * c / (a - b + c)],
    [2 * a / (b - c + a), -1, 2 * c / (b + c - a)],
    [2 * a / (c + a - b), 2 * b / (c - a + b), -1]
  ];
  return ts;
}

// peter moses, sept-10-2021
// a*(a^2 + 2*a*b - 3*b^2 + 2*a*c + 6*b*c - 3*c^2),
// -2*b^2*(-a + b - c)
// 2*(a + b - c)*c^2
function mixtilinear8th_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const ts = [
    [a2 + 2 * a * b - 3 * b2 + 2 * a * c + 6 * b * c - 3 * c2, -2 * b * (-a + b - c), 2 * c * (a + b - c)],
    [2 * a * (b + c - a), b2 + 2 * b * c - 3 * c2 + 2 * b * a + 6 * c * a - 3 * a2, -2 * c * (-b + c - a)],
    [-2 * a * (-c + a - b), 2 * b * (c + a - b), c2 + 2 * c * a - 3 * a2 + 2 * c * b + 6 * a * b - 3 * b2]];
  return ts;
}

// peter moses, sept-10-2021
// a*(a^2 - 2*a*b - 3*b^2 - 2*a*c + 6*b*c - 3*c^2), 
// 2*b^2*(a + b - c),
// 2*c^2*(a - b + c)}
function mixtilinear9th_triangle([a, b, c]) {
  const a2 = a * a, b2 = b * b, c2 = c * c;
  const ts = [
    [a2 - 2 * a * b - 3 * b2 - 2 * a * c + 6 * b * c - 3 * c2, 2 * b * (a + b - c), 2 * c * (a - b + c)],
    [2 * a * (b - c + a), b2 - 2 * b * c - 3 * c2 - 2 * b * a + 6 * c * a - 3 * a2, 2 * c * (b + c - a)],
    [2 * a * (c + a - b), 2 * b * (c - a + b), c2 - 2 * c * a - 3 * a2 - 2 * c * b + 6 * a * b - 3 * b2]];
  return ts;
}



function get_graves_triangle(p1, ta /* true axes */) {
  const ts = ellTangentsb(ta.ac, ta.bc, p1);
  return [p1, ts[0], ts[1]];
}


// not used: caustic will close poncelet.
function get_ellcevian1_triangle(p1, ta) {
  // assume caustic ctr always at [0,0]
  const ts = ellTangentsb(ta.ac, ta.bc, p1);
  const ts_ints = ts.map(t => farthestPoint(ellInterRaybBoth(ta.ae, ta.be,
    vdiff(p1, ta.ctr), vdiff(t, p1)).map(t => vsum(t, ta.ctr)), p1));
  return [p1, ts_ints[0], ts_ints[1]];
}

function get_focal_inter(p, a, b, f1, f2) {
  const i1 = farthestPoint(ellInterRaybBoth(a, b, p, vdiff(f1, p)), p);
  const i2 = farthestPoint(ellInterRaybBoth(a, b, p, vdiff(f2, p)), p);
  const ii = inter_rays(i1, vdiff(f2, i1), i2, vdiff(f1, i2));
  return ii;
}

function polar_tri_sides({ o, s }, inv_fn, circ, a, mounting) {
  if (circ in dict_circle_triples) { // e.g., excircles123
    const ctrRs = dict_circle_triples[circ].fns.map(f => f(o, s));
    // strange, should o_inv be simply o?
    const o_inv = o.map(v => inv_fn(o, s, v));
    const poles = ctrRs.map((cr, k) => line_pole(o_inv[k == 2 ? 0 : k + 1], o_inv[k == 0 ? 2 : k - 1],
      cr.ctr, cr.R));
    const pole_sides = tri_sides(poles);
    return { o: poles, s: pole_sides };
  } else {
    const o0 = get_ctr_R(o, s, circ, a, mounting);
    if (o0) {
      const { ctr, R, n } = o0;
      const o_inv = o.map(v => inv_fn(o, s, v));
      const poles = o_inv.map((p, k) => line_pole(o_inv[k == 2 ? 0 : k + 1], o_inv[k == 0 ? 2 : k - 1], ctr, R));
      const pole_sides = tri_sides(poles);
      return { o: poles, s: pole_sides };
    } else
      return { o: o, s: s };
  }
}

function polar_tri({ o, s }, inv_fn, circ, a, mounting) {
  if (circ in dict_circle_triples) { // e.g., excircles123
    const ctrRs = dict_circle_triples[circ].fns.map(f => f(o, s));
    // strange, should o_inv be simply o?
    const o_inv = o.map(v => inv_fn(o, s, v));
    const polars = o_inv.map((p, k) => polar_line(p, ctrRs[k].ctr, ctrRs[k].R));
    const polar = polars.map((v, k) => inter_rays(v.p, v.dir,
      polars[k == 2 ? 0 : k + 1].p, polars[k == 2 ? 0 : k + 1].dir));
    const polar_sides = tri_sides(polar);
    return { o: polar, s: polar_sides };
  } else {
    const o0 = get_ctr_R(o, s, circ, a, mounting);
    if (o0) {
      const { ctr, R, n } = o0;
      const o_inv = o.map(v => inv_fn(o, s, v));
      const perps = o_inv.map(v => vperp(vdiff(v, ctr)));
      const polar = o_inv.map((v, k) => inter_rays(v, perps[k], o_inv[k == 2 ? 0 : k + 1], perps[k == 2 ? 0 : k + 1]));
      const polar_sides = tri_sides(polar);
      return { o: polar, s: polar_sides };
    } else
      return { o: o, s: s };
  }
}

// tri_side_ratio(1.3,20.0,"poristic","tangential","intangents")
function tri_side_ratio(a, tDeg, mounting, tri_type_1, tri_type_2) {
  const tri1 = get_tri_generic(a, tDeg, mounting, tri_type_1, "off", 0);
  const tri2 = get_tri_generic(a, tDeg, mounting, tri_type_2, "off", 0);
  return tri1.derived_s.map((s, i) => s / tri2.derived_s[i]);
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

//function get_focal_inter_triangle(o, a, b, outer_ctr) {
function get_focal_inter_triangle(a, b, o, sides, mounting) {
  const ta = get_true_axes(a, mounting);
  const tri = o.map(v => vsum(get_focal_inter(vdiff(v, ta.ctr), ta.ae, ta.be, ta.f1, ta.f2), ta.ctr));
  return tri;
}

//function get_focal_inter_triangle_caustic(o, a,b,ac,bc, outer_ctr) {
function get_focal_inter_triangle_caustic(a, b, o, sides, mounting) {
  const ta = get_true_axes(a, mounting);
  const tri = o.map(v => vsum(get_focal_inter(vdiff(v, ta.ctr), ta.ae, ta.be, ta.f1c, ta.f2c), ta.ctr));
  return tri;
}

function get_subtris(o, ctr) {
  return [
    [ctr, o[1], o[2]],
    [ctr, o[2], o[0]],
    [ctr, o[0], o[1]]];
}

function xn_map_triangle(o, s, ts, xk) {
  const xn = trilin_to_cartesian(o, s, ts);
  const subtris = get_subtris(o, xn);
  const xks = subtris.map((t, i) => get_Xn_cartesians(xk, t, tri_sides(t)));
  return xks;
}

function xn_subcevian_triangle(o, s, ts, xk) {
  const ts_tris = [subcevian1_triangle, subcevian2_triangle, subcevian3_triangle].map(t => t(s, ts));
  const tris = ts_tris.map(t => generic_triangle(o, s, t));
  const xks = tris.map((t, i) => get_Xn_cartesians(xk, t, tri_sides(t)));
  return xks;
}

function xn_subanticevian_triangle(o, s, ts, xk) {
  const ts_tris = [subanticevian1_triangle, subanticevian2_triangle, subanticevian3_triangle].map(t => t(s, ts));
  const tris = ts_tris.map(t => generic_triangle(o, s, t));
  const xks = tris.map((t, i) => get_Xn_cartesians(xk, t, tri_sides(t)));
  return xks;
}

/*
function get_inv_lim2(a, b, tri, sides, mounting) {
  const c = Math.sqrt(a * a - b * b);
  // bicentric
  const bic_tri = get_polar_f1(a, b, tri, sides);
  const bic_sides = tri_sides(bic_tri);
  // inversion wrt lim2
  const lim2 = [-c + 1 / c, 0];
  const lim_tri = invert_triangle(bic_tri, bic_sides, lim2);
  return lim_tri;
} */

/// DICTS

const dict_tri_fns = {
  // reference        : reference_triangle,
  excentral: excentral_triangle,
  medial: medial_triangle,
  anticompl: anticompl_triangle,
  orthic: orthic_triangle,
  intouch: intouch_triangle,
  extouch: extouch_triangle,
  extouch2: second_extouch_triangle,
  ext_outer1: extouch_outer1_triangle,
  ext_outer2: extouch_outer2_triangle,
  ext_outer3: extouch_outer3_triangle,
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
  midarc: midarc_triangle,
  morley1: first_morley_triangle,
  morley2: second_morley_triangle,
  morley3: third_morley_triangle,
  morley_adj1: first_morley_adjunct_triangle,
  morley_adj2: second_morley_adjunct_triangle,
  morley_adj3: third_morley_adjunct_triangle,
  incentral: incentral_triangle,
  flank1: flank1_triangle,
  flank2: flank2_triangle,
  flank3: flank3_triangle,
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
  mixtilinear2: mixtilinear2nd_triangle,
  mixtilinear3: mixtilinear3rd_triangle,
  mixtilinear4: mixtilinear4th_triangle,
  mixtilinear8: mixtilinear8th_triangle,
  mixtilinear9: mixtilinear9th_triangle,
  lucascentral: lucas_central_triangle,
  lucasinner: lucas_inner_triangle,
  lucastangents: lucas_tangents_triangle,
  // cezar lozada
  atik: atik_triangle,
  andromeda: andromeda_triangle,
  apus: apus_triangle,
  antlia: antlia_triangle,
  apollonius: apollonius_triangle,
  ayme: ayme_triangle,
  bevan_antipodal: bevan_antipodal_triangle,
  bitang_ext: bitangent_ext_triangle,
  bitang_int: bitangent_int_triangle,
  bitang_ext_cont: bitangent_ext_contact_triangle,
  bitang_int_cont: bitangent_int_contact_triangle,
  bitang_inc_ext: bitangent_inc_ext_triangle,
  bitang_inc_int: bitangent_inc_int_triangle,
  bitang_inc_ext_cont: bitangent_inc_ext_contact_triangle,
  bitang_inc_int_cont: bitangent_inc_int_contact_triangle,
  circumperp1: first_circumperp_triangle,
  circumperp2: second_circumperp_triangle,
  exc_inc_refl: excenters_incenter_reflection_triangle,
  exc_midpoint: excenters_midpoint_triangle,
  honsberger: honsberger_triangle,
  inv_exc: inverse_in_excircles_triangle,
  inv_inc: inverse_in_incircle_triangle,
  kosnita: kosnita_triangle,
  mandart_exc: mandart_excircles_triangle,
  mandart_inc: mandart_incircle_triangle,
  ursa_major: ursa_major_triangle,
  ursa_minor: ursa_minor_triangle,
  x3_abc_refl: x3_abc_reflections_triangle
};

const dict_tri_pfns = {
  // reference        : reference_triangle,
  cevian: { fn: cevian_triangle, needs: "none" },
  anticevian: { fn: anticevian_triangle, needs: "none" },
  circumcevian: { fn: circumcevian_triangle, needs: "none" },
  circumsimson: { fn: circumsimson_triangle, needs: "none" },
  ellcevian: { fn: ellcevian_triangle, needs: "ell" }, // sends tri too
  caucevian: { fn: caucevian_triangle, needs: "cau" }, // sends tri too
  pedal: { fn: pedal_triangle, needs: "none" },
  antipedal: { fn: antipedal_triangle, needs: "none" },
  tripolar: { fn: tripolar_triangle, needs: "tri" },
  invert: { fn: invert_triangle, needs: "tri" },
  polar: { fn: polar_triangle, needs: "tri" },
  polar_exc: { fn: polar_exc_triangle, needs: "tri" },

  three_ctrs: { fn: three_ctrs_triangle, needs: "tri" },
  vtx_refl: { fn: vtx_refl_triangle, needs: "tri" },
  side_refl: { fn: side_refl_triangle, needs: "tri" },
  inv_exc: { fn: inv_exc_triangle, needs: "tri" },
  flank: { fn: flank_triangle, needs: "tri_pn" },
  extouch_outer: { fn: outer_extouch_triangle, needs: "tri_pn" },
  subcevian1: { fn: subcevian1_triangle, needs: "none" },
  subanticev1: { fn: subanticevian1_triangle, needs: "none" },
  subpedal1: { fn: subpedal1_triangle, needs: "none" },
  subantiped1: { fn: subantipedal1_triangle, needs: "none" },
  x1_subcevian: { fn: xn_subcevian_triangle, needs: "tri_xk", xk: 1 },
  x2_subcevian: { fn: xn_subcevian_triangle, needs: "tri_xk", xk: 2 },
  x6_subcevian: { fn: xn_subcevian_triangle, needs: "tri_xk", xk: 6 },
  x7_subcevian: { fn: xn_subcevian_triangle, needs: "tri_xk", xk: 7 },
  x8_subcevian: { fn: xn_subcevian_triangle, needs: "tri_xk", xk: 8 },
  x9_subcevian: { fn: xn_subcevian_triangle, needs: "tri_xk", xk: 9 },
  x10_subcevian: { fn: xn_subcevian_triangle, needs: "tri_xk", xk: 10 },
  x11_subcevian: { fn: xn_subcevian_triangle, needs: "tri_xk", xk: 11 },
  x1_subanticev: { fn: xn_subanticevian_triangle, needs: "tri_xk", xk: 1 },
  x2_subanticev: { fn: xn_subanticevian_triangle, needs: "tri_xk", xk: 2 },
  x6_subanticev: { fn: xn_subanticevian_triangle, needs: "tri_xk", xk: 6 },
  x7_subanticev: { fn: xn_subanticevian_triangle, needs: "tri_xk", xk: 7 },
  x8_subanticev: { fn: xn_subanticevian_triangle, needs: "tri_xk", xk: 8 },
  x9_subanticev: { fn: xn_subanticevian_triangle, needs: "tri_xk", xk: 9 },
  x10_subanticev: { fn: xn_subanticevian_triangle, needs: "tri_xk", xk: 10 },
  x11_subanticev: { fn: xn_subanticevian_triangle, needs: "tri_xk", xk: 11 },
  x3_inv: { fn: x3_inv_triangle, needs: "tri" },
  x1_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 1 },
  x2_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 2 },
  x3_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 3 },
  x4_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 4 },
  x5_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 5 },
  x6_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 6 },
  x7_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 7 },
  x8_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 8 },
  x9_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 9 },
  x10_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 10 },
  x11_map: { fn: xn_map_triangle, needs: "tri_xk", xk: 11 }
};

const dict_tri_fns_inv = {
  inv_ctr: { fn: circle_ctr, caustic: false },
  inv_f1: { fn: circle_f1, caustic: false },
  inv_f2: { fn: circle_f2, caustic: false },
  inv_f1c: { fn: circle_f1c, caustic: true },
  inv_f2c: { fn: circle_f2c, caustic: true }

  // not inversion proper but pedal of bicentric wrt to f2
};

//const dict_tri_fns_cremona = {
//  crem_f1: cremona_f1,
//  crem_f2: cremona_f2,
//  crem_ctr: cremona_ctr
//};

// these are different: they require a first tri vertex and the true axes
const dict_graves = {
  graves: get_graves_triangle,
  //ell_cev1: get_ellcevian1_triangle // doesn't make sense perfect poncelet
};

const dict_tri_fns_bicentric = {
  midarc_circs: midarc_circs_triangle,
  ped_lim2: get_polar_pedal_lim2,
  //inv_lim2: get_inv_lim2,
  pol_out: get_polar_out, // TEST
  pol_ctr: get_polar_ctr,
  pol_f1: get_polar_f1,
  pol_f2: get_polar_f2,
  pol_f1c: get_polar_f1c,
  pol_f2c: get_polar_f2c,
  ped_ctr: get_pedal_ctr,
  ped_f1: get_pedal_f1,
  ped_f2: get_pedal_f2,
  ped_f1c: get_pedal_f1c,
  ped_f2c: get_pedal_f2c,
  antiped_ctr: get_antipedal_ctr,
  antiped_f1: get_antipedal_f1,
  antiped_f2: get_antipedal_f2,
  antiped_f1c: get_antipedal_f1c,
  antiped_f2c: get_antipedal_f2c,
  ellcev_ctr: get_ellcevian_ctr,
  ellcev_f1: get_ellcevian_f1,
  ellcev_f1c: get_ellcevian_f1c,
  x3_map_ctr: get_x3_map_ctr,
  x3_map_f1: get_x3_map_f1,
  x3_map_f1c: get_x3_map_f1c,
  x3_inv_ctr: get_x3_inv_ctr,
  x3_inv_f1: get_x3_inv_f1,
  x3_inv_f1c: get_x3_inv_f1c,
  inf_x: get_infinity_x,
  inf_y: get_infinity_y,
  inf_x2: get_infinity_x2,
  inf_y2: get_infinity_y2,
  ints_f12: get_focal_inter_triangle,
  ints_f12c: get_focal_inter_triangle_caustic,
  poinc: get_poinc_circum
};

function get_derived_tri(a, orbit, sides, tri_type, cpn, pn, mounting) {
  let ret_tri = { o: orbit, s: sides };

  if (tri_type in dict_tri_fns_bicentric) {
    const tri0 = dict_tri_fns_bicentric[tri_type](a, 1, orbit, sides, mounting);
    ret_tri = { o: tri0, s: tri_sides(tri0) };
  } /*else if (tri_type in dict_tri_fns_cremona) {
    const inv_fn = (tri, sides, p) => dict_tri_fns_cremona[tri_type](a, p)
    ret_tri = invert_tri({ o: orbit, s: sides }, inv_fn);
  } */else if (tri_type in dict_tri_fns_inv) {
    const inv_fn = (tri, sides, p) => circle_inversion(p, tri_fns_invert(tri_type, a, mounting) /*dict_tri_fns_inv[tri_type].fn(a)*/)
    ret_tri = invert_tri({ o: orbit, s: sides }, inv_fn);
  } else if (mounting in dict_caustic && tri_type in dict_graves) {
    // some poncelet families have the "caustic" wrong.
    const ta = get_true_axes(a, mounting);
    //const [ac, bc] = ["inellipse", "brocard", "excentral", "macbeath"].includes(mounting) ? [a, 1] : dict_caustic[mounting](a);
    const tri0 = dict_graves[tri_type](orbit[0], ta);
    ret_tri = { o: tri0, s: tri_sides(tri0) };
  } else if (tri_type in dict_tri_fns) { // "reference" returns itself
    const ts = dict_tri_fns[tri_type](sides);
    const tri0 = generic_triangle(orbit, sides, ts);
    ret_tri = { o: tri0, s: tri_sides(tri0) };
  }

  if (cpn in dict_tri_pfns) {
    const bs = get_Xn_bary(ret_tri.s, pn);
    const ts_p = barys_to_trilins(bs, ret_tri.s);
    let tri0;
    switch (dict_tri_pfns[cpn].needs) {
      case "tri": tri0 = dict_tri_pfns[cpn].fn(ret_tri.o, ret_tri.s, ts_p); break;
      case "tri_xk": tri0 = dict_tri_pfns[cpn].fn(ret_tri.o, ret_tri.s, ts_p, dict_tri_pfns[cpn].xk); break;
      case "tri_pn": tri0 = dict_tri_pfns[cpn].fn(ret_tri.o, ret_tri.s, pn); break;
      // what if the outer ell is "vertical" like in the excentral case?
      case "ell": tri0 = dict_tri_pfns[cpn].fn(ret_tri.o, ret_tri.s, ts_p, a); break;
      case "cau": {
        const [ac, bc] = !(mounting in dict_caustic) || ["inellipse", "brocard", "excentral", "macbeath"].includes(mounting) ? [a, 1] : dict_caustic[mounting](a);
        tri0 = dict_tri_pfns[cpn].fn(ret_tri.o, ret_tri.s, ts_p, ac, bc);
        break;
      };
      default: {
        const ts = dict_tri_pfns[cpn].fn(ret_tri.s, ts_p);
        tri0 = generic_triangle(ret_tri.o, ret_tri.s, ts);
      }
    }
    ret_tri = { o: tri0, s: tri_sides(tri0), o_deriv: ret_tri.o, s_deriv: ret_tri.s };
  }
  return ret_tri;
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

