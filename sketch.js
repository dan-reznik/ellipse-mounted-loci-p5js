var g_width;
var g_height;
var g_main_title;
var g_ctr, g_mouse, g_ctr0;

let g_scale = 7;
let g_dragged = false;
let g_click_ell = false;
let g_loop_ccw = true;
let g_url_params = {};

let g_loop = true;
let g_tDeg = 0;
//let g_a = 1.618034;
let g_locus_Xn1 = [];
let g_locus_Xn2 = [];
let g_locus_Xn3 = [];

g_ui = {
   a: 1.618,
   aMin: 1.001,
   aMax: 4,
   aStep: 0.001,
   mounting_Xn1: ["billiard",
      "major", "minor", "mixed", "ctrMajor",
      "ctrMinor", "fs", "fsCtr", "fsLeft",
      "fsRight", "fsTop", "cornerTL_BL", "cornerTL_TR",
      "cornerTL_vtxL", "cornerTL_vtxT", "cornerTL_vtxB",
      "cornerTL_ctr", "cornerTL_BR"
   ],
   mounting_Xn2: ["billiard",
      "major", "minor", "mixed", "ctrMajor",
      "ctrMinor", "fs", "fsCtr", "fsLeft",
      "fsRight", "fsTop", "cornerTL_BL", "cornerTL_TR",
      "cornerTL_vtxL", "cornerTL_vtxT", "cornerTL_vtxB",
      "cornerTL_ctr", "cornerTL_BR"
   ],
   mounting_Xn3: ["billiard",
      "major", "minor", "mixed", "ctrMajor",
      "ctrMinor", "fs", "fsCtr", "fsLeft",
      "fsRight", "fsTop", "cornerTL_BL", "cornerTL_TR",
      "cornerTL_vtxL", "cornerTL_vtxT", "cornerTL_vtxB",
      "cornerTL_ctr", "cornerTL_BR"
   ],
   Xn1: 1, Xn1Min: 1, Xn1Max: 200, Xn1Step: 1,
   Xn2: 1, Xn2Min: 1, Xn2Max: 200, Xn2Step: 1,
   Xn3: 1, Xn3Min: 1, Xn3Max: 200, Xn3Step: 1,
   degStep0: [1, 0.1, 0.05, 0.01],
   animStep0: [0.125,0.25, 0.5, 1]
};

function make_one_locus(n, tdegStep, mounting) {
   const eps = 0.001;
   let locus_Xn = [];
   let trilin_fn = get_fn_trilin(n);
   if (g_ui[mounting] == "billiard")
      for (let tDeg = 0; tDeg < 180; tDeg += tdegStep) {
         let ons = orbit_normals(g_ui.a, tDeg);
         let xn = get_Xn_low(ons.o, ons.s, trilin_fn);
         locus_Xn.push(xn);
      } else {
      let [v1, v2] = getV1V2(g_ui.a, g_ui[mounting], eps);
      for (let tDeg = 0; tDeg < 360; tDeg += tdegStep) {
         let [v3,xn] = get_Xn_mounted(g_ui.a, tDeg + eps, v1, v2, trilin_fn);
         locus_Xn.push(xn);
      }
   }
   return locus_Xn;
}

function create_locus() {
   let tdegStep = +g_ui.degStep0;
   g_locus_Xn1 = make_one_locus(g_ui.Xn1, tdegStep, "mounting_Xn1");
   g_locus_Xn2 = make_one_locus(g_ui.Xn2, tdegStep, "mounting_Xn2");
   g_locus_Xn3 = make_one_locus(g_ui.Xn3, tdegStep, "mounting_Xn3");
}

function create_checkboxes() {
   /*let xstep = 75;
   let ystep = 22;*/
   let chks = [];

   /*let y = ystep / 2;*/
   g_main_title = create_main_title();

   //y += ystep;
   //g_radio_xn = create_radio_xn(0, y);

   /*y += 3 * ystep;*/
   create_title("© 2020 Iverton Darlan & Dan Reznik", false);
  /* y += ystep;*/
   create_title("Visit our <a href=https://dan-reznik.github.io/Elliptical-Billiards-Triangular-Orbits/videos.html>Media Page</a>", false, "made_by");
   /*y += ystep;*/
   //create_title("Visit <a href=http://mathworld.wolfram.com/ target=_blank>MathWorld</a> and <a href=https://faculty.evansville.edu/ck6/encyclopedia/ETC.html target=_blank>ETC</a>", 0, y, false);
}

function windowResized() {
   g_width = document.getElementsByClassName('item graphic')[0].offsetWidth;
   g_height = document.getElementsByClassName('item graphic')[0].offsetHeight;
   console.log(g_width)
   let pos = g_main_title.position();
   g_main_title.position(g_width / 2 - 160, pos[1]);
   resizeCanvas(windowWidth, windowHeight);
}

function ui_changed(e) {
   //console.log(g_ui.a);
   create_locus();
   redraw();
   //log.textContent = e.target.value;
}

function selector_output(input_ID, dictionary, dictionary_key, output_ID = ""){
   var selector = document.getElementById(input_ID);
   dictionary[dictionary_key] = selector.value
   if(output_ID != ""){
      var output = document.getElementById(output_ID);
      output.innerHTML = selector.value;
      selector.oninput = function() {
         output.innerHTML = this.value;
         dictionary[dictionary_key] = selector.value
         //console.log(selector)
         //console.log(input_ID)
         ui_changed()
      }
   } else {
      selector.onchange = function() {
         dictionary[dictionary_key] = selector.value
         console.log(dictionary[dictionary_key])
         ui_changed()
      }
   }
}

function play_reverse_buttons() {
   var play_button = document.getElementById('play_pause')
   var reverse_button = document.getElementById('reverse')

   play_button.play = true
   play_button.addEventListener("click", function(){
      if(this.play && g_loop){
         this.play = false;
         this.innerHTML = "Play"
         noLoop();
         g_loop = false;
     }else if (!this.play && !g_loop) {
         this.play = true;
         this.innerHTML = "Pause";
         loop();
         g_loop = true;
     }
   });

   reverse_button.checked = false
   reverse_button.addEventListener("click", function(){
      if(this.checked){
         this.checked = false;
         this.innerHTML = "Backward"
         g_loop_ccw = !g_loop_ccw;
     }else if (!this.checked) {
         this.checked = true;
         this.innerHTML = "Forward";
         g_loop_ccw = !g_loop_ccw;
     }
   });
}

function export_PNG(){
var export_png_button = document.getElementById('Export_PNG')

   export_png_button.addEventListener("click", function(){
      canvas = document.getElementById('defaultCanvas0')
      link = document.getElementById('link');
      link.setAttribute('download', 'graphic.png');
      link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
      link.click();
   });
}

function setup() {
   g_width = document.getElementsByClassName('item graphic')[0].offsetWidth;
   g_height = document.getElementsByClassName('item graphic')[0].offsetHeight;
   console.log(g_width)
   g_url_params = getURLParams();
   //http://p5js.org?year=2014&month=May&day=15
   //text(params.day, 10, 20);
   //text(params.month, 10, 40);
   //text(params.year, 10, 60);
   //console.log("what are they",g_url_params);

   create_checkboxes();
   canvas = createCanvas(g_width, g_height);
   canvas.parent('canvas');
   //mouseOverCanvas
   canvas_div = document.getElementById("canvas")
   this.mouseIsOver = false
   canvas_div.onmouseover = function() {
      this.mouseIsOver = true
   }
   canvas_div.onmouseout = function() {
      this.mouseIsOver = false
   }
   //frameRate(15);
   g_ctr0 = [g_width / 2, g_height / 2];
   g_ctr = g_ctr0;
   g_mouse = g_ctr0;

   //sliders
   //a
   selector_output("input_a", g_ui, "a", output_ID = "demo_a")
   //Xn1
   selector_output("input_Xn1", g_ui, "Xn1", output_ID = "demo_Xn1")
   //Xn2
   selector_output("input_Xn2", g_ui, "Xn2", output_ID = "demo_Xn2")
   //Xn3
   selector_output("input_Xn3", g_ui, "Xn3", output_ID = "demo_Xn3")

   //dropbox
   //animStep0
   selector_output("input_animStep0", g_ui, "animStep0", output_ID = "")

   //mounting
   selector_output("input_mounting_Xn1", g_ui, "mounting_Xn1", output_ID = "")
   selector_output("input_mounting_Xn2", g_ui, "mounting_Xn2", output_ID = "")
   selector_output("input_mounting_Xn3", g_ui, "mounting_Xn3", output_ID = "")

   //degStep0
   selector_output("input_degStep0", g_ui, "degStep0", output_ID = "")

   play_reverse_buttons()
   export_PNG()
   ui_changed()

   //Create a new GUI with a label
   /*let gui = createGui('Please Select');
   gui.addObject(g_ui);
   document.getElementById("Xn1")
      .addEventListener('input', ui_changed);
   document.getElementById("Xn2")
      .addEventListener('input', ui_changed);
   document.getElementById("Xn3")
      .addEventListener('input', ui_changed);
   document.getElementById("a")
      .addEventListener('input', ui_changed);
   document.getElementsByClassName("qs_select")[0]
      .addEventListener('change', ui_changed);
      */
   }

function draw_mounted_tri(a, tDeg, v1, v2, n) {
   //let [v3,xn] = get_Xn_mounted(a, tDeg, v1, v2, get_fn_trilin(n));
   let t = toRad(tDeg);
   let v3 = [a*Math.cos(t),Math.sin(t)];
   let tri = [v1, v2, v3];
   let sides = tri_sides(tri);
   draw_mounted(tri, sides, false);
   return { o: tri, s: sides };
}

function draw() {
   background(220, 220, 200);

   push();
   translate(g_ctr[0], g_ctr[1]);
   scale(g_width / g_scale);
   draw_billiard(g_ui.a);
   var check_Xn1 = document.getElementById("checkbox_Xn1")
   var check_Xn2 = document.getElementById("checkbox_Xn2")
   var check_Xn3 = document.getElementById("checkbox_Xn3")
   var check_mounting_Xn1 = document.getElementById("mounting_Xn1")
   var check_mounting_Xn2 = document.getElementById("mounting_Xn2")
   var check_mounting_Xn3 = document.getElementById("mounting_Xn3")

   if (g_ui.mounting_Xn1 == "billiard") {
      let ons = orbit_normals(g_ui.a, g_tDeg);
      if(check_mounting_Xn1.checked)
         draw_orbit(ons, true);
      if (check_Xn1.checked)
         draw_locus(g_locus_Xn1, ons, g_ui.Xn1, clr_dark_red);

   } else { // ellipse-mounted
      let [v1_Xn1, v2_Xn1] = getV1V2(g_ui.a, g_ui.mounting_Xn1, 0.001);

      if(check_mounting_Xn1.checked)
         draw_mounted_tri(g_ui.a, g_tDeg, v1_Xn1, v2_Xn1, g_ui.Xn1);
      if (check_Xn1.checked) {
         //draw_locus(g_locus_Xn1, os, g_ui.Xn1, clr_dark_red);
         draw_locus_only(g_locus_Xn1, clr_dark_red);
      }
   }

   if (g_ui.mounting_Xn2 == "billiard") {
      let ons = orbit_normals(g_ui.a, g_tDeg);
      if(check_mounting_Xn2.checked)
         draw_orbit(ons, true);
      if (check_Xn2.checked)
         draw_locus(g_locus_Xn2, ons, g_ui.Xn2, clr_dark_green);

   } else { // ellipse-mounted
      let [v1_Xn2, v2_Xn2] = getV1V2(g_ui.a, g_ui.mounting_Xn2, 0.001);

      if(check_mounting_Xn2.checked)
         draw_mounted_tri(g_ui.a, g_tDeg, v1_Xn2, v2_Xn2, g_ui.Xn2);
      if (check_Xn2.checked) {
         //draw_locus(g_locus_Xn1, os, g_ui.Xn1, clr_dark_green);
         draw_locus_only(g_locus_Xn2, clr_dark_green);
      }
   }
   if (g_ui.mounting_Xn3 == "billiard") {
      let ons = orbit_normals(g_ui.a, g_tDeg);
      if(check_mounting_Xn3.checked)
         draw_orbit(ons, true);
      if (check_Xn3.checked)
         draw_locus(g_locus_Xn3, ons, g_ui.Xn3, clr_dark_blue);

   } else { // ellipse-mounted
      let [v1_Xn3, v2_Xn3] = getV1V2(g_ui.a, g_ui.mounting_Xn3, 0.001);

      if(check_mounting_Xn3.checked)
         draw_mounted_tri(g_ui.a, g_tDeg, v1_Xn3, v2_Xn3, g_ui.Xn3);
      if (check_Xn3.checked) {
         //draw_locus(g_locus_Xn1, os, g_ui.Xn1, clr_dark_blue);
         draw_locus_only(g_locus_Xn3, clr_dark_blue);
      }
   }
   pop();

   if (g_loop) g_tDeg += (g_loop_ccw ? (+g_ui.animStep0) : -(+g_ui.animStep0));
}


function mouse_in_ell(a, b = 1) {
   let m = [mouseX, mouseY];
   let p = vscale(vdiff(m, g_ctr), g_scale / g_width);
   return in_ell(a, b, p);
}

function mousePressed() {
   g_ctr0 = g_ctr;
   g_dragged = false;
   g_mouse = [mouseX, mouseY];
   /*var g_click_ell = mouse_in_ell(g_ui.a);
   if (g_click_ell && g_loop) {
      noLoop();
      g_loop = false;
      return (false);
   } else if (g_click_ell && !g_loop) {
      if (mouseButton !== LEFT)
         g_loop_ccw = !g_loop_ccw;
      loop();
      g_loop = true;
      return (false);
   } else
      return (true);*/
}


function mouseReleased() {
   //if (!g_dragged && !g_loop) {
   //  g_loop = true;
   //  loop();
   //}
   //if(g_dragged && g_loop) loop();
   g_click_ell = false;
}

function mouseDragged() {
   if (canvas_div.mouseIsOver) {
      g_dragged = true;
      //noLoop();
      //g_loop = false;
      g_ctr = vsum(vdiff([mouseX, mouseY], g_mouse), g_ctr0);
      if (!g_loop) redraw();
      //redraw();
   }
}

function mouseWheel(event) {
   //if (mouse_in_ell(2*g_ui.a,2)) {
   if (event.delta > 0)
      g_scale *= 1.05;
   else
      g_scale *= 0.95;
   //uncomment to block page scrolling
   if (!g_loop) redraw();
   return false;
   //}
}