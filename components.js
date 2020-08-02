var html = function(xn_number){
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

    .input_Xn.first{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: auto;
        margin-top: 5x;
    }

    .input_Xn.first p:first-of-type{
        width: 80px;
    }

    p{
        display: block;
        margin-top: auto;
        margin-bottom: auto;
    }

    .input_mounting{
        display: block;
        height: 80%;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 5px;
        margin-right: 5px;
    }

    .checkbox {
        zoom: 1.5;
        margin-top: auto;
        margin-bottom: auto;
    }

    #sub-check{
        display: flex;
        flex-direction: column;
        font-size: 12px;
        width: fit-content;
        margin-top: auto;
        margin-bottom: auto;
    }

    #sub-check>*{
        margin-top: auto;
        margin-bottom: auto;
    }

    /*slider's*/
    .input_Xn.second{
        display: block;
        height: 25px;
    }
    .slidecontainer {
        width: 100%; /* Width of the outside container */
        height: 85%;
    }

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
        width: 20px;
        height: 20px;
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

</style>
<div class="component xn_selector">
  <div class="input_Xn first">
    <p>Xn`+xn_number+`<input type="checkbox" class="checkbox" id="checkbox_Xn`+xn_number+`" checked=true>: <span id="demo_Xn`+xn_number+`"></span></p>
    <select id="input_mounting_Xn`+xn_number+`" class="input_mounting">
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
    <div id="sub-check">
      <div class="subcheck_label">
        <input type="checkbox" id="brocard_Xn`+xn_number+`" name="brocard_Xn`+xn_number+`">
        <label for="brocard_Xn`+xn_number+`"> Brocard</label>
      </div>
      <div class="subcheck_label">
        <input type="checkbox" id="mounting_Xn`+xn_number+`" checked=true name="mounting_Xn`+xn_number+`">
        <label for="mounting_Xn`+xn_number+`"> Draw Tri</label>
      </div>    
    </div>
  </div>

  <div class="input_Xn second">
    <input type="range" min="1" max="200" value="1" class="slider" step="1" id="input_Xn`+xn_number+`">
  </div>
    <script>show_slider_output_value("input_Xn`+xn_number+`","demo_Xn`+xn_number+`")</script>
</div>
`;
}

class MySelector extends HTMLElement {
    connectedCallback(){
        //const shadow = this.attachShadow({ mode: 'open'});
        //shadow.innerHTML = `
        const xn_number = this.getAttribute('number');
        this.innerHTML = html(xn_number);
    }
}
customElements.define('my-selector', MySelector)