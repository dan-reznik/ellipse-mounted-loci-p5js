function trilin_brocard1(orbit, [a, b, c]) {
   let tris = [c/b,a/c,b/a];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_brocard2(orbit, [a, b, c]) {
   let tris = [b/c,c/a,a/b];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

/*
function bary_brocard1(orbit,[a,b,c]) {
   let barys = [c*c,a*a,b*b];
   return barys_to_cartesian(orbit, barys);
}

function bary_brocard2(orbit,[a,b,c]) {
   let barys = [b*b,c*c,a*a];
   return barys_to_cartesian(orbit, barys);
}
*/