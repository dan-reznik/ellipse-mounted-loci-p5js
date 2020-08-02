function trilin_brocard1(orbit, [a, b, c]) {
   let tris = [c/b,a/c,b/a];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_brocard2(orbit, [a, b, c]) {
   let tris = [b/c,c/a,a/b];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}