function feuerbach_vtx(orbit,sides) {
  let [cA,cB,cC]=tri_cosines(sides);
  let sA=sqrt(1-cA*cA);
  let sB=sqrt(1-cB*cB)
  let sC=sqrt(1-cC*cC);
 
  let f11 = /* -s2[(b-c)/2] = [cos(b-c)-1]/2 */ (cB*cC + sB*sC - 1)/2;
  let f12 = /*  c2[(c-a)/2] = [cos(c-a)+1]/2 */ (cC*cA + sC*sA + 1)/2;
  let f13 = /*  c2[(a-b)/2] = [cos(a-b)+1]/2 */ (cA*cB + sA*sB + 1)/2;
  
  let t = [f11,f12,f13];
  return trilin_to_cartesian(orbit,sides,t);
}

function symmedial_vtx(orbit,[a,b,c]) {
  let t=[0,b,c];
  return trilin_to_cartesian(orbit,[a,b,c],t);
}

function exc_symmedial_vtx(o,s) {
  exc = excentral_triangle(o,s);
  exc_s = tri_sides(exc);
  return symmedial_vtx(exc,exc_s);
}

function extouch_vtx(orbit,[a,b,c]) {
  let t=[0,(a-b+c)/b,(a+b-c)/c];
  return trilin_to_cartesian(orbit,[a,b,c],t);
}

function medial_vtx(orbit,[a,b,c]) {
  let t=[0,1/b,1/c];
  return trilin_to_cartesian(orbit,[a,b,c],t);
}

function anticompl_vtx(orbit,[a,b,c]) {
  let t=[-1/a,1/b,1/c];
  return trilin_to_cartesian(orbit,[a,b,c],t);
}

function excentral_vtx(orbit,sides) {
  let t=[-1,1,1];
  return trilin_to_cartesian(orbit,sides,t);
}

function minus_excentral_vtx(orbit,sides) {
  let vtx = excentral_vtx(orbit,sides);
  let x9 = trilin_X9(orbit,sides);
  return vdiff(x9,vtx);
}

// http://mathworld.wolfram.com/EulerTriangle.html
function euler_vtx(orbit,sides) {
  let [cA,cB,cC]=tri_cosines(sides);
  let sA=sqrt(1-cA*cA);
  let sB=sqrt(1-cB*cB)
  let sC=sqrt(1-cC*cC);
  let x = sA/cA, y = sB/cB, z = sC/cC;
  let t = [2*x + y + z, sA / cB, sA / cC];
  return trilin_to_cartesian(orbit,sides,t);
}


function orthic_vtx(orbit,sides) {
  let [cA,cB,cC]=tri_cosines(sides);
  /* can and will overflow */
  let secA=1/cA, secB=1/cB, secC=1/cC;
  let t=[0,secB,secC];
  return trilin_to_cartesian(orbit,sides,t);
}

function intouch_vtx(orbit, [a, b, c]) {
  let t = [0, (a*c)/(a-b+c), (a*b)/(a+b-c)];
  return trilin_to_cartesian(orbit, [a, b, c], t);
}