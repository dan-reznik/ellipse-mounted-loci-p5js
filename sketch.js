let glob = {
   width: 0,
   height: 0,
   ctr0: [0, 0],
   ctr: [0, 0],
   mouse: [0, 0],
   scale0: 6,
   // scale, scale0 should be on ui
   scale: 6, // = scale0
   dragged: false,
   click_ell: false,
   loop_ccw: true,
   loop: true,
   tDeg: 0,
   slider_focus: 'X',
   // tri_type_p_selected : true,
   locus_branched: [null, null, null, null],
   locus_subpolys: [null, null, null, null],
   clrs_shuffled: [null, null, null, null],
   clrs_shuffled_seeds: [[], [], [], []],
   ell_detects: ['X', 'X', 'X', 'X'],
   jukebox_id: 0, jukebox_json: {}, jukebox_image_index: 0, jsonIsReady: false, jukeboxClicked: 0, jukebox_countdown: 0,
   scaleFactor: 1,
   ui0: {
      a: 1.618, a_speed: 0, a_min: 1.01, a_max: 4,
      ell: true,
      animStep0: "0.500",
      bg: [5, 5, 25],
      rmax: 10.0,
      rot: "0", // "90", "180", "270"
      // needs to refactor this
      locus_type_1: 'trilins', locus_type_2: 'none', locus_type_3: 'none', locus_type_4: 'none',
      Xn1: '1', Xn2: '1', Xn3: '1', Xn4: '1',
      Pn1: '1', Pn2: '1', Pn3: '1', Pn4: '1',
      tri_type_1: 'reference', tri_type_2: 'reference', tri_type_3: 'reference', tri_type_4: 'reference',
      cpn_1: 'off', cpn_2: 'off', cpn_3: 'off', cpn_4: 'off',
      draw_tri_1: true, draw_tri_2: false, draw_tri_3: false, draw_tri_4: false,
      mounting_Xn1: 'billiard', mounting_Xn2: 'billiard', mounting_Xn3: 'billiard', mounting_Xn4: 'billiard',
      clr1: clr_invert_ui(clr_red), clr2: clr_invert_ui(clr_dark_green),
      clr3: clr_invert_ui(clr_blue), clr4: clr_invert_ui(clr_purple),
      tandem_loc: false, tandem_mnt: false, tandem_xn: false, tandem_tri: false, tandem_pn: false,
      jukebox_playlist: 'off',
      fill_alpha: .5, clr_fill_border: clr_white,
      inv1: 'off', inv2: 'off', inv3: 'off', inv4: 'off',
      circ1: 'off', circ2: 'off', circ3: 'off', circ4: 'off'
   },
   ui: null,
   url_params: {},
}

function get_glob_indexed() {
   return {
      Xns: [glob.ui.Xn1, glob.ui.Xn2, glob.ui.Xn3, glob.ui.Xn4],
      Pns: [glob.ui.Pn1, glob.ui.Pn2, glob.ui.Pn3, glob.ui.Pn4],
      l_types: [glob.ui.locus_type_1, glob.ui.locus_type_2, glob.ui.locus_type_3, glob.ui.locus_type_4],
      dr_tris: [glob.ui.draw_tri_1, glob.ui.draw_tri_2, glob.ui.draw_tri_3, glob.ui.draw_tri_4],
      mountings: [glob.ui.mounting_Xn1, glob.ui.mounting_Xn2, glob.ui.mounting_Xn3, glob.ui.mounting_Xn4],
      t_types: [glob.ui.tri_type_1, glob.ui.tri_type_2, glob.ui.tri_type_3, glob.ui.tri_type_4],
      cpns: [glob.ui.cpn_1, glob.ui.cpn_2, glob.ui.cpn_3, glob.ui.cpn_4],
      clrs: [glob.ui.clr1, glob.ui.clr2, glob.ui.clr3, glob.ui.clr4],
      invs: [glob.ui.inv1, glob.ui.inv2, glob.ui.inv3, glob.ui.inv4],
      circs: [glob.ui.circ1, glob.ui.circ2, glob.ui.circ3, glob.ui.circ4]
   }
}

// needs to refactor w/ new array ui design
function create_locus(locus_type_changed, init) {
   locus_type_changed = locus_type_changed.toString();
   let tdegStep = 1; //valor inicial de degStep0
   let g_ind = get_glob_indexed();

   for (let i = 0; i < g_ind.Xns.length; i++)
      if ([(i + 1).toString(), "0"].includes(locus_type_changed)) {
         glob.locus_branched[i] = make_locus_branched(+glob.ui.a,
            tdegStep,
            glob.ui.rmax,
            g_ind.Xns[i],
            g_ind.mountings[i],
            g_ind.l_types[i],
            g_ind.t_types[i],
            g_ind.cpns[i],
            g_ind.Pns[i],
            g_ind.circs[i],
            g_ind.invs[i]);
         glob.ell_detects[i] = locus_conic(glob.locus_branched[i]);
         if (init != true) {
            glob.locus_subpolys[i] = null;
            glob.clrs_shuffled_seeds[i] = [];
            glob.clrs_shuffled[i] = null;
         }
      }
}

function create_shuffled_clrs(i) {
   if (glob.clrs_shuffled_seeds[i].length > 0) {
      glob.clrs_shuffled[i] = shuffle_seeded(clrs_crayola.map(c => c.rgb),
         glob.clrs_shuffled_seeds[i].last());
   }
}

function clicked_on_palette_button(n, right_arrow = true) {
   const seed = random32() & 0xffff; // 16 bits
   if (right_arrow)
      glob.clrs_shuffled_seeds[n].push(seed);
   else
      glob.clrs_shuffled_seeds[n].pop(seed);
   //console.log(glob.clrs_shuffled_seeds[n])

   create_shuffled_clrs(n);

   //glob.clrs_shuffled[n] = shuffle_seeded(clrs_crayola.map(c=>c.rgb), (seed==null)?0:seed);

   create_locus_subpolys(n);
}

function create_locus_subpolys(n) {
   if (glob.locus_branched[n] != null && glob.locus_subpolys[n] == null) {
      let finite_loci = glob.locus_branched[n].filter(l => l.length > 20);
      if (finite_loci.length > 0) {
         glob.locus_subpolys[n] = locus_subpolys(finite_loci, 0);
         //const seed = +glob.clrs_shuffled_seeds[n].last();
         //if (seed==undefined) console.log("create_locus_subpolys(): undefined seed");
         //glob.locus_subpolys = locus_separate(glob.locus_branched.filter(l=>l.length>4));
      }
   }
}

function get_window_width_height() {
   var width = document.getElementsByClassName('item graphic')[0].offsetWidth;
   var heigth = document.getElementsByClassName('item graphic')[0].offsetHeight;
   return [width, heigth];
}


function recenter() {
   glob.ctr0 = [glob.width / 2, glob.height / 2];
   glob.ctr = [glob.width / 2, glob.height / 2];
   glob.mouse = [glob.width / 2, glob.height / 2];
}

function fixHamburguerPosition() {
   var canvas = document.getElementById('canvas');

   var hamburguerMenu = document.getElementById('menuHamburguer');
   canvas.appendChild(hamburguerMenu)
}

function windowResized() {
   const locus_types = [glob.ui.locus_type_1, glob.ui.locus_type_2, glob.ui.locus_type_3, glob.ui.locus_type_4];
   const locus_ids = ["1", "2", "3", "4"];
   [glob.width, glob.height] = get_window_width_height();
   locus_ids.map((li, i) => {
      if (locus_types[i] !== 'none') {
         ui_changed(li, false);
         redraw()
         //bbox_rescale(li);
      }
   });
   resizeCanvas(glob.width, glob.height);
}

function mouseOverCanvas() {
   canvas_div = document.getElementById("canvas")
   canvas_div.mouseIsOver = false
   canvas_div.addEventListener('mouseover', function () { this.mouseIsOver = true; });
   canvas_div.addEventListener('mouseout', function () { this.mouseIsOver = false; });
}

function bbox_rescale(n) {
   const locus_types = [glob.ui.locus_type_1, glob.ui.locus_type_2, glob.ui.locus_type_3, glob.ui.locus_type_4];
   const bbox = locus_bbox_ctr(+glob.ui.a, locus_types[n - 1], glob.locus_branched[n - 1], glob.width / glob.height, glob.scale0);
   glob.scale = bbox.scale;
   glob.ctr = [glob.width / 2 - bbox.ctr_x * (glob.width / glob.scale), glob.height / 2 - bbox.ctr_y * (glob.width / glob.scale)];
   ui_changed_type(false);
   redraw();
}

function setup() {
   [glob.width, glob.height] = get_window_width_height();
   recenter();
   reset_ui();
   url_params = getURLParams();
   if (Object.keys(url_params).length > 0) { set_url_params(url_params); }
   let canvas = createCanvas(glob.width, glob.height);
   canvas.parent('canvas');
   setup_ui();
   mouseOverCanvas();

   //frameRate(15);
}

isBackgroundLuminanceLow = (bg) => get_luminance(bg) < 0.5;

function get_LArR(sides) {
   const L = 2.0 * get_semiperimeter(sides);
   const A = tri_area(sides);
   const r = get_inradius(sides);
   const R = get_circumradius(sides);
   return {L:L,A:A,r:r,R:R,rR:safe_div(r,R)};
}

function get_info_arr(info,not_ref) {
   return not_ref?
   [info.L, info.A, info.r, info.R, info.rR, info_der.L, info_der.A, info_der.r, info_der.R, info_der.rR,
   safe_div(info_der.L, info.L), safe_div(info_der.A, info.A), info_der.A*info.A]:
   [info.L, info.A, info.r, info.R, info.rR];
}

function get_orbit_info_both(a, tDeg, mounting, tri_type, cpn, pn, circ, inv) {
   const not_ref = tri_type != "reference" || (inv != "off"&&circ!="off") || cpn != "off";
   const orbit = mounting in dict_orbit_fn ?
      get_poncelet_derived(a, tDeg, dict_orbit_fn[mounting], mounting, tri_type, cpn, pn, circ, inv) :
      get_mounted_derived(a, tDeg, mounting, tri_type, cpn, pn, circ, inv);
   const info = get_LArR(orbit.ons.s);
   //const info_der = not_ref ? get_LArR(orbit.derived.s) : info;

      /* to do ... only show invariants &&& */
   const orbit2 = mounting in dict_orbit_fn ?
      get_poncelet_derived(a, tDeg+5., dict_orbit_fn[mounting], mounting, tri_type, cpn, pn, circ, inv) :
      get_mounted_derived(a, tDeg+5., mounting, tri_type, cpn, pn, circ, inv);
   const info2 = get_LArR(orbit2.ons.s);
   //const info2_der = not_ref ? get_LArR(orbit2.derived.s) : info;

   const labs = not_ref ?
   ["L", "A", "r", "R", "r/R", "L'", "A'", "r'", "R'", "r'/R'","L'/L", "A'/A", "A'.A"]:
   ["L", "A", "r", "R", "r/R"];
   const vals = get_info_arr(info,not_ref);
   const vals2 = get_info_arr(info2,not_ref);
   let str_invs = [];
   labs.map((l,i)=> {if(!negl2(vals[i]*vals2[i])&&negl(vals[i]-vals2[i])) str_invs.push(sprintf(l+"=%.5f",vals[i]));});

   //const str0 = sprintf("L=%.5f, A=%.5f, r=%.5f, R=%.5f, r/R=%.5f", info.L, info.A, info.r, info.R, info.rR);
   //const str = not_ref ? str0 + sprintf("\nL'=%.5f, A'=%.5f, r'=%.5f, R'=%.5f, r'/R'=%.5f"+
   //   "\nL'/L=%.5f, A'/A=%.5f, A'.A=%.5f",
   //   info_der.L, info_der.A, info_der.r, info_der.R, info_der.rR,
   //   safe_div(info_der.L, info.L), safe_div(info_der.A, info.A), info_der.A*info.A) : str0;
   return { o: orbit.derived.o, s: orbit.derived.s, L: info.L, A: info.A, str: str_invs.join(", "), lines: not_ref ? /*3*/1 : 1 };
}

function draw() {
   const dict_rot = { "0": 0, "90": PI / 2, "180": PI, "270": -PI / 2, "-90": -PI / 2 };
   // vamos usar glob.bg;
   background(...glob.ui.bg); // (220, 220, 200);

   push();
   translate(glob.ctr[0], glob.ctr[1]);
   scale(glob.width / (glob.scale * glob.scaleFactor));
   rotate(dict_rot[glob.ui.rot]);
   let stroke_w = sqrt(glob.scale * glob.scaleFactor / glob.scale0) * .02;

   if (glob.ui.ell)
      draw_ellipse(glob.ui.mounting_Xn1 == "poristic" ? 1 : +glob.ui.a,
         isBackgroundLuminanceLow(glob.ui.bg) ? clr_white : clr_black,
         isBackgroundLuminanceLow(glob.ui.bg) ? clr_gray : clr_light_gray,
         stroke_w, glob.ui.mounting_Xn1 !== "poristic");

   // need to refactor glob.* so there is one object

   const a = +glob.ui.a;
   const g_ind = get_glob_indexed();

   for (let i = 0; i < g_ind.Xns.length; i++) {
      draw_billiard_or_mounted_branched(a, glob.tDeg, glob.ui.rot, stroke_w, glob.ui.ell,
         g_ind.clrs[i], g_ind.Xns[i], glob.locus_branched[i], g_ind.l_types[i], g_ind.dr_tris[i], g_ind.mountings[i],
         g_ind.t_types[i], g_ind.cpns[i], g_ind.Pns[i], glob.ell_detects[i], glob.locus_subpolys[i] == null,
         g_ind.circs[i], g_ind.invs[i], clr_brown); //isBackgroundLuminanceLow(glob.ui.bg)?clr_brown:clr_wheat);

      // experimenting with coloring &&&
      //create_locus_subpolys(0)
      draw_locus_subpolys(glob.locus_subpolys[i], glob.clrs_shuffled[i], stroke_w, glob.ui.fill_alpha, glob.ui.clr_fill_border);
   }
   a_anim();

   pop();

   const canvasTextColor = isBackgroundLuminanceLow(glob.ui.bg) ? clr_invert_ui(clr_blue) : clr_blue;
   // &&& WORKING HERE
   if (glob.ui.ell) {
      const orbit_info = get_orbit_info_both(a, glob.tDeg, g_ind.mountings[0], g_ind.t_types[0],
         g_ind.cpns[0], g_ind.Pns[0], g_ind.circs[0], g_ind.invs[0]);
      draw_text_full(orbit_info.str, [10, glob.height - 12 * orbit_info.lines], canvasTextColor);
   }


   if (glob.jsonIsReady && glob.ui.jukebox_playlist != 'off') {
      draw_text_full(glob.jukebox_json[glob.ui.jukebox_playlist].values.columns['name'][glob.jukebox_image_index], [5, 15], canvasTextColor);
      draw_text_full(`http://bit.ly/${glob.jukebox_json[glob.ui.jukebox_playlist].values.columns['bit.ly'][glob.jukebox_image_index]}`, [5, 30], canvasTextColor);
   }

   draw_text_full("(c) 2020 Darlan & Reznik", [glob.width - 150, glob.height - 24], canvasTextColor);
   draw_text_full("dan-reznik.github.io/ellipse-mounted-loci-p5js/",
      [glob.width - 260, glob.height - 10], canvasTextColor);
   if (glob.loop) glob.tDeg += (glob.loop_ccw ? (+glob.ui.animStep0) : -(+glob.ui.animStep0));
}

function mouse_in_ell(a, b = 1) {
   let m = [mouseX, mouseY];
   let p = vscale(vdiff(m, glob.ctr), glob.scale / glob.width);
   return in_ell(a, b, p);
}

function mousePressed() {
   glob.ctr0 = JSON.parse(JSON.stringify(glob.ctr));
   glob.dragged = false;
   glob.mouse = [mouseX, mouseY];
}

function mouseReleased() {
   glob.click_ell = false;
}

function mouseDragged() {
   if (canvas_div.mouseIsOver) {
      glob.dragged = true;
      glob.ctr = vsum(vdiff([mouseX, mouseY], glob.mouse), glob.ctr0);
      if (!glob.loop) {
         ui_changed_type(false);
         redraw();
      }
   }
}

function mouseWheel(event) {
   if (event.delta > 0)
      glob.scale *= 1.05;
   else
      glob.scale *= 0.95;
   if (!glob.loop) {
      ui_changed_type(false);
      redraw();
   }
   return false;
}
