function setup_bbox_onclick(n) {
  document.getElementById('Bbox_' + n).addEventListener('click', () => bbox_rescale(n));
}

function rgbToHex(rgb) {   
   var numberToHex = function (rgb) { 
      var hex = Number(rgb).toString(16);
      if (hex.length < 2) {
           hex = "0" + hex;
      }
      return hex;
   };
   var red = numberToHex(rgb[0]);
   var green = numberToHex(rgb[1]);
   var blue = numberToHex(rgb[2]);
   return '#'+red+green+blue;
 };

function set_ui_variables() {
   var variables_change_value = ['a', 'a_speed', 'a_min', 'a_max', 'a_input_text'
   ,'locus_type_1', 'locus_type_2', 'locus_type_3', 'locus_type_4','Xn1','demo_Xn1', 'Xn2'
   ,'demo_Xn2', 'Xn3', 'demo_Xn3', 'Xn4', 'demo_Xn4', 'tri_type_1', 'tri_type_2', 'tri_type_3'
   ,'tri_type_4','mounting_Xn1', 'mounting_Xn2', 'mounting_Xn3', 'mounting_Xn4', 'animStep0', 'rot', 'rmax', 'bg']

   var variables_change_checked = ['ell', 'draw_tri_1', 'draw_tri_2', 'draw_tri_3', 'draw_tri_4'
                                    ,'tandem_loc', 'tandem_mnt', 'tandem_xn', 'tandem_tri']
   var from_to = {a_input_text: 'a', demo_Xn1: 'Xn1', demo_Xn2: 'Xn2', demo_Xn3: 'Xn3', demo_Xn4: 'Xn4'}

   variables_change_value.map(function(x){
      var y = x
      if(['a_input_text', 'demo_Xn1', 'demo_Xn2', 'demo_Xn3', 'demo_Xn4'].includes(x)) {y = from_to[x]}
      if(x != 'bg')  document.getElementById(x).value = glob.ui[y];
      else
         document.getElementById(x).value = rgbToHex(glob.ui[y]);
   });
   variables_change_checked.map(function(element){document.getElementById(element).checked = glob.ui[element]})
}

function tandem_bar_variables(variable, global_var){
   if(glob.ui.tandem_loc == true && variable=='loc'){[glob.ui.locus_type_1,glob.ui.locus_type_2, glob.ui.locus_type_3, glob.ui.locus_type_4] = [global_var,global_var,global_var,global_var]}
   if(glob.ui.tandem_mnt == true && variable=='mnt'){[glob.ui.mounting_Xn1,glob.ui.mounting_Xn2, glob.ui.mounting_Xn3, glob.ui.mounting_Xn4] = [global_var,global_var,global_var,global_var]}
   if(glob.ui.tandem_xn == true && variable=='xn'){[glob.ui.Xn1,glob.ui.Xn2, glob.ui.Xn3, glob.ui.Xn4] = [global_var,global_var,global_var,global_var]}
   if(glob.ui.tandem_tri == true && variable=='tri'){[glob.ui.tri_type_1,glob.ui.tri_type_2, glob.ui.tri_type_3, glob.ui.tri_type_4] = [global_var,global_var,global_var,global_var]}

   set_ui_variables(glob.ui);
}

function ui_changed(locus_type_changed, call_create_locus=true, init=false) {
   if(call_create_locus) create_locus(locus_type_changed, init);
}

function setup_conic_type_onchange(locus_type){
   var conic_type = document.getElementById('conic_type_'+ locus_type)
   switch(locus_type){
      case '1': 
         conic_type.innerHTML = (glob.ui.locus_type_1 == 'none')?"":glob.ell_detects[0];
         glob.ell_detects[0] = conic_type.innerHTML;
         break;
      case '2': 
         conic_type.innerHTML = (glob.ui.locus_type_2 == 'none')?"":glob.ell_detects[1]; 
         glob.ell_detects[1] = conic_type.innerHTML;
         break;
      case '3': 
         conic_type.innerHTML = (glob.ui.locus_type_3 == 'none')?"":glob.ell_detects[2]; 
         glob.ell_detects[2] = conic_type.innerHTML;
         break;
      case '4': 
         conic_type.innerHTML = (glob.ui.locus_type_4 == 'none')?"":glob.ell_detects[3]; 
         glob.ell_detects[3] = conic_type.innerHTML;
         break;
      default:
         document.getElementById('conic_type_1').innerHTML = "X";
         glob.ell_detects[0] = "X"
         document.getElementById('conic_type_2').innerHTML = "X";
         glob.ell_detects[1] = "X"
         document.getElementById('conic_type_3').innerHTML = "X";
         glob.ell_detects[2] = "X"
         document.getElementById('conic_type_4').innerHTML = "X";
         glob.ell_detects[3] = "X"
         break;
   }
}

function ui_changed_type(call_create_locus = false){
   if(glob.ui.locus_type_1 != 'none'){
      ui_changed('1', call_create_locus);
      setup_conic_type_onchange('1')
   }
   if(glob.ui.locus_type_2 != 'none'){
      ui_changed('2', call_create_locus);
      setup_conic_type_onchange('2')
   }
   if(glob.ui.locus_type_3 != 'none'){
      ui_changed('3', call_create_locus);
      setup_conic_type_onchange('3')
   }
   if(glob.ui.locus_type_4 != 'none'){
      ui_changed('4', call_create_locus);
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
      if(glob.ui.a_speed > 0)
         if(glob.ui.a_max-glob.ui.a <= glob.ui.a_speed){
            glob.ui.a = glob.ui.a_max;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            glob.ui.a_speed = -glob.ui.a_speed;
            ui_changed_type(true)
            redraw();
         }
         else{
            glob.ui.a += glob.ui.a_speed;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            ui_changed_type(true) 
            redraw();   
         }
      else
         if(glob.ui.a+glob.ui.a_speed<=glob.ui.a_min){
            glob.ui.a = glob.ui.a_min;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            glob.ui.a_speed = -glob.ui.a_speed;
            ui_changed_type(true) 
            redraw();       
         }
         else{
            glob.ui.a += glob.ui.a_speed;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            ui_changed_type(true)  
            redraw();      
         }
   } 
}

function a_oninput(sliderID, input_text_ID){
   var slider = document.getElementById(sliderID);
   var text = document.getElementById(input_text_ID);
   slider.value = glob.ui[sliderID];
   slider.addEventListener('input', function () {
      glob.ui[sliderID] = this.value;
      if(glob.ui.locus_type_1 != 'none') set_conic_type_ui("1");
      if(glob.ui.locus_type_2 != 'none') set_conic_type_ui("2");
      if(glob.ui.locus_type_3 != 'none') set_conic_type_ui("3");
      if(glob.ui.locus_type_4 != 'none') set_conic_type_ui("4");
      text.value = this.value;
      ui_changed('0', true)
      redraw();
   });
   text.addEventListener("input", function () {
      if(this.value !== ''){
         if (this.value > 10)
            this.value = "10";
      }
   })
   text.addEventListener('keydown', function (e) {
      if(e.keyCode==9){
         if(this.value == '')
            this.value = '1.618';
         glob.ui[sliderID] = this.value;
         slider.value = this.value;
         ui_changed('0', true);
         redraw();
         if(glob.ui.locus_type_1 != 'none') set_conic_type_ui("1");
         if(glob.ui.locus_type_2 != 'none') set_conic_type_ui("2");
         if(glob.ui.locus_type_3 != 'none') set_conic_type_ui("3");
         if(glob.ui.locus_type_4 != 'none') set_conic_type_ui("4");         
         e.preventDefault();
         slider.focus();
      }
   })
   text.addEventListener('keypress', function (e) {
      if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46)
        e.preventDefault();
      if(e.keyCode==46 && this.value.includes('.'))
         e.preventDefault();
      if(e.keyCode==13){
         if (this.value < 1.001)
            this.value = "1.001";
         else if(this.value == '')
            this.value = '1.618';
         glob.ui[sliderID] = this.value;
         slider.value = this.value;
         ui_changed('0', true);
         redraw();
         if(glob.ui.locus_type_1 != 'none') set_conic_type_ui("1");
         if(glob.ui.locus_type_2 != 'none') set_conic_type_ui("2");
         if(glob.ui.locus_type_3 != 'none') set_conic_type_ui("3");
         if(glob.ui.locus_type_4 != 'none') set_conic_type_ui("4");
         slider.focus();
      }
   })
}

function selector_output(input_ID, output_ID = "", ell_detect = "0") {
   var selector = document.getElementById(input_ID);
   selector.value = glob.ui[input_ID];
   selector.addEventListener('change', function () {
      glob.ui[input_ID] = selector.value
      if(input_ID != 'animStep0') {
         tandem_bar_variables('mnt', eval('glob.ui.'+input_ID));
         glob.ui.tandem_mnt?ui_changed_type(true):ui_changed(ell_detect, true);
         redraw();
         glob.ui.tandem_mnt?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui(ell_detect);
      }
      else {
         ui_changed_type(false);
         redraw();
      }
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
         tandem_bar_variables('xn', eval('glob.ui.'+sliderId));
         glob.ui.tandem_xn?ui_changed_type(true):ui_changed(ell_detect, true);
         redraw();
         glob.ui.tandem_xn?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui(ell_detect);
         slider.focus();
      }
   });

   document.getElementById(plus_id).addEventListener("click", function () {
      if (glob.ui[sliderId] < 1000) {
         glob.ui[sliderId]++;
         slider.value++;
         text.value++;
         tandem_bar_variables('xn', eval('glob.ui.'+sliderId));
         glob.ui.tandem_xn?ui_changed_type(true):ui_changed(ell_detect, true);
         redraw();
         glob.ui.tandem_xn?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui(ell_detect);
         slider.focus();
      }
   });

   slider.addEventListener("input", function () {
      glob.ui[sliderId] = this.value;
      text.value = this.value;
      tandem_bar_variables('xn', eval('glob.ui.'+sliderId));
      glob.ui.tandem_xn?ui_changed_type(true):ui_changed(ell_detect, true);
      redraw();
      glob.ui.tandem_xn?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui(ell_detect);
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
         tandem_bar_variables('xn', eval('glob.ui.'+sliderId));
         glob.ui.tandem_xn?ui_changed_type(true):ui_changed(ell_detect, true);
         redraw();
         glob.ui.tandem_xn?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui(ell_detect);;
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
         tandem_bar_variables('xn', eval('glob.ui.'+sliderId));
         glob.ui.tandem_xn?ui_changed_type(true):ui_changed(ell_detect, true);
         redraw();
         glob.ui.tandem_xn?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui(ell_detect);
         slider.focus();
      }
   })
}

function setup_ui_variables_behavior() {
  //a
  a_oninput("a", "a_input_text",'0')
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

function setup_reset_UI_onclick() {
  document.getElementById('reset_UI').addEventListener('click', function () {
     reset_ui();
     ui_changed("4", true);
     ui_changed("3", true);
     ui_changed("2", true);
     ui_changed("1", true);
     redraw();
     bbox_rescale("1");
  });
}

function setup_copy_image() {
  var copy_image_button = document.getElementById('copy_image');

  copy_image_button.addEventListener("click", function () {
     let canvas = document.getElementById('defaultCanvas0');
     canvas.focus();
     canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]));
  });
}

function setup_play_controls() {
  var play_button = document.getElementById("play_pause");
  var backward_button = document.getElementById("backward");
  var forward_button = document.getElementById("forward");
  var play_class = "fa fa-play-circle-o";
  var stop_class = "fa fa-pause-circle-o";

  play_button.isPlaying = true;
  play_button.className = stop_class;
  play_button.addEventListener("click", function () {
     if (this.isPlaying && glob.loop) {
        this.isPlaying = false;
        this.className = play_class;
        noLoop();
        glob.loop = false;
     } else if (!this.isPlaying && !glob.loop) {
        this.isPlaying = true;
        this.className = stop_class;
        loop();
        glob.loop = true;
     }
  });

  backward_button.addEventListener("click", function () {
     glob.loop_ccw = false;
     if (play_button.isPlaying) {
        play_button.isPlaying = true;
        play_button.className = stop_class;
        loop();
        glob.loop = true;
     } else{
         glob.tDeg -= (+glob.ui.animStep0);
         redraw();
     }
  });
  forward_button.addEventListener("click", function () {
     glob.loop_ccw = true;
     if (play_button.isPlaying) {
        play_button.isPlaying = true;
        play_button.className = stop_class;
        loop();
        glob.loop = true;
     } else{
      glob.tDeg += (+glob.ui.animStep0);
      redraw();
  }
  });
   play_button.addEventListener('keydown', function (e) {
      if (!play_button.isPlaying) {
         if(e.keyCode == 39){
            glob.tDeg += (+glob.ui.animStep0);
            redraw();
         } 
         else if(e.keyCode == 37){
            glob.tDeg -= (+glob.ui.animStep0);
            redraw();
         }
      }
   })
   backward_button.addEventListener('keydown', function (e) {
      if (!play_button.isPlaying) {
         if(e.keyCode == 39){
            glob.tDeg += (+glob.ui.animStep0);
            redraw();
         } 
         else if(e.keyCode == 37){
            glob.tDeg -= (+glob.ui.animStep0);
            redraw();
         }
      }
   })
   forward_button.addEventListener('keydown', function (e) {
      if (!play_button.isPlaying) {
         if(e.keyCode == 39){
            glob.tDeg += (+glob.ui.animStep0);
            redraw();
         } 
         else if(e.keyCode == 37){
            glob.tDeg -= (+glob.ui.animStep0);
            redraw();
         }
      }
   })
}

function setup_tri_onchange() {
  document.getElementById('draw_tri_1').addEventListener("click", function () {
     glob.ui.draw_tri_1 = this.checked;
     ui_changed_type(false);
     redraw();
  })
  document.getElementById('draw_tri_2').addEventListener("click", function () {
     glob.ui.draw_tri_2 = this.checked;
     ui_changed_type(false);
     redraw();
  })
  document.getElementById('draw_tri_3').addEventListener("click", function () {
     glob.ui.draw_tri_3 = this.checked;
     ui_changed_type(false);
     redraw();
  })
  document.getElementById('draw_tri_4').addEventListener("click", function () {
     glob.ui.draw_tri_4 = this.checked;
     ui_changed_type(false);
     redraw();
  })
}

function setup_ell_onchange(){
  document.getElementById('ell').addEventListener("click", function () {
     glob.ui.ell = this.checked;
     ui_changed_type(false);
     redraw()
  })
}

function setup_a_speed_onchange(){
  document.getElementById('a_speed').addEventListener("change", function () {
     glob.ui.a_speed = this.value;
     if(glob.ui.a_speed != 0.000){
        glob.ui.a = +glob.ui.a_min;
        a_slider.value = glob.ui.a;
        a_text.innerHTML = a_slider.value;
        if(glob.ui.locus_type_1 != 'none')  ui_changed('1', true);
        if(glob.ui.locus_type_2 != 'none')  ui_changed('2', true);
        if(glob.ui.locus_type_3 != 'none')  ui_changed('3', true);
        if(glob.ui.locus_type_4 != 'none')  ui_changed('4', true);
        redraw();
     }
  })
}

function setup_locus_type_onchange() {
  document.getElementById("locus_type_1").addEventListener("change", function () {
     glob.ui.locus_type_1 = this.value;
     tandem_bar_variables('loc', glob.ui.locus_type_1);
     glob.ui.tandem_loc?ui_changed_type(true):ui_changed("1", true);
     redraw();
     glob.ui.tandem_loc?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui("1");
  });
  document.getElementById("locus_type_2").addEventListener("change", function () {
     glob.ui.locus_type_2 = this.value;
     tandem_bar_variables('loc', glob.ui.locus_type_2);
     glob.ui.tandem_loc?ui_changed_type(true):ui_changed("2", true);
     redraw();
     glob.ui.tandem_loc?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui("2");
  });
  document.getElementById("locus_type_3").addEventListener("change", function () {
     glob.ui.locus_type_3 = this.value;
     tandem_bar_variables('loc', glob.ui.locus_type_3);
     glob.ui.tandem_loc?ui_changed_type(true):ui_changed("3", true);
     redraw();
     glob.ui.tandem_loc?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui("3");
  });
  document.getElementById("locus_type_4").addEventListener("change", function () {
     glob.ui.locus_type_4 = this.value;
     tandem_bar_variables('loc', glob.ui.locus_type_4);
     glob.ui.tandem_loc?ui_changed_type(true):ui_changed("4", true);
     redraw();
     glob.ui.tandem_loc?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui("4");
  });
}

function setup_tri_type_onchange() {
  document.getElementById("tri_type_1").addEventListener("change", function () {
     glob.ui.tri_type_1 = this.value;
     tandem_bar_variables('tri', glob.ui.tri_type_1);
     glob.ui.tandem_tri?ui_changed_type(true):ui_changed("1", true);
     redraw();
     glob.ui.tandem_tri?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui("1");
  });
  document.getElementById("tri_type_2").addEventListener("change", function () {
     glob.ui.tri_type_2 = this.value;
     tandem_bar_variables('tri', glob.ui.tri_type_2);
     glob.ui.tandem_tri?ui_changed_type(true):ui_changed("2", true);
     redraw();
     glob.ui.tandem_tri?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui("2");
  });
  document.getElementById("tri_type_3").addEventListener("change", function () {
     glob.ui.tri_type_3 = this.value;
     tandem_bar_variables('tri', glob.ui.tri_type_3);
     glob.ui.tandem_tri?ui_changed_type(true):ui_changed("3", true);
     redraw();
     glob.ui.tandem_tri?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui("3");
  });
  document.getElementById("tri_type_4").addEventListener("change", function () {
     glob.ui.tri_type_4 = this.value;
     tandem_bar_variables('tri', glob.ui.tri_type_4);
     glob.ui.tandem_tri?ui_changed_type(true):ui_changed("4", true);
     redraw();
     glob.ui.tandem_tri?['1','2','3','4'].map(set_conic_type_ui):set_conic_type_ui("4");
  });
}

function get_diff_default_canvas(key){
   let canvas_to_url_params = {
      'glob.scale': 'sc',
      'glob.ctr[0]': 'cx',
      'glob.ctr[1]': 'cy'
   };
   let canvas_params_reset = {
      'glob.scale': locus_bbox(+glob.ui.a, glob.ui.locus_type_1, glob.locus_branched[0], glob.width / glob.height, glob.scale0, glob.ui.rmax),
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

function get_diff_default(key) {
   // this should be here
   const original_to_url_params = {
      a: 'a', a_speed: 'asp', a_min: 'amn', a_max: 'amx', ell: 'ell',
      locus_type_1: 'lc1', locus_type_2: 'lc2', locus_type_3: 'lc3', locus_type_4: 'lc4',
      Xn1: 'Xn1', Xn2: 'Xn2', Xn3: 'Xn3', Xn4: 'Xn4',
      tri_type_1: 'tr1', tri_type_2: 'tr2', tri_type_3: 'tr3', tri_type_4: 'tr4',
      draw_tri_1: 'dr1', draw_tri_2: 'dr2', draw_tri_3: 'dr3', draw_tri_4: 'dr4',
      mounting_Xn1: 'mt1', mounting_Xn2: 'mt2', mounting_Xn3: 'mt3', mounting_Xn4: 'mt4',
      animStep0: 'aS', rot: 'rot', rmax : 'rmx', bg:'bg' 
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
      else if(key == 'bg')
         return original_to_url_params[key] + '=' + rgbToHex(glob.ui[key]).slice(1) + '&';
      else
         return original_to_url_params[key] + '=' + glob.ui[key] + '&';
   }
   else
      return '';
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

function clrs_shuffled_seeds_to_url(clrs_shuffled_seeds){
   params = '';
   for (var i = 0; i < clrs_shuffled_seeds.length; i++){
      if(clrs_shuffled_seeds[i] != null){
         params+='seed_'+(i+1)+'='+clrs_shuffled_seeds[i]+'&';
      }
   }
   return params;
}

function setup_config_url_onclick() {
  document.getElementById('config_URL').addEventListener("click", function () {
     //var link_params = location.protocol + '//' + location.host + location.pathname + '?';
     var link_params = location.host + location.pathname + '?';
     link_params += get_diff_default_canvas('glob.scale');
     link_params += get_diff_default_canvas('glob.ctr[0]');
     link_params += get_diff_default_canvas('glob.ctr[1]');
     // fazer uma lista e usar map
     link_params += get_diff_default("a");
     link_params += get_diff_default("a_speed");
     link_params += get_diff_default("a_min");
     link_params += get_diff_default("a_max");
     link_params += get_diff_default("ell");
     link_params += get_diff_default("rot");
     link_params += get_diff_default("rmax");
     link_params += get_diff_default("bg");
     link_params += get_diff_default("locus_type_1");
     link_params += get_diff_default("Xn1");
     link_params += get_diff_default("mounting_Xn1");
     link_params += get_diff_default("draw_tri_1");
     link_params += get_diff_default("tri_type_1");
     link_params += get_diff_default("locus_type_2");
     link_params += get_diff_default("Xn2");
     link_params += get_diff_default("mounting_Xn2");
     link_params += get_diff_default("draw_tri_2");
     link_params += get_diff_default("tri_type_2");
     link_params += get_diff_default("locus_type_3");
     link_params += get_diff_default("Xn3");
     link_params += get_diff_default("mounting_Xn3");
     link_params += get_diff_default("draw_tri_3");
     link_params += get_diff_default("tri_type_3");
     link_params += get_diff_default("locus_type_4");
     link_params += get_diff_default("Xn4");
     link_params += get_diff_default("mounting_Xn4");
     link_params += get_diff_default("draw_tri_4");
     link_params += get_diff_default("tri_type_4");
     link_params += get_diff_default("animStep0");
     link_params += clrs_shuffled_seeds_to_url(glob.clrs_shuffled_seeds)

     link_params = link_params.slice(0,-1);
     copyToClipboard(link_params);
  });
}

function set_url_params(url_params) {
  let url_params_to_canvas = {
     sc: 'glob.scale',
     cx: 'glob.ctr[0]',
     cy: 'glob.ctr[1]'
  }
  let url_params_to_ui = {
     a: 'a', asp: 'a_speed', amn: 'a_min', amx: 'a_max', ell: 'ell',
     lc1: 'locus_type_1', lc2: 'locus_type_2', lc3: 'locus_type_3', lc4: 'locus_type_4',
     Xn1: 'Xn1', Xn2: 'Xn2', Xn3: 'Xn3', Xn4: 'Xn4',
     tr1: 'tri_type_1', tr2: 'tri_type_2', tr3: 'tri_type_3', tr4: 'tri_type_4',
     dr1: 'draw_tri_1', dr2: 'draw_tri_2', dr3: 'draw_tri_3', dr4: 'draw_tri_4',
     mt1: 'mounting_Xn1', mt2: 'mounting_Xn2', mt3: 'mounting_Xn3', mt4: 'mounting_Xn4',
     aS: 'animStep0', rot: 'rot', rmx : 'rmax', bg: 'bg'
  };
  let animStep0_to_ui = {
     slow: "0.125", medium: "0.500", fast: "1.000"
  }
  let a_speed_to_ui = {
     anim: "0.000", slow: "0.005", med: "0.010", fast: "0.050"
  }
  let url_params_to_canvas_keys = Object.keys(url_params_to_canvas)
  let url_params_to_ui_keys = Object.keys(url_params_to_ui)
  let link_keys = Object.keys(url_params);
  var ui_key;
  link_keys.forEach(function (key) {
     if (url_params_to_ui_keys.includes(key)){
        ui_key = url_params_to_ui[key];
        if(['a', 'Xn1', 'Xn2', 'Xn3', 'Xn4'].includes(ui_key)){
           glob.ui[ui_key] = +url_params[key];
        }
        else if(['ell','draw_tri_1', 'draw_tri_2', 'draw_tri_3', 'draw_tri_4'].includes(ui_key))
           glob.ui[ui_key] = (url_params[key] == 'true');
        else if(ui_key == 'animStep0'){
           key_value = url_params[key]
           glob.ui[ui_key] = (Object.keys(animStep0_to_ui).includes(key_value))?animStep0_to_ui[key_value]:animStep0_to_ui['slow'];
        }
        else if(ui_key == 'a_speed'){
           key_value = url_params[key]
           glob.ui[ui_key] = (Object.keys(a_speed_to_ui).includes(key_value))?a_speed_to_ui[key_value]:a_speed_to_ui['anim'];
        }
        else if(ui_key == 'bg'){
           glob.ui[ui_key] = hexToRgb('#'+url_params[key]);
        }
        else
           glob.ui[ui_key] = url_params[key];
     }
     if (url_params_to_canvas_keys.includes(key)){
         eval(url_params_to_canvas[key]+'='+url_params[key]);
     }
     else if(['seed_1', 'seed_2', 'seed_3', 'seed_4'].includes(key)){
         glob.clrs_shuffled_seeds[+(key.slice(-1))-1] = url_params[key];
     }
  });
  set_ui_variables(glob.ui);
  if(glob.ui.locus_type_4 !== 'none'){
     ui_changed("4", true, true);
  }
  if(glob.ui.locus_type_3 !== 'none'){
     ui_changed("3", true, true);
  }
  if(glob.ui.locus_type_2 !== 'none'){
     ui_changed("2", true, true);
  }
  if(glob.ui.locus_type_1 !== 'none'){
     ui_changed("1", true, true);
  } 
  [0,1,2,3].map(x=>create_locus_subpolys(x));
  redraw();
}

function setup_recenter_onclick(){
  document.getElementById('recenter').addEventListener('click', function(){
     recenter();
     glob.scale = glob.scale0;
     
     if(glob.ui.locus_type_4 != 'none') ui_changed('4', false)
     if(glob.ui.locus_type_3 != 'none') ui_changed('3', false)
     if(glob.ui.locus_type_2 != 'none') ui_changed('2', false)
     if(glob.ui.locus_type_1 != 'none') ui_changed('1', false)
     redraw();
  });
}


function setup_a_text_input(){
  var a_min = document.getElementById('a_min');
  var a_max = document.getElementById('a_max');
  a_min.addEventListener('focusout', function () {
     if (+this.value < 1.01)
        this.value = 1.01;
     else if (+this.value > +a_max.value)
        this.value = +a_max.value;
     glob.ui.a_min = this.value;
     ui_changed_type(true); 
     redraw();  
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
        glob.ui.a_min = this.value;
        ui_changed_type(true);
        redraw();
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
        glob.ui.a_min = this.value;
        ui_changed_type(true);
        redraw();
     }
  })
  a_max.addEventListener('focusout', function () {
     if (+this.value > 4.00)
        this.value = '4.00';
     else if (+this.value < +a_min.value)
        this.value = +a_min.value;
     glob.ui.a_max = this.value;
     ui_changed_type(true);
     redraw();
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
        glob.ui.a_max = this.value;
        ui_changed_type(true);
        redraw();
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
        glob.ui.a_max = this.value;
        ui_changed_type(true);
        redraw();
     }
  })
}


function setup_export_JSON_onclick(){
   document.getElementById('Export_JSON').addEventListener('click', function(){
      var canvas_ui = {'canvas_scale':glob.scale, 'cx':glob.ctr[0], 'cy':glob.ctr[1]}
      var ui_object = {...canvas_ui, ...glob.ui};
      if(glob.ui.locus_type_1 != 'none')
         ui_object = {...ui_object, ...{'locus1': trunc_locus_xy(glob.locus_branched[0],4)}};
      if(glob.ui.locus_type_2 != 'none')
         ui_object = {...ui_object, ...{'locus2': trunc_locus_xy(glob.locus_branched[1],4)}};
      if(glob.ui.locus_type_3 != 'none')
         ui_object = {...ui_object, ...{'locus3': trunc_locus_xy(glob.locus.branched[2],4)}};
      if(glob.ui.locus_type_4 != 'none')
         ui_object = {...ui_object, ...{'locus4': trunc_locus_xy(glob.locus_branched[3],4)}};
      exportToJsonFile(ui_object);
   })
}

function set_conic_type_ui(locus_type){
   var conic_type = document.getElementById('conic_type_'+ locus_type)
   switch(locus_type){
      case '1': 
         conic_type.innerHTML = (glob.ui.locus_type_1 == 'none')?"":glob.ell_detects[0];
         glob.ell_detects[0] = conic_type.innerHTML
         break;
      case '2': 
         conic_type.innerHTML = (glob.ui.locus_type_2 == 'none')?"":glob.ell_detects[1]; 
         glob.ell_detects[1] = conic_type.innerHTML
         break;
      case '3': 
         conic_type.innerHTML = (glob.ui.locus_type_3 == 'none')?"":glob.ell_detects[2]; 
         glob.ell_detects[2] = conic_type.innerHTML
         break;
      case '4': 
         conic_type.innerHTML = (glob.ui.locus_type_4 == 'none')?"":glob.ell_detects[3]; 
         glob.ell_detects[3] = conic_type.innerHTML
         break;
      default:
         document.getElementById('conic_type_1').innerHTML = "X";
         glob.ell_detects[0] = "X"
         document.getElementById('conic_type_2').innerHTML = "X";
         glob.ell_detects[1] = "X"
         document.getElementById('conic_type_3').innerHTML = "X";
         glob.ell_detects[2] = "X"
         document.getElementById('conic_type_4').innerHTML = "X";
         glob.ell_detects[3] = "X"
         break;
   }
}

function setup_tandem_bar(){
   loc = document.getElementById('tandem_loc');
   mnt = document.getElementById('tandem_mnt');
   xn = document.getElementById('tandem_xn');
   tri = document.getElementById('tandem_tri');
   
   loc.addEventListener('click', function(){
      glob.ui.tandem_loc = this.checked;
      if(glob.ui.tandem_loc){
         tandem_bar_variables('loc', glob.ui.locus_type_1);
         ui_changed_type(true);
         redraw();
      }
   })
   mnt.addEventListener('click', function(){
      glob.ui.tandem_mnt = this.checked;
      if(glob.ui.tandem_mnt){
         tandem_bar_variables('mnt', glob.ui.mounting_Xn1);
         ui_changed_type(true);
         redraw();
      }
   })
   xn.addEventListener('click', function(){
      glob.ui.tandem_xn = this.checked;
      if(glob.ui.tandem_xn){
         tandem_bar_variables('xn', glob.ui.Xn1);
         ui_changed_type(true);
         redraw();
      }
   })
   tri.addEventListener('click', function(){
      glob.ui.tandem_tri = this.checked;
      if(glob.ui.tandem_tri){
         tandem_bar_variables('tri', glob.ui.tri_type_1);
         ui_changed_type(false);
         redraw();
      }
   })
}

function hexToRgb(hex) {
   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}

function setup_bg_onchange(){
   var bg_dropbox = document.getElementById('bg');
   bg_dropbox.addEventListener('input', function(){
      glob.ui.bg = hexToRgb(this.value);
      redraw();
   })
}

function setup_rot_onchange(){
   var rot_dropbox = document.getElementById('rot');
   rot_dropbox.addEventListener('input', function(){
      glob.ui.rot = this.value;
      redraw();
   })
}

function setup_rmax_onchange(){
   var rmax_dropbox = document.getElementById('rmax');
   rmax_dropbox.addEventListener('input', function(){
      glob.ui.rmax = this.value;
      ui_changed_type(true);
      redraw();
   })
}

function setup_pallete_onclick(){
   ['1','2','3','4'].map(x=>document.getElementById('pallete_'+x).addEventListener('click', function(){
      if(eval('glob.ui.locus_type_'+x) != 'none')  clicked_on_palette_button((+x)-1)
      redraw();
   }));
}

function setup_ui() {
  setup_ui_variables_behavior();
  setup_copy_image();
  setup_export_PNG();
  setup_play_controls();
  setup_locus_type_onchange();
  setup_tri_onchange();
  setup_a_speed_onchange();
  setup_tri_type_onchange();
  setup_a_text_input();
  setup_ell_onchange();
  setup_export_JSON_onclick();
  ["1","2","3","4"].map(set_conic_type_ui);
  ["1","2","3","4"].map(setup_bbox_onclick);
  setup_recenter_onclick();
  setup_tandem_bar();
  setup_bg_onchange();
  setup_rot_onchange();
  setup_rmax_onchange();
  setup_pallete_onclick();
  setup_reset_UI_onclick();
  setup_config_url_onclick();
  ui_changed("1", true, true);
  redraw();
}

function reset_ui() {
   glob.ui = JSON.parse(JSON.stringify(glob.ui0));
   glob.ctr = JSON.parse(JSON.stringify(glob.ctr0));
   set_ui_variables()
};