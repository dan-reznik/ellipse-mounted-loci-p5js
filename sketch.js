let glob = {
   width:0,
   height:0,
   main_title:"", 
   ctr0:[0,0],
   ctr:[0,0],
   mouse:[0,0],
   rmax : 20.0,
   rot : "0", // "90", "180", "270"
   background : [5, 5, 25],
   scale0 : 6,
   scale : 6, // = scale0
   dragged : false,
   click_ell : false,
   loop_ccw : true,
   loop : true,
   tDeg : 0,
   locus : {
      Xn1_branched : [],
      Xn2_branched : [],
      Xn3_branched : [],
      Xn4_branched : []
   },
   ui0 : {
      a: 1.618, a_speed: 0, a_min: 1.01, a_max: 4, ell: true,
      locus_type_1: 'trilins', locus_type_2: 'none', locus_type_3: 'none', locus_type_4: 'none',
      Xn1: 1, Xn2: 1, Xn3: 1, Xn4: 1,
      tri_type_1: 'reference', tri_type_2: 'reference', tri_type_3: 'reference', tri_type_4: 'reference',
      draw_tri_1: true, draw_tri_2: false, draw_tri_3: false, draw_tri_4: false,
      mounting_Xn1: 'billiard', mounting_Xn2: 'billiard', mounting_Xn3: 'billiard', mounting_Xn4: 'billiard',
      animStep0: "0.500"
   },
   ui : null,
   url_params : {},
   // melhorar
   ell : {detect_1: 'X', detect_2: 'X', detect_3: 'X', detect_4: 'X'},
   tandem_bar : {loc: false, mnt: false, xn: false, tri: false}
}

function set_ui_variables() {
   // usar dict e map
   document.getElementById("a").value = glob.ui["a"];
   document.getElementById("ell").checked = glob.ui["ell"];
   document.getElementById("a_speed").value = glob.ui["a_speed"];
   document.getElementById("a_min").value = glob.ui["a_min"];
   document.getElementById("a_max").value = glob.ui["a_max"];
   document.getElementById("a_input_text").value = glob.ui["a"];
   document.getElementById("locus_type_1").value = glob.ui["locus_type_1"];
   document.getElementById("locus_type_2").value = glob.ui["locus_type_2"];
   document.getElementById("locus_type_3").value = glob.ui["locus_type_3"];
   document.getElementById("locus_type_4").value = glob.ui["locus_type_4"];
   document.getElementById("Xn1").value = glob.ui["Xn1"];
   document.getElementById("demo_Xn1").value = glob.ui["Xn1"];
   document.getElementById("Xn2").value = glob.ui["Xn2"];
   document.getElementById("demo_Xn2").value = glob.ui["Xn2"];
   document.getElementById("Xn3").value = glob.ui["Xn3"];
   document.getElementById("demo_Xn3").value = glob.ui["Xn3"];
   document.getElementById("Xn4").value = glob.ui["Xn4"];
   document.getElementById("demo_Xn4").value = glob.ui["Xn4"];
   document.getElementById("tri_type_1").value = glob.ui["tri_type_1"];
   document.getElementById("tri_type_2").value = glob.ui["tri_type_2"];
   document.getElementById("tri_type_3").value = glob.ui["tri_type_3"];
   document.getElementById("tri_type_4").value = glob.ui["tri_type_4"];
   document.getElementById("draw_tri_1").checked = glob.ui["draw_tri_1"];
   document.getElementById("draw_tri_2").checked = glob.ui["draw_tri_2"];
   document.getElementById("draw_tri_3").checked = glob.ui["draw_tri_3"];
   document.getElementById("draw_tri_4").checked = glob.ui["draw_tri_4"];
   document.getElementById("mounting_Xn1").value = glob.ui["mounting_Xn1"];
   document.getElementById("mounting_Xn2").value = glob.ui["mounting_Xn2"];
   document.getElementById("mounting_Xn3").value = glob.ui["mounting_Xn3"];
   document.getElementById("mounting_Xn4").value = glob.ui["mounting_Xn4"];
   document.getElementById("animStep0").value = glob.ui["animStep0"];
}

function reset_ui() {
   glob.ui = JSON.parse(JSON.stringify(glob.ui0));
   glob.ctr = JSON.parse(JSON.stringify(glob.ctr0));
   set_ui_variables()
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
   let a = +glob.ui.a;

   if (locus_type_1 != "none" && ["1", "0"].includes(locus_type_changed)) {
      glob.locus.Xn1_branched = make_locus_branched(a, glob.ui.Xn1, tdegStep, glob.rmax,
         glob.ui.mounting_Xn1, glob.ui.locus_type_1, glob.ui.tri_type_1);
      glob.ell.detect_1 = locus_conic(glob.locus.Xn1_branched); 
   }
   if (locus_type_2 != "none" && ["2", "0"].includes(locus_type_changed)) {
      glob.locus.Xn2_branched = make_locus_branched(a, glob.ui.Xn2, tdegStep, glob.rmax,
         glob.ui.mounting_Xn2, glob.ui.locus_type_2, glob.ui.tri_type_2);
      glob.ell.detect_2 = locus_conic(glob.locus.Xn2_branched);
   }
   if (locus_type_3 != "none" && ["3", "0"].includes(locus_type_changed)) {
      glob.locus.Xn3_branched = make_locus_branched(a, glob.ui.Xn3, tdegStep, glob.rmax,
         glob.ui.mounting_Xn3, glob.ui.locus_type_3, glob.ui.tri_type_3);
      glob.ell.detect_3 = locus_conic(glob.locus.Xn3_branched);
   }
   if (locus_type_4 != "none" && ["4", "0"].includes(locus_type_changed)) {
      glob.locus.Xn4_branched = make_locus_branched(a, glob.ui.Xn4, tdegStep, glob.rmax,
         glob.ui.mounting_Xn4, glob.ui.locus_type_4, glob.ui.tri_type_4);
      glob.ell.detect_4 = locus_conic(glob.locus.Xn4_branched);
   }
}

function create_checkboxes() {
   let chks = [];

   glob.main_title = create_main_title();
   create_title("© 2020 Iverton Darlan & Dan Reznik", false);
}

function get_window_width_height() {
   glob.width = document.getElementsByClassName('item graphic')[0].offsetWidth;
   glob.height = document.getElementsByClassName('item graphic')[0].offsetHeight;
}


function recenter() {
   glob.ctr0 = [glob.width / 2, glob.height / 2];
   glob.ctr = [glob.width / 2, glob.height / 2];
   glob.mouse = [glob.width / 2, glob.height / 2];
}

function windowResized() {
   get_window_width_height();
   if(glob.ui.locus_type_4 !== 'none'){
      ui_changed("4");
      bbox_rescale("4");
   }
   if(glob.ui.locus_type_3 !== 'none'){
      ui_changed("3");
      bbox_rescale("3");
   }
   if(glob.ui.locus_type_2 !== 'none'){
      ui_changed("2");
      bbox_rescale("2");
   }
   if(glob.ui.locus_type_1 !== 'none'){
      ui_changed("1");
      bbox_rescale("1");
   }
   resizeCanvas(glob.width, glob.height);
}

function ui_changed(locus_type_changed) {
   tandem_bar_variables();
   create_locus(locus_type_changed);
   redraw();
}

function a_oninput(sliderID, input_text_ID){
   var slider = document.getElementById(sliderID);
   var text = document.getElementById(input_text_ID);
   slider.value = glob.ui[sliderID];
   slider.addEventListener('input', function () {
      glob.ui[sliderID] = this.value;
      if(glob.ui.locus_type_1 != 'none') conic_type_onchange("1");
      if(glob.ui.locus_type_2 != 'none') conic_type_onchange("2");
      if(glob.ui.locus_type_3 != 'none') conic_type_onchange("3");
      if(glob.ui.locus_type_4 != 'none') conic_type_onchange("4");
      text.value = this.value;
      ui_changed('0')
   });
   text.addEventListener("input", function () {
      if(this.value !== ''){
         if (this.value > 4)
            this.value = "4";
         else if (this.value < 1.001)
            this.value = "1.001";
      }
   })
   text.addEventListener('keydown', function (e) {
      if(e.keyCode==9){
         if(this.value == '')
            this.value = '1.618';
         glob.ui[sliderID] = this.value;
         slider.value = this.value;
         ui_changed('0');
         if(glob.ui.locus_type_1 != 'none') conic_type_onchange("1");
         if(glob.ui.locus_type_2 != 'none') conic_type_onchange("2");
         if(glob.ui.locus_type_3 != 'none') conic_type_onchange("3");
         if(glob.ui.locus_type_4 != 'none') conic_type_onchange("4");         
         e.preventDefault();
         slider.focus();
      }
   })
   text.addEventListener('keypress', function (e) {
      if (e.keyCode < 48 || e.keyCode > 57)
        e.preventDefault();
      if(e.keyCode==13){
         if(this.value == '')
            this.value = '1.618';
         glob.ui[sliderID] = this.value;
         slider.value = this.value;
         ui_changed('0');
         if(glob.ui.locus_type_1 != 'none') conic_type_onchange("1");
         if(glob.ui.locus_type_2 != 'none') conic_type_onchange("2");
         if(glob.ui.locus_type_3 != 'none') conic_type_onchange("3");
         if(glob.ui.locus_type_4 != 'none') conic_type_onchange("4");
         slider.focus();
      }
   })

}

function selector_output(input_ID, output_ID = "", ell_detect = "0") {
   var selector = document.getElementById(input_ID);
   selector.value = glob.ui[input_ID];
   selector.addEventListener('change', function () {
      glob.ui[input_ID] = selector.value
      ui_changed_type();
      if(input_ID != 'animStep0')
         conic_type_onchange(ell_detect)
   })
}

function slider_text_changed(sliderId, textId, minus_id, plus_id, ell_detect) {
   var slider = document.getElementById(sliderId);
   var text = document.getElementById(textId);

   document.getElementById(minus_id).addEventListener("click", function () {
      if (glob.ui[sliderId] > 1) {
         glob.ui[sliderId]--;
         slider.value--;
         text.value--;
         ui_changed_type();
         conic_type_onchange(ell_detect);
         slider.focus();
      }
   });

   document.getElementById(plus_id).addEventListener("click", function () {
      if (glob.ui[sliderId] < 1000) {
         glob.ui[sliderId]++;
         slider.value++;
         text.value++;
         ui_changed_type();
         conic_type_onchange(ell_detect);
         slider.focus();
      }
   });

   slider.addEventListener("input", function () {
      glob.ui[sliderId] = this.value;
      text.value = this.value;
      ui_changed_type();
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
         glob.ui[sliderId] = this.value;
         slider.value = this.value;
         ui_changed_type();
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
         glob.ui[sliderId] = this.value;
         slider.value = this.value;
         ui_changed_type();
         conic_type_onchange(ell_detect);
         slider.focus();
      }
   })
}

function mouseOverCanvas() {
   canvas_div = document.getElementById("canvas")
   canvas_div.mouseIsOver = false
   canvas_div.addEventListener('mouseover', function () { this.mouseIsOver = true; });
   canvas_div.addEventListener('mouseout', function () { this.mouseIsOver = false; });
}

function bbox_rescale(n) {
   const locus_types = [glob.ui.locus_type_1, glob.ui.locus_type_2, glob.ui.locus_type_3, glob.ui.locus_type_4];
   const loci = [glob.locus.Xn1_branched, glob.locus.Xn2_branched, glob.locus.Xn3_branched, glob.locus.Xn4_branched];
   //glob.scale = locus_bbox(+glob.ui.a, locus_types[n - 1], loci[n - 1], glob.width / glob.height, glob.scale0, glob.rmax);
   const bbox = locus_bbox_ctr(+glob.ui.a,locus_types[n - 1], loci[n - 1], glob.width / glob.height, glob.scale0);
   glob.scale = bbox.scale;
   glob.ctr = [glob.width/2-bbox.ctr_x*(glob.width/glob.scale),glob.height/2-bbox.ctr_y*(glob.width/glob.scale)];
   glob.ctr0 = glob.ctr;
   ui_changed_type();
   redraw();
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

function get_diff_default(key) {
   // this should be here
   const original_to_url_params = {
      a: 'a', a_speed: 'asp', a_min: 'amn', a_max: 'amx', ell: 'ell',
      locus_type_1: 'lc1', locus_type_2: 'lc2', locus_type_3: 'lc3', locus_type_4: 'lc4',
      Xn1: 'Xn1', Xn2: 'Xn2', Xn3: 'Xn3', Xn4: 'Xn4',
      tri_type_1: 'tr1', tri_type_2: 'tr2', tri_type_3: 'tr3', tri_type_4: 'tr4',
      draw_tri_1: 'dr1', draw_tri_2: 'dr2', draw_tri_3: 'dr3', draw_tri_4: 'dr4',
      mounting_Xn1: 'mt1', mounting_Xn2: 'mt2', mounting_Xn3: 'mt3', mounting_Xn4: 'mt4',
      animStep0: 'aS'
   };
   const animStep0_to_url_value = {
      "0.125": 'slow', "0.500": 'med', "1.000": 'fast' 
   }
   const a_speed_to_url_value = {
      "0.000": 'anim', "0.005": 'slow', "0.010": 'med', "0.050": 'fast'
   }
   if (glob.ui[key] !== glob.ui0[key]){
      if(key == 'a'){
         return original_to_url_params[key] + '=' + (+glob.ui[key]).toFixed(3) + '&';
      }
      else if(key == 'animStep0')
         return original_to_url_params[key] + '=' + animStep0_to_url_value[abs(glob.ui[key]).toFixed(3)] + '&';
      else if(key == 'a_speed')
         return original_to_url_params[key] + '=' + a_speed_to_url_value[abs(glob.ui[key]).toFixed(3)] + '&';
      else
         return original_to_url_params[key] + '=' + glob.ui[key] + '&';
   }
   else
      return '';
}

function get_diff_default_canvas(key){
   let canvas_to_url_params = {
      'glob.scale': 'sc',
      'glob.ctr[0]': 'cx',
      'glob.ctr[1]': 'cy'
   };
   let canvas_params_reset = {
      'glob.scale': locus_bbox(+glob.ui.a, glob.ui.locus_type_1, glob.locus.Xn1_branched, glob.width / glob.height, glob.scale0, glob.rmax),
      'glob.ctr[0]': glob.width / 2,
      'glob.ctr[1]': glob.height / 2
   };
   if (eval(key) !== canvas_params_reset[key]){
      if(key == 'glob.scale')
         return canvas_to_url_params[key] + '=' + eval(key).toFixed(3) + '&';
      else
         return canvas_to_url_params[key] + '=' + eval(key).toFixed(0) + '&';
   }
   else
      return '';
}


function ui_changed_type(){
   if(glob.ui.locus_type_1 != 'none'){
      ui_changed('1');
      setup_conic_type_onchange('1')
   }
   if(glob.ui.locus_type_2 != 'none'){
      ui_changed('2');
      setup_conic_type_onchange('2')
   }
   if(glob.ui.locus_type_3 != 'none'){
      ui_changed('3');
      setup_conic_type_onchange('3')
   }
   if(glob.ui.locus_type_4 != 'none'){
      ui_changed('4');
      setup_conic_type_onchange('4')
   }
}

function a_anim(){
   a_slider = document.getElementById('a')
   a_text = document.getElementById('a_input_text')
   glob.ui.a_speed = +glob.ui.a_speed;
   glob.ui.a = +glob.ui.a;
   glob.ui.a_max = +glob.ui.a_max;
   glob.ui.a_min = +glob.ui.a_min;
   if(glob.ui.a_speed != 0.000){
      //console.log(glob.ui.a)
      if(glob.ui.a_speed > 0)
         if(glob.ui.a_max-glob.ui.a <= glob.ui.a_speed){
            glob.ui.a = glob.ui.a_max;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            glob.ui.a_speed = -glob.ui.a_speed;
            ui_changed_type()
         }
         else{
            glob.ui.a += glob.ui.a_speed;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            ui_changed_type()    
         }
      else
         if(glob.ui.a+glob.ui.a_speed<=glob.ui.a_min){
            glob.ui.a = glob.ui.a_min;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            glob.ui.a_speed = -glob.ui.a_speed;
            ui_changed_type()        
         }
         else{
            glob.ui.a += glob.ui.a_speed;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            ui_changed_type()        
         }
   } 
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

function tandem_bar_variables(){
   if(glob.tandem_bar.loc == true){[glob.ui.locus_type_2, glob.ui.locus_type_3, glob.ui.locus_type_4] = [glob.ui.locus_type_1, glob.ui.locus_type_1, glob.ui.locus_type_1];}
   if(glob.tandem_bar.mnt == true){[glob.ui.mounting_Xn2, glob.ui.mounting_Xn3, glob.ui.mounting_Xn4] = [glob.ui.mounting_Xn1, glob.ui.mounting_Xn1, glob.ui.mounting_Xn1];}
   if(glob.tandem_bar.xn == true){[glob.ui.Xn2, glob.ui.Xn3, glob.ui.Xn4] = [glob.ui.Xn1, glob.ui.Xn1, glob.ui.Xn1];}
   if(glob.tandem_bar.tri == true){
      [glob.ui.tri_type_2, glob.ui.tri_type_3, glob.ui.tri_type_4] = [glob.ui.tri_type_1, glob.ui.tri_type_1, glob.ui.tri_type_1];
      [glob.ui.draw_tri_2, glob.ui.draw_tri_3, glob.ui.draw_tri_4] = [glob.ui.draw_tri_1, glob.ui.draw_tri_1, glob.ui.draw_tri_1];
   }
   
   set_ui_variables(glob.ui);
}

function hexToRgb(hex) {
   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}

function setup() {
   get_window_width_height();
   recenter();
   reset_ui();
   url_params = getURLParams();
   if(Object.keys(url_params).length > 0)
    set_url_params(url_params);
   create_checkboxes();
   let canvas = createCanvas(glob.width, glob.height);
   canvas.parent('canvas');
   mouseOverCanvas();
   //frameRate(15);
   setup_ui();
}

function draw() {
   // vamos usar glob.bg;
   background(...glob.background); // (220, 220, 200);

   push();
   translate(glob.ctr[0], glob.ctr[1]);
   scale(glob.width / glob.scale);
   //rotate(PI/2);
   let stroke_w = sqrt(glob.scale/glob.scale0)*.02;

   if(glob.ui.ell)
      draw_ellipse(glob.ui.mounting_Xn1=="poristic"?1:+glob.ui.a,stroke_w,glob.ui.mounting_Xn1!=="poristic");

   draw_billiard_or_mounted_branched(glob.ui.Xn1, +glob.ui.a, glob.tDeg,
      glob.locus.Xn1_branched, clr_invert_ui(clr_red), glob.ui.locus_type_1,
      glob.ui.draw_tri_1, glob.ui.mounting_Xn1, glob.ui.tri_type_1, stroke_w, glob.ui.ell, glob.ell.detect_1);

   draw_billiard_or_mounted_branched(glob.ui.Xn2, +glob.ui.a, glob.tDeg,
      glob.locus.Xn2_branched, clr_invert_ui(clr_dark_green), glob.ui.locus_type_2,
      glob.ui.draw_tri_2, glob.ui.mounting_Xn2, glob.ui.tri_type_2, stroke_w, glob.ui.ell, glob.ell.detect_2);

   draw_billiard_or_mounted_branched(glob.ui.Xn3, +glob.ui.a, glob.tDeg,
      glob.locus.Xn3_branched, clr_invert_ui(clr_blue), glob.ui.locus_type_3,
      glob.ui.draw_tri_3, glob.ui.mounting_Xn3, glob.ui.tri_type_3, stroke_w, glob.ui.ell, glob.ell.detect_3);

   draw_billiard_or_mounted_branched(glob.ui.Xn4, +glob.ui.a, glob.tDeg,
      glob.locus.Xn4_branched, clr_invert_ui(clr_purple), glob.ui.locus_type_4,
      glob.ui.draw_tri_4, glob.ui.mounting_Xn4, glob.ui.tri_type_4, stroke_w, glob.ui.ell, glob.ell.detect_4);
   
   a_anim();

   pop();


   draw_text_full("(c) 2020 Darlan & Reznik", [glob.width - 150, glob.height - 24], clr_invert_ui(clr_blue));
   draw_text_full("dan-reznik.github.io/ellipse-mounted-loci-p5js/",
      [glob.width - 260, glob.height - 10], clr_invert_ui(clr_blue));
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
   /*var glob.click_ell = mouse_in_ell(glob.ui.a);
   if (glob.click_ell && glob.loop) {
      noLoop();
      glob.loop = false;
      return (false);
   } else if (glob.click_ell && !glob.loop) {
      if (mouseButton !== LEFT)
         glob.loop_ccw = !glob.loop_ccw;
      loop();
      glob.loop = true;
      return (false);
   } else
      return (true);*/
}


function mouseReleased() {
   //if (!glob.dragged && !glob.loop) {
   //  glob.loop = true;
   //  loop();
   //}
   //if(glob.dragged && glob.loop) loop();
   glob.click_ell = false;
}

function mouseDragged() {
   if (canvas_div.mouseIsOver) {
      glob.dragged = true;
      //noLoop();
      //glob.loop = false;
      glob.ctr = vsum(vdiff([mouseX, mouseY], glob.mouse), glob.ctr0);
      if (!glob.loop) {
         ui_changed_type();
         redraw();
      } 
   }
}

function mouseWheel(event) {
   //if (mouse_in_ell(2*glob.ui.a,2)) {
   if (event.delta > 0)
      glob.scale *= 1.05;
   else
      glob.scale *= 0.95;
   //uncomment to block page scrolling
   if (!glob.loop) {
      ui_changed_type();
      redraw();
   }
   return false;
   //}
}

// for debugging
function get_current_tri_1() {
   return get_tri_generic(+glob.ui.a, glob.tDeg, glob.ui.mounting_Xn1, glob.ui.tri_type_1);
}

function get_current_tri_2() {
    return get_tri_generic(+glob.ui.a, glob.tDeg, glob.ui.mounting_Xn2, glob.ui.tri_type_2);
 }
 function get_current_tri_3() {
    return get_tri_generic(+glob.ui.a, glob.tDeg, glob.ui.mounting_Xn3, glob.ui.tri_type_3);
 }

 function get_current_tri_4() {
    return get_tri_generic(+glob.ui.a, glob.tDeg, glob.ui.mounting_Xn4, glob.ui.tri_type_4);
 }
 