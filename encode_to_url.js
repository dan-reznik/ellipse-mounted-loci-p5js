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

function scale_fn(){
    var configToUrl = ''; 
    if (glob.scale !== glob.scale0){
        configToUrl = fromUiToUrl['scale'] + '=' + glob.scale.toFixed(3) + '&'; 
    }
    return configToUrl;
}

function ctr0_fn(){
    var configToUrl = ''; 
    const CTR0_STANDARD_VALUE = glob.width / 2;
    if (glob.ctr[0] !== CTR0_STANDARD_VALUE){
        configToUrl = fromUiToUrl['ctr0'] + '=' + glob.ctr[0].toFixed(0) + '&'; 
    }
    return configToUrl;
}

function ctr1_fn(){
    var configToUrl = ''; 
    const CTR1_STANDARD_VALUE = glob.height / 2;
    if (glob.ctr[1] !== CTR1_STANDARD_VALUE){
        configToUrl = fromUiToUrl['ctr1'] + '=' + glob.ctr[1].toFixed(0) + '&'; 
    }
    return configToUrl;
}

function animStep0_fn(){
    var configToUrl = ''; 
    const animStep0_to_url_value = {
        "0.125": 'slow', "0.500": 'med', "1.000": 'fast'
    }
    if (glob.ui.animStep0 !== glob.ui0.animStep0){
        configToUrl = fromUiToUrl['animStep0'] + '=' + animStep0_to_url_value[abs(glob.ui.animStep0).toFixed(3)] + '&';
    }
    return configToUrl;
}

function a_speed_fn(){
    var configToUrl = ''; 
    const a_speed_to_url_value = {
        "0.000": 'off', "0.005": 'slow', "0.010": 'med', "0.050": 'fast'
    }
    if (glob.ui.a_speed !== glob.ui0.a_speed){
        configToUrl = fromUiToUrl['a_speed'] + '=' + a_speed_to_url_value[abs(glob.ui['a_speed']).toFixed(3)] + '&';
    }
    return configToUrl;
}


function getVariablesHaveColorBehavior(key){
    var configToUrl = ''
    for (i in [...Array(glob.ui[key].length).keys()]) {
       if (glob.ui0[key][i] !== glob.ui[key][i]) {
          configToUrl = fromUiToUrl[key] + '=' + rgbToHex(glob.ui[key]).slice(1) + '&';
          break;
       }
    }
    return configToUrl;
}

function clr1_fn(){return getVariablesHaveColorBehavior('clr1')}
function clr2_fn(){return getVariablesHaveColorBehavior('clr2')}
function clr3_fn(){return getVariablesHaveColorBehavior('clr3')}
function clr4_fn(){return getVariablesHaveColorBehavior('clr4')}
function bg_fn(){return getVariablesHaveColorBehavior('bg')}
function clr_fill_border_fn(){return getVariablesHaveColorBehavior('clr_fill_border')}

function a_fn(){
    var configToUrl = ''
    if (glob.ui.a !== glob.ui0.a) {
        configToUrl = fromUiToUrl['a'] + '=' + (+glob.ui['a']).toFixed(3) + '&';
    }
    return configToUrl;
}

function getConfigFromVariablesDefault(key){
    var configToUrl = ''
    if (glob.ui[key] !== glob.ui0[key]) {
        configToUrl = fromUiToUrl[key] + '=' + glob.ui[key] + '&';
    }
    return configToUrl;
}

function clrs_shuffled_seeds_fn() {
    const clrs_shuffled_seeds = glob.clrs_shuffled_seeds;
    var configToUrl = '';
    for (var i = 0; i < clrs_shuffled_seeds.length; i++) {
       if (clrs_shuffled_seeds[i].length > 0) {
          configToUrl += 'seed' + (i + 1) + '=' + (+clrs_shuffled_seeds[i].last()).toString(16) + '&';
       }
    }
    return configToUrl;
}

function a_min_fn(){return getConfigFromVariablesDefault('a_min')};
function a_max_fn(){return getConfigFromVariablesDefault('a_max')};
function ell_fn(){return getConfigFromVariablesDefault('ell')};
function locus_type_1_fn(){return getConfigFromVariablesDefault('locus_type_1')};
function locus_type_2_fn(){return getConfigFromVariablesDefault('locus_type_2')};
function locus_type_3_fn(){return getConfigFromVariablesDefault('locus_type_3')};
function locus_type_4_fn(){return getConfigFromVariablesDefault('locus_type_4')};
function Xn1_fn(){return getConfigFromVariablesDefault('Xn1')};
function Xn2_fn(){return getConfigFromVariablesDefault('Xn2')};
function Xn3_fn(){return getConfigFromVariablesDefault('Xn3')};
function Xn4_fn(){return getConfigFromVariablesDefault('Xn4')};
function Pn1_fn(){return getConfigFromVariablesDefault('Pn1')};
function Pn2_fn(){return getConfigFromVariablesDefault('Pn2')};
function Pn3_fn(){return getConfigFromVariablesDefault('Pn3')};
function Pn4_fn(){return getConfigFromVariablesDefault('Pn4')};
function tri_type_1_fn(){return getConfigFromVariablesDefault('tri_type_1')};
function tri_type_2_fn(){return getConfigFromVariablesDefault('tri_type_2')};
function tri_type_3_fn(){return getConfigFromVariablesDefault('tri_type_3')};
function tri_type_4_fn(){return getConfigFromVariablesDefault('tri_type_4')};
function draw_tri_1_fn(){return getConfigFromVariablesDefault('draw_tri_1')};
function draw_tri_2_fn(){return getConfigFromVariablesDefault('draw_tri_2')};
function draw_tri_3_fn(){return getConfigFromVariablesDefault('draw_tri_3')};
function draw_tri_4_fn(){return getConfigFromVariablesDefault('draw_tri_4')};
function mounting_Xn1_fn(){return getConfigFromVariablesDefault('mounting_Xn1')};
function mounting_Xn2_fn(){return getConfigFromVariablesDefault('mounting_Xn2')};
function mounting_Xn3_fn(){return getConfigFromVariablesDefault('mounting_Xn3')};
function mounting_Xn4_fn(){return getConfigFromVariablesDefault('mounting_Xn4')};
function rot_fn(){return getConfigFromVariablesDefault('rot')};
function rmax_fn(){return getConfigFromVariablesDefault('rmax')};
function jukebox_playlist_fn(){return getConfigFromVariablesDefault('jukebox_playlist')};
function fill_alpha_fn(){return getConfigFromVariablesDefault('fill_alpha')};
function inv1_fn(){return getConfigFromVariablesDefault('inv1')};
function inv2_fn(){return getConfigFromVariablesDefault('inv2')};
function inv3_fn(){return getConfigFromVariablesDefault('inv3')};
function inv4_fn(){return getConfigFromVariablesDefault('inv4')};
function circ1_fn(){return getConfigFromVariablesDefault('circ1')};
function circ2_fn(){return getConfigFromVariablesDefault('circ2')};
function circ3_fn(){return getConfigFromVariablesDefault('circ3')};
function circ4_fn(){return getConfigFromVariablesDefault('circ3')};

const get_config_url_equation = {
    scale: scale_fn,
    ctr0: ctr0_fn,
    ctr1: ctr1_fn,
    
    animStep0: animStep0_fn,
    
    a_speed: a_speed_fn,
    
    clr1: clr1_fn,
    clr2: clr2_fn,
    clr3: clr3_fn,
    clr4: clr4_fn,
    bg: bg_fn,
    a: a_fn,
    clr_fill_border: clr_fill_border_fn,
    
    a_min: a_min_fn, a_max: a_max_fn, 
    ell: ell_fn,
    locus_type_1: locus_type_1_fn, locus_type_2: locus_type_2_fn , locus_type_3: locus_type_3_fn , locus_type_4: locus_type_4_fn,
    Xn1: Xn1_fn , Xn2: Xn2_fn , Xn3: Xn3_fn , Xn4: Xn4_fn, 
    Pn1: Pn1_fn , Pn2: Pn2_fn , Pn3: Pn3_fn , Pn4: Pn4_fn ,
    tri_type_1: tri_type_1_fn , tri_type_2: tri_type_2_fn , tri_type_3: tri_type_3_fn , tri_type_4: tri_type_4_fn ,
    draw_tri_1: draw_tri_1_fn , draw_tri_2: draw_tri_2_fn , draw_tri_3: draw_tri_3_fn , draw_tri_4: draw_tri_4_fn ,
    mounting_Xn1: mounting_Xn1_fn , mounting_Xn2: mounting_Xn2_fn , mounting_Xn3: mounting_Xn3_fn , mounting_Xn4: mounting_Xn4_fn ,
    rot: rot_fn, 
    rmax: rmax_fn,
    jukebox_playlist: jukebox_playlist_fn ,
    fill_alpha: fill_alpha_fn , inv1: inv1_fn,inv2: inv2_fn,inv3: inv3_fn,inv4: inv4_fn,
    circ1: circ1_fn,circ2: circ2_fn,circ3: circ3_fn,circ4: circ4_fn,
    
    clrs_shuffled_seeds: clrs_shuffled_seeds_fn
}

function get_link_params() {
    var link_params = location.host + location.pathname + '?';
    Object.keys(get_config_url_equation).map(function(variable_to_encode){
        link_params += get_config_url_equation[variable_to_encode]();
    });

    link_params = link_params.slice(0, -1);
    return link_params;
}