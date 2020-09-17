var html = function(xn_number, trilins_selected, tri_selected, rgb_color, hex_color){
    return `
<div class="component xn_selector">
    <div class="input_Xn">
        <div style="display: inline-flex;">
            <label for="checkbox_Xn`+xn_number+`" style="color: `+rgb_color+`;"> loc`+xn_number+`</label>
            <select id="locus_type_`+xn_number+`" name="checkbox_Xn`+xn_number+`">
                <option value="none">off</option>
                <option value="trilins" `+trilins_selected+`>Xn</option>
                <option value="brocard_1">Ω1</option>
                <option value="brocard_2">Ω2</option>
                <option value="bickart_1">StF1</option>
                <option value="bickart_2">StF2</option>
                <option value="vtx">vtx</option>
                <option value="f_trilins">Xn,fill</option>
                <option value="f_brocard_1">Ω1,fill</option>
                <option value="f_brocard_2">Ω2,fill</option>
                <option value="f_bickart_1">StF1,fill</option>
                <option value="f_bickart_2">StF2,fill</option>
                <option value="f_vtx">vtx,fill</option>
            </select>
        </div>
        <div style="display: inline-flex;">
            <label for="mounting_Xn`+xn_number+`"> mnt</label>
            <div class="input_mounting"">
                <select id="mounting_Xn`+xn_number+`" name="mounting_Xn`+xn_number+`">
                    <option value="billiard">*billiard*</option>
                    <option value="homothetic">*homoth*</option>
                    <option value="incircle">*incircle*</option>
                    <option value="inellipse">*inellipse*</option>
                    <option value="dual">*dual*</option>
                    <option value="poristic">*poristic*</option>
                    <option value="brocard">*brocard*</option>
                    <option value="major">major</option>
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
            <div style="display: flex; justify-content: center; align-items: center;">
              <label for="clr`+xn_number+`"></label>
              <input id='clr`+xn_number+`' class='bg' name="clr`+xn_number+`" type="color" value="`+hex_color+`"></input>
            </div>
        </div>
    </div>

    <div class="input_Xn text">
        <div id='input_text'>
            <button id="minus_Xn`+xn_number+`" class="plus_minus"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
            <input type="text" class = "demo_Xn" id="demo_Xn`+xn_number+`" value="1">
            <button id="plus_Xn`+xn_number+`" class="plus_minus"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
        </div>    
        <div class='slider_container'>
            <input type="range" min="1" max="1000" value="1" class="slider" step="1" id="Xn`+xn_number+`">
        </div>
    </div>

    <div class="input_Xn">
        <div>
            <label for="draw_tri_`+xn_number+`">tri</label>
            <input class = "sub_checkbox" type="checkbox" id="draw_tri_`+xn_number+`" `+tri_selected+` name="draw_tri_`+xn_number+`">
        </div>
        <select id="tri_type_`+xn_number+`" name="tri_type_`+xn_number+`">
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
        <option value="excentral">excentral</option>
        <option value="extouch">extouch</option>
        <option value="euler">euler</option>
        <option value="extangents">extangents</option>
        <option value="feuerbach">feuerbach</option>
        <option value="fuhrmann">fuhrmann</option>
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
        <option value="mixtilinear">mixtilinear</option>
        <option value="morley1">morley adj 1</option>
        <option value="morley2">morley adj 2</option>
        <option value="morley3">morley adj 3</option>
        <option value="neuberg1">neuberg 1</option>
        <option value="neuberg2">neuberg 2</option>  
        <option value="orthic">orthic</option>
        <option value="outervecten">outer vecten</option>
        <option value="reflection">reflection</option>
        <option value="steiner">steiner</option>
        <option value="symmedial">symmedial</option>
        <option value="tangential">tangential</option>
        <option value="tangentialmidarc">tang'l midarc</option>
        <option value="yffcentral">yff central</option>
        <option value="yffcontact">yff contact</option>  
        </select>
        <div style='display: inline-flex; flex-grow: 1;'>
            <input type="image" id="pallete_`+xn_number+`" style="margin-left:2px;height:20px;width:20px;" src="pallete.png"/>
            <button class='Bbox' id='Bbox_`+xn_number+`'>bbox</button>
            <div id='conic_type'>
                <p id='conic_type_`+xn_number+`'></p>
            </div>
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