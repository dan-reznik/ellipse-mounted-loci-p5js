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
   mounting: ["major", "minor", "mixed", "ctrMajor",
      "ctrMinor", "fs", "fsCtr", "fsLeft",
      "fsRight", "fsTop", "cornerTL_BL", "cornerTL_TR",
      "cornerTL_vtxL", "cornerTL_vtxT", "cornerTL_vtxB",
      "cornerTL_ctr", "cornerTL_BR"
   ],
   Xn1: 0, Xn1Min: 0, Xn1Max: 200, Xn1Step: 1,
   Xn2: 0, Xn2Min: 0, Xn2Max: 200, Xn2Step: 1,
   Xn3: 0, Xn3Min: 0, Xn3Max: 200, Xn3Step: 1,
   degStep: [1,0.1,0.05,0.01]
};

function make_one_locus(n, tdegStep0) {
   let tDegMax = 180;
   let locus_Xn = [];
   let trilin_fn = get_fn_trilin(n);
   // console.log(trilin_fn);
   for (let tDeg = 0; tDeg < tDegMax; tDeg += tdegStep0) {
      let ons = orbit_normals(g_ui.a, tDeg);
      // esse o call magico
      let xn = get_Xn_low(ons.o, ons.s, trilin_fn);
      locus_Xn.push(xn);
   }
   return locus_Xn;
}

function create_locus() {
   let tdegStep0 = 0.1;
   if (g_ui.Xn1 > 0)
      g_locus_Xn1 = make_one_locus(g_ui.Xn1, tdegStep0);
   if (g_ui.Xn2 > 0)
      g_locus_Xn2 = make_one_locus(g_ui.Xn2, tdegStep0);
   if (g_ui.Xn3 > 0)
      g_locus_Xn3 = make_one_locus(g_ui.Xn3, tdegStep0);
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
   create_title("© 2020 Iverton Darlan & Dan Reznik -- dreznik _at_ gmail _dot_ com", false);
  /* y += ystep;*/
   create_title("Visit our <a href=https://dan-reznik.github.io/Elliptical-Billiards-Triangular-Orbits/videos.html>Media Page</a>", false);
   /*y += ystep;*/
   //create_title("Visit <a href=http://mathworld.wolfram.com/ target=_blank>MathWorld</a> and <a href=https://faculty.evansville.edu/ck6/encyclopedia/ETC.html target=_blank>ETC</a>", 0, y, false);
}

function windowResized() {
   g_width = 0.90*windowWidth;
   g_height = 0.75*windowHeight;
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

function setup() {
   g_width = 0.78*windowWidth;
   g_height = 0.70*windowHeight;
   g_url_params = getURLParams();
   //http://p5js.org?year=2014&month=May&day=15
   //text(params.day, 10, 20);
   //text(params.month, 10, 40);
   //text(params.year, 10, 60);
   //console.log("what are they",g_url_params);

   create_checkboxes();
   canvas = createCanvas(g_width, g_height);
   canvas.parent('canvas');
   //frameRate(15);
   g_ctr0 = [g_width / 2, g_height / 2];
   g_ctr = g_ctr0;
   g_mouse = g_ctr0;

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

function draw() {
   background(220, 220, 200);
   let ons = orbit_normals(g_ui.a, g_tDeg);
   push();
   translate(g_ctr[0], g_ctr[1]);
   scale(g_width / g_scale);
   draw_billiard(g_ui.a);
   draw_orbit(ons, true);

   // COME BACK TO THIS
   if (g_ui.Xn1 > 0)
      draw_locus(g_locus_Xn1, ons, g_ui.Xn1, clr_dark_red);
   if (g_ui.Xn2 > 0)
      draw_locus(g_locus_Xn2, ons, g_ui.Xn2, clr_dark_green);
   if (g_ui.Xn3 > 0)
      draw_locus(g_locus_Xn3, ons, g_ui.Xn3, clr_blue);
   pop();

   if (g_loop) g_tDeg += (g_loop_ccw ? 0.125 : -0.125);
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
   g_click_ell = mouse_in_ell(g_ui.a);
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
      return (true);
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
   if (g_click_ell) {
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