function rotate_tri_left([p1,p2,p3]) {
  return [p2,p3,p1];
}

function rotate_tri_right([p1,p2,p3]) {
  return [p3,p1,p2];
}

function get_tri_centroid([v1, v2, v3]) {
  return [(v1[0] + v2[0] + v3[0]) / 3, (v1[1] + v2[1] + v3[1]) / 3];
}

function generic_triangle(orbit,sides,ts) {
  return ts.map(t=>trilin_to_cartesian(orbit,sides,t));
}

function pedal_triangle([alpha,beta,gamma],
                         orbit,[a,b,c]) {
  let cosA=law_of_cosines(a,b,c);
  let cosB=law_of_cosines(b,c,a);
  let cosC=law_of_cosines(c,a,b);
  let t1=[0,beta+alpha*cosC,gamma+alpha*cosB];
  let t2=[alpha+beta*cosC,0,gamma+beta*cosA];
  let t3=[alpha+gamma*cosB,beta+gamma*cosA,0];
  return generic_triangle(orbit,[a,b,c],[t1,t2,t3]);
}

function excentral_triangle(orbit,sides) {
  let ts=[[-1,1,1],[1,-1,1],[1,1,-1]];
  return generic_triangle(orbit,sides,ts);
}

function minus_excentral_triangle0(orbit,sides,exc) {
  let x9 = trilin_X9(orbit, sides);
  return rotate_tri_left(exc.map(e=>vdiff(x9,e)));
}

function minus_excentral_triangle(orbit,sides) {
    let exc = excentral_triangle(orbit,sides);
  return minus_excentral_triangle0(orbit,sides,exc);
}


function medial_triangle(orbit,[a,b,c]) {
  let ts=[[0,1/b,1/c],[1/a,0,1/c],[1/a,1/b,0]];
  return generic_triangle(orbit,[a,b,c],ts);
}

function anticompl_triangle(orbit,[a,b,c]) {
  let ts=[[-1/a,1/b,1/c],[1/a,-1/b,1/c],[1/a,1/b,-1/c]];
  return generic_triangle(orbit,[a,b,c],ts);
}

function orthic_triangle(orbit,sides) {
  let [cA,cB,cC]=tri_cosines(sides);
  /* can and will overflow */
  let secA=1/cA, secB=1/cB, secC=1/cC;
  let ts=[[0,secB,secC],
          [secA,0,secC],
          [secA,secB,0]];
 return generic_triangle(orbit,sides,ts);
}

function exc_symmedial_triangle(o,s) {
  let exc = excentral_triangle(o,s);
  let exc_s = tri_sides(exc);
  return(symmedial_triangle(exc,exc_s));
}

function extouch_triangle(orbit,[a,b,c]) {
  let ts=[[0,(a-b+c)/b,(a+b-c)/c],
          [(-a+b+c)/a,0,(a+b-c)/c],
          [(-a+b+c)/a,(a-b+c)/b,0]];
  return generic_triangle(orbit,[a,b,c],ts);
}

function intouch_triangle(orbit,[a,b,c]) {
  let ts=[[0,            (a*c)/(a-b+c),(a*b)/(a+b-c)],
          [(b*c)/(b-a+c),0            ,(a*b)/(a+b-c)],
          [(b*c)/(b-a+c),(a*c)/(a-b+c),0            ]];
  return generic_triangle(orbit,[a,b,c],ts);
}

function ant_intouch_triangle(orbit,[a,b,c]) {
  ant = anticompl_triangle(orbit,[a,b,c]);
  ant_s = triangle_sides(ant);
  return intouch_triangle(ant_s,ants_s);
}

function tangential_triangle(orbit,[a,b,c]) {
  let ts=[[-a, b, c],[a, -b, c],[a, b, -c]];
  return generic_triangle(orbit,[a,b,c],ts);
}

// http://mathworld.wolfram.com/ExtangentsTriangle.html
function extangents_triangle(orbit,sides) {
  let [x,y,z]=tri_cosines(sides);
  let m=[
    [-x-1,x+z,x+y],
    [y+z,-y-1,y+x],
    [z+y,z+x,-z-1]
    ];
  return generic_triangle(orbit,sides,m);
}

// http://mathworld.wolfram.com/EulerTriangle.html
function euler_triangle(orbit,sides) {
  let [cA,cB,cC]=tri_cosines(sides);
  let sA=sqrt(1-cA*cA);
  let sB=sqrt(1-cB*cB)
  let sC=sqrt(1-cC*cC);
  let x = sA/cA, y = sB/cB, z = sC/cC;
  let ts = [
    [2*x+y+z, sA / cB, sA / cC],
    [sB/cA, x+2*y+z, sB/cC],
    [sC/cA, sC/cB, x+y+2*z]
  ];
  return generic_triangle(orbit,sides,ts);
}

function feuerbach_triangle(orbit,sides) {
  let [cA,cB,cC]=tri_cosines(sides);
  let sA=sqrt(1-cA*cA);
  let sB=sqrt(1-cB*cB)
  let sC=sqrt(1-cC*cC);
 
  let f11 = /* -s2[(b-c)/2] = [cos(b-c)-1]/2 */ (cB*cC + sB*sC - 1)/2;
  let f22 = /* -s2[(c-a)/2] = [cos(c-a)-1]/2 */ (cC*cA + sC*sA - 1)/2; 
  let f33 = /* -s2[(a-b)/2] = [cos(a-b)-1]/2 */ (cA*cB + sA*sB - 1)/2;
  let f21 = /*  c2[(b-c)/2] = [cos(b-c)+1]/2 */ (cB*cC + sB*sC + 1)/2;
  let f12 = /*  c2[(c-a)/2] = [cos(c-a)+1]/2 */ (cC*cA + sC*sA + 1)/2;
  let f13 = /*  c2[(a-b)/2] = [cos(a-b)+1]/2 */ (cA*cB + sA*sB + 1)/2;
  
  ts=[[f11,f12,f13],
      [f21,f22,f13],
      [f21,f12,f33]];
  
  return generic_triangle(orbit,sides,ts);
}

// http://mathworld.wolfram.com/SymmedialTriangle.html
function symmedial_triangle(orbit,[a,b,c]) {
  let ts=[[0,b,c],[a,0,c],[a,b,0]];
  return generic_triangle(orbit,[a,b,c],ts);
}


function get_mounted_tri(a, tDeg, v1, v2) {
  let t = toRad(tDeg);
  v3 = [a * Math.cos(t), Math.sin(t)];
  let tri = [v3, v1, v2];
  let sides = tri_sides(tri);
  let normals = tri.map(v => ell_norm(a, v));
  return { o: tri, n: normals, s: sides };
}