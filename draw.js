function draw_generic_triangle_low(tri, rgb) {
  draw_tri(tri, rgb, wgt = 0.01);
  tri.map(v => draw_point(v, rgb));
}

function draw_generic_triangle(ons, rgb, tri_fn) {
  let tri = tri_fn(ons.o, ons.s);
  draw_generic_triangle_low(tri, rgb);
}

function draw_intouch(ons, rgb) {
  draw_generic_triangle(ons, rgb, intouch_triangle);
}

function draw_ant_intouch(ons, rgb) {
  draw_generic_triangle(ons, rgb, ant_intouch_triangle);
}

function draw_feuerbach(ons, rgb) {
  draw_generic_triangle(ons, rgb, feuerbach_triangle);
}

function draw_excentral(ons, rgb) {
  draw_generic_triangle(ons, rgb, excentral_triangle);
}

function draw_minus_excentral(ons, rgb) {
  draw_generic_triangle(ons, rgb, minus_excentral_triangle);
}

function draw_medial(ons, rgb) {
  draw_generic_triangle(ons, rgb, medial_triangle);
}

function draw_extouch(ons, rgb) {
  draw_generic_triangle(ons, rgb, extouch_triangle);
}

function draw_anticompl(ons, rgb) {
  draw_generic_triangle(ons, rgb, anticompl_triangle);
}

function draw_symmedial(ons, rgb) {
  draw_generic_triangle(ons, rgb, symmedial_triangle);
}

function draw_exc_symmedial(ons, rgb) {
  draw_generic_triangle(ons, rgb, exc_symmedial_triangle);
}

function draw_orthic(ons, rgb) {
  draw_generic_triangle(ons, rgb, orthic_triangle);
}

function draw_euler_tri(ons, rgb) {
  draw_generic_triangle(ons, rgb, euler_triangle);
}

function draw_euler_line(ons, rgb) {
  let x3 = trilin_X3(ons.o, ons.s);
  let x4 = trilin_X4(ons.o, ons.s);
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

function draw_locus_only(locus, rgb, stroke_w = 0.01) {
  push();
  strokeWeight(stroke_w);
  stroke(rgb);
  for (let i = 0; i < locus.length-1; i++)
    line(locus[i][0], locus[i][1], locus[i + 1][0], locus[i + 1][1]);
  pop();
}

function get_brocard_orbit_sides(orbit, sides, n) {
  return get_Xn_low_bary(orbit, sides, get_brocard(n));
}

function draw_one_locus_branch(locus) {
  for (let i = 0; i < locus.length-1; i++)
  line(locus[i][0], locus[i][1], locus[i + 1][0], locus[i + 1][1]);
}

function draw_one_locus_branch_filled(locus, fill_rgb) {
  push();
  fill(fill_rgb);
  beginShape();
  for (let i = 0; i < locus.length; i++)
     vertex(locus[i][0],locus[i][1]);
  endShape();
  pop();
}

function draw_locus_branched(locus_branches, ons, xnum, rgb, stroke_w = 0.01, locus_type) {
  const is_filled = locus_type.substr(0,2)=="f_";
  if (is_filled)
     locus_type = locus_type.substr(2);
  
  let bs;
  switch(locus_type) {
    case "brocard_1": bs = bary_brocard1(ons.s); break;
    case "brocard_2": bs = bary_brocard2(ons.s); break;
    default: bs = get_Xn_bary(ons.s,xnum); // "trilins"
  }
  const xn = barys_to_cartesian(ons.o, bs);
  //console.log(rgba_str);
  push();
  strokeWeight(stroke_w);
  stroke(rgb);
  if(is_filled) {
    const rgba_str = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},.1)`;
    locus_branches.map(l=>draw_one_locus_branch_filled(l,rgba_str));
  } else
    locus_branches.map(l=>draw_one_locus_branch(l));
  draw_point2(xn, rgb,stroke_w);

  if(locus_type == 'trilins') {
    draw_text2('X' + xnum, xn, rgb, stroke_w);
  } else if(locus_type == 'brocard_1') {
    draw_text2('Ω' + 1, xn, rgb, stroke_w);
  } else if(locus_type == 'brocard_2') {
    draw_text2('Ω' + 2, xn, rgb, stroke_w);
  }
  
  pop();
}

/*
function draw_locus(locus, ons, xnum, rgb, stroke_w = 0.01, locus_type) {
  push();
  strokeWeight(stroke_w);
  stroke(rgb);
  draw_one_locus_branch(locus);

  var xn;
  switch(locus_type) {
    case "trilins": xn = get_Xn(ons.o,ons.s,xnum); break;
    case "brocard_1": xn = trilin_brocard1(ons.o, ons.s); break;
    case "brocard_2": xn = trilin_brocard2(ons.o, ons.s); break;
  }
  draw_point(xn, rgb);
  if(locus_type == 'trilins') {
    draw_text('X' + xnum, xn, rgb);
  } else if(locus_type == 'brocard_1') {
    draw_text('Ω' + 1, xn, rgb);
  } else if(locus_type == 'brocard_2') {
    draw_text('Ω' + 2, xn, rgb);
  }
  
  pop();
}
*/

/*
function draw_labeled_point(ons, xnum, trilin_fn, rgb) {
  push();
  strokeWeight(0.01);
  stroke(rgb);
  let xn = trilin_fn(ons.o, ons.s);
  draw_point(xn, rgb);
  draw_text('X' + xnum, xn, rgb);
  pop();
}
*/

// DRAW

function draw_line([frx, fry], [tox, toy], rgb) {
  push();
  stroke(rgb);
  strokeWeight(0.01);
  line(frx, fry, tox, toy);
  pop();
}

function draw_axes(a) {
  push();
  strokeWeight(0.0125);
  stroke(clr_light_gray);
  line(-a, 0, a, 0);
  line(0, -1, 0, 1);
  pop();
}

function draw_point([x, y], rgb) {
  push();
  fill(rgb);
  strokeWeight(0);
  circle(x, y, 0.05);
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
  circle(x, y, 0.05*sqrt(stroke_w/0.01));
  pop();
}

function draw_text2(txt, p, rgb, stroke_w) {
  push();
  // hack to scale up
  textSize(0.1*stroke_w/0.01);
  strokeWeight(0);
  fill(rgb);
  textAlign(CENTER, BOTTOM);
  textStyle(NORMAL);
  text(txt, p[0], p[1] - 0.02);
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

function draw_foci(a) {
  let c = Math.sqrt(a*a-1);
  draw_point([c, 0], [0, 0, 0])
  draw_point([-c, 0], [0, 0, 0])
}

function draw_boundary(a,b,rgb) {
  push();
  noFill();
  stroke(rgb);
  strokeWeight(0.0125);
  ellipse(0, 0, 2*a, 2*b)
  pop();
}

function draw_circle_low([cx, cy], r, rgb, dr_ctr = true) {
  push();
  stroke(rgb);
  strokeWeight(0.0125);
  noFill();
  circle(cx, cy, 2 * r);
  if (dr_ctr) draw_point([cx, cy], rgb)
  pop();
}

function draw_ellipse(a) {
  draw_boundary(a,1,clr_black);
  draw_axes(a);
  draw_foci(a);
  //draw_center();
}

function draw_orbit(ons, clr, dr_sidelengths = true, dr_dashed = false, dr_normals = true) {
  const lgt = 0.2;
  push();
  // should be draw_tri_filled for obtuse
  if (dr_dashed)
    draw_tri_dashed(ons.o, clr);
  else
    draw_tri(ons.o, clr)
  for (let i = 0; i < 3; i++) {
    if (dr_normals) draw_normal(ons.o[i], ons.n[i], lgt);
    draw_point(ons.o[i], i == 0 ? clr_black : clr);
    if (dr_sidelengths) {
      let midpoint = vavg(ons.o[i], ons.o[(i + 1) % 3]);
      draw_point(midpoint, [0, 0, 0]);
      draw_text(sprintf("%.3f", ons.s[(i + 2) % 3]), // sides out of phase
        midpoint, // median
        [0, 0, 0]);
    }
  }
  pop();
}

function draw_mounted(ons, clr, dr_sidelengths = true, dr_dashed=false) {
  const lgt = 0.2;
  push();
  let tri = ons.o;
  let sides = ons.s;
  if(dr_dashed)
     draw_tri_dashed(tri, clr);
  else
     draw_tri(tri, clr);
  for (let i = 0; i < 3; i++) {
    draw_point(tri[i], i == 0 ? clr_black : clr);
    if (dr_sidelengths) {
      let midpoint = vavg(tri[i], tri[(i + 1) % 3]);
      draw_point(midpoint, [0, 0, 0]);
      draw_text(sprintf("%.3f", sides[(i + 2) % 3]), // sides out of phase
        midpoint, // median
        [0, 0, 0]);
    }
  }
  pop();
}

function linedash(p1, p2, dd) {
  let d12 = edist(p1,p2);
  let phat = vnorm(vdiff(p2,p1));
  let flag = true;
  for (let d = 0; d < d12-dd; d += dd) {
    if (flag) {
      let from = vsum(p1,vscale(phat,d));
      let to = vsum(from,vscale(phat,dd));
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

function draw_tri([p1, p2, p3], rgb, wgt = 0.015) {
  push();
  noFill();
  stroke(rgb);
  strokeWeight(wgt);
  triangle(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
  pop();
}

function draw_tri_dashed([p1, p2, p3], rgb, wgt = 0.015) {
  push();
  noFill();
  stroke(rgb);
  strokeWeight(wgt);
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

function draw_normal(p, n, lgt) {
  draw_line(p, ray(p, n, lgt), [0, 0, 0]);
}

function draw_env(ons, a, tDeg, env_locus, rgb,
                  trilFn1, trilFn2) {
  let p1 = trilFn1(ons.o, ons.s);
  let p2 = trilFn2(ons.o, ons.s);
  let [i1,i2] = ellInterRayBoth(a, p1, vnorm(vdiff(p2,p1)));
   let env = get_envelope(a, tDeg, trilFn1, trilFn2);
  
  draw_line(i1, i2, clr_light_gray);
  draw_line(p1, p2, clr_light_gray);

  draw_locus_only(env_locus, rgb, 0.01);
  draw_point(env, rgb);
  

  draw_text("C", env, rgb)
  //draw_line(p1, p2, rgb);
}