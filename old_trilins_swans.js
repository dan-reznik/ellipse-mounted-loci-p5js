function trilin_X88(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => 1 / (b + c - 2 * a);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X100(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => 1 / (b - c);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X162(orbit, sides) {
  let cyclic = (a, b, c) => 1/((b*b - c*c)*(b*b + c*c - a*a));
  return trilin_cyclic(orbit, cyclic, sides);
}

function trilin_X190(orbit, sides) {
  let cyclic = (a, b, c) => b*c/(b - c);
  return trilin_cyclic(orbit, cyclic, sides);
}

function trilin_X651(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => 1/((b - c)*(b + c - a));
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X653(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => 1/(a*(b - c)*(b + c - a)*(b*b + c*c - a*a));
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X655: f(A,B,C) = 1/[cos(A-B) - cos(C-A)]
// error: not falling onto X9
function trilin_x655_raw(sides) {
  let [cosA, cosB, cosC] = tri_cosines(sides);
  let sinA = sqrt(1-cosA*cosA);
  let sinB = sqrt(1-cosB*cosB)
  let sinC = sqrt(1-cosC*cosC);
  
  let cosBmC = cosB*cosC + sinB*sinC;
  let cosCmA = cosC*cosA + sinC*sinA;
  let cosAmB = cosA*cosB + sinA*sinB;
  
  let alpha = 1/(cosAmB-cosCmA);
  let beta = 1/(cosBmC-cosAmB);
  let gamma = 1/(cosCmA-cosBmC);
  return [alpha,beta,gamma];
}

trilin_X655 = (orbit, sides) => call_raw(orbit,sides,trilin_x655_raw);

// X658: 1/(a(b - c) (a - b - c)^2)
function trilin_X658(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => 1/(a*(b - c)*(a-b-c)*(a-b-c));
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X660: 1/[(a2 - bc)(b - c)]
function trilin_X660(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => 1/((a*a - b*c)*(b-c));
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X662: 1/(b2 - c2)
function trilin_X662(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => 1/(b*b-c*c);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X673: bc/[b2 + c2 - a(b + c)]
function trilin_X673(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => (b*c)/(b*b+c*c-a*(b+c));
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X771: 1/(cosB^3 - cosC^3)
function trilin_x771_raw(sides) {
  let [cosA, cosB, cosC] = tri_cosines(sides);
  let cosA3=cosA*cosA*cosA;
  let cosB3=cosB*cosB*cosB;
  let cosC3=cosC*cosC*cosC;
  
  let alpha = 1/(cosB3-cosC3);
  let beta = 1/(cosC3-cosA3);
  let gamma =1/(cosA3-cosB3);
  return [alpha, beta, gamma];
}


trilin_X771 = (orbit, sides) => call_raw(orbit,sides,trilin_x771_raw);

//X799: bc/(b^2 - c^2)/a
function trilin_X799(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => (b*c)/(b*b-c*c)/a;
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X823: b^2c^2/[(b^2 - c^2)(b^2 + c^2 - a^2)^2]
function trilin_X823(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let a2=a*a,c2=c*c,b2=b*b;
    let numer = b2*c2;
    let denom = (b2-c2)*(b2+c2-a2)*(b2+c2-a2);
    return numer/denom;
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X897: 1/(2 a2-b2-c2) 
function trilin_X897(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let a2=a*a,c2=c*c,b2=b*b;
    return 1/(2*a2-b2-c2);
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X1156: 1/[(b-c)^2 + a(b+c-2a)]
function trilin_X1156(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => 1/((b-c)*(b-c)+a*(b+c-2*a));
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//X1492 [Columbus Point]: 1/(b^3 - c^3)
function trilin_X1492(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => 1/(b*b*b-c*c*c);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

//1821: 1/[a^2(a^2 b^2 + a^2 c^2 - b^4 - c^4)
function trilin_X1821(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let a2=a*a,c2=c*c,b2=b*b;
    return 1/(a2*(a2*b2+a2*c2-b2*b2-c2*c2));
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}
