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

let g_ui = {};

function set_ui_variables(dictionary){
   document.getElementById("a").value = dictionary["a"];
   document.getElementById("demo_a").innerHTML = dictionary["a"];
   document.getElementById("locus_type_1").value = dictionary["locus_type_1"];
   document.getElementById("locus_type_2").value = dictionary["locus_type_2"];
   document.getElementById("locus_type_3").value = dictionary["locus_type_3"];
   document.getElementById("Xn1").value = dictionary["Xn1"];
   document.getElementById("demo_Xn1").value = dictionary["Xn1"];
   document.getElementById("Xn2").value = dictionary["Xn2"];
   document.getElementById("demo_Xn2").value = dictionary["Xn2"];
   document.getElementById("Xn3").value = dictionary["Xn3"];
   document.getElementById("demo_Xn3").value = dictionary["Xn3"];
   document.getElementById("tri_type_1").value = dictionary["tri_type_1"];
   document.getElementById("tri_type_2").value = dictionary["tri_type_2"];
   document.getElementById("tri_type_3").value = dictionary["tri_type_3"];
   document.getElementById("draw_tri_1").checked = dictionary["draw_tri_1"];
   document.getElementById("draw_tri_2").checked = dictionary["draw_tri_2"];
   document.getElementById("draw_tri_3").checked = dictionary["draw_tri_3"];
   document.getElementById("mounting_Xn1").value = dictionary["mounting_Xn1"];
   document.getElementById("mounting_Xn2").value = dictionary["mounting_Xn2"];
   document.getElementById("mounting_Xn3").value = dictionary["mounting_Xn3"];
   document.getElementById("animStep0").value = dictionary["animStep0"];
}

function reset_ui(g_ui_reset){
   set_ui_variables(g_ui_reset)
   Object.assign(g_ui, g_ui_reset)
   recenter();
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

function orbit_homothetic(a,tDeg) {
   let tri0 = regularPoly(3);
   let triRot = rotPoly(tri0,toRad(tDeg));
   let triScale = scalePoly(triRot,a,1);
   return {o:triScale,s:tri_sides(triScale)};
}

function get_Xn_homothetic(a, tDeg, trilin_fn, tri_type) {
   let ons = orbit_homothetic(a, tDeg);
   let ons_derived = get_derived_tri(ons.o,ons.s,tri_type);
   return get_Xn_low(ons_derived.o, ons_derived.s, trilin_fn);
}

function create_locus(locus_type_changed) {
   let tdegStep = +1; //valor inicial de degStep0
   let a = +g_ui.a;

   if (locus_type_1 != "none" && ["1", "0"].includes(locus_type_changed)) {

      g_locus_Xn1_branched = make_locus_branched(a, g_ui.Xn1, tdegStep,
         g_ui.mounting_Xn1, g_ui.locus_type_1, g_ui.tri_type_1);
   }
   if (locus_type_2 != "none" && ["2", "0"].includes(locus_type_changed)) {

      g_locus_Xn2_branched = make_locus_branched(a, g_ui.Xn2, tdegStep,
         g_ui.mounting_Xn2, g_ui.locus_type_2, g_ui.tri_type_2);
   }
   if (locus_type_3 != "none" && ["3", "0"].includes(locus_type_changed)) {
      g_locus_Xn3_branched = make_locus_branched(a, g_ui.Xn3, tdegStep,
         g_ui.mounting_Xn3, g_ui.locus_type_3, g_ui.tri_type_3);
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

function recenter() {
   g_width = document.getElementsByClassName('item graphic')[0].offsetWidth;
   g_height = document.getElementsByClassName('item graphic')[0].offsetHeight;
   g_ctr0 = [g_width / 2, g_height / 2];
   g_ctr = g_ctr0;
}

function windowResized() {
   recenter();
   //let pos = g_main_title.position();
   //g_main_title.position(g_width / 2 - 160, pos[1]);
   resizeCanvas(g_width, g_height);
}

function ui_changed(locus_type_changed) {
   create_locus(locus_type_changed);
   redraw();
   //log.textContent = e.target.value;
}



function selector_output(input_ID, output_ID = "", locus_number="0") {
   var selector = document.getElementById(input_ID);
   selector.value = g_ui[input_ID];
   if (output_ID != "") {
      var output = document.getElementById(output_ID);
      output.innerHTML = g_ui[input_ID];
      selector.addEventListener('input', function(){
         g_ui[input_ID] = this.value;
         output.innerHTML = this.value;
         ui_changed(locus_number)
      });
   } else {
      selector.addEventListener('change', function(){
         g_ui[input_ID] = selector.value
         ui_changed(locus_number)
      })
   }
}

function slider_text_changed(sliderId, textId, minus_id, plus_id, locus_number) {
   var slider = document.getElementById(sliderId);
   var text = document.getElementById(textId);

   document.getElementById(minus_id).addEventListener("click", function () {
      if (g_ui[sliderId] > 1) {
         g_ui[sliderId]--;
         slider.value--;
         text.value--;
         ui_changed(locus_number);
      }
   });

   document.getElementById(plus_id).addEventListener("click", function () {
      if (g_ui[sliderId] < 200) {
         g_ui[sliderId]++;
         slider.value++;
         text.value++;
         ui_changed(locus_number);
      }
   });

   slider.addEventListener("input", function () {
      g_ui[sliderId] = this.value;
      text.value = this.value;
      ui_changed(locus_number);
   });

   text.addEventListener("input", function () {
      if (isNaN(this.value))
         this.value = this.value.slice(0, -1);
      else if (this.value > 200)
         this.value = "200";
      else if (this.value < 1)
         this.value = "1";
      g_ui[sliderId] = this.value;
      slider.value = this.value;
      ui_changed(locus_number);
   })
}

function copy_image() {
   var copy_image_button = document.getElementById('copy_image');

   copy_image_button.addEventListener("click", function () {
      canvas = document.getElementById('defaultCanvas0');
      canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]));
   });
}

function export_PNG() {
   var today = new Date();
   let double_digit = function (myNumber) { return ("0" + myNumber).slice(-2) }
   var date_time = double_digit(today.getDate().toString()) + double_digit((today.getMonth() + 1).toString()) +
      today.getFullYear().toString() + '_' + double_digit(today.getHours().toString()) +
      double_digit(today.getMinutes().toString()) + double_digit(today.getSeconds().toString());

   document.getElementById('Export_PNG').addEventListener("click", function () {
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
   document.getElementById('draw_tri_1').addEventListener("click", function(){
      g_ui.draw_tri_1 = this.checked;
      redraw("1");
   })
   document.getElementById('draw_tri_2').addEventListener("click", function(){
      g_ui.draw_tri_2 = this.checked;
      redraw("2");
   })
   document.getElementById('draw_tri_3').addEventListener("click", function(){
      g_ui.draw_tri_3 = this.checked;
      redraw("3");
   })
}

function locus_type_onchange() {
   document.getElementById("locus_type_1").addEventListener("change", function () { 
      g_ui.locus_type_1 = this.value;
      ui_changed("1"); 
   });
   document.getElementById("locus_type_2").addEventListener("change", function () { 
      g_ui.locus_type_2 = this.value;
      ui_changed("2"); 
   });
   document.getElementById("locus_type_3").addEventListener("change", function () { 
      g_ui.locus_type_3 = this.value;
      ui_changed("3"); 
   });
}

function tri_type_onchange(){
   document.getElementById("tri_type_1").addEventListener("change", function () { 
      g_ui.tri_type_1 = this.value;
      ui_changed("1"); 
   });
   document.getElementById("tri_type_2").addEventListener("change", function () { 
      g_ui.tri_type_2 = this.value;
      ui_changed("2"); 
   });
   document.getElementById("tri_type_3").addEventListener("change", function () { 
      g_ui.tri_type_3 = this.value;
      ui_changed("3"); 
   });
}

function mouseOverCanvas(){
   canvas_div = document.getElementById("canvas")
   canvas_div.mouseIsOver = false
   canvas_div.addEventListener('mouseover', function(){this.mouseIsOver = true;});
   canvas_div.addEventListener('mouseout', function(){this.mouseIsOver = false;});
}

function set_ui_variables_behavior(){
   //a
   selector_output("a", "demo_a")
   //Xn1
   slider_text_changed("Xn1", "demo_Xn1", "minus_Xn1", "plus_Xn1", "1");
   //Xn2
   slider_text_changed("Xn2", "demo_Xn2", "minus_Xn2", "plus_Xn2", "2");
   //Xn3
   slider_text_changed("Xn3", "demo_Xn3", "minus_Xn3", "plus_Xn3", "3");

   //animStep0
   selector_output("animStep0", output_ID = "")

   //mounting
   selector_output("mounting_Xn1", output_ID = "", "1")
   selector_output("mounting_Xn2", output_ID = "", "2")
   selector_output("mounting_Xn3", output_ID = "", "3")
}

function reset_UI_onclick(g_ui_reset){
   document.getElementById('reset_UI').addEventListener('click', function(){
      reset_ui(g_ui_reset);
      ui_changed("1");
   });
}

function copyToClipboard(text) {
   if (window.clipboardData && window.clipboardData.setData) {
       // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
       return clipboardData.setData("Text", text);

   }
   else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
       var textarea = document.createElement("textarea");
       textarea.textContent = text;
       textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
       document.body.appendChild(textarea);
       textarea.select();
       try {
           return document.execCommand("copy");  // Security exception may be thrown by some browsers.
       }
       catch (ex) {
           console.warn("Copy to clipboard failed.", ex);
           return false;
       }
       finally {
           document.body.removeChild(textarea);
       }
   }
}

function get_diff_default(g_ui_reset, key){
   if (g_ui[key] !== g_ui_reset[key])
      return key+'='+g_ui[key]+'&';
   else
      return '';
}

function config_url_onclick(g_ui_reset){
   document.getElementById('config_URL').addEventListener("click", function(){      
      var link_params = location.protocol + '//' + location.host + location.pathname + '?';
      link_params += get_diff_default(g_ui_reset,"a");
      link_params += get_diff_default(g_ui_reset,"locus_type_1");
      link_params += get_diff_default(g_ui_reset,"locus_type_2");
      link_params += get_diff_default(g_ui_reset,"locus_type_3");
      link_params += get_diff_default(g_ui_reset,"Xn1");
      link_params += get_diff_default(g_ui_reset,"Xn2");
      link_params += get_diff_default(g_ui_reset,"Xn3");
      link_params += get_diff_default(g_ui_reset,"tri_type_1");
      link_params += get_diff_default(g_ui_reset,"tri_type_2");
      link_params += get_diff_default(g_ui_reset,"tri_type_3");
      link_params += get_diff_default(g_ui_reset,"draw_tri_1");
      link_params += get_diff_default(g_ui_reset,"draw_tri_2");
      link_params += get_diff_default(g_ui_reset,"draw_tri_3");
      link_params += get_diff_default(g_ui_reset,"mounting_Xn1");
      link_params += get_diff_default(g_ui_reset,"mounting_Xn2");
      link_params += get_diff_default(g_ui_reset,"mounting_Xn3");
      link_params += get_diff_default(g_ui_reset,"animStep0");
      copyToClipboard(link_params);
   });
}

function set_url_params(g_url_params){
   let original_keys = Object.keys(g_ui);
   let link_keys = Object.keys(g_url_params);
   link_keys.forEach(function(key) {
      if(original_keys.includes(key))
         g_ui[key] = g_url_params[key];
   });
   set_ui_variables(g_ui);
   ui_changed("0");
}

function get_xmin(ps) {
   xs = ps.map(p=>p[0]);
   return Math.min(...xs);
}
function get_ymin(ps) {
   ys = ps.map(p=>p[1]);
   return Math.min(...ys);
}

function get_xmax(ps) {
   xs = ps.map(p=>p[0]);
   return Math.max(...xs);
}
function get_ymax(ps) {
   ys = ps.map(p=>p[1]);
   return Math.max(...ys);
}

function get_locus_bbox(locus_branched) {
   let xmins = locus_branched.map(br => get_xmin(br));
   let xmin = Math.min(...xmins);
   let xmaxs = locus_branched.map(br => get_xmax(br));
   let xmax = Math.max(...xmaxs);
   let ymins = locus_branched.map(br => get_ymin(br));
   let ymin = Math.min(...ymins);
   let ymaxs = locus_branched.map(br => get_ymax(br));
   let ymax = Math.max(...ymaxs);

   let xmax2 = Math.max(Math.abs(xmin),Math.abs(xmax));
   let ymax2 = Math.max(Math.abs(ymin),Math.abs(ymax));

   return {xmin:xmin,xmax:xmax,xmax2:xmax2,ymin:ymin,ymax:ymax,ymax2:ymax2};
}

function Bbox_onclick(n) {
   document.getElementById('Bbox_' + n).addEventListener('click', function () {
      var bbox;
      let a = +g_ui.a;
      const adj = 1.1;
      let do_it = false;
      switch (n) {
         case "1":
            if (g_ui.locus_type_1 != "none") {
               bbox = get_locus_bbox(g_locus_Xn1_branched);
               do_it = true;
            }
            break;
         case "2":
            if (g_ui.locus_type_2 != "none") {
               bbox = get_locus_bbox(g_locus_Xn2_branched);
               do_it = true;
            }
            break;
         case "3":
            if (g_ui.locus_type_3 != "none") {
               bbox = get_locus_bbox(g_locus_Xn3_branched);
               do_it = true;
            }
            break;
         default: console.log("bbox_onclick: error");
      }
      //console.log(bbox);
      if (do_it) {
         if (bbox.ymax2 < 1)
            bbox.ymax2 = 1;
         if (bbox.xmax2 < a)
            bbox.xmax2 = a;
         var scale_min;    
         if (bbox.ymax2 > bbox.xmax2) {
            g_scale = adj * 2 * bbox.ymax2 * g_width / g_height;
            // g_width/(adj * 2 * bbox.ymax2 * g_width / g_height) =
            // = g_height/(2*adj*bbox.ymax2))
            // g_scale > 2*adj*bbox.xmax2;
            // bbox.xmax2 * g_width/g_scale < (g_width/2)/adj
            scale_min = 2 * adj * bbox.xmax2;
         } else { // bbox.xmax2
            //console.log("case 2","bbox.xmax2",bbox.xmax2,"a",a);
            g_scale = adj * 2 * bbox.xmax2;
            // bbox.ymax2 * g_width/g_scale < (g_height/2)/adj
           // g_scale > 2*adj*bbox.ymax2*g_width/g_height;
            scale_min = 2 * adj * bbox.ymax2 * g_width / g_height;
         };
         //console.log("scale_min",scale_min,"g_scale",g_scale);
          if (g_scale < scale_min)
            g_scale = scale_min;
         recenter();
         redraw();
      }
   });
}

function setup() {
   let g_ui_reset = {
      a: 1.618,
      locus_type_1: 'trilins', locus_type_2: 'none', locus_type_3: 'none',
      Xn1: 1, Xn2: 1, Xn3: 1,
      tri_type_1: 'reference', tri_type_2: 'reference', tri_type_3: 'reference',
      draw_tri_1: true, draw_tri_2: false, draw_tri_3: false,
      mounting_Xn1: 'billiard', mounting_Xn2: 'billiard', mounting_Xn3: 'billiard',
      animStep0: 0.125
   };
   reset_ui(g_ui_reset);
   let g_url_params = getURLParams();
   set_url_params(g_url_params);

   g_width = document.getElementsByClassName('item graphic')[0].offsetWidth;
   g_height = document.getElementsByClassName('item graphic')[0].offsetHeight;
   create_checkboxes();
   canvas = createCanvas(g_width, g_height);
   canvas.parent('canvas');
   mouseOverCanvas();
   //frameRate(15);
   g_ctr0 = [g_width / 2, g_height / 2];
   g_ctr = g_ctr0;
   g_mouse = g_ctr0;

   set_ui_variables_behavior()

   copy_image()
   export_PNG()
   play_controls()
   locus_type_onchange()
   tri_onchange()
   tri_type_onchange()
   Bbox_onclick("1");
   Bbox_onclick("2");
   Bbox_onclick("3");

   reset_UI_onclick(g_ui_reset);
   config_url_onclick(g_ui_reset);

   ui_changed("1")
}

function draw() {
   background(220, 220, 200);

   push();
   translate(g_ctr[0], g_ctr[1]);
   scale(g_width / g_scale);
   draw_billiard(+g_ui.a);

   draw_billiard_or_mounted_branched(g_ui.Xn1, +g_ui.a, g_tDeg,
      g_locus_Xn1_branched, clr_red, g_ui.locus_type_1,
      g_ui.draw_tri_1, g_ui.mounting_Xn1, g_ui.tri_type_1);

   draw_billiard_or_mounted_branched(g_ui.Xn2, +g_ui.a, g_tDeg,
      g_locus_Xn2_branched, clr_green, g_ui.locus_type_2,
      g_ui.draw_tri_2, g_ui.mounting_Xn2, g_ui.tri_type_2);

   draw_billiard_or_mounted_branched(g_ui.Xn3, +g_ui.a, g_tDeg,
      g_locus_Xn3_branched, clr_blue, g_ui.locus_type_3,
      g_ui.draw_tri_3, g_ui.mounting_Xn3, g_ui.tri_type_3);

   pop();

  
   draw_text_full("(c) 2020 Darlan & Reznik", [g_width-150,g_height-24], clr_blue);
   draw_text_full("dan-reznik.github.io/ellipse-mounted-loci-p5js/",
   [g_width-260,g_height-10], clr_blue);   
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
   console.log(g_scale);
   return false;
   //}
}