trilin_X6 = (orbit, sides) => trilin_to_cartesian(orbit, sides, sides);

function trilin_x15_raw(sides) {
  let s3 = sqrt(3);
  let [cosA, cosB, cosC] = tri_cosines(sides);
  let sinA = sqrt(1 - cosA * cosA);
  let sinB = sqrt(1 - cosB * cosB)
  let sinC = sqrt(1 - cosC * cosC);
  let alpha = 3 * cosA + s3 * sinA;
  let beta = 3 * cosB + s3 * sinB;
  let gamma = 3 * cosC + s3 * sinC;
  return [alpha, beta, gamma];
}

trilin_X15 = (orbit, sides) => call_raw(orbit,sides,trilin_x15_raw);

//X24=sec A cos 2A : sec B cos 2B : sec C cos 2C
//(sec A - 2 cos A) 
function trilin_x24_raw(sides) {
  let [cosA, cosB, cosC] = tri_cosines(sides);
  let alpha = 1/cosA-2*cosA;
  let beta =  1/cosB-2*cosB;
  let gamma = 1/cosC-2*cosC;
  return [alpha, beta, gamma];
}

trilin_X24 = (orbit, sides) => call_raw(orbit,sides,trilin_x24_raw);

//X49 cos(B - C) - cos(C - A) cos(A - B)
//X49 cos 3A : cos 3B : cos 3C
// cos(3t)=4cos(t)^3-3cos(t
function trilin_x49_raw(sides) {
  let [cosA, cosB, cosC] = tri_cosines(sides);
  let alpha = triple_cos(cosA);
  let beta = triple_cos(cosB);
  let gamma = triple_cos(cosC);
  return [alpha, beta, gamma];
}

trilin_X49 = (orbit, sides) => call_raw(orbit, sides, trilin_x49_raw);

//X49 alt: a3*(a2-b2-c2)*(a4+b4+c4-2*a2*b2-2*a2*c2-b2*c2) 
function trilin_X49_a(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let a2=a*a,b2=b*b,c2=c*c;
    let a4=a2*a2,b4=b2*b2,c4=c2*c2;
    return a2*a*(a2-b2-c2)*(a4+b4+c4-2*a2*b2-2*a2*c2-b2*c2); 
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}


//X50: sin3A::
//X50: a*(1-4 cosA^2)
function trilin_x50_raw([a,b,c]) {
  let coss = tri_cosines([a,b,c]);
  let alpha=a*(1-4*coss[0]*coss[0]);
  let beta=b*(1-4*coss[1]*coss[1]);
  let gamma=c*(1-4*coss[2]*coss[2]);
  return [alpha,beta,gamma];
}
trilin_X50 = (orbit, sides) => call_raw(orbit,sides,trilin_x50_raw);

// tanA cos(B-C) : tanB cos(C-A) : tanC cos(A-B)
function trilin_x53_raw([a,b,c]) {
  let [cosA, cosB, cosC] = tri_cosines([a, b, c]);
  let sinA = sqrt(1 - cosA*cosA);
  let sinB = sqrt(1 - cosB*cosB)
  let sinC = sqrt(1 - cosC*cosC);
  [tanA,tanB,tanC]=[sinA/cosA,sinB/cosB,sinC/cosC];
  let cosBC = cosB*cosC + sinB*sinC;
  let cosCA = cosC*cosA + sinC*sinA;
  let cosAB = cosA*cosB + sinA*sinB;
  let alpha = tanA*cosBC;
  let beta = tanB*cosCA;
  let gamma = tanC*cosAB;
  return [alpha, beta, gamma];
}

//X70:  bc/[b2 cos 2B + c2 cos 2C - a2 cos 2A]
//X70: 1/(a8-2*a6*(b2+c2)+2*a2*(b6+c6)-(b2-c2)*(b2-c2)*(b4+c4))/a
function trilin_X70(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let a2=a*a,b2=b*b,c2=c*c;
    let a4=a2*a2,b4=b2*b2,c4=c2*c2;
    let a6=a2*a4,b6=b2*b4,c6=c2*c4;
    let a8=a2*a6;
    return 1/(a8-2*a6*(b2+c2)+2*a2*(b6+c6)-(b2-c2)*(b2-c2)*(b4+c4))/a;
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X74: a/(2*a4-(b2-c2)^2-a2*(b2+c2)) 
function trilin_X74(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let a2=a*a,b2=b*b,c2=c*c;
    let a4=a2*a2;
    return a/(2*a4-Math.pow(b2-c2,2)-a2*(b2+c2)) ;
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

trilin_X53 = (orbit, sides) => call_raw(orbit,sides,trilin_x53_raw);

// 1/[1 - cos(B - C)]
function trilin_x59_raw(sides) {
  let [cosA, cosB, cosC] = tri_cosines(sides);
  let sinA = sqrt(1 - cosA * cosA);
  let sinB = sqrt(1 - cosB * cosB)
  let sinC = sqrt(1 - cosC * cosC);
  let cosBmC = cosB * cosC + sinB * sinC;
  let cosCmA = cosC * cosA + sinC * sinA;
  let cosAmB = cosA * cosB + sinA * sinB;
  let alpha = 1 / (1 - cosBmC);
  let beta = 1 / (1 - cosCmA);
  let gamma = 1 / (1 - cosAmB);
  return [alpha, beta, gamma];
}
trilin_X59 = (orbit, sides) => call_raw(orbit,sides,trilin_x59_raw);

function trilin_X67(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => (b*c)/(Math.pow(b,4)+Math.pow(c,4)-Math.pow(a,4)-Math.pow(b*c,2));
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X77: 1/(1+secA) ::
function trilin_x77_raw(sides) {
  let coss = tri_cosines(sides);
  return coss.map(c=>1/(1+1/c));
}
trilin_X77 = (orbit, sides) => call_raw(orbit,sides,trilin_x77_raw);


//X91: sec2A ::
function trilin_x91_raw(sides) {
  let coss = tri_cosines(sides);
  return coss.map(c=>1/double_cos(c)); 
}
trilin_X91 = (orbit, sides) => call_raw(orbit,sides,trilin_x91_raw);

//X92: csc2A :: === 1/sin2A ::
function trilin_x92_raw(sides) {
  let coss = tri_cosines(sides)
  let sins = coss.map(c=>sqrt(1-c*c));
  let sins2 = coss.map((c,i)=>double_sin(c,sins[i]));
  return sins2.map(s2=>1/s2);
}
trilin_X92 = (orbit, sides) => call_raw(orbit,sides,trilin_x92_raw);


//X96: sec2A*sec(B-C)=1/(cos2A*cosBmC)
function trilin_x96_raw(sides) {
  let [cosA, cosB, cosC] = tri_cosines(sides);
  let cos2A=double_cos(cosA);
  let cos2B=double_cos(cosB);
  let cos2C=double_cos(cosC);
  let sinA = sqrt(1-cosA*cosA);
  let sinB = sqrt(1-cosB*cosB)
  let sinC = sqrt(1-cosC*cosC);
  let cosBmC = cosB*cosC + sinB*sinC;
  let cosCmA = cosC*cosA + sinC*sinA;
  let cosAmB = cosA*cosB + sinA*sinB;
  let alpha = 1/(cos2A*cosBmC);
  let beta =  1/(cos2B*cosCmA);
  let gamma = 1/(cos2C*cosAmB);
  return [alpha, beta, gamma];
}
trilin_X96 = (orbit, sides) => call_raw(orbit,sides,
                                        trilin_x96_raw);

//X97: cotA*sec(B-C) == cosA/(sinA*cosBmC) 
function trilin_x97_raw(sides) {
  let [cosA, cosB, cosC] = tri_cosines(sides);
  let sinA = sqrt(1-cosA*cosA);
  let sinB = sqrt(1-cosB*cosB)
  let sinC = sqrt(1-cosC*cosC);
  let cosBmC = cosB*cosC + sinB*sinC;
  let cosCmA = cosC*cosA + sinC*sinA;
  let cosAmB = cosA*cosB + sinA*sinB;
  let alpha = cosA/(sinA*cosBmC);
  let beta =  cosB/(sinB*cosCmA);
  let gamma = cosC/(sinC*cosAmB);
  return [alpha, beta, gamma];
}
trilin_X97 = (orbit, sides) => call_raw(orbit,sides,
                                        trilin_x97_raw);

function trilin_X99(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => b * c / (b * b - c * c);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}
