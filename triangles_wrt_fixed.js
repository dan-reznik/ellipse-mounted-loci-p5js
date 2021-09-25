const get_polar_ctr = (a, b, tri, sides, mounting) => get_polar(tri, sides, get_true_axes(a, mounting).ctr, 1);
const get_polar_f1 = (a, b, tri, sides, mounting) => get_polar(tri, sides, get_true_axes(a, mounting).f1, 1);
const get_polar_f2 = (a, b, tri, sides, mounting) => get_polar(tri, sides, get_true_axes(a, mounting).f2, 1);
const get_polar_f1c = (a, b, tri, sides, mounting) => get_polar(tri, sides, get_true_axes(a, mounting).f1c, 1);
const get_polar_f2c = (a, b, tri, sides, mounting) => get_polar(tri, sides, get_true_axes(a, mounting).f2c, 1);


const get_pedal_ctr = (a, b, tri, sides, mounting) => get_pedal(tri, sides, get_true_axes(a, mounting).ctr);
const get_pedal_f1 = (a, b, tri, sides, mounting) => get_pedal(tri, sides, get_true_axes(a, mounting).f1);
const get_pedal_f2 = (a, b, tri, sides, mounting) => get_pedal(tri, sides, get_true_axes(a, mounting).f2);
const get_pedal_f1c = (a, b, tri, sides, mounting) => get_pedal(tri, sides, get_true_axes(a, mounting).f1c);
const get_pedal_f2c = (a, b, tri, sides, mounting) => get_pedal(tri, sides, get_true_axes(a, mounting).f2c);

const get_antipedal_ctr = (a, b, tri, sides, mounting) => get_antipedal(tri, sides, get_true_axes(a, mounting).ctr);
const get_antipedal_f1 = (a, b, tri, sides, mounting) => get_antipedal(tri, sides, get_true_axes(a, mounting).f1);
const get_antipedal_f2 = (a, b, tri, sides, mounting) => get_antipedal(tri, sides, get_true_axes(a, mounting).f2);
const get_antipedal_f1c = (a, b, tri, sides, mounting) => get_antipedal(tri, sides, get_true_axes(a, mounting).f1c);
const get_antipedal_f2c = (a, b, tri, sides, mounting) => get_antipedal(tri, sides, get_true_axes(a, mounting).f2c);

function get_x3_map_ctr(a, b, tri, sides, mounting) {
    const ctr = get_true_axes(a, mounting).ctr;
    const x3s = tri.map((v, i) => get_circumcenter([ctr, v, tri[i == 2 ? 0 : i + 1]]));
    // bicentric
    return x3s;
}

function get_x3_map_f1(a, b, tri, sides, mounting) {
    const f1 = get_true_axes(a, mounting).f1;
    const x3s = tri.map((v, i) => get_circumcenter([f1, v, tri[i == 2 ? 0 : i + 1]]));
    // bicentric
    return x3s;
}

function get_x3_map_f1c(a, b, tri, sides, mounting) {
    const f1c = get_true_axes(a, mounting).f1c;
    const x3s = tri.map((v, i) => get_circumcenter([f1c, v, tri[i == 2 ? 0 : i + 1]]));
    return x3s;
}

function get_x3_inv_f1(a, b, tri, sides, mounting) {
    const f1 = get_true_axes(a, mounting).f1;
    return get_x3_inv_low(tri, f1);
}

function get_x3_inv_f1c(a, b, tri, sides, mounting) {
    const f1c = get_true_axes(a, mounting).f1c;
    return get_x3_inv_low(tri, f1c);
}

function get_x3_inv_ctr(a, b, tri, sides, mounting) {
    const ctr = get_true_axes(a, mounting).ctr;
    return get_x3_inv_low(tri, ctr);
}

function get_ellcevian_ctr(a, b, tri, sides, mounting) {
    const ta = get_true_axes(a, mounting);
    const tri0 = tri.map(v => vdiff(v, ta.ctr))
        .map(v => farthestPoint(ellInterRaybBoth(ta.ae, ta.be, v, vdiff(v, ta.ctr)), v))
        .map(v => vsum(v, ta.ctr));
    return tri0;
}

/*
function extouch_outer1_triangle([a, b, c]) {
  const s = (a+b+c)/2;
  const bs = [[0, s - b, s - c], [-s + b, 0, s], [-s + c, s, 0]];
  return bs.map(b0=>barys_to_trilins(b0,[a,b,c]));
}
*/

function get_ellcevian_f1(a, b, tri, sides, mounting) {
    const ta = get_true_axes(a, mounting);
    const tri0 = tri.map(v => vdiff(v, ta.ctr))
        .map(v => farthestPoint(ellInterRaybBoth(ta.ae, ta.be, v, vdiff(v, ta.f1)), v))
        .map(v => vsum(v, ta.ctr));
    return tri0;
}

function get_ellcevian_f1c(a, b, tri, sides, mounting) {
    const ta = get_true_axes(a, mounting);
    const tri0 = tri.map(v => vdiff(v, ta.ctr))
        .map(v => farthestPoint(ellInterRaybBoth(ta.ae, ta.be, v, vdiff(v, ta.f1c)), v))
        .map(v => vsum(v, ta.ctr));
    return tri0;
}

const dict_weird_outer = {
    inellipse: caustic_inellipse,
    brocard: caustic_brocard,
    excentral: caustic_excentral,
    poristic: ((a) => [1 + a, 1 + a])
};

function get_infinity_y(a, b, tri, sides, mounting) {
    const x3 = ["brocard", "poristic"].includes(mounting) ? get_circumcenter(tri) : [0, 0];
    const [ar, br] = mounting in dict_weird_outer ? dict_weird_outer[mounting](a) : [a, b];
    const cs = tri.map(v => (v[0] - x3[0]) / ar);;
    const ss = tri.map(v => (v[1] - x3[1]) / br);
    // s2t = 2 st ct
    const new_tri = tri.map((v, i) => [v[0], x3[1] + br * 2 * ss[i] * cs[i]]);
    return new_tri;
}

function get_infinity_y2(a, b, tri, sides, mounting) {
    const x3 = ["brocard", "poristic"].includes(mounting) ? get_circumcenter(tri) : [0, 0];
    const [ar, br] = mounting in dict_weird_outer ? dict_weird_outer[mounting](a) : [a, b];
    const cs = tri.map(v => (v[0] - x3[0]) / ar);;
    const ss = tri.map(v => (v[1] - x3[1]) / br);
    // s2t = 2 st ct
    const new_tri = tri.map((v, i) => [v[0], x3[1] + Math.abs(v[1] - x3[1]) * (br * 2 * ss[i] * cs[i])]);
    return new_tri;
}

function get_infinity_x(a, b, tri, sides, mounting) {
    const x3 = ["brocard", "poristic"].includes(mounting) ? get_circumcenter(tri) : [0, 0];
    const [ar, br] = mounting in dict_weird_outer ? dict_weird_outer[mounting](a) : [a, b];
    const cs = tri.map(v => (v[0] - x3[0]) / ar);;
    const ss = tri.map(v => (v[1] - x3[1]) / br);
    // c2t = ct^2-st^2
    const new_tri = tri.map((v, i) => [x3[0] + ar * (2 * ss[i] * cs[i]), v[1]]);
    return new_tri;
}

function get_infinity_x2(a, b, tri, sides, mounting) {
    const x3 = ["brocard", "poristic"].includes(mounting) ? get_circumcenter(tri) : [0, 0];
    const [ar, br] = mounting in dict_weird_outer ? dict_weird_outer[mounting](a) : [a, b];
    const cs = tri.map(v => (v[0] - x3[0]) / ar);;
    const ss = tri.map(v => (v[1] - x3[1]) / br);
    // c2t = ct^2-st^2
    const new_tri = tri.map((v, i) => [x3[0] + Math.abs(v[0] - x3[0]) * (2 * ss[i] * cs[i]), v[1]]);
    return new_tri;
}



function get_polar_pedal_lim2(a, b, tri, sides, mounting) {
    const c = Math.sqrt(a * a - b * b);
    // bicentric
    const bic_tri = get_polar_f1(a, b, tri, sides);
    const bic_sides = tri_sides(bic_tri);
    // pedal wrt lim2
    const lim2 = [-c + 1 / c, 0];
    const lim_tri = get_pedal(bic_tri, bic_sides, lim2);
    return lim_tri;
}

const dict_tri_fns_bicentric = {
    ped_lim2: get_polar_pedal_lim2,
    //inv_lim2: get_inv_lim2,
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
    ints_f12c: get_focal_inter_triangle_caustic
};