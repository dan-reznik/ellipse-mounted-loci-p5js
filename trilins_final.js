// support fn

function trilin_to_cartesian(
  [A, B, C], //(* vertices *)
  [a, b, c], // (* side lengths *)
  [x, y, z]) //(* trilinears *)
{
  //let denom = a * x + b * y + c * z;
  let v = [a * x, b * y, c * z];
  let denom = sum(v);
  return [dot(v, [A[0], B[0], C[0]]) / denom,
    dot(v, [A[1], B[1], C[1]]) / denom
  ];
}

function get_Xn_low(orbit, sides, fn_trilin) {
  return fn_trilin(orbit,sides);
}

function get_fn_trilin(n) {
  let fn_name = sprintf("trilin_X%d",n);
  return window[fn_name];
}

function get_brocard(n) {
   let brocard_name = sprintf("trilin_brocard%d",n);
   return window[brocard_name];
}

function get_Xn(orbit, sides, n) {
  return get_Xn_low(orbit, sides, get_fn_trilin(n));
}

const cPi3 = Math.cos(Math.PI/3);
const sPi3 = Math.sin(Math.PI/3);
const cPi6 = Math.cos(Math.PI/6);
const sPi6 = Math.sin(Math.PI/6);

function oneOv(x) { return 1.0/x; }

function triAreaHeron(a, b, c) {
  let s = (a + b + c)/2.0;
  return sqrt(s*(s-a)*(s-b)*(s-c));
}

function lawOfCosines(a, b, c) { return (b*b+c*c-a*a)/(2.0*b*c); }

function getSin(theCos) { return sqrt(1.0 - theCos*theCos); }

function cosDoubleAngle(cosAngle) { return 2*cosAngle*cosAngle - 1.0; }
function cosHalfAngle(cosAngle) { return sqrt((1.0+cosAngle)/2); }
function sinHalfAngle(cosAngle) { return sqrt((1.0-cosAngle)/2); }

function getSinApmB(sa, sb, ca, cb) { return [sa*cb + sb*ca, sa*cb - sb*ca]; }

function getSinApmB1(sa, sb, ca, cb) { return sa*cb + sb*ca; }
function getSinApmB2(sa, sb, ca, cb) { return sa*cb - sb*ca; }

function sinCosTripleAngle(s, c, s2, c2) {
  let c3 = c2*c - s2*s;
  let s3 = s2*c + s*c2;
  return [s3, c3];
}

function cosTripleAngle(s, c, s2, c2) {
  return c2*c - s2*s;
}

function sinTripleAngle(s, c, s2, c2) {
  return s2*c + s*c2;
}


function trilin_X1(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1;
   let v2 = 1;
   let v3 = 1;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X2(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c;
   let v2 = a*c;
   let v3 = a*b;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X3(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = cosA;
   let v2 = cosB;
   let v3 = cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X4(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let secC=1/cosC;
   let secB=1/cosB;
   let secA=1/cosA;
   /* end vars */
   let v1 = secA;
   let v2 = secB;
   let v3 = secC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X5(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let sinA=getSin(cosA);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   /* end vars */
   let v1 = cosB*cosC+sinB*sinC;
   let v2 = cosA*cosC+sinA*sinC;
   let v3 = cosA*cosB+sinA*sinB;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X6(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = a;
   let v2 = b;
   let v3 = c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X7(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b*c)/(-a+b+c);
   let v2 = (a*c)/(a-b+c);
   let v3 = (a*b)/(a+b-c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X8(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = (-a+b+c)/a;
   let v2 = (a-b+c)/b;
   let v3 = (a+b-c)/c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X9(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = -a+b+c;
   let v2 = a-b+c;
   let v3 = a+b-c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X10(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c*(b+c);
   let v2 = a*c*(a+c);
   let v3 = a*b*(a+b);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X11(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let sinA=getSin(cosA);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   /* end vars */
   let v1 = 1-cosB*cosC-sinB*sinC;
   let v2 = 1-cosA*cosC-sinA*sinC;
   let v3 = 1-cosA*cosB-sinA*sinB;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X12(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let sinA=getSin(cosA);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   /* end vars */
   let v1 = 1+cosB*cosC+sinB*sinC;
   let v2 = 1+cosA*cosC+sinA*sinC;
   let v3 = 1+cosA*cosB+sinA*sinB;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X13(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let sinCpPi3=getSinApmB1(sinC,sPi3,cosC,cPi3);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let sinBpPi3=getSinApmB1(sinB,sPi3,cosB,cPi3);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let sinApPi3=getSinApmB1(sinA,sPi3,cosA,cPi3);
   let cscCpPi3=1/sinCpPi3;
   let cscBpPi3=1/sinBpPi3;
   let cscApPi3=1/sinApPi3;
   /* end vars */
   let v1 = cscApPi3;
   let v2 = cscBpPi3;
   let v3 = cscCpPi3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X14(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let sinCmPi3=getSinApmB2(sinC,sPi3,cosC,cPi3);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let sinBmPi3=getSinApmB2(sinB,sPi3,cosB,cPi3);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let sinAmPi3=getSinApmB2(sinA,sPi3,cosA,cPi3);
   let cscCmPi3=1/sinCmPi3;
   let cscBmPi3=1/sinBmPi3;
   let cscAmPi3=1/sinAmPi3;
   /* end vars */
   let v1 = cscAmPi3;
   let v2 = cscBmPi3;
   let v3 = cscCmPi3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X15(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let sinCpPi3=getSinApmB1(sinC,sPi3,cosC,cPi3);
   let sinBpPi3=getSinApmB1(sinB,sPi3,cosB,cPi3);
   let sinApPi3=getSinApmB1(sinA,sPi3,cosA,cPi3);
   /* end vars */
   let v1 = sinApPi3;
   let v2 = sinBpPi3;
   let v3 = sinCpPi3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X16(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let sinCmPi3=getSinApmB2(sinC,sPi3,cosC,cPi3);
   let sinBmPi3=getSinApmB2(sinB,sPi3,cosB,cPi3);
   let sinAmPi3=getSinApmB2(sinA,sPi3,cosA,cPi3);
   /* end vars */
   let v1 = sinAmPi3;
   let v2 = sinBmPi3;
   let v3 = sinCmPi3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X17(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let sinCpPi6=getSinApmB1(sinC,sPi6,cosC,cPi6);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let sinBpPi6=getSinApmB1(sinB,sPi6,cosB,cPi6);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let sinApPi6=getSinApmB1(sinA,sPi6,cosA,cPi6);
   let cscCpPi6=1/sinCpPi6;
   let cscBpPi6=1/sinBpPi6;
   let cscApPi6=1/sinApPi6;
   /* end vars */
   let v1 = cscApPi6;
   let v2 = cscBpPi6;
   let v3 = cscCpPi6;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X18(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let sinCmPi6=getSinApmB2(sinC,sPi6,cosC,cPi6);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let sinBmPi6=getSinApmB2(sinB,sPi6,cosB,cPi6);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let sinAmPi6=getSinApmB2(sinA,sPi6,cosA,cPi6);
   let cscCmPi6=1/sinCmPi6;
   let cscBmPi6=1/sinBmPi6;
   let cscAmPi6=1/sinAmPi6;
   /* end vars */
   let v1 = cscAmPi6;
   let v2 = cscBmPi6;
   let v3 = cscCmPi6;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X19(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 1/(-a2+b2+c2);
   let v2 = 1/(a2-b2+c2);
   let v3 = 1/(a2+b2-c2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X20(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = cosA-cosB*cosC;
   let v2 = cosB-cosA*cosC;
   let v3 = -(cosA*cosB)+cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X21(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = (-a+b+c)/(b+c);
   let v2 = (a-b+c)/(a+c);
   let v3 = (a+b-c)/(a+b);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X22(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(-a4+b4+c4);
   let v2 = b*(a4-b4+c4);
   let v3 = c*(a4+b4-c4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X23(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(-a4+b4-b2*c2+c4);
   let v2 = b*(a4-b4-a2*c2+c4);
   let v3 = c*(a4-a2*b2+b4-c4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X24(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let secC=1/cosC;
   let cos2C=cosDoubleAngle(cosC);
   let secB=1/cosB;
   let cos2B=cosDoubleAngle(cosB);
   let secA=1/cosA;
   let cos2A=cosDoubleAngle(cosA);
   /* end vars */
   let v1 = cos2A*secA;
   let v2 = cos2B*secB;
   let v3 = cos2C*secC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X25(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a/(-a2+b2+c2);
   let v2 = b/(a2-b2+c2);
   let v3 = c/(a2+b2-c2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X26(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let cos2C=cosDoubleAngle(cosC);
   let c2=c*c;
   let cos2B=cosDoubleAngle(cosB);
   let b2=b*b;
   let cos2A=cosDoubleAngle(cosA);
   let a2=a*a;
   /* end vars */
   let v1 = a*(-(a2*cos2A)+b2*cos2B+c2*cos2C);
   let v2 = b*(a2*cos2A-b2*cos2B+c2*cos2C);
   let v3 = c*(a2*cos2A+b2*cos2B-c2*cos2C);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X27(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let secC=1/cosC;
   let secB=1/cosB;
   let secA=1/cosA;
   /* end vars */
   let v1 = secA/(b+c);
   let v2 = secB/(a+c);
   let v3 = secC/(a+b);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X28(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let tanC=sinC/cosC;
   let tanB=sinB/cosB;
   let tanA=sinA/cosA;
   /* end vars */
   let v1 = tanA/(b+c);
   let v2 = tanB/(a+c);
   let v3 = tanC/(a+b);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X29(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let secC=1/cosC;
   let secB=1/cosB;
   let secA=1/cosA;
   /* end vars */
   let v1 = secA/(cosB+cosC);
   let v2 = secB/(cosA+cosC);
   let v3 = secC/(cosA+cosB);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X30(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = -a+b+c;
   let v2 = a-b+c;
   let v3 = a+b-c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X31(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2;
   let v2 = b2;
   let v3 = c2;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X32(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3;
   let v2 = b3;
   let v3 = c3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X33(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let secC=1/cosC;
   let secB=1/cosB;
   let secA=1/cosA;
   /* end vars */
   let v1 = 1+secA;
   let v2 = 1+secB;
   let v3 = 1+secC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X34(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let secC=1/cosC;
   let secB=1/cosB;
   let secA=1/cosA;
   /* end vars */
   let v1 = 1-secA;
   let v2 = 1-secB;
   let v3 = 1-secC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X35(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = 1+2*cosA;
   let v2 = 1+2*cosB;
   let v3 = 1+2*cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X36(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = 1-2*cosA;
   let v2 = 1-2*cosB;
   let v3 = 1-2*cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X37(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = b+c;
   let v2 = a+c;
   let v3 = a+b;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X38(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2+c2;
   let v2 = a2+c2;
   let v3 = a2+b2;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X39(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(b2+c2);
   let v2 = b*(a2+c2);
   let v3 = (a2+b2)*c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X40(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = -1-cosA+cosB+cosC;
   let v2 = -1+cosA-cosB+cosC;
   let v3 = -1+cosA+cosB-cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X41(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(-a+b+c);
   let v2 = b2*(a-b+c);
   let v3 = (a+b-c)*c2;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X42(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b+c);
   let v2 = b*(a+c);
   let v3 = (a+b)*c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X43(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*b+a*c-b*c;
   let v2 = a*b-a*c+b*c;
   let v3 = -(a*b)+a*c+b*c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X44(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = -2*a+b+c;
   let v2 = a-2*b+c;
   let v3 = a+b-2*c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X45(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = -a+2*b+2*c;
   let v2 = 2*a-b+2*c;
   let v3 = 2*a+2*b-c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X46(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = -cosA+cosB+cosC;
   let v2 = cosA-cosB+cosC;
   let v3 = cosA+cosB-cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X47(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let cos2A=cosDoubleAngle(cosA);
   /* end vars */
   let v1 = cos2A;
   let v2 = cos2B;
   let v3 = cos2C;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X48(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let tanA=sinA/cosA;
   let tanC=sinC/cosC;
   let tanB=sinB/cosB;
   /* end vars */
   let v1 = tanB+tanC;
   let v2 = tanA+tanC;
   let v3 = tanA+tanB;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X49(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let sin2C=getSin(cos2C);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let sin2B=getSin(cos2B);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sin2A=getSin(cos2A);
   let sinA=getSin(cosA);
   let cos3C=cosTripleAngle(sinC,cosC,sin2C,cos2C);
   let cos3B=cosTripleAngle(sinB,cosB,sin2B,cos2B);
   let cos3A=cosTripleAngle(sinA,cosA,sin2A,cos2A);
   /* end vars */
   let v1 = cos3A;
   let v2 = cos3B;
   let v3 = cos3C;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X50(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let sin2C=getSin(cos2C);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let sin2B=getSin(cos2B);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sin2A=getSin(cos2A);
   let sinA=getSin(cosA);
   let sin3C=sinTripleAngle(sinC,cosC,sin2C,cos2C);
   let sin3B=sinTripleAngle(sinB,cosB,sin2B,cos2B);
   let sin3A=sinTripleAngle(sinA,cosA,sin2A,cos2A);
   /* end vars */
   let v1 = sin3A;
   let v2 = sin3B;
   let v3 = sin3C;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X51(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let c2=c*c;
   let sinA=getSin(cosA);
   let b2=b*b;
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   let a2=a*a;
   /* end vars */
   let v1 = a2*(cosB*cosC+sinB*sinC);
   let v2 = b2*(cosA*cosC+sinA*sinC);
   let v3 = c2*(cosA*cosB+sinA*sinB);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X52(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosA=lawOfCosines(a,b,c);
   let cosB=lawOfCosines(b,a,c);
   let cos2C=cosDoubleAngle(cosC);
   let sinA=getSin(cosA);
   let cos2B=cosDoubleAngle(cosB);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   let cos2A=cosDoubleAngle(cosA);
   /* end vars */
   let v1 = cos2A*(cosB*cosC+sinB*sinC);
   let v2 = cos2B*(cosA*cosC+sinA*sinC);
   let v3 = cos2C*(cosA*cosB+sinA*sinB);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X53(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let tanC=sinC/cosC;
   let tanB=sinB/cosB;
   let tanA=sinA/cosA;
   /* end vars */
   let v1 = (cosB*cosC+sinB*sinC)*tanA;
   let v2 = (cosA*cosC+sinA*sinC)*tanB;
   let v3 = (cosA*cosB+sinA*sinB)*tanC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X54(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let sinA=getSin(cosA);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   /* end vars */
   let v1 = 1/(cosB*cosC+sinB*sinC);
   let v2 = 1/(cosA*cosC+sinA*sinC);
   let v3 = 1/(cosA*cosB+sinA*sinB);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X55(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(-a+b+c);
   let v2 = b*(a-b+c);
   let v3 = (a+b-c)*c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X56(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/(-a+b+c);
   let v2 = b/(a-b+c);
   let v3 = c/(a+b-c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X57(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(-a+b+c);
   let v2 = 1/(a-b+c);
   let v3 = 1/(a+b-c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X58(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/(b+c);
   let v2 = b/(a+c);
   let v3 = c/(a+b);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X59(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let sinA=getSin(cosA);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   /* end vars */
   let v1 = 1/(1-cosB*cosC-sinB*sinC);
   let v2 = 1/(1-cosA*cosC-sinA*sinC);
   let v3 = 1/(1-cosA*cosB-sinA*sinB);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X60(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let sinA=getSin(cosA);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   /* end vars */
   let v1 = 1/(1+cosB*cosC+sinB*sinC);
   let v2 = 1/(1+cosA*cosC+sinA*sinC);
   let v3 = 1/(1+cosA*cosB+sinA*sinB);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X61(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   let sinA=getSin(cosA);
   /* end vars */
   let v1 = cPi6*sinA+cosA*sPi6;
   let v2 = cPi6*sinB+cosB*sPi6;
   let v3 = cPi6*sinC+cosC*sPi6;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X62(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   let sinA=getSin(cosA);
   /* end vars */
   let v1 = cPi6*sinA-cosA*sPi6;
   let v2 = cPi6*sinB-cosB*sPi6;
   let v3 = cPi6*sinC-cosC*sPi6;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X63(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let cotC=cosC/sinC;
   let cotB=cosB/sinB;
   let cotA=cosA/sinA;
   /* end vars */
   let v1 = cotA;
   let v2 = cotB;
   let v3 = cotC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X64(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = 1/(cosA-cosB*cosC);
   let v2 = 1/(cosB-cosA*cosC);
   let v3 = 1/(-(cosA*cosB)+cosC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X65(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   /* end vars */
   let v1 = cosB+cosC;
   let v2 = cosA+cosC;
   let v3 = cosA+cosB;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X66(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b*c)/(-a4+b4+c4);
   let v2 = (a*c)/(a4-b4+c4);
   let v3 = (a*b)/(a4+b4-c4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X67(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b*c)/(-a4+b4-b2*c2+c4);
   let v2 = (a*c)/(a4-b4-a2*c2+c4);
   let v3 = (a*b)/(a4-a2*b2+b4-c4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X68(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sec2C=1/cos2C;
   let sec2B=1/cos2B;
   let sec2A=1/cos2A;
   /* end vars */
   let v1 = cosA*sec2A;
   let v2 = cosB*sec2B;
   let v3 = cosC*sec2C;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X69(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let cosC=lawOfCosines(c,a,b);
   let b2=b*b;
   let cosB=lawOfCosines(b,a,c);
   let a2=a*a;
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = cosA/a2;
   let v2 = cosB/b2;
   let v3 = cosC/c2;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X70(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let cos2C=cosDoubleAngle(cosC);
   let c2=c*c;
   let cos2B=cosDoubleAngle(cosB);
   let b2=b*b;
   let cos2A=cosDoubleAngle(cosA);
   let a2=a*a;
   /* end vars */
   let v1 = (b*c)/(-(a2*cos2A)+b2*cos2B+c2*cos2C);
   let v2 = (a*c)/(a2*cos2A-b2*cos2B+c2*cos2C);
   let v3 = (a*b)/(a2*cos2A+b2*cos2B-c2*cos2C);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X71(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = (b+c)*cosA;
   let v2 = (a+c)*cosB;
   let v3 = (a+b)*cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X72(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let cotC=cosC/sinC;
   let cotB=cosB/sinB;
   let cotA=cosA/sinA;
   /* end vars */
   let v1 = (b+c)*cotA;
   let v2 = (a+c)*cotB;
   let v3 = (a+b)*cotC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X73(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let secA=1/cosA;
   let secC=1/cosC;
   let secB=1/cosB;
   /* end vars */
   let v1 = secB+secC;
   let v2 = secA+secC;
   let v3 = secA+secB;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X74(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = 1/(cosA-2*cosB*cosC);
   let v2 = 1/(cosB-2*cosA*cosC);
   let v3 = 1/(-2*cosA*cosB+cosC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X75(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 1/a2;
   let v2 = 1/b2;
   let v3 = 1/c2;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X76(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = 1/a3;
   let v2 = 1/b3;
   let v3 = 1/c3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X77(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let secC=1/cosC;
   let secB=1/cosB;
   let secA=1/cosA;
   /* end vars */
   let v1 = 1/(1+secA);
   let v2 = 1/(1+secB);
   let v3 = 1/(1+secC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X78(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let secC=1/cosC;
   let secB=1/cosB;
   let secA=1/cosA;
   /* end vars */
   let v1 = 1/(1-secA);
   let v2 = 1/(1-secB);
   let v3 = 1/(1-secC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X79(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = 1/(1+2*cosA);
   let v2 = 1/(1+2*cosB);
   let v3 = 1/(1+2*cosC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X80(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = 1/(1-2*cosA);
   let v2 = 1/(1-2*cosB);
   let v3 = 1/(1-2*cosC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X81(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(b+c);
   let v2 = 1/(a+c);
   let v3 = 1/(a+b);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X82(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 1/(b2+c2);
   let v2 = 1/(a2+c2);
   let v3 = 1/(a2+b2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X83(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b*c)/(b2+c2);
   let v2 = (a*c)/(a2+c2);
   let v3 = (a*b)/(a2+b2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X84(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = 1/(-1-cosA+cosB+cosC);
   let v2 = 1/(-1+cosA-cosB+cosC);
   let v3 = 1/(-1+cosA+cosB-cosC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X85(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b2*c2)/(-a+b+c);
   let v2 = (a2*c2)/(a-b+c);
   let v3 = (a2*b2)/(a+b-c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X86(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b*c)/(b+c);
   let v2 = (a*c)/(a+c);
   let v3 = (a*b)/(a+b);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X87(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(a*b+a*c-b*c);
   let v2 = 1/(a*b-a*c+b*c);
   let v3 = 1/(-(a*b)+a*c+b*c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X88(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(-2*a+b+c);
   let v2 = 1/(a-2*b+c);
   let v3 = 1/(a+b-2*c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X89(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(-a+2*b+2*c);
   let v2 = 1/(2*a-b+2*c);
   let v3 = 1/(2*a+2*b-c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X90(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = 1/(-cosA+cosB+cosC);
   let v2 = 1/(cosA-cosB+cosC);
   let v3 = 1/(cosA+cosB-cosC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X91(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sec2C=1/cos2C;
   let sec2B=1/cos2B;
   let sec2A=1/cos2A;
   /* end vars */
   let v1 = sec2A;
   let v2 = sec2B;
   let v3 = sec2C;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X92(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let sin2C=getSin(cos2C);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let sin2B=getSin(cos2B);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sin2A=getSin(cos2A);
   let csc2C=1/sin2C;
   let csc2B=1/sin2B;
   let csc2A=1/sin2A;
   /* end vars */
   let v1 = csc2A;
   let v2 = csc2B;
   let v3 = csc2C;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X93(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let sin2C=getSin(cos2C);
   let sinC=getSin(cosC);
   let cos3C=cosTripleAngle(sinC,cosC,sin2C,cos2C);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let sin2B=getSin(cos2B);
   let sinB=getSin(cosB);
   let cos3B=cosTripleAngle(sinB,cosB,sin2B,cos2B);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sin2A=getSin(cos2A);
   let sinA=getSin(cosA);
   let cos3A=cosTripleAngle(sinA,cosA,sin2A,cos2A);
   let sec3C=1/cos3C;
   let sec3B=1/cos3B;
   let sec3A=1/cos3A;
   /* end vars */
   let v1 = sec3A;
   let v2 = sec3B;
   let v3 = sec3C;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X94(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let sin2C=getSin(cos2C);
   let sinC=getSin(cosC);
   let sin3C=sinTripleAngle(sinC,cosC,sin2C,cos2C);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let sin2B=getSin(cos2B);
   let sinB=getSin(cosB);
   let sin3B=sinTripleAngle(sinB,cosB,sin2B,cos2B);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sin2A=getSin(cos2A);
   let sinA=getSin(cosA);
   let sin3A=sinTripleAngle(sinA,cosA,sin2A,cos2A);
   let csc3C=1/sin3C;
   let csc3B=1/sin3B;
   let csc3A=1/sin3A;
   /* end vars */
   let v1 = csc3A;
   let v2 = csc3B;
   let v3 = csc3C;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X95(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let sinA=getSin(cosA);
   let a2=a*a;
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b2*c2)/(cosB*cosC+sinB*sinC);
   let v2 = (a2*c2)/(cosA*cosC+sinA*sinC);
   let v3 = (a2*b2)/(cosA*cosB+sinA*sinB);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X96(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let cosA=lawOfCosines(a,b,c);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let cos2A=cosDoubleAngle(cosA);
   let sec2C=1/cos2C;
   let sinA=getSin(cosA);
   let sec2B=1/cos2B;
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   let sec2A=1/cos2A;
   /* end vars */
   let v1 = sec2A/(cosB*cosC+sinB*sinC);
   let v2 = sec2B/(cosA*cosC+sinA*sinC);
   let v3 = sec2C/(cosA*cosB+sinA*sinB);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X97(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosA=lawOfCosines(a,b,c);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let sinA=getSin(cosA);
   let cotC=cosC/sinC;
   let cotB=cosB/sinB;
   let cotA=cosA/sinA;
   /* end vars */
   let v1 = cotA/(cosB*cosC+sinB*sinC);
   let v2 = cotB/(cosA*cosC+sinA*sinC);
   let v3 = cotC/(cosA*cosB+sinA*sinB);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X98(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = (b*c)/(-(a2*b2)+b4-a2*c2+c4);
   let v2 = (a*c)/(a4-a2*b2-b2*c2+c4);
   let v3 = (a*b)/(a4+b4-a2*c2-b2*c2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X99(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b*c)/(b2-c2);
   let v2 = (a*c)/(-a2+c2);
   let v3 = (a*b)/(a2-b2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X100(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(b-c);
   let v2 = 1/(-a+c);
   let v3 = 1/(a-b);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X101(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/(b-c);
   let v2 = b/(-a+c);
   let v3 = c/(a-b);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X102(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let c3=c2*c;
   let b3=b2*b;
   let b4=b2*b2;
   let a3=a2*a;
   let a4=a2*a2;
   /* end vars */
   let v1 = a/(2*a4-a3*(b+c)-a*a2*Math.pow(b-c,4)*(b+c)-(b2-c2)*(b2-c2));
   let v2 = b/(2*b4-b3*(a+c)-b*b2*Math.pow(-a+c,4)*(a+c)-(-a2+c2)*(-a2+c2));
   let v3 = c/(-(a2-b2)*(a2-b2)-Math.pow(a-b,4)*(a+b)*c*c2-(a+b)*c3+2*c4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X103(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a/(2*a3-a2*(b+c)-(b-c)*(b-c)*(b+c));
   let v2 = b/(2*b3-b2*(a+c)-(-a+c)*(-a+c)*(a+c));
   let v3 = c/(-((a-b)*(a-b)*(a+b))-(a+b)*c2+2*c3);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X104(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = 1/(b3+2*a*b*c-(b+c)*(a2+b*c)+c3);
   let v2 = 1/(a3+2*a*b*c-(a+c)*(b2+a*c)+c3);
   let v3 = 1/(a3+b3+2*a*b*c-(a+b)*(a*b+c2));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X105(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 1/(b2-a*(b+c)+c2);
   let v2 = 1/(a2-b*(a+c)+c2);
   let v3 = 1/(a2+b2-(a+b)*c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X106(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/(2*a-b-c);
   let v2 = b/(-a+2*b-c);
   let v3 = c/(-a-b+2*c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X107(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b*c)/((b2-c2)*(-a2+b2+c2)*(-a2+b2+c2));
   let v2 = (a*c)/((-a2+c2)*(a2-b2+c2)*(a2-b2+c2));
   let v3 = (a*b)/((a2-b2)*(a2+b2-c2)*(a2+b2-c2));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X108(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 1/((b-c)*(-a+b+c)*(-a2+b2+c2));
   let v2 = 1/((-a+c)*(a-b+c)*(a2-b2+c2));
   let v3 = 1/((a-b)*(a+b-c)*(a2+b2-c2));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X109(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/((b-c)*(-a+b+c));
   let v2 = b/((-a+c)*(a-b+c));
   let v3 = c/((a-b)*(a+b-c));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X110(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a/(b2-c2);
   let v2 = b/(-a2+c2);
   let v3 = c/(a2-b2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X111(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a/(2*a2-b2-c2);
   let v2 = b/(-a2+2*b2-c2);
   let v3 = c/(-a2-b2+2*c2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X112(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a/((b2-c2)*(-a2+b2+c2));
   let v2 = b/((-a2+c2)*(a2-b2+c2));
   let v3 = c/((a2-b2)*(a2+b2-c2));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X113(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let sinA=getSin(cosA);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   /* end vars */
   let v1 = sinB*sinC*(sinB/(cosB-2*cosA*cosC)+sinC/(-2*cosA*cosB+cosC));
   let v2 = sinA*sinC*(sinA/(cosA-2*cosB*cosC)+sinC/(-2*cosA*cosB+cosC));
   let v3 = sinA*sinB*(sinA/(cosA-2*cosB*cosC)+sinB/(cosB-2*cosA*cosC));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X114(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = ((-(a2*b2)+b4-a2*c2+c4)*(2*a4-a2*b2+b4-a2*c2-2*b2*c2+c4))/a;
   let v2 = ((a4-a2*b2-b2*c2+c4)*(a4-a2*b2+2*b4-2*a2*c2-b2*c2+c4))/b;
   let v3 = ((a4+b4-a2*c2-b2*c2)*(a4-2*a2*b2+b4-a2*c2-b2*c2+2*c4))/c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X115(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b*c*(b2-c2)*(b2-c2);
   let v2 = a*c*(-a2+c2)*(-a2+c2);
   let v3 = a*b*(a2-b2)*(a2-b2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X116(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b*(b-c)*(b-c)*c*(-(a*b)+b2-a*c+b*c+c2);
   let v2 = a*c*(-a+c)*(-a+c)*(a2-a*b+a*c-b*c+c2);
   let v3 = a*(a-b)*(a-b)*b*(a2+a*b+b2-a*c-b*c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X117(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let a2=a*a;
   let c2=c*c;
   let secC=1/cosC;
   let secB=1/cosB;
   let secA=1/cosA;
   let b2=b*b;
   /* end vars */
   let v1 = (b2*c)/(a*(-secA+secB)+c*(secB-secC))+(b*c2)/(a*(-secA+secC)+b*(-secB+secC));
   let v2 = (a2*c)/(b*(secA-secB)+c*(secA-secC))+(a*c2)/(a*(-secA+secC)+b*(-secB+secC));
   let v3 = (a2*b)/(b*(secA-secB)+c*(secA-secC))+(a*b2)/(a*(-secA+secB)+c*(secB-secC));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X118(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let b2=b*b;
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let c2=c*c;
   let a3=a2*a;
   let tanC=sinC/cosC;
   let b3=b2*b;
   let tanB=sinB/cosB;
   let tanA=sinA/cosA;
   let c3=c2*c;
   /* end vars */
   let v1 = (b*c3)/((-b+c)/tanA+(-a+c)/tanB)+(b3*c)/((b-c)/tanA+(-a+b)/tanC);
   let v2 = (a*c3)/((-b+c)/tanA+(-a+c)/tanB)+(a3*c)/((a-c)/tanB+(a-b)/tanC);
   let v3 = (a3*b)/((a-c)/tanB+(a-b)/tanC)+(a*b3)/((b-c)/tanA+(-a+b)/tanC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X119(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let sinA=getSin(cosA);
   let cscC=1/sinC;
   let sin2A=getSin(cos2A);
   let cscB=1/sinB;
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let cscA=1/sinA;
   /* end vars */
   let v1 = (-1+cosB+cosC)*cscA*(sin2B+sin2C+2*(-1+cosA)*(sinB+sinC));
   let v2 = (-1+cosA+cosC)*cscB*(sin2A+sin2C+2*(-1+cosB)*(sinA+sinC));
   let v3 = (-1+cosA+cosB)*cscC*(sin2A+sin2B+2*(-1+cosC)*(sinA+sinB));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X120(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = b*c*(2*a*b*c-(a2+(b-c)*(b-c))*(b+c))*(-(a*b)+b2-a*c+c2);
   let v2 = a*c*(2*a*b*c-(a+c)*(b2+(-a+c)*(-a+c)))*(a2-a*b-b*c+c2);
   let v3 = a*b*(a2+b2-a*c-b*c)*(2*a*b*c-(a+b)*((a-b)*(a-b)+c2));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X121(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = b*c*(-2*a+b+c)*(b3-2*b*c*(b+c)+a*(b2+c2)+c3);
   let v2 = a*c*(a-2*b+c)*(a3-2*a*c*(a+c)+b*(a2+c2)+c3);
   let v3 = a*b*(a+b-2*c)*(a3-2*a*b*(a+b)+b3+(a2+b2)*c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X122(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let sin2C=getSin(cos2C);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let sin2B=getSin(cos2B);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sin2A=getSin(cos2A);
   let tan2C=sin2C/cos2C;
   let tan2B=sin2B/cos2B;
   let a2=a*a;
   let tan2A=sin2A/cos2A;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = ((b2-c2)*(b2-c2)*(cosA-cosB*cosC))/tan2A;
   let v2 = ((-a2+c2)*(-a2+c2)*(cosB-cosA*cosC))/tan2B;
   let v3 = ((a2-b2)*(a2-b2)*(-(cosA*cosB)+cosC))/tan2C;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X123(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let cos2A=cosDoubleAngle(cosA);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let cscC=1/sinC;
   let tanA=sinA/cosA;
   let sin2A=getSin(cos2A);
   let cscB=1/sinB;
   let tanC=sinC/cosC;
   let tanB=sinB/cosB;
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let secA=1/cosA;
   let secC=1/cosC;
   let secB=1/cosB;
   let cscA=1/sinA;
   /* end vars */
   let v1 = cscA*(secB-secC)*(secA*(sin2B-sin2C)-sinB*tanB+sinC*tanC);
   let v2 = cscB*(-secA+secC)*(secB*(-sin2A+sin2C)+sinA*tanA-sinC*tanC);
   let v3 = cscC*(secA-secB)*(secC*(sin2A-sin2B)-sinA*tanA+sinB*tanB);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X124(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = b*(b-c)*(b-c)*c*(-a+b+c)*(a*b*c+(b+c)*(-a2+b2-b*c+c2));
   let v2 = a*c*(-a+c)*(-a+c)*(a-b+c)*(a*b*c+(a+c)*(a2-b2-a*c+c2));
   let v3 = a*(a-b)*(a-b)*b*(a+b-c)*(a*b*c+(a+b)*(a2-a*b+b2-c2));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X125(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b*c*(b2-c2)*(b2-c2)*(-a2+b2+c2);
   let v2 = a*c*(-a2+c2)*(-a2+c2)*(a2-b2+c2);
   let v3 = a*b*(a2-b2)*(a2-b2)*(a2+b2-c2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X126(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = b*c*(2*a2-b2-c2)*(b4-4*b2*c2+a2*(b2+c2)+c4);
   let v2 = a*c*(-a2+2*b2-c2)*(a4-4*a2*c2+b2*(a2+c2)+c4);
   let v3 = a*b*(-a2-b2+2*c2)*(a4-4*a2*b2+b4+(a2+b2)*c2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X127(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let a2=a*a;
   let sin2A=getSin(cos2A);
   let c2=c*c;
   let b2=b*b;
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   /* end vars */
   let v1 = b*c*(sin2B-sin2C)*((b2-c2)*sin2A-b2*sin2B+c2*sin2C);
   let v2 = a*c*(-sin2A+sin2C)*(a2*sin2A+(-a2+c2)*sin2B-c2*sin2C);
   let v3 = a*b*(sin2A-sin2B)*(-(a2*sin2A)+b2*sin2B+(a2-b2)*sin2C);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X128(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let secC=1/cosC;
   let secB=1/cosB;
   let secA=1/cosA;
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let cos2A=cosDoubleAngle(cosA);
   /* end vars */
   let v1 = (1+2*cos2A)*(cos2B+cos2C)*(cos2A+2*cos2B*cos2C)*secA;
   let v2 = (1+2*cos2B)*(cos2A+cos2C)*(cos2B+2*cos2A*cos2C)*secB;
   let v3 = (cos2A+cos2B)*(2*cos2A*cos2B+cos2C)*(1+2*cos2C)*secC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X129(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let secC=1/cosC;
   let secB=1/cosB;
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let sin2A=getSin(cos2A);
   let secA=1/cosA;
   /* end vars */
   let v1 = secA*sin2A*(sin2B+sin2C)*(-(sin2A*sin2A*sin2B*sin2B)+Math.pow(sin2B,4)-sin2A*sin2A*sin2C*sin2C+Math.pow(sin2C,4))*(Math.pow(sin2A,4)+sin2B*(sin2B-sin2C)*(sin2B-sin2C)*sin2C+sin2A*sin2A*(-sin2B*sin2B+sin2B*sin2C-sin2C*sin2C));
   let v2 = secB*sin2B*(sin2A+sin2C)*(Math.pow(sin2A,4)-sin2A*sin2A*sin2B*sin2B-sin2B*sin2B*sin2C*sin2C+Math.pow(sin2C,4))*(Math.pow(sin2B,4)+sin2A*sin2C*(-sin2A+sin2C)*(-sin2A+sin2C)+sin2B*sin2B*(-sin2A*sin2A+sin2A*sin2C-sin2C*sin2C));
   let v3 = secC*(sin2A+sin2B)*sin2C*(Math.pow(sin2A,4)+Math.pow(sin2B,4)-sin2A*sin2A*sin2C*sin2C-sin2B*sin2B*sin2C*sin2C)*(sin2A*(sin2A-sin2B)*(sin2A-sin2B)*sin2B+(-sin2A*sin2A+sin2A*sin2B-sin2B*sin2B)*sin2C*sin2C+Math.pow(sin2C,4));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X130(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   let sinA=getSin(cosA);
   let sin2A=getSin(cos2A);
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   /* end vars */
   let v1 = (sin2B-sin2C)*(sin2B-sin2C)*(sin2B+sin2C)*(sin2A*sin2A+sin2B*sin2C)*sinA;
   let v2 = (-sin2A+sin2C)*(-sin2A+sin2C)*(sin2A+sin2C)*(sin2B*sin2B+sin2A*sin2C)*sinB;
   let v3 = (sin2A-sin2B)*(sin2A-sin2B)*(sin2A+sin2B)*(sin2A*sin2B+sin2C*sin2C)*sinC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X131(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let sin2A=getSin(cos2A);
   let tan2C=sin2C/cos2C;
   let tan2B=sin2B/cos2B;
   let tan2A=sin2A/cos2A;
   let secC=1/cosC;
   let secB=1/cosB;
   let sumS2=sin2A+sin2B+sin2C;
   let sec2C=1/cos2C;
   let sec2B=1/cos2B;
   let sumT2=tan2A+tan2B+tan2C;
   let sec2A=1/cos2A;
   let S=2*triAreaHeron(a,b,c);
   let secA=1/cosA;
   /* end vars */
   let v1 = secA*(-(S*sec2A)+sumT2)*(-((sec2B+sec2C)*sumS2)+2*sumT2);
   let v2 = secB*(-(S*sec2B)+sumT2)*(-((sec2A+sec2C)*sumS2)+2*sumT2);
   let v3 = secC*(-(S*sec2C)+sumT2)*(-((sec2A+sec2B)*sumS2)+2*sumT2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X132(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let secC=1/cosC;
   let secB=1/cosB;
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let sin2A=getSin(cos2A);
   let secA=1/cosA;
   /* end vars */
   let v1 = secA*(sin2A*sin2A+sin2A*(sin2A-sin2B-sin2C)+(sin2B-sin2C)*(sin2B-sin2C))*(-(sin2A*sin2B)+sin2B*sin2B-sin2A*sin2C+sin2C*sin2C);
   let v2 = secB*(sin2A*sin2A-sin2A*sin2B-sin2B*sin2C+sin2C*sin2C)*(sin2B*sin2B+sin2B*(-sin2A+sin2B-sin2C)+(-sin2A+sin2C)*(-sin2A+sin2C));
   let v3 = secC*(sin2A*sin2A+sin2B*sin2B-sin2A*sin2C-sin2B*sin2C)*((sin2A-sin2B)*(sin2A-sin2B)+sin2C*sin2C+sin2C*(-sin2A-sin2B+sin2C));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X133(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let secC=1/cosC;
   let secB=1/cosB;
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let sin2A=getSin(cos2A);
   let secA=1/cosA;
   /* end vars */
   let v1 = secA*(2*sin2A-sin2B-sin2C)*(sin2A*sin2B+(sin2B-sin2C)*(sin2B-sin2C)+sin2A*sin2C-2*sin2B*sin2C);
   let v2 = secB*(-sin2A+2*sin2B-sin2C)*(sin2A*sin2B-2*sin2A*sin2C+sin2B*sin2C+(-sin2A+sin2C)*(-sin2A+sin2C));
   let v3 = secC*(-sin2A-sin2B+2*sin2C)*((sin2A-sin2B)*(sin2A-sin2B)-2*sin2A*sin2B+sin2A*sin2C+sin2B*sin2C);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X134(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let secC=1/cosC;
   let secB=1/cosB;
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let sin2A=getSin(cos2A);
   let secA=1/cosA;
   /* end vars */
   let v1 = secA*sin2A*(sin2B*sin2B-sin2C*sin2C)*Math.pow(-sin2A*sin2A+sin2B*sin2B+sin2C*sin2C,2)*((sin2A*sin2A-sin2B*sin2B)*sin2C*Math.pow(sin2A*sin2A+sin2B*sin2B-sin2C*sin2C,2)-sin2B*(sin2A*sin2A-sin2C*sin2C)*Math.pow(sin2A*sin2A-sin2B*sin2B+sin2C*sin2C,2));
   let v2 = secB*sin2B*(-sin2A*sin2A+sin2C*sin2C)*Math.pow(sin2A*sin2A-sin2B*sin2B+sin2C*sin2C,2)*(-((-sin2A*sin2A+sin2B*sin2B)*sin2C*Math.pow(sin2A*sin2A+sin2B*sin2B-sin2C*sin2C,2))+sin2A*(sin2B*sin2B-sin2C*sin2C)*Math.pow(-sin2A*sin2A+sin2B*sin2B+sin2C*sin2C,2));
   let v3 = secC*(sin2A*sin2A-sin2B*sin2B)*sin2C*Math.pow(sin2A*sin2A+sin2B*sin2B-sin2C*sin2C,2)*(sin2B*(-sin2A*sin2A+sin2C*sin2C)*Math.pow(sin2A*sin2A-sin2B*sin2B+sin2C*sin2C,2)-sin2A*(-sin2B*sin2B+sin2C*sin2C)*Math.pow(-sin2A*sin2A+sin2B*sin2B+sin2C*sin2C,2));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X135(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let cos2C=cosDoubleAngle(cosC);
   let secC=1/cosC;
   let sin2A=getSin(cos2A);
   let secB=1/cosB;
   let sec2B=1/cos2B;
   let sin2C=getSin(cos2C);
   let sec2C=1/cos2C;
   let sec2A=1/cos2A;
   let sin2B=getSin(cos2B);
   let secA=1/cosA;
   /* end vars */
   let v1 = secA*(sin2B/(-sec2A+sec2C)+sin2C/(sec2A-sec2B));
   let v2 = secB*(sin2A/(sec2B-sec2C)+sin2C/(sec2A-sec2B));
   let v3 = secC*(sin2A/(sec2B-sec2C)+sin2B/(-sec2A+sec2C));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X136(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = ((b2-c2)*(b2-c2)*(a4-2*a2*b2+b4-2*a2*c2+c4))/(a*(a2-b2-c2));
   let v2 = ((-a2+c2)*(-a2+c2)*(a4-2*a2*b2+b4-2*b2*c2+c4))/(b*(-a2+b2-c2));
   let v3 = ((a2-b2)*(a2-b2)*(a4+b4-2*a2*c2-2*b2*c2+c4))/(c*(-a2-b2+c2));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X137(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let secC=1/cosC;
   let secB=1/cosB;
   let sin2A=getSin(cos2A);
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let secA=1/cosA;
   /* end vars */
   let v1 = secA*(sin2B-sin2C)*(sin2B-sin2C)*(sin2B+sin2C)*(sin2A*sin2A-sin2B*sin2B-sin2B*sin2C-sin2C*sin2C);
   let v2 = secB*(-sin2A+sin2C)*(-sin2A+sin2C)*(sin2A+sin2C)*(-sin2A*sin2A+sin2B*sin2B-sin2A*sin2C-sin2C*sin2C);
   let v3 = secC*(sin2A-sin2B)*(sin2A-sin2B)*(sin2A+sin2B)*(-sin2A*sin2A-sin2A*sin2B-sin2B*sin2B+sin2C*sin2C);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X138(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cos2C=cosDoubleAngle(cosC);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let cos2B=cosDoubleAngle(cosB);
   let secC=1/cosC;
   let secB=1/cosB;
   let sin2C=getSin(cos2C);
   let sin2A=getSin(cos2A);
   let sin2B=getSin(cos2B);
   let secA=1/cosA;
   /* end vars */
   let v1 = secA*(sin2B/(-sin2A*sin2A+2*sin2B*sin2B-sin2C*sin2C)+sin2C/(-sin2A*sin2A-sin2B*sin2B+2*sin2C*sin2C));
   let v2 = secB*(sin2A/(2*sin2A*sin2A-sin2B*sin2B-sin2C*sin2C)+sin2C/(-sin2A*sin2A-sin2B*sin2B+2*sin2C*sin2C));
   let v3 = secC*(sin2A/(2*sin2A*sin2A-sin2B*sin2B-sin2C*sin2C)+sin2B/(-sin2A*sin2A+2*sin2B*sin2B-sin2C*sin2C));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X139(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let cos2C=cosDoubleAngle(cosC);
   let cos2B=cosDoubleAngle(cosB);
   let secC=1/cosC;
   let secB=1/cosB;
   let sin2A=getSin(cos2A);
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let secA=1/cosA;
   /* end vars */
   let v1 = secA*(sin2B-sin2C)*(sin2B-sin2C)*(sin2B+sin2C)*(-sin2A*sin2A+sin2B*sin2B+sin2C*sin2C)*(-Math.pow(sin2A,4)+Math.pow(sin2B,4)+Math.pow(sin2C,4)+sin2B*sin2C*(-sin2A*sin2A+sin2B*sin2B+sin2C*sin2C));
   let v2 = secB*(-sin2A+sin2C)*(-sin2A+sin2C)*(sin2A+sin2C)*(sin2A*sin2A-sin2B*sin2B+sin2C*sin2C)*(Math.pow(sin2A,4)-Math.pow(sin2B,4)+Math.pow(sin2C,4)+sin2A*sin2C*(sin2A*sin2A-sin2B*sin2B+sin2C*sin2C));
   let v3 = secC*(sin2A-sin2B)*(sin2A-sin2B)*(sin2A+sin2B)*(sin2A*sin2A+sin2B*sin2B-sin2C*sin2C)*(Math.pow(sin2A,4)+Math.pow(sin2B,4)-Math.pow(sin2C,4)+sin2A*sin2B*(sin2A*sin2A+sin2B*sin2B-sin2C*sin2C));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X140(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = 2*a3+(b2-c2)*(b2-c2)/a-3*a*(b2+c2);
   let v2 = 2*b3+(-a2+c2)*(-a2+c2)/b-3*b*(a2+c2);
   let v3 = (a2-b2)*(a2-b2)/c-3*(a2+b2)*c+2*c3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X141(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b*c*(b2+c2);
   let v2 = a*c*(a2+c2);
   let v3 = a*b*(a2+b2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X142(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = b-(b-c)*(b-c)/a+c;
   let v2 = a+c-(-a+c)*(-a+c)/b;
   let v3 = a+b-(a-b)*(a-b)/c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X143(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a*(a2*b2-b4+a2*c2+2*b2*c2-c4)*(a4-2*a2*b2+b4-2*a2*c2-b2*c2+c4);
   let v2 = b*(-a4+a2*b2+2*a2*c2+b2*c2-c4)*(a4-2*a2*b2+b4-a2*c2-2*b2*c2+c4);
   let v3 = c*(-a4+2*a2*b2-b4+a2*c2+b2*c2)*(a4-a2*b2+b4-2*a2*c2-2*b2*c2+c4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X144(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = 3*a-(b-c)*(b-c)/a-2*(b+c);
   let v2 = 3*b-(-a+c)*(-a+c)/b-2*(a+c);
   let v3 = -2*(a+b)-(a-b)*(a-b)/c+3*c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X145(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*(3*a-b-c)*c;
   let v2 = a*(-a+3*b-c)*c;
   let v3 = a*b*(-a-b+3*c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X146(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   let a3=a2*a;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = Math.pow(a,9)+Math.pow(a,7)*(b2+c2)-(Math.pow(b2-c2,4)*(b2+c2))/a-a*(b2-c2)*(b2-c2)*(b4+9*b2*c2+c4)+2*a3*(b2+c2)*(4*b4-7*b2*c2+4*c4)-Math.pow(a,5)*(8*b4-9*b2*c2+8*c4);
   let v2 = Math.pow(b,9)+Math.pow(b,7)*(a2+c2)-(Math.pow(-a2+c2,4)*(a2+c2))/b-b*(-a2+c2)*(-a2+c2)*(a4+9*a2*c2+c4)+2*b3*(a2+c2)*(4*a4-7*a2*c2+4*c4)-Math.pow(b,5)*(8*a4-9*a2*c2+8*c4);
   let v3 = -((Math.pow(a2-b2,4)*(a2+b2))/c)-(a2-b2)*(a2-b2)*(a4+9*a2*b2+b4)*c-(8*a4-9*a2*b2+8*b4)*Math.pow(c,5)+(a2+b2)*Math.pow(c,7)+Math.pow(c,9)+2*(a2+b2)*(4*a4-7*a2*b2+4*b4)*c3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X147(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let a2=a*a;
   let a4=a2*a2;
   let b4=b2*b2;
   let b6=b2*b4;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = b*c*(a8-b8+b6*c2+a6*(b2+c2)-a4*(2*b4+3*b2*c2+2*c4)+b2*c6+a2*(b6+b4*c2+b2*c4+c6)-c8);
   let v2 = a*c*(-a8+b8+a6*c2+b6*(a2+c2)-b4*(2*a4+3*a2*c2+2*c4)+a2*c6+b2*(a6+a4*c2+a2*c4+c6)-c8);
   let v3 = a*b*(-a8+a6*b2+a2*b6-b8+(a6+a4*b2+a2*b4+b6)*c2-(2*a4+3*a2*b2+2*b4)*c4+(a2+b2)*c6+c8);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X148(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = b*c*(a4-a2*b2-(b2-c2)*(b2-c2)-a2*c2+b2*c2);
   let v2 = a*c*(-(a2*b2)+b4+a2*c2-b2*c2-(-a2+c2)*(-a2+c2));
   let v3 = a*b*(-(a2-b2)*(a2-b2)+a2*b2-a2*c2-b2*c2+c4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X149(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = b*c*(-a3+b3+(b+c)*(a2-b*c)+a*(-b2+b*c-c2)+c3);
   let v2 = a*c*(a3-b3+(a+c)*(b2-a*c)+b*(-a2+a*c-c2)+c3);
   let v3 = a*b*(a3+b3+(-a2+a*b-b2)*c+(a+b)*(-(a*b)+c2)-c3);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X150(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = b*c*(-a4+b4+a3*(b+c)-b*c*(a2+b2+c2)+a*(-b3+b2*c+b*c2-c3)+c4);
   let v2 = a*c*(a4-b4+b3*(a+c)-a*c*(a2+b2+c2)+b*(-a3+a2*c+a*c2-c3)+c4);
   let v3 = a*b*(a4+b4+(-a3+a2*b+a*b2-b3)*c-a*b*(a2+b2+c2)+(a+b)*c3-c4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X151(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let b2=b*b;
   let b4=b2*b2;
   let a2=a*a;
   let a4=a2*a2;
   let c6=c2*c4;
   let b6=b2*b4;
   let c3=c2*c;
   let b3=b2*b;
   let a6=a2*a4;
   let a3=a2*a;
   /* end vars */
   let v1 = ((a+b+c)*(a+b+c)*(Math.pow(a,10)-Math.pow(a,9)*(b+c)+12*Math.pow(a,5)*b*(b-c)*(b-c)*c*(b+c)+a*Math.pow(b-c,6)*Math.pow(b+c,3)+2*Math.pow(a,7)*(b+c)*(b2-4*b*c+c2)-Math.pow(b2-c2,4)*(b2-b*c+c2)+Math.pow(a,8)*(b2+3*b*c+c2)-2*a3*Math.pow(b-c,4)*(b+c)*(b2+4*b*c+c2)+4*a4*(b2-c2)*(b2-c2)*(2*b2-3*b*c+2*c2)+2*a6*(-4*b4+b3*c+8*b2*c2+b*c3-4*c4)-a2*(b2-c2)*(b2-c2)*(b4-6*b3*c+14*b2*c2-6*b*c3+c4)))/a;
   let v2 = ((a+b+c)*(a+b+c)*(Math.pow(b,10)-Math.pow(b,9)*(a+c)+12*a*Math.pow(b,5)*c*(-a+c)*(-a+c)*(a+c)+b*Math.pow(-a+c,6)*Math.pow(a+c,3)+2*Math.pow(b,7)*(a+c)*(a2-4*a*c+c2)-Math.pow(-a2+c2,4)*(a2-a*c+c2)+Math.pow(b,8)*(a2+3*a*c+c2)-2*b3*Math.pow(-a+c,4)*(a+c)*(a2+4*a*c+c2)+4*b4*(-a2+c2)*(-a2+c2)*(2*a2-3*a*c+2*c2)+2*b6*(-4*a4+a3*c+8*a2*c2+a*c3-4*c4)-b2*(-a2+c2)*(-a2+c2)*(a4-6*a3*c+14*a2*c2-6*a*c3+c4)))/b;
   let v3 = ((a+b+c)*(a+b+c)*(-(Math.pow(a2-b2,4)*(a2-a*b+b2))+Math.pow(a-b,6)*Math.pow(a+b,3)*c+12*a*(a-b)*(a-b)*b*(a+b)*Math.pow(c,5)+2*(a+b)*(a2-4*a*b+b2)*Math.pow(c,7)+(a2+3*a*b+b2)*Math.pow(c,8)-(a+b)*Math.pow(c,9)+Math.pow(c,10)-(a2-b2)*(a2-b2)*(a4-6*a3*b+14*a2*b2-6*a*b3+b4)*c2-2*Math.pow(a-b,4)*(a+b)*(a2+4*a*b+b2)*c3+4*(a2-b2)*(a2-b2)*(2*a2-3*a*b+2*b2)*c4+2*(-4*a4+a3*b+8*a2*b2+a*b3-4*b4)*c6))/c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X152(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a3=a2*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let c5=c2*c3;
   let b5=b2*b3;
   let b8=b2*b6;
   let a5=a2*a3;
   let a8=a2*a6;
   /* end vars */
   let v1 = (a8-Math.pow(a,7)*(b+c)+a*Math.pow(b-c,4)*Math.pow(b+c,3)-a4*b*c*(b2-6*b*c+c2)-Math.pow(b-c,4)*(b+c)*(b+c)*(b2+b*c+c2)+Math.pow(a,6)*(2*b2+b*c+2*c2)-a5*(b+c)*(5*b2-6*b*c+5*c2)+a3*(b-c)*(b-c)*(b+c)*(5*b2+6*b*c+5*c2)-a2*(b-c)*(b-c)*(2*b4+5*b3*c+10*b2*c2+5*b*c3+2*c4))/a;
   let v2 = (b8-Math.pow(b,7)*(a+c)+b*Math.pow(-a+c,4)*Math.pow(a+c,3)-a*b4*c*(a2-6*a*c+c2)-Math.pow(-a+c,4)*(a+c)*(a+c)*(a2+a*c+c2)+Math.pow(b,6)*(2*a2+a*c+2*c2)-b5*(a+c)*(5*a2-6*a*c+5*c2)+b3*(-a+c)*(-a+c)*(a+c)*(5*a2+6*a*c+5*c2)-b2*(-a+c)*(-a+c)*(2*a4+5*a3*c+10*a2*c2+5*a*c3+2*c4))/b;
   let v3 = (-(Math.pow(a-b,4)*(a+b)*(a+b)*(a2+a*b+b2))+Math.pow(a-b,4)*Math.pow(a+b,3)*c+(2*a2+a*b+2*b2)*Math.pow(c,6)-(a+b)*Math.pow(c,7)-(a-b)*(a-b)*(2*a4+5*a3*b+10*a2*b2+5*a*b3+2*b4)*c2+(a-b)*(a-b)*(a+b)*(5*a2+6*a*b+5*b2)*c3-a*b*(a2-6*a*b+b2)*c4-(a+b)*(5*a2-6*a*b+5*b2)*c5+c8)/c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X153(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let b4=b2*b2;
   let a2=a*a;
   let a3=a2*a;
   let a4=a2*a2;
   let c6=c2*c4;
   let c5=c2*c3;
   let b5=b2*b3;
   let b6=b2*b4;
   let a5=a2*a3;
   let a6=a2*a4;
   /* end vars */
   let v1 = (Math.pow(a,7)-a6*(b+c)-Math.pow(b-c,4)*Math.pow(b+c,3)-a5*(b2-7*b*c+c2)+a4*(b+c)*(b2-6*b*c+c2)+a*(b2-c2)*(b2-c2)*(b2-5*b*c+c2)+a2*(b-c)*(b-c)*(b+c)*(b2+6*b*c+c2)-a3*(b4+2*b3*c-10*b2*c2+2*b*c3+c4))/a;
   let v2 = (Math.pow(b,7)-b6*(a+c)-Math.pow(-a+c,4)*Math.pow(a+c,3)-b5*(a2-7*a*c+c2)+b4*(a+c)*(a2-6*a*c+c2)+b*(-a2+c2)*(-a2+c2)*(a2-5*a*c+c2)+b2*(-a+c)*(-a+c)*(a+c)*(a2+6*a*c+c2)-b3*(a4+2*a3*c-10*a2*c2+2*a*c3+c4))/b;
   let v3 = (-(Math.pow(a-b,4)*Math.pow(a+b,3))+(a2-b2)*(a2-b2)*(a2-5*a*b+b2)*c+Math.pow(c,7)+(a-b)*(a-b)*(a+b)*(a2+6*a*b+b2)*c2-(a4+2*a3*b-10*a2*b2+2*a*b3+b4)*c3+(a+b)*(a2-6*a*b+b2)*c4-(a2-7*a*b+b2)*c5-(a+b)*c6)/c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X154(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let tanC=sinC/cosC;
   let tanB=sinB/cosB;
   let tanA=sinA/cosA;
   /* end vars */
   let v1 = a*(-tanA+tanB+tanC);
   let v2 = b*(tanA-tanB+tanC);
   let v3 = c*(tanA+tanB-tanC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X155(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = cosA*(-cosA*cosA+cosB*cosB+cosC*cosC);
   let v2 = cosB*(cosA*cosA-cosB*cosB+cosC*cosC);
   let v3 = cosC*(cosA*cosA+cosB*cosB-cosC*cosC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X156(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let b2=b*b;
   let b4=b2*b2;
   let a2=a*a;
   let a4=a2*a2;
   let c6=c2*c4;
   let b6=b2*b4;
   let a6=a2*a4;
   /* end vars */
   let v1 = a*(a2*Math.pow(a2-b2,3)+(-3*a6+2*a4*b2+b6)*c2+(3*a4-2*b4)*c4+(-a2+b2)*c6);
   let v2 = b*(b2*Math.pow(b2-c2,3)+a6*(-b2+c2)+a4*(3*b4-2*c4)+a2*(-3*b6+2*b4*c2+c6));
   let v3 = c*(b6*(a2-c2)+c2*Math.pow(-a2+c2,3)+b4*(-2*a4+3*c4)+b2*(a6+2*a2*c4-3*c6));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X157(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let cosC=lawOfCosines(c,a,b);
   let c3=c2*c;
   let cosB=lawOfCosines(b,a,c);
   let b3=b2*b;
   let cosA=lawOfCosines(a,b,c);
   let a3=a2*a;
   /* end vars */
   let v1 = a*(-(a3*cosA)+b3*cosB+c3*cosC);
   let v2 = b*(a3*cosA-b3*cosB+c3*cosC);
   let v3 = c*(a3*cosA+b3*cosB-c3*cosC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X158(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let secC=1/cosC;
   let secB=1/cosB;
   let secA=1/cosA;
   /* end vars */
   let v1 = secA*secA;
   let v2 = secB*secB;
   let v3 = secC*secC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X159(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let sin2A=getSin(cos2A);
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*((a2+b2+c2)*sin2A+(-a2-b2+c2)*sin2B+(-a2+b2-c2)*sin2C);
   let v2 = b*((-a2-b2+c2)*sin2A+(a2+b2+c2)*sin2B+(a2-b2-c2)*sin2C);
   let v3 = c*((-a2+b2-c2)*sin2A+(a2-b2-c2)*sin2B+(a2+b2+c2)*sin2C);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X160(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let a2=a*a;
   let sin2A=getSin(cos2A);
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*((b2+c2)*sin2A+(-a2+c2)*sin2B+(-a2+b2)*sin2C);
   let v2 = b*((-b2+c2)*sin2A+(a2+c2)*sin2B+(a2-b2)*sin2C);
   let v3 = c*((b2-c2)*sin2A+(a2-c2)*sin2B+(a2+b2)*sin2C);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X161(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cos2C=cosDoubleAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cos2B=cosDoubleAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cos2A=cosDoubleAngle(cosA);
   let sin2C=getSin(cos2C);
   let sin2B=getSin(cos2B);
   let sin2A=getSin(cos2A);
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*((a2+b2+c2)*sin2A*sin2A+(-a2-b2+c2)*sin2B*sin2B+(-a2+b2-c2)*sin2C*sin2C);
   let v2 = b*((-a2-b2+c2)*sin2A*sin2A+(a2+b2+c2)*sin2B*sin2B+(a2-b2-c2)*sin2C*sin2C);
   let v3 = c*((-a2+b2-c2)*sin2A*sin2A+(a2-b2-c2)*sin2B*sin2B+(a2+b2+c2)*sin2C*sin2C);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X162(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 1/((b2-c2)*(-a2+b2+c2));
   let v2 = 1/((-a2+c2)*(a2-b2+c2));
   let v3 = 1/((a2-b2)*(a2+b2-c2));
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X163(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/(b2-c2);
   let v2 = b2/(-a2+c2);
   let v3 = c2/(a2-b2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X164(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let sinHalfC=sinHalfAngle(cosC);
   let sinHalfB=sinHalfAngle(cosB);
   let sinHalfA=sinHalfAngle(cosA);
   /* end vars */
   let v1 = -sinHalfA+sinHalfB+sinHalfC;
   let v2 = sinHalfA-sinHalfB+sinHalfC;
   let v3 = sinHalfA+sinHalfB-sinHalfC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X165(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 3*a2-(b-c)*(b-c)-2*a*(b+c);
   let v2 = 3*b2-(-a+c)*(-a+c)-2*b*(a+c);
   let v3 = -(a-b)*(a-b)-2*(a+b)*c+3*c2;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X166(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosHalfC=cosHalfAngle(cosC);
   let sinHalfC=sinHalfAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfB=cosHalfAngle(cosB);
   let sinHalfB=sinHalfAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfA=cosHalfAngle(cosA);
   let sinHalfA=sinHalfAngle(cosA);
   let tanHalfC=sinHalfC/cosHalfC;
   let tanHalfB=sinHalfB/cosHalfB;
   let tanHalfA=sinHalfA/cosHalfA;
   /* end vars */
   let v1 = tanHalfA/(-cosHalfA+cosHalfB+cosHalfC)-tanHalfB/(cosHalfA-cosHalfB+cosHalfC)-tanHalfC/(cosHalfA+cosHalfB-cosHalfC);
   let v2 = -(tanHalfA/(-cosHalfA+cosHalfB+cosHalfC))+tanHalfB/(cosHalfA-cosHalfB+cosHalfC)-tanHalfC/(cosHalfA+cosHalfB-cosHalfC);
   let v3 = -(tanHalfA/(-cosHalfA+cosHalfB+cosHalfC))-tanHalfB/(cosHalfA-cosHalfB+cosHalfC)+tanHalfC/(cosHalfA+cosHalfB-cosHalfC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X167(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let sinHalfC=sinHalfAngle(cosC);
   let sinHalfB=sinHalfAngle(cosB);
   let sinHalfA=sinHalfAngle(cosA);
   let cosHalfC=cosHalfAngle(cosC);
   let cosHalfB=cosHalfAngle(cosB);
   let cosHalfA=cosHalfAngle(cosA);
   /* end vars */
   let v1 = -(((-cosHalfA+cosHalfB+cosHalfC)*sinHalfA)/cosHalfA)+((cosHalfA-cosHalfB+cosHalfC)*sinHalfB)/cosHalfB+((cosHalfA+cosHalfB-cosHalfC)*sinHalfC)/cosHalfC;
   let v2 = ((-cosHalfA+cosHalfB+cosHalfC)*sinHalfA)/cosHalfA-((cosHalfA-cosHalfB+cosHalfC)*sinHalfB)/cosHalfB+((cosHalfA+cosHalfB-cosHalfC)*sinHalfC)/cosHalfC;
   let v3 = ((-cosHalfA+cosHalfB+cosHalfC)*sinHalfA)/cosHalfA+((cosHalfA-cosHalfB+cosHalfC)*sinHalfB)/cosHalfB-((cosHalfA+cosHalfB-cosHalfC)*sinHalfC)/cosHalfC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X168(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let sinHalfC=sinHalfAngle(cosC);
   let sinHalfB=sinHalfAngle(cosB);
   let sinHalfA=sinHalfAngle(cosA);
   /* end vars */
   let v1 = -(a/(1-sinHalfA))+b/(1-sinHalfB)+c/(1-sinHalfC);
   let v2 = a/(1-sinHalfA)-b/(1-sinHalfB)+c/(1-sinHalfC);
   let v3 = a/(1-sinHalfA)+b/(1-sinHalfB)-c/(1-sinHalfC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X169(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3-a2*(b+c)-(b-c)*(b-c)*(b+c)+a*(b2+c2);
   let v2 = b3-b2*(a+c)-(-a+c)*(-a+c)*(a+c)+b*(a2+c2);
   let v3 = -((a-b)*(a-b)*(a+b))+(a2+b2)*c-(a+b)*c2+c3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X170(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosHalfC=cosHalfAngle(cosC);
   let sinHalfC=sinHalfAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfB=cosHalfAngle(cosB);
   let sinHalfB=sinHalfAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfA=cosHalfAngle(cosA);
   let sinHalfA=sinHalfAngle(cosA);
   let tanHalfC=sinHalfC/cosHalfC;
   let tanHalfB=sinHalfB/cosHalfB;
   let tanHalfA=sinHalfA/cosHalfA;
   /* end vars */
   let v1 = -(tanHalfA/cosHalfA*cosHalfA)+tanHalfB/cosHalfB*cosHalfB+tanHalfC/cosHalfC*cosHalfC;
   let v2 = tanHalfA/cosHalfA*cosHalfA-tanHalfB/cosHalfB*cosHalfB+tanHalfC/cosHalfC*cosHalfC;
   let v3 = tanHalfA/cosHalfA*cosHalfA+tanHalfB/cosHalfB*cosHalfB-tanHalfC/cosHalfC*cosHalfC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X171(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2+b*c;
   let v2 = b2+a*c;
   let v3 = a*b+c2;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X172(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3+a*b*c;
   let v2 = b3+a*b*c;
   let v3 = a*b*c+c3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X173(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfC=cosHalfAngle(cosC);
   let cosHalfB=cosHalfAngle(cosB);
   let cosHalfA=cosHalfAngle(cosA);
   /* end vars */
   let v1 = -cosHalfA+cosHalfB+cosHalfC;
   let v2 = cosHalfA-cosHalfB+cosHalfC;
   let v3 = cosHalfA+cosHalfB-cosHalfC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X174(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfC=cosHalfAngle(cosC);
   let cosHalfB=cosHalfAngle(cosB);
   let cosHalfA=cosHalfAngle(cosA);
   /* end vars */
   let v1 = 1/cosHalfA;
   let v2 = 1/cosHalfB;
   let v3 = 1/cosHalfC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X175(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfA=cosHalfAngle(cosA);
   let cosHalfC=cosHalfAngle(cosC);
   let cosHalfB=cosHalfAngle(cosB);
   /* end vars */
   let v1 = -1+(cosHalfB*cosHalfC)/cosHalfA;
   let v2 = -1+(cosHalfA*cosHalfC)/cosHalfB;
   let v3 = -1+(cosHalfA*cosHalfB)/cosHalfC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X176(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfA=cosHalfAngle(cosA);
   let cosHalfC=cosHalfAngle(cosC);
   let cosHalfB=cosHalfAngle(cosB);
   /* end vars */
   let v1 = 1+(cosHalfB*cosHalfC)/cosHalfA;
   let v2 = 1+(cosHalfA*cosHalfC)/cosHalfB;
   let v3 = 1+(cosHalfA*cosHalfB)/cosHalfC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X177(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfA=cosHalfAngle(cosA);
   let cosHalfC=cosHalfAngle(cosC);
   let cosHalfB=cosHalfAngle(cosB);
   /* end vars */
   let v1 = (cosHalfB+cosHalfC)/cosHalfA;
   let v2 = (cosHalfA+cosHalfC)/cosHalfB;
   let v3 = (cosHalfA+cosHalfB)/cosHalfC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X178(orbit, [a, b, c]) {
   /* begin vars */
   let cosA=lawOfCosines(a,b,c);
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfA=cosHalfAngle(cosA);
   let cosHalfC=cosHalfAngle(cosC);
   let cosHalfB=cosHalfAngle(cosB);
   /* end vars */
   let v1 = (cosHalfB+cosHalfC)/a;
   let v2 = (cosHalfA+cosHalfC)/b;
   let v3 = (cosHalfA+cosHalfB)/c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X179(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosHalfC=cosHalfAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfB=cosHalfAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfA=cosHalfAngle(cosA);
   let cosQuarterC=cosHalfAngle(cosHalfC);
   let cosQuarterB=cosHalfAngle(cosHalfB);
   let cosQuarterA=cosHalfAngle(cosHalfA);
   /* end vars */
   let v1 = Math.pow(cosQuarterA,-4);
   let v2 = Math.pow(cosQuarterB,-4);
   let v3 = Math.pow(cosQuarterC,-4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X180(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosHalfC=cosHalfAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfB=cosHalfAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfA=cosHalfAngle(cosA);
   let cosQuarterC=cosHalfAngle(cosHalfC);
   let cosQuarterB=cosHalfAngle(cosHalfB);
   let cosQuarterA=cosHalfAngle(cosHalfA);
   /* end vars */
   let v1 = 1/(1+(2*cosQuarterA*cosQuarterA*cosQuarterB*cosQuarterB)/cosQuarterC*cosQuarterC)+1/(1+(2*cosQuarterA*cosQuarterA*cosQuarterC*cosQuarterC)/cosQuarterB*cosQuarterB)-1/(1+(2*cosQuarterB*cosQuarterB*cosQuarterC*cosQuarterC)/cosQuarterA*cosQuarterA);
   let v2 = 1/(1+(2*cosQuarterA*cosQuarterA*cosQuarterB*cosQuarterB)/cosQuarterC*cosQuarterC)-1/(1+(2*cosQuarterA*cosQuarterA*cosQuarterC*cosQuarterC)/cosQuarterB*cosQuarterB)+1/(1+(2*cosQuarterB*cosQuarterB*cosQuarterC*cosQuarterC)/cosQuarterA*cosQuarterA);
   let v3 = -(1/(1+(2*cosQuarterA*cosQuarterA*cosQuarterB*cosQuarterB)/cosQuarterC*cosQuarterC))+1/(1+(2*cosQuarterA*cosQuarterA*cosQuarterC*cosQuarterC)/cosQuarterB*cosQuarterB)+1/(1+(2*cosQuarterB*cosQuarterB*cosQuarterC*cosQuarterC)/cosQuarterA*cosQuarterA);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X181(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a*(b+c)*(b+c))/(-a+b+c);
   let v2 = (b*(a+c)*(a+c))/(a-b+c);
   let v3 = ((a+b)*(a+b)*c)/(a+b-c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X182(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(a4-a2*b2-a2*c2-2*b2*c2);
   let v2 = b*(-(a2*b2)+b4-2*a2*c2-b2*c2);
   let v3 = c*(-2*a2*b2-a2*c2-b2*c2+c4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X183(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let S=2*triAreaHeron(a,b,c);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let tanC=sinC/cosC;
   let tanB=sinB/cosB;
   let tanOmega=(2*S)/(a2+b2+c2);
   let tanA=sinA/cosA;
   /* end vars */
   let v1 = 1/tanA+tanOmega;
   let v2 = 1/tanB+tanOmega;
   let v3 = 1/tanC+tanOmega;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X184(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let c2=c*c;
   let cosB=lawOfCosines(b,a,c);
   let b2=b*b;
   let cosA=lawOfCosines(a,b,c);
   let a2=a*a;
   /* end vars */
   let v1 = a2*cosA;
   let v2 = b2*cosB;
   let v3 = c2*cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X185(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = cosA*(cosB*cosB+cosC*cosC);
   let v2 = cosB*(cosA*cosA+cosC*cosC);
   let v3 = (cosA*cosA+cosB*cosB)*cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X186(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = -(1/cosA)+4*cosA;
   let v2 = -(1/cosB)+4*cosB;
   let v3 = -(1/cosC)+4*cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X187(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(2*a2-b2-c2);
   let v2 = b*(-a2+2*b2-c2);
   let v3 = c*(-a2-b2+2*c2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X188(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let sinHalfC=sinHalfAngle(cosC);
   let sinHalfB=sinHalfAngle(cosB);
   let sinHalfA=sinHalfAngle(cosA);
   /* end vars */
   let v1 = 1/sinHalfA;
   let v2 = 1/sinHalfB;
   let v3 = 1/sinHalfC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X189(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   /* end vars */
   let v1 = (b*c)/(-1-cosA+cosB+cosC);
   let v2 = (a*c)/(-1+cosA-cosB+cosC);
   let v3 = (a*b)/(-1+cosA+cosB-cosC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X190(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b*c)/(b-c);
   let v2 = (a*c)/(-a+c);
   let v3 = (a*b)/(a-b);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X191(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = -a3+b3+(-a+b+c)*(a*b+a*c+b*c)+c3;
   let v2 = a3-b3+(a-b+c)*(a*b+a*c+b*c)+c3;
   let v3 = a3+b3+(a+b-c)*(a*b+a*c+b*c)-c3;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X192(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c*(a*b+a*c-b*c);
   let v2 = a*c*(a*b-a*c+b*c);
   let v3 = a*b*(-(a*b)+a*c+b*c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X193(orbit, [a, b, c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 3*a-(b2+c2)/a;
   let v2 = 3*b-(a2+c2)/b;
   let v3 = -((a2+b2)/c)+3*c;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X194(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = b*c*(a2*b2+a2*c2-b2*c2);
   let v2 = a*c*(a2*b2-a2*c2+b2*c2);
   let v3 = a*b*(-(a2*b2)+a2*c2+b2*c2);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X195(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let a2=a*a;
   let a4=a2*a2;
   let b6=b2*b4;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a*(a8+b8-4*a6*(b2+c2)-2*b2*c2*(b4-b2*c2+c4)+a4*(6*b4+5*b2*c2+6*c4)-a2*(4*b6-b4*c2-b2*c4+4*c6)+c8);
   let v2 = b*(a8+b8-4*b6*(a2+c2)-2*a2*c2*(a4-a2*c2+c4)+b4*(6*a4+5*a2*c2+6*c4)-b2*(4*a6-a4*c2-a2*c4+4*c6)+c8);
   let v3 = c*(a8-2*a2*b2*(a4-a2*b2+b4)+b8-(4*a6-a4*b2-a2*b4+4*b6)*c2+(6*a4+5*a2*b2+6*b4)*c4-4*(a2+b2)*c6+c8);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X196(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosHalfC=cosHalfAngle(cosC);
   let sinHalfC=sinHalfAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfB=cosHalfAngle(cosB);
   let sinHalfB=sinHalfAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfA=cosHalfAngle(cosA);
   let sinHalfA=sinHalfAngle(cosA);
   let tanHalfC=sinHalfC/cosHalfC;
   let tanHalfB=sinHalfB/cosHalfB;
   let tanHalfA=sinHalfA/cosHalfA;
   /* end vars */
   let v1 = ((-1-cosA+cosB+cosC)*tanHalfA)/cosA;
   let v2 = ((-1+cosA-cosB+cosC)*tanHalfB)/cosB;
   let v3 = ((-1+cosA+cosB-cosC)*tanHalfC)/cosC;
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X197(orbit, [a, b, c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosHalfC=cosHalfAngle(cosC);
   let sinHalfC=sinHalfAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfB=cosHalfAngle(cosB);
   let sinHalfB=sinHalfAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfA=cosHalfAngle(cosA);
   let sinHalfA=sinHalfAngle(cosA);
   let tanHalfC=sinHalfC/cosHalfC;
   let c2=c*c;
   let tanHalfB=sinHalfB/cosHalfB;
   let b2=b*b;
   let tanHalfA=sinHalfA/cosHalfA;
   let a2=a*a;
   /* end vars */
   let v1 = a*(-(a2*tanHalfA)+b2*tanHalfB+c2*tanHalfC);
   let v2 = b*(a2*tanHalfA-b2*tanHalfB+c2*tanHalfC);
   let v3 = c*(a2*tanHalfA+b2*tanHalfB-c2*tanHalfC);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X198(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3+a2*(b+c)-(b-c)*(b-c)*(b+c)-a*(b+c)*(b+c));
   let v2 = b*(b3+b2*(a+c)-(-a+c)*(-a+c)*(a+c)-b*(a+c)*(a+c));
   let v3 = c*(-((a-b)*(a-b)*(a+b))-(a+b)*(a+b)*c+(a+b)*c2+c3);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X199(orbit, [a, b, c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(-a4+b4+(a*b+a*c+b*c)*(-a2+b2+c2)+c4);
   let v2 = b*(a4-b4+(a*b+a*c+b*c)*(a2-b2+c2)+c4);
   let v3 = c*(a4+b4+(a*b+a*c+b*c)*(a2+b2-c2)-c4);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function trilin_X200(orbit, [a, b, c]) {
   /* begin vars */

   /* end vars */
   let v1 = (-a+b+c)*(-a+b+c);
   let v2 = (a-b+c)*(a-b+c);
   let v3 = (a+b-c)*(a+b-c);
   let tris = [v1,v2,v3];
   return trilin_to_cartesian(orbit, [a, b, c], tris);
}