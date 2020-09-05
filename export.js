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

function exportToJsonFile(jsonData) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
 
    let double_digit = function (myNumber) { return ("0" + myNumber).slice(-2) }
    var today = new Date();
    var date_time = double_digit(today.getDate().toString()) + double_digit((today.getMonth() + 1).toString()) +
    today.getFullYear().toString() + '_' + double_digit(today.getHours().toString()) +
    double_digit(today.getMinutes().toString()) + double_digit(today.getSeconds().toString());
    let exportFileDefaultName = 'locus_json_' + date_time + '.json';
 
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}
