var simplepolygon = require('simplepolygon')
// what I will export
module.exports = {simplepolygon:simplepolygon};

// browserify .\simple-polygon.js --standalone bundle > .\simple-polygon-b.js

/* var poly = {
"type": "Feature",
 "geometry": {
   "type": "Polygon",
   "coordinates": [[[0,0],[2,0],[0,2],[2,2],[0,0]]]
 }
};
var subpolys = simplepolygon(poly);
console.log(result);
*/

// subpolys = bundle.simplepolygon(poly)
//subpolys.features.map(f=>f.geometry.coordinates[0])