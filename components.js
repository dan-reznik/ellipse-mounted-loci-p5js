var html = function(xn_number, trilins_selected, tri_selected, rgb_color, hex_color){
    return `
<div class="component xn_selector">
    <div class="input_Xn">
        <div style="display: inline-flex; margin-left: 0px;margin-right: 0px;">
            <label for="checkbox_Xn`+xn_number+`">ℒ<sub>`+xn_number+`</sub></label>
            <div class='locus_type'>
                <select id="locus_type_`+xn_number+`" name="checkbox_Xn`+xn_number+`">
                    <option value="none">off</option>
                    <option value="trilins" `+trilins_selected+`>xn</option>
                    <option value="vtx">v1</option>
                    <option value="vtx2">v2</option>
                    <option value="vtx3">v3</option>
                    <option value="env">env</option>
                    <option value="caustic">e12</option>
                    <option value="caustic23">e23</option>
                    <option value="caustic31">e31</option>
                    <option value="env1x">e1x</option>
                    <option value="env2x">e2x</option>
                    <option value="env3x">e3x</option>
                    <option value="brocard_1">Ω1</option>
                    <option value="brocard_2">Ω2</option>
                    <option value="beltrami_1">β1</option>
                    <option value="beltrami_2">β2</option>
                    <option value="moses_1">μ1</option>
                    <option value="moses_2">μ2</option>
                    <option value="bickart_1">σ1</option>
                    <option value="bickart_2">σ2</option>
                    <option value="ort">ort</option>`+
                    //<option value="f_trilins">Xn,fill</option>
                    //<option value="f_brocard_1">Ω1,fill</option>
                    //<option value="f_brocard_2">Ω2,fill</option>
                    //<option value="f_bickart_1">StF1,fill</option>
                    //<option value="f_bickart_2">StF2,fill</option>
                    //<option value="f_vtx">vtx,fill</option>+
                `</select>
            </div>
        </div>
        <div style="display: inline-flex;margin-left:1px;margin-right:1px;flex-grow=1;">
            <label for="mounting_Xn`+xn_number+`"> mnt</label>
            <div class="input_mounting">
                <select id="mounting_Xn`+xn_number+`" name="mounting_Xn`+xn_number+`">
                    <option value="billiard">*billiard*</option>
                    <option value="homothetic">*homoth*</option>
                    <option value="incircle">*incircle*</option>
                    <option value="dual">*dual*</option>
                    <option value="excentral">*excs*</option>
                    <option value="inellipse">*inellipse*</option>
                    <option value="poristic">*bicentric*</option>
                    <option value="brocard">*brocard*</option>
                    <option value="macbeath">*macbeath*</option>
                    <option value="circX1">*circ-X1*</option>
                    <option value="circX2">*circ-X2*</option>
                    <option value="circX4">*circ-X4*</option>
                    <option value="circX7">*circ-X7*</option>
                    <option value="circHalf">*circ-Half*</option>
                    <option value="circThird">*circ-Third*</option>
                    <option value="circFourth">*circ-Fourth*</option>
                    <option value="circEqui30">*circ-Equi30*</option>
                    <option value="circEqui60">*circ-Equi60*</option>`+
                    //needs to draw external ellipse as caustic assuming [a,1] of interface is its caustic
                    //<option value="excentral_affine">*exc-aff*</option>
                    `<option value="major">major</option>
                    <option value="minor">minor</option>
                    <option value="mixed">mixed</option>
                    <option value="ctrMajor">ctrMajor</option>
                    <option value="ctrMinor">ctrMinor</option>
                    <option value="fs">fs</option>
                    <option value="fsCtr">fsCtr</option>
                    <option value="fsLeft">fsLeft</option>
                    <option value="fsRight">fsRight</option>
                    <option value="fsTop">fsTop</option>
                    <option value="TL_BL">tl-bl</option>
                    <option value="TL_TR">tl-tr</option>
                    <option value="TL_vtxL">tl-l</option>
                    <option value="TL_vtxT">tl-t</option>
                    <option value="TL_vtxB">tl-b</option>
                    <option value="TL_ctr">tl-o</option>
                    <option value="TL_BR">tl-br</option>
                </select>
            </div>
        </div>
        <div style="display: inline-flex;margin-left:1px;margin-right:1px;">
            <div class="circ">
                <select id="circ`+xn_number+`">
                    <option value="off">circs off</option>
                    <option value="inv_ctr">*ctr*</option>
                    <option value="inv_f1">*f1*</option>
                    <option value="inv_f2">*f2*</option>
                    <option value="inv_f1c">*f1c*</option>
                    <option value="inv_f2c">*f2c*</option>`+
                    //<option value="crem_f1">*crem-f1*</option>
                    //<option value="crem_f2">*crem-f2*</option>
                    //<option value="crem_ctr">*crem-ctr*</option>
                    `<option value="adams">adams</option>
                    <option value="apollonius_outer">appoll out</option>
                    <option value="apollonius_isodyn1">apollon1</option>`+
                    //<option value="apollonius_isodyn2">apollon2</option>
                    //<option value="apollonius_isodyn3">apollon3</option>
                    `<option value="apollonius_isodyns">apolls123</option>
                    <option value="bevan">bevan</option>
                    <option value="bitangs_ext">btgCext123</option>
                    <option value="bitangs_int">btgCint123</option>
                    <option value="bitangs_inc_ext">btgIext123</option>
                    <option value="bitangs_inc_int">btgIint123</option>
                    <option value="brocard">brocard</option>
                    <option value="brocard2">brocard2</option>
                    <option value="brocards">brocards123</option>
                    <option value="circum">circum</option>
                    <option value="conway">conway</option>
                    <option value="cosine">cosine</option>
                    <option value="cosine_exc">cos. exc</option>
                    <option value="ehrmann">ehrmann</option>
                    <option value="excircle1">excircle1</option>`+
                    // <option value="excircle2">excircle2</option>
                    //<option value="excircle3">excircle3</option>
                    `<option value="excircles">excircs123</option>
                    <option value="euler">euler</option>
                    <option value="fuhrmann">furhmann</option>
                    <option value="gallatly">gallatly</option>
                    <option value="gheorghe">gheorghe</option>
                    <option value="incircle">incircle</option>
                    <option value="inc_cir_eul">inc,cir,eul</option>
                    <option value="johnson1">johnson1</option>
                    <option value="johnsons">johnson123</option>
                    <option value="lemoine">lemoine</option>
                    <option value="lemoines">lemoines123</option>
                    <option value="lester">lester</option>
                    <option value="mandart">mandart</option>
                    <option value="midarc1">midarc1</option>
                    <option value="midarcs">midarcs123</option>
                    <option value="mixtilinear1">mixtilin1</option>`+
                    //<option value="mixtilinear2">mixtilin2</option>
                    //<option value="mixtilinear3">mixtilin3</option>
                    `<option value="mixtilinears">mixtilins123</option>
                    <option value="mixtilinear_apollonius_inner">mixt inner</option>
                    <option value="mixtilinear1_exc">mxt.exc1</option>`+
                    //<option value="mixtilinear2_exc">mxt.exc2</option>
                    //<option value="mixtilinear3_exc">mxt.exc3</option>
                    `<option value="mixtilinear_excs">mxt.excs123</option>
                    <option value="mixtilinear_exc_apollonius_outer">mixt.exc outer</option>
                    <option value="moses">moses</option>
                    <option value="moses_radical">moses rad</option>
                    <option value="neuberg1">neuberg1</option>`+
                    //<option value="neuberg2">neuberg2</option>
                    //<option value="neuberg3">neuberg3</option>
                    `<option value="neubergs">neubs.123</option>
                    <option value="neuberg1r">neuberg1r</option>`+
                    //<option value="neuberg2r">neuberg2r</option>
                    //<option value="neuberg3r">neuberg3r</option>
                    `<option value="neuberg_refls">neubs.123r</option>
                    <option value="parry">parry</option>
                    <option value="poincs">poincs123</option>
                    <option value="polar">polar</option>
                    <option value="power1">power1</option>
                    <option value="powers">powers123</option>
                    <option value="reflection">reflection</option>
                    <option value="schoutte">schoutte</option>
                    <option value="spieker">spieker</option>
                    <option value="tangent1">tangent1</option>
                    <option value="tangents">tangents123</option>
                    <option value="taylor">taylor</option>
                </select>
            </div>
        </div>

        <div class='inv'>
                <select id="inv`+xn_number+`">
                    <option value="off">inv off</option>
                    <option value="ref">inv ref</option>
                    <option value="xn">inv xn</option>
                    <option value="tri">inv tri</option>
                    <option value="polar">pol tri</option>`+
                    // more generic but more complex to implement
                    //<option value="poinc">poinc</option>
                    `<option value="polar_sides">pol sd</option>
                    <option value="crem_xn">cre xn</option>
                    <option value="crem_tri">cre tri</option>
                </select>
        </div>
    </div>

    <div class="input_Xn">
            <div id='input_text'>
                <button id="minus_Xn`+xn_number+`" class="plus_minus minus"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
                <input type="text" class = "demo_Xn" id="demo_Xn`+xn_number+`" value="1">
                <button id="plus_Xn`+xn_number+`" class="plus_minus plus"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
            </div>    
            <div class='slider_container'>
                <input type="range" min="1" max="1000" value="1" class="slider" step="1" id="Xn`+xn_number+`">
            </div>
            <div style="display: flex; justify-content: center; align-items: center;">
              <label for="clr`+xn_number+`"></label>
              <input id='clr`+xn_number+`' class='bg' name="clr`+xn_number+`" type="color" value="`+hex_color+`"></input>
            </div>
            <input type="image" id="pallete_`+xn_number+`" style="margin-right:2px;margin-left:2px;height:20px;width:20px;" src="pallete.png"/>
            <div style='display: inline-flex;margin-left:2px;margin-right:2px;flex-grow:1'>
                <button class='small_button' id='Bbox_`+xn_number+`'>bbox</button>
            </div>
    </div>

    <div class="input_Xn">
        <div style='margin-left: 0px;margin-right:0px;'>
            <label for="draw_tri_`+xn_number+`">tri</label>
            <input class = "sub_checkbox" type="checkbox" id="draw_tri_`+xn_number+`" `+tri_selected+` name="draw_tri_`+xn_number+`">
        </div>
        <select class='tri_type' id="tri_type_`+xn_number+`" name="tri_type_`+xn_number+`">
            <option value="reference">*reference*</option>
            <option value="anticompl">anticompl</option>
            <option value="bci">bci</option>
            <option value="brocard1">brocard 1</option>
            <option value="brocard2">brocard 2</option>
            <option value="brocard3">brocard 3</option>
            <option value="brocard4">brocard 4</option>
            <option value="brocard5">brocard 5</option>
            <option value="brocard6">brocard 6</option>
            <option value="brocard7">brocard 7</option>
            <option value="circummedial">circummedial</option>
            <option value="circumorthic">circumorthic</option>
            <option value="circummidarc">circummidarc</option>
            <option value="excentral">excentral</option>
            <option value="extouch">extouch</option>
            <option value="extouch2">extouch 2nd</option>
            <option value="ext_outer1">ext out 1</option>
            <option value="ext_outer2">ext out 2</option>
            <option value="ext_outer3">ext out 3</option>
            <option value="euler">euler</option>
            <option value="extangents">extangents</option>
            <option value="feuerbach">feuerbach</option>
            <option value="flank1">flank 1</option>
            <option value="flank2">flank 2</option>
            <option value="flank3">flank 3</option>
            <option value="fuhrmann">fuhrmann</option>
            <option value="graves">graves</option>
            <option value="halfaltitude">half-altitude</option>
            <option value="hexyl">hexyl</option>
            <option value="incentral">incentral</option>
            <option value="innervecten">inner vecten</option>
            <option value="intangents">intangents</option>
            <option value="intouch">intouch</option>
            <option value="johnson">johnson</option>
            <option value="lemoine">lemoine</option>
            <option value="lucascentral">lucas central</option>
            <option value="lucasinner">lucas inner</option>
            <option value="lucastangents">lucas tangs</option>
            <option value="macbeath">macbeath</option>
            <option value="medial">medial</option>
            <option value="midarc">midarc</option>
            <option value="midarc_circs">midarc.circs</option>
            <option value="mixtilinear">mixtilinear</option>
            <option value="mixtilinear2">mixtil 2nd</option>
            <option value="mixtilinear3">mixtil 3rd</option>
            <option value="mixtilinear4">mixtil 4th</option>
            <option value="mixtilinear8">mixtil 8th</option>
            <option value="mixtilinear9">mixtil 9th</option>
            <option value="morley1">morley 1st</option>
            <option value="morley2">morley 2nd</option>
            <option value="morley3">morley 3rd</option>
            <option value="morley_adj1">morley adj1</option>
            <option value="morley_adj2">morley adj2</option>
            <option value="morley_adj3">morley adj3</option>
            <option value="neuberg1">neuberg 1</option>
            <option value="neuberg2">neuberg 2</option>  
            <option value="orthic">orthic</option>
            <option value="outervecten">outer vecten</option>
            <option value="poinc">poincaré</option>
            <option value="pol_out">polar</option>
            <option value="reflection">reflection</option>
            <option value="steiner">steiner</option>
            <option value="symmedial">symmedial</option>
            <option value="tangential">tangential</option>
            <option value="tangentialmidarc">tang'l midarc</option>
            <option value="yffcentral">yff central</option>
            <option value="yffcontact">yff contact</option>
            <option value="andromeda">.andromeda</option>
            <option value="antlia">.antlia</option>
            <option value="apollonius">.apollonius</option>
            <option value="apus">.apus</option>
            <option value="atik">.atik</option>
            <option value="ayme">.ayme</option>
            <option value="bevan_antipodal">.bevan-anti</option>
            <option value="bitang_ext">.btgCext</option>
            <option value="bitang_ext_cont">.btgCextT</option>
            <option value="bitang_int">.btgCint</option>
            <option value="bitang_int_cont">.btgCintT</option>
            <option value="bitang_inc_ext">.btgIext</option>
            <option value="bitang_inc_ext_cont">.btgIextT</option>
            <option value="bitang_inc_int">.btgIint</option>
            <option value="bitang_inc_int_cont">.btgIintT</option>
            <option value="circumperp1">.circperp1</option>
            <option value="circumperp2">.circperp2</option>
            <option value="exc_inc_refl">.exc-inc-refl</option>
            <option value="exc_midpoint">.exc-midpt</option>
            <option value="honsberger">.honsberger</option>
            <option value="inv_exc">.inv-exc</option>
            <option value="inv_inc">.inv-inc</option>
            <option value="kosnita">.kosnita</option>
            <option value="mandart_exc">.mndrt-exc</option>
            <option value="mandart_inc">.mndrt-inc</option>
            <option value="ursa_major">.ursa-major</option>
            <option value="ursa_minor">.ursa-minor</option>
            <option value="inv_ctr">*inv-ctr*</option>
            <option value="inv_f1">*inv-f1*</option>
            <option value="inv_f2">*inv-f2*</option>
            <option value="inv_f1c">*inv-f1c*</option>
            <option value="inv_f2c">*inv-f2c*</option>
            <option value="pol_ctr">*pol-ctr*</option>
            <option value="pol_f1">*pol-f1*</option>
            <option value="pol_f2">*pol-f2*</option>
            <option value="pol_f1c">*pol-f1c*</option>
            <option value="pol_f2c">*pol-f2c*</option>
            <option value="ped_ctr">*ped-ctr*</option>
            <option value="ped_f1">*ped-f1*</option>
            <option value="ped_f2">*ped-f2*</option>
            <option value="ped_f1c">*ped-f1c*</option>
            <option value="ped_f2c">*ped-f2c*</option>
            <option value="antiped_ctr">*antiped-ctr*</option>
            <option value="antiped_f1">*antiped-f1*</option>
            <option value="antiped_f2">*antiped-f2*</option>
            <option value="antiped_f1c">*antiped-f1c*</option>
            <option value="antiped_f2c">*antiped-f2c*</option>
            <option value="ellcev_ctr">*ellcev-ctr*</option>
            <option value="ellcev_f1">*ellcev-f1*</option>
            <option value="ellcev_f1c">*ellcev-f1c*</option>
            <option value="ped_lim2">*ped-lim2*</option>
            <option value="ints_f12">*ints-f12*</option>
            <option value="ints_f12c">*ints-f12c*</option>
            <option value="x3_map_ctr">*x3map-ctr*</option>
            <option value="x3_map_f1">*x3map-f1*</option>
            <option value="x3_map_f1c">*x3map-f1c*</option>
            <option value="x3_inv_ctr">*x3inv-ctr*</option>
            <option value="x3_inv_f1">*x3inv-f1*</option>
            <option value="x3_inv_f1c">*x3inv-f1c*</option>
            <option value="crem_ctr">*crem-ctr*</option>
            <option value="crem_f1">*crem-f1*</option>
            <option value="crem_f2">*crem-f2*</option>
            <option value="inf_x">*inf-x*</option>
            <option value="inf_y">*inf-y*</option>
            <option value="inf_x2">*inf-x2*</option>
            <option value="inf_y2">*inf-y2*</option>
        </select>
        
        <select class='cpn' id="cpn_`+xn_number+`" name="cpn_`+xn_number+`">
            <option value="off">pn off</option>
            <option value="cevian">cevian</option>
            <option value="anticevian">anticev</option>
            <option value="circumcevian">circumcev</option>
            <option value="circumsimson">ccev-simson</option>
            <option value="ellcevian">ell-cev</option>
            <option value="caucevian">cau-cev</option>
            <option value="pedal">pedal</option>
            <option value="antipedal">antipedal</option>
            <option value="tripolar">trilin-polar</option>
            <option value="invert">invert</option>
            <option value="polar">polar</option>
            <option value="polar_exc">polar-exc</option>
            <option value="inv_exc">inv-excircs</option>
            <option value="three_ctrs">3-circums</option>
            <option value="vtx_refl">vtx-refl</option>
            <option value="side_refl">side-refl</option>
            <option value="flank">flank</option>
            <option value="subcevian1">subcevian</option>
            <option value="subanticev1">subanticev</option>
            <option value="subpedal1">subpedal</option>
            <option value="subantiped1">subantiped</option>
            <option value="extouch_outer">extouch</option>
            <option value="x3_inv">x3-inv</option>
            <option value="x1_map">x1-map</option>
            <option value="x2_map">x2-map</option>
            <option value="x3_map">x3-map</option>
            <option value="x4_map">x4-map</option>
            <option value="x5_map">x5-map</option>
            <option value="x6_map">x6-map</option>
            <option value="x7_map">x7-map</option>
            <option value="x8_map">x8-map</option>
            <option value="x9_map">x9-map</option>
            <option value="x10_map">x10-map</option>
            <option value="x11_map">x11-map</option>
            <option value="x1_subcevian">x1-subcev</option>
            <option value="x2_subcevian">x2-subcev</option>
            <option value="x6_subcevian">x6-subcev</option>
            <option value="x7_subcevian">x7-subcev</option>
            <option value="x8_subcevian">x8-subcev</option>
            <option value="x9_subcevian">x9-subcev</option>
            <option value="x10_subcevian">x10-subcev</option>
            <option value="x11_subcevian">x11-subcev</option>
            <option value="x1_subanticev">x1-subanticev</option>
            <option value="x2_subanticev">x2-subanticev</option>
            <option value="x6_subanticev">x6-subanticev</option>
            <option value="x7_subanticev">x7-subanticev</option>
            <option value="x8_subanticev">x8-subanticev</option>
            <option value="x9_subanticev">x9-subanticev</option>
            <option value="x10_subanticev">x10-subanticev</option>
            <option value="x11_subanticev">x11-subanticev</option>
            </select>

        <div class='P_input_text'>
            <button id="minus_Pn`+xn_number+`" class="plus_minus minus"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
            <input type="text" class = "demo_Pn" id="demo_Pn`+xn_number+`" value="1">
            <button id="plus_Pn`+xn_number+`" class="plus_minus plus"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
        </div>
        <div id='conic_type'>
                <p id='conic_type_`+xn_number+`' style="margin: auto"></p>
        </div>

    </div>
</div>
`;
}

//Function to convert hex format to a rgb color
function rgb2hex(orig){
    var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    return (rgb && rgb.length === 4) ? "#" +
     ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
     ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
}

class MySelector extends HTMLElement {
    connectedCallback(){
        //const shadow = this.attachShadow({ mode: 'open'});
        //shadow.innerHTML = `
        const xn_number = this.getAttribute('number');
        const xn_selected = this.getAttribute('selected');
        const rgb_color = this.getAttribute('color');
        const hex_color = rgb2hex(rgb_color);
        var trilins_selected = ''
        var tri_selected = false
        if (xn_selected == 'true'){
            trilins_selected = 'selected="selected"';
            tri_selected = 'checked="checked"';
        } else{
            trilins_selected = '';
            tri_selected = '';
        }
        this.innerHTML = html(xn_number, trilins_selected, tri_selected, rgb_color, hex_color);
    }
}
customElements.define('my-selector', MySelector)