function rotate_tri_left([p1,p2,p3]) {
  return [p2,p3,p1];
}

function tri_area([a, b, c]) {
  let s = (a + b + c)/2.0;
  return sqrt(s*(s-a)*(s-b)*(s-c));
}

function get_conway([a,b,c]) {
  let a2=a*a,b2=b*b,c2=c*c;
  let area=tri_area([a,b,c]);
  let S = 2*area;
  let Sa = (b2+c2-a2)/2;
  let Sb = (c2+a2-b2)/2;
  let Sc = (a2+b2-c2)/2;
  let Sw = (a2+b2+c2)/2;
  return {area:area,S:S,Sa:Sa,Sb:Sb,Sc:Sc,Sw:Sw};
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

function pedal_triangle([alpha,beta,gamma],[a,b,c]) {
  let cosA=law_of_cosines(a,b,c);
  let cosB=law_of_cosines(b,c,a);
  let cosC=law_of_cosines(c,a,b);
  let t1=[0,beta+alpha*cosC,gamma+alpha*cosB];
  let t2=[alpha+beta*cosC,0,gamma+beta*cosA];
  let t3=[alpha+gamma*cosB,beta+gamma*cosA,0];
  return [t1,t2,t3];  //   generic_triangle(orbit,[a,b,c],[t1,t2,t3]);
}

function reference_triangle(sides) {
  let ts=[[1,0,0],[0,1,0],[0,0,1]];
  //  return generic_triangle(orbit,sides,ts);
  return ts;
}

function excentral_triangle(sides) {
  let ts=[[-1,1,1],[1,-1,1],[1,1,-1]];
  //  return generic_triangle(orbit,sides,ts);
  return ts;
}

function medial_triangle([a,b,c]) {
  let ts=[[0,1/b,1/c],[1/a,0,1/c],[1/a,1/b,0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function incentral_triangle(sides) {
  let ts=[[0,1,1],[1,0,1],[1,1,0]];
  return ts; // generic_triangle(orbit,sides,ts);
}

function anticompl_triangle([a,b,c]) {
  let ts=[[-1/a,1/b,1/c],[1/a,-1/b,1/c],[1/a,1/b,-1/c]];
  return ts; //generic_triangle(orbit,[a,b,c],ts);
}

function orthic_triangle(sides) {
  let [cA,cB,cC]=tri_cosines(sides);
  /* can and will overflow */
  let secA=1/cA, secB=1/cB, secC=1/cC;
  let ts=[[0,secB,secC],
          [secA,0,secC],
          [secA,secB,0]];
 return ts; // generic_triangle(orbit,sides,ts);
}

function extouch_triangle([a,b,c]) {
  let ts=[[0,(a-b+c)/b,(a+b-c)/c],
          [(-a+b+c)/a,0,(a+b-c)/c],
          [(-a+b+c)/a,(a-b+c)/b,0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function intouch_triangle([a,b,c]) {
  let ts=[[0,            (a*c)/(a-b+c),(a*b)/(a+b-c)],
          [(b*c)/(b-a+c),0            ,(a*b)/(a+b-c)],
          [(b*c)/(b-a+c),(a*c)/(a-b+c),0            ]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function tangential_triangle([a,b,c]) {
  let ts=[[-a, b, c],[a, -b, c],[a, b, -c]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

// http://mathworld.wolfram.com/ExtangentsTriangle.html
function extangents_triangle(sides) {
  let [x,y,z]=tri_cosines(sides);
  let ts=[
    [-x-1,x+z,x+y],
    [y+z,-y-1,y+x],
    [z+y,z+x,-z-1]
    ];
  return ts; // generic_triangle(orbit,sides,ts);
}

function hexyl_triangle(sides) {
  let [x,y,z]=tri_cosines(sides);
  const diag = x+y+z-1;
  const v1=x+y-z-1;
  const v2=x-y+z-1;
  const v3=-x+y+z-1;
  let ts=[
    [diag,v1,v2],
    [v1,diag,v3],
    [v2,v3,diag]
    ];
  return ts; // generic_triangle(orbit,sides,ts);
}

// http://mathworld.wolfram.com/EulerTriangle.html
function euler_triangle(sides) {
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
  return ts; // generic_triangle(orbit,sides,ts);
}

function feuerbach_triangle(sides) {
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
  
  return ts; // generic_triangle(orbit,sides,ts);
}

function macbeath_triangle([a,b,c]) {
  let [cA,cB,cC]=tri_cosines([a,b,c]);
  ts=[[0,c*c*cC/cB,b*b],
      [c*c,0,a*a*cA/cC],
      [b*b*cB/cA,a*a,0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function reflection_triangle([a,b,c]) {
  let [cA,cB,cC]=tri_cosines([a,b,c]);
  ts=[[-1,2*cC,2*cB],
      [2*cC,-1,2*cA],
      [2*cB,2*cA,-1]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function steiner_triangle([a,b,c]) {
  let ba2=b*b-a*a;
  let ac2=a*a-c*c;
  let cb2=c*c-b*b;
  ts=[[0,ba2*c,b*ac2],[ba2*c,0,a*cb2],[-b*ac2,-a*cb2,0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function first_brocard_triangle([a,b,c]) {
  let a3=a*a*a,b3=b*b*b,c3=c*c*c;
  let abc=a*b*c;
  ts=[[abc,c3,b3],[c3,abc,a3],[b3,a3,abc]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function second_brocard_triangle([a,b,c]) {
  let [cA,cB,cC]=tri_cosines([a,b,c]);
  let ab=a*b,ac=a*c,bc=b*c;
  ts=[[2*b*c*cA,ab,ac],[ab,2*a*c*cB,bc],[ac,bc,2*a*b*cC]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function third_brocard_triangle([a,b,c]) {
  let a2=a*a,b2=b*b,c2=c*c;
  let a3=a*a2,b3=b*b2,c3=c*c2;
  ts=[
    [b2*c2,a*b3,a*c3],
    [a3*b,a2*c2,b*c3],
    [a3*c,b3*c,a2*b2]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function fourth_brocard_triangle([a,b,c]) {
  let [cA,cB,cC]=tri_cosines([a,b,c]);
  ts=[[a/cA,2*c,2*b],[2*c,b/cB,2*a],[2*b,2*a,c/cC]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function first_neuberg_triangle([a,b,c]) {
  let a2=a*a,b2=b*b,c2=c*c;
  let abc=a*b*c;
  let abc2=a2+b2+c2;
  let kmid = abc*abc2;
  let a4=a2*a2,b4=b2*b2,c4=c2*c2;
  let bc2=sqr(b*c),ca2=sqr(a*c),ba2=sqr(b*a);
  k1=c*(-a4+ca2-b4+bc2);
  k2=b*(-a4+ba2-c4+bc2);
  k3=a*(-b4+ba2-c4+ca2);
  ts=[[kmid,k1,k2],
    [k1,kmid,k3],
    [k2,k3,kmid]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function second_neuberg_triangle([a,b,c]) {
  let a2=a*a,b2=b*b,c2=c*c;
  let abc=a*b*c;
  let abc2=a2+b2+c2;
  let kmid = abc*abc2;
  let a4=a2*a2,b4=b2*b2,c4=c2*c2;
  let bc2=sqr(b*c),ca2=sqr(a*c),ba2=sqr(b*a);
  k1=c*(c4-ca2-bc2-2*ba2);
  k2=b*(b4-ba2-bc2-2*ca2);
  k3=a*(a4-ba2-ca2-2*bc2);
  ts=[[kmid,k1,k2],
    [k1,kmid,k3],
    [k2,k3,kmid]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function intangents_triangle(sides) {
  let [cA,cB,cC]=tri_cosines(sides);
  ts=[[1+cA,cA-cC,cA-cB],
  [cB-cC,1+cB,cB-cA],
  [cC-cB,cC-cA,1+cC]];
  return ts; // generic_triangle(orbit,sides,ts);
}

function lemoine_triangle([a,b,c]) {
  let a2=a*a,b2=b*b,c2=c*c;
  let d1=-2*a2+b2-2*c2;
  let d2=a2-2*b2-2*c2;
  let d3=-2*a2-2*b2+c2;
  ts=[
    [0,(a*c)/d1,(a*b)/d3],
    [(b*c)/d2,0,(a*b)/d3],
    [(b*c)/d2,(a*c)/d1,0]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

// http://mathworld.wolfram.com/SymmedialTriangle.html
function symmedial_triangle([a,b,c]) {
  let ts=[[0,b,c],[a,0,c],[a,b,0]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function bci_triangle([a,b,c]) {
  let cs=tri_cosines([a,b,c]);
  let [cha,chb,chc] = cs.map(half_cos);
  let ts=[
    [1,1+2*chc,1+2*chb],
    [1+2*chc,1,1+2*cha],
    [1+2*chb,1+2*cha,1]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function circumorthic_triangle([a,b,c]) {
  let [x,y,z]=tri_cosines([a,b,c]);
  let ts=[
    [-a*y*z,(b*y+c*z)*z,(b*y+c*z)*y],
    [(c*z+a*x)*z,-b*z*x,(c*z+a*x)*x],
    [(a*x+b*y)*y,(a*x+b*y)*x,-c*x*y]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function circummedial_triangle([a,b,c]) {
  let abc = a*b*c;
  let ab2 = sqr(a*a+b*b);
  let bc2 = sqr(b*b+c*c);
  let ca2 = sqr(c*c+a*a);
  let ts=[
    [-abc,c*bc2,b*bc2],
    [c*ca2,-abc,a*ca2],
    [b*ab2,a*ab2,-abc]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function circummidarc_triangle([a,b,c]) {
    let ts=[[-a,b+c,b+c],[a+c,-b,a+c],[a+b,a+b,-c]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function fuhrmann_triangle([a,b,c]) {
  let a2=a*a,b2=b*b,c2=c*c;
  
  let ts=[
    [a,(-a2+c2+b*c)/b,(-a2+b2+b*c)/c],
    [(-b2+c2+a*c)/a,b,(a2-b2+a*c)/c],
    [(b2-c2+a*b)/a,(a2-c2+a*b)/b,c]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

/*
{
  {0, safeDiv[a c, c - a], safeDiv[a b, a - b]},(* 
   error in mathworld http://mathworld.wolfram.com/
   YffContactTriangle.html which shows this as {0,ac/(c-a),ab/(b- a)}*)
   {safeDiv[b c, b - c], 0, safeDiv[a b, a - b]},
   {safeDiv[b c, b - c], safeDiv[a c, c - a], 0}}];
   */

function yffcontact_triangle([a,b,c]) {
  let ts=[
    [0,(a*c)/(c-a),(a*b)/(a-b)],
    [(b*c)/(b-c),0,(a*b)/(a-b)],
    [(b*c)/(b-c),(a*c)/(c-a),0]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function yffcentral_triangle(sides) {
  let cs=tri_cosines(sides);
  let [x,y,z] = cs.map(half_cos);
  let ts=[
    [y*z,z*(x+z),y*(x+y)],
    [z*(y+z),z*x,x*(y+x)],
    [y*(z+y),x*(z+x),x*y]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

function tangential_midarc_triangle(sides) {
  let cs=tri_cosines(sides);
  let [x,y,z] = cs.map(half_cos);
  let ts = [
    [-y * z, z * (z + x), y * (y + x)],
    [z * (z + y), -z * x, x * (x + y)],
    [y * (y + z), x * (x + z), -y *x]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

function halfaltitude_triangle(sides) {
  let [cA,cB,cC]=tri_cosines(sides);
  let ts=[
     [1,cC,cB],[cC,1,cA],[cB,cA,1]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

function johnson_triangle([a,b,c]) {
  let abc=a*b*c;
  let conway = get_conway([a,b,c]);
  let s2=conway.S*conway.S;
  let kac=s2+conway.Sa*conway.Sc;
  let kab=s2+conway.Sa*conway.Sb;
  let kbc=s2+conway.Sb*conway.Sc;
  let ts=[
    [-abc*conway.Sa,c*kac,b*kab],
    [c*kbc,-abc*conway.Sb,a*kab],
    [b*kbc,a*kac,-abc*conway.Sc]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function lucas_central_triangle([a,b,c]) {
  let cwy = get_conway([a,b,c]);
  let ts=[
    [a*(2*cwy.S+cwy.Sa),b*cwy.Sb,c*cwy.Sc],
    [a * cwy.Sa, b * (2 * cwy.S + cwy.Sb), c * cwy.Sc],
    [a*cwy.Sa,b*cwy.Sb,c*(2*cwy.S+cwy.Sc)]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function lucas_inner_triangle([a,b,c]) {
  let cwy = get_conway([a,b,c]);
  let ts=[
    [a*(4*cwy.Sa+3*cwy.S),2*b*(2*cwy.Sb+cwy.S),2*c*(2*cwy.Sc+cwy.S)],
    [2*a*(2*cwy.Sa+cwy.S),b*(4*cwy.Sb +3*cwy.S),2*c*(2*cwy.Sc+cwy.S)],
    [2*a*(2*cwy.Sa+cwy.S),2*b*(2*cwy.Sb+cwy.S),c*(4*cwy.Sc+3*cwy.S)]];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function lucas_tangents_triangle([a,b,c]) {
  let [cA,cB,cC]=tri_cosines([a,b,c]);
  let abc=a*b*c;
  let area2=2*tri_area([a,b,c]);
  let v1=a*(area2+b*c*cA);
  let v2=c*(area2+a*b*cC);
  let v3=b*(area2+a*c*cB);
  let ts=[
    [abc*cA,v3,v2],
    [v1,abc*cB,v2],
    [v1,v3,abc*cC]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

/*
firstMorleyTriangle[orbit_, {a_, b_, c_}] := Module[{cs, cs3},
   cs = lawOfCosines3[a, b, c];
   cs3 = cosThird /@ cs;
   trilinearMatrixToCartesian[orbit, {a, b, c},
    {{1, 2 cs3[[3]], 2 cs3[[2]]},
     {2 cs3[[3]], 1, 2 cs3[[1]]},
     {2 cs3[[2]], 2 cs3[[1]], 1}}]];
*/
function first_morley_triangle(sides) {
  let cs=tri_cosines(sides);
  c3 = cs.map(cos_third);
  ts=[
    [1,2*c3[2],2*c3[1]],
    [2*c3[2],1,2*c3[0]],
    [2*c3[1],2*c3[0],1]];
  return ts; // generic_triangle(orbit,sides,ts);
}

function first_morley_adjunct_triangle(sides) {
  let cs=tri_cosines(sides);
  let cs3=cs.map(c=>1/cos_third(c));
  ts=[
    [2,cs3[2],cs3[1]],
    [cs3[2],2,cs3[0]],
    [cs3[1],cs3[0],2]];
    return ts; // generic_triangle(orbit,sides,ts);
}

function second_morley_adjunct_triangle(sides) {
  let cs=tri_cosines(sides);
  let cs3=cs.map(c=>1/cos_third_minus_2_pi(c));
  ts=[
    [2,cs3[2],cs3[1]],
    [cs3[2],2,cs3[0]],
    [cs3[1],cs3[0],2]];
    return ts; // generic_triangle(orbit,sides,ts);
}

function third_morley_adjunct_triangle(sides) {
  let cs=tri_cosines(sides);
  let cs3=cs.map(c=>1/cos_third_minus_4_pi(c));
  ts=[
    [2,cs3[2],cs3[1]],
    [cs3[2],2,cs3[0]],
    [cs3[1],cs3[0],2]];
    return ts; // generic_triangle(orbit,sides,ts);   
}

function outer_vecten_triangle([a,b,c]) {
  let [cA,cB,cC]=tri_cosines([a,b,c]);
  let [sA,sB,sC]= [cA,cB,cC].map(c=>Math.sqrt(1-c*c));
  ts=[
   [-a/2,a*(sC+cC)/2,a*(sB+cB)/2],
   [b*(sC+cC)/2,-b/2,b*(sA+cA)/2],
   [c*(sB+cB)/2,c*(sA+cA)/2,-c/2]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function inner_vecten_triangle([a,b,c]) {
  let [cA,cB,cC]=tri_cosines([a,b,c]);
  let [sA,sB,sC]= [cA,cB,cC].map(c=>Math.sqrt(1-c*c));
  ts=[
   [a/2,a*(sC-cC)/2,a*(sB-cB)/2],
   [b*(sC-cC)/2,b/2,b*(sA-cA)/2],
   [c*(sB-cB)/2,c*(sA-cA)/2,c/2]
  ];
  return ts; // generic_triangle(orbit,[a,b,c],ts);
}

function mixtilinear_triangle(sides) {
  let [cA,cB,cC]=tri_cosines(sides);
  ts=[
   [(cA-cB-cC+1)/2,1,1],
   [1,(-cA+cB-cC+1)/2,1],
   [1,1,(-cA-cB+cC+1)/2]
  ];
  return ts; // generic_triangle(orbit,sides,ts);
}

//
function get_mounted_tri(a, tDeg, v2, v3) {
  let t = toRad(tDeg);
  v1 = [a * Math.cos(t), Math.sin(t)];
  let tri = [v1, v2, v3];
  let sides = tri_sides(tri);
  let normals = tri.map(v => ell_norm(a, v));
  return { o: tri, n: normals, s: sides };
}

const tri_fns_dict = {
  // reference        : reference_triangle,
  excentral        : excentral_triangle,
  medial           : medial_triangle,
  anticompl        : anticompl_triangle,
  orthic           : orthic_triangle,
  intouch          : intouch_triangle,
  extouch          : extouch_triangle,
  tangential       : tangential_triangle,
  tangentialmidarc : tangential_midarc_triangle,
  extangents       : extangents_triangle,
  intangents       : intangents_triangle,
  euler            : euler_triangle,
  halfaltitude     : halfaltitude_triangle,
  hexyl            : hexyl_triangle,
  feuerbach        : feuerbach_triangle,
  symmedial        : symmedial_triangle,
  circumorthic     : circumorthic_triangle,
  circummedial     : circummedial_triangle,
  circummidarc     : circummidarc_triangle,
  morley1          : first_morley_adjunct_triangle,
  morley2          : second_morley_adjunct_triangle,
  morley3          : third_morley_adjunct_triangle,
  incentral        : incentral_triangle,
  fuhrmann         : fuhrmann_triangle,
  macbeath         : macbeath_triangle,
  steiner          : steiner_triangle,
  lemoine          : lemoine_triangle,
  johnson          : johnson_triangle,
  bci              : bci_triangle,
  yffcontact       : yffcontact_triangle,
  yffcentral       : yffcentral_triangle,
  reflection       : reflection_triangle,
  brocard1         : first_brocard_triangle,
  brocard2         : second_brocard_triangle,
  brocard3         : third_brocard_triangle,
  brocard4         : fourth_brocard_triangle,
  neuberg1         : first_neuberg_triangle,
  neuberg2         : second_neuberg_triangle,
  outervecten      : outer_vecten_triangle,
  innervecten      : inner_vecten_triangle,
  mixtilinear      : mixtilinear_triangle,
  lucascentral     : lucas_central_triangle,
  lucasinner       : lucas_inner_triangle,
  lucastangents    : lucas_tangents_triangle
};

function get_derived_tri(orbit, sides, tri_type) {
    if (tri_type in tri_fns_dict) { // "reference" returns itself
     const ts = tri_fns_dict[tri_type](sides);
     const tri = generic_triangle(orbit,sides,ts);
     return { o: tri, s: tri_sides(tri) };
  } else
     return { o: orbit, s: sides };
}

function get_derived_tri_v1_barys(sides, tri_type) {
   if (tri_type in tri_fns_dict) { // "reference" returns itself
   const ts = tri_fns_dict[tri_type](sides);
   // multiply by sides to get barys
   const bs = ts[0].map((t,i)=>t*sides[i]);
   return bs;
} else
   return [sides[0],0,0]; // reference tri v1 in baris
}

function get_tri_v1_barys(sides) {
    return [sides[0],0,0];
}

