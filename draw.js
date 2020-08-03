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
  for (let i = 0; i < locus.length - 1; i++)
    line(locus[i][0], locus[i][1], locus[i + 1][0], locus[i + 1][1]);
  pop();
}

function get_brocard_orbit_sides(orbit, sides, n) {
  return get_Xn_low(orbit, sides, get_brocard(n));
}

function draw_locus(locus, ons, xnum, rgb, stroke_w = 0.01, locus_type) {
  push();
  strokeWeight(stroke_w);
  stroke(rgb);
  for (let i = 0; i < locus.length - 1; i++)
    line(locus[i][0], locus[i][1], locus[i + 1][0], locus[i + 1][1]);

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

function draw_labeled_point(ons, xnum, trilin_fn, rgb) {
  push();
  strokeWeight(0.01);
  stroke(rgb);
  let xn = trilin_fn(ons.o, ons.s);
  draw_point(xn, rgb);
  draw_text('X' + xnum, xn, rgb);
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

// DRAW BILLIARD

function draw_center() {
  draw_point([0, 0], [150, 0, 0])
}

function draw_boundary(a) {
  push();
  strokeWeight(0.0125);
  ellipse(0, 0, 2 * a, 2)
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

function draw_billiard(a) {
  draw_boundary(a);
  draw_axes(a);
  //draw_center();
}

function draw_orbit(ons, clr, dr_sidelengths = true, dr_dashed = false) {
  const lgt = 0.2;
  push();
  // should be draw_tri_filled for obtuse
  if (dr_dashed)
  draw_tri_dashed(ons.o, clr);
  else
  draw_tri(ons.o, clr)
  for (let i = 0; i < 3; i++) {
    draw_normal(ons.o[i], ons.n[i], lgt);
    draw_point(ons.o[i], i == 0 ? clr_dark_red : [0, 0, 0]);
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
    draw_point(tri[i], i == 0 ? clr_orange : [0, 0, 0]);
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

function linedash_old(x1, y1, x2, y2, delta, style = '-') {
  // delta is both the length of a dash, the distance between 2 dots/dashes, and the diameter of a round
  let distance = dist(x1,y1,x2,y2);
  let dashNumber = distance/delta;
  let xDelta = (x2-x1)/dashNumber;
  let yDelta = (y2-y1)/dashNumber;

  for (let i = 0; i < dashNumber; i+= 2) {
    let xi1 = i*xDelta + x1;
    let yi1 = i*yDelta + y1;
    let xi2 = (i+1)*xDelta + x1;
    let yi2 = (i+1)*yDelta + y1;

    if (style == '-') { line(xi1, yi1, xi2, yi2); }
    else if (style == '.') { point(xi1, yi1); }
    else if (style == 'o') { ellipse(xi1, yi1, delta/2); }
  }
}


function linedash(p1, p2, drho) {
  let flag = true;
  for (let rho = 0; rho < 1-drho; rho += drho) {
    if (flag) {
      let from = vinterp(p1, p2, rho);
      let to = vinterp(p1, p2, rho + drho);
      line(from[0], from[1], to[0], to[1]);
    } else
       rho -= 0.5*drho;
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
  linedash(p1, p2, 0.05);
  linedash(p2, p3, 0.05);
  linedash(p3, p1, 0.05);
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