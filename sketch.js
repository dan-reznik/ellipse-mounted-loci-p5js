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
//let g_locus_Xn1 = [];
let g_locus_Xn1_branched = [];
let g_locus_Xn2_branched = [];
let g_locus_Xn3_branched = [];

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
   degStep0: 1,//[1, 0.1, 0.05, 0.01],
   animStep0: [0.125, 0.25, 0.5, 1]
};

function get_brocard(n) {
   let brocard_name = sprintf("trilin_brocard%d", n);
   return window[brocard_name];
}

function get_fn_any(locus_type, n) {
   switch (locus_type) {
      case 'brocard_1': return get_brocard(1);
      case 'brocard_2': return get_brocard(2);
      default: return get_fn_trilin(n);
   }
}

function get_derived_tri(orbit,sides,tri_type) {
   var tri;
   switch(tri_type){
      case "excentral":
         tri = excentral_triangle(orbit,sides);
         break;
      case "anticompl":
         tri = anticompl_triangle(orbit,sides);
         break;
      case "orthic":
         tri = orthic_triangle(orbit,sides);
         break;
      case "intouch":
         tri = intouch_triangle(orbit,sides);
         break;
      case "extouch":
         tri = extouch_triangle(orbit,sides);
         break;
         // reference 
      case "medial":
         tri = medial_triangle(orbit,sides);
         break;
         // reference 
      default: return {o:orbit,s:sides};
   }
   return {o:tri,s:tri_sides(tri)};
}

function get_Xn_orbit(a, tDeg, trilin_fn, tri_type) {
   let ons = orbit_normals(a, tDeg);
   let ons_derived = get_derived_tri(ons.o,ons.s,tri_type);
   return get_Xn_low(ons_derived.o, ons_derived.s, trilin_fn);
}

function create_locus(locus_type_changed) {
   let tdegStep = +g_ui.degStep0;
   let a = +g_ui.a;
   var locus_type_1 = document.getElementById("input_locus_type_1").value;
   var locus_type_2 = document.getElementById("input_locus_type_2").value;
   var locus_type_3 = document.getElementById("input_locus_type_3").value;

   var tri_type_1 = document.getElementById("input_tri1").value;
   var tri_type_2 = document.getElementById("input_tri2").value;
   var tri_type_3 = document.getElementById("input_tri3").value;
   //console.log(tri_type_1,tri_type_2,tri_type_3);

   //console.log(locus_type_1)
   if (locus_type_1 != "none" && ["1", "0"].includes(locus_type_changed)) {

      g_locus_Xn1_branched = make_locus_branched(a, g_ui.Xn1, tdegStep,
         g_ui.mounting_Xn1, locus_type_1, tri_type_1);
   }
   if (locus_type_2 != "none" && ["2", "0"].includes(locus_type_changed)) {

      g_locus_Xn2_branched = make_locus_branched(a, g_ui.Xn2, tdegStep,
         g_ui.mounting_Xn2, locus_type_2, tri_type_2);
   }
   if (locus_type_3 != "none" && ["3", "0"].includes(locus_type_changed)) {
      g_locus_Xn3_branched = make_locus_branched(a, g_ui.Xn3, tdegStep,
         g_ui.mounting_Xn3, locus_type_3, tri_type_3);
   }
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
   g_ctr0 = [g_width / 2, g_height / 2];
   g_ctr = g_ctr0;
   //let pos = g_main_title.position();
   //g_main_title.position(g_width / 2 - 160, pos[1]);
   resizeCanvas(g_width, g_height);
}

function ui_changed(locus_type_changed) {
   create_locus(locus_type_changed);
   redraw();
   //log.textContent = e.target.value;
}

function selector_output(input_ID, dictionary, dictionary_key, output_ID = "", locus_number="0") {
   var selector = document.getElementById(input_ID);
   dictionary[dictionary_key] = selector.value;
   if (output_ID != "") {
      var output = document.getElementById(output_ID);
      output.innerHTML = selector.value;
      selector.oninput = function () {
         output.innerHTML = this.value;
         dictionary[dictionary_key] = selector.value
         //console.log(selector)
         //console.log(input_ID)
         ui_changed(locus_number)
      }
   } else {
      selector.onchange = function () {
         dictionary[dictionary_key] = selector.value
         //console.log(dictionary[dictionary_key])
         ui_changed(locus_number)
      }
   }
}

function slider_text_changed(sliderId, dictionary, dictionary_key, textId, minus_id, plus_id, locus_number) {
   var slider = document.getElementById(sliderId);
   var text = document.getElementById(textId);
   var minus = document.getElementById(minus_id);
   var plus = document.getElementById(plus_id);

   minus.addEventListener("click", function () {
      if (slider.value > 1) {
         slider.value--;
         text.value = slider.value;
      }
      dictionary[dictionary_key] = slider.value;
      ui_changed(locus_number);
   })

   plus.addEventListener("click", function () {
      if (slider.value < 200) {
         slider.value++;
         text.value = slider.value;
      }
      dictionary[dictionary_key] = slider.value;
      ui_changed(locus_number);
   })

   slider.addEventListener("input", function () {
      text.value = this.value;
      dictionary[dictionary_key] = this.value
      ui_changed(locus_number);
   })
   text.addEventListener("input", function () {
      if (isNaN(this.value))
         this.value = this.value.slice(0, -1);
      else if (this.value > 200)
         this.value = "200"
      else if (this.value < 1)
         this.value = "1"
      slider.value = +this.value;
      dictionary[dictionary_key] = this.value
      ui_changed(locus_number);
   })
}

function export_PNG() {
   var export_png_button = document.getElementById('Export_PNG')
   var today = new Date();
   let double_digit = function (myNumber) { return ("0" + myNumber).slice(-2) }
   var date_time = double_digit(today.getDate().toString()) + double_digit((today.getMonth() + 1).toString()) +
      today.getFullYear().toString() + '_' + double_digit(today.getHours().toString()) +
      double_digit(today.getMinutes().toString()) + double_digit(today.getSeconds().toString());
   export_png_button.addEventListener("click", function () {
      //canvas = document.getElementById('defaultCanvas0');
      element = document.body;
      link = document.getElementById('link');
      link.setAttribute('download', 'tri_app_' + date_time + '.png');

      html2canvas(element, {allowTaint: true}).then(function (canvas) {
         link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
      })
      link.click();
   });
}

function play_controls() {
   var play_button = document.getElementById("play_pause");
   var backward_button = document.getElementById("backward");
   var forward_button = document.getElementById("forward");
   var play_class = "fa fa-play-circle-o";
   var stop_class = "fa fa-pause-circle-o";
   /*var backward_class = "fa fa-backward";
   var forward_class = "fa fa-forward";*/

   play_button.isPlaying = true;
   play_button.className = stop_class;
   play_button.addEventListener("click", function () {
      if (this.isPlaying && g_loop) {
         this.isPlaying = false;
         this.className = play_class;
         noLoop();
         g_loop = false;
      } else if (!this.isPlaying && !g_loop) {
         this.isPlaying = true;
         this.className = stop_class;
         loop();
         g_loop = true;
      }
   });

   backward_button.addEventListener("click", function () {
      g_loop_ccw = false;
      if (play_button.isPlaying = true) {
         play_button.isPlaying = true;
         play_button.className = stop_class;
         loop();
         g_loop = true;
      }
   });
   forward_button.addEventListener("click", function () {
      g_loop_ccw = true;
      if (play_button.isPlaying = true) {
         play_button.isPlaying = true;
         play_button.className = stop_class;
         loop();
         g_loop = true;
      }
   });
}

function tri_onchange(){
   var tri_check_1 = document.getElementById('mounting_Xn1')
   var tri_check_2 = document.getElementById('mounting_Xn2')
   var tri_check_3 = document.getElementById('mounting_Xn3')

   tri_check_1.addEventListener("click", function(){
      redraw("1");
   })
   tri_check_2.addEventListener("click", function(){
      redraw("2");
   })
   tri_check_3.addEventListener("click", function(){
      redraw("3");
   })
}

function locus_type_onchange() {
   document.getElementById("input_locus_type_1").addEventListener("change", function () { ui_changed("1"); });
   document.getElementById("input_locus_type_2").addEventListener("change", function () { ui_changed("2"); });
   document.getElementById("input_locus_type_3").addEventListener("change", function () { ui_changed("3"); });
}

function setup() {
   g_width = document.getElementsByClassName('item graphic')[0].offsetWidth;
   g_height = document.getElementsByClassName('item graphic')[0].offsetHeight;
   //console.log(g_width)
   //g_url_params = getURLParams();
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
   canvas_div.onmouseover = function () {
      this.mouseIsOver = true
   }
   canvas_div.onmouseout = function () {
      this.mouseIsOver = false
   }
   //frameRate(15);
   g_ctr0 = [g_width / 2, g_height / 2];
   g_ctr = g_ctr0;
   g_mouse = g_ctr0;

   //sliders
   //a
   selector_output("input_a", g_ui, "a", "demo_a")
   //Xn1
   slider_text_changed("input_Xn1", g_ui, "Xn1", "demo_Xn1", "minus_Xn1", "plus_Xn1", "1");
   //Xn2
   slider_text_changed("input_Xn2", g_ui, "Xn2", "demo_Xn2", "minus_Xn2", "plus_Xn2", "2");
   //Xn3
   slider_text_changed("input_Xn3", g_ui, "Xn3", "demo_Xn3", "minus_Xn3", "plus_Xn3", "3");

   //dropbox
   //animStep0
   selector_output("input_animStep0", g_ui, "animStep0", output_ID = "")

   //mounting
   selector_output("input_mounting_Xn1", g_ui, "mounting_Xn1", output_ID = "", "1")
   selector_output("input_mounting_Xn2", g_ui, "mounting_Xn2", output_ID = "", "2")
   selector_output("input_mounting_Xn3", g_ui, "mounting_Xn3", output_ID = "", "3")

   export_PNG()
   play_controls()
   locus_type_onchange()
   tri_onchange()

   ui_changed("1")

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

// function draw_mounted_tri(a, tDeg, v1, v2) {
//    //let [v3,xn] = get_Xn_mounted(a, tDeg, v1, v2, get_fn_trilin(n));
//    let ons = get_mounted_tri(a,tDeg,v1,v2)
//    draw_mounted(ons.o, ons.s, false);
// }

function draw() {
   background(220, 220, 200);

   push();
   translate(g_ctr[0], g_ctr[1]);
   scale(g_width / g_scale);
   draw_billiard(+g_ui.a);
   //var check_Xn1 = document.getElementById("checkbox_Xn1")
   //var check_Xn2 = document.getElementById("checkbox_Xn2")
   //var check_Xn3 = document.getElementById("checkbox_Xn3")
   var check_mounting_Xn1 = document.getElementById("mounting_Xn1")
   var check_mounting_Xn2 = document.getElementById("mounting_Xn2")
   var check_mounting_Xn3 = document.getElementById("mounting_Xn3")
   var locus_type_1 = document.getElementById("input_locus_type_1").value
   var locus_type_2 = document.getElementById("input_locus_type_2").value
   var locus_type_3 = document.getElementById("input_locus_type_3").value
   var tri_type_1 = document.getElementById("input_tri1").value
   var tri_type_2 = document.getElementById("input_tri2").value
   var tri_type_3 = document.getElementById("input_tri3").value

   // function draw_billiard_locus(n,a,tDeg,locus,locus_type,draw_tri,draw_locus) {
   //draw_billiard_or_mounted(g_ui.Xn1, +g_ui.a, g_tDeg,
   //      g_locus_Xn1, clr_red, locus_type_1,
   //      check_mounting_Xn1.checked, g_ui.mounting_Xn1);
   draw_billiard_or_mounted_branched(g_ui.Xn1, +g_ui.a, g_tDeg,
      g_locus_Xn1_branched, clr_red, locus_type_1,
      check_mounting_Xn1.checked, g_ui.mounting_Xn1, tri_type_1);

   draw_billiard_or_mounted_branched(g_ui.Xn2, +g_ui.a, g_tDeg,
      g_locus_Xn2_branched, clr_green, locus_type_2,
      check_mounting_Xn2.checked, g_ui.mounting_Xn2, tri_type_2);

   draw_billiard_or_mounted_branched(g_ui.Xn3, +g_ui.a, g_tDeg,
      g_locus_Xn3_branched, clr_blue, locus_type_3,
      check_mounting_Xn3.checked, g_ui.mounting_Xn3, tri_type_3);

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