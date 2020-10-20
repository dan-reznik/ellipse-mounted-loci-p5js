const fromUiToUrl = {
    scale: 'sc',
    ctr0: 'cx',
    ctr1: 'cy',
    a: 'a', a_speed: 'asp', a_min: 'amn', a_max: 'amx', ell: 'ell',
    locus_type_1: 'lc1', locus_type_2: 'lc2', locus_type_3: 'lc3', locus_type_4: 'lc4',
    Xn1: 'Xn1', Xn2: 'Xn2', Xn3: 'Xn3', Xn4: 'Xn4', Pn1: 'Pn1', Pn2: 'Pn2', Pn3: 'Pn3', Pn4: 'Pn4',
    tri_type_1: 'tr1', tri_type_2: 'tr2', tri_type_3: 'tr3', tri_type_4: 'tr4',
    draw_tri_1: 'dr1', draw_tri_2: 'dr2', draw_tri_3: 'dr3', draw_tri_4: 'dr4',
    mounting_Xn1: 'mt1', mounting_Xn2: 'mt2', mounting_Xn3: 'mt3', mounting_Xn4: 'mt4',
    animStep0: 'aS', rot: 'rot', rmax: 'rmx', bg: 'bg',
    clr1: 'clr1', clr2: 'clr2', clr3: 'clr3', clr4: 'clr4', jukebox_playlist: 'juke',
    clr_fill_border: 'cfb', fill_alpha: 'fa', inv1:'inv1',inv2:'inv2',inv3:'inv3',inv4:'inv4',
    circ1:'crc1',circ2:'crc2',circ3:'crc3',circ4:'crc4'
}

function swap(json){
   var ret = {};
   for(var key in json){
     ret[json[key]] = key;
   }
   return ret;
 }

const fromUrlToUi = swap(fromUiToUrl);

const scale_fn = {
   encode(scale_init_val){
      var configToUrl = '';
      if (glob.scale !== scale_init_val){
          configToUrl = fromUiToUrl['scale'] + '=' + glob.scale.toFixed(3) + '&'; 
      }
      return configToUrl;
   },
   decode(url_scale_value){
      glob.scale = +url_scale_value;
   }
}

const ctr0_fn = {
   encode(ctr0_init_val){
      var configToUrl = '';
      if (glob.ctr[0] !== glob.width/2){
          configToUrl = fromUiToUrl['ctr0'] + '=' + glob.ctr[0].toFixed(0) + '&'; 
      }
      return configToUrl;
   },
   decode(url_ctr0_value){
      glob.ctr[0] = +url_ctr0_value;
   }
}
   

const ctr1_fn = {
   encode(ctr1_init_val){
      var configToUrl = '';
      if (glob.ctr[1] !== glob.height/2){
          configToUrl = fromUiToUrl['ctr1'] + '=' + glob.ctr[1].toFixed(0) + '&'; 
      }
      return configToUrl;
   },
   decode(url_ctr1_value){
      glob.ctr[1] = +url_ctr1_value;
   }
}

const animStep0_fn = {
   encode(animStep0_init_val){
      var configToUrl = ''; 
      const animStep0_to_url_value = {
          "0.125": 'slow', "0.500": 'med', "1.000": 'fast'
      }
      if (glob.ui.animStep0 !== animStep0_init_val){
          configToUrl = fromUiToUrl['animStep0'] + '=' + animStep0_to_url_value[abs(glob.ui.animStep0).toFixed(3)] + '&';
      }
      return configToUrl;
   },
   decode(url_animStep0_value){
      const animStep0_to_ui = {
         slow: "0.125", medium: "0.500", fast: "1.000"
      };
      glob.ui.animStep0 = animStep0_to_ui[url_animStep0_value];
   }
}

const a_speed_fn = {
   encode(a_speed_init_val){
      var configToUrl = ''; 
      const a_speed_to_url_value = {
          "0.000": 'off', "0.005": 'slow', "0.010": 'med', "0.050": 'fast'
      }
      if (glob.ui.a_speed !== a_speed_init_val){
          configToUrl = fromUiToUrl['a_speed'] + '=' + a_speed_to_url_value[abs(glob.ui['a_speed']).toFixed(3)] + '&';
      }
      return configToUrl;
   },
   decode(url_a_speed_value){
      const a_speed_to_ui = {
         anim: "0.000", slow: "0.005", med: "0.010", fast: "0.050"
      };
      glob.ui.a_speed = a_speed_to_ui[url_a_speed_value];
   }
}

function getVariablesHaveColorBehavior(key, key_init_val){
    var configToUrl = ''
    for (i in [...Array(glob.ui[key].length).keys()]) {
       if (key_init_val[i] !== glob.ui[key][i]) {
          configToUrl = fromUiToUrl[key] + '=' + rgbToHex(glob.ui[key]).slice(1) + '&';
          break;
       }
    }
    return configToUrl;
}

const clr1_fn = {
   encode(clr1_init_val){return getVariablesHaveColorBehavior('clr1', clr1_init_val)},
   decode(url_clr1_value){glob.ui.clr1 = hexToRgb('#' + url_clr1_value)}
}
const clr2_fn = {
   encode(clr2_init_val){return getVariablesHaveColorBehavior('clr2', clr2_init_val)},
   decode(url_clr2_value){glob.ui.clr2 = hexToRgb('#' + url_clr2_value)}
}
const clr3_fn = {
   encode(clr3_init_val){return getVariablesHaveColorBehavior('clr3', clr3_init_val)},
   decode(url_clr3_value){glob.ui.clr3 = hexToRgb('#' + url_clr3_value)}
}
const clr4_fn = {
   encode(clr4_init_val){return getVariablesHaveColorBehavior('clr4', clr4_init_val)},
   decode(url_clr4_value){glob.ui.clr4 = hexToRgb('#' + url_clr4_value)}
}
const bg_fn = {
   encode(bg_init_val){return getVariablesHaveColorBehavior('bg', bg_init_val)},
   decode(url_bg_value){glob.ui.bg = hexToRgb('#' + url_bg_value)}
}
const clr_fill_border_fn = {
   encode(clr_fill_border_init_val){return getVariablesHaveColorBehavior('clr_fill_border', clr_fill_border_init_val)},
   decode(url_clr_fill_border_value){glob.ui.clr_fill_border = hexToRgb('#' + url_clr_fill_border_value)}
}

const a_fn = {
   encode(a_init_val){
      var configToUrl = ''
      if (glob.ui.a !== a_init_val) {
          configToUrl = fromUiToUrl['a'] + '=' + (+glob.ui['a']).toFixed(3) + '&';
      }
      return configToUrl;
   },
   decode(url_a_value){glob.ui.a = +url_a_value;}
}

function getConfigFromVariablesDefault(key, key_init_val){
   var configToUrl = ''
   if (glob.ui[key] !== key_init_val) {
       configToUrl = fromUiToUrl[key] + '=' + glob.ui[key] + '&';
   }
   return configToUrl;
}

const Xn1_fn = {encode(Xn1_init_value){return getConfigFromVariablesDefault('Xn1', Xn1_init_value)}, decode(url_Xn1_value){glob.ui.Xn1 = +url_Xn1_value;}};
const Xn2_fn = {encode(Xn2_init_value){return getConfigFromVariablesDefault('Xn2', Xn2_init_value)}, decode(url_Xn2_value){glob.ui.Xn2 = +url_Xn2_value;}};
const Xn3_fn = {encode(Xn3_init_value){return getConfigFromVariablesDefault('Xn3', Xn3_init_value)}, decode(url_Xn3_value){glob.ui.Xn3 = +url_Xn3_value;}};
const Xn4_fn = {encode(Xn4_init_value){return getConfigFromVariablesDefault('Xn4', Xn4_init_value)}, decode(url_Xn4_value){glob.ui.Xn4 = +url_Xn4_value;}};
const Pn1_fn = {encode(Pn1_init_value){return getConfigFromVariablesDefault('Pn1', Pn1_init_value)}, decode(url_Pn1_value){glob.ui.Pn1 = +url_Pn1_value;}};
const Pn2_fn = {encode(Pn2_init_value){return getConfigFromVariablesDefault('Pn2', Pn2_init_value)}, decode(url_Pn2_value){glob.ui.Pn2 = +url_Pn2_value;}};
const Pn3_fn = {encode(Pn3_init_value){return getConfigFromVariablesDefault('Pn3', Pn3_init_value)}, decode(url_Pn3_value){glob.ui.Pn3 = +url_Pn3_value;}};
const Pn4_fn = {encode(Pn4_init_value){return getConfigFromVariablesDefault('Pn4', Pn4_init_value)}, decode(url_Pn4_value){glob.ui.Pn4 = +url_Pn4_value;}};


const ell_fn = {encode(ell_init_val){return getConfigFromVariablesDefault('ell', ell_init_val)}, decode(url_ell_value){glob.ui.ell = (url_ell_value == 'true');}};
const draw_tri_1_fn = {encode(draw_tri_1_init_val){return getConfigFromVariablesDefault('draw_tri_1', draw_tri_1_init_val)}, decode(url_draw_tri_1_value){glob.ui.draw_tri_1 = (url_draw_tri_1_value == 'true');}};
const draw_tri_2_fn = {encode(draw_tri_2_init_val){return getConfigFromVariablesDefault('draw_tri_2', draw_tri_2_init_val)}, decode(url_draw_tri_2_value){glob.ui.draw_tri_2 = (url_draw_tri_2_value == 'true');}};
const draw_tri_3_fn = {encode(draw_tri_3_init_val){return getConfigFromVariablesDefault('draw_tri_3', draw_tri_3_init_val)}, decode(url_draw_tri_3_value){glob.ui.draw_tri_3 = (url_draw_tri_3_value == 'true');}};
const draw_tri_4_fn = {encode(draw_tri_4_init_val){return getConfigFromVariablesDefault('draw_tri_4', draw_tri_4_init_val)}, decode(url_draw_tri_4_value){glob.ui.draw_tri_4 = (url_draw_tri_4_value == 'true');}};
const inv1_fn = {encode(inv1_init_val){return getConfigFromVariablesDefault('inv1', inv1_init_val)}, decode(url_inv1_value){glob.ui.inv1 = (url_inv1_value == 'true');}};
const inv2_fn = {encode(inv2_init_val){return getConfigFromVariablesDefault('inv2', inv2_init_val)}, decode(url_inv2_value){glob.ui.inv2 = (url_inv2_value == 'true');}};
const inv3_fn = {encode(inv3_init_val){return getConfigFromVariablesDefault('inv3', inv3_init_val)}, decode(url_inv3_value){glob.ui.inv3 = (url_inv3_value == 'true');}};
const inv4_fn = {encode(inv4_init_val){return getConfigFromVariablesDefault('inv4', inv4_init_val)}, decode(url_inv4_value){glob.ui.inv4 = (url_inv4_value == 'true');}};


const a_min_fn = {encode(a_min_init_val){return getConfigFromVariablesDefault('a_min', a_min_init_val)}, decode(url_a_min_value){glob.ui.a_min = url_a_min_value}};
const a_max_fn = {encode(a_max_init_val){return getConfigFromVariablesDefault('a_max', a_max_init_val)}, decode(url_a_max_value){glob.ui.a_max = url_a_max_value}};
const locus_type_1_fn = {encode(locus_type_1_init_val){return getConfigFromVariablesDefault('locus_type_1', locus_type_1_init_val)}, decode(url_locus_type_1_value){glob.ui.locus_type_1 = url_locus_type_1_value}};
const locus_type_2_fn = {encode(locus_type_2_init_val){return getConfigFromVariablesDefault('locus_type_2', locus_type_2_init_val)}, decode(url_locus_type_2_value){glob.ui.locus_type_2 = url_locus_type_2_value}};
const locus_type_3_fn = {encode(locus_type_3_init_val){return getConfigFromVariablesDefault('locus_type_3', locus_type_3_init_val)}, decode(url_locus_type_3_value){glob.ui.locus_type_3 = url_locus_type_3_value}};
const locus_type_4_fn = {encode(locus_type_4_init_val){return getConfigFromVariablesDefault('locus_type_4', locus_type_4_init_val)}, decode(url_locus_type_4_value){glob.ui.locus_type_4 = url_locus_type_4_value}};
const tri_type_1_fn = {encode(tri_type_1_init_val){return getConfigFromVariablesDefault('tri_type_1', tri_type_1_init_val)}, decode(url_tri_type_1_value){glob.ui.tri_type_1 = url_tri_type_1_value}};
const tri_type_2_fn = {encode(tri_type_2_init_val){return getConfigFromVariablesDefault('tri_type_2', tri_type_2_init_val)}, decode(url_tri_type_2_value){glob.ui.tri_type_2 = url_tri_type_2_value}};
const tri_type_3_fn = {encode(tri_type_3_init_val){return getConfigFromVariablesDefault('tri_type_3', tri_type_3_init_val)}, decode(url_tri_type_3_value){glob.ui.tri_type_3 = url_tri_type_3_value}};
const tri_type_4_fn = {encode(tri_type_4_init_val){return getConfigFromVariablesDefault('tri_type_4', tri_type_4_init_val)}, decode(url_tri_type_4_value){glob.ui.tri_type_4 = url_tri_type_4_value}};
const mounting_Xn1_fn = {encode(mounting_Xn1_init_val){return getConfigFromVariablesDefault('mounting_Xn1', mounting_Xn1_init_val)}, decode(url_mounting_Xn1_value){glob.ui.mounting_Xn1 = url_mounting_Xn1_value}};
const mounting_Xn2_fn = {encode(mounting_Xn2_init_val){return getConfigFromVariablesDefault('mounting_Xn2', mounting_Xn2_init_val)}, decode(url_mounting_Xn2_value){glob.ui.mounting_Xn2 = url_mounting_Xn2_value}};
const mounting_Xn3_fn = {encode(mounting_Xn3_init_val){return getConfigFromVariablesDefault('mounting_Xn3', mounting_Xn3_init_val)}, decode(url_mounting_Xn3_value){glob.ui.mounting_Xn3 = url_mounting_Xn3_value}};
const mounting_Xn4_fn = {encode(mounting_Xn4_init_val){return getConfigFromVariablesDefault('mounting_Xn4', mounting_Xn4_init_val)}, decode(url_mounting_Xn4_value){glob.ui.mounting_Xn4 = url_mounting_Xn4_value}};
const rot_fn = {encode(rot_init_val){return getConfigFromVariablesDefault('rot', rot_init_val)}, decode(url_rot_value){glob.ui.rot = url_rot_value}};
const rmax_fn = {encode(rmax_init_val){return getConfigFromVariablesDefault('rmax', rmax_init_val)}, decode(url_rmax_value){glob.ui.rmax = url_rmax_value}};
const jukebox_playlist_fn = {encode(jukebox_playlist_init_val){return getConfigFromVariablesDefault('jukebox_playlist', jukebox_playlist_init_val)}, decode(url_jukebox_playlist_value){glob.ui.jukebox_playlist = url_jukebox_playlist_value}};
const fill_alpha_fn = {encode(fill_alpha_init_val){return getConfigFromVariablesDefault('fill_alpha', fill_alpha_init_val)}, decode(url_fill_alpha_value){glob.ui.fill_alpha = url_fill_alpha_value}};
const circ1_fn = {encode(circ1_init_val){return getConfigFromVariablesDefault('circ1', circ1_init_val)}, decode(url_circ1_value){glob.ui.circ1 = url_circ1_value}};
const circ2_fn = {encode(circ2_init_val){return getConfigFromVariablesDefault('circ2', circ2_init_val)}, decode(url_circ2_value){glob.ui.circ2 = url_circ2_value}};
const circ3_fn = {encode(circ3_init_val){return getConfigFromVariablesDefault('circ3', circ3_init_val)}, decode(url_circ3_value){glob.ui.circ3 = url_circ3_value}};
const circ4_fn = {encode(circ4_init_val){return getConfigFromVariablesDefault('circ4', circ4_init_val)}, decode(url_circ4_value){glob.ui.circ4 = url_circ4_value}};

const clrs_shuffled_seeds_fn = {
   encode(clrs_shuffled_seeds_init_val){
      const clrs_shuffled_seeds = glob.clrs_shuffled_seeds;
      var configToUrl = '';
      for (var i = 0; i < clrs_shuffled_seeds.length; i++) {
         if (clrs_shuffled_seeds[i] != clrs_shuffled_seeds_init_val[i]) {
            configToUrl += 'seed' + (i + 1) + '=' + (+clrs_shuffled_seeds[i].last()).toString(16) + '&';
         }
      }
      return configToUrl;
   },
   decode(url_params){
      for (variable in url_params){
         if(variable.slice(0,-1) == 'seed'){
            const decode_seed = parseInt(url_params[variable], 16);
            glob.clrs_shuffled_seeds[+(variable.slice(-1)) - 1].push(decode_seed);
         }
      }
   }
}

const config_Url = {
   scale: {encode: scale_fn.encode, decode: scale_fn.decode, init_val: glob.scale0},
   ctr0: {encode: ctr0_fn.encode, decode: ctr0_fn.decode, init_val: ''},
   ctr1: {encode: ctr1_fn.encode, decode: ctr1_fn.decode, init_val: ''},
   
   animStep0: {encode: animStep0_fn.encode, decode: animStep0_fn.decode, init_val: glob.ui0.animStep0},
   
   a_speed: {encode: a_speed_fn.encode, decode: a_speed_fn.decode, init_val: glob.ui0.a_speed},
   
   clr1: {encode: clr1_fn.encode, decode: clr1_fn.decode, init_val: glob.ui0.clr1},
   clr2: {encode: clr2_fn.encode, decode: clr2_fn.decode, init_val: glob.ui0.clr2},
   clr3: {encode: clr3_fn.encode, decode: clr3_fn.decode, init_val: glob.ui0.clr3},
   clr4: {encode: clr4_fn.encode, decode: clr4_fn.decode, init_val: glob.ui0.clr4},
   bg: {encode: bg_fn.encode, decode: bg_fn.decode, init_val: glob.ui0.bg},
   clr_fill_border: {encode: clr_fill_border_fn.encode, decode: clr_fill_border_fn.decode, init_val: glob.ui0.clr_fill_border},

   a: {encode: a_fn.encode, decode: a_fn.decode, init_val: glob.ui0.a},

   Xn1: {encode: Xn1_fn.encode, decode: Xn1_fn.decode, init_val: glob.ui0.Xn1}, Xn2: {encode: Xn2_fn.encode, decode: Xn2_fn.decode, init_val: glob.ui0.Xn2}, Xn3: {encode: Xn3_fn.encode, decode: Xn3_fn.decode, init_val: glob.ui0.Xn3}, Xn4: {encode: Xn4_fn.encode, decode: Xn4_fn.decode, init_val: glob.ui0.Xn4}, 
   Pn1: {encode: Pn1_fn.encode, decode: Pn1_fn.decode, init_val: glob.ui0.Pn1}, Pn2: {encode: Pn2_fn.encode, decode: Pn2_fn.decode, init_val: glob.ui0.Pn2}, Pn3: {encode: Pn3_fn.encode, decode: Pn3_fn.decode, init_val: glob.ui0.Pn3}, Pn4: {encode: Pn4_fn.encode, decode: Pn4_fn.decode, init_val: glob.ui0.Pn4},

   ell: {encode: ell_fn.encode, decode: ell_fn.decode, init_val: glob.ui0.ell},
   draw_tri_1: {encode: draw_tri_1_fn.encode, decode: draw_tri_1_fn.decode, init_val: glob.ui0.draw_tri_1}, draw_tri_2: {encode: draw_tri_2_fn.encode, decode: draw_tri_2_fn.decode, init_val: glob.ui0.draw_tri_2}, draw_tri_3: {encode: draw_tri_3_fn.encode, decode: draw_tri_3_fn.decode, init_val: glob.ui0.draw_tri_3}, draw_tri_4: {encode: draw_tri_4_fn.encode, decode: draw_tri_4_fn.decode, init_val: glob.ui0.draw_tri_4},
   inv1: {encode: inv1_fn.encode, decode: inv1_fn.decode, init_val: glob.ui0.inv1}, inv2: {encode: inv2_fn.encode, decode: inv2_fn.decode, init_val: glob.ui0.inv2},inv3: {encode: inv3_fn.encode, decode: inv3_fn.decode, init_val: glob.ui0.inv3},inv4: {encode: inv4_fn.encode, decode: inv4_fn.decode, init_val: glob.ui0.inv4},


   a_min: {encode: a_min_fn.encode, decode: a_min_fn.decode, init_val: glob.ui0.a_min}, a_max: {encode: a_max_fn.encode, decode: a_max_fn.decode, init_val: glob.ui0.a_max}, 
   locus_type_1: {encode: locus_type_1_fn.encode, decode: locus_type_1_fn.decode, init_val: glob.ui0.locus_type_1}, locus_type_2: {encode: locus_type_2_fn.encode, decode: locus_type_2_fn.decode, init_val: glob.ui0.locus_type_2}, locus_type_3: {encode: locus_type_3_fn.encode, decode: locus_type_3_fn.decode, init_val: glob.ui0.locus_type_3}, locus_type_4: {encode: locus_type_4_fn.encode, decode: locus_type_4_fn.decode, init_val: glob.ui0.locus_type_4},
   tri_type_1: {encode: tri_type_1_fn.encode, decode: tri_type_1_fn.decode, init_val: glob.ui0.tri_type_1}, tri_type_2: {encode: tri_type_2_fn.encode, decode: tri_type_2_fn.decode, init_val: glob.ui0.tri_type_2}, tri_type_3: {encode: tri_type_3_fn.encode, decode: tri_type_3_fn.decode, init_val: glob.ui0.tri_type_3}, tri_type_4: {encode: tri_type_4_fn.encode, decode: tri_type_4_fn.decode, init_val: glob.ui0.tri_type_4},
   mounting_Xn1: {encode: mounting_Xn1_fn.encode, decode: mounting_Xn1_fn.decode, init_val: glob.ui0.mounting_Xn1}, mounting_Xn2: {encode: mounting_Xn2_fn.encode, decode: mounting_Xn2_fn.decode, init_val: glob.ui0.mounting_Xn2}, mounting_Xn3: {encode: mounting_Xn3_fn.encode, decode: mounting_Xn3_fn.decode, init_val: glob.ui0.mounting_Xn3}, mounting_Xn4: {encode: mounting_Xn4_fn.encode, decode: mounting_Xn4_fn.decode, init_val: glob.ui0.mounting_Xn4},
   rot: {encode: rot_fn.encode, decode: rot_fn.decode, init_val: glob.ui0.rot}, 
   rmax: {encode: rmax_fn.encode, decode: rmax_fn.decode, init_val: glob.ui0.rmax},
   jukebox_playlist: {encode: jukebox_playlist_fn.encode, decode: jukebox_playlist_fn.decode, init_val: glob.ui0.jukebox_playlist},
   fill_alpha: {encode: fill_alpha_fn.encode, decode: fill_alpha_fn.decode, init_val: glob.ui0.fill_alpha},
   circ1: {encode: circ1_fn.encode, decode: circ1_fn.decode, init_val: glob.ui0.circ1}, circ2: {encode: circ2_fn.encode, decode: circ2_fn.decode, init_val: glob.ui0.circ2}, circ3: {encode: circ3_fn.encode, decode: circ3_fn.decode, init_val: glob.ui0.circ3}, circ4: {encode: circ4_fn.encode, decode: circ4_fn.decode, init_val: glob.ui0.circ4}
}

function get_link_params() {
    var link_params = location.host + location.pathname + '?';
    
   if(glob.ui.jukebox_playlist != 'off'){
      link_params += `juke=${glob.ui.jukebox_playlist}$`
   } else{
      //Need to be here for back-compatibility
      link_params += clrs_shuffled_seeds_fn.encode(['','','','']);
      //
      Object.keys(config_Url).map(function(uiVariable){
         const init_val = config_Url[uiVariable].init_val;
         link_params += config_Url[uiVariable].encode(init_val);
      });
   }
    link_params = link_params.slice(0, -1);
    return link_params;
}

function set_url_params(url_params) {
   //Need to be here for back-compatibility
   clrs_shuffled_seeds_fn.decode(url_params);
   ['seed1', 'seed2', 'seed3', 'seed4'].map(function(seed){delete url_params[seed]});
   //

   Object.keys(url_params).map(function(urlVariable){
      const uiVariable = fromUrlToUi[urlVariable];
      if(uiVariable)
         config_Url[uiVariable].decode(url_params[urlVariable]);
   });

   set_ui_variables(glob.ui);
   if (glob.ui.locus_type_4 !== 'none') {
      ui_changed("4", true, true);
   }
   if (glob.ui.locus_type_3 !== 'none') {
      ui_changed("3", true, true);
   }
   if (glob.ui.locus_type_2 !== 'none') {
      ui_changed("2", true, true);
   }
   if (glob.ui.locus_type_1 !== 'none') {
      ui_changed("1", true, true);
   }
   for (let i = 0; i < 4; i++)
      if (glob.clrs_shuffled_seeds[i].length > 0) {
         create_locus_subpolys(i);
         create_shuffled_clrs(i);
      };

   redraw();
}