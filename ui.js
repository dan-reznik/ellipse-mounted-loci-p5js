function create_title(lab, prep = true, parent = "ui") {
  let p = createP((prep ? '>>> ' : "") + lab);
  p.parent(parent);
  /*p.position(x, y);*/
  p.class('lab');
  return lab;
}

function create_title_ctr(lab, par, clr = 'red') {
  let p = createP(lab);
  p.parent(par);
  p.style('color', clr)
  return p;
}

function create_main_title(y) {
  let div = createDiv();
  div.parent('ui');
  div.style('text-align', 'center');
  div.class('lab');
  create_title_ctr("Loci of Centers of Ellipse-Mounted Triangles  (<a href=https://dan-reznik.github.io/ellipse-mounted-triangles/>Learn more</a>)", div, 'blue');
  return div;
}

function setup_bbox_onclick(n) {
  document.getElementById('Bbox_' + n).addEventListener('click', () => bbox_rescale(n));
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
     ui_changed("1");
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

function setup_export_PNG() {
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
     if (play_button.isPlaying = true) {
        play_button.isPlaying = true;
        play_button.className = stop_class;
        loop();
        glob.loop = true;
     }
  });
  forward_button.addEventListener("click", function () {
     glob.loop_ccw = true;
     if (play_button.isPlaying = true) {
        play_button.isPlaying = true;
        play_button.className = stop_class;
        loop();
        glob.loop = true;
     }
  });
}

function setup_tri_onchange() {
  document.getElementById('draw_tri_1').addEventListener("click", function () {
     glob.ui.draw_tri_1 = this.checked;
     ui_changed_type();
     redraw();
  })
  document.getElementById('draw_tri_2').addEventListener("click", function () {
     glob.ui.draw_tri_2 = this.checked;
     ui_changed_type();
     redraw();
  })
  document.getElementById('draw_tri_3').addEventListener("click", function () {
     glob.ui.draw_tri_3 = this.checked;
     ui_changed_type();
     redraw();
  })
  document.getElementById('draw_tri_4').addEventListener("click", function () {
     glob.ui.draw_tri_4 = this.checked;
     ui_changed_type();
     redraw();
  })
}

function setup_ell_onchange(){
  document.getElementById('ell').addEventListener("click", function () {
     glob.ui.ell = this.checked;
     tandem_bar_variables();
     ui_changed_type();
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
        if(glob.ui.locus_type_1 != 'none')  ui_changed('1');
        if(glob.ui.locus_type_2 != 'none')  ui_changed('2');
        if(glob.ui.locus_type_3 != 'none')  ui_changed('3');
        if(glob.ui.locus_type_4 != 'none')  ui_changed('4');
     }
  })
}

function setup_locus_type_onchange() {
  document.getElementById("locus_type_1").addEventListener("change", function () {
     glob.ui.locus_type_1 = this.value;
     ui_changed_type();
     conic_type_onchange("1");
  });
  document.getElementById("locus_type_2").addEventListener("change", function () {
     glob.ui.locus_type_2 = this.value;
     ui_changed("2");
     conic_type_onchange("2");
  });
  document.getElementById("locus_type_3").addEventListener("change", function () {
     glob.ui.locus_type_3 = this.value;
     ui_changed("3");
     conic_type_onchange("3");
  });
  document.getElementById("locus_type_4").addEventListener("change", function () {
     glob.ui.locus_type_4 = this.value;
     ui_changed("4");
     conic_type_onchange("4");
  });
}

function setup_tri_type_onchange() {
  document.getElementById("tri_type_1").addEventListener("change", function () {
     glob.ui.tri_type_1 = this.value;
     ui_changed_type();
     conic_type_onchange("1");
  });
  document.getElementById("tri_type_2").addEventListener("change", function () {
     glob.ui.tri_type_2 = this.value;
     ui_changed_type();
     conic_type_onchange("2");
  });
  document.getElementById("tri_type_3").addEventListener("change", function () {
     glob.ui.tri_type_3 = this.value;
     ui_changed_type();
     conic_type_onchange("3");
  });
  document.getElementById("tri_type_4").addEventListener("change", function () {
     glob.ui.tri_type_4 = this.value;
     ui_changed_type();
     conic_type_onchange("4");
  });
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
  let link_keys = Object.keys(url_params);
  link_keys.forEach(function (key) {
     if (url_params_to_ui_keys.includes(key)){
        ui_key = url_params_to_ui[key];
        if(['a', 'Xn1', 'Xn2', 'Xn3', 'Xn4'].includes(ui_key)){
           glob.ui[ui_key] = +url_params[key];
        }
        else if(['ell','draw_tri_1', 'draw_tri_2', 'draw_tri_3', 'draw_tri_4'].includes(ui_key))
           glob.ui[ui_key] = (glob.url_params[key] == 'true');
        else if(ui_key == 'animStep0'){
           key_value = url_params[key]
           glob.ui[ui_key] = (Object.keys(animStep0_to_ui).includes(key_value))?animStep0_to_ui[key_value]:animStep0_to_ui['slow'];
        }
        else if(ui_key == 'a_speed'){
           key_value = url_params[key]
           glob.ui[ui_key] = (Object.keys(a_speed_to_ui).includes(key_value))?a_speed_to_ui[key_value]:a_speed_to_ui['anim'];
        }
        else{
           glob.ui[ui_key] = glob.url_params[key];
        }
     }
     if (url_params_to_canvas_keys.includes(key)){
        eval(url_params_to_canvas[key]+'='+glob.url_params[key]);
     }
  });
  set_ui_variables(glob.ui);
  if(glob.ui.locus_type_4 !== 'none'){
     ui_changed("4");
  }
  if(glob.ui.locus_type_3 !== 'none'){
     ui_changed("3");
  }
  if(glob.ui.locus_type_2 !== 'none'){
     ui_changed("2");
  }
  if(glob.ui.locus_type_1 !== 'none'){
     ui_changed("1");
  } 
  console.log(glob.ctr)
}

function setup_recenter_onclick(){
  document.getElementById('recenter').addEventListener('click', function(){
     recenter();
     glob.scale = glob.scale0;
     
     if(glob.ui.locus_type_4 != 'none') ui_changed('4')
     if(glob.ui.locus_type_3 != 'none') ui_changed('3')
     if(glob.ui.locus_type_2 != 'none') ui_changed('2')
     if(glob.ui.locus_type_1 != 'none') ui_changed('1')
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
        glob.ui.a_min = this.value;
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
        glob.ui.a_min = this.value;
        ui_changed_type();
     }
  })
  a_max.addEventListener('focusout', function () {
     if (+this.value > 4.00)
        this.value = '4.00';
     else if (+this.value < +a_min.value)
        this.value = +a_min.value;
     glob.ui.a_max = this.value;
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
        glob.ui.a_max = this.value;
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
        glob.ui.a_max = this.value;
        ui_changed_type();
     }
  })
}


function setup_export_JSON_onclick(){
   document.getElementById('Export_JSON').addEventListener('click', function(){
      var canvas_ui = {'canvas_scale':glob.scale, 'cx':glob.ctr[0], 'cy':glob.ctr[1]}
      var ui_object = {...canvas_ui, ...glob.ui};
      if(glob.ui.locus_type_1 != 'none')
         ui_object = {...ui_object, ...{'locus1': trunc_locus_xy(glob.locus.Xn1_branched,4)}};
      if(glob.ui.locus_type_2 != 'none')
         ui_object = {...ui_object, ...{'locus2': trunc_locus_xy(glob.locus.Xn2_branched,4)}};
      if(glob.ui.locus_type_3 != 'none')
         ui_object = {...ui_object, ...{'locus3': trunc_locus_xy(glob.locus.Xn3_branched,4)}};
      if(glob.ui.locus_type_4 != 'none')
         ui_object = {...ui_object, ...{'locus4': trunc_locus_xy(glob.locus.Xn4_branched,4)}};
      exportToJsonFile(ui_object);
   })
}

function setup_conic_type_onchange(locus_type){
   var conic_type = document.getElementById('conic_type_'+ locus_type)
   switch(locus_type){
      case '1': 
         conic_type.innerHTML = (glob.ui.locus_type_1 == 'none')?"":glob.ell.detect_1;
         glob.ell.detect_1 = conic_type.innerHTML
         break;
      case '2': 
         conic_type.innerHTML = (glob.ui.locus_type_2 == 'none')?"":glob.ell.detect_2; 
         glob.ell.detect_2 = conic_type.innerHTML
         break;
      case '3': 
         conic_type.innerHTML = (glob.ui.locus_type_3 == 'none')?"":glob.ell.detect_3; 
         glob.ell.detect_3 = conic_type.innerHTML
         break;
      case '4': 
         conic_type.innerHTML = (glob.ui.locus_type_4 == 'none')?"":glob.ell.detect_4; 
         glob.ell.detect_4 = conic_type.innerHTML
         break;
      default:
         document.getElementById('conic_type_1').innerHTML = "X";
         glob.ell.detect_1 = "X"
         document.getElementById('conic_type_2').innerHTML = "X";
         glob.ell.detect_2 = "X"
         document.getElementById('conic_type_3').innerHTML = "X";
         glob.ell.detect_3 = "X"
         document.getElementById('conic_type_4').innerHTML = "X";
         glob.ell.detect_4 = "X"
         break;
   }
}

function setup_tandem_bar(){
   loc = document.getElementById('tandem_loc');
   mnt = document.getElementById('tandem_mnt');
   xn = document.getElementById('tandem_xn');
   tri = document.getElementById('tandem_tri');
   
   loc.addEventListener('click', function(){
      glob.tandem_bar.loc = this.checked;
      if(glob.tandem_bar.loc){
         ui_changed_type();
         redraw();
      }
   })
   mnt.addEventListener('click', function(){
      glob.tandem_bar.mnt = this.checked;
      if(glob.tandem_bar.mnt){
         ui_changed_type();
         redraw();
      }
   })
   xn.addEventListener('click', function(){
      glob.tandem_bar.xn = this.checked;
      if(glob.tandem_bar.xn){
         ui_changed_type();
         redraw();
      }
   })
   tri.addEventListener('click', function(){
      glob.tandem_bar.tri = this.checked;
      if(glob.tandem_bar.tri){
         ui_changed_type();
         redraw();
      }
   })
}

function setup_bg_onchange(){
   var bg_dropbox = document.getElementById('bg');
   bg_dropbox.addEventListener('input', function(){
      glob.background = hexToRgb(this.value);
      redraw();
   })
}

function setup_ui() {
  setup_ui_variables_behavior();
  ui_changed("1");
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
  ["1","2","3","4"].map(setup_conic_type_onchange);
  ["1","2","3","4"].map(setup_bbox_onclick);
  setup_recenter_onclick();
  setup_tandem_bar();
  setup_bg_onchange();
  setup_reset_UI_onclick();
  setup_config_url_onclick();
}