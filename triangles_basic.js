function get_circumcenter(tri) {
  const sides = tri_sides(tri);
  const x3 = get_Xn_cartesians(3, tri, sides);
  return x3;
}

function get_incenter(tri) {
  const sides = tri_sides(tri);
  const x1 = get_Xn_cartesians(1, tri, sides);
  return x1;
}

function rotate_tri_left([p1, p2, p3]) {
  return [p2, p3, p1];
}

/*
function get_semiperimeter(sides) {
  return 0.5 * sum(sides);
}

function tri_area2([a, b, c]) {
  const s = get_semiperimeter([a, b, c]);
  return s * (s - a) * (s - b) * (s - c);
}

const tri_area = (sides) => Math.sqrt(tri_area2(sides));
*/

function get_inradius(sides) {
  const area = tri_area(sides);
  const s = get_semiperimeter(sides);
  return safe_div(area, s);
}

function get_circumradius(sides) {
  const abc = product(sides);
  const r = get_inradius(sides);
  const s = get_semiperimeter(sides);
  return safe_div(abc, (4 * r * s));
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

/*
const omega_e2 = (sides) => 1 - 4 * sin2_omega(sides);
const omega_e = (sides) => Math.sqrt(omega_e2(sides));
*/

function rotate_tri_right([p1, p2, p3]) {
  return [p3, p1, p2];
}

function get_tri_centroid([v1, v2, v3]) {
  return [(v1[0] + v2[0] + v3[0]) / 3, (v1[1] + v2[1] + v3[1]) / 3];
}


function generic_triangle(orbit, sides, ts) {
  return ts.map(t => trilin_to_cartesian(orbit, sides, t));
}

function get_mounted_tri(a, tDeg, v2, v3) {
  const t = toRad(tDeg);
  const v1 = [a * Math.cos(t), Math.sin(t)];
  const tri = [v1, v2, v3];
  const sides = tri_sides(tri);
  const normals = tri.map(v => ell_norm(a, v));
  return { o: tri, n: normals, s: sides };
}

function invert_tri({ o, s }, inv_fn) {
  const o_inv = o.map(v => inv_fn(o, s, v));
  const sides_inv = tri_sides(o_inv);
  return { o: o_inv, s: sides_inv };
}

function get_true_axes(a, mounting) {
  let ae, be, ac, bc, f1, f2, f1c, f2c, ctr = [0, 0];
  if (mounting == "poristic") {
    const d = chapple_d(1, a + 1);
    [ae, be] = [1 + a, 1 + a];
    [ac, bc] = [1, 1];
    ctr = [-d, 0];
    f1 = [0, 0]; f2 = [0, 0];
    f1c = [d, 0]; f2c = [d, 0];
    return { ae: ae, be: be, ac: ac, bc: bc, ctr: ctr, f1: f1, f2: f2, f1c: f1c, f2c: f2c };
  } else if (mounting in dict_caustic) {
    const ab_mnt = dict_caustic[mounting](a);
    const [ae, be] = ["inellipse", "brocard", "excentral"].includes(mounting) ? ab_mnt :
      [a, 1];
    const [ac, bc] = ["inellipse", "brocard", "excentral"].includes(mounting) ? [a, 1] :
      ab_mnt;
    const c = Math.sqrt(Math.abs(ae * ae - be * be));
    f1 = vdiff(ae > be ? [-c, 0] : [0, -c], ctr);
    f2 = vdiff(ae > be ? [c, 0] : [0, c], ctr);
    const cc = Math.sqrt(Math.abs(ac * ac - bc * bc));
    f1c = vdiff(ac > bc ? [-cc, 0] : [0, -cc], ctr);
    f2c = vdiff(ac > bc ? [cc, 0] : [0, cc], ctr);
    return { ae: ae, be: be, ac: ac, bc: bc, ctr: ctr, f1: f1, f2: f2, f1c: f1c, f2c: f2c };
  } else {
    const c = Math.sqrt(a^2-1);
    return { ae: a, be: 1, ac: a, bc: 1, ctr: [0, 0], f1:[-c,0],f2:[c,0],f1c:[-c,0],f2c:[c,0]};
  }
}

function get_circumcenter(tri) {
  const sides = tri_sides(tri);
  const x3 = get_Xn_cartesians(3, tri, sides);
  return x3;
}

function get_incenter(tri) {
  const sides = tri_sides(tri);
  const x1 = get_Xn_cartesians(1, tri, sides);
  return x1;
}

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
  return safe_div(area, s);
}

function get_circumradius(sides) {
  const abc = product(sides);
  const r = get_inradius(sides);
  const s = get_semiperimeter(sides);
  return safe_div(abc, (4 * r * s));
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

function rotate_tri_right([p1, p2, p3]) {
  return [p3, p1, p2];
}

function get_tri_centroid([v1, v2, v3]) {
  return [(v1[0] + v2[0] + v3[0]) / 3, (v1[1] + v2[1] + v3[1]) / 3];
}


function generic_triangle(orbit, sides, ts) {
  return ts.map(t => trilin_to_cartesian(orbit, sides, t));
}

function get_mounted_tri(a, tDeg, v2, v3) {
  const t = toRad(tDeg);
  const v1 = [a * Math.cos(t), Math.sin(t)];
  const tri = [v1, v2, v3];
  const sides = tri_sides(tri);
  const normals = tri.map(v => ell_norm(a, v));
  return { o: tri, n: normals, s: sides };
}

function invert_tri({ o, s }, inv_fn) {
  const o_inv = o.map(v => inv_fn(o, s, v));
  const sides_inv = tri_sides(o_inv);
  return { o: o_inv, s: sides_inv };
}


// function bary_to_trilin(bs,sides)  {
//  return bs.map((b,i)=>b/sides[i]);
// }
function barys_to_trilins(bs, sides) {
    // divide by sides to get trilins
    const ts = bs.map((b, i) => b / sides[i]);
    return ts;
  }
  
  function trilins_to_barys(ts, sides) {
    // multiply by sides to get barys
    const bs = ts.map((t, i) => t * sides[i]);
    return bs;
}

function get_true_axes(a, mounting) {
  let ae, be, ac, bc, f1, f2, f1c, f2c, ctr = [0, 0];
  if (mounting == "poristic") {
    const d = chapple_d(1, a + 1);
    [ae, be] = [1 + a, 1 + a];
    [ac, bc] = [1, 1];
    ctr = [-d, 0];
    f1 = [0, 0]; f2 = [0, 0];
    f1c = [d, 0]; f2c = [d, 0];
    return { ae: ae, be: be, ac: ac, bc: bc, ctr: ctr, f1: f1, f2: f2, f1c: f1c, f2c: f2c };
  } else if (mounting in dict_caustic) {
    const ab_mnt = dict_caustic[mounting](a);
    const [ae, be] = ["inellipse", "brocard", "excentral"].includes(mounting) ? ab_mnt :
      [a, 1];
    const [ac, bc] = ["inellipse", "brocard", "excentral"].includes(mounting) ? [a, 1] :
      ab_mnt;
    const c = Math.sqrt(Math.abs(ae * ae - be * be));
    f1 = vdiff(ae > be ? [-c, 0] : [0, -c], ctr);
    f2 = vdiff(ae > be ? [c, 0] : [0, c], ctr);
    const cc = Math.sqrt(Math.abs(ac * ac - bc * bc));
    f1c = vdiff(ac > bc ? [-cc, 0] : [0, -cc], ctr);
    f2c = vdiff(ac > bc ? [cc, 0] : [0, cc], ctr);
    return { ae: ae, be: be, ac: ac, bc: bc, ctr: ctr, f1: f1, f2: f2, f1c: f1c, f2c: f2c };
  } else {
    const c = Math.sqrt(a^2-1);
    return { ae: a, be: 1, ac: a, bc: 1, ctr: [0, 0], f1:[-c,0],f2:[c,0],f1c:[-c,0],f2c:[c,0]};
  }
}

