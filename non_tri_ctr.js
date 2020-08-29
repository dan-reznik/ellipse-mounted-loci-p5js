/*
function trilin_brocard1(orbit, [a, b, c]) {
   let tris = [c/b,a/c,b/a];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_brocard2(orbit, [a, b, c]) {
   let tris = [b/c,c/a,a/b];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}
*/

// tri is ignored but needs to be compatible with bary_Xnnn

function bary_brocard1(tri,[a,b,c]) {
   return [(a*c)**2,(a*b)**2,(b*c)**2];
}

function bary_brocard2(tri,[a,b,c]) {
   return [(a*b)**2,(b*c)**2,(a*c)**2];
}