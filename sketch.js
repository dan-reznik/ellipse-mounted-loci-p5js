var g_width;
var g_height;
var g_main_title;
var g_ctr, g_mouse, g_ctr0;
var g_r_max = 20.0; 

let g_scale0 = 6;
let g_scale = g_scale0;
let g_dragged = false;
let g_click_ell = false;
let g_loop_ccw = true;
let g_url_params = {};

let g_loop = true;
let g_tDeg = 0;
let g_locus_Xn1_branched = [];
let g_locus_Xn2_branched = [];
let g_locus_Xn3_branched = [];
let g_locus_Xn4_branched = [];

let g_ui = {};
let g_ui_ell = {detect_1: 'X', detect_2: 'X', detect_3: 'X', detect_4: 'X'}

function set_ui_variables(dictionary) {
   document.getElementById("a").value = dictionary["a"];
   document.getElementById("ell").checked = dictionary["ell"];
   document.getElementById("a_speed").value = dictionary["a_speed"];
   document.getElementById("a_min").value = dictionary["a_min"];
   document.getElementById("a_max").value = dictionary["a_max"];
   document.getElementById("demo_a").innerHTML = dictionary["a"];
   document.getElementById("locus_type_1").value = dictionary["locus_type_1"];
   document.getElementById("locus_type_2").value = dictionary["locus_type_2"];
   document.getElementById("locus_type_3").value = dictionary["locus_type_3"];
   document.getElementById("locus_type_4").value = dictionary["locus_type_4"];
   document.getElementById("Xn1").value = dictionary["Xn1"];
   document.getElementById("demo_Xn1").value = dictionary["Xn1"];
   document.getElementById("Xn2").value = dictionary["Xn2"];
   document.getElementById("demo_Xn2").value = dictionary["Xn2"];
   document.getElementById("Xn3").value = dictionary["Xn3"];
   document.getElementById("demo_Xn3").value = dictionary["Xn3"];
   document.getElementById("Xn4").value = dictionary["Xn4"];
   document.getElementById("demo_Xn4").value = dictionary["Xn4"];
   document.getElementById("tri_type_1").value = dictionary["tri_type_1"];
   document.getElementById("tri_type_2").value = dictionary["tri_type_2"];
   document.getElementById("tri_type_3").value = dictionary["tri_type_3"];
   document.getElementById("tri_type_4").value = dictionary["tri_type_4"];
   document.getElementById("draw_tri_1").checked = dictionary["draw_tri_1"];
   document.getElementById("draw_tri_2").checked = dictionary["draw_tri_2"];
   document.getElementById("draw_tri_3").checked = dictionary["draw_tri_3"];
   document.getElementById("draw_tri_4").checked = dictionary["draw_tri_4"];
   document.getElementById("mounting_Xn1").value = dictionary["mounting_Xn1"];
   document.getElementById("mounting_Xn2").value = dictionary["mounting_Xn2"];
   document.getElementById("mounting_Xn3").value = dictionary["mounting_Xn3"];
   document.getElementById("mounting_Xn4").value = dictionary["mounting_Xn4"];
   document.getElementById("animStep0").value = dictionary["animStep0"];
}

function reset_ui(g_ui_reset) {
   set_ui_variables(g_ui_reset)
   Object.assign(g_ui, g_ui_reset)
};

function get_brocard(n) {
   let brocard_name = sprintf("bary_brocard%d", n);
   return window[brocard_name];
}

function get_fn_any(locus_type, n) {
   if (locus_type.substr(0,2)=="f_")
      locus_type = locus_type.substr(2);
   let fn;
   switch (locus_type) {
      case 'brocard_1':
        fn = get_brocard(1);
        break;
      case 'brocard_2':
        fn = get_brocard(2);
        break;
      case 'vtx':
        fn = get_tri_v1_barys;
        break;
      default: fn = get_fn_bary(n);
   }
   return fn;
}

function create_locus(locus_type_changed) {
   let tdegStep = +1; //valor inicial de degStep0
   let a = +g_ui.a;

   if (locus_type_1 != "none" && ["1", "0"].includes(locus_type_changed)) {

      g_locus_Xn1_branched = make_locus_branched(a, g_ui.Xn1, tdegStep, g_r_max,
         g_ui.mounting_Xn1, g_ui.locus_type_1, g_ui.tri_type_1);
      g_ui_ell.detect_1 = locus_conic(g_locus_Xn1_branched); 
   }
   if (locus_type_2 != "none" && ["2", "0"].includes(locus_type_changed)) {
      g_locus_Xn2_branched = make_locus_branched(a, g_ui.Xn2, tdegStep, g_r_max,
         g_ui.mounting_Xn2, g_ui.locus_type_2, g_ui.tri_type_2);
      g_ui_ell.detect_2 = locus_conic(g_locus_Xn2_branched);
   }
   if (locus_type_3 != "none" && ["3", "0"].includes(locus_type_changed)) {
      g_locus_Xn3_branched = make_locus_branched(a, g_ui.Xn3, tdegStep, g_r_max,
         g_ui.mounting_Xn3, g_ui.locus_type_3, g_ui.tri_type_3);
      g_ui_ell.detect_3 = locus_conic(g_locus_Xn3_branched);
   }
   if (locus_type_4 != "none" && ["4", "0"].includes(locus_type_changed)) {
      g_locus_Xn4_branched = make_locus_branched(a, g_ui.Xn4, tdegStep, g_r_max,
         g_ui.mounting_Xn4, g_ui.locus_type_4, g_ui.tri_type_4);
      g_ui_ell.detect_4 = locus_conic(g_locus_Xn4_branched);
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
   //create_title("<a href=https://dan-reznik.github.io/ellipse-mounted-triangles/>Learn more</a>", false, "made_by");
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
   if(g_ui["locus_type_4"] !== 'none'){
      ui_changed("4");
      bbox_rescale("4");
   }
   if(g_ui["locus_type_3"] !== 'none'){
      ui_changed("3");
      bbox_rescale("3");
   }
   if(g_ui["locus_type_2"] !== 'none'){
      ui_changed("2");
      bbox_rescale("2");
   }
   if(g_ui["locus_type_1"] !== 'none'){
      ui_changed("1");
      bbox_rescale("1");
   } 
   //recenter();
   //let pos = g_main_title.position();
   //g_main_title.position(g_width / 2 - 160, pos[1]);
   resizeCanvas(g_width, g_height);
}

function ui_changed(locus_type_changed) {
   create_locus(locus_type_changed);
   redraw();
   //log.textContent = e.target.value;
}

function a_oninput(input_ID, output_ID){
   var selector = document.getElementById(input_ID);
   selector.value = g_ui[input_ID];
   var output = document.getElementById(output_ID);
   output.innerHTML = g_ui[input_ID];
   selector.addEventListener('input', function () {
      g_ui[input_ID] = this.value;
      if(g_ui.locus_type_1 != 'none') conic_type_onchange("1");
      if(g_ui.locus_type_2 != 'none') conic_type_onchange("2");
      if(g_ui.locus_type_3 != 'none') conic_type_onchange("3");
      if(g_ui.locus_type_4 != 'none') conic_type_onchange("4");
      output.innerHTML = this.value;
      ui_changed('0')
   });
}

function selector_output(input_ID, output_ID = "", ell_detect = "0") {
   var selector = document.getElementById(input_ID);
   selector.value = g_ui[input_ID];
   selector.addEventListener('change', function () {
      g_ui[input_ID] = selector.value
      ui_changed(ell_detect)
      if(input_ID != 'animStep0')
         conic_type_onchange(ell_detect)
   })
}

function slider_text_changed(sliderId, textId, minus_id, plus_id, ell_detect) {
   var slider = document.getElementById(sliderId);
   var text = document.getElementById(textId);

   document.getElementById(minus_id).addEventListener("click", function () {
      if (g_ui[sliderId] > 1) {
         g_ui[sliderId]--;
         slider.value--;
         text.value--;
         ui_changed(ell_detect);
         conic_type_onchange(ell_detect);
         slider.focus();
      }
   });

   document.getElementById(plus_id).addEventListener("click", function () {
      if (g_ui[sliderId] < 1000) {
         g_ui[sliderId]++;
         slider.value++;
         text.value++;
         ui_changed(ell_detect);
         conic_type_onchange(ell_detect);
         slider.focus();
      }
   });

   slider.addEventListener("input", function () {
      g_ui[sliderId] = this.value;
      text.value = this.value;
      ui_changed(ell_detect);
      conic_type_onchange(ell_detect);
   });

   text.addEventListener("input", function () {
      if(this.value !== ''){
         if (this.value > 1000)
            this.value = "1000";
         else if (this.value < 1)
            this.value = "1";
      }
   })
   text.addEventListener('keydown', function (e) {
      if(e.keyCode==9){
         if(this.value == '')
            this.value = '1';
         g_ui[sliderId] = this.value;
         slider.value = this.value;
         ui_changed(ell_detect);
         conic_type_onchange(ell_detect);
         e.preventDefault();
         slider.focus();
      }
   })
   text.addEventListener('keypress', function (e) {
      if (e.keyCode < 48 || e.keyCode > 57)
        e.preventDefault();
      if(e.keyCode==13){
         if(this.value == '')
            this.value = '1';
         g_ui[sliderId] = this.value;
         slider.value = this.value;
         ui_changed(ell_detect);
         conic_type_onchange(ell_detect);
         slider.focus();
      }
   })
}

function copy_image() {
   var copy_image_button = document.getElementById('copy_image');

   copy_image_button.addEventListener("click", function () {
      canvas = document.getElementById('defaultCanvas0');
      canvas.focus();
      canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]));
   });
}

function export_PNG() {
   let double_digit = function (myNumber) { return ("0" + myNumber).slice(-2) }
   let element = document.body;

   document.getElementById('Export_PNG').addEventListener("click", function () {
      var today = new Date();
      var date_time = double_digit(today.getDate().toString()) + double_digit((today.getMonth() + 1).toString()) +
      today.getFullYear().toString() + '_' + double_digit(today.getHours().toString()) +
      double_digit(today.getMinutes().toString()) + double_digit(today.getSeconds().toString());
      //canvas = document.getElementById('defaultCanvas0');
      let link = document.createElement('a');
      link.setAttribute('download', 'locus_image_' + date_time + '.png');
      html2canvas(element, { allowTaint: true })
         .then(function (canvas) {
            link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
            link.click();
         })
         .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
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

function tri_onchange() {
   document.getElementById('draw_tri_1').addEventListener("click", function () {
      g_ui.draw_tri_1 = this.checked;
      redraw();
   })
   document.getElementById('draw_tri_2').addEventListener("click", function () {
      g_ui.draw_tri_2 = this.checked;
      //(g_ui.draw_tri_2)
      redraw();
   })
   document.getElementById('draw_tri_3').addEventListener("click", function () {
      g_ui.draw_tri_3 = this.checked;
      redraw();
   })
   document.getElementById('draw_tri_4').addEventListener("click", function () {
      g_ui.draw_tri_4 = this.checked;
      redraw();
   })
}

function ell_onchange(){
   document.getElementById('ell').addEventListener("click", function () {
      g_ui.ell = this.checked;
      redraw()
   })
}

function a_speed_onchange(){
   document.getElementById('a_speed').addEventListener("change", function () {
      g_ui.a_speed = this.value;
      if(g_ui.a_speed != 0.000){
         g_ui.a = +g_ui.a_min;
         a_slider.value = g_ui.a;
         a_text.innerHTML = a_slider.value;
         if(g_ui.locus_type_1 != 'none')  ui_changed('1');
         if(g_ui.locus_type_2 != 'none')  ui_changed('2');
         if(g_ui.locus_type_3 != 'none')  ui_changed('3');
         if(g_ui.locus_type_4 != 'none')  ui_changed('4');
      }
   })
}

function locus_type_onchange() {
   document.getElementById("locus_type_1").addEventListener("change", function () {
      g_ui.locus_type_1 = this.value;
      ui_changed("1");
      conic_type_onchange("1");
   });
   document.getElementById("locus_type_2").addEventListener("change", function () {
      g_ui.locus_type_2 = this.value;
      ui_changed("2");
      conic_type_onchange("2");
   });
   document.getElementById("locus_type_3").addEventListener("change", function () {
      g_ui.locus_type_3 = this.value;
      ui_changed("3");
      conic_type_onchange("3");
   });
   document.getElementById("locus_type_4").addEventListener("change", function () {
      g_ui.locus_type_4 = this.value;
      ui_changed("4");
      conic_type_onchange("4");
   });
}

function tri_type_onchange() {
   document.getElementById("tri_type_1").addEventListener("change", function () {
      g_ui.tri_type_1 = this.value;
      ui_changed("1");
      conic_type_onchange("1");
   });
   document.getElementById("tri_type_2").addEventListener("change", function () {
      g_ui.tri_type_2 = this.value;
      ui_changed("2");
      conic_type_onchange("2");
   });
   document.getElementById("tri_type_3").addEventListener("change", function () {
      g_ui.tri_type_3 = this.value;
      ui_changed("3");
      conic_type_onchange("3");
   });
   document.getElementById("tri_type_4").addEventListener("change", function () {
      g_ui.tri_type_4 = this.value;
      ui_changed("4");
      conic_type_onchange("4");
   });
}

function mouseOverCanvas() {
   canvas_div = document.getElementById("canvas")
   canvas_div.mouseIsOver = false
   canvas_div.addEventListener('mouseover', function () { this.mouseIsOver = true; });
   canvas_div.addEventListener('mouseout', function () { this.mouseIsOver = false; });
}

function bbox_rescale(n) {
   let locus_types = [g_ui.locus_type_1, g_ui.locus_type_2, g_ui.locus_type_3, g_ui.locus_type_4];
   let loci = [g_locus_Xn1_branched, g_locus_Xn2_branched, g_locus_Xn3_branched, g_locus_Xn4_branched];
   g_scale = locus_bbox(+g_ui.a, locus_types[n - 1], loci[n - 1], g_width / g_height, g_scale0, g_r_max);
   recenter();
   redraw();
}

function Bbox_onclick(n) {
   document.getElementById('Bbox_' + n).addEventListener('click', () => bbox_rescale(n));
}

function set_ui_variables_behavior() {
   //a
   a_oninput("a", "demo_a")
   //Xn1
   slider_text_changed("Xn1", "demo_Xn1", "minus_Xn1", "plus_Xn1", "1");
   //Xn2
   slider_text_changed("Xn2", "demo_Xn2", "minus_Xn2", "plus_Xn2", "2");
   //Xn3
   slider_text_changed("Xn3", "demo_Xn3", "minus_Xn3", "plus_Xn3", "3");
   //Xn4
   slider_text_changed("Xn4", "demo_Xn4", "minus_Xn4", "plus_Xn4", "4");

   //animStep0
   selector_output("animStep0", output_ID = "")

   //mounting
   selector_output("mounting_Xn1", output_ID = "", "1")
   selector_output("mounting_Xn2", output_ID = "", "2")
   selector_output("mounting_Xn3", output_ID = "", "3")
   selector_output("mounting_Xn4", output_ID = "", "4")
}

function reset_UI_onclick(g_ui_reset) {
   document.getElementById('reset_UI').addEventListener('click', function () {
      reset_ui(g_ui_reset);
      ui_changed("1");
      bbox_rescale("1");
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

function get_diff_default(g_ui_reset, key) {
   let original_to_url_params = {
      a: 'a', a_speed: 'asp', a_min: 'amn', a_max: 'amx', ell: 'ell',
      locus_type_1: 'lc1', locus_type_2: 'lc2', locus_type_3: 'lc3', locus_type_4: 'lc4',
      Xn1: 'Xn1', Xn2: 'Xn2', Xn3: 'Xn3', Xn4: 'Xn4',
      tri_type_1: 'tr1', tri_type_2: 'tr2', tri_type_3: 'tr3', tri_type_4: 'tr4',
      draw_tri_1: 'dr1', draw_tri_2: 'dr2', draw_tri_3: 'dr3', draw_tri_4: 'dr4',
      mounting_Xn1: 'mt1', mounting_Xn2: 'mt2', mounting_Xn3: 'mt3', mounting_Xn4: 'mt4',
      animStep0: 'aS'
   };
   let animStep0_to_url_value = {
      "0.125": 'slow', "0.500": 'med', "1.000": 'fast' 
   }
   let a_speed_to_url_value = {
      "0.000": 'anim', "0.005": 'slow', "0.010": 'med', "0.050": 'fast'
   }
   console.log(key, g_ui[key], g_ui_reset[key]);
   if (g_ui[key] !== g_ui_reset[key]){
      if(key == 'a'){
         return original_to_url_params[key] + '=' + (+g_ui[key]).toFixed(3) + '&';
      }
      else if(key == 'animStep0')
         return original_to_url_params[key] + '=' + animStep0_to_url_value[abs(g_ui[key]).toFixed(3)] + '&';
      else if(key == 'a_speed')
         return original_to_url_params[key] + '=' + a_speed_to_url_value[abs(g_ui[key]).toFixed(3)] + '&';
      else
         return original_to_url_params[key] + '=' + g_ui[key] + '&';
   }
   else
      return '';
}

function get_diff_default_canvas(key){
   let canvas_to_url_params = {
      'g_scale': 'sc',
      'g_ctr[0]': 'cx',
      'g_ctr[1]': 'cy'
   };
   let canvas_params_reset = {
      g_scale: locus_bbox(+g_ui.a, g_ui.locus_type_1, g_locus_Xn1_branched, g_width / g_height, g_scale0, g_r_max),
      'g_ctr[0]': g_width / 2,
      'g_ctr[1]': g_height / 2
   };
   if (eval(key) !== canvas_params_reset[key]){
      if(key == 'g_scale')
         return canvas_to_url_params[key] + '=' + eval(key).toFixed(3) + '&';
      else
         return canvas_to_url_params[key] + '=' + eval(key).toFixed(3) + '&';
   }
   else
      return '';
}

function config_url_onclick(g_ui_reset) {
   document.getElementById('config_URL').addEventListener("click", function () {
      //var link_params = location.protocol + '//' + location.host + location.pathname + '?';
      var link_params = location.host + location.pathname + '?';
      link_params += get_diff_default_canvas('g_scale');
      link_params += get_diff_default_canvas('g_ctr[0]');
      link_params += get_diff_default_canvas('g_ctr[1]');
      link_params += get_diff_default(g_ui_reset, "a");
      link_params += get_diff_default(g_ui_reset, "a_speed");
      link_params += get_diff_default(g_ui_reset, "a_min");
      link_params += get_diff_default(g_ui_reset, "a_max");
      link_params += get_diff_default(g_ui_reset, "ell");
      link_params += get_diff_default(g_ui_reset, "locus_type_1");
      link_params += get_diff_default(g_ui_reset, "Xn1");
      link_params += get_diff_default(g_ui_reset, "mounting_Xn1");
      link_params += get_diff_default(g_ui_reset, "draw_tri_1");
      link_params += get_diff_default(g_ui_reset, "tri_type_1");
      link_params += get_diff_default(g_ui_reset, "locus_type_2");
      link_params += get_diff_default(g_ui_reset, "Xn2");
      link_params += get_diff_default(g_ui_reset, "mounting_Xn2");
      link_params += get_diff_default(g_ui_reset, "draw_tri_2");
      link_params += get_diff_default(g_ui_reset, "tri_type_2");
      link_params += get_diff_default(g_ui_reset, "locus_type_3");
      link_params += get_diff_default(g_ui_reset, "Xn3");
      link_params += get_diff_default(g_ui_reset, "mounting_Xn3");
      link_params += get_diff_default(g_ui_reset, "draw_tri_3");
      link_params += get_diff_default(g_ui_reset, "tri_type_3");
      link_params += get_diff_default(g_ui_reset, "locus_type_4");
      link_params += get_diff_default(g_ui_reset, "Xn4");
      link_params += get_diff_default(g_ui_reset, "mounting_Xn4");
      link_params += get_diff_default(g_ui_reset, "draw_tri_4");
      link_params += get_diff_default(g_ui_reset, "tri_type_4");
      link_params += get_diff_default(g_ui_reset, "animStep0");
      link_params = link_params.slice(0,-1);
      copyToClipboard(link_params);
   });
}

function set_url_params(g_url_params) {
   let url_params_to_canvas = {
      sc: 'g_scale',
      cx: 'g_ctr[0]',
      cy: 'g_ctr[1]'
   }
   let url_params_to_ui = {
      a: 'a', asp: 'a_speed', amn: 'a_min', amx: 'a_max', ell: 'ell',
      lc1: 'locus_type_1', lc2: 'locus_type_2', lc3: 'locus_type_3', lc4: 'locus_type_4',
      Xn1: 'Xn1', Xn2: 'Xn2', Xn3: 'Xn3', Xn4: 'Xn4',
      tr1: 'tri_type_1', tr2: 'tri_type_2', tr3: 'tri_type_3', tr4: 'tri_type_4',
      dr1: 'draw_tri_1', dr2: 'draw_tri_2', dr3: 'draw_tri_3', dr4: 'draw_tri_4',
      mt1: 'mounting_Xn1', mt2: 'mounting_Xn2', mt3: 'mounting_Xn3', mt4: 'mounting_Xn4',
      aS: 'animStep0'
   };
   let animStep0_to_ui = {
      slow: "0.125", medium: "0.500", fast: "1.000"
   }
   let a_speed_to_ui = {
      anim: "0.000", slow: "0.005", med: "0.010", fast: "0.050"
   }
   let url_params_to_canvas_keys = Object.keys(url_params_to_canvas)
   let url_params_to_ui_keys = Object.keys(url_params_to_ui)
   let link_keys = Object.keys(g_url_params);
   var url_change_canvas = false;
   link_keys.forEach(function (key) {
      if (url_params_to_ui_keys.includes(key)){
         ui_key = url_params_to_ui[key];
         if(['a', 'Xn1', 'Xn2', 'Xn3', 'Xn4'].includes(ui_key)){
            g_ui[ui_key] = +g_url_params[key];
         }
         else if(['ell','draw_tri_1', 'draw_tri_2', 'draw_tri_3', 'draw_tri_4'].includes(ui_key))
            g_ui[ui_key] = (g_url_params[key] == 'true');
         else if(ui_key == 'animStep0'){
            key_value = g_url_params[key]
            g_ui[ui_key] = (Object.keys(animStep0_to_ui).includes(key_value))?animStep0_to_ui[key_value]:animStep0_to_ui['slow'];
         }
         else if(ui_key == 'a_speed'){
            key_value = g_url_params[key]
            g_ui[ui_key] = (Object.keys(a_speed_to_ui).includes(key_value))?a_speed_to_ui[key_value]:a_speed_to_ui['anim'];
         }
         else{
            g_ui[ui_key] = g_url_params[key];
         }
      }
      if (url_params_to_canvas_keys.includes(key)){
         url_change_canvas = true;
         eval(url_params_to_canvas[key]+'='+g_url_params[key]);
      }
   });
   set_ui_variables(g_ui);
   if(g_ui["locus_type_4"] !== 'none'){
      ui_changed("4");
      if(!url_change_canvas)
         bbox_rescale("4");
   }
   if(g_ui["locus_type_3"] !== 'none'){
      ui_changed("3");
      if(!url_change_canvas)
         bbox_rescale("3");
   }
   if(g_ui["locus_type_2"] !== 'none'){
      ui_changed("2");
      if(!url_change_canvas)
         bbox_rescale("2");
   }
   if(g_ui["locus_type_1"] !== 'none'){
      ui_changed("1");
      if(!url_change_canvas)
         bbox_rescale("1");
   } 
}

function recenter_onclick(){
   document.getElementById('recenter').addEventListener('click', function(){
      recenter();
      g_scale = g_scale0;
   });
}

function ui_changed_type(){
   if(g_ui.locus_type_1 != 'none'){
      ui_changed('1');
      conic_type_onchange('1')
   }
   if(g_ui.locus_type_2 != 'none'){
      ui_changed('2');
      conic_type_onchange('2')
   }
   if(g_ui.locus_type_3 != 'none'){
      ui_changed('3');
      conic_type_onchange('3')
   }
   if(g_ui.locus_type_4 != 'none'){
      ui_changed('4');
      conic_type_onchange('4')
   }
}

function a_anim(){
   a_slider = document.getElementById('a')
   a_text = document.getElementById('demo_a')
   g_ui.a_speed = +g_ui.a_speed;
   g_ui.a = +g_ui.a;
   g_ui.a_max = +g_ui.a_max;
   g_ui.a_min = +g_ui.a_min;
   if(g_ui.a_speed != 0.000){
      //console.log(g_ui.a)
      if(g_ui.a_speed > 0)
         if(g_ui.a_max-g_ui.a <= g_ui.a_speed){
            g_ui.a = g_ui.a_max;
            a_slider.value = g_ui.a;
            a_text.innerHTML = a_slider.value;
            g_ui.a_speed = -g_ui.a_speed;
            ui_changed_type()
         }
         else{
            g_ui.a += g_ui.a_speed;
            a_slider.value = g_ui.a;
            a_text.innerHTML = a_slider.value;
            ui_changed_type()    
         }
      else
         if(g_ui.a+g_ui.a_speed<=g_ui.a_min){
            g_ui.a = g_ui.a_min;
            a_slider.value = g_ui.a;
            a_text.innerHTML = a_slider.value;
            g_ui.a_speed = -g_ui.a_speed;
            ui_changed_type()        
         }
         else{
            g_ui.a += g_ui.a_speed;
            a_slider.value = g_ui.a;
            a_text.innerHTML = a_slider.value;
            ui_changed_type()        
         }
   } 
}

function a_text_input(){
   var a_min = document.getElementById('a_min');
   var a_max = document.getElementById('a_max');
   a_min.addEventListener('focusout', function () {
      if (+this.value < 1.01)
         this.value = 1.01;
      else if (+this.value > +a_max.value)
         this.value = +a_max.value;
      g_ui['a_min'] = this.value;
      ui_changed_type();   
   })
   a_min.addEventListener('keydown', function (e) {
      if(e.keyCode==9){
         if(this.value == '')
            this.value = 1.01;
         else{
            if (+this.value < 1.01)
               this.value = 1.01;
            else if (+this.value > +a_max.value)
               this.value = +a_max.value;
         }
         g_ui['a_min'] = this.value;
         ui_changed_type();
      }
   })
   a_min.addEventListener('keypress', function (e) {
      if(this.value.length>3)
         e.preventDefault();
      if(this.value.includes('.')){
         if(e.keyCode < 48 || e.keyCode > 57)
            e.preventDefault();
      }
      else{
         if((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46)
            e.preventDefault();
      }      
      if(e.keyCode==13){
         if(this.value == '')
            this.value = 1.01;
         else{
            if (+this.value < 1.01)
               this.value = 1.01;
            else if (+this.value > +a_max.value)
               this.value = +a_max.value;
         }
         g_ui['a_min'] = this.value;
         ui_changed_type();
      }
   })
   a_max.addEventListener('focusout', function () {
      if (+this.value > 4.00)
         this.value = '4.00';
      else if (+this.value < +a_min.value)
         this.value = +a_min.value;
      g_ui['a_max'] = this.value;
      ui_changed_type();
   })
   a_max.addEventListener('keydown', function (e) {
      if(e.keyCode==9){
         if(this.value == '')
            this.value = '4.00';
         else{
            if (+this.value > 4.000)
               this.value = '4.00';
            else if (+this.value < +a_min.value)
               this.value = +a_min.value;
         }
         g_ui['a_max'] = this.value;
         ui_changed_type();
      }
   })
   a_max.addEventListener('keypress', function (e) {
      if(this.value.length>3)
         e.preventDefault();
      if(this.value.includes('.')){
         if(e.keyCode < 48 || e.keyCode > 57)
            e.preventDefault();
      }
      else{
         if((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46)
            e.preventDefault();
      }   
      if(e.keyCode==13){
         if(this.value == '')
            this.value = '4.00';
         else{
            if (+this.value > 4.000)
               this.value = '4.00';
            else if (+this.value < +a_min.value)
               this.value = +a_min.value;
         }
         g_ui['a_max'] = this.value;
         ui_changed_type();
      }
   })
}

function exportToJsonFile(jsonData) {
   let dataStr = JSON.stringify(jsonData);
   let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

   let double_digit = function (myNumber) { return ("0" + myNumber).slice(-2) }
   var today = new Date();
   var date_time = double_digit(today.getDate().toString()) + double_digit((today.getMonth() + 1).toString()) +
   today.getFullYear().toString() + '_' + double_digit(today.getHours().toString()) +
   double_digit(today.getMinutes().toString()) + double_digit(today.getSeconds().toString());
   let exportFileDefaultName = 'locus_json_' + date_time + '.json';

   let linkElement = document.createElement('a');
   linkElement.setAttribute('href', dataUri);
   linkElement.setAttribute('download', exportFileDefaultName);
   linkElement.click();
}

function export_JSON_onclick(){
   document.getElementById('Export_JSON').addEventListener('click', function(){
      var canvas_ui = {'canvas_scale':g_scale, 'cx':g_ctr[0], 'cy':g_ctr[1]}
      var ui_object = {...canvas_ui, ...g_ui};
      if(g_ui.locus_type_1 != 'none')
         ui_object = {...ui_object, ...{'locus1': trunc_locus_xy(g_locus_Xn1_branched,4)}};
      if(g_ui.locus_type_2 != 'none')
         ui_object = {...ui_object, ...{'locus2': trunc_locus_xy(g_locus_Xn2_branched,4)}};
      if(g_ui.locus_type_3 != 'none')
         ui_object = {...ui_object, ...{'locus3': trunc_locus_xy(g_locus_Xn3_branched,4)}};
      if(g_ui.locus_type_4 != 'none')
         ui_object = {...ui_object, ...{'locus4': trunc_locus_xy(g_locus_Xn4_branched,4)}};
      exportToJsonFile(ui_object);
   })
}

function conic_type_onchange(locus_type){
   var conic_type = document.getElementById('conic_type_'+ locus_type)
   switch(locus_type){
      case '1': 
         conic_type.innerHTML = (g_ui.locus_type_1 == 'none')?"":g_ui_ell.detect_1;
         break;
      case '2': 
         conic_type.innerHTML = (g_ui.locus_type_2 == 'none')?"":g_ui_ell.detect_2; 
         g_ui_ell.detect_2 = conic_type.innerHTML
         break;
      case '3': 
         conic_type.innerHTML = (g_ui.locus_type_3 == 'none')?"":g_ui_ell.detect_3; 
         g_ui_ell.detect_3 = conic_type.innerHTML
         break;
      case '4': 
         conic_type.innerHTML = (g_ui.locus_type_4 == 'none')?"":g_ui_ell.detect_4; 
         g_ui_ell.detect_4 = conic_type.innerHTML
         break;
      default:
         document.getElementById('conic_type_1').innerHTML = "X";
         g_ui_ell.detect_1 = "X"
         document.getElementById('conic_type_2').innerHTML = "X";
         g_ui_ell.detect_2 = "X"
         document.getElementById('conic_type_3').innerHTML = "X";
         g_ui_ell.detect_3 = "X"
         document.getElementById('conic_type_4').innerHTML = "X";
         g_ui_ell.detect_4 = "X"
         break;
   }
}

function setup() {
   var g_ui_reset = {
   a: 1.618, a_speed: 0, a_min: 1.01, a_max: 4, ell: true,
   locus_type_1: 'none', locus_type_2: 'none', locus_type_3: 'none', locus_type_4: 'none',
   Xn1: 1, Xn2: 1, Xn3: 1, Xn4: 1,
   tri_type_1: 'reference', tri_type_2: 'reference', tri_type_3: 'reference', tri_type_4: 'reference',
   draw_tri_1: false, draw_tri_2: false, draw_tri_3: false, draw_tri_4: false,
   mounting_Xn1: 'billiard', mounting_Xn2: 'billiard', mounting_Xn3: 'billiard', mounting_Xn4: 'billiard',
   animStep0: "0.500"
   };
   var g_ui_reset_initial_values = {
      a: 1.618, a_speed: 0, a_min: 1.01, a_max: 4, ell: true,
      locus_type_1: 'trilins', locus_type_2: 'none', locus_type_3: 'none', locus_type_4: 'none',
      Xn1: 1, Xn2: 1, Xn3: 1, Xn4: 1,
      tri_type_1: 'reference', tri_type_2: 'reference', tri_type_3: 'reference', tri_type_4: 'reference',
      draw_tri_1: true, draw_tri_2: false, draw_tri_3: false, draw_tri_4: false,
      mounting_Xn1: 'billiard', mounting_Xn2: 'billiard', mounting_Xn3: 'billiard', mounting_Xn4: 'billiard',
      animStep0: "0.500"
   };
   recenter();
   g_mouse = g_ctr0;
   reset_ui(g_ui_reset);
   let g_url_params = getURLParams();
   if(Object.keys(g_url_params).length === 0){
      reset_ui(g_ui_reset_initial_values);
      ui_changed("1");
      bbox_rescale("1");
   } else 
    set_url_params(g_url_params);
   create_checkboxes();
   canvas = createCanvas(g_width, g_height);
   canvas.parent('canvas');
   mouseOverCanvas();
   //frameRate(15);
   set_ui_variables_behavior()
   ui_changed("1")
   recenter();
   copy_image()
   export_PNG()
   play_controls()
   locus_type_onchange()
   tri_onchange()
   a_speed_onchange();
   tri_type_onchange();
   a_text_input();
   ell_onchange();
   export_JSON_onclick();
   Bbox_onclick("1");
   Bbox_onclick("2");
   Bbox_onclick("3");
   Bbox_onclick("4");
   conic_type_onchange("1");
   conic_type_onchange("2");
   conic_type_onchange("3");
   conic_type_onchange("4");
   recenter_onclick();

   reset_UI_onclick(g_ui_reset_initial_values);
   config_url_onclick(g_ui_reset);
}

function draw() {
   background(...clr_invert_ui(clr_background)); // (220, 220, 200);

   push();
   translate(g_ctr[0], g_ctr[1]);
   scale(g_width / g_scale);
   let stroke_w = sqrt(g_scale/g_scale0)*.02;
   if(g_ui.ell)
      draw_ellipse(g_ui.mounting_Xn1=="poristic"?1:+g_ui.a,stroke_w,g_ui.mounting_Xn1!=="poristic");
   draw_billiard_or_mounted_branched(g_ui.Xn1, +g_ui.a, g_tDeg,
      g_locus_Xn1_branched, clr_invert_ui(clr_red), g_ui.locus_type_1,
      g_ui.draw_tri_1, g_ui.mounting_Xn1, g_ui.tri_type_1, stroke_w, g_ui.ell, g_ui_ell.detect_1);

   draw_billiard_or_mounted_branched(g_ui.Xn2, +g_ui.a, g_tDeg,
      g_locus_Xn2_branched, clr_invert_ui(clr_dark_green), g_ui.locus_type_2,
      g_ui.draw_tri_2, g_ui.mounting_Xn2, g_ui.tri_type_2, stroke_w, g_ui.ell, g_ui_ell.detect_2);

   draw_billiard_or_mounted_branched(g_ui.Xn3, +g_ui.a, g_tDeg,
      g_locus_Xn3_branched, clr_invert_ui(clr_blue), g_ui.locus_type_3,
      g_ui.draw_tri_3, g_ui.mounting_Xn3, g_ui.tri_type_3, stroke_w, g_ui.ell, g_ui_ell.detect_3);

   draw_billiard_or_mounted_branched(g_ui.Xn4, +g_ui.a, g_tDeg,
      g_locus_Xn4_branched, clr_invert_ui(clr_purple), g_ui.locus_type_4,
      g_ui.draw_tri_4, g_ui.mounting_Xn4, g_ui.tri_type_4, stroke_w, g_ui.ell, g_ui_ell.detect_4);
   
   a_anim();

   pop();


   draw_text_full("(c) 2020 Darlan & Reznik", [g_width - 150, g_height - 24], clr_invert_ui(clr_blue));
   draw_text_full("dan-reznik.github.io/ellipse-mounted-loci-p5js/",
      [g_width - 260, g_height - 10], clr_invert_ui(clr_blue));
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