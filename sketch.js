let glob = {
   width:0,
   height:0,
   main_title:"", 
   ctr0:[0,0],
   ctr:[0,0],
   mouse:[0,0],
   scale0 : 6,
   // scale, scale0 should be on ui
   scale : 6, // = scale0
   dragged : false,
   click_ell : false,
   loop_ccw : true,
   loop : true,
   tDeg : 0,
   locus_branched : [null,null,null,null],
   locus_subpolys : [null,null,null,null],
   ell_detect : ['X','X','X','X'],
   ui0 : {
      a: 1.618, a_speed: 0, a_min: 1.01, a_max: 4, ell: true,
      animStep0: "0.500",
      background: [5,5,25],
      rmax : 10.0,
      rot : "0", // "90", "180", "270"
      // needs to refactor this
      locus_type_1: 'trilins', locus_type_2: 'none', locus_type_3: 'none', locus_type_4: 'none',
      Xn1: '1', Xn2: '1', Xn3: '1', Xn4: '1',
      tri_type_1: 'reference', tri_type_2: 'reference', tri_type_3: 'reference', tri_type_4: 'reference',
      draw_tri_1: true, draw_tri_2: false, draw_tri_3: false, draw_tri_4: false,
      mounting_Xn1: 'billiard', mounting_Xn2: 'billiard', mounting_Xn3: 'billiard', mounting_Xn4: 'billiard',
      clr_1: clr_invert_ui(clr_red), clr_2: clr_invert_ui(clr_dark_green),
      clr_3: clr_invert_ui(clr_blue), clr_4: clr_invert_ui(clr_purple)
   },
   ui : null,
   url_params : {},
   // melhorar
   tandem_bar : {loc: false, mnt: false, xn: false, tri: false}
}

function get_glob_indexed() {
   return {
      Xns: [glob.ui.Xn1, glob.ui.Xn2, glob.ui.Xn3, glob.ui.Xn4],
      l_types: [glob.ui.locus_type_1, glob.ui.locus_type_2, glob.ui.locus_type_3, glob.ui.locus_type_4],
      dr_tris: [glob.ui.draw_tri_1, glob.ui.draw_tri_2, glob.ui.draw_tri_3, glob.ui.draw_tri_4],
      mountings: [glob.ui.mounting_Xn1, glob.ui.mounting_Xn2, glob.ui.mounting_Xn3, glob.ui.mounting_Xn4],
      t_types: [glob.ui.tri_type_1, glob.ui.tri_type_2, glob.ui.tri_type_3, glob.ui.tri_type_4],
      clrs : [glob.ui.clr_1,glob.ui.clr_2,glob.ui.clr_3,glob.ui.clr_4]
   }
}

// needs to refactor w/ new array ui design
function create_locus(locus_type_changed) {
   let tdegStep = +1; //valor inicial de degStep0
   let a = +glob.ui.a;
   let g_ind = get_glob_indexed();

   for (let i = 0; i < g_ind.Xns.length; i++)
      if (g_ind.l_types[i] != "none" && [(i + 1).toString(), "0"].includes(locus_type_changed)) {
         glob.locus_branched[i] = make_locus_branched(a, tdegStep, glob.ui.rmax,
            g_ind.Xns[i], g_ind.mountings[i], g_ind.l_types[i], g_ind.t_types[i]);
         glob.ell_detect[i] = locus_conic(glob.locus_branched[i]);
      }
}

function create_locus_subpolys(n) {
   if (glob.locus_branched[n]!=null) {
      glob.locus_subpolys = locus_separate(glob.locus_branched.filter(l=>l.length>4));
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
   const locus_types = [glob.ui.locus_type_1, glob.ui.locus_type_2, glob.ui.locus_type_3, glob.ui.locus_type_4];
   const locus_ids = ["1","2","3","4"];
   get_window_width_height();
   locus_ids.map((li,i) => {
      if (locus_types[i] !== 'none') {
         ui_changed(li);
         bbox_rescale(li);
      }
   });
   resizeCanvas(glob.width, glob.height);
}

function mouseOverCanvas() {
   canvas_div = document.getElementById("canvas")
   canvas_div.mouseIsOver = false
   canvas_div.addEventListener('mouseover', function () { this.mouseIsOver = true; });
   canvas_div.addEventListener('mouseout', function () { this.mouseIsOver = false; });
}

function bbox_rescale(n) {
   const locus_types = [glob.ui.locus_type_1, glob.ui.locus_type_2, glob.ui.locus_type_3, glob.ui.locus_type_4];
   const bbox = locus_bbox_ctr(+glob.ui.a, locus_types[n - 1], glob.locus_branched[n - 1], glob.width / glob.height, glob.scale0);
   glob.scale = bbox.scale;
   glob.ctr = [glob.width/2-bbox.ctr_x*(glob.width/glob.scale),glob.height/2-bbox.ctr_y*(glob.width/glob.scale)];
   glob.ctr0 = glob.ctr;
   ui_changed_type();
   redraw();
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

function setup() {
   get_window_width_height();
   recenter();
   reset_ui();
   url_params = getURLParams();
   if(Object.keys(url_params).length > 0) {set_url_params(url_params);}
   create_checkboxes();
   let canvas = createCanvas(glob.width, glob.height);
   canvas.parent('canvas');
   mouseOverCanvas();
   //frameRate(15);
   setup_ui();
}

function draw() {
   const dict_rot = {"0":0, "90":PI/2, "180":PI, "270":-PI/2, "-90":-PI/2};
   // vamos usar glob.bg;
   background(...glob.ui.background); // (220, 220, 200);

   push();
   translate(glob.ctr[0], glob.ctr[1]);
   scale(glob.width / glob.scale);
   rotate(dict_rot[glob.ui.rot]);
   let stroke_w = sqrt(glob.scale/glob.scale0)*.02;

   if(glob.ui.ell)
      draw_ellipse(glob.ui.mounting_Xn1=="poristic"?1:+glob.ui.a,stroke_w,glob.ui.mounting_Xn1!=="poristic");

   // need to refactor glob.* so there is one object

   const a = +glob.ui.a;
   const g_ind = get_glob_indexed();

   for (let i = 0; i < g_ind.Xns.length; i++)
      draw_billiard_or_mounted_branched(a, glob.tDeg, glob.ui.rot, stroke_w, glob.ui.ell,
         g_ind.clrs[i], g_ind.Xns[i], glob.locus_branched[i], g_ind.l_types[i], g_ind.dr_tris[i], g_ind.mountings[i],
         g_ind.t_types[i], glob.ell_detects);
  
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
}

function mouseReleased() {
   glob.click_ell = false;
}

function mouseDragged() {
   if (canvas_div.mouseIsOver) {
      glob.dragged = true;
      glob.ctr = vsum(vdiff([mouseX, mouseY], glob.mouse), glob.ctr0);
      if (!glob.loop) {
         ui_changed_type();
         redraw();
      } 
   }
}

function mouseWheel(event) {
   if (event.delta > 0)
      glob.scale *= 1.05;
   else
      glob.scale *= 0.95;
   if (!glob.loop) {
      ui_changed_type();
      redraw();
   }
   return false;
}

// for debugging
/* function get_current_tri_1() {
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
 } */