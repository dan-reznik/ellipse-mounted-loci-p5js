var simplepolygon = require('simplepolygon')
// what I will export
module.exports = {simplepolygon:simplepolygon};
/* var poly = {
"type": "Feature",
 "geometry": {
   "type": "Polygon",
   "coordinates": [[[0,0],[2,0],[0,2],[2,2],[0,0]]]
 }
};
var result = simplepolygon(poly);
console.log(result); */
// browserify .\simple-polygon.js --standalone bundle > .\simple-polygon-b.js