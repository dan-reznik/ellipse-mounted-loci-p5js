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
let g_locus_Xn = [];

function create_locus() {
  if (g_ui.Xn > 0) {
    let tDegStep = 0.1;
    let tDegMax = 180; //142;
    g_locus_Xn = [];
    let trilin_fn = get_fn_trilin(g_ui.Xn);
    // console.log(trilin_fn);
    for (let tDeg = 0; tDeg < tDegMax; tDeg += tDegStep) {
      let ons = orbit_normals(g_ui.a, tDeg);
      // esse o call magico
      let xn = get_Xn_low(ons.o, ons.s, trilin_fn);
      g_locus_Xn.push(xn);
    }
  }
}

function chk_redraw() {
  if (!g_loop) redraw();
}

//function radio_a_changed() {
//  g_a = g_radio_a.value();
//  create_locus();
//  redraw();
//}

function radio_xn_changed() {
  g_ui.Xn = g_radio_xn.value();
  create_locus();
  redraw();
}

function create_checkboxes() {
  let xstep = 75;
  let ystep = 22;
  let chks = [];

  let y = -ystep / 2;
  create_title("Billiard Aspect Ratio", 0, y);
  g_main_title = create_main_title(y);

  y += ystep / 2;

  //y += ystep;
  //g_radio_a = create_radio_a(0, y);

  y += ystep / 3;
  create_title("Triangle Centers", 0, y);
  y += ystep / 2;

  //y += ystep;
  //g_radio_xn = create_radio_xn(0, y);

  y += ystep / 2;
  create_title("© 2020 Iverton Darlan & Dan Reznik -- dreznik _at_ gmail _dot_ com", 0, y, false);
  y += ystep;
  create_title("Visit our <a href=https://dan-reznik.github.io/Elliptical-Billiards-Triangular-Orbits/videos.html>Media Page</a>", 0, y, false);
  y += ystep;
  //create_title("Visit <a href=http://mathworld.wolfram.com/ target=_blank>MathWorld</a> and <a href=https://faculty.evansville.edu/ck6/encyclopedia/ETC.html target=_blank>ETC</a>", 0, y, false);
}

function windowResized() {
  g_width = windowWidth;
  g_height = windowHeight;
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
  g_width = windowWidth;
  g_height = windowHeight;
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
    Xn: 0,
    XnMin: 0,
    XnMax: 200,
    XnStep: 1
  };
  //Create a new GUI with a label
  gui = createGui('Please Select');
  gui.addObject(g_ui);
  document.getElementById("Xn")
    .addEventListener('input', ui_changed);
   document.getElementById("a")
    .addEventListener('input', ui_changed);
  document.getElementsByClassName("qs_select")[0]
    .addEventListener('change', ui_changed);
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
  if (g_ui.Xn > 0) {
    draw_locus(g_locus_Xn, ons, g_ui.Xn, clr_dark_green);
  }
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