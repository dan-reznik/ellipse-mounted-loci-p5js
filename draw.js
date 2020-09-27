function draw_generic_triangle_low(tri, rgb) {
  draw_tri(tri, rgb, wgt = 0.01);
  tri.map(v => draw_point(v, rgb));
}

function draw_generic_triangle(ons, rgb, tri_fn) {
  let tri = tri_fn(ons.o, ons.s);
  draw_generic_triangle_low(tri, rgb);
}

function draw_euler_line(ons, rgb) {
  let x3 = get_Xn_cartesians(3, ons.o, ons.s);
  let x4 = get_Xn_cartesians(4, ons.o, ons.s);
  draw_line(x3, x4, rgb);
}

function draw_circle(ons, trilin_fn, vtx_fn, rgb) {
  let ctr = trilin_fn(ons.o, ons.s);
  let vtx = vtx_fn(ons.o, ons.s);
  let rad = edist(ctr, vtx);
  draw_circle_low(ctr, rad, rgb);
}

function draw_excircles(o, s, rgb) {
  let exc = excentral_triangle(o, s);
  let ext = extouch_triangle(o, s);
  exc.map((e, i) => draw_circle_low(e, edist(e, ext[i]), rgb));
}

// CLOSER TO UI

function draw_locus_only(locus, rgb, stroke_w) {
  push();
  strokeWeight(stroke_w);
  stroke(rgb);
  for (let i = 0; i < locus.length - 1; i++)
    line(locus[i][0], locus[i][1], locus[i + 1][0], locus[i + 1][1]);
  pop();
}

function draw_one_locus_branch(locus) {
  for (let i = 0; i < locus.length - 1; i++)
    line(locus[i][0], locus[i][1], locus[i + 1][0], locus[i + 1][1]);
}

function draw_one_locus_branch_filled(locus, fill_rgb) {
  push();
  fill(fill_rgb);
  beginShape();
  for (let i = 0; i < locus.length; i++)
    vertex(locus[i][0], locus[i][1]);
  endShape();
  pop();
}

const dict_rot = { "0": 0, "90": Math.PI / 2, "180": Math.PI, "270": -Math.PI / 2, "-90": -Math.PI / 2 };

get_rgba_str = (rgb, alpha) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;

const label_dict = {
  trilins:'X',
  brocard_1:'Ω1',
  brocard_2:'Ω2',
  beltrami_1:'β1',
  beltrami_2:'β2',
  moses_1:'μ1',
  moses_2:'μ2',
  bickart_1:'σ1',
  bickart_2:'σ2',
  vtx:'V1'
}

function draw_locus_branched(locus_branches, ons, xnum, rgb, stroke_w,
  locus_type, ell_detect, rot, draw_label, inv_fn) {
  const is_filled = locus_type.substr(0, 2) == "f_";
  if (is_filled)
    locus_type = locus_type.substr(2);

  let xn;
  // should add vtx1,vtx2,vtx3
  if (locus_type == "vtx")
    xn = ons.o[0];
  else {
    const bs = locus_type in fn_any_dict ? fn_any_dict[locus_type](ons.s) : get_Xn_bary(ons.s, xnum); // "trilins"
    xn = barys_to_cartesian(ons.o, bs);
  }
  // invert
  xn = inv_fn(ons.o,ons.s, xn);

  //console.log(rgba_str);
  push();
  strokeWeight(stroke_w);
  stroke(rgb);
  if (is_filled) {
    const rgba_str = get_rgba_str(rgb, .2);
    locus_branches.map(l => draw_one_locus_branch_filled(l, rgba_str));
  } else
    locus_branches.map(l => (l != null) ? draw_one_locus_branch(l) : void (0))

  // so text will not rotate
  if (draw_label) {
    draw_point2(xn, rgb, stroke_w);
    const ell_detect_suffix = ell_detect == "X" ? "" : '(' + ell_detect + ')';
    translate(xn[0], xn[1]);
    rotate(-dict_rot[rot]);
    if (locus_type in label_dict) 
      draw_text2(label_dict[locus_type] +
        (locus_type=="trilins"?xnum:"") +
        (inv_fn==inv_fn_identity?"":"'") +
        ell_detect_suffix, [0, 0], rgb, stroke_w);
  }
  pop();
}

// DRAW

function draw_line([frx, fry], [tox, toy], rgb) {
  push();
  stroke(rgb);
  strokeWeight(0.01);
  line(frx, fry, tox, toy);
  pop();
}

function draw_line2([frx, fry], [tox, toy], rgb, stroke_w) {
  push();
  stroke(rgb);
  strokeWeight(stroke_w);
  line(frx, fry, tox, toy);
  pop();
}

function draw_axes(a, stroke_w) {
  push();
  strokeWeight(stroke_w);
  stroke(clr_invert_ui(clr_light_gray));
  line(-a, 0, a, 0);
  line(0, -1, 0, 1);
  pop();
}

function draw_point([x, y], rgb, stroke_w = .05) {
  push();
  fill(rgb);
  strokeWeight(0);
  circle(x, y, stroke_w);
  pop();
}

function draw_text(txt, p, rgb) {
  push();
  textSize(0.1);
  strokeWeight(0);
  fill(rgb);
  textAlign(CENTER, BOTTOM);
  textStyle(NORMAL);
  text(txt, p[0], p[1] - 0.02);
  pop();
}

function draw_point2([x, y], rgb, stroke_w) {
  push();
  fill(rgb);
  strokeWeight(0);
  circle(x, y, 0.05 * sqrt(stroke_w / 0.01));
  pop();
}

function draw_text2(txt, p, rgb, stroke_w) {
  push();
  // hack to scale up
  textSize(6 * stroke_w);
  strokeWeight(0);
  fill(rgb);
  textAlign(CENTER, BOTTOM);
  textStyle(NORMAL);
  text(txt, p[0], p[1] - 0.03);
  pop();
}

function draw_text_full(txt, p, rgb) {
  push();
  //textSize(0.1);
  strokeWeight(0);
  fill(rgb);
  //textAlign(CENTER, BOTTOM);
  textStyle(NORMAL);
  text(txt, p[0], p[1] - 0.02);
  pop();
}

// DRAW BILLIARD

function draw_center() {
  draw_point([0, 0], [150, 0, 0])
}

function draw_foci(a, clr, stroke_w) {
  let c = Math.sqrt(a * a - 1);
  draw_point2([c, 0], clr, stroke_w / 2);
  draw_point2([-c, 0], clr, stroke_w / 2);
}

function draw_boundary(a, b, rgb, stroke_w) {
  push();
  noFill();
  stroke(rgb);
  strokeWeight(stroke_w);
  ellipse(0, 0, 2 * a, 2 * b)
  pop();
}

function draw_circle_low([cx, cy], r, rgb, stroke_w = 0.0125, dr_ctr = true) {
  push();
  stroke(rgb);
  strokeWeight(stroke_w);
  noFill();
  circle(cx, cy, 2 * r);
  if (dr_ctr) draw_point([cx, cy], rgb)
  pop();
}

function draw_ellipse(a, stroke_w, dr_foci) {
  draw_boundary(a, 1, clr_invert_ui(clr_black), stroke_w);
  draw_axes(a, stroke_w);
  if (dr_foci) draw_foci(a, clr_invert_ui(clr_black), stroke_w);
  //draw_center();
}

// precisa de stroke_w &&&
function draw_orbit(ons, clr, stroke_w, dr_sidelengths = true, dr_dashed = false, dr_normals = true) {
  const lgt = 0.2;
  push();
  // should be draw_tri_filled for obtuse
  if (dr_dashed)
    draw_tri_dashed2(ons.o, clr, stroke_w);
  else
    draw_tri2(ons.o, clr, stroke_w)
  for (let i = 0; i < 3; i++) {
    if (dr_normals) draw_normal(ons.o[i], ons.n[i], lgt, stroke_w);
    draw_point2(ons.o[i], clr_invert_ui(i == 0 ? clr_black : clr), stroke_w);
    if (dr_sidelengths) {
      let midpoint = vavg(ons.o[i], ons.o[(i + 1) % 3]);
      draw_point2(midpoint, clr_invert_ui(clr_black), stroke_w);
      draw_text2(sprintf("%.3f", ons.s[(i + 2) % 3]), // sides out of phase
        midpoint, clr_invert_ui(clr_black), stroke_w);
    }
  }
  pop();
}

function draw_mounted(ons, clr, stroke_w, dr_sidelengths = true, dr_dashed = false) {
  const lgt = 0.2;
  push();
  let tri = ons.o;
  let sides = ons.s;
  if (dr_dashed)
    draw_tri_dashed2(tri, clr, stroke_w);
  else
    draw_tri2(tri, clr, stroke_w);
  for (let i = 0; i < 3; i++) {
    draw_point2(tri[i], clr_invert_ui(i == 0 ? clr_black : clr), stroke_w);
    if (dr_sidelengths) {
      let midpoint = vavg(tri[i], tri[(i + 1) % 3]);
      draw_point2(midpoint, clr_invert_ui(clr_black), stroke_w);
      draw_text2(sprintf("%.3f", sides[(i + 2) % 3]), // sides out of phase
        midpoint, // median
        clr_invert_ui(clr_black), stroke_w);
    }
  }
  pop();
}

function linedash(p1, p2, dd) {
  let d12 = edist(p1, p2);
  let phat = vnorm(vdiff(p2, p1));
  let flag = true;
  for (let d = 0; d < d12 - dd; d += dd) {
    if (flag) {
      let from = vsum(p1, vscale(phat, d));
      let to = vsum(from, vscale(phat, dd));
      line(from[0], from[1], to[0], to[1]);
    } else d += dd;
    flag = !flag;
  }
}

function draw_tri([p1, p2, p3], rgb, wgt = 0.015) {
  push();
  noFill();
  stroke(rgb);
  strokeWeight(wgt);
  triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
  pop();
}

function draw_tri2([p1, p2, p3], rgb, stroke_w) {
  push();
  noFill();
  stroke(rgb);
  strokeWeight(stroke_w);
  triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
  pop();
}

function draw_tri_dashed2([p1, p2, p3], rgb, stroke_w) {
  push();
  noFill();
  stroke(rgb);
  strokeWeight(stroke_w);
  linedash(p1, p2, 0.025);
  linedash(p2, p3, 0.025);
  linedash(p3, p1, 0.025);
  pop();
}

function draw_tri_filled([p1, p2, p3], rgb, alpha = 0.1) {
  push();
  noStroke();
  fill(rgb[0], rgb[1], rgb[2], alpha);
  triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
  pop();
}

function draw_normal(p, n, lgt, stroke_w) {
  draw_line2(p, ray(p, n, lgt), clr_invert_ui(clr_black), stroke_w);
}

function draw_env(ons, a, tDeg, env_locus, rgb,
  trilFn1, trilFn2) {
  let p1 = trilFn1(ons.o, ons.s);
  let p2 = trilFn2(ons.o, ons.s);
  let [i1, i2] = ellInterRayBoth(a, p1, vnorm(vdiff(p2, p1)));
  let env = get_envelope(a, tDeg, trilFn1, trilFn2);

  const clr_line = clr_invert_ui(clr_light_gray);
  draw_line(i1, i2, clr_line);
  draw_line(p1, p2, clr_line);

  draw_locus_only(env_locus, rgb, 0.01);
  draw_point(env, rgb);
  draw_text("C", env, rgb)
  //draw_line(p1, p2, rgb);
}

function draw_locus_subpolys(locus_subpolys, clrs, stroke_w, alpha, border_clr) {
  if (locus_subpolys != null && locus_subpolys.length > 0) {
    let clr_count = 0;
    push();
    strokeWeight(stroke_w);
    //console.log(glob.locus_subpolys, glob.clrs_shuffled)
    locus_subpolys.map(l => {
      stroke(border_clr);
      const rgba_str = get_rgba_str(clrs[clr_count], alpha);
      draw_one_locus_branch_filled(l, rgba_str);// get_rgba_str(rgb, .5));
      clr_count = (clr_count + 1) % clrs.length;
    });
    pop();
  }
}