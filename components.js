var html = function(xn_number, trilins_selected, tri_selected){
    return `
<style>
    .component.xn_selector{
        border-style: solid;
        border-width: 1px;
        border-radius: 5px;
    }

    .component.xn_selector{
        display: flex; 
        flex-direction: column;
    }

    .input_Xn{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        margin-bottom: 2px;
    }

    .input_Xn.text{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        margin-bottom: 3px;
        justify-content: center;
    }
    .demo_Xn{
        border-style: solid;
        border-width: 1px;
        width: 32px;
        height: 20px;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 3px;
    }

    p{
        display: block;
        margin-top: auto;
        margin-bottom: auto;
    }

    select{
        display: inline-block;
        height: 20px;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 5px;
        margin-right: 5px;
    }

    #Locus_label{
        height: 25px;
        text-align: left;
        font-size: 18px;
    }

    label{
        margin-top: auto;
        margin-bottom: auto;
    }
    
    .sub_checkbox {
        display: inline-block;
        vertical-align: middle;
    }

    .subcheck_label{
        flex-grow: 1;
        margin: auto;
        justify-self: center;
    }

    label{
        display: inline-block;
        vertical-align: middle;
    }

    /*slider's*/

    /* The slider itself */
    .slider {
        -webkit-appearance: none;
        width: 98%;
        height: 5px;
        border-radius: 5px;  
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
        margin-top: auto;
        margin-bottom: auto;
    }

    /* Mouse-over effects */
    .slider:hover {
      opacity: 1; /* Fully shown on mouse-over */
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%; 
        background: black;
        cursor: pointer;
    }
      
    .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
    }

    .plus_minus {
        background: none !important;
        border:none;
        height: 100%;
        width: 30px;
        font-size: 17px;
    }

    .plus_minus:focus,
    .plus_minus:active {
        outline: none;
    }

    .slider_container{
        flex-grow: 1;
        height: auto:
    }

    #input_text{
        display: inline-flex;
    }

    .input_mounting{
        height: 100%;
    }

    .Bbox{
        flex-grow: 1;
        margin-right: 5px;
    };

</style>
<div class="component xn_selector">
    <div class="input_Xn">
        <div id='Locus_label'>
            <label for="checkbox_Xn`+xn_number+`"> Locus `+xn_number+`: </label>
            <select id="locus_type_`+xn_number+`">
                <option value="none">none</option>
                <option value="trilins" `+trilins_selected+`>tri ctr</option>
                <option value="brocard_1">Ω1</option>
                <option value="brocard_2">Ω2</option>
            </select>
         </div>
    </div>

    <div class="input_Xn text">
        <div id='input_text'>
            <button id="minus_Xn`+xn_number+`" class="plus_minus"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
            <input type="text" class = "demo_Xn" id="demo_Xn`+xn_number+`" value="1">
            <button id="plus_Xn`+xn_number+`" class="plus_minus"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
        </div>    
        <div class='slider_container'>
            <input type="range" min="1" max="200" value="1" class="slider" step="1" id="Xn`+xn_number+`">
        </div>
    </div>

    <div class="input_Xn">
        <label for="tri_type_`+xn_number+`"> Tri: </label>
        <select id="tri_type_`+xn_number+`" name="tri_type_`+xn_number+`">
        <option value="reference">*reference*</option>
        <option value="anticompl">anticompl</option>
        <option value="bci">bci</option>
        <option value="brocard1">1st brocard</option>
        <option value="brocard2">2nd brocard</option>
        <option value="brocard3">3rd brocard</option>
        <option value="brocard4">4th brocard</option>
        <option value="circummedial">circummedial</option>
        <option value="circummidarc">circummidarc</option>
        <option value="circumorthic">circumorthic</option>
        <option value="excentral">excentral</option>
        <option value="extouch">extouch</option>
        <option value="euler">euler</option>
        <option value="extangents">extangents</option>
        <option value="feuerbach">feuerbach</option>
        <option value="fuhrmann">fuhrmann</option>
        <option value="halfaltitude">half-altitude</option>
        <option value="incentral">incentral</option>
        <option value="innervecten">inner vecten</option>
        <option value="intangents">intangents</option>
        <option value="intouch">intouch</option>
        <option value="johnson">johnson</option>
        <option value="lemoine">lemoine</option>
        <option value="lucascentral">lucas central</option>
        <option value="macbeath">macbeath</option>
        <option value="medial">medial</option>
        <option value="mixtilinear">mixtilinear</option>
        <option value="morley1">1st morley</option>
        <option value="neuberg1">1st neuberg</option>
        <option value="neuberg2">2nd neuberg</option>  
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
        <div class="subcheck_label">
            <input class = "sub_checkbox" type="checkbox" id="draw_tri_`+xn_number+`" `+tri_selected+` name="draw_tri_`+xn_number+`">
            <label for="draw_tri_`+xn_number+`"> Draw</label>
        </div>
    </div>

    <div class="input_Xn">
        <label for="mounting_Xn`+xn_number+`"> Mount: </label>
        <div class="input_mounting">
            <select id="mounting_Xn`+xn_number+`" name="mounting_Xn`+xn_number+`">
                <option value="billiard">billiard</option>
                <option value="homothetic">homothetic</option>
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
                <option value="TL_BL">TL_BL</option>
                <option value="TL_TR">TL_TR</option>
                <option value="TL_vtxL">TL_vtxL</option>
                <option value="TL_vtxT">TL_vtxT</option>
                <option value="TL_vtxB">TL_vtxB</option>
                <option value="TL_ctr">TL_ctr</option>
                <option value="TL_BR">TL_BR</option>
            </select>
        </div>
        <button class='Bbox' id='Bbox_`+xn_number+`'>Bbox</button>
    </div>

</div>
`;
}

class MySelector extends HTMLElement {
    connectedCallback(){
        //const shadow = this.attachShadow({ mode: 'open'});
        //shadow.innerHTML = `
        const xn_number = this.getAttribute('number');
        const xn_selected = this.getAttribute('selected');
        var trilins_selected = ''
        var tri_selected = false
        if (xn_selected == 'true'){
            trilins_selected = 'selected="selected"';
            tri_selected = 'checked="checked"';
        } else{
            trilins_selected = '';
            tri_selected = '';
        }
        this.innerHTML = html(xn_number, trilins_selected, tri_selected);
    }
}
customElements.define('my-selector', MySelector)