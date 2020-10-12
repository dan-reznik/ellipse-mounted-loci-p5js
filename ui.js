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
   return '#' + red + green + blue;
};

function set_ui_variables() {
   var variables_change_value = ['a', 'a_speed', 'a_min', 'a_max', 'a_input_text'
      , 'locus_type_1', 'locus_type_2', 'locus_type_3', 'locus_type_4', 'Xn1', 'demo_Xn1', 'Xn2'
      , 'demo_Xn2', 'Xn3', 'demo_Xn3', 'Xn4', 'demo_Xn4', 'Pn1', 'Pn2', 'Pn3', 'Pn4', 'demo_Pn1', 'demo_Pn2', 'demo_Pn3', 'demo_Pn4',
      , 'tri_type_1', 'tri_type_2', 'tri_type_3', 'tri_type_4', 'mounting_Xn1', 'mounting_Xn2'
      , 'mounting_Xn3', 'mounting_Xn4', 'animStep0', 'rot', 'rmax', 'bg', 'clr1', 'clr2', 'clr3', 'clr4'
      , 'jukebox_playlist', 'clr_fill_border', 'fill_alpha', 'circ1', 'circ2', 'circ3', 'circ4']

   var variables_change_checked = ['ell', 'draw_tri_1', 'draw_tri_2', 'draw_tri_3', 'draw_tri_4'
      , 'tandem_loc', 'tandem_mnt', 'tandem_xn', 'tandem_tri', 'tandem_pn', 'inv1', 'inv2', 'inv3', 'inv4']
   var from_to = {
      a_input_text: 'a', demo_Xn1: 'Xn1', demo_Xn2: 'Xn2', demo_Xn3: 'Xn3', demo_Xn4: 'Xn4'
      , demo_Pn1: 'Pn1', demo_Pn2: 'Pn2', demo_Pn3: 'Pn3', demo_Pn4: 'Pn4'
   }

   variables_change_value.map(function (x) {
      var y = x;
      if (['a_input_text', 'demo_Xn1', 'demo_Xn2', 'demo_Xn3', 'demo_Xn4'
         , 'demo_Pn1', 'demo_Pn2', 'demo_Pn3', 'demo_Pn4'].includes(x)) { y = from_to[x]; }
      if (['bg', 'clr_fill_border'].includes(x)) document.getElementById(x).value = rgbToHex(glob.ui[y]);
      else if (['clr1', 'clr2', 'clr3', 'clr4'].includes(x)) change_loc_clr(+x.slice(-1), rgbToHex(glob.ui[y]))
      else if(['Pn1', 'Pn2', 'Pn3', 'Pn4'].includes(x)) void(0);
      else if(x == 'jukebox_playlist'){
         if(glob.jsonIsReady)
            document.getElementById(x).value = glob.ui[y];
      }
      else{
         if (x.slice(0, 4) == 'demo'){
            var demo_elem = document.getElementById(x);
            if (x.slice(5, 6) == glob.slider_focus) {
               demo_elem.value = glob.ui[y];
            }
            else
               demo_elem.value = glob.ui[y];
            if(x.slice(0,6) == 'demo_P'){
               var demo_elem = document.getElementById(x);
               change_clr_tri_txt(glob.ui['tri_type_'+x.slice(-1)], demo_elem)
            }
         }
         document.getElementById(x).value = glob.ui[y];
         if(['locus_type_1', 'locus_type_2', 'locus_type_3', 'locus_type_4'].includes(x)){
            var loc = document.getElementById(x)
            var demo = document.getElementById('demo_Xn'+x.slice(-1))
            change_clr_locus_txt(loc, demo);
         }
      }
   });
   variables_change_checked.map(function (element) { document.getElementById(element).checked = glob.ui[element] })
}

function tandem_bar_variables(variable, global_var) {
   if (glob.ui.tandem_loc == true && variable == 'loc') { [glob.ui.locus_type_1, glob.ui.locus_type_2, glob.ui.locus_type_3, glob.ui.locus_type_4] = [global_var, global_var, global_var, global_var] }
   if (glob.ui.tandem_mnt == true && variable == 'mnt') { [glob.ui.mounting_Xn1, glob.ui.mounting_Xn2, glob.ui.mounting_Xn3, glob.ui.mounting_Xn4] = [global_var, global_var, global_var, global_var] }
   if (glob.ui.tandem_xn == true && variable == 'xn') { [glob.ui.Xn1, glob.ui.Xn2, glob.ui.Xn3, glob.ui.Xn4] = [global_var, global_var, global_var, global_var] }
   if (glob.ui.tandem_tri == true && variable == 'tri') { [glob.ui.tri_type_1, glob.ui.tri_type_2, glob.ui.tri_type_3, glob.ui.tri_type_4] = [global_var, global_var, global_var, global_var] }
   if (glob.ui.tandem_pn == true && variable == 'pn') { [glob.ui.Pn1, glob.ui.Pn2, glob.ui.Pn3, glob.ui.Pn4] = [global_var, global_var, global_var, global_var] }


   set_ui_variables(glob.ui);
}

function ui_changed(locus_type_changed, call_create_locus = true, init = false) {
   if (call_create_locus) create_locus(locus_type_changed, init);
}

function setup_conic_type_onchange(locus_type) {
   var conic_type = document.getElementById('conic_type_' + locus_type)
   switch (locus_type) {
      case '1':
         conic_type.innerHTML = (glob.ui.locus_type_1 == 'none') ? "" : glob.ell_detects[0];
         glob.ell_detects[0] = conic_type.innerHTML;
         break;
      case '2':
         conic_type.innerHTML = (glob.ui.locus_type_2 == 'none') ? "" : glob.ell_detects[1];
         glob.ell_detects[1] = conic_type.innerHTML;
         break;
      case '3':
         conic_type.innerHTML = (glob.ui.locus_type_3 == 'none') ? "" : glob.ell_detects[2];
         glob.ell_detects[2] = conic_type.innerHTML;
         break;
      case '4':
         conic_type.innerHTML = (glob.ui.locus_type_4 == 'none') ? "" : glob.ell_detects[3];
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

function ui_changed_type(call_create_locus = false) {
   if (glob.ui.locus_type_1 != 'none') {
      ui_changed('1', call_create_locus);
      setup_conic_type_onchange('1')
   }
   if (glob.ui.locus_type_2 != 'none') {
      ui_changed('2', call_create_locus);
      setup_conic_type_onchange('2')
   }
   if (glob.ui.locus_type_3 != 'none') {
      ui_changed('3', call_create_locus);
      setup_conic_type_onchange('3')
   }
   if (glob.ui.locus_type_4 != 'none') {
      ui_changed('4', call_create_locus);
      setup_conic_type_onchange('4')
   }
}

function a_anim() {
   a_slider = document.getElementById('a')
   a_text = document.getElementById('a_input_text')
   glob.ui.a_speed = +glob.ui.a_speed;
   glob.ui.a = +glob.ui.a;
   glob.ui.a_max = +glob.ui.a_max;
   glob.ui.a_min = +glob.ui.a_min;
   if (glob.ui.a_speed != 0.000) {
      if (glob.ui.a_speed > 0)
         if (glob.ui.a_max - glob.ui.a <= glob.ui.a_speed) {
            glob.ui.a = glob.ui.a_max;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            glob.ui.a_speed = -glob.ui.a_speed;
            ui_changed_type(true)
            redraw();
         }
         else {
            glob.ui.a += glob.ui.a_speed;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            ui_changed_type(true)
            redraw();
         }
      else
         if (glob.ui.a + glob.ui.a_speed <= glob.ui.a_min) {
            glob.ui.a = glob.ui.a_min;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            glob.ui.a_speed = -glob.ui.a_speed;
            ui_changed_type(true)
            redraw();
         }
         else {
            glob.ui.a += glob.ui.a_speed;
            a_slider.value = glob.ui.a;
            a_text.value = a_slider.value;
            ui_changed_type(true)
            redraw();
         }
   }
}

function a_oninput(sliderID, input_text_ID) {
   var slider = document.getElementById(sliderID);
   var text = document.getElementById(input_text_ID);
   slider.value = glob.ui[sliderID];
   slider.addEventListener('input', function () {
      glob.ui[sliderID] = this.value;
      if (glob.ui.locus_type_1 != 'none') set_conic_type_ui("1");
      if (glob.ui.locus_type_2 != 'none') set_conic_type_ui("2");
      if (glob.ui.locus_type_3 != 'none') set_conic_type_ui("3");
      if (glob.ui.locus_type_4 != 'none') set_conic_type_ui("4");
      text.value = this.value;
      ui_changed('0', true)
      redraw();
   });
   text.addEventListener("input", function () {
      if (this.value !== '') {
         if (this.value > 10)
            this.value = "10";
      }
   })
   text.addEventListener('keydown', function (e) {
      if (e.keyCode == 9) {
         if (this.value == '')
            this.value = '1.618';
         glob.ui[sliderID] = this.value;
         slider.value = this.value;
         ui_changed('0', true);
         redraw();
         if (glob.ui.locus_type_1 != 'none') set_conic_type_ui("1");
         if (glob.ui.locus_type_2 != 'none') set_conic_type_ui("2");
         if (glob.ui.locus_type_3 != 'none') set_conic_type_ui("3");
         if (glob.ui.locus_type_4 != 'none') set_conic_type_ui("4");
         e.preventDefault();
         slider.focus();
      }
   })
   text.addEventListener('keypress', function (e) {
      if (e.keyCode == 32) e.stopPropagation();
      if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46)
         e.preventDefault();
      if (e.keyCode == 46 && this.value.includes('.'))
         e.preventDefault();
      if (e.keyCode == 13) {
         if (this.value < 1.001)
            this.value = "1.001";
         else if (this.value == '')
            this.value = '1.618';
         glob.ui[sliderID] = this.value;
         slider.value = this.value;
         ui_changed('0', true);
         redraw();
         if (glob.ui.locus_type_1 != 'none') set_conic_type_ui("1");
         if (glob.ui.locus_type_2 != 'none') set_conic_type_ui("2");
         if (glob.ui.locus_type_3 != 'none') set_conic_type_ui("3");
         if (glob.ui.locus_type_4 != 'none') set_conic_type_ui("4");
         slider.focus();
      }
   })
}

function mounting_ui_element(input_ID, ell_detect = "0") {
   var selector = document.getElementById(input_ID);
   selector.value = glob.ui[input_ID];
   selector.addEventListener('change', function () {
      glob.ui[input_ID] = selector.value
      tandem_bar_variables('mnt', eval('glob.ui.' + input_ID));
      glob.ui.tandem_mnt ? ui_changed_type(true) : ui_changed(ell_detect, true);
      redraw();
      glob.ui.tandem_mnt ? ['1', '2', '3', '4'].map(set_conic_type_ui) : set_conic_type_ui(ell_detect);
   })
}

function animStep0_ui_element(animStep0_ID) {
   var animStep0 = document.getElementById(animStep0_ID);
   animStep0.value = glob.ui[animStep0_ID];
   animStep0.addEventListener('change', function () {
      glob.ui[animStep0_ID] = animStep0.value
      ui_changed_type(false);
      redraw();
   })
}

function slider_text_changed(sliderId, textId, minus_id, plus_id, ell_detect, glob_variable) {
   var slider = document.getElementById(sliderId);
   var text = document.getElementById(textId);

   document.getElementById(minus_id).addEventListener("click", function () {
      if (glob.ui[glob_variable] > 1) {
         glob.ui[glob_variable]--;
         text.value--;
         slider.value = text.value;
         if (glob_variable[0] == 'X'){
            tandem_bar_variables('xn', eval('glob.ui.' + glob_variable));
            glob.ui.tandem_xn ? ui_changed_type(true) : ui_changed(ell_detect, true);
         }
         if (glob_variable[0] == 'P'){
            tandem_bar_variables('pn', eval('glob.ui.' + glob_variable));
            glob.ui.tandem_pn ? ui_changed_type(true) : ui_changed(ell_detect, true);
         }
         redraw();
         glob.slider_focus = glob_variable[0];
         if (glob.slider_focus == 'X')
            glob.ui.tandem_xn ? ['1', '2', '3', '4'].map(set_conic_type_ui) : set_conic_type_ui(ell_detect);
         slider.focus();
      }
   });

   document.getElementById(plus_id).addEventListener("click", function () {
      if (glob.ui[glob_variable] < 1000) {
         glob.ui[glob_variable]++;
         text.value++;
         slider.value = text.value;
         if (glob_variable[0] == 'X'){
            tandem_bar_variables('xn', eval('glob.ui.' + glob_variable));
            glob.ui.tandem_xn ? ui_changed_type(true) : ui_changed(ell_detect, true);
         }
         if (glob_variable[0] == 'P'){
            tandem_bar_variables('pn', eval('glob.ui.' + glob_variable));
            glob.ui.tandem_pn ? ui_changed_type(true) : ui_changed(ell_detect, true);
         }
         redraw();
         glob.slider_focus = glob_variable[0];
         if (glob_variable[0] == 'X')
            glob.ui.tandem_xn ? ['1', '2', '3', '4'].map(set_conic_type_ui) : set_conic_type_ui(ell_detect);
         slider.focus();
      }
   });

   slider.addEventListener("input", function () {
      if (glob.slider_focus == 'X')
         glob.ui['Xn' + ell_detect] = this.value;
      else if (glob.slider_focus == 'P')
         glob.ui['Pn' + ell_detect] = this.value;
      if (glob_variable[0] == 'X'){
         tandem_bar_variables('xn', eval('glob.ui.' + glob_variable));
         glob.ui.tandem_xn ? ui_changed_type(true) : ui_changed(ell_detect, true);
      }
      if (glob_variable[0] == 'P'){
         tandem_bar_variables('pn', eval('glob.ui.' + glob_variable));
         glob.ui.tandem_pn ? ui_changed_type(true) : ui_changed(ell_detect, true);
      }
      redraw();
      if (glob.slider_focus == 'X')
         glob.ui.tandem_xn ? ['1', '2', '3', '4'].map(set_conic_type_ui) : set_conic_type_ui(ell_detect);
   });

   text.addEventListener("input", function () {
      if (this.value !== '') {
         if (this.value > 1000)
            this.value = "1000";
         else if (this.value < 1)
            this.value = "1";
      }
   })
   text.addEventListener('keydown', function (e) {
      if (e.keyCode == 9) {
         if (this.value == '')
            this.value = '1';
         glob.ui[glob_variable] = this.value;
         slider.value = this.value;
         if (glob_variable[0] == 'X'){
            tandem_bar_variables('xn', eval('glob.ui.' + glob_variable));
            glob.ui.tandem_xn ? ui_changed_type(true) : ui_changed(ell_detect, true);
         }
         if (glob_variable[0] == 'P'){
            tandem_bar_variables('pn', eval('glob.ui.' + glob_variable));
            glob.ui.tandem_pn ? ui_changed_type(true) : ui_changed(ell_detect, true);
         }
         redraw();
         e.preventDefault();
         glob.slider_focus = glob_variable[0];
         if (glob_variable[0] == 'X')
            glob.ui.tandem_xn ? ['1', '2', '3', '4'].map(set_conic_type_ui) : set_conic_type_ui(ell_detect);
         slider.focus();
      }
   })
   text.addEventListener('keypress', function (e) {
      if (e.keyCode == 32) e.stopPropagation();
      if (e.keyCode < 48 || e.keyCode > 57)
         e.preventDefault();
      if (e.keyCode == 13) {
         if (this.value == '')
            this.value = '1';
         glob.ui[glob_variable] = this.value;
         slider.value = this.value;
         if (glob_variable[0] == 'X'){
            tandem_bar_variables('xn', eval('glob.ui.' + glob_variable));
            glob.ui.tandem_xn ? ui_changed_type(true) : ui_changed(ell_detect, true);
         }  
         if (glob_variable[0] == 'P'){
            tandem_bar_variables('pn', eval('glob.ui.' + glob_variable));
            glob.ui.tandem_pn ? ui_changed_type(true) : ui_changed(ell_detect, true);
         }
         redraw();
         glob.slider_focus = glob_variable[0];
         if (glob_variable[0] == 'X')
            glob.ui.tandem_xn ? ['1', '2', '3', '4'].map(set_conic_type_ui) : set_conic_type_ui(ell_detect);
         slider.focus();
      }
   })
}

function setup_ui_variables_behavior() {
   //a
   a_oninput("a", "a_input_text", '0')
   //Xn1
   slider_text_changed("Xn1", "demo_Xn1", "minus_Xn1", "plus_Xn1", "1", 'Xn1');
   //Xn2
   slider_text_changed("Xn2", "demo_Xn2", "minus_Xn2", "plus_Xn2", "2", 'Xn2');
   //Xn3
   slider_text_changed("Xn3", "demo_Xn3", "minus_Xn3", "plus_Xn3", "3", 'Xn3');
   //Xn4
   slider_text_changed("Xn4", "demo_Xn4", "minus_Xn4", "plus_Xn4", "4", 'Xn4');

   //Pn1
   slider_text_changed("Xn1", "demo_Pn1", "minus_Pn1", "plus_Pn1", "1", 'Pn1');
   //Pn2
   slider_text_changed("Xn2", "demo_Pn2", "minus_Pn2", "plus_Pn2", "2", 'Pn2');
   //Pn3
   slider_text_changed("Xn3", "demo_Pn3", "minus_Pn3", "plus_Pn3", "3", 'Pn3');
   //Pn4
   slider_text_changed("Xn4", "demo_Pn4", "minus_Pn4", "plus_Pn4", "4", 'Pn4');

   //animStep0
   animStep0_ui_element("animStep0")

   //mounting
   mounting_ui_element("mounting_Xn1", "1")
   mounting_ui_element("mounting_Xn2", "2")
   mounting_ui_element("mounting_Xn3", "3")
   mounting_ui_element("mounting_Xn4", "4")
}

function setup_reset_UI_onclick() {
   document.getElementById('reset_UI').addEventListener('click', function () {
      reset_ui();
      //stop current jukebox loop
      window.clearInterval(glob.jukebox_id)
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
      } else {
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
      } else {
         glob.tDeg += (+glob.ui.animStep0);
         redraw();
      }
   });

   play_button.addEventListener('keydown', function (e) {
      if (play_button.isPlaying) {
         if (e.keyCode == 39) {
            glob.loop_ccw = true
            play_button.isPlaying = true;
            play_button.className = stop_class;
            loop();
            glob.loop = true;
         }
         else if (e.keyCode == 37) {
            glob.loop_ccw = false
            play_button.isPlaying = true;
            play_button.className = stop_class;
            loop();
            glob.loop = true;
         }
      } else {
         if (e.keyCode == 39) {
            glob.tDeg += (+glob.ui.animStep0);
            redraw();
         }
         else if (e.keyCode == 37) {
            glob.tDeg -= (+glob.ui.animStep0);
            redraw();
         }
      }
   })
   backward_button.addEventListener('keydown', function (e) {
      if (play_button.isPlaying) {
         if (e.keyCode == 39) {
            glob.loop_ccw = true
            play_button.isPlaying = true;
            play_button.className = stop_class;
            loop();
            glob.loop = true;
         }
         else if (e.keyCode == 37) {
            glob.loop_ccw = false
            play_button.isPlaying = true;
            play_button.className = stop_class;
            loop();
            glob.loop = true;
         }
      } else {
         if (e.keyCode == 39) {
            glob.tDeg += (+glob.ui.animStep0);
            redraw();
         }
         else if (e.keyCode == 37) {
            glob.tDeg -= (+glob.ui.animStep0);
            redraw();
         }
      }
   })
   forward_button.addEventListener('keydown', function (e) {
      if (play_button.isPlaying) {
         if (e.keyCode == 39) {
            glob.loop_ccw = true
            play_button.isPlaying = true;
            play_button.className = stop_class;
            loop();
            glob.loop = true;
         }
         else if (e.keyCode == 37) {
            glob.loop_ccw = false
            play_button.isPlaying = true;
            play_button.className = stop_class;
            loop();
            glob.loop = true;
         }
      } else {
         if (e.keyCode == 39) {
            glob.tDeg += (+glob.ui.animStep0);
            redraw();
         }
         else if (e.keyCode == 37) {
            glob.tDeg -= (+glob.ui.animStep0);
            redraw();
         }
      }
   })
}

function setup_tri_onchange() {
   for (let draw_tri_number = 1; draw_tri_number < 5; draw_tri_number++){
      document.getElementById('draw_tri_'+draw_tri_number).addEventListener("click", function () {
         glob.ui['draw_tri_'+draw_tri_number] = this.checked;
         ui_changed_type(false);
         redraw();
     });
   }
}

function setup_ell_onchange() {
   document.getElementById('ell').addEventListener("click", function () {
      glob.ui.ell = this.checked;
      ui_changed_type(false);
      redraw()
   })
}

function setup_a_speed_onchange() {
   document.getElementById('a_speed').addEventListener("change", function () {
      glob.ui.a_speed = this.value;
      if (glob.ui.a_speed != 0.000) {
         glob.ui.a = +glob.ui.a_min;
         a_slider.value = glob.ui.a;
         a_text.innerHTML = a_slider.value;
         if (glob.ui.locus_type_1 != 'none') ui_changed('1', true);
         if (glob.ui.locus_type_2 != 'none') ui_changed('2', true);
         if (glob.ui.locus_type_3 != 'none') ui_changed('3', true);
         if (glob.ui.locus_type_4 != 'none') ui_changed('4', true);
         redraw();
      }
   })
}

function change_clr_locus_txt(loc, demo){
   if(loc.value == 'trilins')
      demo.style.color = 'black'
   else
      demo.style.color = 'gray'
}

function setup_locus_type_onchange() {
   for (let loc_number = 1; loc_number < 5; loc_number++){
      var loc_Xn = document.getElementById("locus_type_"+loc_number);
      var demo_Xn = document.getElementById("demo_Xn"+loc_number);
      loc_Xn.addEventListener("change", function () {
         glob.ui['locus_type_'+loc_number] = this.value;
         tandem_bar_variables('loc', glob.ui['locus_type_'+loc_number]);
         glob.ui.tandem_loc ? ui_changed_type(true) : ui_changed(loc_number, true);
         redraw();
         glob.ui.tandem_loc ? ['1', '2', '3', '4'].map(set_conic_type_ui) : set_conic_type_ui(loc_number);
         change_clr_locus_txt(loc_Xn, demo_Xn);
      });
   };
}

function change_clr_tri_txt(tri_type_element_value, demo_element){
   if (tri_type_element_value.slice(0, 2) == 'p_') {
      demo_element.style.color = 'black';
   }
   else {
      demo_element.style.color = 'gray';
   }
}

function setup_tri_type_onchange() {
   for (let tri_type_number = 1; tri_type_number < 5; tri_type_number++){
      document.getElementById(`tri_type_${tri_type_number}`).addEventListener("change", function () {
         var demo = document.getElementById('demo_Pn'+tri_type_number);
         
         change_clr_tri_txt(this.value, demo)
         
         glob.ui['tri_type_'+tri_type_number] = this.value;
         tandem_bar_variables('tri', glob.ui['tri_type_'+tri_type_number]);
         glob.ui.tandem_tri ? ui_changed_type(true) : ui_changed(tri_type_number, true);
         redraw();
         glob.ui.tandem_tri ? ['1', '2', '3', '4'].map(set_conic_type_ui) : set_conic_type_ui(tri_type_number);
      })
   }      
};

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

function setup_config_url_onclick() {
   document.getElementById('config_URL').addEventListener("click", function () {
      var link_params = get_link_params()

      copyToClipboard(link_params);
   });
}

function setup_recenter_onclick() {
   document.getElementById('recenter').addEventListener('click', function () {
      recenter();
      glob.scale = glob.scale0;

      if (glob.ui.locus_type_4 != 'none') ui_changed('4', false)
      if (glob.ui.locus_type_3 != 'none') ui_changed('3', false)
      if (glob.ui.locus_type_2 != 'none') ui_changed('2', false)
      if (glob.ui.locus_type_1 != 'none') ui_changed('1', false)
      redraw();
   });
}


function setup_a_text_input() {
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
      if (e.keyCode == 9) {
         if (this.value == '')
            this.value = 1.01;
         else {
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
      if (e.keyCode == 32) e.stopPropagation();
      if (this.value.length > 3)
         e.preventDefault();
      if (this.value.includes('.')) {
         if (e.keyCode < 48 || e.keyCode > 57)
            e.preventDefault();
      }
      else {
         if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46)
            e.preventDefault();
      }
      if (e.keyCode == 13) {
         if (this.value == '')
            this.value = 1.01;
         else {
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
      if (e.keyCode == 9) {
         if (this.value == '')
            this.value = '4.00';
         else {
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
      if (e.keyCode == 32) e.stopPropagation();
      if (this.value.length > 3)
         e.preventDefault();
      if (this.value.includes('.')) {
         if (e.keyCode < 48 || e.keyCode > 57)
            e.preventDefault();
      }
      else {
         if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46)
            e.preventDefault();
      }
      if (e.keyCode == 13) {
         if (this.value == '')
            this.value = '4.00';
         else {
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


function setup_export_JSON_onclick() {
   document.getElementById('Export_JSON').addEventListener('click', function () {
      var canvas_ui = { 'canvas_scale': glob.scale, 'cx': glob.ctr[0], 'cy': glob.ctr[1] }
      var config_url = get_link_params();
      var ui_object = { config_url, ...canvas_ui, ...glob.ui };
      if (glob.ui.locus_type_1 != 'none')
         ui_object = { ...ui_object, ...{ 'locus1': trunc_locus_xy(glob.locus_branched[0], 4) } };
      if (glob.ui.locus_type_2 != 'none')
         ui_object = { ...ui_object, ...{ 'locus2': trunc_locus_xy(glob.locus_branched[1], 4) } };
      if (glob.ui.locus_type_3 != 'none')
         ui_object = { ...ui_object, ...{ 'locus3': trunc_locus_xy(glob.locus.branched[2], 4) } };
      if (glob.ui.locus_type_4 != 'none')
         ui_object = { ...ui_object, ...{ 'locus4': trunc_locus_xy(glob.locus_branched[3], 4) } };
      exportToJsonFile(ui_object);
   })
}

function set_conic_type_ui(locus_type) {
   locus_type = locus_type.toString();
   var conic_type = document.getElementById('conic_type_' + locus_type)
   switch (locus_type) {
      case '1':
         conic_type.innerHTML = (glob.ui.locus_type_1 == 'none') ? "" : glob.ell_detects[0];
         glob.ell_detects[0] = conic_type.innerHTML
         break;
      case '2':
         conic_type.innerHTML = (glob.ui.locus_type_2 == 'none') ? "" : glob.ell_detects[1];
         glob.ell_detects[1] = conic_type.innerHTML
         break;
      case '3':
         conic_type.innerHTML = (glob.ui.locus_type_3 == 'none') ? "" : glob.ell_detects[2];
         glob.ell_detects[2] = conic_type.innerHTML
         break;
      case '4':
         conic_type.innerHTML = (glob.ui.locus_type_4 == 'none') ? "" : glob.ell_detects[3];
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

function setup_tandem_bar() {
   loc = document.getElementById('tandem_loc');
   mnt = document.getElementById('tandem_mnt');
   xn = document.getElementById('tandem_xn');
   tri = document.getElementById('tandem_tri');
   pn = document.getElementById('tandem_pn');

   loc.addEventListener('click', function () {
      glob.ui.tandem_loc = this.checked;
      if (glob.ui.tandem_loc) {
         tandem_bar_variables('loc', glob.ui.locus_type_1);
         ui_changed_type(true);
         redraw();
      }
   })
   mnt.addEventListener('click', function () {
      glob.ui.tandem_mnt = this.checked;
      if (glob.ui.tandem_mnt) {
         tandem_bar_variables('mnt', glob.ui.mounting_Xn1);
         ui_changed_type(true);
         redraw();
      }
   })
   xn.addEventListener('click', function () {
      glob.ui.tandem_xn = this.checked;
      if (glob.ui.tandem_xn) {
         tandem_bar_variables('xn', glob.ui.Xn1);
         ui_changed_type(true);
         redraw();
      }
   })
   pn.addEventListener('click', function () {
      glob.ui.tandem_pn = this.checked;
      if (glob.ui.tandem_pn) {
         tandem_bar_variables('pn', glob.ui.Pn1);
         ui_changed_type(true);
         redraw();
      }
   })
   tri.addEventListener('click', function () {
      glob.ui.tandem_tri = this.checked;
      if (glob.ui.tandem_tri) {
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

function setup_bg_onchange() {
   var bg_dropbox = document.getElementById('bg');
   bg_dropbox.addEventListener('input', function () {
      glob.ui.bg = hexToRgb(this.value);
      redraw();
   })
}

function change_loc_elements_clr(n, hex_clr) {
   var style = document.querySelector('[data="Xn' + n + '"]');
   style.innerHTML = "#Xn" + n + "::-webkit-slider-thumb {background: " + hex_clr + ";}";
}

function change_loc_clr(n, hex_clr) {
   var loc_clr = document.getElementById('clr' + n + '')
   loc_clr.value = hex_clr;
   change_loc_elements_clr(n, hex_clr);
}

function setup_loc_clr_onchange() {
   ['1', '2', '3', '4'].map(x => document.getElementById('clr' + x).addEventListener('input', function () {
      change_loc_elements_clr(x, this.value);
      glob.ui['clr' + x] = hexToRgb(this.value)
      ui_changed(x);
   })
   )
}

function setup_rot_onchange() {
   var rot_dropbox = document.getElementById('rot');
   rot_dropbox.addEventListener('input', function () {
      glob.ui.rot = this.value;
      redraw();
   })
}

function setup_rmax_onchange() {
   var rmax_dropbox = document.getElementById('rmax');
   rmax_dropbox.addEventListener('input', function () {
      glob.ui.rmax = this.value;
      ui_changed_type(true);
      redraw();
   })
}

function setup_pallete_onclick() {
   ['1', '2', '3', '4'].map(x => document.getElementById('pallete_' + x).addEventListener('click', function () {
      if (eval('glob.ui.locus_type_' + x) != 'none') {
         clicked_on_palette_button((+x) - 1)
         redraw();
      }
   }));

   ['1', '2', '3', '4'].map(x => document.getElementById('pallete_' + x).addEventListener('keydown', function (e) {
      //if e.keycode equals to lef-arrow(37) or right-arrow(39)
      if([37,39].includes(e.keyCode)){
         if (eval('glob.ui.locus_type_' + x) != 'none') {
            clicked_on_palette_button((+x) - 1, e.keyCode==39)
            redraw();
         }
      } 
   }));

   ['1', '2', '3', '4'].map(x => document.getElementById('pallete_' + x).addEventListener('contextmenu', function (ev) {
      ev.preventDefault();
      ui_changed(x, true);
      redraw();
      return false;
   }, false)
   );
}


function getAllUrlParams(url) {
   // get query string from url (optional) or window
   var queryString = url;
   // ? url.split('?')[1] : window.location.search.slice(1);

   // we'll store the parameters here
   var obj = {};

   // if query string exists
   if (queryString) {

      // stuff after # is not part of query string, so get rid of it
      queryString = queryString.split('#')[0];

      // split our query string into its component parts
      var arr = queryString.split('&');

      for (var i = 0; i < arr.length; i++) {
         // separate the keys and the values
         var a = arr[i].split('=');

         // set parameter name and value (use 'true' if empty)
         var paramName = a[0];
         var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

         // (optional) keep case consistent
         paramName = paramName;
         if (typeof paramValue === 'string') paramValue = paramValue;

         // if the paramName ends with square brackets, e.g. colors[] or colors[2]
         if (paramName.match(/\[(\d+)?\]$/)) {

            // create key if it doesn't exist
            var key = paramName.replace(/\[(\d+)?\]/, '');
            if (!obj[key]) obj[key] = [];

            // if it's an indexed array e.g. colors[2]
            if (paramName.match(/\[\d+\]$/)) {
               // get the index value and add the entry at the appropriate position
               var index = /\[(\d+)\]/.exec(paramName)[1];
               obj[key][index] = paramValue;
            } else {
               // otherwise add the value to the end of the array
               obj[key].push(paramValue);
            }
         } else {
            // we're dealing with a string
            if (!obj[paramName]) {
               // if it doesn't exist, create property
               obj[paramName] = paramValue;
            } else if (obj[paramName] && typeof obj[paramName] === 'string') {
               // if property does exist and it's a string, convert it to an array
               obj[paramName] = [obj[paramName]];
               obj[paramName].push(paramValue);
            } else {
               // otherwise add the property
               obj[paramName].push(paramValue);
            }
         }
      }
   }

   return obj;
}

function run_jukebox_playlist(run, playlist, list_indice) {
   let params;
   const aux = glob.ui.jukebox_playlist;
   if (run) {
      reset_ui();
      glob.ui.jukebox_playlist = aux;
      params = getAllUrlParams(playlist['config'][list_indice]);
      set_url_params(params);
      ui_changed_type(true);
      redraw();
   }
}

function start_playlist(playlist, start_time, output_text_jukebox, control_params) {
   var seconds_interval = +playlist['sec'][glob.jukebox_image_index];
   var seconds_runned = Math.floor(((Date.now() - start_time)) / 1000);
   
   let run = (seconds_runned == control_params.seconds_next_run);
   if(glob.jukeboxClicked == 1){
      run = true;
   }
   else if(glob.jukeboxClicked == -1){
      run = true;
      control_params.list_index = control_params.list_index - 2;
      glob.jukebox_image_index = control_params.list_index % playlist['sec'].length;
      seconds_interval = +playlist['sec'][glob.jukebox_image_index];
   }

   if(run){
      glob.jukebox_image_index = control_params.list_index % playlist['sec'].length;
      control_params.seconds_next_run = seconds_runned + seconds_interval;
      control_params.list_index++;
   }
   if(glob.jukebox_playlist != 'off'){
      glob.jukebox_countdown = control_params.seconds_next_run - seconds_runned;
      output_text_jukebox.innerHTML = (+glob.jukebox_image_index + 1) + '/' + playlist['sec'].length + ` (${glob.jukebox_countdown}s)`;
   }

   run_jukebox_playlist(run, playlist, glob.jukebox_image_index);
   glob.jukeboxClicked = 0
}

function wait1secJsonReady(){
   var delay=1000; //1 seconds
   setTimeout(function(){
      glob.jsonIsReady = true;
   },delay);}

function waitForJson() {
   var delay=200; //0.2 seconds
   if (glob.jsonIsReady) {
      //dispatch input event, jukebox start's a loop depending on url.
      document.getElementById('jukebox_playlist').value = glob.ui.jukebox_playlist;
      document.getElementById('jukebox_playlist').dispatchEvent(new Event('input', { value: glob.ui.jukebox_playlist }));
   } else{
      setTimeout(waitForJson,delay);
   }
}
function gsheetToJson ({
   id,
   sheetNumber = 1,
   query = '',
   useIntegers = true,
   showRows = true,
   showColumns = true,
   last = false
 }) {
   const url = `https://spreadsheets.google.com/feeds/list/${id}/${sheetNumber}/public/values?alt=json`;
   var responseObj = {};
   fetch(url)
     .then(response => response.json())
     .then((data) => {
       const rows = [];
       const columns = {};
 
       for (let i = 0; i < data.feed.entry.length; i += 1) {
         const entry = data.feed.entry[i];
         const keys = Object.keys(entry);
         const newRow = {};
         let queried = false;
 
         for (let j = 0; j < keys.length; j += 1) {
           const gsxCheck = keys[j].indexOf('gsx$');
           if (gsxCheck > -1) {
             const key = keys[j];
             const name = key.substring(4);
             const content = entry[key];
             let value = content.$t;
 
             if (value.toLowerCase().indexOf(query.toLowerCase()) > -1) {
               queried = true;
             }
 
             if (useIntegers && !Number.isNaN(Number(value))) {
               value = Number(value);
             }
 
             newRow[name] = value;
 
             if (queried) {
               if (!Object.prototype.hasOwnProperty.call(columns, name)) {
                 columns[name] = [];
                 columns[name].push(value);
               } else {
                 columns[name].push(value);
               }
             }
           }
         }
 
         if (queried) {
           rows.push(newRow);
         }
       }
       if (showColumns) {
         //responseObj.columns = columns;
         responseObj.columns = columns;
       }
 
       if (showRows) {
         responseObj.rows = rows;
       }
      
      glob.jukebox_json[+sheetNumber-1].values = responseObj

     })
     .catch((error) => {
       throw new Error(`Spreadsheet to JSON: There has been a problem with your fetch operation: ${error.message}`);
     });
 }

function getsheetsValues(sheetsNumber, sheetsID, last){
   gsheetToJson({
        id: sheetsID,
         sheetNumber: sheetsNumber,
         query: '',
         useIntegers: false,
         showRows: false,
         showColumns: true,
         last: last,
      });
}

function handleResponseJson(data, sheetsID){
   const worksheetsAttributes = data.feed.entry;
   var sheetsName;
   let sheetsData = {}
   var lastGet = false
   for (sheetsNumber in worksheetsAttributes){
      if(sheetsNumber == 'last'){
         wait1secJsonReady()
         break;
      }

      if(sheetsNumber == data.feed.entry.length-1)
         lastGet = true

      sheetsName = worksheetsAttributes[sheetsNumber].title.$t;
      if(sheetsName[0] != '_'){
         glob.jukebox_json[+sheetsNumber] = {name: sheetsName.slice(3,)};
         getsheetsValues(+sheetsNumber+1, sheetsID, lastGet);
      }
   }
   addOptionToSelectJuke();
}

function addOptionToSelectJuke(){
   select = document.getElementById('jukebox_playlist');
   for(i in glob.jukebox_json){
         var opt = document.createElement('option');
         opt.value = i;
         opt.innerHTML = glob.jukebox_json[i].name;
         select.appendChild(opt);
   }
}

function setup_jukebox_playlist_oninput() {
   let playlist;
   let control_params = {seconds_next_run : 1
                        ,list_index : 0};
   var start = Date.now();
   var output_text_jukebox = document.getElementById('output_text_jukebox')
   const sheetsID = '1iSjH-dUliUoS9DWntZnn2S7dLzRYlD1z4TqdMRWWd5A'
   
   fetch(`https://spreadsheets.google.com/feeds/worksheets/${sheetsID}/public/values?alt=json`)
   .then(response => {
      return response.json();
   }).then(data => {
      // Work with JSON data here
      handleResponseJson(data, sheetsID)
      waitForJson();
   }).catch(err => {
      // Do something for an error here
      alert(`.json not found\nerror: ${err}`)
   });


   document.getElementById('jukebox_playlist').addEventListener('input', function () {
      window.clearInterval(glob.jukebox_id)
      control_params.seconds_next_run = 1;
      control_params.list_index = 0;
      glob.ui.jukebox_playlist = this.value; 
      if (glob.ui.jukebox_playlist != 'off' &&  glob.jsonIsReady) {
         playlist = glob.jukebox_json[glob.ui.jukebox_playlist].values.columns;
         start = Date.now();
         output_text_jukebox.innerHTML = "1/" + playlist['sec'].length;
         run_jukebox_playlist(true, playlist, 0);
         glob.jukebox_id = window.setInterval(start_playlist, 1000, playlist, start, output_text_jukebox, control_params);
      } else {
         output_text_jukebox.innerHTML = 'Stopped'
      }
   })
}

function setup_jukebox_button(){
   document.getElementById('jukebox').addEventListener('mousedown', function (e) {
      const jukebox_playlist = document.getElementById('jukebox_playlist').value
      if(e.which == 1 && jukebox_playlist!='off')
         glob.jukeboxClicked = 1;
      else if(e.which == 3 && jukebox_playlist!='off')
         glob.jukeboxClicked = -1;
   })
}

function setup_global_event_handler() {
   document.addEventListener('keypress', function (e) {
      //console.log(e.keyCode)
      if (e.keyCode == 32) {
         play_pause_button = document.getElementById('play_pause');
         play_pause_button.focus()
         play_pause_button.click();
      }
   })
}

function setup_fill_alpha() {
   document.getElementById('fill_alpha').addEventListener('input', function () {
      glob.ui.fill_alpha = this.value;
      redraw();
   })
}

function setup_clr_fill_border() {
   document.getElementById('clr_fill_border').addEventListener('input', function () {
      glob.ui.clr_fill_border = hexToRgb(this.value);
      redraw();
   })
}

function setup_circ(){
   ['1','2','3','4'].map(x => document.getElementById('circ'+x).addEventListener('input', function(){
         glob.ui['circ'+x] = this.value;
         if(glob.ui['inv'+x])
            ui_changed(x, true);
         redraw();
         if(glob.ui['inv'+x])
            set_conic_type_ui(x);
      }))
}

function setup_inv(){
   ['1','2','3','4'].map(x => document.getElementById('inv'+x).addEventListener("click", function () {
      glob.ui['inv'+x] = this.checked;
      if(glob.ui['circ'+x] != 'off'){
         ui_changed(x, true);
         redraw();
         set_conic_type_ui(x);
      }
   }))
}

function setup_invert_colors() {
   document.getElementById('invert_colors').addEventListener('click', function(){
      glob.ui.bg = clr_invert_ui(glob.ui.bg);
      glob.ui.clr1 = clr_invert_ui(glob.ui.clr1);
      glob.ui.clr2 = clr_invert_ui(glob.ui.clr2);
      glob.ui.clr3 = clr_invert_ui(glob.ui.clr3);
      glob.ui.clr4 = clr_invert_ui(glob.ui.clr4);
      change_loc_clr('1', rgbToHex(glob.ui.clr1));
      change_loc_clr('2', rgbToHex(glob.ui.clr2));
      change_loc_clr('3', rgbToHex(glob.ui.clr3));
      change_loc_clr('4', rgbToHex(glob.ui.clr4));
      ui_changed('1');
      ui_changed('2');
      ui_changed('3');
      ui_changed('4');
   });
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
   ["1", "2", "3", "4"].map(setup_bbox_onclick);
   setup_recenter_onclick();
   setup_tandem_bar();
   setup_bg_onchange();
   setup_loc_clr_onchange();
   setup_rot_onchange();
   setup_rmax_onchange();
   setup_pallete_onclick();
   setup_reset_UI_onclick();
   setup_config_url_onclick();
   setup_jukebox_playlist_oninput();
   setup_fill_alpha();
   setup_clr_fill_border();
   setup_circ();
   setup_inv();
   setup_invert_colors();
   setup_jukebox_button();
   setup_global_event_handler();
   ui_changed("1", true, true);
   redraw();
   ["1", "2", "3", "4"].map(set_conic_type_ui);
}

function reset_ui() {
   glob.ui = JSON.parse(JSON.stringify(glob.ui0));
   glob.ctr = JSON.parse(JSON.stringify(glob.ctr0));
   glob.scale = JSON.parse(JSON.stringify(glob.scale0));

   set_ui_variables()
};