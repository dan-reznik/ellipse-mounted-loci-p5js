var html = function(xn_number, trilins_selected, tri_selected){
    return `
<style>
    .component.xn_selector{
        border-style: solid;
        border-width: 1px;
        border-radius: 5px;
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

    .component.xn_selector{
        display: flex; 
        flex-direction: column;
    }

    .input_Xn{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
    }

    p{
        display: block;
        margin-top: auto;
        margin-bottom: auto;
    }

    .input_mounting{
        display: block;
        height: 40%;
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
    
    .sub_checkbox {
        display: inline-block;
        vertical-align: middle;
    }

    .subcheck_label{
        margin-top: 7px;
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

    button {
        display: inline-block;
        background: none !important;
        border:none;
        height: 100%;
        width: 50px;
        font-size: 17px;
    }

    button:focus,
    button:active {
        outline: none;
    }

</style>
<div class="component xn_selector">
    <div class="input_Xn">
        <div id='Locus_label'>
            <label for="checkbox_Xn`+xn_number+`"> Locus `+xn_number+`: </label>
            <select id="input_locus_type_`+xn_number+`">
                <option value="none">none</option>
                <option value="trilins" `+trilins_selected+`>tri ctr</option>
                <option value="brocard_1">Ω1</option>
                <option value="brocard_2">Ω2</option>
            </select>
         </div>
    </div>

    <div class="input_Xn">
        <input type="text" class = "demo_Xn" id="demo_Xn`+xn_number+`" value="1">
        <button id="minus_Xn`+xn_number+`"><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
        <input type="range" min="1" max="200" value="1" class="slider" step="1" id="input_Xn`+xn_number+`">
        <button id="plus_Xn`+xn_number+`"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
    </div>

    <div class="input_Xn">
        <label for="input_tri`+xn_number+`"> Tri: </label>
        <select id="input_tri" name="input_tri">
            <option value="referencia">referencia</option>
            <option value="medial">medial</option>
            <option value="anticompl">anticompl</option>
            <option value="excentral">excentral</option>
            <option value="ortico">ortico</option>
            <option value="intouch">intouch</option>
            <option value="extouch">extouch</option>
        </select>
        <div class="subcheck_label">
            <input class = "sub_checkbox" type="checkbox" id="mounting_Xn`+xn_number+`" `+tri_selected+` name="mounting_Xn`+xn_number+`">
            <label for="mounting_Xn`+xn_number+`"> Draw</label>
        </div>
    </div>

    <div class="input_Xn">
        <label for="input_mounting_Xn`+xn_number+`"> Mount: </label>
        <select id="input_mounting_Xn`+xn_number+`" class="input_mounting" name="input_mounting_Xn`+xn_number+`">
            <option value="billiard">billiard</option>
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
            <option value="cornerTL_BL">cornerTL_BL</option>
            <option value="cornerTL_TR">cornerTL_TR</option>
            <option value="cornerTL_vtxL">cornerTL_vtxL</option>
            <option value="cornerTL_vtxT">cornerTL_vtxT</option>
            <option value="cornerTL_vtxB">cornerTL_vtxB</option>
            <option value="cornerTL_ctr">cornerTL_ctr</option>
            <option value="cornerTL_BR">cornerTL_BR</option>
        </select>
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