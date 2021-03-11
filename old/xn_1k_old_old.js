// support fn

const sqrt3 = Math.sqrt(3.0);
const phi = (Math.sqrt(5)+1.0)/2;
const cPi3 = Math.cos(Math.PI/3);
const sPi3 = Math.sin(Math.PI/3);
const cPi6 = Math.cos(Math.PI/6);
const sPi6 = Math.sin(Math.PI/6);
const Pi = Math.PI;

function oneOv(x) { return 1.0/x; }

function triAreaHeron(a, b, c) {
  let s = (a + b + c)/2.0;
  return sqrt(s*(s-a)*(s-b)*(s-c));
}

function lawOfCosines(a, b, c) { return (b*b+c*c-a*a)/(2.0*b*c); }

function getSin(theCos) { return sqrt(1.0 - theCos*theCos); }

function cosDoubleAngle(cosAngle) { return 2*cosAngle*cosAngle - 1.0; }
function sinDoubleAngle(sinAngle,cosAngle) { return 2*sinAngle*cosAngle; }

function cosHalfAngle(cosAngle) { return sqrt((1.0+cosAngle)/2); }
function sinHalfAngle(cosAngle) { return sqrt((1.0-cosAngle)/2); }

function getSinApmB(sa, sb, ca, cb) { return [sa*cb + sb*ca, sa*cb - sb*ca]; }

function getSinApmB1(sa, sb, ca, cb) { return sa*cb + sb*ca; }
function getSinApmB2(sa, sb, ca, cb) { return sa*cb - sb*ca; }

function cosThirdAngle(c) {
  let th = Math.acos(c);
  return Math.cos(th/3);
}

function sinThirdAngle(s) {
  let th = Math.asin(s);
  return Math.sin(th/3);
}

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

function getJ(R,SW) {
  return Math.sqrt(9*R*R-2*SW);
}

function getE(S,SW) {
  // return (S*SW*SW)/Math.sqrt(S*S+SW*SW);
  // moses: Sin[w]=S/Sqrt[S^2+SW^2]
  // since e = Sqrt[1-4 Sin[w]^2], then:
  // e = Sqrt[1-4/(1+(SW/S)^2)]
  let ratio=SW/S;
  return Math.sqrt(1-4/(1+ratio*ratio));
}

function getCotPrime(a,b,c) {
  return 1/Math.tan((2*a*Math.PI)/(a+b+c));
}

function bary_X1(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a;
   let v2 = b;
   let v3 = c;
   return [v1,v2,v3];
}

function bary_X2(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1;
   let v2 = 1;
   let v3 = 1;
   return [v1,v2,v3];
}

function bary_X3(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-b2-c2);
   let v2 = b2*(-a2+b2-c2);
   let v3 = c2*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X4(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2+c2);
   let v2 = (a2+b2-c2)*(-a2+b2+c2);
   let v3 = (a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X5(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = -(a2*b2)+b4-a2*c2-2*b2*c2+c4;
   let v2 = a4-a2*b2-2*a2*c2-b2*c2+c4;
   let v3 = a4-2*a2*b2+b4-a2*c2-b2*c2;
   return [v1,v2,v3];
}

function bary_X6(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2;
   let v2 = b2;
   let v3 = c2;
   return [v1,v2,v3];
}

function bary_X7(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b-c)*(a-b+c);
   let v2 = (a+b-c)*(-a+b+c);
   let v3 = (a-b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X8(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = -a+b+c;
   let v2 = a-b+c;
   let v3 = a+b-c;
   return [v1,v2,v3];
}

function bary_X9(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-b-c);
   let v2 = b*(-a+b-c);
   let v3 = c*(-a-b+c);
   return [v1,v2,v3];
}

function bary_X10(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b+c;
   let v2 = a+c;
   let v3 = a+b;
   return [v1,v2,v3];
}

function bary_X11(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b-c)*(b-c)*(-a+b+c);
   let v2 = (-a+c)*(-a+c)*(a-b+c);
   let v3 = (a-b)*(a-b)*(a+b-c);
   return [v1,v2,v3];
}

function bary_X12(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(b+c)*(b+c);
   let v2 = (a+b-c)*(a+c)*(a+c)*(-a+b+c);
   let v3 = (a+b)*(a+b)*(a-b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X13(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 3*(a2+b2-c2)*(a2-b2+c2)+4*S*(S+a2*sqrt3);
   let v2 = 3*(a2+b2-c2)*(-a2+b2+c2)+4*S*(S+b2*sqrt3);
   let v3 = 3*(a2-b2+c2)*(-a2+b2+c2)+4*S*(S+c2*sqrt3);
   return [v1,v2,v3];
}

function bary_X14(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 3*(a2+b2-c2)*(a2-b2+c2)-4*S*(-S+a2*sqrt3);
   let v2 = 3*(a2+b2-c2)*(-a2+b2+c2)-4*S*(-S+b2*sqrt3);
   let v3 = 3*(a2-b2+c2)*(-a2+b2+c2)-4*S*(-S+c2*sqrt3);
   return [v1,v2,v3];
}

function bary_X15(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let c2=c*c;
   let b2=b*b;
   let S=2*area;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(-2*S+(a2-b2-c2)*sqrt3);
   let v2 = b2*(-2*S+(-a2+b2-c2)*sqrt3);
   let v3 = c2*(-2*S+(-a2-b2+c2)*sqrt3);
   return [v1,v2,v3];
}

function bary_X16(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let c2=c*c;
   let b2=b*b;
   let S=2*area;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(2*S+(a2-b2-c2)*sqrt3);
   let v2 = b2*(2*S+(-a2+b2-c2)*sqrt3);
   let v3 = c2*(2*S+(-a2-b2+c2)*sqrt3);
   return [v1,v2,v3];
}

function bary_X17(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2+b2-c2+2*S*sqrt3)*(a2-b2+c2+2*S*sqrt3);
   let v2 = (a2+b2-c2+2*S*sqrt3)*(-a2+b2+c2+2*S*sqrt3);
   let v3 = (a2-b2+c2+2*S*sqrt3)*(-a2+b2+c2+2*S*sqrt3);
   return [v1,v2,v3];
}

function bary_X18(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (-a2+b2-c2+2*S*sqrt3)*(-a2-b2+c2+2*S*sqrt3);
   let v2 = (a2-b2-c2+2*S*sqrt3)*(-a2-b2+c2+2*S*sqrt3);
   let v3 = (a2-b2-c2+2*S*sqrt3)*(-a2+b2-c2+2*S*sqrt3);
   return [v1,v2,v3];
}

function bary_X19(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2+b2-c2)*(a2-b2+c2);
   let v2 = b*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = c*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X20(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = -3*a4+2*a2*b2+b4+2*a2*c2-2*b2*c2+c4;
   let v2 = a4+2*a2*b2-3*b4-2*a2*c2+2*b2*c2+c4;
   let v3 = a4-2*a2*b2+b4+2*a2*c2+2*b2*c2-3*c4;
   return [v1,v2,v3];
}

function bary_X21(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b)*(a-b-c)*(a+c);
   let v2 = b*(a+b)*(-a+b-c)*(b+c);
   let v3 = c*(a+c)*(-a-b+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X22(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4-b4-c4);
   let v2 = b2*(-a4+b4-c4);
   let v3 = c2*(-a4-b4+c4);
   return [v1,v2,v3];
}

function bary_X23(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4-b4+b2*c2-c4);
   let v2 = b2*(-a4+b4+a2*c2-c4);
   let v3 = c2*(-a4+a2*b2-b4+c4);
   return [v1,v2,v3];
}

function bary_X24(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a2+b2-c2)*(a2-b2+c2)*(a4-2*a2*b2+b4-2*a2*c2+c4);
   let v2 = b2*(a2+b2-c2)*(-a2+b2+c2)*(a4-2*a2*b2+b4-2*b2*c2+c4);
   let v3 = c2*(a2-b2+c2)*(-a2+b2+c2)*(a4+b4-2*a2*c2-2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X25(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2+b2-c2)*(a2-b2+c2);
   let v2 = b2*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = c2*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X26(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(a8-2*a6*b2+2*a2*b6-b8-2*a6*c2+2*b6*c2-2*b4*c4+2*a2*c6+2*b2*c6-c8);
   let v2 = b2*(-a8+2*a6*b2-2*a2*b6+b8+2*a6*c2-2*b6*c2-2*a4*c4+2*a2*c6+2*b2*c6-c8);
   let v3 = c2*(-a8+2*a6*b2-2*a4*b4+2*a2*b6-b8+2*a6*c2+2*b6*c2-2*a2*c6-2*b2*c6+c8);
   return [v1,v2,v3];
}

function bary_X27(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b)*(a+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = (a+b)*(b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = (a+c)*(b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X28(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a+b)*(a+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = b*(a+b)*(b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = c*(a+c)*(b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X29(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b)*(a-b-c)*(a+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = (a+b)*(-a+b-c)*(b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = (a+c)*(-a-b+c)*(b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X30(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = -2*a4+a2*b2+b4+a2*c2-2*b2*c2+c4;
   let v2 = a4+a2*b2-2*b4-2*a2*c2+b2*c2+c4;
   let v3 = a4-2*a2*b2+b4+a2*c2+b2*c2-2*c4;
   return [v1,v2,v3];
}

function bary_X31(orbit, [a,b,c]) {
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
   return [v1,v2,v3];
}

function bary_X32(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4;
   let v2 = b4;
   let v3 = c4;
   return [v1,v2,v3];
}

function bary_X33(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a-b-c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = b*(-a+b-c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = c*(-a-b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X34(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = b*(a+b-c)*(-a+b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = c*(a-b+c)*(-a+b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X35(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-b2-b*c-c2);
   let v2 = b2*(-a2+b2-a*c-c2);
   let v3 = c2*(-a2-a*b-b2+c2);
   return [v1,v2,v3];
}

function bary_X36(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-b2+b*c-c2);
   let v2 = b2*(-a2+b2+a*c-c2);
   let v3 = c2*(-a2+a*b-b2+c2);
   return [v1,v2,v3];
}

function bary_X37(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b+c);
   let v2 = b*(a+c);
   let v3 = (a+b)*c;
   return [v1,v2,v3];
}

function bary_X38(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(b2+c2);
   let v2 = b*(a2+c2);
   let v3 = (a2+b2)*c;
   return [v1,v2,v3];
}

function bary_X39(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b2+c2);
   let v2 = b2*(a2+c2);
   let v3 = (a2+b2)*c2;
   return [v1,v2,v3];
}

function bary_X40(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3+a2*b-a*b2-b3+a2*c-2*a*b*c+b2*c-a*c2+b*c2-c3);
   let v2 = b*(-a3-a2*b+a*b2+b3+a2*c-2*a*b*c+b2*c+a*c2-b*c2-c3);
   let v3 = c*(-a3+a2*b+a*b2-b3-a2*c-2*a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X41(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(a-b-c);
   let v2 = b3*(-a+b-c);
   let v3 = (-a-b+c)*c3;
   return [v1,v2,v3];
}

function bary_X42(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b+c);
   let v2 = b2*(a+c);
   let v3 = (a+b)*c2;
   return [v1,v2,v3];
}

function bary_X43(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a*b+a*c-b*c);
   let v2 = b*(a*b-a*c+b*c);
   let v3 = c*(-(a*b)+a*c+b*c);
   return [v1,v2,v3];
}

function bary_X44(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(2*a-b-c);
   let v2 = b*(-a+2*b-c);
   let v3 = c*(-a-b+2*c);
   return [v1,v2,v3];
}

function bary_X45(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-2*b-2*c);
   let v2 = b*(-2*a+b-2*c);
   let v3 = c*(-2*a-2*b+c);
   return [v1,v2,v3];
}

function bary_X46(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3+a2*b-a*b2-b3+a2*c+b2*c-a*c2+b*c2-c3);
   let v2 = b*(-a3-a2*b+a*b2+b3+a2*c+b2*c+a*c2-b*c2-c3);
   let v3 = c*(-a3+a2*b+a*b2-b3-a2*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X47(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(a4-2*a2*b2+b4-2*a2*c2+c4);
   let v2 = b3*(a4-2*a2*b2+b4-2*b2*c2+c4);
   let v3 = c3*(a4+b4-2*a2*c2-2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X48(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(a2-b2-c2);
   let v2 = b3*(-a2+b2-c2);
   let v3 = (-a2-b2+c2)*c3;
   return [v1,v2,v3];
}

function bary_X49(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(a2-b2-c2)*(a4-2*a2*b2+b4-2*a2*c2-b2*c2+c4);
   let v2 = b4*(-a2+b2-c2)*(a4-2*a2*b2+b4-a2*c2-2*b2*c2+c4);
   let v3 = (-a2-b2+c2)*c4*(a4-a2*b2+b4-2*a2*c2-2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X50(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(a2-b2-b*c-c2)*(a2-b2+b*c-c2);
   let v2 = b4*(-a2+b2-a*c-c2)*(-a2+b2+a*c-c2);
   let v3 = (-a2-a*b-b2+c2)*(-a2+a*b-b2+c2)*c4;
   return [v1,v2,v3];
}

function bary_X51(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(a2*b2-b4+a2*c2+2*b2*c2-c4);
   let v2 = b2*(-a4+a2*b2+2*a2*c2+b2*c2-c4);
   let v3 = c2*(-a4+2*a2*b2-b4+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X52(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(a2*b2-b4+a2*c2+2*b2*c2-c4)*(a4-2*a2*b2+b4-2*a2*c2+c4);
   let v2 = b2*(-a4+a2*b2+2*a2*c2+b2*c2-c4)*(a4-2*a2*b2+b4-2*b2*c2+c4);
   let v3 = c2*(-a4+2*a2*b2-b4+a2*c2+b2*c2)*(a4+b4-2*a2*c2-2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X53(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2+c2)*(a2*b2-b4+a2*c2+2*b2*c2-c4);
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*(-a4+a2*b2+2*a2*c2+b2*c2-c4);
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(-a4+2*a2*b2-b4+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X54(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   let v2 = b2*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4);
   let v3 = c2*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X55(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b-c);
   let v2 = b2*(-a+b-c);
   let v3 = (-a-b+c)*c2;
   return [v1,v2,v3];
}

function bary_X56(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a+b-c)*(a-b+c);
   let v2 = b2*(a+b-c)*(-a+b+c);
   let v3 = (a-b+c)*(-a+b+c)*c2;
   return [v1,v2,v3];
}

function bary_X57(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c);
   let v2 = b*(a+b-c)*(-a+b+c);
   let v3 = c*(a-b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X58(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a+b)*(a+c);
   let v2 = (a+b)*b2*(b+c);
   let v3 = (a+c)*(b+c)*c2;
   return [v1,v2,v3];
}

function bary_X59(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b)*(a-b)*(a-c)*(a-c)*(a+b-c)*(a-b+c);
   let v2 = (-a+b)*(-a+b)*b2*(b-c)*(b-c)*(a+b-c)*(-a+b+c);
   let v3 = (-a+c)*(-a+c)*(-b+c)*(-b+c)*(a-b+c)*(-a+b+c)*c2;
   return [v1,v2,v3];
}

function bary_X60(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a+b)*(a+b)*(a-b-c)*(a+c)*(a+c);
   let v2 = (a+b)*(a+b)*b2*(-a+b-c)*(b+c)*(b+c);
   let v3 = (a+c)*(a+c)*(-a-b+c)*(b+c)*(b+c)*c2;
   return [v1,v2,v3];
}

function bary_X61(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-b2-c2-2*S*sqrt3);
   let v2 = b2*(-a2+b2-c2-2*S*sqrt3);
   let v3 = c2*(-a2-b2+c2-2*S*sqrt3);
   return [v1,v2,v3];
}

function bary_X62(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-b2-c2+2*S*sqrt3);
   let v2 = b2*(-a2+b2-c2+2*S*sqrt3);
   let v3 = c2*(-a2-b2+c2+2*S*sqrt3);
   return [v1,v2,v3];
}

function bary_X63(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2-b2-c2);
   let v2 = b*(-a2+b2-c2);
   let v3 = c*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X64(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4-2*a2*b2+b4+2*a2*c2+2*b2*c2-3*c4)*(a4+2*a2*b2-3*b4-2*a2*c2+2*b2*c2+c4);
   let v2 = b2*(a4-2*a2*b2+b4+2*a2*c2+2*b2*c2-3*c4)*(-3*a4+2*a2*b2+b4+2*a2*c2-2*b2*c2+c4);
   let v3 = c2*(-3*a4+2*a2*b2+b4+2*a2*c2-2*b2*c2+c4)*(a4+2*a2*b2-3*b4-2*a2*c2+2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X65(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c)*(b+c);
   let v2 = b*(a+b-c)*(a+c)*(-a+b+c);
   let v3 = (a+b)*c*(a-b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X66(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4+b4-c4)*(a4-b4+c4);
   let v2 = (a4+b4-c4)*(-a4+b4+c4);
   let v3 = (a4-b4+c4)*(-a4+b4+c4);
   return [v1,v2,v3];
}

function bary_X67(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4-a2*b2+b4-c4)*(a4-b4-a2*c2+c4);
   let v2 = (a4-a2*b2+b4-c4)*(-a4+b4-b2*c2+c4);
   let v3 = (a4-b4-a2*c2+c4)*(-a4+b4-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X68(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a2-b2-c2)*(a4-2*a2*b2+b4-2*b2*c2+c4)*(a4+b4-2*a2*c2-2*b2*c2+c4);
   let v2 = (-a2+b2-c2)*(a4-2*a2*b2+b4-2*a2*c2+c4)*(a4+b4-2*a2*c2-2*b2*c2+c4);
   let v3 = (-a2-b2+c2)*(a4-2*a2*b2+b4-2*a2*c2+c4)*(a4-2*a2*b2+b4-2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X69(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = -a2+b2+c2;
   let v2 = a2-b2+c2;
   let v3 = a2+b2-c2;
   return [v1,v2,v3];
}

function bary_X70(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = (a8-2*a6*b2+2*a4*b4-2*a2*b6+b8-2*a6*c2-2*b6*c2+2*a2*c6+2*b2*c6-c8)*(a8-2*a6*b2+2*a2*b6-b8-2*a6*c2+2*b6*c2+2*a4*c4-2*a2*c6-2*b2*c6+c8);
   let v2 = (a8-2*a6*b2+2*a4*b4-2*a2*b6+b8-2*a6*c2-2*b6*c2+2*a2*c6+2*b2*c6-c8)*(-a8+2*a6*b2-2*a2*b6+b8+2*a6*c2-2*b6*c2+2*b4*c4-2*a2*c6-2*b2*c6+c8);
   let v3 = (a8-2*a6*b2+2*a2*b6-b8-2*a6*c2+2*b6*c2+2*a4*c4-2*a2*c6-2*b2*c6+c8)*(-a8+2*a6*b2-2*a2*b6+b8+2*a6*c2-2*b6*c2+2*b4*c4-2*a2*c6-2*b2*c6+c8);
   return [v1,v2,v3];
}

function bary_X71(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b+c)*(a2-b2-c2);
   let v2 = b2*(a+c)*(-a2+b2-c2);
   let v3 = (a+b)*c2*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X72(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(b+c)*(a2-b2-c2);
   let v2 = b*(a+c)*(-a2+b2-c2);
   let v3 = (a+b)*c*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X73(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a+b-c)*(a-b+c)*(b+c)*(a2-b2-c2);
   let v2 = b2*(a+b-c)*(a+c)*(-a+b+c)*(-a2+b2-c2);
   let v3 = (a+b)*(a-b+c)*(-a+b+c)*c2*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X74(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4-2*a2*b2+b4+a2*c2+b2*c2-2*c4)*(a4+a2*b2-2*b4-2*a2*c2+b2*c2+c4);
   let v2 = b2*(a4-2*a2*b2+b4+a2*c2+b2*c2-2*c4)*(-2*a4+a2*b2+b4+a2*c2-2*b2*c2+c4);
   let v3 = c2*(-2*a4+a2*b2+b4+a2*c2-2*b2*c2+c4)*(a4+a2*b2-2*b4-2*a2*c2+b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X75(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c;
   let v2 = a*c;
   let v3 = a*b;
   return [v1,v2,v3];
}

function bary_X76(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2*c2;
   let v2 = a2*c2;
   let v3 = a2*b2;
   return [v1,v2,v3];
}

function bary_X77(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c)*(a2-b2-c2);
   let v2 = b*(a+b-c)*(-a+b+c)*(-a2+b2-c2);
   let v3 = c*(a-b+c)*(-a+b+c)*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X78(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a-b-c)*(a2-b2-c2);
   let v2 = b*(-a+b-c)*(-a2+b2-c2);
   let v3 = c*(-a-b+c)*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X79(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2+a*b+b2-c2)*(a2-b2+a*c+c2);
   let v2 = (a2+a*b+b2-c2)*(-a2+b2+b*c+c2);
   let v3 = (a2-b2+a*c+c2)*(-a2+b2+b*c+c2);
   return [v1,v2,v3];
}

function bary_X80(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2-a*b+b2-c2)*(a2-b2-a*c+c2);
   let v2 = (a2-a*b+b2-c2)*(-a2+b2-b*c+c2);
   let v3 = (a2-b2-a*c+c2)*(-a2+b2-b*c+c2);
   return [v1,v2,v3];
}

function bary_X81(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b)*(a+c);
   let v2 = b*(a+b)*(b+c);
   let v3 = c*(a+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X82(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2+b2)*(a2+c2);
   let v2 = b*(a2+b2)*(b2+c2);
   let v3 = c*(a2+c2)*(b2+c2);
   return [v1,v2,v3];
}

function bary_X83(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2+b2)*(a2+c2);
   let v2 = (a2+b2)*(b2+c2);
   let v3 = (a2+c2)*(b2+c2);
   return [v1,v2,v3];
}

function bary_X84(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   let v2 = b*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3);
   let v3 = c*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X85(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*(-a+b-c)*(a+b-c)*c;
   let v2 = a*c*(-a-b+c)*(-a+b+c);
   let v3 = a*b*(a-b-c)*(a-b+c);
   return [v1,v2,v3];
}

function bary_X86(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b)*(a+c);
   let v2 = (a+b)*(b+c);
   let v3 = (a+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X87(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a*b-a*c-b*c)*(a*b-a*c+b*c);
   let v2 = b*(-(a*b)-a*c+b*c)*(-(a*b)+a*c+b*c);
   let v3 = c*(-(a*b)+a*c-b*c)*(a*b+a*c-b*c);
   return [v1,v2,v3];
}

function bary_X88(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b-2*c)*(a-2*b+c);
   let v2 = b*(a+b-2*c)*(-2*a+b+c);
   let v3 = c*(a-2*b+c)*(-2*a+b+c);
   return [v1,v2,v3];
}

function bary_X89(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(2*a+2*b-c)*(2*a-b+2*c);
   let v2 = b*(2*a+2*b-c)*(-a+2*b+2*c);
   let v3 = c*(2*a-b+2*c)*(-a+2*b+2*c);
   return [v1,v2,v3];
}

function bary_X90(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3-a2*b-a*b2+b3+a2*c+b2*c-a*c2-b*c2-c3)*(a3+a2*b-a*b2-b3-a2*c-b2*c-a*c2+b*c2+c3);
   let v2 = b*(a3-a2*b-a*b2+b3+a2*c+b2*c-a*c2-b*c2-c3)*(-a3-a2*b+a*b2+b3-a2*c-b2*c+a*c2-b*c2+c3);
   let v3 = c*(-a3-a2*b+a*b2+b3-a2*c-b2*c+a*c2-b*c2+c3)*(a3+a2*b-a*b2-b3-a2*c-b2*c-a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X91(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = b*c*(a4-2*a2*b2+b4-2*b2*c2+c4)*(a4+b4-2*a2*c2-2*b2*c2+c4);
   let v2 = a*c*(a4-2*a2*b2+b4-2*a2*c2+c4)*(a4+b4-2*a2*c2-2*b2*c2+c4);
   let v3 = a*b*(a4-2*a2*b2+b4-2*a2*c2+c4)*(a4-2*a2*b2+b4-2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X92(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = b*c*(-a2+b2-c2)*(a2+b2-c2);
   let v2 = a*c*(-a2-b2+c2)*(-a2+b2+c2);
   let v3 = a*b*(a2-b2-c2)*(a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X93(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = b2*(-a2+b2-c2)*(a2+b2-c2)*c2*(a4-a2*b2+b4-2*a2*c2-2*b2*c2+c4)*(a4-2*a2*b2+b4-a2*c2-2*b2*c2+c4);
   let v2 = a2*c2*(-a2-b2+c2)*(-a2+b2+c2)*(a4-a2*b2+b4-2*a2*c2-2*b2*c2+c4)*(a4-2*a2*b2+b4-2*a2*c2-b2*c2+c4);
   let v3 = a2*b2*(a2-b2-c2)*(a2-b2+c2)*(a4-2*a2*b2+b4-a2*c2-2*b2*c2+c4)*(a4-2*a2*b2+b4-2*a2*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X94(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   /* end vars */
   let v1 = b2*(a2-a*b+b2-c2)*(a2+a*b+b2-c2)*(-a2+b2-a*c-c2)*(-a2+b2+a*c-c2)*c2;
   let v2 = a2*c2*(-a2-a*b-b2+c2)*(-a2+a*b-b2+c2)*(-a2+b2-b*c+c2)*(-a2+b2+b*c+c2);
   let v3 = a2*b2*(a2-b2-b*c-c2)*(a2-b2+b*c-c2)*(a2-b2-a*c+c2)*(a2-b2+a*c+c2);
   return [v1,v2,v3];
}

function bary_X95(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   let v2 = (a4-2*a2*b2+b4-a2*c2-b2*c2)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4);
   let v3 = (-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X96(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4-2*a2*b2+b4-2*b2*c2+c4)*(a4+b4-2*a2*c2-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   let v2 = (a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4-2*a2*b2+b4-2*a2*c2+c4)*(a4+b4-2*a2*c2-2*b2*c2+c4)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4);
   let v3 = (a4-2*a2*b2+b4-2*a2*c2+c4)*(a4-2*a2*b2+b4-2*b2*c2+c4)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X97(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a2-b2-c2)*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   let v2 = b2*(-a2+b2-c2)*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4);
   let v3 = c2*(-a2-b2+c2)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X98(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4+b4-a2*c2-b2*c2)*(a4-a2*b2-b2*c2+c4);
   let v2 = (a4+b4-a2*c2-b2*c2)*(-(a2*b2)+b4-a2*c2+c4);
   let v3 = (-(a2*b2)+b4-a2*c2+c4)*(a4-a2*b2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X99(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a-b)*(a+b)*(a-c)*(a+c);
   let v2 = (-a+b)*(a+b)*(b-c)*(b+c);
   let v3 = (-a+c)*(a+c)*(-b+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X100(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-b)*(a-c);
   let v2 = b*(-a+b)*(b-c);
   let v3 = c*(-a+c)*(-b+c);
   return [v1,v2,v3];
}

function bary_X101(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b)*(a-c);
   let v2 = (-a+b)*b2*(b-c);
   let v3 = (-a+c)*(-b+c)*c2;
   return [v1,v2,v3];
}

function bary_X102(orbit, [a,b,c]) {
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
   let v1 = a2*(a4-2*a2*b2+b4-a3*c+a2*b*c+a*b2*c-b3*c+a2*c2-2*a*b*c2+b2*c2+a*c3+b*c3-2*c4)*(a4-a3*b+a2*b2+a*b3-2*b4+a2*b*c-2*a*b2*c+b3*c-2*a2*c2+a*b*c2+b2*c2-b*c3+c4);
   let v2 = b2*(a4-2*a2*b2+b4-a3*c+a2*b*c+a*b2*c-b3*c+a2*c2-2*a*b*c2+b2*c2+a*c3+b*c3-2*c4)*(-2*a4+a3*b+a2*b2-a*b3+b4+a3*c-2*a2*b*c+a*b2*c+a2*c2+a*b*c2-2*b2*c2-a*c3+c4);
   let v3 = c2*(-2*a4+a3*b+a2*b2-a*b3+b4+a3*c-2*a2*b*c+a*b2*c+a2*c2+a*b*c2-2*b2*c2-a*c3+c4)*(a4-a3*b+a2*b2+a*b3-2*b4+a2*b*c-2*a*b2*c+b3*c-2*a2*c2+a*b*c2+b2*c2-b*c3+c4);
   return [v1,v2,v3];
}

function bary_X103(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2*(a3-a2*b-a*b2+b3+a*c2+b*c2-2*c3)*(a3+a*b2-2*b3-a2*c+b2*c-a*c2+c3);
   let v2 = b2*(a3-a2*b-a*b2+b3+a*c2+b*c2-2*c3)*(-2*a3+a2*b+b3+a2*c-b2*c-b*c2+c3);
   let v3 = c2*(a3+a*b2-2*b3-a2*c+b2*c-a*c2+c3)*(-2*a3+a2*b+b3+a2*c-b2*c-b*c2+c3);
   return [v1,v2,v3];
}

function bary_X104(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3-a2*b-a*b2+b3+2*a*b*c-a*c2-b*c2)*(a3-a*b2-a2*c+2*a*b*c-b2*c-a*c2+c3);
   let v2 = b*(a3-a2*b-a*b2+b3+2*a*b*c-a*c2-b*c2)*(-(a2*b)+b3-a2*c+2*a*b*c-b2*c-b*c2+c3);
   let v3 = c*(a3-a*b2-a2*c+2*a*b*c-b2*c-a*c2+c3)*(-(a2*b)+b3-a2*c+2*a*b*c-b2*c-b*c2+c3);
   return [v1,v2,v3];
}

function bary_X105(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2+b2-a*c-b*c)*(a2-a*b-b*c+c2);
   let v2 = b*(a2+b2-a*c-b*c)*(-(a*b)+b2-a*c+c2);
   let v3 = c*(-(a*b)+b2-a*c+c2)*(a2-a*b-b*c+c2);
   return [v1,v2,v3];
}

function bary_X106(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a+b-2*c)*(a-2*b+c);
   let v2 = b2*(a+b-2*c)*(-2*a+b+c);
   let v3 = (a-2*b+c)*(-2*a+b+c)*c2;
   return [v1,v2,v3];
}

function bary_X107(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a-b)*(a+b)*(a-c)*(a+c)*(a2+b2-c2)*(a2+b2-c2)*(a2-b2+c2)*(a2-b2+c2);
   let v2 = (-a+b)*(a+b)*(b-c)*(b+c)*(a2+b2-c2)*(a2+b2-c2)*(-a2+b2+c2)*(-a2+b2+c2);
   let v3 = (-a+c)*(a+c)*(-b+c)*(b+c)*(a2-b2+c2)*(a2-b2+c2)*(-a2+b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X108(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a-b)*(a-c)*(a+b-c)*(a-b+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = b*(-a+b)*(b-c)*(a+b-c)*(-a+b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = c*(-a+c)*(-b+c)*(a-b+c)*(-a+b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X109(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b)*(a-c)*(a+b-c)*(a-b+c);
   let v2 = (-a+b)*b2*(b-c)*(a+b-c)*(-a+b+c);
   let v3 = (-a+c)*(-b+c)*(a-b+c)*(-a+b+c)*c2;
   return [v1,v2,v3];
}

function bary_X110(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b)*(a+b)*(a-c)*(a+c);
   let v2 = (-a+b)*(a+b)*b2*(b-c)*(b+c);
   let v3 = (-a+c)*(a+c)*(-b+c)*(b+c)*c2;
   return [v1,v2,v3];
}

function bary_X111(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2+b2-2*c2)*(a2-2*b2+c2);
   let v2 = b2*(a2+b2-2*c2)*(-2*a2+b2+c2);
   let v3 = c2*(a2-2*b2+c2)*(-2*a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X112(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b)*(a+b)*(a-c)*(a+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = (-a+b)*(a+b)*b2*(b-c)*(b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = (-a+c)*(a+c)*(-b+c)*(b+c)*c2*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X113(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let a4=a2*a2;
   let c2=c*c;
   let c4=c2*c2;
   let b2=b*b;
   let b4=b2*b2;
   let a6=a2*a4;
   let c6=c2*c4;
   let b6=b2*b4;
   /* end vars */
   let v1 = (2*a4-a2*b2-b4-a2*c2+2*b2*c2-c4)*(a4*b2-2*a2*b4+b6+a4*c2+2*a2*b2*c2-b4*c2-2*a2*c4-b2*c4+c6);
   let v2 = (-a4-a2*b2+2*b4+2*a2*c2-b2*c2-c4)*(a6-2*a4*b2+a2*b4-a4*c2+2*a2*b2*c2+b4*c2-a2*c4-2*b2*c4+c6);
   let v3 = (-a4+2*a2*b2-b4-a2*c2-b2*c2+2*c4)*(a6-a4*b2-a2*b4+b6-2*a4*c2+2*a2*b2*c2-2*b4*c2+a2*c4+b2*c4);
   return [v1,v2,v3];
}

function bary_X114(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = (a2*b2-b4+a2*c2-c4)*(2*a4-a2*b2+b4-a2*c2-2*b2*c2+c4);
   let v2 = (-a4+a2*b2+b2*c2-c4)*(a4-a2*b2+2*b4-2*a2*c2-b2*c2+c4);
   let v3 = (-a4-b4+a2*c2+b2*c2)*(a4-2*a2*b2+b4-a2*c2-b2*c2+2*c4);
   return [v1,v2,v3];
}

function bary_X115(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b-c)*(b-c)*(b+c)*(b+c);
   let v2 = (-a+c)*(-a+c)*(a+c)*(a+c);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b);
   return [v1,v2,v3];
}

function bary_X116(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b-c)*(b-c)*(-(a*b)+b2-a*c+b*c+c2);
   let v2 = (-a+c)*(-a+c)*(a2-a*b+a*c-b*c+c2);
   let v3 = (a-b)*(a-b)*(a2+a*b+b2-a*c-b*c);
   return [v1,v2,v3];
}

function bary_X117(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let a3=a2*a;
   let a4=a2*a2;
   let c2=c*c;
   let c4=c2*c2;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let b4=b2*b2;
   let a5=a2*a3;
   let a6=a2*a4;
   let c6=c2*c4;
   let c5=c2*c3;
   let b5=b2*b3;
   let b6=b2*b4;
   /* end vars */
   let v1 = (2*a4-a3*b-a2*b2+a*b3-b4-a3*c+2*a2*b*c-a*b2*c-a2*c2-a*b*c2+2*b2*c2+a*c3-c4)*(a4*b2-2*a2*b4+b6-a3*b2*c+a2*b3*c+a*b4*c-b5*c+a4*c2-a3*b*c2+2*a2*b2*c2-a*b3*c2-b4*c2+a2*b*c3-a*b2*c3+2*b3*c3-2*a2*c4+a*b*c4-b2*c4-b*c5+c6);
   let v2 = (-a4+a3*b-a2*b2-a*b3+2*b4-a2*b*c+2*a*b2*c-b3*c+2*a2*c2-a*b*c2-b2*c2+b*c3-c4)*(a6-2*a4*b2+a2*b4-a5*c+a4*b*c+a3*b2*c-a2*b3*c-a4*c2-a3*b*c2+2*a2*b2*c2-a*b3*c2+b4*c2+2*a3*c3-a2*b*c3+a*b2*c3-a2*c4+a*b*c4-2*b2*c4-a*c5+c6);
   let v3 = (-a4+2*a2*b2-b4+a3*c-a2*b*c-a*b2*c+b3*c-a2*c2+2*a*b*c2-b2*c2-a*c3-b*c3+2*c4)*(a6-a5*b-a4*b2+2*a3*b3-a2*b4-a*b5+b6+a4*b*c-a3*b2*c-a2*b3*c+a*b4*c-2*a4*c2+a3*b*c2+2*a2*b2*c2+a*b3*c2-2*b4*c2-a2*b*c3-a*b2*c3+a2*c4+b2*c4);
   return [v1,v2,v3];
}

function bary_X118(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let a3=a2*a;
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a4=a2*a2;
   let a5=a2*a3;
   let c5=c2*c3;
   let c4=c2*c2;
   let b5=b2*b3;
   let b4=b2*b2;
   /* end vars */
   let v1 = (2*a3-a2*b-b3-a2*c+b2*c+b*c2-c3)*(a3*b2-a2*b3-a*b4+b5+a3*c2+2*a*b2*c2-b3*c2-a2*c3-b2*c3-a*c4+c5);
   let v2 = (-a3-a*b2+2*b3+a2*c-b2*c+a*c2-c3)*(a5-a4*b-a3*b2+a2*b3-a3*c2+2*a2*b*c2+b3*c2-a2*c3-b2*c3-b*c4+c5);
   let v3 = (-a3+a2*b+a*b2-b3-a*c2-b*c2+2*c3)*(a5-a3*b2-a2*b3+b5-a4*c+2*a2*b2*c-b4*c-a3*c2-b3*c2+a2*c3+b2*c3);
   return [v1,v2,v3];
}

function bary_X119(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = (a2*b-b3+a2*c-2*a*b*c+b2*c+b*c2-c3)*(a3*b-a2*b2-a*b3+b4+a3*c+a*b2*c-a2*c2+a*b*c2-2*b2*c2-a*c3+c4);
   let v2 = (-a3+a*b2+a2*c-2*a*b*c+b2*c+a*c2-c3)*(a4-a3*b-a2*b2+a*b3+a2*b*c+b3*c-2*a2*c2+a*b*c2-b2*c2-b*c3+c4);
   let v3 = (-a3+a2*b+a*b2-b3-2*a*b*c+a*c2+b*c2)*(a4-2*a2*b2+b4-a3*c+a2*b*c+a*b2*c-b3*c-a2*c2-b2*c2+a*c3+b*c3);
   return [v1,v2,v3];
}

function bary_X120(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = (a*b-b2+a*c-c2)*(a2*b+b3+a2*c-2*a*b*c-b2*c-b*c2+c3);
   let v2 = (-a2+a*b+b*c-c2)*(a3+a*b2-a2*c-2*a*b*c+b2*c-a*c2+c3);
   let v3 = (-a2-b2+a*c+b*c)*(a3-a2*b-a*b2+b3-2*a*b*c+a*c2+b*c2);
   return [v1,v2,v3];
}

function bary_X121(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = (2*a-b-c)*(a*b2+b3-2*b2*c+a*c2-2*b*c2+c3);
   let v2 = (-a+2*b-c)*(a3+a2*b-2*a2*c-2*a*c2+b*c2+c3);
   let v3 = (-a-b+2*c)*(a3-2*a2*b-2*a*b2+b3+a2*c+b2*c);
   return [v1,v2,v3];
}

function bary_X122(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b-c)*(b-c)*(b+c)*(b+c)*(-a2+b2+c2)*(-a2+b2+c2)*(-3*a4+2*a2*b2+b4+2*a2*c2-2*b2*c2+c4);
   let v2 = (-a+c)*(-a+c)*(a+c)*(a+c)*(a2-b2+c2)*(a2-b2+c2)*(a4+2*a2*b2-3*b4-2*a2*c2+2*b2*c2+c4);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*(a2+b2-c2)*(a2+b2-c2)*(a4-2*a2*b2+b4+2*a2*c2+2*b2*c2-3*c4);
   return [v1,v2,v3];
}

function bary_X123(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b-c)*(b-c)*(-a+b+c)*(-a2+b2+c2)*(-a4+b4-2*a2*b*c+2*a*b2*c+2*a*b*c2-2*b2*c2+c4);
   let v2 = (-a+c)*(-a+c)*(a-b+c)*(a2-b2+c2)*(a4-b4+2*a2*b*c-2*a*b2*c-2*a2*c2+2*a*b*c2+c4);
   let v3 = (a-b)*(a-b)*(a+b-c)*(a2+b2-c2)*(a4-2*a2*b2+b4+2*a2*b*c+2*a*b2*c-2*a*b*c2-c4);
   return [v1,v2,v3];
}

function bary_X124(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = (b-c)*(b-c)*(-a+b+c)*(-(a2*b)+b3-a2*c+a*b*c+c3);
   let v2 = (-a+c)*(-a+c)*(a-b+c)*(a3-a*b2+a*b*c-b2*c+c3);
   let v3 = (a-b)*(a-b)*(a+b-c)*(a3+b3+a*b*c-a*c2-b*c2);
   return [v1,v2,v3];
}

function bary_X125(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (b-c)*(b-c)*(b+c)*(b+c)*(-a2+b2+c2);
   let v2 = (-a+c)*(-a+c)*(a+c)*(a+c)*(a2-b2+c2);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*(a2+b2-c2);
   return [v1,v2,v3];
}

function bary_X126(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = (2*a2-b2-c2)*(a2*b2+b4+a2*c2-4*b2*c2+c4);
   let v2 = (-a2+2*b2-c2)*(a4+a2*b2-4*a2*c2+b2*c2+c4);
   let v3 = (-a2-b2+2*c2)*(a4-4*a2*b2+b4+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X127(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b-c)*(b-c)*(b+c)*(b+c)*(-a2+b2+c2)*(-a4+b4+c4);
   let v2 = (-a+c)*(-a+c)*(a+c)*(a+c)*(a2-b2+c2)*(a4-b4+c4);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*(a2+b2-c2)*(a4+b4-c4);
   return [v1,v2,v3];
}

function bary_X128(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = (a2-b2-b*c-c2)*(a2-b2+b*c-c2)*(a2*b2-b4+a2*c2+2*b2*c2-c4)*(2*a8-4*a6*b2+3*a4*b4-2*a2*b6+b8-4*a6*c2+2*a2*b4*c2-4*b6*c2+3*a4*c4+2*a2*b2*c4+6*b4*c4-2*a2*c6-4*b2*c6+c8);
   let v2 = (-a2+b2-a*c-c2)*(-a2+b2+a*c-c2)*(-a4+a2*b2+2*a2*c2+b2*c2-c4)*(a8-2*a6*b2+3*a4*b4-4*a2*b6+2*b8-4*a6*c2+2*a4*b2*c2-4*b6*c2+6*a4*c4+2*a2*b2*c4+3*b4*c4-4*a2*c6-2*b2*c6+c8);
   let v3 = (-a2-a*b-b2+c2)*(-a2+a*b-b2+c2)*(-a4+2*a2*b2-b4+a2*c2+b2*c2)*(a8-4*a6*b2+6*a4*b4-4*a2*b6+b8-2*a6*c2+2*a4*b2*c2+2*a2*b4*c2-2*b6*c2+3*a4*c4+3*b4*c4-4*a2*c6-4*b2*c6+2*c8);
   return [v1,v2,v3];
}

function bary_X129(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(a2*b2-b4+a2*c2+2*b2*c2-c4)*(a8-2*a6*b2+a4*b4-2*a6*c2+a4*b2*c2+b6*c2+a4*c4-2*b4*c4+b2*c6)*(-4*a2*Math.pow(b,10)+Math.pow(b,12)+a8*b4-4*a6*b6+6*a4*b8-4*a2*Math.pow(c,10)-2*b2*Math.pow(c,10)+Math.pow(c,12)-2*Math.pow(b,10)*c2-2*a4*b6*c2+4*a2*b8*c2+a8*c4-2*a4*b4*c4+b8*c4-4*a6*c6-2*a4*b2*c6+6*a4*c8+4*a2*b2*c8+b4*c8);
   let v2 = b2*(-a4+a2*b2+2*a2*c2+b2*c2-c4)*(a4*b4-2*a2*b6+b8+a6*c2+a2*b4*c2-2*b6*c2-2*a4*c4+b4*c4+a2*c6)*(Math.pow(a,12)-4*Math.pow(a,10)*b2+6*a8*b4-4*a6*b6+a4*b8-2*a2*Math.pow(c,10)-4*b2*Math.pow(c,10)+Math.pow(c,12)-2*Math.pow(a,10)*c2+4*a8*b2*c2-2*a6*b4*c2+a8*c4-2*a4*b4*c4+b8*c4-2*a2*b4*c6-4*b6*c6+a4*c8+4*a2*b2*c8+6*b4*c8);
   let v3 = c2*(-a4+2*a2*b2-b4+a2*c2+b2*c2)*(a6*b2-2*a4*b4+a2*b6+a4*c4+a2*b2*c4+b4*c4-2*a2*c6-2*b2*c6+c8)*(Math.pow(a,12)-2*a2*Math.pow(b,10)+Math.pow(b,12)-2*Math.pow(a,10)*b2+a8*b4+a4*b8-4*Math.pow(a,10)*c2-4*Math.pow(b,10)*c2+4*a8*b2*c2+4*a2*b8*c2+6*a8*c4-2*a6*b2*c4-2*a4*b4*c4-2*a2*b6*c4+6*b8*c4-4*a6*c6-4*b6*c6+a4*c8+b4*c8);
   return [v1,v2,v3];
}

function bary_X130(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(b-c)*(b-c)*(b+c)*(b+c)*(a2-b2-c2)*(a2-b2-c2)*(a2*b2-b4+a2*c2+2*b2*c2-c4)*(a8-2*a6*b2+a4*b4-2*a6*c2+3*a4*b2*c2-b6*c2+a4*c4+2*b4*c4-b2*c6);
   let v2 = b2*(-a+c)*(-a+c)*(a+c)*(a+c)*(-a2+b2-c2)*(-a2+b2-c2)*(-a4+a2*b2+2*a2*c2+b2*c2-c4)*(a4*b4-2*a2*b6+b8-a6*c2+3*a2*b4*c2-2*b6*c2+2*a4*c4+b4*c4-a2*c6);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*c2*(-a2-b2+c2)*(-a2-b2+c2)*(-a4+2*a2*b2-b4+a2*c2+b2*c2)*(-(a6*b2)+2*a4*b4-a2*b6+a4*c4+3*a2*b2*c4+b4*c4-2*a2*c6-2*b2*c6+c8);
   return [v1,v2,v3];
}

function bary_X131(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = (a2-b2-c2)*(a4*b2-2*a2*b4+b6+a4*c2+2*a2*b2*c2-b4*c2-2*a2*c4-b2*c4+c6)*(2*a8-3*a6*b2+a4*b4-a2*b6+b8-3*a6*c2+2*a4*b2*c2+a2*b4*c2-4*b6*c2+a4*c4+a2*b2*c4+6*b4*c4-a2*c6-4*b2*c6+c8);
   let v2 = (-a2+b2-c2)*(a6-2*a4*b2+a2*b4-a4*c2+2*a2*b2*c2+b4*c2-a2*c4-2*b2*c4+c6)*(a8-a6*b2+a4*b4-3*a2*b6+2*b8-4*a6*c2+a4*b2*c2+2*a2*b4*c2-3*b6*c2+6*a4*c4+a2*b2*c4+b4*c4-4*a2*c6-b2*c6+c8);
   let v3 = (-a2-b2+c2)*(a6-a4*b2-a2*b4+b6-2*a4*c2+2*a2*b2*c2-2*b4*c2+a2*c4+b2*c4)*(a8-4*a6*b2+6*a4*b4-4*a2*b6+b8-a6*c2+a4*b2*c2+a2*b4*c2-b6*c2+a4*c4+2*a2*b2*c4+b4*c4-3*a2*c6-3*b2*c6+2*c8);
   return [v1,v2,v3];
}

function bary_X132(orbit, [a,b,c]) {
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
   let v1 = (a2+b2-c2)*(a2-b2+c2)*(a2*b2-b4+a2*c2-c4)*(2*a6-a4*b2-b6-a4*c2+b4*c2+b2*c4-c6);
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*(-a4+a2*b2+b2*c2-c4)*(-a6-a2*b4+2*b6+a4*c2-b4*c2+a2*c4-c6);
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(-a4-b4+a2*c2+b2*c2)*(-a6+a4*b2+a2*b4-b6-a2*c4-b2*c4+2*c6);
   return [v1,v2,v3];
}

function bary_X133(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a8=a2*a6;
   let c8=c2*c6;
   let b8=b2*b6;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2+c2)*(2*a4-a2*b2-b4-a2*c2+2*b2*c2-c4)*(a6*b2-3*a4*b4+3*a2*b6-b8+a6*c2+4*a4*b2*c2-3*a2*b4*c2-2*b6*c2-3*a4*c4-3*a2*b2*c4+6*b4*c4+3*a2*c6-2*b2*c6-c8);
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*(-a4-a2*b2+2*b4+2*a2*c2-b2*c2-c4)*(-a8+3*a6*b2-3*a4*b4+a2*b6-2*a6*c2-3*a4*b2*c2+4*a2*b4*c2+b6*c2+6*a4*c4-3*a2*b2*c4-3*b4*c4-2*a2*c6+3*b2*c6-c8);
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(-a4+2*a2*b2-b4-a2*c2-b2*c2+2*c4)*(-a8-2*a6*b2+6*a4*b4-2*a2*b6-b8+3*a6*c2-3*a4*b2*c2-3*a2*b4*c2+3*b6*c2-3*a4*c4+4*a2*b2*c4-3*b4*c4+a2*c6+b2*c6);
   return [v1,v2,v3];
}

function bary_X134(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(b-c)*(b-c)*(b+c)*(b+c)*(a2*b2-b4+a2*c2+2*b2*c2-c4)*(a4-2*a2*b2+b4-2*a2*c2+c4)*(a4-2*a2*b2+b4-2*a2*c2+c4)*(Math.pow(a,12)-4*Math.pow(a,10)*b2+6*a8*b4-4*a6*b6+a4*b8-b2*Math.pow(c,10)-4*Math.pow(a,10)*c2-Math.pow(b,10)*c2+5*a8*b2*c2+2*a6*b4*c2-4*a4*b6*c2+2*a2*b8*c2+6*a8*c4+2*a6*b2*c4+2*a4*b4*c4-2*a2*b6*c4+4*b8*c4-4*a6*c6-4*a4*b2*c6-2*a2*b4*c6-6*b6*c6+a4*c8+2*a2*b2*c8+4*b4*c8);
   let v2 = b2*(-a+c)*(-a+c)*(a+c)*(a+c)*(-a4+a2*b2+2*a2*c2+b2*c2-c4)*(a4-2*a2*b2+b4-2*b2*c2+c4)*(a4-2*a2*b2+b4-2*b2*c2+c4)*(-4*a2*Math.pow(b,10)+Math.pow(b,12)+a8*b4-4*a6*b6+6*a4*b8-a2*Math.pow(c,10)-Math.pow(a,10)*c2-4*Math.pow(b,10)*c2+2*a8*b2*c2-4*a6*b4*c2+2*a4*b6*c2+5*a2*b8*c2+4*a8*c4-2*a6*b2*c4+2*a4*b4*c4+2*a2*b6*c4+6*b8*c4-6*a6*c6-2*a4*b2*c6-4*a2*b4*c6-4*b6*c6+4*a4*c8+2*a2*b2*c8+b4*c8);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*c2*(-a4+2*a2*b2-b4+a2*c2+b2*c2)*(a4+b4-2*a2*c2-2*b2*c2+c4)*(a4+b4-2*a2*c2-2*b2*c2+c4)*(-(a2*Math.pow(b,10))-Math.pow(a,10)*b2+4*a8*b4-6*a6*b6+4*a4*b8-4*a2*Math.pow(c,10)-4*b2*Math.pow(c,10)+Math.pow(c,12)+2*a8*b2*c2-2*a6*b4*c2-2*a4*b6*c2+2*a2*b8*c2+a8*c4-4*a6*b2*c4+2*a4*b4*c4-4*a2*b6*c4+b8*c4-4*a6*c6+2*a4*b2*c6+2*a2*b4*c6-4*b6*c6+6*a4*c8+5*a2*b2*c8+6*b4*c8);
   return [v1,v2,v3];
}

function bary_X135(orbit, [a,b,c]) {
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
   let v1 = (b-c)*(b-c)*(b+c)*(b+c)*(-a2+b2-c2)*(a2+b2-c2)*(a4-2*a2*b2+b4-2*a2*c2+c4)*(-a6+3*a4*b2-3*a2*b4+b6+3*a4*c2+2*a2*b2*c2-b4*c2-3*a2*c4-b2*c4+c6);
   let v2 = (-a+c)*(-a+c)*(a+c)*(a+c)*(-a2-b2+c2)*(-a2+b2+c2)*(a4-2*a2*b2+b4-2*b2*c2+c4)*(a6-3*a4*b2+3*a2*b4-b6-a4*c2+2*a2*b2*c2+3*b4*c2-a2*c4-3*b2*c4+c6);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*(a2-b2-c2)*(a2-b2+c2)*(a4+b4-2*a2*c2-2*b2*c2+c4)*(a6-a4*b2-a2*b4+b6-3*a4*c2+2*a2*b2*c2-3*b4*c2+3*a2*c4+3*b2*c4-c6);
   return [v1,v2,v3];
}

function bary_X136(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b-c)*(b-c)*(b+c)*(b+c)*(-a2+b2-c2)*(a2+b2-c2)*(a4-2*a2*b2+b4-2*a2*c2+c4);
   let v2 = (-a+c)*(-a+c)*(a+c)*(a+c)*(-a2-b2+c2)*(-a2+b2+c2)*(a4-2*a2*b2+b4-2*b2*c2+c4);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*(a2-b2-c2)*(a2-b2+c2)*(a4+b4-2*a2*c2-2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X137(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = (b-c)*(b-c)*(b+c)*(b+c)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(a4-2*a2*b2+b4-2*a2*c2-b2*c2+c4);
   let v2 = (-a+c)*(-a+c)*(a+c)*(a+c)*(a4-2*a2*b2+b4-a2*c2-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4-a2*b2+b4-2*a2*c2-2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X138(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2+c2)*(a2*b2-b4+a2*c2+2*b2*c2-c4)*(2*a8-4*a6*b2+a4*b4+2*a2*b6-b8-4*a6*c2+4*a4*b2*c2-2*a2*b4*c2+2*b6*c2+a4*c4-2*a2*b2*c4-2*b4*c4+2*a2*c6+2*b2*c6-c8)*(a8-2*a6*b2+2*a4*b4-2*a2*b6+b8-2*a6*c2-a4*b2*c2+2*a2*b4*c2+b6*c2+2*a4*c4+2*a2*b2*c4-4*b4*c4-2*a2*c6+b2*c6+c8);
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*(-a4+a2*b2+2*a2*c2+b2*c2-c4)*(-a8+2*a6*b2+a4*b4-4*a2*b6+2*b8+2*a6*c2-2*a4*b2*c2+4*a2*b4*c2-4*b6*c2-2*a4*c4-2*a2*b2*c4+b4*c4+2*a2*c6+2*b2*c6-c8)*(a8-2*a6*b2+2*a4*b4-2*a2*b6+b8+a6*c2+2*a4*b2*c2-a2*b4*c2-2*b6*c2-4*a4*c4+2*a2*b2*c4+2*b4*c4+a2*c6-2*b2*c6+c8);
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(-a4+2*a2*b2-b4+a2*c2+b2*c2)*(a8+a6*b2-4*a4*b4+a2*b6+b8-2*a6*c2+2*a4*b2*c2+2*a2*b4*c2-2*b6*c2+2*a4*c4-a2*b2*c4+2*b4*c4-2*a2*c6-2*b2*c6+c8)*(-a8+2*a6*b2-2*a4*b4+2*a2*b6-b8+2*a6*c2-2*a4*b2*c2-2*a2*b4*c2+2*b6*c2+a4*c4+4*a2*b2*c4+b4*c4-4*a2*c6-4*b2*c6+2*c8);
   return [v1,v2,v3];
}

function bary_X139(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = (b-c)*(b-c)*(b+c)*(b+c)*(-a2+b2-c2)*(a2+b2-c2)*(a4-2*a2*b2+b4-2*a2*c2+c4)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(Math.pow(a,12)-4*a2*Math.pow(b,10)+Math.pow(b,12)-4*Math.pow(a,10)*b2+7*a8*b4-8*a6*b6+7*a4*b8-4*a2*Math.pow(c,10)-3*b2*Math.pow(c,10)+Math.pow(c,12)-4*Math.pow(a,10)*c2-3*Math.pow(b,10)*c2+11*a8*b2*c2-10*a6*b4*c2+6*a2*b8*c2+7*a8*c4-10*a6*b2*c4+2*a4*b4*c4-2*a2*b6*c4+3*b8*c4-8*a6*c6-2*a2*b4*c6-2*b6*c6+7*a4*c8+6*a2*b2*c8+3*b4*c8);
   let v2 = (-a+c)*(-a+c)*(a+c)*(a+c)*(-a2-b2+c2)*(-a2+b2+c2)*(a4-2*a2*b2+b4-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4)*(Math.pow(a,12)-4*a2*Math.pow(b,10)+Math.pow(b,12)-4*Math.pow(a,10)*b2+7*a8*b4-8*a6*b6+7*a4*b8-3*a2*Math.pow(c,10)-4*b2*Math.pow(c,10)+Math.pow(c,12)-3*Math.pow(a,10)*c2-4*Math.pow(b,10)*c2+6*a8*b2*c2-10*a4*b6*c2+11*a2*b8*c2+3*a8*c4-2*a6*b2*c4+2*a4*b4*c4-10*a2*b6*c4+7*b8*c4-2*a6*c6-2*a4*b2*c6-8*b6*c6+3*a4*c8+6*a2*b2*c8+7*b4*c8);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*(a2-b2-c2)*(a2-b2+c2)*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4+b4-2*a2*c2-2*b2*c2+c4)*(Math.pow(a,12)-3*a2*Math.pow(b,10)+Math.pow(b,12)-3*Math.pow(a,10)*b2+3*a8*b4-2*a6*b6+3*a4*b8-4*a2*Math.pow(c,10)-4*b2*Math.pow(c,10)+Math.pow(c,12)-4*Math.pow(a,10)*c2-4*Math.pow(b,10)*c2+6*a8*b2*c2-2*a6*b4*c2-2*a4*b6*c2+6*a2*b8*c2+7*a8*c4+2*a4*b4*c4+7*b8*c4-8*a6*c6-10*a4*b2*c6-10*a2*b4*c6-8*b6*c6+7*a4*c8+11*a2*b2*c8+7*b4*c8);
   return [v1,v2,v3];
}

function bary_X140(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = 2*a4-3*a2*b2+b4-3*a2*c2-2*b2*c2+c4;
   let v2 = a4-3*a2*b2+2*b4-2*a2*c2-3*b2*c2+c4;
   let v3 = a4-2*a2*b2+b4-3*a2*c2-3*b2*c2+2*c4;
   return [v1,v2,v3];
}

function bary_X141(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2+c2;
   let v2 = a2+c2;
   let v3 = a2+b2;
   return [v1,v2,v3];
}

function bary_X142(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = -(a*b)+b2-a*c-2*b*c+c2;
   let v2 = a2-a*b-2*a*c-b*c+c2;
   let v3 = a2-2*a*b+b2-a*c-b*c;
   return [v1,v2,v3];
}

function bary_X143(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(a2*b2-b4+a2*c2+2*b2*c2-c4)*(a4-2*a2*b2+b4-2*a2*c2-b2*c2+c4);
   let v2 = b2*(-a4+a2*b2+2*a2*c2+b2*c2-c4)*(a4-2*a2*b2+b4-a2*c2-2*b2*c2+c4);
   let v3 = c2*(-a4+2*a2*b2-b4+a2*c2+b2*c2)*(a4-a2*b2+b4-2*a2*c2-2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X144(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = -3*a2+2*a*b+b2+2*a*c-2*b*c+c2;
   let v2 = a2+2*a*b-3*b2-2*a*c+2*b*c+c2;
   let v3 = a2-2*a*b+b2+2*a*c+2*b*c-3*c2;
   return [v1,v2,v3];
}

function bary_X145(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = -3*a+b+c;
   let v2 = a-3*b+c;
   let v3 = a+b-3*c;
   return [v1,v2,v3];
}

function bary_X146(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = -Math.pow(a,10)+Math.pow(b,10)-a8*b2+8*a6*b4-8*a4*b6+a2*b8+Math.pow(c,10)-a8*c2-9*a6*b2*c2+6*a4*b4*c2+7*a2*b6*c2-3*b8*c2+8*a6*c4+6*a4*b2*c4-16*a2*b4*c4+2*b6*c4-8*a4*c6+7*a2*b2*c6+2*b4*c6+a2*c8-3*b2*c8;
   let v2 = Math.pow(a,10)-Math.pow(b,10)+a8*b2-8*a6*b4+8*a4*b6-a2*b8+Math.pow(c,10)-3*a8*c2+7*a6*b2*c2+6*a4*b4*c2-9*a2*b6*c2-b8*c2+2*a6*c4-16*a4*b2*c4+6*a2*b4*c4+8*b6*c4+2*a4*c6+7*a2*b2*c6-8*b4*c6-3*a2*c8+b2*c8;
   let v3 = Math.pow(a,10)+Math.pow(b,10)-3*a8*b2+2*a6*b4+2*a4*b6-3*a2*b8-Math.pow(c,10)+a8*c2+7*a6*b2*c2-16*a4*b4*c2+7*a2*b6*c2+b8*c2-8*a6*c4+6*a4*b2*c4+6*a2*b4*c4-8*b6*c4+8*a4*c6-9*a2*b2*c6+8*b4*c6-a2*c8-b2*c8;
   return [v1,v2,v3];
}

function bary_X147(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a8+a6*b2-2*a4*b4+a2*b6-b8+a6*c2-3*a4*b2*c2+a2*b4*c2+b6*c2-2*a4*c4+a2*b2*c4+a2*c6+b2*c6-c8;
   let v2 = -a8+a6*b2-2*a4*b4+a2*b6+b8+a6*c2+a4*b2*c2-3*a2*b4*c2+b6*c2+a2*b2*c4-2*b4*c4+a2*c6+b2*c6-c8;
   let v3 = -a8+a6*b2+a2*b6-b8+a6*c2+a4*b2*c2+a2*b4*c2+b6*c2-2*a4*c4-3*a2*b2*c4-2*b4*c4+a2*c6+b2*c6+c8;
   return [v1,v2,v3];
}

function bary_X148(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = -a4+a2*b2+b4+a2*c2-3*b2*c2+c4;
   let v2 = a4+a2*b2-b4-3*a2*c2+b2*c2+c4;
   let v3 = a4-3*a2*b2+b4+a2*c2+b2*c2-c4;
   return [v1,v2,v3];
}

function bary_X149(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = -a3+a2*b-a*b2+b3+a2*c+a*b*c-b2*c-a*c2-b*c2+c3;
   let v2 = a3-a2*b+a*b2-b3-a2*c+a*b*c+b2*c-a*c2-b*c2+c3;
   let v3 = a3-a2*b-a*b2+b3-a2*c+a*b*c-b2*c+a*c2+b*c2-c3;
   return [v1,v2,v3];
}

function bary_X150(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   /* end vars */
   let v1 = -a4+a3*b-a*b3+b4+a3*c-a2*b*c+a*b2*c-b3*c+a*b*c2-a*c3-b*c3+c4;
   let v2 = a4-a3*b+a*b3-b4-a3*c+a2*b*c-a*b2*c+b3*c+a*b*c2-a*c3-b*c3+c4;
   let v3 = a4-a3*b-a*b3+b4-a3*c+a2*b*c+a*b2*c-b3*c-a*b*c2+a*c3+b*c3-c4;
   return [v1,v2,v3];
}

function bary_X151(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let b4=b2*b2;
   let b6=b2*b4;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let c7=c*c6;
   let c5=c2*c3;
   let b5=b2*b3;
   let a5=a2*a3;
   let b8=b2*b6;
   let b7=b*b6;
   let a7=a*a6;
   let a8=a2*a6;
   /* end vars */
   let v1 = Math.pow(a,10)-Math.pow(a,9)*b+a*Math.pow(b,9)-Math.pow(b,10)+a8*b2+2*a7*b3-8*a6*b4+8*a4*b6-2*a3*b7-a2*b8-Math.pow(a,9)*c+3*a8*b*c+Math.pow(b,9)*c-6*a7*b2*c+2*a6*b3*c+12*a5*b4*c-12*a4*b5*c-2*a3*b6*c+6*a2*b7*c-3*a*b8*c+a*Math.pow(c,9)+b*Math.pow(c,9)-Math.pow(c,10)+a8*c2-6*a7*b*c2+16*a6*b2*c2-12*a5*b3*c2-8*a4*b4*c2+18*a3*b5*c2-12*a2*b6*c2+3*b8*c2+2*a7*c3+2*a6*b*c3-12*a5*b2*c3+24*a4*b3*c3-14*a3*b4*c3-6*a2*b5*c3+8*a*b6*c3-4*b7*c3-8*a6*c4+12*a5*b*c4-8*a4*b2*c4-14*a3*b3*c4+26*a2*b4*c4-6*a*b5*c4-2*b6*c4-12*a4*b*c5+18*a3*b2*c5-6*a2*b3*c5-6*a*b4*c5+6*b5*c5+8*a4*c6-2*a3*b*c6-12*a2*b2*c6+8*a*b3*c6-2*b4*c6-2*a3*c7+6*a2*b*c7-4*b3*c7-a2*c8-3*a*b*c8+3*b2*c8;
   let v2 = -Math.pow(a,10)+Math.pow(a,9)*b-a*Math.pow(b,9)+Math.pow(b,10)-a8*b2-2*a7*b3+8*a6*b4-8*a4*b6+2*a3*b7+a2*b8+Math.pow(a,9)*c-3*a8*b*c-Math.pow(b,9)*c+6*a7*b2*c-2*a6*b3*c-12*a5*b4*c+12*a4*b5*c+2*a3*b6*c-6*a2*b7*c+3*a*b8*c+a*Math.pow(c,9)+b*Math.pow(c,9)-Math.pow(c,10)+3*a8*c2-12*a6*b2*c2+18*a5*b3*c2-8*a4*b4*c2-12*a3*b5*c2+16*a2*b6*c2-6*a*b7*c2+b8*c2-4*a7*c3+8*a6*b*c3-6*a5*b2*c3-14*a4*b3*c3+24*a3*b4*c3-12*a2*b5*c3+2*a*b6*c3+2*b7*c3-2*a6*c4-6*a5*b*c4+26*a4*b2*c4-14*a3*b3*c4-8*a2*b4*c4+12*a*b5*c4-8*b6*c4+6*a5*c5-6*a4*b*c5-6*a3*b2*c5+18*a2*b3*c5-12*a*b4*c5-2*a4*c6+8*a3*b*c6-12*a2*b2*c6-2*a*b3*c6+8*b4*c6-4*a3*c7+6*a*b2*c7-2*b3*c7+3*a2*c8-3*a*b*c8-b2*c8;
   let v3 = -Math.pow(a,10)+Math.pow(a,9)*b+a*Math.pow(b,9)-Math.pow(b,10)+3*a8*b2-4*a7*b3-2*a6*b4+6*a5*b5-2*a4*b6-4*a3*b7+3*a2*b8+Math.pow(a,9)*c-3*a8*b*c+Math.pow(b,9)*c+8*a6*b3*c-6*a5*b4*c-6*a4*b5*c+8*a3*b6*c-3*a*b8*c-a*Math.pow(c,9)-b*Math.pow(c,9)+Math.pow(c,10)-a8*c2+6*a7*b*c2-12*a6*b2*c2-6*a5*b3*c2+26*a4*b4*c2-6*a3*b5*c2-12*a2*b6*c2+6*a*b7*c2-b8*c2-2*a7*c3-2*a6*b*c3+18*a5*b2*c3-14*a4*b3*c3-14*a3*b4*c3+18*a2*b5*c3-2*a*b6*c3-2*b7*c3+8*a6*c4-12*a5*b*c4-8*a4*b2*c4+24*a3*b3*c4-8*a2*b4*c4-12*a*b5*c4+8*b6*c4+12*a4*b*c5-12*a3*b2*c5-12*a2*b3*c5+12*a*b4*c5-8*a4*c6+2*a3*b*c6+16*a2*b2*c6+2*a*b3*c6-8*b4*c6+2*a3*c7-6*a2*b*c7-6*a*b2*c7+2*b3*c7+a2*c8+3*a*b*c8+b2*c8;
   return [v1,v2,v3];
}

function bary_X152(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let c3=c2*c;
   let b2=b*b;
   let a2=a*a;
   let b4=b2*b2;
   let b6=b2*b4;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let c7=c*c6;
   let c5=c2*c3;
   let b8=b2*b6;
   let b7=b*b6;
   let b5=b2*b3;
   let a5=a2*a3;
   let a7=a*a6;
   let a8=a2*a6;
   /* end vars */
   let v1 = -a8+a7*b-2*a6*b2+5*a5*b3-5*a3*b5+2*a2*b6-a*b7+b8+a7*c-a6*b*c-a5*b2*c+a4*b3*c-a3*b4*c+a2*b5*c+a*b6*c-b7*c-2*a6*c2-a5*b*c2-6*a4*b2*c2+6*a3*b3*c2+2*a2*b4*c2+3*a*b5*c2-2*b6*c2+5*a5*c3+a4*b*c3+6*a3*b2*c3-10*a2*b3*c3-3*a*b4*c3+b5*c3-a3*b*c4+2*a2*b2*c4-3*a*b3*c4+2*b4*c4-5*a3*c5+a2*b*c5+3*a*b2*c5+b3*c5+2*a2*c6+a*b*c6-2*b2*c6-a*c7-b*c7+c8;
   let v2 = a8-a7*b+2*a6*b2-5*a5*b3+5*a3*b5-2*a2*b6+a*b7-b8-a7*c+a6*b*c+a5*b2*c-a4*b3*c+a3*b4*c-a2*b5*c-a*b6*c+b7*c-2*a6*c2+3*a5*b*c2+2*a4*b2*c2+6*a3*b3*c2-6*a2*b4*c2-a*b5*c2-2*b6*c2+a5*c3-3*a4*b*c3-10*a3*b2*c3+6*a2*b3*c3+a*b4*c3+5*b5*c3+2*a4*c4-3*a3*b*c4+2*a2*b2*c4-a*b3*c4+a3*c5+3*a2*b*c5+a*b2*c5-5*b3*c5-2*a2*c6+a*b*c6+2*b2*c6-a*c7-b*c7+c8;
   let v3 = a8-a7*b-2*a6*b2+a5*b3+2*a4*b4+a3*b5-2*a2*b6-a*b7+b8-a7*c+a6*b*c+3*a5*b2*c-3*a4*b3*c-3*a3*b4*c+3*a2*b5*c+a*b6*c-b7*c+2*a6*c2+a5*b*c2+2*a4*b2*c2-10*a3*b3*c2+2*a2*b4*c2+a*b5*c2+2*b6*c2-5*a5*c3-a4*b*c3+6*a3*b2*c3+6*a2*b3*c3-a*b4*c3-5*b5*c3+a3*b*c4-6*a2*b2*c4+a*b3*c4+5*a3*c5-a2*b*c5-a*b2*c5+5*b3*c5-2*a2*c6-a*b*c6-2*b2*c6+a*c7+b*c7-c8;
   return [v1,v2,v3];
}

function bary_X153(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let c3=c2*c;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c7=c*c6;
   let c5=c2*c3;
   let b7=b*b6;
   let b5=b2*b3;
   let a5=a2*a3;
   let a7=a*a6;
   /* end vars */
   let v1 = -a7+a6*b+a5*b2-a4*b3+a3*b4-a2*b5-a*b6+b7+a6*c-7*a5*b*c+5*a4*b2*c+2*a3*b3*c-5*a2*b4*c+5*a*b5*c-b6*c+a5*c2+5*a4*b*c2-10*a3*b2*c2+6*a2*b3*c2+a*b4*c2-3*b5*c2-a4*c3+2*a3*b*c3+6*a2*b2*c3-10*a*b3*c3+3*b4*c3+a3*c4-5*a2*b*c4+a*b2*c4+3*b3*c4-a2*c5+5*a*b*c5-3*b2*c5-a*c6-b*c6+c7;
   let v2 = a7-a6*b-a5*b2+a4*b3-a3*b4+a2*b5+a*b6-b7-a6*c+5*a5*b*c-5*a4*b2*c+2*a3*b3*c+5*a2*b4*c-7*a*b5*c+b6*c-3*a5*c2+a4*b*c2+6*a3*b2*c2-10*a2*b3*c2+5*a*b4*c2+b5*c2+3*a4*c3-10*a3*b*c3+6*a2*b2*c3+2*a*b3*c3-b4*c3+3*a3*c4+a2*b*c4-5*a*b2*c4+b3*c4-3*a2*c5+5*a*b*c5-b2*c5-a*c6-b*c6+c7;
   let v3 = a7-a6*b-3*a5*b2+3*a4*b3+3*a3*b4-3*a2*b5-a*b6+b7-a6*c+5*a5*b*c+a4*b2*c-10*a3*b3*c+a2*b4*c+5*a*b5*c-b6*c-a5*c2-5*a4*b*c2+6*a3*b2*c2+6*a2*b3*c2-5*a*b4*c2-b5*c2+a4*c3+2*a3*b*c3-10*a2*b2*c3+2*a*b3*c3+b4*c3-a3*c4+5*a2*b*c4+5*a*b2*c4-b3*c4+a2*c5-7*a*b*c5+b2*c5+a*c6+b*c6-c7;
   return [v1,v2,v3];
}

function bary_X154(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(3*a4-2*a2*b2-b4-2*a2*c2+2*b2*c2-c4);
   let v2 = b2*(-a4-2*a2*b2+3*b4+2*a2*c2-2*b2*c2-c4);
   let v3 = c2*(-a4+2*a2*b2-b4-2*a2*c2-2*b2*c2+3*c4);
   return [v1,v2,v3];
}

function bary_X155(orbit, [a,b,c]) {
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
   let v1 = a2*(a2-b2-c2)*(a6-3*a4*b2+3*a2*b4-b6-3*a4*c2-2*a2*b2*c2+b4*c2+3*a2*c4+b2*c4-c6);
   let v2 = b2*(-a2+b2-c2)*(-a6+3*a4*b2-3*a2*b4+b6+a4*c2-2*a2*b2*c2-3*b4*c2+a2*c4+3*b2*c4-c6);
   let v3 = c2*(-a2-b2+c2)*(-a6+a4*b2+a2*b4-b6+3*a4*c2-2*a2*b2*c2+3*b4*c2-3*a2*c4-3*b2*c4+c6);
   return [v1,v2,v3];
}

function bary_X156(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(a8-3*a6*b2+3*a4*b4-a2*b6-3*a6*c2+2*a4*b2*c2+b6*c2+3*a4*c4-2*b4*c4-a2*c6+b2*c6);
   let v2 = b2*(-(a6*b2)+3*a4*b4-3*a2*b6+b8+a6*c2+2*a2*b4*c2-3*b6*c2-2*a4*c4+3*b4*c4+a2*c6-b2*c6);
   let v3 = c2*(a6*b2-2*a4*b4+a2*b6-a6*c2-b6*c2+3*a4*c4+2*a2*b2*c4+3*b4*c4-3*a2*c6-3*b2*c6+c8);
   return [v1,v2,v3];
}

function bary_X157(orbit, [a,b,c]) {
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
   let v1 = a2*(a6-a4*b2+a2*b4-b6-a4*c2+b4*c2+a2*c4+b2*c4-c6);
   let v2 = b2*(-a6+a4*b2-a2*b4+b6+a4*c2-b4*c2+a2*c4+b2*c4-c6);
   let v3 = c2*(-a6+a4*b2+a2*b4-b6+a4*c2+b4*c2-a2*c4-b2*c4+c6);
   return [v1,v2,v3];
}

function bary_X158(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = b*c*(-a2+b2-c2)*(-a2+b2-c2)*(a2+b2-c2)*(a2+b2-c2);
   let v2 = a*c*(-a2-b2+c2)*(-a2-b2+c2)*(-a2+b2+c2)*(-a2+b2+c2);
   let v3 = a*b*(a2-b2-c2)*(a2-b2-c2)*(a2-b2+c2)*(a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X159(orbit, [a,b,c]) {
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
   let v1 = a2*(a6+a4*b2-a2*b4-b6+a4*c2-2*a2*b2*c2+b4*c2-a2*c4+b2*c4-c6);
   let v2 = b2*(-a6-a4*b2+a2*b4+b6+a4*c2-2*a2*b2*c2+b4*c2+a2*c4-b2*c4-c6);
   let v3 = c2*(-a6+a4*b2+a2*b4-b6-a4*c2-2*a2*b2*c2-b4*c2+a2*c4+b2*c4+c6);
   return [v1,v2,v3];
}

function bary_X160(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(a2*b2-b4+a2*c2-b2*c2-c4);
   let v2 = b4*(-a4+a2*b2-a2*c2+b2*c2-c4);
   let v3 = (-a4-a2*b2-b4+a2*c2+b2*c2)*c4;
   return [v1,v2,v3];
}

function bary_X161(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(Math.pow(a,10)-Math.pow(b,10)-a8*b2-2*a6*b4+2*a4*b6+a2*b8-Math.pow(c,10)-a8*c2-2*a6*b2*c2+2*a4*b4*c2-2*a2*b6*c2+3*b8*c2-2*a6*c4+2*a4*b2*c4+2*a2*b4*c4-2*b6*c4+2*a4*c6-2*a2*b2*c6-2*b4*c6+a2*c8+3*b2*c8);
   let v2 = b2*(-Math.pow(a,10)+Math.pow(b,10)+a8*b2+2*a6*b4-2*a4*b6-a2*b8-Math.pow(c,10)+3*a8*c2-2*a6*b2*c2+2*a4*b4*c2-2*a2*b6*c2-b8*c2-2*a6*c4+2*a4*b2*c4+2*a2*b4*c4-2*b6*c4-2*a4*c6-2*a2*b2*c6+2*b4*c6+3*a2*c8+b2*c8);
   let v3 = c2*(-Math.pow(a,10)-Math.pow(b,10)+3*a8*b2-2*a6*b4-2*a4*b6+3*a2*b8+Math.pow(c,10)+a8*c2-2*a6*b2*c2+2*a4*b4*c2-2*a2*b6*c2+b8*c2+2*a6*c4+2*a4*b2*c4+2*a2*b4*c4+2*b6*c4-2*a4*c6-2*a2*b2*c6-2*b4*c6-a2*c8-b2*c8);
   return [v1,v2,v3];
}

function bary_X162(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a-b)*(a+b)*(a-c)*(a+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = b*(-a+b)*(a+b)*(b-c)*(b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = c*(-a+c)*(a+c)*(-b+c)*(b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X163(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(a-b)*(a+b)*(a-c)*(a+c);
   let v2 = (-a+b)*(a+b)*b3*(b-c)*(b+c);
   let v3 = (-a+c)*(a+c)*(-b+c)*(b+c)*c3;
   return [v1,v2,v3];
}

function bary_X164(orbit, [a,b,c]) {
   /* begin vars */
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*(-Sqrt(a*(a+b-c)*(a-b+c))+Sqrt(b*(a+b-c)*(-a+b+c))+Sqrt(c*(a-b+c)*(-a+b+c)));
   let v2 = b*(Sqrt(a*(a+b-c)*(a-b+c))-Sqrt(b*(a+b-c)*(-a+b+c))+Sqrt(c*(a-b+c)*(-a+b+c)));
   let v3 = c*(Sqrt(a*(a+b-c)*(a-b+c))+Sqrt(b*(a+b-c)*(-a+b+c))-Sqrt(c*(a-b+c)*(-a+b+c)));
   return [v1,v2,v3];
}

function bary_X165(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(3*a2-2*a*b-b2-2*a*c+2*b*c-c2);
   let v2 = b*(-a2-2*a*b+3*b2+2*a*c-2*b*c-c2);
   let v3 = c*(-a2+2*a*b-b2-2*a*c-2*b*c+3*c2);
   return [v1,v2,v3];
}

function bary_X166(orbit, [a,b,c]) {
   /* begin vars */
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   let sc=(a+b-c)/2;
   /* end vars */
   let v1 = a*(1/(sc*(Sqrt(a*s*sa)+Sqrt(b*s*sb)-Sqrt(c*s*sc)))+1/(sb*(Sqrt(a*s*sa)-Sqrt(b*s*sb)+Sqrt(c*s*sc)))-1/(sa*(-Sqrt(a*s*sa)+Sqrt(b*s*sb)+Sqrt(c*s*sc))));
   let v2 = b*(1/(sc*(Sqrt(a*s*sa)+Sqrt(b*s*sb)-Sqrt(c*s*sc)))-1/(sb*(Sqrt(a*s*sa)-Sqrt(b*s*sb)+Sqrt(c*s*sc)))+1/(sa*(-Sqrt(a*s*sa)+Sqrt(b*s*sb)+Sqrt(c*s*sc))));
   let v3 = c*(-(1/(sc*(Sqrt(a*s*sa)+Sqrt(b*s*sb)-Sqrt(c*s*sc))))+1/(sb*(Sqrt(a*s*sa)-Sqrt(b*s*sb)+Sqrt(c*s*sc)))+1/(sa*(-Sqrt(a*s*sa)+Sqrt(b*s*sb)+Sqrt(c*s*sc))));
   return [v1,v2,v3];
}

function bary_X167(orbit, [a,b,c]) {
   /* begin vars */
   let b2=b*b;
   let a2=a*a;
   let c2=c*c;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let sb=(c+a-b)/2;
   let sc=(a+b-c)/2;
   let sa=(b+c-a)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*(-(c*(a*Sqrt((sa*sc)/(a*c))-b*Sqrt((sb*sc)/(b*c)))*(2*(-a+c)*sb*Sqrt((sa*sc)/(a*c))+2*sa*sc*(-Sqrt((sa*sb)/(a*b))+Sqrt((sb*sc)/(b*c)))))+b*(-(a*Sqrt((sa*sb)/(a*b)))+c*Sqrt((sb*sc)/(b*c)))*(2*(a-b)*Sqrt((sa*sb)/(a*b))*sc+(-Sqrt((sa*sc)/(a*c))+Sqrt((sb*sc)/(b*c)))*(-(a*b)+SC)));
   let v2 = b*(c*(a*Sqrt((sa*sc)/(a*c))-b*Sqrt((sb*sc)/(b*c)))*(2*(b-c)*sa*Sqrt((sb*sc)/(b*c))+(-(b*c)+SA)*(-Sqrt((sa*sb)/(a*b))+Sqrt((sa*sc)/(a*c))))-a*(b*Sqrt((sa*sb)/(a*b))-c*Sqrt((sa*sc)/(a*c)))*(2*(a-b)*Sqrt((sa*sb)/(a*b))*sc+2*sa*sb*(Sqrt((sa*sc)/(a*c))-Sqrt((sb*sc)/(b*c)))));
   let v3 = c*(-(b*(-(a*Sqrt((sa*sb)/(a*b)))+c*Sqrt((sb*sc)/(b*c)))*(2*(b-c)*sa*Sqrt((sb*sc)/(b*c))+2*sb*sc*(Sqrt((sa*sb)/(a*b))-Sqrt((sa*sc)/(a*c)))))+a*(b*Sqrt((sa*sb)/(a*b))-c*Sqrt((sa*sc)/(a*c)))*(2*(-a+c)*sb*Sqrt((sa*sc)/(a*c))+(-(a*c)+SB)*(Sqrt((sa*sb)/(a*b))-Sqrt((sb*sc)/(b*c)))));
   return [v1,v2,v3];
}

function bary_X168(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   let sa=(b+c-a)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = a*(2*area*sa-a*(c*Sqrt((s*sb)/(a*c))*(sa-sc)+b*(c*Sqrt((s*sa)/(b*c))+(sa-sb)*Sqrt((s*sc)/(a*b)))));
   let v2 = b*(2*area*sb-b*(c*(a*Sqrt((s*sb)/(a*c))+Sqrt((s*sa)/(b*c))*(sb-sc))+a*(-sa+sb)*Sqrt((s*sc)/(a*b))));
   let v3 = c*(2*area*sc-c*(b*Sqrt((s*sa)/(b*c))*(-sb+sc)+a*(b*Sqrt((s*sc)/(a*b))+Sqrt((s*sb)/(a*c))*(-sa+sc))));
   return [v1,v2,v3];
}

function bary_X169(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3-a2*b+a*b2-b3-a2*c+b2*c+a*c2+b*c2-c3);
   let v2 = b*(-a3+a2*b-a*b2+b3+a2*c-b2*c+a*c2+b*c2-c3);
   let v3 = c*(-a3+a2*b+a*b2-b3+a2*c+b2*c-a*c2-b*c2+c3);
   return [v1,v2,v3];
}

function bary_X170(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let c4=c2*c2;
   let b5=b2*b3;
   let b4=b2*b2;
   let a4=a2*a2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a*(a5*b-4*a4*b2+6*a3*b3-4*a2*b4+a*b5+a5*c-a4*b*c-2*a3*b2*c+2*a2*b3*c+a*b4*c-b5*c-4*a4*c2-2*a3*b*c2+4*a2*b2*c2-2*a*b3*c2+4*b4*c2+6*a3*c3+2*a2*b*c3-2*a*b2*c3-6*b3*c3-4*a2*c4+a*b*c4+4*b2*c4+a*c5-b*c5);
   let v2 = b*(a5*b-4*a4*b2+6*a3*b3-4*a2*b4+a*b5-a5*c+a4*b*c+2*a3*b2*c-2*a2*b3*c-a*b4*c+b5*c+4*a4*c2-2*a3*b*c2+4*a2*b2*c2-2*a*b3*c2-4*b4*c2-6*a3*c3-2*a2*b*c3+2*a*b2*c3+6*b3*c3+4*a2*c4+a*b*c4-4*b2*c4-a*c5+b*c5);
   let v3 = c*(-(a5*b)+4*a4*b2-6*a3*b3+4*a2*b4-a*b5+a5*c+a4*b*c-2*a3*b2*c-2*a2*b3*c+a*b4*c+b5*c-4*a4*c2+2*a3*b*c2+4*a2*b2*c2+2*a*b3*c2-4*b4*c2+6*a3*c3-2*a2*b*c3-2*a*b2*c3+6*b3*c3-4*a2*c4-a*b*c4-4*b2*c4+a*c5+b*c5);
   return [v1,v2,v3];
}

function bary_X171(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2+b*c);
   let v2 = b*(b2+a*c);
   let v3 = c*(a*b+c2);
   return [v1,v2,v3];
}

function bary_X172(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2+b*c);
   let v2 = b2*(b2+a*c);
   let v3 = c2*(a*b+c2);
   return [v1,v2,v3];
}

function bary_X173(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*(-Sqrt((s*sa)/(b*c))+Sqrt((s*sb)/(a*c))+Sqrt((s*sc)/(a*b)));
   let v2 = b*(Sqrt((s*sa)/(b*c))-Sqrt((s*sb)/(a*c))+Sqrt((s*sc)/(a*b)));
   let v3 = c*(Sqrt((s*sa)/(b*c))+Sqrt((s*sb)/(a*c))-Sqrt((s*sc)/(a*b)));
   return [v1,v2,v3];
}

function bary_X174(orbit, [a,b,c]) {
   /* begin vars */
   let sa=(b+c-a)/2;
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = Sqrt((sb*sc)/(b*c));
   let v2 = Sqrt((sa*sc)/(a*c));
   let v3 = Sqrt((sa*sb)/(a*b));
   return [v1,v2,v3];
}

function bary_X175(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(a*(a-b-c)+S);
   let v2 = (a+b-c)*(-a+b+c)*(b*(-a+b-c)+S);
   let v3 = (a-b+c)*(-a+b+c)*(c*(-a-b+c)+S);
   return [v1,v2,v3];
}

function bary_X176(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(a*(a-b-c)-S);
   let v2 = (a+b-c)*(-a+b+c)*(b*(-a+b-c)-S);
   let v3 = (a-b+c)*(-a+b+c)*(c*(-a-b+c)-S);
   return [v1,v2,v3];
}

function bary_X177(orbit, [a,b,c]) {
   /* begin vars */
   let sqrtc=sqrt(c);
   let sqrtb=sqrt(b);
   let sqrta=sqrt(a);
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = (Sqrt(b*(a+b-c))*(a-b+c)+(a+b-c)*Sqrt(c*(a-b+c)))*sqrta;
   let v2 = (Sqrt(a*(a+b-c))*(-a+b+c)+(a+b-c)*Sqrt(c*(-a+b+c)))*sqrtb;
   let v3 = (Sqrt(a*(a-b+c))*(-a+b+c)+(a-b+c)*Sqrt(b*(-a+b+c)))*sqrtc;
   return [v1,v2,v3];
}

function bary_X178(orbit, [a,b,c]) {
   /* begin vars */
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = Sqrt((a+b-c)*c)+Sqrt(b*(a-b+c));
   let v2 = Sqrt((a+b-c)*c)+Sqrt(a*(-a+b+c));
   let v3 = Sqrt(b*(a-b+c))+Sqrt(a*(-a+b+c));
   return [v1,v2,v3];
}

function bary_X179(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosHalfC=cosHalfAngle(cosC);
   let cosQuarterC=cosHalfAngle(cosHalfC);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfB=cosHalfAngle(cosB);
   let cosQuarterB=cosHalfAngle(cosHalfB);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfA=cosHalfAngle(cosA);
   let cosQuarterA=cosHalfAngle(cosHalfA);
   let sinC=getSin(cosC);
   let secQuarterC=1/cosQuarterC;
   let sinB=getSin(cosB);
   let secQuarterB=1/cosQuarterB;
   let sinA=getSin(cosA);
   let secQuarterA=1/cosQuarterA;
   /* end vars */
   let v1 = Math.pow(secQuarterA,4)*sinA;
   let v2 = Math.pow(secQuarterB,4)*sinB;
   let v3 = Math.pow(secQuarterC,4)*sinC;
   return [v1,v2,v3];
}

function bary_X180(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfC=cosHalfAngle(cosC);
   let cosQuarterC=cosHalfAngle(cosHalfC);
   let cosHalfB=cosHalfAngle(cosB);
   let cosQuarterB=cosHalfAngle(cosHalfB);
   let cosHalfA=cosHalfAngle(cosA);
   let cosQuarterA=cosHalfAngle(cosHalfA);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   let sinA=getSin(cosA);
   let secQuarterC=1/cosQuarterC;
   let secQuarterB=1/cosQuarterB;
   let secQuarterA=1/cosQuarterA;
   /* end vars */
   let v1 = (1/(-1-2*cosQuarterB*cosQuarterB*cosQuarterC*cosQuarterC*secQuarterA*secQuarterA)+1/(1+2*cosQuarterA*cosQuarterA*cosQuarterC*cosQuarterC*secQuarterB*secQuarterB)+1/(1+2*cosQuarterA*cosQuarterA*cosQuarterB*cosQuarterB*secQuarterC*secQuarterC))*sinA;
   let v2 = (1/(1+2*cosQuarterB*cosQuarterB*cosQuarterC*cosQuarterC*secQuarterA*secQuarterA)+1/(-1-2*cosQuarterA*cosQuarterA*cosQuarterC*cosQuarterC*secQuarterB*secQuarterB)+1/(1+2*cosQuarterA*cosQuarterA*cosQuarterB*cosQuarterB*secQuarterC*secQuarterC))*sinB;
   let v3 = (1/(1+2*cosQuarterB*cosQuarterB*cosQuarterC*cosQuarterC*secQuarterA*secQuarterA)+1/(1+2*cosQuarterA*cosQuarterA*cosQuarterC*cosQuarterC*secQuarterB*secQuarterB)+1/(-1-2*cosQuarterA*cosQuarterA*cosQuarterB*cosQuarterB*secQuarterC*secQuarterC))*sinC;
   return [v1,v2,v3];
}

function bary_X181(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a+b-c)*(a-b+c)*(b+c)*(b+c);
   let v2 = b2*(a+b-c)*(a+c)*(a+c)*(-a+b+c);
   let v3 = (a+b)*(a+b)*(a-b+c)*(-a+b+c)*c2;
   return [v1,v2,v3];
}

function bary_X182(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4-a2*b2-a2*c2-2*b2*c2);
   let v2 = b2*(-(a2*b2)+b4-2*a2*c2-b2*c2);
   let v3 = c2*(-2*a2*b2-a2*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X183(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4-a2*b2-a2*c2-2*b2*c2;
   let v2 = -(a2*b2)+b4-2*a2*c2-b2*c2;
   let v3 = -2*a2*b2-a2*c2-b2*c2+c4;
   return [v1,v2,v3];
}

function bary_X184(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(a2-b2-c2);
   let v2 = b4*(-a2+b2-c2);
   let v3 = (-a2-b2+c2)*c4;
   return [v1,v2,v3];
}

function bary_X185(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let a4=a2*a2;
   let c2=c*c;
   let c4=c2*c2;
   let b2=b*b;
   let b4=b2*b2;
   let a6=a2*a4;
   let c6=c2*c4;
   let b6=b2*b4;
   /* end vars */
   let v1 = a2*(a2-b2-c2)*(a4*b2-2*a2*b4+b6+a4*c2+4*a2*b2*c2-b4*c2-2*a2*c4-b2*c4+c6);
   let v2 = b2*(-a2+b2-c2)*(a6-2*a4*b2+a2*b4-a4*c2+4*a2*b2*c2+b4*c2-a2*c4-2*b2*c4+c6);
   let v3 = c2*(-a2-b2+c2)*(a6-a4*b2-a2*b4+b6-2*a4*c2+4*a2*b2*c2-2*b4*c2+a2*c4+b2*c4);
   return [v1,v2,v3];
}

function bary_X186(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2+b2-c2)*(a2-b2-b*c-c2)*(a2-b2+b*c-c2)*(a2-b2+c2);
   let v2 = b2*(a2+b2-c2)*(-a2+b2-a*c-c2)*(-a2+b2+a*c-c2)*(-a2+b2+c2);
   let v3 = c2*(a2-b2+c2)*(-a2-a*b-b2+c2)*(-a2+a*b-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X187(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(2*a2-b2-c2);
   let v2 = b2*(-a2+2*b2-c2);
   let v3 = c2*(-a2-b2+2*c2);
   return [v1,v2,v3];
}

function bary_X188(orbit, [a,b,c]) {
   /* begin vars */
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*Sqrt(b*c*(-a+b+c));
   let v2 = b*Sqrt(a*c*(a-b+c));
   let v3 = Sqrt(a*b*(a+b-c))*c;
   return [v1,v2,v3];
}

function bary_X189(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   let v2 = (a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3);
   let v3 = (-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X190(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a-b)*(a-c);
   let v2 = (-a+b)*(b-c);
   let v3 = (-a+c)*(-b+c);
   return [v1,v2,v3];
}

function bary_X191(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3+a2*b-a*b2-b3+a2*c-a*b*c-b2*c-a*c2-b*c2-c3);
   let v2 = b*(-a3-a2*b+a*b2+b3-a2*c-a*b*c+b2*c-a*c2-b*c2-c3);
   let v3 = c*(-a3-a2*b-a*b2-b3-a2*c-a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X192(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*b+a*c-b*c;
   let v2 = a*b-a*c+b*c;
   let v3 = -(a*b)+a*c+b*c;
   return [v1,v2,v3];
}

function bary_X193(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = -3*a2+b2+c2;
   let v2 = a2-3*b2+c2;
   let v3 = a2+b2-3*c2;
   return [v1,v2,v3];
}

function bary_X194(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*b2+a2*c2-b2*c2;
   let v2 = a2*b2-a2*c2+b2*c2;
   let v3 = -(a2*b2)+a2*c2+b2*c2;
   return [v1,v2,v3];
}

function bary_X195(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(a8-4*a6*b2+6*a4*b4-4*a2*b6+b8-4*a6*c2+5*a4*b2*c2+a2*b4*c2-2*b6*c2+6*a4*c4+a2*b2*c4+2*b4*c4-4*a2*c6-2*b2*c6+c8);
   let v2 = b2*(a8-4*a6*b2+6*a4*b4-4*a2*b6+b8-2*a6*c2+a4*b2*c2+5*a2*b4*c2-4*b6*c2+2*a4*c4+a2*b2*c4+6*b4*c4-2*a2*c6-4*b2*c6+c8);
   let v3 = c2*(a8-2*a6*b2+2*a4*b4-2*a2*b6+b8-4*a6*c2+a4*b2*c2+a2*b4*c2-4*b6*c2+6*a4*c4+5*a2*b2*c4+6*b4*c4-4*a2*c6-4*b2*c6+c8);
   return [v1,v2,v3];
}

function bary_X196(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(a2+b2-c2)*(a2-b2+c2)*(a3+a2*b-a*b2-b3+a2*c-2*a*b*c+b2*c-a*c2+b*c2-c3);
   let v2 = (a+b-c)*(-a+b+c)*(a2+b2-c2)*(-a2+b2+c2)*(-a3-a2*b+a*b2+b3+a2*c-2*a*b*c+b2*c+a*c2-b*c2-c3);
   let v3 = (a-b+c)*(-a+b+c)*(a2-b2+c2)*(-a2+b2+c2)*(-a3+a2*b+a*b2-b3-a2*c-2*a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X197(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4-b4+2*a2*b*c-2*a*b2*c-2*a*b*c2+2*b2*c2-c4);
   let v2 = b2*(-a4+b4-2*a2*b*c+2*a*b2*c+2*a2*c2-2*a*b*c2-c4);
   let v3 = c2*(-a4+2*a2*b2-b4-2*a2*b*c-2*a*b2*c+2*a*b*c2+c4);
   return [v1,v2,v3];
}

function bary_X198(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2*(a3+a2*b-a*b2-b3+a2*c-2*a*b*c+b2*c-a*c2+b*c2-c3);
   let v2 = b2*(-a3-a2*b+a*b2+b3+a2*c-2*a*b*c+b2*c+a*c2-b*c2-c3);
   let v3 = c2*(-a3+a2*b+a*b2-b3-a2*c-2*a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X199(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4+a3*b-a*b3-b4+a3*c+a2*b*c-a*b2*c-b3*c-a*b*c2-a*c3-b*c3-c4);
   let v2 = b2*(-a4-a3*b+a*b3+b4-a3*c-a2*b*c+a*b2*c+b3*c-a*b*c2-a*c3-b*c3-c4);
   let v3 = c2*(-a4-a3*b-a*b3-b4-a3*c-a2*b*c-a*b2*c-b3*c+a*b*c2+a*c3+b*c3+c4);
   return [v1,v2,v3];
}

function bary_X200(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-b-c)*(a-b-c);
   let v2 = b*(-a+b-c)*(-a+b-c);
   let v3 = c*(-a-b+c)*(-a-b+c);
   return [v1,v2,v3];
}

function bary_X201(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c)*(b+c)*(b+c)*(a2-b2-c2);
   let v2 = b*(a+b-c)*(a+c)*(a+c)*(-a+b+c)*(-a2+b2-c2);
   let v3 = (a+b)*(a+b)*c*(a-b+c)*(-a+b+c)*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X202(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-b2+4*b*c-c2+2*S*sqrt3);
   let v2 = b2*(-a2+b2+4*a*c-c2+2*S*sqrt3);
   let v3 = c2*(-a2+4*a*b-b2+c2+2*S*sqrt3);
   return [v1,v2,v3];
}

function bary_X203(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-b2+4*b*c-c2-2*S*sqrt3);
   let v2 = b2*(-a2+b2+4*a*c-c2-2*S*sqrt3);
   let v3 = c2*(-a2+4*a*b-b2+c2-2*S*sqrt3);
   return [v1,v2,v3];
}

function bary_X204(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(a2+b2-c2)*(a2-b2+c2)*(3*a4-2*a2*b2-b4-2*a2*c2+2*b2*c2-c4);
   let v2 = b*(a2+b2-c2)*(-a2+b2+c2)*(-a4-2*a2*b2+3*b4+2*a2*c2-2*b2*c2-c4);
   let v3 = c*(a2-b2+c2)*(-a2+b2+c2)*(-a4+2*a2*b2-b4-2*a2*c2-2*b2*c2+3*c4);
   return [v1,v2,v3];
}

function bary_X205(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(a4-b4+2*a2*b*c-2*a*b2*c-2*a*b*c2+2*b2*c2-c4);
   let v2 = b3*(-a4+b4-2*a2*b*c+2*a*b2*c+2*a2*c2-2*a*b*c2-c4);
   let v3 = c3*(-a4+2*a2*b2-b4-2*a2*b*c-2*a*b2*c+2*a*b*c2+c4);
   return [v1,v2,v3];
}

function bary_X206(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(a4-b4-c4);
   let v2 = b4*(-a4+b4-c4);
   let v3 = c4*(-a4-b4+c4);
   return [v1,v2,v3];
}

function bary_X207(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c3=c2*c;
   let b2=b*b;
   let b4=b2*b2;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let a4=a2*a2;
   let c6=c2*c4;
   let c5=c2*c3;
   let b6=b2*b4;
   let b5=b2*b3;
   let a5=a2*a3;
   let a6=a2*a4;
   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c)*(a2+b2-c2)*(a2-b2+c2)*(a6-2*a5*b-a4*b2+4*a3*b3-a2*b4-2*a*b5+b6-2*a5*c-2*a4*b*c+2*a*b4*c+2*b5*c-a4*c2+2*a2*b2*c2-b4*c2+4*a3*c3-4*b3*c3-a2*c4+2*a*b*c4-b2*c4-2*a*c5+2*b*c5+c6);
   let v2 = b*(a+b-c)*(-a+b+c)*(a2+b2-c2)*(-a2+b2+c2)*(a6-2*a5*b-a4*b2+4*a3*b3-a2*b4-2*a*b5+b6+2*a5*c+2*a4*b*c-2*a*b4*c-2*b5*c-a4*c2+2*a2*b2*c2-b4*c2-4*a3*c3+4*b3*c3-a2*c4+2*a*b*c4-b2*c4+2*a*c5-2*b*c5+c6);
   let v3 = c*(a-b+c)*(-a+b+c)*(a2-b2+c2)*(-a2+b2+c2)*(a6+2*a5*b-a4*b2-4*a3*b3-a2*b4+2*a*b5+b6-2*a5*c+2*a4*b*c+2*a*b4*c-2*b5*c-a4*c2+2*a2*b2*c2-b4*c2+4*a3*c3+4*b3*c3-a2*c4-2*a*b*c4-b2*c4-2*a*c5-2*b*c5+c6);
   return [v1,v2,v3];
}

function bary_X208(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c)*(a2+b2-c2)*(a2-b2+c2)*(a3+a2*b-a*b2-b3+a2*c-2*a*b*c+b2*c-a*c2+b*c2-c3);
   let v2 = b*(a+b-c)*(-a+b+c)*(a2+b2-c2)*(-a2+b2+c2)*(-a3-a2*b+a*b2+b3+a2*c-2*a*b*c+b2*c+a*c2-b*c2-c3);
   let v3 = c*(a-b+c)*(-a+b+c)*(a2-b2+c2)*(-a2+b2+c2)*(-a3+a2*b+a*b2-b3-a2*c-2*a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X209(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a2*(b+c)*(a2*b-b3+a2*c+a*b*c-c3);
   let v2 = b2*(a+c)*(-a3+a*b2+a*b*c+b2*c-c3);
   let v3 = (a+b)*c2*(-a3-b3+a*b*c+a*c2+b*c2);
   return [v1,v2,v3];
}

function bary_X210(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-b-c)*(b+c);
   let v2 = b*(-a+b-c)*(a+c);
   let v3 = (a+b)*c*(-a-b+c);
   return [v1,v2,v3];
}

function bary_X211(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(b2+c2)*(a2*b2-b4+a2*c2+b2*c2-c4);
   let v2 = b4*(a2+c2)*(-a4+a2*b2+a2*c2+b2*c2-c4);
   let v3 = (a2+b2)*(-a4+a2*b2-b4+a2*c2+b2*c2)*c4;
   return [v1,v2,v3];
}

function bary_X212(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(a-b-c)*(a2-b2-c2);
   let v2 = b3*(-a+b-c)*(-a2+b2-c2);
   let v3 = (-a-b+c)*(-a2-b2+c2)*c3;
   return [v1,v2,v3];
}

function bary_X213(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b+c);
   let v2 = b3*(a+c);
   let v3 = (a+b)*c3;
   return [v1,v2,v3];
}

function bary_X214(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(2*a-b-c)*(a2-b2+b*c-c2);
   let v2 = b*(-a+2*b-c)*(-a2+b2+a*c-c2);
   let v3 = c*(-a-b+2*c)*(-a2+a*b-b2+c2);
   return [v1,v2,v3];
}

function bary_X215(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(a-b-c)*(a2-b2+b*c-c2)*(a2-b2+b*c-c2);
   let v2 = b4*(-a+b-c)*(-a2+b2+a*c-c2)*(-a2+b2+a*c-c2);
   let v3 = (-a-b+c)*(-a2+a*b-b2+c2)*(-a2+a*b-b2+c2)*c4;
   return [v1,v2,v3];
}

function bary_X216(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(a2-b2-c2)*(a2*b2-b4+a2*c2+2*b2*c2-c4);
   let v2 = b2*(-a2+b2-c2)*(-a4+a2*b2+2*a2*c2+b2*c2-c4);
   let v3 = c2*(-a2-b2+c2)*(-a4+2*a2*b2-b4+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X217(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(a2-b2-c2)*(a2*b2-b4+a2*c2+2*b2*c2-c4);
   let v2 = b4*(-a2+b2-c2)*(-a4+a2*b2+2*a2*c2+b2*c2-c4);
   let v3 = (-a2-b2+c2)*(-a4+2*a2*b2-b4+a2*c2+b2*c2)*c4;
   return [v1,v2,v3];
}

function bary_X218(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-2*a*b+b2-2*a*c+c2);
   let v2 = b2*(a2-2*a*b+b2-2*b*c+c2);
   let v3 = c2*(a2+b2-2*a*c-2*b*c+c2);
   return [v1,v2,v3];
}

function bary_X219(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b-c)*(a2-b2-c2);
   let v2 = b2*(-a+b-c)*(-a2+b2-c2);
   let v3 = (-a-b+c)*c2*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X220(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b-c)*(a-b-c);
   let v2 = b2*(-a+b-c)*(-a+b-c);
   let v3 = (-a-b+c)*(-a-b+c)*c2;
   return [v1,v2,v3];
}

function bary_X221(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2*(a+b-c)*(a-b+c)*(a3+a2*b-a*b2-b3+a2*c-2*a*b*c+b2*c-a*c2+b*c2-c3);
   let v2 = b2*(a+b-c)*(-a+b+c)*(-a3-a2*b+a*b2+b3+a2*c-2*a*b*c+b2*c+a*c2-b*c2-c3);
   let v3 = (a-b+c)*(-a+b+c)*c2*(-a3+a2*b+a*b2-b3-a2*c-2*a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X222(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a+b-c)*(a-b+c)*(a2-b2-c2);
   let v2 = b2*(a+b-c)*(-a+b+c)*(-a2+b2-c2);
   let v3 = (a-b+c)*(-a+b+c)*c2*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X223(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c)*(a3+a2*b-a*b2-b3+a2*c-2*a*b*c+b2*c-a*c2+b*c2-c3);
   let v2 = b*(a+b-c)*(-a+b+c)*(-a3-a2*b+a*b2+b3+a2*c-2*a*b*c+b2*c+a*c2-b*c2-c3);
   let v3 = c*(a-b+c)*(-a+b+c)*(-a3+a2*b+a*b2-b3-a2*c-2*a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X224(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(a2-b2-c2)*(a4-2*a3*b+2*a*b3-b4-2*a3*c-2*a2*b*c+2*b2*c2+2*a*c3-c4);
   let v2 = b*(-a2+b2-c2)*(-a4+2*a3*b-2*a*b3+b4-2*a*b2*c-2*b3*c+2*a2*c2+2*b*c3-c4);
   let v3 = c*(-a2-b2+c2)*(-a4+2*a2*b2-b4+2*a3*c+2*b3*c-2*a*b*c2-2*a*c3-2*b*c3+c4);
   return [v1,v2,v3];
}

function bary_X225(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(b+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = (a+b-c)*(a+c)*(-a+b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = (a+b)*(a-b+c)*(-a+b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X226(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(b+c);
   let v2 = (a+b-c)*(a+c)*(-a+b+c);
   let v3 = (a+b)*(a-b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X227(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c)*(b+c)*(a3+a2*b-a*b2-b3+a2*c-2*a*b*c+b2*c-a*c2+b*c2-c3);
   let v2 = b*(a+b-c)*(a+c)*(-a+b+c)*(-a3-a2*b+a*b2+b3+a2*c-2*a*b*c+b2*c+a*c2-b*c2-c3);
   let v3 = (a+b)*c*(a-b+c)*(-a+b+c)*(-a3+a2*b+a*b2-b3-a2*c-2*a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X228(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b+c)*(a2-b2-c2);
   let v2 = b3*(a+c)*(-a2+b2-c2);
   let v3 = (a+b)*(-a2-b2+c2)*c3;
   return [v1,v2,v3];
}

function bary_X229(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(a+b)*(a+c)*(a4-b4+a2*b*c+a*b2*c+a*b*c2+2*b2*c2-c4);
   let v2 = b*(a+b)*(b+c)*(-a4+b4+a2*b*c+a*b2*c+2*a2*c2+a*b*c2-c4);
   let v3 = c*(a+c)*(b+c)*(-a4+2*a2*b2-b4+a2*b*c+a*b2*c+a*b*c2+c4);
   return [v1,v2,v3];
}

function bary_X230(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = 2*a4-a2*b2+b4-a2*c2-2*b2*c2+c4;
   let v2 = a4-a2*b2+2*b4-2*a2*c2-b2*c2+c4;
   let v3 = a4-2*a2*b2+b4-a2*c2-b2*c2+2*c4;
   return [v1,v2,v3];
}

function bary_X231(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = 2*a8-4*a6*b2+3*a4*b4-2*a2*b6+b8-4*a6*c2+2*a2*b4*c2-4*b6*c2+3*a4*c4+2*a2*b2*c4+6*b4*c4-2*a2*c6-4*b2*c6+c8;
   let v2 = a8-2*a6*b2+3*a4*b4-4*a2*b6+2*b8-4*a6*c2+2*a4*b2*c2-4*b6*c2+6*a4*c4+2*a2*b2*c4+3*b4*c4-4*a2*c6-2*b2*c6+c8;
   let v3 = a8-4*a6*b2+6*a4*b4-4*a2*b6+b8-2*a6*c2+2*a4*b2*c2+2*a2*b4*c2-2*b6*c2+3*a4*c4+3*b4*c4-4*a2*c6-4*b2*c6+2*c8;
   return [v1,v2,v3];
}

function bary_X232(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(a2+b2-c2)*(a2-b2+c2)*(a2*b2-b4+a2*c2-c4);
   let v2 = b2*(a2+b2-c2)*(-a2+b2+c2)*(-a4+a2*b2+b2*c2-c4);
   let v3 = c2*(a2-b2+c2)*(-a2+b2+c2)*(-a4-b4+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X233(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = (a2*b2-b4+a2*c2+2*b2*c2-c4)*(2*a4-3*a2*b2+b4-3*a2*c2-2*b2*c2+c4);
   let v2 = (-a4+a2*b2+2*a2*c2+b2*c2-c4)*(a4-3*a2*b2+2*b4-2*a2*c2-3*b2*c2+c4);
   let v3 = (-a4+2*a2*b2-b4+a2*c2+b2*c2)*(a4-2*a2*b2+b4-3*a2*c2-3*b2*c2+2*c4);
   return [v1,v2,v3];
}

function bary_X234(orbit, [a,b,c]) {
   /* begin vars */
   let s=(a+b+c)/2;
   let sa=(b+c-a)/2;
   let Sqrt=Math.sqrt;
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let s2=s*s;
   /* end vars */
   let v1 = s2*sb*sc*(Sqrt((s*sb)/(a*c))+Sqrt((s*sc)/(a*b)));
   let v2 = s2*sa*sc*(Sqrt((s*sa)/(b*c))+Sqrt((s*sc)/(a*b)));
   let v3 = s2*sa*sb*(Sqrt((s*sa)/(b*c))+Sqrt((s*sb)/(a*c)));
   return [v1,v2,v3];
}

function bary_X235(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let a4=a2*a2;
   let c2=c*c;
   let c4=c2*c2;
   let b2=b*b;
   let b4=b2*b2;
   let a6=a2*a4;
   let c6=c2*c4;
   let b6=b2*b4;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2+c2)*(a4*b2-2*a2*b4+b6+a4*c2+4*a2*b2*c2-b4*c2-2*a2*c4-b2*c4+c6);
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*(a6-2*a4*b2+a2*b4-a4*c2+4*a2*b2*c2+b4*c2-a2*c4-2*b2*c4+c6);
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(a6-a4*b2-a2*b4+b6-2*a4*c2+4*a2*b2*c2-2*b4*c2+a2*c4+b2*c4);
   return [v1,v2,v3];
}

function bary_X236(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = Sqrt((s*sa)/(b*c))*(Sqrt((s*sa)/(b*c))-Sqrt((s*sb)/(a*c))-Sqrt((s*sc)/(a*b)));
   let v2 = Sqrt((s*sb)/(a*c))*(-Sqrt((s*sa)/(b*c))+Sqrt((s*sb)/(a*c))-Sqrt((s*sc)/(a*b)));
   let v3 = Sqrt((s*sc)/(a*b))*(-Sqrt((s*sa)/(b*c))-Sqrt((s*sb)/(a*c))+Sqrt((s*sc)/(a*b)));
   return [v1,v2,v3];
}

function bary_X237(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(a2*b2-b4+a2*c2-c4);
   let v2 = b4*(-a4+a2*b2+b2*c2-c4);
   let v3 = (-a4-b4+a2*c2+b2*c2)*c4;
   return [v1,v2,v3];
}

function bary_X238(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2-b*c);
   let v2 = b*(b2-a*c);
   let v3 = c*(-(a*b)+c2);
   return [v1,v2,v3];
}

function bary_X239(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2-b*c;
   let v2 = b2-a*c;
   let v3 = -(a*b)+c2;
   return [v1,v2,v3];
}

function bary_X240(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a*(a2+b2-c2)*(a2-b2+c2)*(a2*b2-b4+a2*c2-c4);
   let v2 = b*(a2+b2-c2)*(-a2+b2+c2)*(-a4+a2*b2+b2*c2-c4);
   let v3 = c*(a2-b2+c2)*(-a2+b2+c2)*(-a4-b4+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X241(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c)*(a*b-b2+a*c-c2);
   let v2 = b*(a+b-c)*(-a+b+c)*(-a2+a*b+b*c-c2);
   let v3 = c*(a-b+c)*(-a+b+c)*(-a2-b2+a*c+b*c);
   return [v1,v2,v3];
}

function bary_X242(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2-b*c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = (b2-a*c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = (-(a*b)+c2)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X243(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let a3=a2*a;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a-b-c)*(a2+b2-c2)*(a2-b2+c2)*(a4-a2*b2+a2*b*c-b3*c-a2*c2+2*b2*c2-b*c3);
   let v2 = (-a+b-c)*(a2+b2-c2)*(-a2+b2+c2)*(-(a2*b2)+b4-a3*c+a*b2*c+2*a2*c2-b2*c2-a*c3);
   let v3 = (-a-b+c)*(a2-b2+c2)*(-a2+b2+c2)*(-(a3*b)+2*a2*b2-a*b3-a2*c2+a*b*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X244(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b-c)*(b-c);
   let v2 = b*(-a+c)*(-a+c);
   let v3 = (a-b)*(a-b)*c;
   return [v1,v2,v3];
}

function bary_X245(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let a4=a2*a2;
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let c3=c2*c;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let b3=b2*b;
   let a3=a2*a;
   let a6=a2*a4;
   let c7=c*c6;
   let c5=c2*c3;
   let b7=b*b6;
   let b5=b2*b3;
   let a5=a2*a3;
   let a7=a*a6;
   /* end vars */
   let v1 = a*(b-c)*(b-c)*(b+c)*(a7-2*a5*b2+a4*b3+a3*b4-2*a2*b5+b7-a5*b*c+a4*b2*c+a3*b3*c-2*a2*b4*c+b6*c-2*a5*c2+a4*b*c2+3*a3*b2*c2-a*b4*c2+a4*c3+a3*b*c3-a*b3*c3+a3*c4-2*a2*b*c4-a*b2*c4-2*a2*c5+b*c6+c7);
   let v2 = b*(-a+c)*(-a+c)*(a+c)*(a7-2*a5*b2+a4*b3+a3*b4-2*a2*b5+b7+a6*c-2*a4*b2*c+a3*b3*c+a2*b4*c-a*b5*c-a4*b*c2+3*a2*b3*c2+a*b4*c2-2*b5*c2-a3*b*c3+a*b3*c3+b4*c3-a2*b*c4-2*a*b2*c4+b3*c4-2*b2*c5+a*c6+c7);
   let v3 = (a-b)*(a-b)*(a+b)*c*(a7+a6*b+a*b6+b7-a4*b2*c-a3*b3*c-a2*b4*c-2*a5*c2-2*a4*b*c2-2*a*b4*c2-2*b5*c2+a4*c3+a3*b*c3+3*a2*b2*c3+a*b3*c3+b4*c3+a3*c4+a2*b*c4+a*b2*c4+b3*c4-2*a2*c5-a*b*c5-2*b2*c5+c7);
   return [v1,v2,v3];
}

function bary_X246(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(b-c)*(b-c)*(b+c)*(b+c)*(a8-4*a6*b2+6*a4*b4-4*a2*b6+b8-4*a6*c2+7*a4*b2*c2-5*a2*b4*c2+2*b6*c2+6*a4*c4-5*a2*b2*c4-4*a2*c6+2*b2*c6+c8);
   let v2 = b2*(-a+c)*(-a+c)*(a+c)*(a+c)*(a8-4*a6*b2+6*a4*b4-4*a2*b6+b8+2*a6*c2-5*a4*b2*c2+7*a2*b4*c2-4*b6*c2-5*a2*b2*c4+6*b4*c4+2*a2*c6-4*b2*c6+c8);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*c2*(a8+2*a6*b2+2*a2*b6+b8-4*a6*c2-5*a4*b2*c2-5*a2*b4*c2-4*b6*c2+6*a4*c4+7*a2*b2*c4+6*b4*c4-4*a2*c6-4*b2*c6+c8);
   return [v1,v2,v3];
}

function bary_X247(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = (b-c)*(b-c)*(b+c)*(b+c)*(Math.pow(a,10)+Math.pow(b,10)-4*a8*b2+5*a6*b4-a4*b6-2*a2*b8+Math.pow(c,10)-4*a8*c2+7*a6*b2*c2-6*a4*b4*c2+5*a2*b6*c2-2*b8*c2+5*a6*c4-6*a4*b2*c4-2*a2*b4*c4+b6*c4-a4*c6+5*a2*b2*c6+b4*c6-2*a2*c8-2*b2*c8);
   let v2 = (-a+c)*(-a+c)*(a+c)*(a+c)*(Math.pow(a,10)+Math.pow(b,10)-2*a8*b2-a6*b4+5*a4*b6-4*a2*b8+Math.pow(c,10)-2*a8*c2+5*a6*b2*c2-6*a4*b4*c2+7*a2*b6*c2-4*b8*c2+a6*c4-2*a4*b2*c4-6*a2*b4*c4+5*b6*c4+a4*c6+5*a2*b2*c6-b4*c6-2*a2*c8-2*b2*c8);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b)*(Math.pow(a,10)+Math.pow(b,10)-2*a8*b2+a6*b4+a4*b6-2*a2*b8+Math.pow(c,10)-2*a8*c2+5*a6*b2*c2-2*a4*b4*c2+5*a2*b6*c2-2*b8*c2-a6*c4-6*a4*b2*c4-6*a2*b4*c4-b6*c4+5*a4*c6+7*a2*b2*c6+5*b4*c6-4*a2*c8-4*b2*c8);
   return [v1,v2,v3];
}

function bary_X248(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a2-b2-c2)*(a4+b4-a2*c2-b2*c2)*(a4-a2*b2-b2*c2+c4);
   let v2 = b2*(-a2+b2-c2)*(a4+b4-a2*c2-b2*c2)*(-(a2*b2)+b4-a2*c2+c4);
   let v3 = c2*(-a2-b2+c2)*(-(a2*b2)+b4-a2*c2+c4)*(a4-a2*b2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X249(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b)*(a-b)*(a+b)*(a+b)*(a-c)*(a-c)*(a+c)*(a+c);
   let v2 = (-a+b)*(-a+b)*(a+b)*(a+b)*b2*(b-c)*(b-c)*(b+c)*(b+c);
   let v3 = (-a+c)*(-a+c)*(a+c)*(a+c)*(-b+c)*(-b+c)*(b+c)*(b+c)*c2;
   return [v1,v2,v3];
}

function bary_X250(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b)*(a-b)*(a+b)*(a+b)*(a-c)*(a-c)*(a+c)*(a+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = (-a+b)*(-a+b)*(a+b)*(a+b)*b2*(b-c)*(b-c)*(b+c)*(b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = (-a+c)*(-a+c)*(a+c)*(a+c)*(-b+c)*(-b+c)*(b+c)*(b+c)*c2*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X251(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2+b2)*(a2+c2);
   let v2 = b2*(a2+b2)*(b2+c2);
   let v3 = c2*(a2+c2)*(b2+c2);
   return [v1,v2,v3];
}

function bary_X252(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4-a2*b2+b4-2*a2*c2-2*b2*c2+c4)*(a4-2*a2*b2+b4-a2*c2-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   let v2 = (a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4-a2*b2+b4-2*a2*c2-2*b2*c2+c4)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(a4-2*a2*b2+b4-2*a2*c2-b2*c2+c4);
   let v3 = (a4-2*a2*b2+b4-a2*c2-2*b2*c2+c4)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4)*(a4-2*a2*b2+b4-2*a2*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X253(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4-2*a2*b2+b4+2*a2*c2+2*b2*c2-3*c4)*(a4+2*a2*b2-3*b4-2*a2*c2+2*b2*c2+c4);
   let v2 = (a4-2*a2*b2+b4+2*a2*c2+2*b2*c2-3*c4)*(-3*a4+2*a2*b2+b4+2*a2*c2-2*b2*c2+c4);
   let v3 = (-3*a4+2*a2*b2+b4+2*a2*c2-2*b2*c2+c4)*(a4+2*a2*b2-3*b4-2*a2*c2+2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X254(orbit, [a,b,c]) {
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
   let v1 = (a2+b2-c2)*(a2-b2+c2)*(a6-a4*b2-a2*b4+b6-3*a4*c2+2*a2*b2*c2-3*b4*c2+3*a2*c4+3*b2*c4-c6)*(a6-3*a4*b2+3*a2*b4-b6-a4*c2+2*a2*b2*c2+3*b4*c2-a2*c4-3*b2*c4+c6);
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*(a6-a4*b2-a2*b4+b6-3*a4*c2+2*a2*b2*c2-3*b4*c2+3*a2*c4+3*b2*c4-c6)*(-a6+3*a4*b2-3*a2*b4+b6+3*a4*c2+2*a2*b2*c2-b4*c2-3*a2*c4-b2*c4+c6);
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(a6-3*a4*b2+3*a2*b4-b6-a4*c2+2*a2*b2*c2+3*b4*c2-a2*c4-3*b2*c4+c6)*(-a6+3*a4*b2-3*a2*b4+b6+3*a4*c2+2*a2*b2*c2-b4*c2-3*a2*c4-b2*c4+c6);
   return [v1,v2,v3];
}

function bary_X255(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(a2-b2-c2)*(a2-b2-c2);
   let v2 = b3*(-a2+b2-c2)*(-a2+b2-c2);
   let v3 = (-a2-b2+c2)*(-a2-b2+c2)*c3;
   return [v1,v2,v3];
}

function bary_X256(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(b2+a*c)*(a*b+c2);
   let v2 = b*(a2+b*c)*(a*b+c2);
   let v3 = c*(b2+a*c)*(a2+b*c);
   return [v1,v2,v3];
}

function bary_X257(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b2+a*c)*(a*b+c2);
   let v2 = (a2+b*c)*(a*b+c2);
   let v3 = (b2+a*c)*(a2+b*c);
   return [v1,v2,v3];
}

function bary_X258(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a/(Sqrt((s*sa)/(b*c))-Sqrt((s*sb)/(a*c))-Sqrt((s*sc)/(a*b)));
   let v2 = b/(-Sqrt((s*sa)/(b*c))+Sqrt((s*sb)/(a*c))-Sqrt((s*sc)/(a*b)));
   let v3 = c/(-Sqrt((s*sa)/(b*c))-Sqrt((s*sb)/(a*c))+Sqrt((s*sc)/(a*b)));
   return [v1,v2,v3];
}

function bary_X259(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let sa=(b+c-a)/2;
   let b2=b*b;
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let Sqrt=Math.sqrt;
   let a2=a*a;
   /* end vars */
   let v1 = a2*Sqrt((b*c)/(sb*sc));
   let v2 = b2*Sqrt((a*c)/(sa*sc));
   let v3 = c2*Sqrt((a*b)/(sa*sb));
   return [v1,v2,v3];
}

function bary_X260(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let sa=(b+c-a)/2;
   let b2=b*b;
   let s=(a+b+c)/2;
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let Sqrt=Math.sqrt;
   let a2=a*a;
   /* end vars */
   let v1 = (a2*Sqrt((b*c)/(sb*sc)))/(Sqrt((s*sb)/(a*c))+Sqrt((s*sc)/(a*b)));
   let v2 = (b2*Sqrt((a*c)/(sa*sc)))/(Sqrt((s*sa)/(b*c))+Sqrt((s*sc)/(a*b)));
   let v3 = (c2*Sqrt((a*b)/(sa*sb)))/(Sqrt((s*sa)/(b*c))+Sqrt((s*sb)/(a*c)));
   return [v1,v2,v3];
}

function bary_X261(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b)*(a+b)*(a-b-c)*(a+c)*(a+c);
   let v2 = (a+b)*(a+b)*(-a+b-c)*(b+c)*(b+c);
   let v3 = (a+c)*(a+c)*(-a-b+c)*(b+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X262(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = (a2*b2-b4+2*a2*c2+b2*c2)*(2*a2*b2+a2*c2+b2*c2-c4);
   let v2 = (-a4+a2*b2+a2*c2+2*b2*c2)*(2*a2*b2+a2*c2+b2*c2-c4);
   let v3 = (a2*b2-b4+2*a2*c2+b2*c2)*(-a4+a2*b2+a2*c2+2*b2*c2);
   return [v1,v2,v3];
}

function bary_X263(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(a2*b2-b4+2*a2*c2+b2*c2)*(2*a2*b2+a2*c2+b2*c2-c4);
   let v2 = b2*(-a4+a2*b2+a2*c2+2*b2*c2)*(2*a2*b2+a2*c2+b2*c2-c4);
   let v3 = c2*(a2*b2-b4+2*a2*c2+b2*c2)*(-a4+a2*b2+a2*c2+2*b2*c2);
   return [v1,v2,v3];
}

function bary_X264(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   /* end vars */
   let v1 = b2*(-a2+b2-c2)*(a2+b2-c2)*c2;
   let v2 = a2*c2*(-a2-b2+c2)*(-a2+b2+c2);
   let v3 = a2*b2*(a2-b2-c2)*(a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X265(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2-b2-c2)*(a2-a*b+b2-c2)*(a2+a*b+b2-c2)*(a2-b2-a*c+c2)*(a2-b2+a*c+c2);
   let v2 = (-a2+b2-c2)*(a2-a*b+b2-c2)*(a2+a*b+b2-c2)*(-a2+b2-b*c+c2)*(-a2+b2+b*c+c2);
   let v3 = (-a2-b2+c2)*(a2-b2-a*c+c2)*(a2-b2+a*c+c2)*(-a2+b2-b*c+c2)*(-a2+b2+b*c+c2);
   return [v1,v2,v3];
}

function bary_X266(orbit, [a,b,c]) {
   /* begin vars */
   let sa=(b+c-a)/2;
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*Sqrt((sb*sc)/(b*c));
   let v2 = b*Sqrt((sa*sc)/(a*c));
   let v3 = c*Sqrt((sa*sb)/(a*b));
   return [v1,v2,v3];
}

function bary_X267(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3+a2*b+a*b2+b3+a2*c+a*b*c+b2*c-a*c2-b*c2-c3)*(a3+a2*b-a*b2-b3+a2*c+a*b*c-b2*c+a*c2+b*c2+c3);
   let v2 = b*(a3+a2*b+a*b2+b3+a2*c+a*b*c+b2*c-a*c2-b*c2-c3)*(-a3-a2*b+a*b2+b3-a2*c+a*b*c+b2*c+a*c2+b*c2+c3);
   let v3 = c*(a3+a2*b-a*b2-b3+a2*c+a*b*c-b2*c+a*c2+b*c2+c3)*(-a3-a2*b+a*b2+b3-a2*c+a*b*c+b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X268(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2*(a-b-c)*(a2-b2-c2)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   let v2 = b2*(-a+b-c)*(-a2+b2-c2)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3);
   let v3 = (-a-b+c)*c2*(-a2-b2+c2)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X269(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b-c)*(a+b-c)*(a-b+c)*(a-b+c);
   let v2 = b*(a+b-c)*(a+b-c)*(-a+b+c)*(-a+b+c);
   let v3 = c*(a-b+c)*(a-b+c)*(-a+b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X270(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a+b)*(a+b)*(a-b-c)*(a+c)*(a+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = b*(a+b)*(a+b)*(-a+b-c)*(b+c)*(b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = c*(a+c)*(a+c)*(-a-b+c)*(b+c)*(b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X271(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a-b-c)*(a2-b2-c2)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   let v2 = b*(-a+b-c)*(-a2+b2-c2)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3);
   let v3 = c*(-a-b+c)*(-a2-b2+c2)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X272(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a+b)*(a+c)*(a3+b3-a*b*c-a*c2-b*c2)*(a3-a*b2-a*b*c-b2*c+c3);
   let v2 = (a+b)*(b+c)*(a3+b3-a*b*c-a*c2-b*c2)*(-(a2*b)+b3-a2*c-a*b*c+c3);
   let v3 = (a+c)*(b+c)*(-(a2*b)+b3-a2*c-a*b*c+c3)*(a3-a*b2-a*b*c-b2*c+c3);
   return [v1,v2,v3];
}

function bary_X273(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = b*(-a+b-c)*(a+b-c)*c*(-a2+b2-c2)*(a2+b2-c2);
   let v2 = a*c*(-a-b+c)*(-a+b+c)*(-a2-b2+c2)*(-a2+b2+c2);
   let v3 = a*b*(a-b-c)*(a-b+c)*(a2-b2-c2)*(a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X274(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*(a+b)*c*(a+c);
   let v2 = a*(a+b)*c*(b+c);
   let v3 = a*b*(a+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X275(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2+c2)*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4);
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X276(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = b2*(-a2+b2-c2)*(a2+b2-c2)*c2*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(-a4+a2*b2+2*a2*c2+b2*c2-c4);
   let v2 = a2*c2*(-a2-b2+c2)*(-a2+b2+c2)*(-a4+2*a2*b2-b4+a2*c2+b2*c2)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4);
   let v3 = a2*b2*(a2-b2-c2)*(a2-b2+c2)*(a2*b2-b4+a2*c2+2*b2*c2-c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X277(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2-2*a*b+b2-2*b*c+c2)*(a2+b2-2*a*c-2*b*c+c2);
   let v2 = (a2-2*a*b+b2-2*a*c+c2)*(a2+b2-2*a*c-2*b*c+c2);
   let v3 = (a2-2*a*b+b2-2*a*c+c2)*(a2-2*a*b+b2-2*b*c+c2);
   return [v1,v2,v3];
}

function bary_X278(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = (a+b-c)*(-a+b+c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = (a-b+c)*(-a+b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X279(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b-c)*(a+b-c)*(a-b+c)*(a-b+c);
   let v2 = (a+b-c)*(a+b-c)*(-a+b+c)*(-a+b+c);
   let v3 = (a-b+c)*(a-b+c)*(-a+b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X280(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a-b-c)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   let v2 = (-a+b-c)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3);
   let v3 = (-a-b+c)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X281(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a-b-c)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = (-a+b-c)*(a2+b2-c2)*(-a2+b2+c2);
   let v3 = (-a-b+c)*(a2-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X282(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a-b-c)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   let v2 = b*(-a+b-c)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3);
   let v3 = c*(-a-b+c)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X283(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a+b)*(a-b-c)*(a+c)*(a2-b2-c2);
   let v2 = (a+b)*b2*(-a+b-c)*(b+c)*(-a2+b2-c2);
   let v3 = (a+c)*(-a-b+c)*(b+c)*c2*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X284(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a+b)*(a-b-c)*(a+c);
   let v2 = (a+b)*b2*(-a+b-c)*(b+c);
   let v3 = (a+c)*(-a-b+c)*(b+c)*c2;
   return [v1,v2,v3];
}

function bary_X285(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a+b)*(a-b-c)*(a+c)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   let v2 = b*(a+b)*(-a+b-c)*(b+c)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3);
   let v3 = c*(a+c)*(-a-b+c)*(b+c)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X286(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = b*(a+b)*c*(a+c)*(-a2+b2-c2)*(a2+b2-c2);
   let v2 = a*(a+b)*c*(b+c)*(-a2-b2+c2)*(-a2+b2+c2);
   let v3 = a*b*(a+c)*(b+c)*(a2-b2-c2)*(a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X287(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a2-b2-c2)*(a4+b4-a2*c2-b2*c2)*(a4-a2*b2-b2*c2+c4);
   let v2 = (-a2+b2-c2)*(a4+b4-a2*c2-b2*c2)*(-(a2*b2)+b4-a2*c2+c4);
   let v3 = (-a2-b2+c2)*(-(a2*b2)+b4-a2*c2+c4)*(a4-a2*b2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X288(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(a4-3*a2*b2+2*b4-2*a2*c2-3*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4)*(a4-2*a2*b2+b4-3*a2*c2-3*b2*c2+2*c4);
   let v2 = b2*(a4-2*a2*b2+b4-a2*c2-b2*c2)*(2*a4-3*a2*b2+b4-3*a2*c2-2*b2*c2+c4)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(a4-2*a2*b2+b4-3*a2*c2-3*b2*c2+2*c4);
   let v3 = c2*(a4-3*a2*b2+2*b4-2*a2*c2-3*b2*c2+c4)*(2*a4-3*a2*b2+b4-3*a2*c2-2*b2*c2+c4)*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X289(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   let a2=a*a;
   /* end vars */
   let v1 = a2/(Sqrt((s*sa)/(b*c))*(Sqrt((s*sa)/(b*c))-Sqrt((s*sb)/(a*c))-Sqrt((s*sc)/(a*b))));
   let v2 = b2/(Sqrt((s*sb)/(a*c))*(-Sqrt((s*sa)/(b*c))+Sqrt((s*sb)/(a*c))-Sqrt((s*sc)/(a*b))));
   let v3 = c2/(Sqrt((s*sc)/(a*b))*(-Sqrt((s*sa)/(b*c))-Sqrt((s*sb)/(a*c))+Sqrt((s*sc)/(a*b))));
   return [v1,v2,v3];
}

function bary_X290(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = b2*c2*(a4+b4-a2*c2-b2*c2)*(-a4+a2*b2+b2*c2-c4);
   let v2 = a2*c2*(-a4-b4+a2*c2+b2*c2)*(-(a2*b2)+b4-a2*c2+c4);
   let v3 = a2*b2*(a2*b2-b4+a2*c2-c4)*(a4-a2*b2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X291(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(-b2+a*c)*(a*b-c2);
   let v2 = b*(-a2+b*c)*(a*b-c2);
   let v3 = c*(-b2+a*c)*(-a2+b*c);
   return [v1,v2,v3];
}

function bary_X292(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(-b2+a*c)*(a*b-c2);
   let v2 = b2*(-a2+b*c)*(a*b-c2);
   let v3 = (-b2+a*c)*(-a2+b*c)*c2;
   return [v1,v2,v3];
}

function bary_X293(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(a2-b2-c2)*(a4+b4-a2*c2-b2*c2)*(a4-a2*b2-b2*c2+c4);
   let v2 = b*(-a2+b2-c2)*(a4+b4-a2*c2-b2*c2)*(-(a2*b2)+b4-a2*c2+c4);
   let v3 = c*(-a2-b2+c2)*(-(a2*b2)+b4-a2*c2+c4)*(a4-a2*b2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X294(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a-b-c)*(a2+b2-a*c-b*c)*(a2-a*b-b*c+c2);
   let v2 = b*(-a+b-c)*(a2+b2-a*c-b*c)*(-(a*b)+b2-a*c+c2);
   let v3 = c*(-a-b+c)*(-(a*b)+b2-a*c+c2)*(a2-a*b-b*c+c2);
   return [v1,v2,v3];
}

function bary_X295(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(-b2+a*c)*(a*b-c2)*(a2-b2-c2);
   let v2 = b2*(-a2+b*c)*(a*b-c2)*(-a2+b2-c2);
   let v3 = (-b2+a*c)*(-a2+b*c)*c2*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X296(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b3=b2*b;
   let c3=c2*c;
   let a3=a2*a;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(a+b-c)*(a-b+c)*(a2-b2-c2)*(a2*b2-b4+a3*c-a*b2*c-2*a2*c2+b2*c2+a*c3)*(a3*b-2*a2*b2+a*b3+a2*c2-a*b*c2+b2*c2-c4);
   let v2 = b2*(a+b-c)*(-a+b+c)*(-a2+b2-c2)*(-a4+a2*b2-a2*b*c+b3*c+a2*c2-2*b2*c2+b*c3)*(a3*b-2*a2*b2+a*b3+a2*c2-a*b*c2+b2*c2-c4);
   let v3 = (a-b+c)*(-a+b+c)*c2*(-a2-b2+c2)*(a2*b2-b4+a3*c-a*b2*c-2*a2*c2+b2*c2+a*c3)*(-a4+a2*b2-a2*b*c+b3*c+a2*c2-2*b2*c2+b*c3);
   return [v1,v2,v3];
}

function bary_X297(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2+c2)*(a2*b2-b4+a2*c2-c4);
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*(-a4+a2*b2+b2*c2-c4);
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(-a4-b4+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X298(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let S=2*area;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (2*a4-a2*b2-b4-4*a2*c2-b2*c2+2*c4-2*b2*S*sqrt3)*(2*a4-4*a2*b2+2*b4-a2*c2-b2*c2-c4-2*c2*S*sqrt3);
   let v2 = (-a4-a2*b2+2*b4-a2*c2-4*b2*c2+2*c4-2*a2*S*sqrt3)*(2*a4-4*a2*b2+2*b4-a2*c2-b2*c2-c4-2*c2*S*sqrt3);
   let v3 = (-a4-a2*b2+2*b4-a2*c2-4*b2*c2+2*c4-2*a2*S*sqrt3)*(2*a4-a2*b2-b4-4*a2*c2-b2*c2+2*c4-2*b2*S*sqrt3);
   return [v1,v2,v3];
}

function bary_X299(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let S=2*area;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (2*a4-a2*b2-b4-4*a2*c2-b2*c2+2*c4+2*b2*S*sqrt3)*(2*a4-4*a2*b2+2*b4-a2*c2-b2*c2-c4+2*c2*S*sqrt3);
   let v2 = (-a4-a2*b2+2*b4-a2*c2-4*b2*c2+2*c4+2*a2*S*sqrt3)*(2*a4-4*a2*b2+2*b4-a2*c2-b2*c2-c4+2*c2*S*sqrt3);
   let v3 = (-a4-a2*b2+2*b4-a2*c2-4*b2*c2+2*c4+2*a2*S*sqrt3)*(2*a4-a2*b2-b4-4*a2*c2-b2*c2+2*c4+2*b2*S*sqrt3);
   return [v1,v2,v3];
}

function bary_X300(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let a2=a*a;
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2*c2*(-2*S+(-a2+b2-c2)*sqrt3)*(-2*S+(-a2-b2+c2)*sqrt3);
   let v2 = a2*c2*(-2*S+(a2-b2-c2)*sqrt3)*(-2*S+(-a2-b2+c2)*sqrt3);
   let v3 = a2*b2*(-2*S+(a2-b2-c2)*sqrt3)*(-2*S+(-a2+b2-c2)*sqrt3);
   return [v1,v2,v3];
}

function bary_X301(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let a2=a*a;
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2*c2*(2*S+(-a2+b2-c2)*sqrt3)*(2*S+(-a2-b2+c2)*sqrt3);
   let v2 = a2*c2*(2*S+(a2-b2-c2)*sqrt3)*(2*S+(-a2-b2+c2)*sqrt3);
   let v3 = a2*b2*(2*S+(a2-b2-c2)*sqrt3)*(2*S+(-a2+b2-c2)*sqrt3);
   return [v1,v2,v3];
}

function bary_X302(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = -a2+b2+c2+2*S*sqrt3;
   let v2 = a2-b2+c2+2*S*sqrt3;
   let v3 = a2+b2-c2+2*S*sqrt3;
   return [v1,v2,v3];
}

function bary_X303(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = -a2+b2+c2-2*S*sqrt3;
   let v2 = a2-b2+c2-2*S*sqrt3;
   let v3 = a2+b2-c2-2*S*sqrt3;
   return [v1,v2,v3];
}

function bary_X304(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = b*c*(-a2+b2+c2);
   let v2 = a*c*(a2-b2+c2);
   let v3 = a*b*(a2+b2-c2);
   return [v1,v2,v3];
}

function bary_X305(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2*c2*(-a2+b2+c2);
   let v2 = a2*c2*(a2-b2+c2);
   let v3 = a2*b2*(a2+b2-c2);
   return [v1,v2,v3];
}

function bary_X306(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (b+c)*(-a2+b2+c2);
   let v2 = (a+c)*(a2-b2+c2);
   let v3 = (a+b)*(a2+b2-c2);
   return [v1,v2,v3];
}

function bary_X307(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(b+c)*(a2-b2-c2);
   let v2 = (a+b-c)*(a+c)*(-a+b+c)*(-a2+b2-c2);
   let v3 = (a+b)*(a-b+c)*(-a+b+c)*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X308(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   /* end vars */
   let v1 = b2*(a2+b2)*c2*(a2+c2);
   let v2 = a2*(a2+b2)*c2*(b2+c2);
   let v3 = a2*b2*(a2+c2)*(b2+c2);
   return [v1,v2,v3];
}

function bary_X309(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = b*c*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*(-a3-a2*b+a*b2+b3+a2*c-2*a*b*c+b2*c+a*c2-b*c2-c3);
   let v2 = a*c*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(-a3+a2*b+a*b2-b3-a2*c-2*a*b*c-b2*c+a*c2+b*c2+c3);
   let v3 = a*b*(a3+a2*b-a*b2-b3+a2*c-2*a*b*c+b2*c-a*c2+b*c2-c3)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X310(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (a+b)*b2*(a+c)*c2;
   let v2 = a2*(a+b)*(b+c)*c2;
   let v3 = a2*b2*(a+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X311(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = b2*c2*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4);
   let v2 = a2*c2*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   let v3 = a2*b2*(a4-2*a2*b2+b4-a2*c2-b2*c2);
   return [v1,v2,v3];
}

function bary_X312(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c*(-a+b+c);
   let v2 = a*c*(a-b+c);
   let v3 = a*b*(a+b-c);
   return [v1,v2,v3];
}

function bary_X313(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2*(b+c)*c2;
   let v2 = a2*(a+c)*c2;
   let v3 = a2*(a+b)*b2;
   return [v1,v2,v3];
}

function bary_X314(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*(a+b)*c*(a+c)*(-a+b+c);
   let v2 = a*(a+b)*c*(a-b+c)*(b+c);
   let v3 = a*b*(a+b-c)*(a+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X315(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = -a4+b4+c4;
   let v2 = a4-b4+c4;
   let v3 = a4+b4-c4;
   return [v1,v2,v3];
}

function bary_X316(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = -a4+b4-b2*c2+c4;
   let v2 = a4-b4-a2*c2+c4;
   let v3 = a4-a2*b2+b4-c4;
   return [v1,v2,v3];
}

function bary_X317(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2+c2)*(a4-2*a2*b2+b4-2*a2*c2+c4);
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*(a4-2*a2*b2+b4-2*b2*c2+c4);
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(a4+b4-2*a2*c2-2*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X318(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = b*c*(-a+b+c)*(-a2+b2-c2)*(a2+b2-c2);
   let v2 = a*c*(a-b+c)*(-a2-b2+c2)*(-a2+b2+c2);
   let v3 = a*b*(a+b-c)*(a2-b2-c2)*(a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X319(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = -a2+b2+b*c+c2;
   let v2 = a2-b2+a*c+c2;
   let v3 = a2+a*b+b2-c2;
   return [v1,v2,v3];
}

function bary_X320(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = -a2+b2-b*c+c2;
   let v2 = a2-b2-a*c+c2;
   let v3 = a2-a*b+b2-c2;
   return [v1,v2,v3];
}

function bary_X321(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c*(b+c);
   let v2 = a*c*(a+c);
   let v3 = a*b*(a+b);
   return [v1,v2,v3];
}

function bary_X322(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = b*c*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3);
   let v2 = a*c*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   let v3 = a*b*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3);
   return [v1,v2,v3];
}

function bary_X323(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-b2-b*c-c2)*(a2-b2+b*c-c2);
   let v2 = b2*(-a2+b2-a*c-c2)*(-a2+b2+a*c-c2);
   let v3 = c2*(-a2-a*b-b2+c2)*(-a2+a*b-b2+c2);
   return [v1,v2,v3];
}

function bary_X324(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = b2*(-a2+b2-c2)*(a2+b2-c2)*c2*(-(a2*b2)+b4-a2*c2-2*b2*c2+c4);
   let v2 = a2*c2*(-a2-b2+c2)*(-a2+b2+c2)*(a4-a2*b2-2*a2*c2-b2*c2+c4);
   let v3 = a2*b2*(a2-b2-c2)*(a2-b2+c2)*(a4-2*a2*b2+b4-a2*c2-b2*c2);
   return [v1,v2,v3];
}

function bary_X325(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = -(a2*b2)+b4-a2*c2+c4;
   let v2 = a4-a2*b2-b2*c2+c4;
   let v3 = a4+b4-a2*c2-b2*c2;
   return [v1,v2,v3];
}

function bary_X326(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2-b2-c2)*(a2-b2-c2);
   let v2 = b*(-a2+b2-c2)*(-a2+b2-c2);
   let v3 = c*(-a2-b2+c2)*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X327(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = b2*c2*(-(a2*b2)+b4-2*a2*c2-b2*c2)*(2*a2*b2+a2*c2+b2*c2-c4);
   let v2 = a2*c2*(-a4+a2*b2+a2*c2+2*b2*c2)*(-2*a2*b2-a2*c2-b2*c2+c4);
   let v3 = a2*b2*(a4-a2*b2-a2*c2-2*b2*c2)*(a2*b2-b4+2*a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X328(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   /* end vars */
   let v1 = b2*(a2-a*b+b2-c2)*(a2+a*b+b2-c2)*(-a2+b2-a*c-c2)*(-a2+b2+a*c-c2)*c2*(-a2+b2+c2);
   let v2 = a2*c2*(a2-b2+c2)*(-a2-a*b-b2+c2)*(-a2+a*b-b2+c2)*(-a2+b2-b*c+c2)*(-a2+b2+b*c+c2);
   let v3 = a2*b2*(a2+b2-c2)*(a2-b2-b*c-c2)*(a2-b2+b*c-c2)*(a2-b2-a*c+c2)*(a2-b2+a*c+c2);
   return [v1,v2,v3];
}

function bary_X329(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3+a2*b-a*b2-b3+a2*c-2*a*b*c+b2*c-a*c2+b*c2-c3;
   let v2 = -a3-a2*b+a*b2+b3+a2*c-2*a*b*c+b2*c+a*c2-b*c2-c3;
   let v3 = -a3+a2*b+a*b2-b3-a2*c-2*a*b*c-b2*c+a*c2+b*c2+c3;
   return [v1,v2,v3];
}

function bary_X330(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a*b-a*c-b*c)*(a*b-a*c+b*c);
   let v2 = (-(a*b)-a*c+b*c)*(-(a*b)+a*c+b*c);
   let v3 = (-(a*b)+a*c-b*c)*(a*b+a*c-b*c);
   return [v1,v2,v3];
}

function bary_X331(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   /* end vars */
   let v1 = b2*(-a+b-c)*(a+b-c)*(-a2+b2-c2)*(a2+b2-c2)*c2;
   let v2 = a2*(-a-b+c)*(-a+b+c)*c2*(-a2-b2+c2)*(-a2+b2+c2);
   let v3 = a2*b2*(a-b-c)*(a-b+c)*(a2-b2-c2)*(a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X332(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b)*(a-b-c)*(a+c)*(a2-b2-c2);
   let v2 = (a+b)*(-a+b-c)*(b+c)*(-a2+b2-c2);
   let v3 = (a+c)*(-a-b+c)*(b+c)*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X333(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b)*(a-b-c)*(a+c);
   let v2 = (a+b)*(-a+b-c)*(b+c);
   let v3 = (a+c)*(-a-b+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X334(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b*c*(b2-a*c)*(a*b-c2);
   let v2 = a*c*(-a2+b*c)*(-(a*b)+c2);
   let v3 = a*b*(-b2+a*c)*(a2-b*c);
   return [v1,v2,v3];
}

function bary_X335(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b2-a*c)*(a*b-c2);
   let v2 = (-a2+b*c)*(-(a*b)+c2);
   let v3 = (-b2+a*c)*(a2-b*c);
   return [v1,v2,v3];
}

function bary_X336(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = b*c*(-a2+b2+c2)*(a4+b4-a2*c2-b2*c2)*(-a4+a2*b2+b2*c2-c4);
   let v2 = a*c*(a2-b2+c2)*(-a4-b4+a2*c2+b2*c2)*(-(a2*b2)+b4-a2*c2+c4);
   let v3 = a*b*(a2+b2-c2)*(a2*b2-b4+a2*c2-c4)*(a4-a2*b2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X337(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b2-a*c)*(a*b-c2)*(-a2+b2+c2);
   let v2 = (-a2+b*c)*(-(a*b)+c2)*(a2-b2+c2);
   let v3 = (-b2+a*c)*(a2-b*c)*(a2+b2-c2);
   return [v1,v2,v3];
}

function bary_X338(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2*(b-c)*(b-c)*(b+c)*(b+c)*c2;
   let v2 = a2*(-a+c)*(-a+c)*(a+c)*(a+c)*c2;
   let v3 = a2*(a-b)*(a-b)*(a+b)*(a+b)*b2;
   return [v1,v2,v3];
}

function bary_X339(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2*(b-c)*(b-c)*(b+c)*(b+c)*c2*(-a2+b2+c2);
   let v2 = a2*(-a+c)*(-a+c)*(a+c)*(a+c)*c2*(a2-b2+c2);
   let v3 = a2*(a-b)*(a-b)*(a+b)*(a+b)*b2*(a2+b2-c2);
   return [v1,v2,v3];
}

function bary_X340(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2-b*c-c2)*(a2-b2+b*c-c2)*(a2-b2+c2);
   let v2 = (a2+b2-c2)*(-a2+b2-a*c-c2)*(-a2+b2+a*c-c2)*(-a2+b2+c2);
   let v3 = (a2-b2+c2)*(-a2-a*b-b2+c2)*(-a2+a*b-b2+c2)*(-a2+b2+c2);
   return [v1,v2,v3];
}

function bary_X341(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c*(-a+b+c)*(-a+b+c);
   let v2 = a*c*(a-b+c)*(a-b+c);
   let v3 = a*b*(a+b-c)*(a+b-c);
   return [v1,v2,v3];
}

function bary_X342(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = b*(-a+b-c)*(a+b-c)*c*(-a2+b2-c2)*(a2+b2-c2)*(-a3-a2*b+a*b2+b3-a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3);
   let v2 = a*c*(-a-b+c)*(-a+b+c)*(-a2-b2+c2)*(-a2+b2+c2)*(a3+a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c-a*c2+b*c2+c3);
   let v3 = a*b*(a-b-c)*(a-b+c)*(a2-b2-c2)*(a2-b2+c2)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3);
   return [v1,v2,v3];
}

function bary_X343(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = (a2-b2-c2)*(a2*b2-b4+a2*c2+2*b2*c2-c4);
   let v2 = (-a2+b2-c2)*(-a4+a2*b2+2*a2*c2+b2*c2-c4);
   let v3 = (-a2-b2+c2)*(-a4+2*a2*b2-b4+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X344(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2-2*a*b+b2-2*a*c+c2;
   let v2 = a2-2*a*b+b2-2*b*c+c2;
   let v3 = a2+b2-2*a*c-2*b*c+c2;
   return [v1,v2,v3];
}

function bary_X345(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a-b-c)*(a2-b2-c2);
   let v2 = (-a+b-c)*(-a2+b2-c2);
   let v3 = (-a-b+c)*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X346(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a-b-c)*(a-b-c);
   let v2 = (-a+b-c)*(-a+b-c);
   let v3 = (-a-b+c)*(-a-b+c);
   return [v1,v2,v3];
}

function bary_X347(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(a3+a2*b-a*b2-b3+a2*c-2*a*b*c+b2*c-a*c2+b*c2-c3);
   let v2 = (a+b-c)*(-a+b+c)*(-a3-a2*b+a*b2+b3+a2*c-2*a*b*c+b2*c+a*c2-b*c2-c3);
   let v3 = (a-b+c)*(-a+b+c)*(-a3+a2*b+a*b2-b3-a2*c-2*a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X348(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(a2-b2-c2);
   let v2 = (a+b-c)*(-a+b+c)*(-a2+b2-c2);
   let v3 = (a-b+c)*(-a+b+c)*(-a2-b2+c2);
   return [v1,v2,v3];
}

function bary_X349(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2*(-a+b-c)*(a+b-c)*(b+c)*c2;
   let v2 = a2*(a+c)*(-a-b+c)*(-a+b+c)*c2;
   let v3 = a2*(a+b)*b2*(a-b-c)*(a-b+c);
   return [v1,v2,v3];
}

function bary_X350(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = b*c*(-a2+b*c);
   let v2 = a*c*(-b2+a*c);
   let v3 = a*b*(a*b-c2);
   return [v1,v2,v3];
}

function bary_X351(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b2-c2)*(-2*a2+b2+c2);
   let v2 = b2*(-a2+c2)*(a2-2*b2+c2);
   let v3 = (a2-b2)*(a2+b2-2*c2)*c2;
   return [v1,v2,v3];
}

function bary_X352(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4-4*a2*b2+b4-4*a2*c2+5*b2*c2+c4);
   let v2 = b2*(a4-4*a2*b2+b4+5*a2*c2-4*b2*c2+c4);
   let v3 = c2*(a4+5*a2*b2+b4-4*a2*c2-4*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X353(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(4*a4-4*a2*b2-2*b4-4*a2*c2-b2*c2-2*c4);
   let v2 = b2*(-2*a4-4*a2*b2+4*b4-a2*c2-4*b2*c2-2*c4);
   let v3 = c2*(-2*a4-a2*b2-2*b4-4*a2*c2-4*b2*c2+4*c4);
   return [v1,v2,v3];
}

function bary_X354(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(a*b-b2+a*c+2*b*c-c2);
   let v2 = b*(-a2+a*b+2*a*c+b*c-c2);
   let v3 = c*(-a2+2*a*b-b2+a*c+b*c);
   return [v1,v2,v3];
}

function bary_X355(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4-a3*b+a*b3-b4-a3*c+2*a2*b*c-a*b2*c-a*b*c2+2*b2*c2+a*c3-c4;
   let v2 = -a4+a3*b-a*b3+b4-a2*b*c+2*a*b2*c-b3*c+2*a2*c2-a*b*c2+b*c3-c4;
   let v3 = -a4+2*a2*b2-b4+a3*c-a2*b*c-a*b2*c+b3*c+2*a*b*c2-a*c3-b*c3+c4;
   return [v1,v2,v3];
}

function bary_X356(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let sinC=getSin(cosC);
   let sinB=getSin(cosB);
   let sinA=getSin(cosA);
   let cosThirdC=cosThirdAngle(cosC);
   let cosThirdB=cosThirdAngle(cosB);
   let cosThirdA=cosThirdAngle(cosA);
   /* end vars */
   let v1 = (cosThirdA+2*cosThirdB*cosThirdC)*sinA;
   let v2 = (cosThirdB+2*cosThirdA*cosThirdC)*sinB;
   let v3 = (2*cosThirdA*cosThirdB+cosThirdC)*sinC;
   return [v1,v2,v3];
}

function bary_X357(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosThirdC=cosThirdAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cosThirdB=cosThirdAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cosThirdA=cosThirdAngle(cosA);
   let sinC=getSin(cosC);
   let secThirdC=1/cosThirdC;
   let sinB=getSin(cosB);
   let secThirdB=1/cosThirdB;
   let sinA=getSin(cosA);
   let secThirdA=1/cosThirdA;
   /* end vars */
   let v1 = secThirdA*sinA;
   let v2 = secThirdB*sinB;
   let v3 = secThirdC*sinC;
   return [v1,v2,v3];
}

function bary_X358(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let sinC=getSin(cosC);
   let cosThirdC=cosThirdAngle(cosC);
   let sinB=getSin(cosB);
   let cosThirdB=cosThirdAngle(cosB);
   let sinA=getSin(cosA);
   let cosThirdA=cosThirdAngle(cosA);
   /* end vars */
   let v1 = cosThirdA*sinA;
   let v2 = cosThirdB*sinB;
   let v3 = cosThirdC*sinC;
   return [v1,v2,v3];
}

function bary_X359(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let C=Math.acos(cosC);
   let c2=c*c;
   let B=Math.acos(cosB);
   let b2=b*b;
   let A=Math.acos(cosA);
   let a2=a*a;
   /* end vars */
   let v1 = a2/A;
   let v2 = b2/B;
   let v3 = c2/C;
   return [v1,v2,v3];
}

function bary_X360(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosB=lawOfCosines(b,a,c);
   let cosA=lawOfCosines(a,b,c);
   let C=Math.acos(cosC);
   let B=Math.acos(cosB);
   let A=Math.acos(cosA);
   /* end vars */
   let v1 = A;
   let v2 = B;
   let v3 = C;
   return [v1,v2,v3];
}

function bary_X361(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*(Sqrt((a*b)/(sa*sb))+Sqrt((a*c)/(sa*sc))-Sqrt((b*c)/(sb*sc)));
   let v2 = b*(Sqrt((a*b)/(sa*sb))-Sqrt((a*c)/(sa*sc))+Sqrt((b*c)/(sb*sc)));
   let v3 = c*(-Sqrt((a*b)/(sa*sb))+Sqrt((a*c)/(sa*sc))+Sqrt((b*c)/(sb*sc)));
   return [v1,v2,v3];
}

function bary_X362(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*(-(a*Sqrt((s*sa)/(b*c)))+b*Sqrt((s*sb)/(a*c))+c*Sqrt((s*sc)/(a*b)));
   let v2 = b*(a*Sqrt((s*sa)/(b*c))-b*Sqrt((s*sb)/(a*c))+c*Sqrt((s*sc)/(a*b)));
   let v3 = c*(a*Sqrt((s*sa)/(b*c))+b*Sqrt((s*sb)/(a*c))-c*Sqrt((s*sc)/(a*b)));
   return [v1,v2,v3];
}

function bary_X363(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*(c/(1+Sqrt((sa*sb)/(a*b)))+b/(1+Sqrt((sa*sc)/(a*c)))-a/(1+Sqrt((sb*sc)/(b*c))));
   let v2 = b*(c/(1+Sqrt((sa*sb)/(a*b)))-b/(1+Sqrt((sa*sc)/(a*c)))+a/(1+Sqrt((sb*sc)/(b*c))));
   let v3 = c*(-(c/(1+Sqrt((sa*sb)/(a*b))))+b/(1+Sqrt((sa*sc)/(a*c)))+a/(1+Sqrt((sb*sc)/(b*c))));
   return [v1,v2,v3];
}

function bary_X364(orbit, [a,b,c]) {
   /* begin vars */
   let sqrtc=sqrt(c);
   let sqrtb=sqrt(b);
   let sqrta=sqrt(a);
   /* end vars */
   let v1 = a*(-sqrta+sqrtb+sqrtc);
   let v2 = b*(sqrta-sqrtb+sqrtc);
   let v3 = c*(sqrta+sqrtb-sqrtc);
   return [v1,v2,v3];
}

function bary_X365(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = Math.pow(a,1.5);
   let v2 = Math.pow(b,1.5);
   let v3 = Math.pow(c,1.5);
   return [v1,v2,v3];
}

function bary_X366(orbit, [a,b,c]) {
   /* begin vars */
   let sqrtc=sqrt(c);
   let sqrtb=sqrt(b);
   let sqrta=sqrt(a);
   /* end vars */
   let v1 = sqrta;
   let v2 = sqrtb;
   let v3 = sqrtc;
   return [v1,v2,v3];
}

function bary_X367(orbit, [a,b,c]) {
   /* begin vars */
   let sqrta=sqrt(a);
   let sqrtc=sqrt(c);
   let sqrtb=sqrt(b);
   /* end vars */
   let v1 = a*(sqrtb+sqrtc);
   let v2 = b*(sqrta+sqrtc);
   let v3 = c*(sqrta+sqrtb);
   return [v1,v2,v3];
}

function bary_X368(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let S2=S*S;
   /* end vars */
   let v1 = S2-3*SB*SC;
   let v2 = S2-3*SA*SC;
   let v3 = S2-3*SA*SB;
   return [v1,v2,v3];
}

function bary_X369(orbit, [a,b,c]) {
   /* begin vars */
   let Sqrt=Math.sqrt;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2-2*a*b-b2-3*a*c-2*b*c-2*c2+(a+2*c)*((a+b+c)/2.+(a2+b2-10*(a*b+a*c+b*c)+c2)/(Math.pow(2,0.6666666666666666)*Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333))+Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333)/(6.*Math.pow(2,0.3333333333333333)))-Math.pow((a+b+c)/2.+(a2+b2-10*(a*b+a*c+b*c)+c2)/(Math.pow(2,0.6666666666666666)*Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333))+Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333)/(6.*Math.pow(2,0.3333333333333333)),2);
   let v2 = -2*a2-3*a*b+b2-2*a*c-2*b*c-c2+(2*a+b)*((a+b+c)/2.+(a2+b2-10*(a*b+a*c+b*c)+c2)/(Math.pow(2,0.6666666666666666)*Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333))+Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333)/(6.*Math.pow(2,0.3333333333333333)))-Math.pow((a+b+c)/2.+(a2+b2-10*(a*b+a*c+b*c)+c2)/(Math.pow(2,0.6666666666666666)*Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333))+Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333)/(6.*Math.pow(2,0.3333333333333333)),2);
   let v3 = -a2-2*a*b-2*b2-2*a*c-3*b*c+c2+(2*b+c)*((a+b+c)/2.+(a2+b2-10*(a*b+a*c+b*c)+c2)/(Math.pow(2,0.6666666666666666)*Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333))+Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333)/(6.*Math.pow(2,0.3333333333333333)))-Math.pow((a+b+c)/2.+(a2+b2-10*(a*b+a*c+b*c)+c2)/(Math.pow(2,0.6666666666666666)*Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333))+Math.pow(216*(a-b)*(b-c)*(-a+c)+Sqrt(46656*(a-b)*(a-b)*(b-c)*(b-c)*(-a+c)*(-a+c)-108*Math.pow(a2+b2-10*(a*b+a*c+b*c)+c2,3)),0.3333333333333333)/(6.*Math.pow(2,0.3333333333333333)),2);
   return [v1,v2,v3];
}

function bary_X370(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let S2=S*S;
   /* end vars */
   let v1 = S2-3*SB*SC;
   let v2 = S2-3*SA*SC;
   let v3 = S2-3*SA*SB;
   return [v1,v2,v3];
}

function bary_X371(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-b2-c2-2*S);
   let v2 = b2*(-a2+b2-c2-2*S);
   let v3 = c2*(-a2-b2+c2-2*S);
   return [v1,v2,v3];
}

function bary_X372(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2-b2-c2+2*S);
   let v2 = b2*(-a2+b2-c2+2*S);
   let v3 = c2*(-a2-b2+c2+2*S);
   return [v1,v2,v3];
}

function bary_X373(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(a2*b2-b4+a2*c2+6*b2*c2-c4);
   let v2 = b2*(-a4+a2*b2+6*a2*c2+b2*c2-c4);
   let v3 = c2*(-a4+6*a2*b2-b4+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X374(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3*b+a2*b2-a*b3-b4+a3*c-6*a2*b*c+5*a*b2*c+a2*c2+5*a*b*c2+2*b2*c2-a*c3-c4);
   let v2 = b*(-a4-a3*b+a2*b2+a*b3+5*a2*b*c-6*a*b2*c+b3*c+2*a2*c2+5*a*b*c2+b2*c2-b*c3-c4);
   let v3 = c*(-a4+2*a2*b2-b4-a3*c+5*a2*b*c+5*a*b2*c-b3*c+a2*c2-6*a*b*c2+b2*c2+a*c3+b*c3);
   return [v1,v2,v3];
}

function bary_X375(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let a4=a2*a2;
   let c4=c2*c2;
   let c3=c2*c;
   let b3=b2*b;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(a2*b2-b4-a*b2*c+b3*c+a2*c2-a*b*c2+4*b2*c2+b*c3-c4);
   let v2 = b2*(-a4+a2*b2+a3*c-a2*b*c+4*a2*c2-a*b*c2+b2*c2+a*c3-c4);
   let v3 = c2*(-a4+a3*b+4*a2*b2+a*b3-b4-a2*b*c-a*b2*c+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X376(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 2*a2*SA-SB*SC;
   let v2 = 2*b2*SB-SA*SC;
   let v3 = -(SA*SB)+2*c2*SC;
   return [v1,v2,v3];
}

function bary_X377(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a*b*c*(a+b+c)+2*SB*SC;
   let v2 = a*b*c*(a+b+c)+2*SA*SC;
   let v3 = a*b*c*(a+b+c)+2*SA*SB;
   return [v1,v2,v3];
}

function bary_X378(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = a2*(4*area*area+3*SA2)*SB*SC;
   let v2 = b2*SA*(4*area*area+3*SB2)*SC;
   let v3 = c2*SA*SB*(4*area*area+3*SC2);
   return [v1,v2,v3];
}

function bary_X379(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let a2=a*a;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a5-a*b4+a2*b2*c-b4*c+a2*b*c2+2*a*b2*c2+b3*c2+b2*c3-a*c4-b*c4;
   let v2 = -(a4*b)+b5-a4*c+a2*b2*c+a3*c2+2*a2*b*c2+a*b2*c2+a2*c3-a*c4-b*c4;
   let v3 = -(a4*b)+a3*b2+a2*b3-a*b4-a4*c+2*a2*b2*c-b4*c+a2*b*c2+a*b2*c2+c5;
   return [v1,v2,v3];
}

function bary_X380(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(a4-4*a*b*c*(b+c)-4*a2*(b*c+SA)-(SB-SC)*(SB-SC));
   let v2 = b*(b4-4*a*b*c*(a+c)-4*b2*(a*c+SB)-(-SA+SC)*(-SA+SC));
   let v3 = c*(-4*a*b*(a+b)*c+c4-(SA-SB)*(SA-SB)-4*c2*(a*b+SC));
   return [v1,v2,v3];
}

function bary_X381(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA+4*SB*SC;
   let v2 = b2*SB+4*SA*SC;
   let v3 = 4*SA*SB+c2*SC;
   return [v1,v2,v3];
}

function bary_X382(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA-4*SB*SC;
   let v2 = b2*SB-4*SA*SC;
   let v3 = -4*SA*SB+c2*SC;
   return [v1,v2,v3];
}

function bary_X383(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = (c2+SC)*(a2*SA+SB*SC)*(a2*SA+4*SB*SC)-2*area*(SA2*SB2+c2*SA*SC*(3*SB+SC)+SB*SC*(c2*(SB+3*SC)+SC2))*sqrt3;
   let v2 = (a2+SA)*(b2*SB+SA*SC)*(b2*SB+4*SA*SC)-2*area*(a2*SA*SB*(SA+3*SC)+SA*SC*(SA2+a2*(3*SA+SC))+SB2*SC2)*sqrt3;
   let v3 = (b2+SB)*(SA*SB+c2*SC)*(4*SA*SB+c2*SC)-2*area*(SA*SB*(b2*(SA+3*SB)+SB2)+b2*SB*(3*SA+SB)*SC+SA2*SC2)*sqrt3;
   return [v1,v2,v3];
}

function bary_X384(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4+b2*c2;
   let v2 = b4+a2*c2;
   let v3 = a2*b2+c4;
   return [v1,v2,v3];
}

function bary_X385(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4-b2*c2;
   let v2 = b4-a2*c2;
   let v3 = -(a2*b2)+c4;
   return [v1,v2,v3];
}

function bary_X386(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*((a+b)*(a+c)+2*SA);
   let v2 = b2*((a+b)*(b+c)+2*SB);
   let v3 = c2*((a+c)*(b+c)+2*SC);
   return [v1,v2,v3];
}

function bary_X387(orbit, [a,b,c]) {
   /* begin vars */
   let b2=b*b;
   let a2=a*a;
   let c2=c*c;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let SC2=SC*SC;
   /* end vars */
   let v1 = a2*(a+c)*(b+c)+SC2;
   let v2 = (a+b)*b2*(a+c)+SA2;
   let v3 = (a+b)*(b+c)*c2+SB2;
   return [v1,v2,v3];
}

function bary_X388(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2+b2+2*b*c+c2)/(a-b-c);
   let v2 = (a2+b2+2*a*c+c2)/(-a+b-c);
   let v3 = (a2+2*a*b+b2+c2)/(-a-b+c);
   return [v1,v2,v3];
}

function bary_X389(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c4=c2*c2;
   let SB2=SB*SB;
   let b4=b2*b2;
   let SA2=SA*SA;
   let area=triAreaHeron(a,b,c);
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*b2*c2*SA+4*a2*area*area*(-SA2+SB*SC);
   let v2 = a2*b4*c2*SB+4*area*area*b2*(-SB2+SA*SC);
   let v3 = a2*b2*c4*SC+4*area*area*c2*(SA*SB-SC2);
   return [v1,v2,v3];
}

function bary_X390(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a-b-c)*(3*a2+b2-2*b*c+c2);
   let v2 = (-a+b-c)*(a2+3*b2-2*a*c+c2);
   let v3 = (-a-b+c)*(a2-2*a*b+b2+3*c2);
   return [v1,v2,v3];
}

function bary_X391(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a-b-c)*(3*a+b+c);
   let v2 = (-a+b-c)*(a+3*b+c);
   let v3 = (-a-b+c)*(a+b+3*c);
   return [v1,v2,v3];
}

function bary_X392(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a*(a2*b-b3+a2*c-4*a*b*c-b2*c-b*c2-c3);
   let v2 = b*(-a3+a*b2-a2*c-4*a*b*c+b2*c-a*c2-c3);
   let v3 = c*(-a3-a2*b-a*b2-b3-4*a*b*c+a*c2+b*c2);
   return [v1,v2,v3];
}

function bary_X393(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = SB2*SC2;
   let v2 = SA2*SC2;
   let v3 = SA2*SB2;
   return [v1,v2,v3];
}

function bary_X394(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*SA2;
   let v2 = b2*SB2;
   let v3 = c2*SC2;
   return [v1,v2,v3];
}

function bary_X395(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = -4*area+a2*sqrt3;
   let v2 = -4*area+b2*sqrt3;
   let v3 = -4*area+c2*sqrt3;
   return [v1,v2,v3];
}

function bary_X396(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = 4*area+a2*sqrt3;
   let v2 = 4*area+b2*sqrt3;
   let v3 = 4*area+c2*sqrt3;
   return [v1,v2,v3];
}

function bary_X397(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*SC+a2*area*sqrt3;
   let v2 = SA*SC+area*b2*sqrt3;
   let v3 = SA*SB+area*c2*sqrt3;
   return [v1,v2,v3];
}

function bary_X398(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*SC-a2*area*sqrt3;
   let v2 = SA*SC-area*b2*sqrt3;
   let v3 = SA*SB-area*c2*sqrt3;
   return [v1,v2,v3];
}

function bary_X399(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = a2*(-32*area*area*SA2+b2*c2*(5*a2*SA-4*SB*SC));
   let v2 = b2*(-32*area*area*SB2+a2*c2*(5*b2*SB-4*SA*SC));
   let v3 = c2*(a2*b2*(-4*SA*SB+5*c2*SC)-32*area*area*SC2);
   return [v1,v2,v3];
}

function bary_X400(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosHalfC=cosHalfAngle(cosC);
   let sinQuarterC=sinHalfAngle(cosHalfC);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfB=cosHalfAngle(cosB);
   let sinQuarterB=sinHalfAngle(cosHalfB);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfA=cosHalfAngle(cosA);
   let sinQuarterA=sinHalfAngle(cosHalfA);
   let sinC=getSin(cosC);
   let cscQuarterC=1/sinQuarterC;
   let sinB=getSin(cosB);
   let cscQuarterB=1/sinQuarterB;
   let sinA=getSin(cosA);
   let cscQuarterA=1/sinQuarterA;
   /* end vars */
   let v1 = Math.pow(cscQuarterA,4)*sinA;
   let v2 = Math.pow(cscQuarterB,4)*sinB;
   let v3 = Math.pow(cscQuarterC,4)*sinC;
   return [v1,v2,v3];
}

function bary_X401(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = a2*SA*SB*SC+SB2*SC2-SA2*(SB2+SB*SC+SC2);
   let v2 = b2*SA*SB*SC+SA2*SC2-SB2*(SA2+SA*SC+SC2);
   let v3 = SA2*SB2+c2*SA*SB*SC-(SA2+SA*SB+SB2)*SC2;
   return [v1,v2,v3];
}

function bary_X402(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = (a2*SA-2*SB*SC)*(a2*SA*SB*SC-SB2*SC2+SA2*(SB2-3*SB*SC+SC2));
   let v2 = (b2*SB-2*SA*SC)*(b2*SA*SB*SC-SA2*SC2+SB2*(SA2-3*SA*SC+SC2));
   let v3 = (-2*SA*SB+c2*SC)*(-(SA2*SB2)+c2*SA*SB*SC+(SA2-3*SA*SB+SB2)*SC2);
   return [v1,v2,v3];
}

function bary_X403(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = SB*SC*(SA*(SB-SC)*(SB-SC)+a2*(-SA2+SB*SC));
   let v2 = SA*SC*(SB*(-SA+SC)*(-SA+SC)+b2*(-SB2+SA*SC));
   let v3 = SA*SB*((SA-SB)*(SA-SB)*SC+c2*(SA*SB-SC2));
   return [v1,v2,v3];
}

function bary_X404(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(b*c*(a+b+c)-2*a*SA);
   let v2 = b*(a*c*(a+b+c)-2*b*SB);
   let v3 = c*(a*b*(a+b+c)-2*c*SC);
   return [v1,v2,v3];
}

function bary_X405(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(b*c*(a+b+c)+a*SA);
   let v2 = b*(a*c*(a+b+c)+b*SB);
   let v3 = c*(a*b*(a+b+c)+c*SC);
   return [v1,v2,v3];
}

function bary_X406(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let SC=(a2+b2-c2)/2;
   let SA=(b2+c2-a2)/2;
   let c3=c2*c;
   let b3=b2*b;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*(b3+c3+2*a*(b*c+SA)+c*(SA-SB)+b*(SA-SC))*SC;
   let v2 = SA*(a3+c3+2*b*(a*c+SB)+c*(-SA+SB)+a*(SB-SC))*SC;
   let v3 = SA*SB*(a3+b3+2*c*(a*b+SC)+b*(-SA+SC)+a*(-SB+SC));
   return [v1,v2,v3];
}

function bary_X407(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (b+c)*(a2+2*b*c+a*(b+c)-2*SA)*SB*SC;
   let v2 = (a+c)*SA*(b2+2*a*c+b*(a+c)-2*SB)*SC;
   let v3 = (a+b)*SA*SB*(2*a*b+(a+b)*c+c2-2*SC);
   return [v1,v2,v3];
}

function bary_X408(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let b3=b2*b;
   let a4=a2*a2;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b+c)*(-a2+b2+c2)*(-a2+b2+c2)*(-(a4*b)-a3*b2+a2*b3+a*b4-a4*c-a2*b2*c+2*b4*c-a3*c2-a2*b*c2-2*a*b2*c2-2*b3*c2+a2*c3-2*b2*c3+a*c4+2*b*c4);
   let v2 = b3*(a+c)*(a2-b2+c2)*(a2-b2+c2)*(a4*b+a3*b2-a2*b3-a*b4+2*a4*c-a2*b2*c-b4*c-2*a3*c2-2*a2*b*c2-a*b2*c2-b3*c2-2*a2*c3+b2*c3+2*a*c4+b*c4);
   let v3 = (a+b)*(a2+b2-c2)*(a2+b2-c2)*c3*(2*a4*b-2*a3*b2-2*a2*b3+2*a*b4+a4*c-2*a2*b2*c+b4*c+a3*c2-a2*b*c2-a*b2*c2+b3*c2-a2*c3-b2*c3-a*c4-b*c4);
   return [v1,v2,v3];
}

function bary_X409(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b)*(a+c)*((a+b-c)*(a-b+c)*(b+c)*(b+c)+(a+b)*(a+c)*(-a+b+c)*(-a+b+c));
   let v2 = b*(a+b)*(b+c)*((a+b)*(a-b+c)*(a-b+c)*(b+c)+(a+b-c)*(a+c)*(a+c)*(-a+b+c));
   let v3 = c*(a+c)*(b+c)*((a+b-c)*(a+b-c)*(a+c)*(b+c)+(a+b)*(a+b)*(a-b+c)*(-a+b+c));
   return [v1,v2,v3];
}

function bary_X410(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = (a+b)*(a+c)*SB*SC*(a2*(a+b-c)*(a-b+c)*(b+c)*(b+c)*SA2+b*(a+b)*c*(a+c)*(-a+b+c)*(-a+b+c)*SB*SC);
   let v2 = (a+b)*(b+c)*SA*SC*(b2*(a+b-c)*(a+c)*(a+c)*(-a+b+c)*SB2+a*(a+b)*c*(a-b+c)*(a-b+c)*(b+c)*SA*SC);
   let v3 = (a+c)*(b+c)*SA*SB*(a*b*(a+b-c)*(a+b-c)*(a+c)*(b+c)*SA*SB+(a+b)*(a+b)*(a-b+c)*(-a+b+c)*c2*SC2);
   return [v1,v2,v3];
}

function bary_X411(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let c3=c2*c;
   let SB=(c2+a2-b2)/2;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   let SC2=SC*SC;
   let c5=c2*c3;
   let c4=c2*c2;
   let SB2=SB*SB;
   let b5=b2*b3;
   let b4=b2*b2;
   let SA2=SA*SA;
   let a5=a2*a3;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(a4*b*c+a5*(b+c)-b*c*(b2-c2)*(b2-c2)+a*(b-c)*(b-c)*(b+c)*(b2+c2)-2*a3*(b3+c3)-4*a2*SA2);
   let v2 = b*(a*b4*c+b5*(a+c)-a*c*(-a2+c2)*(-a2+c2)+b*(-a+c)*(-a+c)*(a+c)*(a2+c2)-2*b3*(a3+c3)-4*b2*SB2);
   let v3 = c*(-(a*b*(a2-b2)*(a2-b2))+(a-b)*(a-b)*(a+b)*(a2+b2)*c-2*(a3+b3)*c3+a*b*c4+(a+b)*c5-4*c2*SC2);
   return [v1,v2,v3];
}

function bary_X412(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let c5=c2*c3;
   let c4=c2*c2;
   let b4=b2*b2;
   let b5=b2*b3;
   let a4=a2*a2;
   let a5=a2*a3;
   /* end vars */
   let v1 = (-(a5*(b+c))+b*c*(a4-(b-c)*(b-c)*(b+c)*(b+c))+2*a3*(b3+c3)+a*(-b5+b4*c+b*c4-c5)-4*a2*SA2)*SB*SC;
   let v2 = SA*(-(b5*(a+c))+a*c*(b4-(-a+c)*(-a+c)*(a+c)*(a+c))+2*b3*(a3+c3)+b*(-a5+a4*c+a*c4-c5)-4*b2*SB2)*SC;
   let v3 = SA*SB*((-a5+a4*b+a*b4-b5)*c+2*(a3+b3)*c3+a*b*(-((a-b)*(a-b)*(a+b)*(a+b))+c4)-(a+b)*c5-4*c2*SC2);
   return [v1,v2,v3];
}

function bary_X413(orbit, [a,b,c]) {
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
   let v1 = a*(a+b)*Math.pow(a-b-c,3)*(a+c)*(a4+a2*b*c+a3*(b+c)+a*(b-c)*(b-c)*(b+c)+(b-c)*(b-c)*(b2+b*c+c2));
   let v2 = b*(a+b)*Math.pow(-a+b-c,3)*(b+c)*(b4+a*b2*c+b3*(a+c)+b*(-a+c)*(-a+c)*(a+c)+(-a+c)*(-a+c)*(a2+a*c+c2));
   let v3 = c*(a+c)*Math.pow(-a-b+c,3)*(b+c)*((a-b)*(a-b)*(a2+a*b+b2)+(a-b)*(a-b)*(a+b)*c+a*b*c2+(a+b)*c3+c4);
   return [v1,v2,v3];
}

function bary_X414(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let sb=(c+a-b)/2;
   let sc=(a+b-c)/2;
   let SB2=SB*SB;
   let sa=(b+c-a)/2;
   /* end vars */
   let v1 = (a+b)*(a+c)*Math.pow(sa,3)*SB*SC*(b2*(a+c)*(a+c)*SB2*sc*sc-b*(a+b)*c*(a+c)*sb*SB*sc*SC+(a+b)*(a+b)*c2*sb*sb*SC2);
   let v2 = (a+b)*(b+c)*SA*Math.pow(sb,3)*SC*(a2*(b+c)*(b+c)*SA2*sc*sc-a*(a+b)*c*(b+c)*sa*SA*sc*SC+(a+b)*(a+b)*c2*sa*sa*SC2);
   let v3 = (a+c)*(b+c)*SA*SB*(a2*(b+c)*(b+c)*SA2*sb*sb-a*b*(a+c)*(b+c)*sa*SA*sb*SB+b2*(a+c)*(a+c)*sa*sa*SB2)*Math.pow(sc,3);
   return [v1,v2,v3];
}

function bary_X415(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a+b)*(a+c)*(a3-2*a2*b+b3-2*a2*c+a*b*c+c3)*SB*SC;
   let v2 = (a+b)*(b+c)*(a3-2*a*b2+b3+a*b*c-2*b2*c+c3)*SA*SC;
   let v3 = (a+c)*(b+c)*(a3+b3+a*b*c-2*a*c2-2*b*c2+c3)*SA*SB;
   return [v1,v2,v3];
}

function bary_X416(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let sa=(b+c-a)/2;
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a*(a+b)*(a+c)*(-(a2*(b+c)*(b+c)*SA2*sb*sc)+b*(a+b)*c*(a+c)*sa*sa*SB*SC);
   let v2 = b*(a+b)*(b+c)*(-(b2*(a+c)*(a+c)*sa*SB2*sc)+a*(a+b)*c*(b+c)*SA*sb*sb*SC);
   let v3 = c*(a+c)*(b+c)*(a*b*(a+c)*(b+c)*SA*SB*sc*sc-(a+b)*(a+b)*c2*sa*sb*SC2);
   return [v1,v2,v3];
}

function bary_X417(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c4=c2*c2;
   let SA2=SA*SA;
   let b4=b2*b2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*Math.pow(SA,3)*(a2*SB*SC+SA*(SB2+SC2));
   let v2 = b4*Math.pow(SB,3)*(b2*SA*SC+SB*(SA2+SC2));
   let v3 = c4*Math.pow(SC,3)*(c2*SA*SB+(SA2+SB2)*SC);
   return [v1,v2,v3];
}

function bary_X418(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c4=c2*c2;
   let SB2=SB*SB;
   let b4=b2*b2;
   let SA2=SA*SA;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*SA2*(a2*SA+2*SB*SC);
   let v2 = b4*SB2*(b2*SB+2*SA*SC);
   let v3 = c4*(2*SA*SB+c2*SC)*SC2;
   return [v1,v2,v3];
}

function bary_X419(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let SA=(b2+c2-a2)/2;
   let b4=b2*b2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4-b2*c2)*SB*SC;
   let v2 = (b4-a2*c2)*SA*SC;
   let v3 = (-(a2*b2)+c4)*SA*SB;
   return [v1,v2,v3];
}

function bary_X420(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = SB*SC*(-(SA*(a2+3*SA))+SB2+3*SB*SC+SC2);
   let v2 = SA*SC*(SA2-SB*(b2+3*SB)+3*SA*SC+SC2);
   let v3 = SA*SB*(SA2+3*SA*SB+SB2-SC*(c2+3*SC));
   return [v1,v2,v3];
}

function bary_X421(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = SB*SC*(a2*SA*(SB2+SC2)+SB*SC*(SB2+SC2)-SA2*(SB2+4*SB*SC+SC2));
   let v2 = SA*SC*(b2*SB*(SA2+SC2)+SA*SC*(SA2+SC2)-SB2*(SA2+4*SA*SC+SC2));
   let v3 = SA*SB*(SA*SB*(SA2+SB2)+c2*(SA2+SB2)*SC-(SA2+4*SA*SB+SB2)*SC2);
   return [v1,v2,v3];
}

function bary_X422(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c3=c2*c;
   let SA=(b2+c2-a2)/2;
   let b3=b2*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = (a+b)*(a+c)*(a3+a*b*c-b*c*(b+c))*SB*SC;
   let v2 = (a+b)*(b+c)*(b3+a*b*c-a*c*(a+c))*SA*SC;
   let v3 = (a+c)*(b+c)*(-(a*b*(a+b))+a*b*c+c3)*SA*SB;
   return [v1,v2,v3];
}

function bary_X423(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (a+b)*(a+c)*(a*b+a*c-b*c-2*SA)*SB*SC;
   let v2 = (a+b)*(b+c)*SA*(a*b-a*c+b*c-2*SB)*SC;
   let v3 = (a+c)*(b+c)*SA*SB*(-(a*b)+a*c+b*c-2*SC);
   return [v1,v2,v3];
}

function bary_X424(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let a4=a2*a2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (b+c)*(a3*b+a2*b2-a*b3-b4+a3*c+a2*c2-a*c3-c4)*SB*SC;
   let v2 = (a+c)*(-a4-a3*b+a2*b2+a*b3+b3*c+b2*c2-b*c3-c4)*SA*SC;
   let v3 = (a+b)*(-a4-b4-a3*c-b3*c+a2*c2+b2*c2+a*c3+b*c3)*SA*SB;
   return [v1,v2,v3];
}

function bary_X425(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let a2=a*a;
   let b2=b*b;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   let c6=c2*c4;
   let SA=(b2+c2-a2)/2;
   let b6=b2*b4;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c5=c2*c3;
   let b5=b2*b3;
   let a5=a2*a3;
   let a6=a2*a4;
   /* end vars */
   let v1 = (a+b)*(a+c)*(-a6+a5*b+a4*b2-a3*b3+a5*c-a4*b*c-a3*b2*c+b5*c+a4*c2-a3*b*c2-2*a2*b2*c2+2*a*b3*c2-a3*c3+2*a*b2*c3-2*b3*c3+b*c5)*SB*SC;
   let v2 = (a+b)*(b+c)*(-(a3*b3)+a2*b4+a*b5-b6+a5*c-a2*b3*c-a*b4*c+b5*c+2*a3*b*c2-2*a2*b2*c2-a*b3*c2+b4*c2-2*a3*c3+2*a2*b*c3-b3*c3+a*c5)*SA*SC;
   let v3 = (a+c)*(b+c)*(a5*b-2*a3*b3+a*b5+2*a3*b2*c+2*a2*b3*c-2*a2*b2*c2-a3*c3-a2*b*c3-a*b2*c3-b3*c3+a2*c4-a*b*c4+b2*c4+a*c5+b*c5-c6)*SA*SB;
   return [v1,v2,v3];
}

function bary_X426(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = a2*Math.pow(SA,3)*(SB2+SC2);
   let v2 = b2*Math.pow(SB,3)*(SA2+SC2);
   let v3 = c2*(SA2+SB2)*Math.pow(SC,3);
   return [v1,v2,v3];
}

function bary_X427(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (a2+2*SA)*SB*SC;
   let v2 = SA*(b2+2*SB)*SC;
   let v3 = SA*SB*(c2+2*SC);
   return [v1,v2,v3];
}

function bary_X428(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (3*a2+2*SA)*SB*SC;
   let v2 = SA*(3*b2+2*SB)*SC;
   let v3 = SA*SB*(3*c2+2*SC);
   return [v1,v2,v3];
}

function bary_X429(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (b+c)*(a*(a+b+c)+2*SA)*SB*SC;
   let v2 = (a+c)*SA*(b*(a+b+c)+2*SB)*SC;
   let v3 = (a+b)*SA*SB*(c*(a+b+c)+2*SC);
   return [v1,v2,v3];
}

function bary_X430(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = (b+c)*(2*a+b+c)*SB*SC;
   let v2 = (a+c)*(a+2*b+c)*SA*SC;
   let v3 = (a+b)*(a+b+2*c)*SA*SB;
   return [v1,v2,v3];
}

function bary_X431(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let a3=a2*a;
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a5=a2*a3;
   let c5=c2*c3;
   let c4=c2*c2;
   let b4=b2*b2;
   let b5=b2*b3;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4*b-2*a2*b3+b5+a4*c+2*a3*b*c+2*a2*b2*c-b4*c+2*a2*b*c2-2*a2*c3-b*c4+c5)/((a+b)*(a+c)*(a2-b2-c2));
   let v2 = (a5-2*a3*b2+a*b4-a4*c+2*a2*b2*c+2*a*b3*c+b4*c+2*a*b2*c2-2*b2*c3-a*c4+c5)/((a+b)*(b+c)*(-a2+b2-c2));
   let v3 = (a5-a4*b-a*b4+b5-2*a3*c2+2*a2*b*c2+2*a*b2*c2-2*b3*c2+2*a*b*c3+a*c4+b*c4)/((a+c)*(b+c)*(-a2-b2+c2));
   return [v1,v2,v3];
}

function bary_X432(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SA=(b2+c2-a2)/2;
   let SB=(c2+a2-b2)/2;
   let SC2=SC*SC;
   let SA2=SA*SA;
   let SB2=SB*SB;
   /* end vars */
   let v1 = SB*SC*(b2*SB2*Math.pow(b2*(SB2-SA*SC)-SB*(SA2+SC2),2)+c2*SC2*Math.pow((-SA2-SB2)*SC+c2*(-(SA*SB)+SC2),2));
   let v2 = SA*SC*(a2*SA2*Math.pow(a2*(SA2-SB*SC)+SA*(-SB2-SC2),2)+c2*SC2*Math.pow(-((SA2+SB2)*SC)+c2*(-(SA*SB)+SC2),2));
   let v3 = SA*SB*(b2*SB2*Math.pow(b2*(SB2-SA*SC)+SB*(-SA2-SC2),2)+a2*SA2*Math.pow(a2*(SA2-SB*SC)-SA*(SB2+SC2),2));
   return [v1,v2,v3];
}

function bary_X433(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = SB*SC*(c2*Math.pow(-((SA2+SB2)*SC)+c2*(SA*SB-SC2),2)+b2*Math.pow(b2*(-SB2+SA*SC)-SB*(SA2+SC2),2));
   let v2 = SA*SC*(c2*Math.pow(-((SA2+SB2)*SC)+c2*(SA*SB-SC2),2)+a2*Math.pow(a2*(-SA2+SB*SC)-SA*(SB2+SC2),2));
   let v3 = SA*SB*(b2*Math.pow(b2*(-SB2+SA*SC)-SB*(SA2+SC2),2)+a2*Math.pow(a2*(-SA2+SB*SC)-SA*(SB2+SC2),2));
   return [v1,v2,v3];
}

function bary_X434(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = SB*SC*(c2*Math.pow(4*SA2*SB2+9*SA2*SB*SC+9*SA*SB2*SC-3*SA*Math.pow(SC,3)-3*SB*Math.pow(SC,3)+5*SA2*SC2+6*SA*SB*SC2+5*SB2*SC2,2)+b2*Math.pow(-3*SA*Math.pow(SB,3)+5*SA2*SB2+9*SA2*SB*SC-3*Math.pow(SB,3)*SC+6*SA*SB2*SC+4*SA2*SC2+9*SA*SB*SC2+5*SB2*SC2,2));
   let v2 = SA*SC*(a2*Math.pow(-3*Math.pow(SA,3)*SB+5*SA2*SB2-3*Math.pow(SA,3)*SC+6*SA2*SB*SC+9*SA*SB2*SC+5*SA2*SC2+9*SA*SB*SC2+4*SB2*SC2,2)+c2*Math.pow(4*SA2*SB2+9*SA2*SB*SC+9*SA*SB2*SC-3*SA*Math.pow(SC,3)-3*SB*Math.pow(SC,3)+5*SA2*SC2+6*SA*SB*SC2+5*SB2*SC2,2));
   let v3 = SA*SB*(a2*Math.pow(-3*Math.pow(SA,3)*SB+5*SA2*SB2-3*Math.pow(SA,3)*SC+6*SA2*SB*SC+9*SA*SB2*SC+5*SA2*SC2+9*SA*SB*SC2+4*SB2*SC2,2)+b2*Math.pow(-3*SA*Math.pow(SB,3)+5*SA2*SB2+9*SA2*SB*SC-3*Math.pow(SB,3)*SC+6*SA*SB2*SC+4*SA2*SC2+9*SA*SB*SC2+5*SB2*SC2,2));
   return [v1,v2,v3];
}

function bary_X435(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = SB*SC*(b2*Math.pow(-(a2*SA2*(5*SB-4*SC))+a2*SA*SB*(3*SB-SC)+SB2*(3*SB-5*SC)*SC,2)+c2*Math.pow(b2*SB*SC*(-SA+3*SC)-b2*SB2*(-4*SA+5*SC)+SA*(-5*SA+3*SC)*SC2,2));
   let v2 = SA*SC*(a2*Math.pow(SA2*(3*SA-5*SB)*SB+c2*SA*(3*SA-SB)*SC-c2*(5*SA-4*SB)*SC2,2)+c2*Math.pow(b2*SB*SC*(-SA+3*SC)-b2*SB2*(-4*SA+5*SC)+SA*(-5*SA+3*SC)*SC2,2));
   let v3 = SA*SB*(b2*Math.pow(-(a2*SA2*(5*SB-4*SC))+a2*SA*SB*(3*SB-SC)+SB2*(3*SB-5*SC)*SC,2)+a2*Math.pow(SA2*(3*SA-5*SB)*SB+c2*SA*(3*SA-SB)*SC-c2*(5*SA-4*SB)*SC2,2));
   return [v1,v2,v3];
}

function bary_X436(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2+c2)*(a4*(a2-b2-c2)*(a2-b2-c2)+b2*(-a2+b2-c2)*c2*(-a2-b2+c2));
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*(b4*(-a2+b2-c2)*(-a2+b2-c2)+a2*(a2-b2-c2)*c2*(-a2-b2+c2));
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(a2*b2*(a2-b2-c2)*(-a2+b2-c2)+(-a2-b2+c2)*(-a2-b2+c2)*c4);
   return [v1,v2,v3];
}

function bary_X437(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2-b2+c2)*((2*a-b-c)*(2*a-b-c)*(a2-b2+b*c-c2)*(a2-b2+b*c-c2)+(-a+2*b-c)*(-a-b+2*c)*(-a2+b2+a*c-c2)*(-a2+a*b-b2+c2));
   let v2 = (a2+b2-c2)*(-a2+b2+c2)*((-a+2*b-c)*(-a+2*b-c)*(-a2+b2+a*c-c2)*(-a2+b2+a*c-c2)+(2*a-b-c)*(-a-b+2*c)*(a2-b2+b*c-c2)*(-a2+a*b-b2+c2));
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*((2*a-b-c)*(-a+2*b-c)*(-a2+b2+a*c-c2)*(a2-b2+b*c-c2)+(-a-b+2*c)*(-a-b+2*c)*(-a2+a*b-b2+c2)*(-a2+a*b-b2+c2));
   return [v1,v2,v3];
}

function bary_X438(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a2+b2-c2)*(a2+b2-c2)*(a2-b2+c2)*(a2-b2+c2)*(3*a4-2*a2*b2-b4-2*a2*c2+2*b2*c2-c4)*(3*a4-2*a2*b2-b4-2*a2*c2+2*b2*c2-c4)+(a2+b2-c2)*(a2-b2+c2)*(-a2+b2+c2)*(-a2+b2+c2)*(-a4-2*a2*b2+3*b4+2*a2*c2-2*b2*c2-c4)*(-a4+2*a2*b2-b4-2*a2*c2-2*b2*c2+3*c4);
   let v2 = (a2+b2-c2)*(a2+b2-c2)*(-a2+b2+c2)*(-a2+b2+c2)*(-a4-2*a2*b2+3*b4+2*a2*c2-2*b2*c2-c4)*(-a4-2*a2*b2+3*b4+2*a2*c2-2*b2*c2-c4)+(a2+b2-c2)*(a2-b2+c2)*(a2-b2+c2)*(-a2+b2+c2)*(3*a4-2*a2*b2-b4-2*a2*c2+2*b2*c2-c4)*(-a4+2*a2*b2-b4-2*a2*c2-2*b2*c2+3*c4);
   let v3 = (a2+b2-c2)*(a2+b2-c2)*(a2-b2+c2)*(-a2+b2+c2)*(-a4-2*a2*b2+3*b4+2*a2*c2-2*b2*c2-c4)*(3*a4-2*a2*b2-b4-2*a2*c2+2*b2*c2-c4)+(a2-b2+c2)*(a2-b2+c2)*(-a2+b2+c2)*(-a2+b2+c2)*(-a4+2*a2*b2-b4-2*a2*c2-2*b2*c2+3*c4)*(-a4+2*a2*b2-b4-2*a2*c2-2*b2*c2+3*c4);
   return [v1,v2,v3];
}

function bary_X439(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (3*a2-b2-c2)*(3*a2-b2-c2);
   let v2 = (-a2+3*b2-c2)*(-a2+3*b2-c2);
   let v3 = (-a2-b2+3*c2)*(-a2-b2+3*c2);
   return [v1,v2,v3];
}

function bary_X440(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (b+c)*(2*a3+a2*b+b3+a2*c-b2*c-b*c2+c3)*SA;
   let v2 = (a+c)*(a3+a*b2+2*b3-a2*c+b2*c-a*c2+c3)*SB;
   let v3 = (a+b)*(a3-a2*b-a*b2+b3+a*c2+b*c2+2*c3)*SC;
   return [v1,v2,v3];
}

function bary_X441(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = SA*(-(a2*SB*SC)+SA*(SB2+SC2));
   let v2 = SB*(-(b2*SA*SC)+SB*(SA2+SC2));
   let v3 = SC*(-(c2*SA*SB)+(SA2+SB2)*SC);
   return [v1,v2,v3];
}

function bary_X442(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = (b+c)*(a2*b-b3+a2*c+2*a*b*c+b2*c+b*c2-c3);
   let v2 = (a+c)*(-a3+a*b2+a2*c+2*a*b*c+b2*c+a*c2-c3);
   let v3 = (a+b)*(-a3+a2*b+a*b2-b3+2*a*b*c+a*c2+b*c2);
   return [v1,v2,v3];
}

function bary_X443(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a*b*c*(a+b+c)+SB*SC;
   let v2 = a*b*c*(a+b+c)+SA*SC;
   let v3 = a*b*c*(a+b+c)+SA*SB;
   return [v1,v2,v3];
}

function bary_X444(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(a2+b*c)*(a*(a+b+c)+2*SA)*SB*SC;
   let v2 = b*(b2+a*c)*SA*(b*(a+b+c)+2*SB)*SC;
   let v3 = c*(a*b+c2)*SA*SB*(c*(a+b+c)+2*SC);
   return [v1,v2,v3];
}

function bary_X445(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (2*a*b*c+a2*(b+c)-(b-c)*(b-c)*(b+c))*(b*c+2*SA)*SB*SC;
   let v2 = (2*a*b*c+b2*(a+c)-(-a+c)*(-a+c)*(a+c))*SA*(a*c+2*SB)*SC;
   let v3 = (-((a-b)*(a-b)*(a+b))+2*a*b*c+(a+b)*c2)*SA*SB*(a*b+2*SC);
   return [v1,v2,v3];
}

function bary_X446(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(a2*b2-b4+a2*c2-c4)*(a8*b2-2*a6*b4+a4*b6+a8*c2+2*a2*b6*c2+b8*c2-2*a6*c4-4*a2*b4*c4-b6*c4+a4*c6+2*a2*b2*c6-b4*c6+b2*c8);
   let v2 = b2*(-a4+a2*b2+b2*c2-c4)*(a6*b4-2*a4*b6+a2*b8+a8*c2+2*a6*b2*c2+b8*c2-a6*c4-4*a4*b2*c4-2*b6*c4-a4*c6+2*a2*b2*c6+b4*c6+a2*c8);
   let v3 = c2*(-a4-b4+a2*c2+b2*c2)*(a8*b2-a6*b4-a4*b6+a2*b8+2*a6*b2*c2-4*a4*b4*c2+2*a2*b6*c2+a6*c4+b6*c4-2*a4*c6-2*b4*c6+a2*c8+b2*c8);
   return [v1,v2,v3];
}

function bary_X447(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a+b)*(a+c)*(a4-a3*b+a*b3-b4-a3*c+a2*b*c+a*b2*c-b3*c+a*b*c2+a*c3-b*c3-c4)*SB*SC;
   let v2 = (a+b)*(b+c)*(-a4+a3*b-a*b3+b4-a3*c+a2*b*c+a*b2*c-b3*c+a*b*c2-a*c3+b*c3-c4)*SA*SC;
   let v3 = (a+c)*(b+c)*(-a4-a3*b-a*b3-b4+a3*c+a2*b*c+a*b2*c+b3*c+a*b*c2-a*c3-b*c3+c4)*SA*SB;
   return [v1,v2,v3];
}

function bary_X448(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = -(b*(a+b)*(a+b-c)*c*(a+c)*(a-b+c)*(b+c)*(b+c))+a2*(a+b)*(a+b)*(a+c)*(a+c)*(-a+b+c)*(-a+b+c);
   let v2 = (a+b)*(a+b)*b2*(a-b+c)*(a-b+c)*(b+c)*(b+c)-a*(a+b)*(a+b-c)*c*(a+c)*(a+c)*(b+c)*(-a+b+c);
   let v3 = -(a*b*(a+b)*(a+b)*(a+c)*(a-b+c)*(b+c)*(-a+b+c))+(a+b-c)*(a+b-c)*(a+c)*(a+c)*(b+c)*(b+c)*c2;
   return [v1,v2,v3];
}

function bary_X449(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a-b-c)*(a-b-c)*(3*a3+3*a2*b+a*b2+b3+3*a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(3*a3+3*a2*b+a*b2+b3+3*a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)-(-a+b-c)*(-a-b+c)*(a3+a2*b+3*a*b2+3*b3-a2*c+2*a*b*c+3*b2*c-a*c2+b*c2+c3)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c+3*a*c2+3*b*c2+3*c3);
   let v2 = (-a+b-c)*(-a+b-c)*(a3+a2*b+3*a*b2+3*b3-a2*c+2*a*b*c+3*b2*c-a*c2+b*c2+c3)*(a3+a2*b+3*a*b2+3*b3-a2*c+2*a*b*c+3*b2*c-a*c2+b*c2+c3)-(a-b-c)*(-a-b+c)*(3*a3+3*a2*b+a*b2+b3+3*a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c+3*a*c2+3*b*c2+3*c3);
   let v3 = -((a-b-c)*(-a+b-c)*(3*a3+3*a2*b+a*b2+b3+3*a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3)*(a3+a2*b+3*a*b2+3*b3-a2*c+2*a*b*c+3*b2*c-a*c2+b*c2+c3))+(-a-b+c)*(-a-b+c)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c+3*a*c2+3*b*c2+3*c3)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c+3*a*c2+3*b*c2+3*c3);
   return [v1,v2,v3];
}

function bary_X450(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a4=a2*a2;
   /* end vars */
   let v1 = -(a4*Math.pow(SA,4)*SB*SC)+b2*c2*Math.pow(SB,3)*Math.pow(SC,3);
   let v2 = -(b4*SA*Math.pow(SB,4)*SC)+a2*c2*Math.pow(SA,3)*Math.pow(SC,3);
   let v3 = a2*b2*Math.pow(SA,3)*Math.pow(SB,3)-c4*SA*SB*Math.pow(SC,4);
   return [v1,v2,v3];
}

function bary_X451(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (-a3-a2*b+a*b2+b3-a2*c+a*b*c+b2*c+a*c2+b*c2+c3)*SB*SC;
   let v2 = (a3+a2*b-a*b2-b3+a2*c+a*b*c-b2*c+a*c2+b*c2+c3)*SA*SC;
   let v3 = (a3+a2*b+a*b2+b3+a2*c+a*b*c+b2*c-a*c2-b*c2-c3)*SA*SB;
   return [v1,v2,v3];
}

function bary_X452(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a-b-c)*(3*a3+3*a2*b+a*b2+b3+3*a2*c+2*a*b*c-b2*c+a*c2-b*c2+c3);
   let v2 = (-a+b-c)*(a3+a2*b+3*a*b2+3*b3-a2*c+2*a*b*c+3*b2*c-a*c2+b*c2+c3);
   let v3 = (-a-b+c)*(a3-a2*b-a*b2+b3+a2*c+2*a*b*c+b2*c+3*a*c2+3*b*c2+3*c3);
   return [v1,v2,v3];
}

function bary_X453(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(a+b)*(a+c)*(-a+b+c)*Math.pow(-(a*SA)+b*SB+c*SC,2);
   let v2 = b*(a+b)*(a-b+c)*(b+c)*(a*SA-b*SB+c*SC)*(a*SA-b*SB+c*SC);
   let v3 = (a+b-c)*c*(a+c)*(b+c)*(a*SA+b*SB-c*SC)*(a*SA+b*SB-c*SC);
   return [v1,v2,v3];
}

function bary_X454(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*SA*Math.pow(a2*(SA2-SB*SC)-SA*(SB2+SC2),2);
   let v2 = b2*SB*Math.pow(b2*(SB2-SA*SC)-SB*(SA2+SC2),2);
   let v3 = c2*SC*Math.pow(-((SA2+SB2)*SC)+c2*(-(SA*SB)+SC2),2);
   return [v1,v2,v3];
}

function bary_X455(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*SB*SC*Math.pow(a2*(SA2-SB*SC)+SA*(SB2+SC2),2);
   let v2 = b2*SA*SC*Math.pow(b2*(SB2-SA*SC)+SB*(SA2+SC2),2);
   let v3 = c2*SA*SB*Math.pow((SA2+SB2)*SC+c2*(-(SA*SB)+SC2),2);
   return [v1,v2,v3];
}

function bary_X456(orbit, [a,b,c]) {
   /* begin vars */
   let b2=b*b;
   let a2=a*a;
   let c2=c*c;
   let SB=(c2+a2-b2)/2;
   let SC=(a2+b2-c2)/2;
   let SA=(b2+c2-a2)/2;
   let SB2=SB*SB;
   let SC2=SC*SC;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*SB*SC*Math.pow(SA2*(3*SA-5*SB)*SB+3*c2*SA*(SA-3*SB)*SC-c2*(5*SA+4*SB)*SC2,2);
   let v2 = b2*SA*SC*Math.pow(3*a2*SA*SB*(SB-3*SC)+SB2*(3*SB-5*SC)*SC-a2*SA2*(5*SB+4*SC),2);
   let v3 = c2*SA*SB*Math.pow(3*b2*SB*SC*(-3*SA+SC)-b2*SB2*(4*SA+5*SC)+SA*(-5*SA+3*SC)*SC2,2);
   return [v1,v2,v3];
}

function bary_X457(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*SB*SC*Math.pow(-3*Math.pow(SA,3)*SB+c2*SA*SC*(SB+5*SC)+SA2*(5*SB2-3*c2*SC)-4*c2*SB*SC2,2);
   let v2 = b2*SA*SC*Math.pow(-4*a2*SA2*SC-3*Math.pow(SB,3)*SC+a2*SA*SB*(5*SA+SC)+SB2*(-3*a2*SA+5*SC2),2);
   let v3 = c2*SA*SB*Math.pow(-4*b2*SA*SB2+b2*SB*(SA+5*SB)*SC-3*SA*Math.pow(SC,3)+(5*SA2-3*b2*SB)*SC2,2);
   return [v1,v2,v3];
}

function bary_X458(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = SB*SC*(2*a2*SA+SA2+SB*SC);
   let v2 = SA*SC*(2*b2*SB+SB2+SA*SC);
   let v3 = SA*SB*(SA*SB+2*c2*SC+SC2);
   return [v1,v2,v3];
}

function bary_X459(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let S2=S*S;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 1/(SA*(S2-2*SB*SC));
   let v2 = 1/(SB*(S2-2*SA*SC));
   let v3 = 1/((S2-2*SA*SB)*SC);
   return [v1,v2,v3];
}

function bary_X460(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = SB*SC*(-(a2*SA)+SB2+SC2);
   let v2 = SA*SC*(SA2-b2*SB+SC2);
   let v3 = SA*SB*(SA2+SB2-c2*SC);
   return [v1,v2,v3];
}

function bary_X461(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = (-a+b+c)*(3*a+b+c)*SB*SC;
   let v2 = (a-b+c)*(a+3*b+c)*SA*SC;
   let v3 = (a+b-c)*(a+b+3*c)*SA*SB;
   return [v1,v2,v3];
}

function bary_X462(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*SC*(-4*area+a2*sqrt3);
   let v2 = SA*SC*(-4*area+b2*sqrt3);
   let v3 = SA*SB*(-4*area+c2*sqrt3);
   return [v1,v2,v3];
}

function bary_X463(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*SC*(4*area+a2*sqrt3);
   let v2 = SA*SC*(4*area+b2*sqrt3);
   let v3 = SA*SB*(4*area+c2*sqrt3);
   return [v1,v2,v3];
}

function bary_X464(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let SC2=SC*SC;
   /* end vars */
   let v1 = SA*(a2*(a+c)*(b+c)+SC2);
   let v2 = ((a+b)*b2*(a+c)+SA2)*SB;
   let v3 = ((a+b)*(b+c)*c2+SB2)*SC;
   return [v1,v2,v3];
}

function bary_X465(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = SA*(SB*SC+a2*area*sqrt3);
   let v2 = SB*(SA*SC+area*b2*sqrt3);
   let v3 = SC*(SA*SB+area*c2*sqrt3);
   return [v1,v2,v3];
}

function bary_X466(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = SA*(SB*SC-a2*area*sqrt3);
   let v2 = SB*(SA*SC-area*b2*sqrt3);
   let v3 = SC*(SA*SB-area*c2*sqrt3);
   return [v1,v2,v3];
}

function bary_X467(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*SC*((a2-SA)*SA+SB*SC)*(a2*SA+2*SB*SC);
   let v2 = SA*SC*((b2-SB)*SB+SA*SC)*(b2*SB+2*SA*SC);
   let v3 = SA*SB*(2*SA*SB+c2*SC)*(SA*SB+(c2-SC)*SC);
   return [v1,v2,v3];
}

function bary_X468(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (2*a2-b2-c2)*(a2+b2-c2)*(a2-b2+c2);
   let v2 = (a2+b2-c2)*(-a2+2*b2-c2)*(-a2+b2+c2);
   let v3 = (a2-b2+c2)*(-a2+b2+c2)*(-a2-b2+2*c2);
   return [v1,v2,v3];
}

function bary_X469(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (a2+a*b+a*c+b*c+2*SA)*SB*SC;
   let v2 = SA*(a*b+b2+a*c+b*c+2*SB)*SC;
   let v3 = SA*SB*(a*b+a*c+b*c+c2+2*SC);
   return [v1,v2,v3];
}

function bary_X470(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*SC*(2*area+SA*sqrt3);
   let v2 = SA*SC*(2*area+SB*sqrt3);
   let v3 = SA*SB*(2*area+SC*sqrt3);
   return [v1,v2,v3];
}

function bary_X471(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*SC*(-2*area+SA*sqrt3);
   let v2 = SA*SC*(-2*area+SB*sqrt3);
   let v3 = SA*SB*(-2*area+SC*sqrt3);
   return [v1,v2,v3];
}

function bary_X472(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let area=triAreaHeron(a,b,c);
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*SC*(-SA+2*area*sqrt3);
   let v2 = SA*SC*(-SB+2*area*sqrt3);
   let v3 = SA*SB*(-SC+2*area*sqrt3);
   return [v1,v2,v3];
}

function bary_X473(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let area=triAreaHeron(a,b,c);
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*SC*(SA+2*area*sqrt3);
   let v2 = SA*SC*(SB+2*area*sqrt3);
   let v3 = SA*SB*(SC+2*area*sqrt3);
   return [v1,v2,v3];
}

function bary_X474(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(b*c*(a+b+c)-a*SA);
   let v2 = b*(a*c*(a+b+c)-b*SB);
   let v3 = c*(a*b*(a+b+c)-c*SC);
   return [v1,v2,v3];
}

function bary_X475(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a3+a2*b-a*b2-b3+a2*c+2*a*b*c-b2*c-a*c2-b*c2-c3)*SB*SC;
   let v2 = (-a3-a2*b+a*b2+b3-a2*c+2*a*b*c+b2*c-a*c2-b*c2-c3)*SA*SC;
   let v3 = (-a3-a2*b-a*b2-b3-a2*c+2*a*b*c-b2*c+a*c2+b*c2+c3)*SA*SB;
   return [v1,v2,v3];
}

function bary_X476(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let b2=b*b;
   let b4=b2*b2;
   let c2=c*c;
   let a4=a2*a2;
   let c4=c2*c2;
   let a3=a2*a;
   let b6=b2*b4;
   let c3=c2*c;
   let a6=a2*a4;
   let c6=c2*c4;
   let b3=b2*b;
   /* end vars */
   let v1 = 1/(Math.pow(-(a2*b)+b3,2)-a4*c2+2*a2*c4-c6);
   let v2 = 1/(-a6+2*a4*b2-a2*b4+Math.pow(-(b2*c)+c3,2));
   let v3 = 1/(-b6+2*b4*c2+(a3-a*c2)*(a3-a*c2)-b2*c4);
   return [v1,v2,v3];
}

function bary_X477(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = 1/(a2*SA*(SA2-SB*SC)+SA2*(-3*SB2+4*SB*SC-3*SC2)+2*SB2*SC2);
   let v2 = 1/(b2*SB*(SB2-SA*SC)+SB2*(-3*SA2+4*SA*SC-3*SC2)+2*SA2*SC2);
   let v3 = 1/(2*SA2*SB2+(-3*SA2+4*SA*SB-3*SB2)*SC2+c2*SC*(-(SA*SB)+SC2));
   return [v1,v2,v3];
}

function bary_X478(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a2*(a+b-c)*(a-b+c)*(a*b*(a-b-c)*c+2*SB*SC);
   let v2 = b2*(a+b-c)*(-a+b+c)*(a*b*(-a+b-c)*c+2*SA*SC);
   let v3 = (a-b+c)*(-a+b+c)*c2*(a*b*c*(-a-b+c)+2*SA*SB);
   return [v1,v2,v3];
}

function bary_X479(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = Math.pow(-a+b+c,-3);
   let v2 = Math.pow(a-b+c,-3);
   let v3 = Math.pow(a+b-c,-3);
   return [v1,v2,v3];
}

function bary_X480(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*Math.pow(-a+b+c,3);
   let v2 = b2*Math.pow(a-b+c,3);
   let v3 = Math.pow(a+b-c,3)*c2;
   return [v1,v2,v3];
}

function bary_X481(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = a-(4*area)/(-a+b+c);
   let v2 = b-(4*area)/(a-b+c);
   let v3 = (-4*area)/(a+b-c)+c;
   return [v1,v2,v3];
}

function bary_X482(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = a+(4*area)/(-a+b+c);
   let v2 = b+(4*area)/(a-b+c);
   let v3 = (4*area)/(a+b-c)+c;
   return [v1,v2,v3];
}

function bary_X483(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosHalfC=cosHalfAngle(cosC);
   let cosQuarterC=cosHalfAngle(cosHalfC);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfB=cosHalfAngle(cosB);
   let cosQuarterB=cosHalfAngle(cosHalfB);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfA=cosHalfAngle(cosA);
   let cosQuarterA=cosHalfAngle(cosHalfA);
   let sinC=getSin(cosC);
   let secQuarterC=1/cosQuarterC;
   let sinB=getSin(cosB);
   let secQuarterB=1/cosQuarterB;
   let sinA=getSin(cosA);
   let secQuarterA=1/cosQuarterA;
   /* end vars */
   let v1 = secQuarterA*secQuarterA*sinA;
   let v2 = secQuarterB*secQuarterB*sinB;
   let v3 = secQuarterC*secQuarterC*sinC;
   return [v1,v2,v3];
}

function bary_X484(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3+a2*b-a*b2-b3+a2*c-a*b*c+b2*c-a*c2+b*c2-c3);
   let v2 = b*(-a3-a2*b+a*b2+b3+a2*c-a*b*c+b2*c+a*c2-b*c2-c3);
   let v3 = c*(-a3+a2*b+a*b2-b3-a2*c-a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X485(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = (2*area+SB)*(2*area+SC);
   let v2 = (2*area+SA)*(2*area+SC);
   let v3 = (2*area+SA)*(2*area+SB);
   return [v1,v2,v3];
}

function bary_X486(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = (-2*area+SB)*(-2*area+SC);
   let v2 = (-2*area+SA)*(-2*area+SC);
   let v3 = (-2*area+SA)*(-2*area+SB);
   return [v1,v2,v3];
}

function bary_X487(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let area=triAreaHeron(a,b,c);
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA-4*area*(-area+SA)-SB*SC;
   let v2 = b2*SB-4*area*(-area+SB)-SA*SC;
   let v3 = -(SA*SB)+c2*SC-4*area*(-area+SC);
   return [v1,v2,v3];
}

function bary_X488(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let area=triAreaHeron(a,b,c);
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA+4*area*(area+SA)-SB*SC;
   let v2 = b2*SB+4*area*(area+SB)-SA*SC;
   let v3 = -(SA*SB)+c2*SC+4*area*(area+SC);
   return [v1,v2,v3];
}

function bary_X489(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let area=triAreaHeron(a,b,c);
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA-2*area*SA-SB*SC;
   let v2 = -2*area*SB+b2*SB-SA*SC;
   let v3 = -(SA*SB)-2*area*SC+c2*SC;
   return [v1,v2,v3];
}

function bary_X490(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let area=triAreaHeron(a,b,c);
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA+2*area*SA-SB*SC;
   let v2 = 2*area*SB+b2*SB-SA*SC;
   let v3 = -(SA*SB)+2*area*SC+c2*SC;
   return [v1,v2,v3];
}

function bary_X491(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = -2*area+SA;
   let v2 = -2*area+SB;
   let v3 = -2*area+SC;
   return [v1,v2,v3];
}

function bary_X492(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = 2*area+SA;
   let v2 = 2*area+SB;
   let v3 = 2*area+SC;
   return [v1,v2,v3];
}

function bary_X493(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let c2=c*c;
   let S=2*area;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b2+S)*(c2+S);
   let v2 = b2*(a2+S)*(c2+S);
   let v3 = c2*(a2+S)*(b2+S);
   return [v1,v2,v3];
}

function bary_X494(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let c2=c*c;
   let S=2*area;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b2-S)*(c2-S);
   let v2 = b2*(a2-S)*(c2-S);
   let v3 = c2*(a2-S)*(b2-S);
   return [v1,v2,v3];
}

function bary_X495(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*b2-b4+4*a2*b*c+a2*c2+2*b2*c2-c4;
   let v2 = -a4+a2*b2+4*a*b2*c+2*a2*c2+b2*c2-c4;
   let v3 = -a4+2*a2*b2-b4+a2*c2+4*a*b*c2+b2*c2;
   return [v1,v2,v3];
}

function bary_X496(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*b2-b4-4*a2*b*c+a2*c2+2*b2*c2-c4;
   let v2 = -a4+a2*b2-4*a*b2*c+2*a2*c2+b2*c2-c4;
   let v3 = -a4+2*a2*b2-b4+a2*c2-4*a*b*c2+b2*c2;
   return [v1,v2,v3];
}

function bary_X497(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a-b-c)*(a2+b2-2*b*c+c2);
   let v2 = (-a+b-c)*(a2+b2-2*a*c+c2);
   let v3 = (-a-b+c)*(a2-2*a*b+b2+c2);
   return [v1,v2,v3];
}

function bary_X498(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4-2*a2*b2+b4-2*a2*b*c-2*a2*c2-2*b2*c2+c4;
   let v2 = a4-2*a2*b2+b4-2*a*b2*c-2*a2*c2-2*b2*c2+c4;
   let v3 = a4-2*a2*b2+b4-2*a2*c2-2*a*b*c2-2*b2*c2+c4;
   return [v1,v2,v3];
}

function bary_X499(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4-2*a2*b2+b4+2*a2*b*c-2*a2*c2-2*b2*c2+c4;
   let v2 = a4-2*a2*b2+b4+2*a*b2*c-2*a2*c2-2*b2*c2+c4;
   let v3 = a4-2*a2*b2+b4-2*a2*c2+2*a*b*c2-2*b2*c2+c4;
   return [v1,v2,v3];
}

function bary_X500(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a2*(a2-b2-b*c-c2)*(a2*b-b3+a2*c+2*a*b*c+b2*c+b*c2-c3);
   let v2 = b2*(-a2+b2-a*c-c2)*(-a3+a*b2+a2*c+2*a*b*c+b2*c+a*c2-c3);
   let v3 = c2*(-a2-a*b-b2+c2)*(-a3+a2*b+a*b2-b3+2*a*b*c+a*c2+b*c2);
   return [v1,v2,v3];
}

function bary_X501(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2*(a+b)*(a+c)*(a3+a2*b-a*b2-b3+a2*c-a*b*c-b2*c-a*c2-b*c2-c3);
   let v2 = (a+b)*b2*(b+c)*(-a3-a2*b+a*b2+b3-a2*c-a*b*c+b2*c-a*c2-b*c2-c3);
   let v3 = (a+c)*(b+c)*c2*(-a3-a2*b-a*b2-b3-a2*c-a*b*c-b2*c+a*c2+b*c2+c3);
   return [v1,v2,v3];
}

function bary_X502(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = 1/((a+b)*(a+c)*(a3+a2*b-a*b2-b3+a2*c-a*b*c-b2*c-a*c2-b*c2-c3));
   let v2 = 1/((a+b)*(b+c)*(-a3-a2*b+a*b2+b3-a2*c-a*b*c+b2*c-a*c2-b*c2-c3));
   let v3 = 1/((a+c)*(b+c)*(-a3-a2*b-a*b2-b3-a2*c-a*b*c-b2*c+a*c2+b*c2+c3));
   return [v1,v2,v3];
}

function bary_X503(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*(-Sqrt((b*c)/(s*sa))+Sqrt((a*c)/(s*sb))+Sqrt((a*b)/(s*sc)));
   let v2 = b*(Sqrt((b*c)/(s*sa))-Sqrt((a*c)/(s*sb))+Sqrt((a*b)/(s*sc)));
   let v3 = c*(Sqrt((b*c)/(s*sa))+Sqrt((a*c)/(s*sb))-Sqrt((a*b)/(s*sc)));
   return [v1,v2,v3];
}

function bary_X504(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*(c*Sqrt((sa*sb)/(a*b))+b*Sqrt((sa*sc)/(a*c))-a*Sqrt((sb*sc)/(b*c)));
   let v2 = b*(c*Sqrt((sa*sb)/(a*b))-b*Sqrt((sa*sc)/(a*c))+a*Sqrt((sb*sc)/(b*c)));
   let v3 = c*(-(c*Sqrt((sa*sb)/(a*b)))+b*Sqrt((sa*sc)/(a*c))+a*Sqrt((sb*sc)/(b*c)));
   return [v1,v2,v3];
}

function bary_X505(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a/(Sqrt((sa*sb)/(a*b))+Sqrt((sa*sc)/(a*c))-Sqrt((sb*sc)/(b*c)));
   let v2 = b/(Sqrt((sa*sb)/(a*b))-Sqrt((sa*sc)/(a*c))+Sqrt((sb*sc)/(b*c)));
   let v3 = c/(-Sqrt((sa*sb)/(a*b))+Sqrt((sa*sc)/(a*c))+Sqrt((sb*sc)/(b*c)));
   return [v1,v2,v3];
}

function bary_X506(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   /* end vars */
   let v1 = Math.pow(a,0.6666666666666666)/(Math.pow(s,0.3333333333333333)*Math.pow(sa,0.3333333333333333));
   let v2 = Math.pow(b,0.6666666666666666)/(Math.pow(s,0.3333333333333333)*Math.pow(sb,0.3333333333333333));
   let v3 = Math.pow(c,0.6666666666666666)/(Math.pow(s,0.3333333333333333)*Math.pow(sc,0.3333333333333333));
   return [v1,v2,v3];
}

function bary_X507(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   /* end vars */
   let v1 = Math.pow(a,0.75)/(Math.pow(s,0.25)*Math.pow(sa,0.25));
   let v2 = Math.pow(b,0.75)/(Math.pow(s,0.25)*Math.pow(sb,0.25));
   let v3 = Math.pow(c,0.75)/(Math.pow(s,0.25)*Math.pow(sc,0.25));
   return [v1,v2,v3];
}

function bary_X508(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = Sqrt(1/(s*sa));
   let v2 = Sqrt(1/(s*sb));
   let v3 = Sqrt(1/(s*sc));
   return [v1,v2,v3];
}

function bary_X509(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*Sqrt(1/(s*sa));
   let v2 = b*Sqrt(1/(s*sb));
   let v3 = c*Sqrt(1/(s*sc));
   return [v1,v2,v3];
}

function bary_X510(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(-Math.pow(a,1.5)+Math.pow(b,1.5)+Math.pow(c,1.5));
   let v2 = b*(Math.pow(a,1.5)-Math.pow(b,1.5)+Math.pow(c,1.5));
   let v3 = c*(Math.pow(a,1.5)+Math.pow(b,1.5)-Math.pow(c,1.5));
   return [v1,v2,v3];
}

function bary_X511(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*(-SA2+SB*SC);
   let v2 = b2*(-SB2+SA*SC);
   let v3 = c2*(SA*SB-SC2);
   return [v1,v2,v3];
}

function bary_X512(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b2-c2);
   let v2 = b2*(-a2+c2);
   let v3 = (a2-b2)*c2;
   return [v1,v2,v3];
}

function bary_X513(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b-c);
   let v2 = b*(-a+c);
   let v3 = (a-b)*c;
   return [v1,v2,v3];
}

function bary_X514(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b-c;
   let v2 = -a+c;
   let v3 = a-b;
   return [v1,v2,v3];
}

function bary_X515(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*SA-(b+c)*SB*SC;
   let v2 = b3*SB-(a+c)*SA*SC;
   let v3 = -((a+b)*SA*SB)+c3*SC;
   return [v1,v2,v3];
}

function bary_X516(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = 2*a3-a2*(b+c)-(b-c)*(b-c)*(b+c);
   let v2 = 2*b3-b2*(a+c)-(-a+c)*(-a+c)*(a+c);
   let v3 = -((a-b)*(a-b)*(a+b))-(a+b)*c2+2*c3;
   return [v1,v2,v3];
}

function bary_X517(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a*(a*b*c-b*SB-c*SC);
   let v2 = b*(a*b*c-a*SA-c*SC);
   let v3 = c*(a*b*c-a*SA-b*SB);
   return [v1,v2,v3];
}

function bary_X518(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(a*b-b2+a*c-c2);
   let v2 = b*(-a2+a*b+b*c-c2);
   let v3 = c*(-a2-b2+a*c+b*c);
   return [v1,v2,v3];
}

function bary_X519(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 2*a-b-c;
   let v2 = -a+2*b-c;
   let v3 = -a-b+2*c;
   return [v1,v2,v3];
}

function bary_X520(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*SA2*(-SB+SC);
   let v2 = b2*SB2*(SA-SC);
   let v3 = c2*(-SA+SB)*SC2;
   return [v1,v2,v3];
}

function bary_X521(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(a-b-c)*(b-c)*SA;
   let v2 = b*(-a+b-c)*(-a+c)*SB;
   let v3 = (a-b)*c*(-a-b+c)*SC;
   return [v1,v2,v3];
}

function bary_X522(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a-b-c)*(b-c);
   let v2 = (-a+b-c)*(-a+c);
   let v3 = (a-b)*(-a-b+c);
   return [v1,v2,v3];
}

function bary_X523(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = b2-c2;
   let v2 = -a2+c2;
   let v3 = a2-b2;
   return [v1,v2,v3];
}

function bary_X524(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 2*a2-b2-c2;
   let v2 = -a2+2*b2-c2;
   let v3 = -a2-b2+2*c2;
   return [v1,v2,v3];
}

function bary_X525(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (b2-c2)*SA;
   let v2 = (-a2+c2)*SB;
   let v3 = (a2-b2)*SC;
   return [v1,v2,v3];
}

function bary_X526(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let b2=b*b;
   let b4=b2*b2;
   let c2=c*c;
   let a4=a2*a2;
   let c4=c2*c2;
   let a3=a2*a;
   let b6=b2*b4;
   let c3=c2*c;
   let a6=a2*a4;
   let c6=c2*c4;
   let b3=b2*b;
   /* end vars */
   let v1 = a2*(Math.pow(-(a2*b)+b3,2)-a4*c2+2*a2*c4-c6);
   let v2 = b2*(-a6+2*a4*b2-a2*b4+Math.pow(-(b2*c)+c3,2));
   let v3 = c2*(-b6+2*b4*c2+(a3-a*c2)*(a3-a*c2)-b2*c4);
   return [v1,v2,v3];
}

function bary_X527(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2+2*b*c-a*(b+c)-2*SA;
   let v2 = b2+2*a*c-b*(a+c)-2*SB;
   let v3 = 2*a*b-(a+b)*c+c2-2*SC;
   return [v1,v2,v3];
}

function bary_X528(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = 2*a3-2*a2*b+a*b2-b3-2*a2*c+b2*c+a*c2+b*c2-c3;
   let v2 = -a3+a2*b-2*a*b2+2*b3+a2*c-2*b2*c+a*c2+b*c2-c3;
   let v3 = -a3+a2*b+a*b2-b3+a2*c+b2*c-2*a*c2-2*b*c2+2*c3;
   return [v1,v2,v3];
}

function bary_X529(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(-(b*c*(-2*a+b+c))-a*SA)+2*SB*SC;
   let v2 = b*(-(a*c*(a-2*b+c))-b*SB)+2*SA*SC;
   let v3 = 2*SA*SB+c*(-(a*b*(a+b-2*c))-c*SC);
   return [v1,v2,v3];
}

function bary_X530(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 3*(a2*SA-2*SB*SC)+2*area*(-a2+2*SA)*sqrt3;
   let v2 = 3*(b2*SB-2*SA*SC)+2*area*(-b2+2*SB)*sqrt3;
   let v3 = 3*(-2*SA*SB+c2*SC)+2*area*(-c2+2*SC)*sqrt3;
   return [v1,v2,v3];
}

function bary_X531(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 3*(a2*SA-2*SB*SC)-2*area*(-a2+2*SA)*sqrt3;
   let v2 = 3*(b2*SB-2*SA*SC)-2*area*(-b2+2*SB)*sqrt3;
   let v3 = 3*(-2*SA*SB+c2*SC)-2*area*(-c2+2*SC)*sqrt3;
   return [v1,v2,v3];
}

function bary_X532(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA-2*SB*SC+2*area*(-a2+2*SA)*sqrt3;
   let v2 = b2*SB-2*SA*SC+2*area*(-b2+2*SB)*sqrt3;
   let v3 = -2*SA*SB+c2*SC+2*area*(-c2+2*SC)*sqrt3;
   return [v1,v2,v3];
}

function bary_X533(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA-2*SB*SC-2*area*(-a2+2*SA)*sqrt3;
   let v2 = b2*SB-2*SA*SC-2*area*(-b2+2*SB)*sqrt3;
   let v3 = -2*SA*SB+c2*SC-2*area*(-c2+2*SC)*sqrt3;
   return [v1,v2,v3];
}

function bary_X534(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let c5=c2*c3;
   let b5=b2*b3;
   let a5=a2*a3;
   /* end vars */
   let v1 = -2*a5+b5+c5-c*(SA-SB)*(SA-SB)-b*(SA-SC)*(SA-SC)+2*a*(SB-SC)*(SB-SC);
   let v2 = a5-2*b5+c5-c*(-SA+SB)*(-SA+SB)-a*(SB-SC)*(SB-SC)+2*b*(-SA+SC)*(-SA+SC);
   let v3 = a5+b5-2*c5+2*c*(SA-SB)*(SA-SB)-b*(-SA+SC)*(-SA+SC)-a*(-SB+SC)*(-SB+SC);
   return [v1,v2,v3];
}

function bary_X535(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(b*c*(-2*a+b+c)+2*a*SA)-4*SB*SC;
   let v2 = b*(a*c*(a-2*b+c)+2*b*SB)-4*SA*SC;
   let v3 = -4*SA*SB+c*(a*b*(a+b-2*c)+2*c*SC);
   return [v1,v2,v3];
}

function bary_X536(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*b+a*c-2*b*c;
   let v2 = a*b-2*a*c+b*c;
   let v3 = -2*a*b+a*c+b*c;
   return [v1,v2,v3];
}

function bary_X537(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = 2*a3-b3-c3+4*a*SA-2*b*SB-2*c*SC;
   let v2 = -a3+2*b3-c3-2*a*SA+4*b*SB-2*c*SC;
   let v3 = -a3-b3+2*c3-2*a*SA-2*b*SB+4*c*SC;
   return [v1,v2,v3];
}

function bary_X538(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = -2*SA2+SB2+SC2;
   let v2 = SA2-2*SB2+SC2;
   let v3 = SA2+SB2-2*SC2;
   return [v1,v2,v3];
}

function bary_X539(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let c4=c2*c2;
   let b4=b2*b2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let a4=a2*a2;
   /* end vars */
   let v1 = SA*(3*a4*SA2+SB*SC*(-3*SB2+2*SB*SC-3*SC2)-a2*SA*(3*SB2-2*SB*SC+3*SC2));
   let v2 = SB*(3*b4*SB2+SA*SC*(-3*SA2+2*SA*SC-3*SC2)-b2*SB*(3*SA2-2*SA*SC+3*SC2));
   let v3 = SC*(SA*SB*(-3*SA2+2*SA*SB-3*SB2)-c2*(3*SA2-2*SA*SB+3*SB2)*SC+3*c4*SC2);
   return [v1,v2,v3];
}

function bary_X540(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   /* end vars */
   let v1 = -2*a4-2*a3*b+a*b3+b4-2*a3*c-2*a2*b*c+a*b2*c+b3*c+a*b*c2+a*c3+b*c3+c4;
   let v2 = a4+a3*b-2*a*b3-2*b4+a3*c+a2*b*c-2*a*b2*c-2*b3*c+a*b*c2+a*c3+b*c3+c4;
   let v3 = a4+a3*b+a*b3+b4+a3*c+a2*b*c+a*b2*c+b3*c-2*a*b*c2-2*a*c3-2*b*c3-2*c4;
   return [v1,v2,v3];
}

function bary_X541(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c4=c2*c2;
   let b4=b2*b2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let a4=a2*a2;
   /* end vars */
   let v1 = -(a4*Math.pow(SA,3))+SA*SB*SC*(SB2+10*SB*SC+SC2)+a2*(5*SA2*(SB-SC)*(SB-SC)-4*SB2*SC2);
   let v2 = -(b4*Math.pow(SB,3))+SA*SB*SC*(SA2+10*SA*SC+SC2)+b2*(5*SB2*(-SA+SC)*(-SA+SC)-4*SA2*SC2);
   let v3 = SA*SB*(SA2+10*SA*SB+SB2)*SC-c4*Math.pow(SC,3)+c2*(-4*SA2*SB2+5*(SA-SB)*(SA-SB)*SC2);
   return [v1,v2,v3];
}

function bary_X542(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = -(a2*(SA2+SB*SC))+2*SA*(SB2+SC2);
   let v2 = -(b2*(SB2+SA*SC))+2*SB*(SA2+SC2);
   let v3 = 2*(SA2+SB2)*SC-c2*(SA*SB+SC2);
   return [v1,v2,v3];
}

function bary_X543(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = 2*(a2-SA)*SA+SB2-4*SB*SC+SC2;
   let v2 = SA2+2*(b2-SB)*SB-4*SA*SC+SC2;
   let v3 = SA2-4*SA*SB+SB2+2*(c2-SC)*SC;
   return [v1,v2,v3];
}

function bary_X544(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   /* end vars */
   let v1 = 2*a4-2*a3*b+a*b3-b4-2*a3*c+2*a2*b*c-a*b2*c+b3*c-a*b*c2+a*c3+b*c3-c4;
   let v2 = -a4+a3*b-2*a*b3+2*b4+a3*c-a2*b*c+2*a*b2*c-2*b3*c-a*b*c2+a*c3+b*c3-c4;
   let v3 = -a4+a3*b+a*b3-b4+a3*c-a2*b*c-a*b2*c+b3*c+2*a*b*c2-2*a*c3-2*b*c3+2*c4;
   return [v1,v2,v3];
}

function bary_X545(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (a-2*b)*(a-2*c)-2*SA;
   let v2 = (-2*a+b)*(b-2*c)-2*SB;
   let v3 = (-2*a+c)*(-2*b+c)-2*SC;
   return [v1,v2,v3];
}

function bary_X546(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA+6*SB*SC;
   let v2 = b2*SB+6*SA*SC;
   let v3 = 6*SA*SB+c2*SC;
   return [v1,v2,v3];
}

function bary_X547(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 7*a2*SA+10*SB*SC;
   let v2 = 7*b2*SB+10*SA*SC;
   let v3 = 10*SA*SB+7*c2*SC;
   return [v1,v2,v3];
}

function bary_X548(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 5*a2*SA-2*SB*SC;
   let v2 = 5*b2*SB-2*SA*SC;
   let v3 = -2*SA*SB+5*c2*SC;
   return [v1,v2,v3];
}

function bary_X549(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 5*a2*SA+2*SB*SC;
   let v2 = 5*b2*SB+2*SA*SC;
   let v3 = 2*SA*SB+5*c2*SC;
   return [v1,v2,v3];
}

function bary_X550(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 3*a2*SA-2*SB*SC;
   let v2 = 3*b2*SB-2*SA*SC;
   let v3 = -2*SA*SB+3*c2*SC;
   return [v1,v2,v3];
}

function bary_X551(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 4*a+b+c;
   let v2 = a+4*b+c;
   let v3 = a+b+4*c;
   return [v1,v2,v3];
}

function bary_X552(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/((b+c)*(b+c)*(-a+b+c));
   let v2 = 1/((a+c)*(a+c)*(a-b+c));
   let v3 = 1/((a+b)*(a+b)*(a+b-c));
   return [v1,v2,v3];
}

function bary_X553(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (2*a+b+c)/(-a+b+c);
   let v2 = (a+2*b+c)/(a-b+c);
   let v3 = (a+b+2*c)/(a+b-c);
   return [v1,v2,v3];
}

function bary_X554(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   /* end vars */
   let v1 = 1/(sa*(sb*sc+area*sqrt3));
   let v2 = 1/(sb*(sa*sc+area*sqrt3));
   let v3 = 1/(sc*(sa*sb+area*sqrt3));
   return [v1,v2,v3];
}

function bary_X555(orbit, [a,b,c]) {
   /* begin vars */
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*Sqrt(b*(a+b-c)*c*(a-b+c));
   let v2 = (a+b-c)*(-a+b+c)*Sqrt(a*(a+b-c)*c*(-a+b+c));
   let v3 = (a-b+c)*(-a+b+c)*Sqrt(a*b*(a-b+c)*(-a+b+c));
   return [v1,v2,v3];
}

function bary_X556(orbit, [a,b,c]) {
   /* begin vars */
   let sa=(b+c-a)/2;
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = Sqrt((b*c)/(sb*sc));
   let v2 = Sqrt((a*c)/(sa*sc));
   let v3 = Sqrt((a*b)/(sa*sb));
   return [v1,v2,v3];
}

function bary_X557(orbit, [a,b,c]) {
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
   let v1 = cosQuarterA*cosQuarterA;
   let v2 = cosQuarterB*cosQuarterB;
   let v3 = cosQuarterC*cosQuarterC;
   return [v1,v2,v3];
}

function bary_X558(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let cosHalfC=cosHalfAngle(cosC);
   let cosB=lawOfCosines(b,a,c);
   let cosHalfB=cosHalfAngle(cosB);
   let cosA=lawOfCosines(a,b,c);
   let cosHalfA=cosHalfAngle(cosA);
   let sinQuarterC=sinHalfAngle(cosHalfC);
   let sinQuarterB=sinHalfAngle(cosHalfB);
   let sinQuarterA=sinHalfAngle(cosHalfA);
   /* end vars */
   let v1 = sinQuarterA*sinQuarterA;
   let v2 = sinQuarterB*sinQuarterB;
   let v3 = sinQuarterC*sinQuarterC;
   return [v1,v2,v3];
}

function bary_X559(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let area=triAreaHeron(a,b,c);
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(b*c-SA+2*area*sqrt3);
   let v2 = b*(a*c-SB+2*area*sqrt3);
   let v3 = c*(a*b-SC+2*area*sqrt3);
   return [v1,v2,v3];
}

function bary_X560(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let a5=a2*a3;
   /* end vars */
   let v1 = a5;
   let v2 = b5;
   let v3 = c5;
   return [v1,v2,v3];
}

function bary_X561(orbit, [a,b,c]) {
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
   return [v1,v2,v3];
}

function bary_X562(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let area=triAreaHeron(a,b,c);
   let SA2=SA*SA;
   /* end vars */
   let v1 = (b2*c2-4*SA2)/(SA*(-12*area*area+SA2));
   let v2 = (a2*c2-4*SB2)/(SB*(-12*area*area+SB2));
   let v3 = (a2*b2-4*SC2)/(SC*(-12*area*area+SC2));
   return [v1,v2,v3];
}

function bary_X563(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let c3=c2*c;
   let SB=(c2+a2-b2)/2;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   let SC2=SC*SC;
   let c5=c2*c3;
   let SB2=SB*SB;
   let b5=b2*b3;
   let SA2=SA*SA;
   let area=triAreaHeron(a,b,c);
   let a5=a2*a3;
   /* end vars */
   let v1 = a5*SA*(-4*area*area+SA2);
   let v2 = b5*SB*(-4*area*area+SB2);
   let v3 = c5*SC*(-4*area*area+SC2);
   return [v1,v2,v3];
}

function bary_X564(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c4=c2*c2;
   let SB2=SB*SB;
   let b4=b2*b2;
   let area=triAreaHeron(a,b,c);
   let SA2=SA*SA;
   let a4=a2*a2;
   /* end vars */
   let v1 = b*c*(a4*SA2-a2*SA*(SB-SC)*(SB-SC)+SB*(16*area*area-(SB-SC)*(SB-SC))*SC);
   let v2 = a*c*(b4*SB2-b2*SB*(-SA+SC)*(-SA+SC)+SA*SC*(16*area*area-(-SA+SC)*(-SA+SC)));
   let v3 = a*b*(SA*(16*area*area-(SA-SB)*(SA-SB))*SB-c2*(SA-SB)*(SA-SB)*SC+c4*SC2);
   return [v1,v2,v3];
}

function bary_X565(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c4=c2*c2;
   let SB2=SB*SB;
   let b4=b2*b2;
   let SA2=SA*SA;
   let a4=a2*a2;
   /* end vars */
   let v1 = b2*c2*(a2*SA+2*SB*SC)*(a4*SA2-a2*SA*(SB-3*SC)*(3*SB-SC)-SB*(SB-3*SC)*(3*SB-SC)*SC);
   let v2 = a2*c2*(b2*SB+2*SA*SC)*(b4*SB2-b2*SB*(-3*SA+SC)*(-SA+3*SC)-SA*SC*(-3*SA+SC)*(-SA+3*SC));
   let v3 = a2*b2*(2*SA*SB+c2*SC)*(-(SA*(SA-3*SB)*(3*SA-SB)*SB)-c2*(SA-3*SB)*(3*SA-SB)*SC+c4*SC2);
   return [v1,v2,v3];
}

function bary_X566(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*(a2*(5*SA2+SB*SC)+SA*(SB2+10*SB*SC+SC2));
   let v2 = b2*(b2*(5*SB2+SA*SC)+SB*(SA2+10*SA*SC+SC2));
   let v3 = c2*((SA2+10*SA*SB+SB2)*SC+c2*(SA*SB+5*SC2));
   return [v1,v2,v3];
}

function bary_X567(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(a8-3*a6*b2+3*a4*b4-a2*b6-3*a6*c2+3*a4*b2*c2+2*a2*b4*c2-2*b6*c2+3*a4*c4+2*a2*b2*c4+4*b4*c4-a2*c6-2*b2*c6);
   let v2 = b2*(-(a6*b2)+3*a4*b4-3*a2*b6+b8-2*a6*c2+2*a4*b2*c2+3*a2*b4*c2-3*b6*c2+4*a4*c4+2*a2*b2*c4+3*b4*c4-2*a2*c6-b2*c6);
   let v3 = c2*(-2*a6*b2+4*a4*b4-2*a2*b6-a6*c2+2*a4*b2*c2+2*a2*b4*c2-b6*c2+3*a4*c4+3*a2*b2*c4+3*b4*c4-3*a2*c6-3*b2*c6+c8);
   return [v1,v2,v3];
}

function bary_X568(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a8=a2*a6;
   let c8=c2*c6;
   let b8=b2*b6;
   /* end vars */
   let v1 = a2*(a6*b2-3*a4*b4+3*a2*b6-b8+a6*c2-a4*b2*c2-2*a2*b4*c2+2*b6*c2-3*a4*c4-2*a2*b2*c4-2*b4*c4+3*a2*c6+2*b2*c6-c8);
   let v2 = b2*(-a8+3*a6*b2-3*a4*b4+a2*b6+2*a6*c2-2*a4*b2*c2-a2*b4*c2+b6*c2-2*a4*c4-2*a2*b2*c4-3*b4*c4+2*a2*c6+3*b2*c6-c8);
   let v3 = c2*(-a8+2*a6*b2-2*a4*b4+2*a2*b6-b8+3*a6*c2-2*a4*b2*c2-2*a2*b4*c2+3*b6*c2-3*a4*c4-a2*b2*c4-3*b4*c4+a2*c6+b2*c6);
   return [v1,v2,v3];
}

function bary_X569(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(a8-3*a6*b2+3*a4*b4-a2*b6-3*a6*c2+2*a4*b2*c2+3*a2*b4*c2-2*b6*c2+3*a4*c4+3*a2*b2*c4+4*b4*c4-a2*c6-2*b2*c6);
   let v2 = b2*(-(a6*b2)+3*a4*b4-3*a2*b6+b8-2*a6*c2+3*a4*b2*c2+2*a2*b4*c2-3*b6*c2+4*a4*c4+3*a2*b2*c4+3*b4*c4-2*a2*c6-b2*c6);
   let v3 = c2*(-2*a6*b2+4*a4*b4-2*a2*b6-a6*c2+3*a4*b2*c2+3*a2*b4*c2-b6*c2+3*a4*c4+2*a2*b2*c4+3*b4*c4-3*a2*c6-3*b2*c6+c8);
   return [v1,v2,v3];
}

function bary_X570(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let a4=a2*a2;
   let c2=c*c;
   let c4=c2*c2;
   let b2=b*b;
   let b4=b2*b2;
   let a6=a2*a4;
   let c6=c2*c4;
   let b6=b2*b4;
   /* end vars */
   let v1 = a2*(a4*b2-2*a2*b4+b6+a4*c2-2*a2*b2*c2-b4*c2-2*a2*c4-b2*c4+c6);
   let v2 = b2*(a6-2*a4*b2+a2*b4-a4*c2-2*a2*b2*c2+b4*c2-a2*c4-2*b2*c4+c6);
   let v3 = c2*(a6-a4*b2-a2*b4+b6-2*a4*c2-2*a2*b2*c2-2*b4*c2+a2*c4+b2*c4);
   return [v1,v2,v3];
}

function bary_X571(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c4=c2*c2;
   let SB2=SB*SB;
   let b4=b2*b2;
   let SA2=SA*SA;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*SA*(a4*SA2-b4*SB2-c4*SC2);
   let v2 = b4*SB*(-(a4*SA2)+b4*SB2-c4*SC2);
   let v3 = c4*SC*(-(a4*SA2)-b4*SB2+c4*SC2);
   return [v1,v2,v3];
}

function bary_X572(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*(-(b*c*(-a+b+c))-2*a*SA);
   let v2 = b2*(-(a*c*(a-b+c))-2*b*SB);
   let v3 = c2*(-(a*b*(a+b-c))-2*c*SC);
   return [v1,v2,v3];
}

function bary_X573(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a2*(a2*b-b3+a2*c-a*b*c-c3);
   let v2 = b2*(-a3+a*b2-a*b*c+b2*c-c3);
   let v3 = c2*(-a3-b3-a*b*c+a*c2+b*c2);
   return [v1,v2,v3];
}

function bary_X574(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(-a2+2*b2+2*c2);
   let v2 = b2*(2*a2-b2+2*c2);
   let v3 = (2*a2+2*b2-c2)*c2;
   return [v1,v2,v3];
}

function bary_X575(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*(4*a2*SA+SA2+3*SB*SC);
   let v2 = b2*(4*b2*SB+SB2+3*SA*SC);
   let v3 = c2*(3*SA*SB+4*c2*SC+SC2);
   return [v1,v2,v3];
}

function bary_X576(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4-3*a2*b2+2*b4-3*a2*c2-2*b2*c2+2*c4);
   let v2 = b2*(2*a4-3*a2*b2+b4-2*a2*c2-3*b2*c2+2*c4);
   let v3 = c2*(2*a4-2*a2*b2+2*b4-3*a2*c2-3*b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X577(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c4=c2*c2;
   let SB2=SB*SB;
   let b4=b2*b2;
   let SA2=SA*SA;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*SA2;
   let v2 = b4*SB2;
   let v3 = c4*SC2;
   return [v1,v2,v3];
}

function bary_X578(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a2=a*a;
   let a4=a2*a2;
   let a6=a2*a4;
   let c8=c2*c6;
   let b8=b2*b6;
   let a8=a2*a6;
   /* end vars */
   let v1 = a2*(a8-3*a6*b2+3*a4*b4-a2*b6-3*a6*c2+4*a4*b2*c2+a2*b4*c2-2*b6*c2+3*a4*c4+a2*b2*c4+4*b4*c4-a2*c6-2*b2*c6);
   let v2 = b2*(-(a6*b2)+3*a4*b4-3*a2*b6+b8-2*a6*c2+a4*b2*c2+4*a2*b4*c2-3*b6*c2+4*a4*c4+a2*b2*c4+3*b4*c4-2*a2*c6-b2*c6);
   let v3 = c2*(-2*a6*b2+4*a4*b4-2*a2*b6-a6*c2+a4*b2*c2+a2*b4*c2-b6*c2+3*a4*c4+4*a2*b2*c4+3*b4*c4-3*a2*c6-3*b2*c6+c8);
   return [v1,v2,v3];
}

function bary_X579(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a2*(a2*b-b3+a2*c+a*b*c-c3);
   let v2 = b2*(-a3+a*b2+a*b*c+b2*c-c3);
   let v3 = c2*(-a3-b3+a*b*c+a*c2+b*c2);
   return [v1,v2,v3];
}

function bary_X580(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2*(a5-2*a3*b2+a*b4-a3*b*c-a2*b2*c+a*b3*c+b4*c-2*a3*c2-a2*b*c2-b3*c2+a*b*c3-b2*c3+a*c4+b*c4);
   let v2 = b2*(a4*b-2*a2*b3+b5+a4*c+a3*b*c-a2*b2*c-a*b3*c-a3*c2-a*b2*c2-2*b3*c2-a2*c3+a*b*c3+a*c4+b*c4);
   let v3 = c2*(a4*b-a3*b2-a2*b3+a*b4+a4*c+a3*b*c+a*b3*c+b4*c-a2*b*c2-a*b2*c2-2*a2*c3-a*b*c3-2*b2*c3+c5);
   return [v1,v2,v3];
}

function bary_X581(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   let c5=c2*c3;
   let b5=b2*b3;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2*(a4*b-2*a2*b3+b5+a4*c+a3*b*c-a2*b2*c-a*b3*c-a2*b*c2-2*a*b2*c2-b3*c2-2*a2*c3-a*b*c3-b2*c3+c5);
   let v2 = b2*(a5-2*a3*b2+a*b4-a3*b*c-a2*b2*c+a*b3*c+b4*c-a3*c2-2*a2*b*c2-a*b2*c2-a2*c3-a*b*c3-2*b2*c3+c5);
   let v3 = c2*(a5-a3*b2-a2*b3+b5-a3*b*c-2*a2*b2*c-a*b3*c-2*a3*c2-a2*b*c2-a*b2*c2-2*b3*c2+a*b*c3+a*c4+b*c4);
   return [v1,v2,v3];
}

function bary_X582(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2*(a5-2*a3*b2+a*b4-2*a3*b*c-a2*b2*c+2*a*b3*c+b4*c-2*a3*c2-a2*b*c2-b3*c2+2*a*b*c3-b2*c3+a*c4+b*c4);
   let v2 = b2*(a4*b-2*a2*b3+b5+a4*c+2*a3*b*c-a2*b2*c-2*a*b3*c-a3*c2-a*b2*c2-2*b3*c2-a2*c3+2*a*b*c3+a*c4+b*c4);
   let v3 = c2*(a4*b-a3*b2-a2*b3+a*b4+a4*c+2*a3*b*c+2*a*b3*c+b4*c-a2*b*c2-a*b2*c2-2*a2*c3-2*a*b*c3-2*b2*c3+c5);
   return [v1,v2,v3];
}

function bary_X583(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a2*(a2*b-b3+a2*c+2*a*b*c-c3);
   let v2 = b2*(-a3+a*b2+2*a*b*c+b2*c-c3);
   let v3 = c2*(-a3-b3+2*a*b*c+a*c2+b*c2);
   return [v1,v2,v3];
}

function bary_X584(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2*(a3-a*b2-2*a*b*c-b2*c-a*c2-b*c2);
   let v2 = b2*(-(a2*b)+b3-a2*c-2*a*b*c-a*c2-b*c2);
   let v3 = c2*(-(a2*b)-a*b2-a2*c-2*a*b*c-b2*c+c3);
   return [v1,v2,v3];
}

function bary_X585(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = -a+b+2*area*(-(1/a)+1/b+1/c)+c;
   let v2 = a-b+2*area*(1/a-1/b+1/c)+c;
   let v3 = a+b+2*area*(1/a+1/b-1/c)-c;
   return [v1,v2,v3];
}

function bary_X586(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = -a+b-2*area*(-(1/a)+1/b+1/c)+c;
   let v2 = a-b-2*area*(1/a-1/b+1/c)+c;
   let v3 = a+b-2*area*(1/a+1/b-1/c)-c;
   return [v1,v2,v3];
}

function bary_X587(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let SA=(b2+c2-a2)/2;
   let c3=c2*c;
   let b3=b2*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = area*(2*a-2*(b+c))*SB*SC+SB*SC*(b3+c3+2*a*SA+b*SA+c*SA-c*SB-b*SC);
   let v2 = area*(2*b-2*(a+c))*SA*SC+SA*SC*(a3+c3-c*SA+a*SB+2*b*SB+c*SB-a*SC);
   let v3 = area*(-2*(a+b)+2*c)*SA*SB+SA*SB*(a3+b3-b*SA-a*SB+a*SC+b*SC+2*c*SC);
   return [v1,v2,v3];
}

function bary_X588(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let area=triAreaHeron(a,b,c);
   let a2=a*a;
   /* end vars */
   let v1 = a2/(a2+4*area);
   let v2 = b2/(4*area+b2);
   let v3 = c2/(4*area+c2);
   return [v1,v2,v3];
}

function bary_X589(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let area=triAreaHeron(a,b,c);
   let a2=a*a;
   /* end vars */
   let v1 = a2/(a2-4*area);
   let v2 = b2/(-4*area+b2);
   let v3 = c2/(-4*area+c2);
   return [v1,v2,v3];
}

function bary_X590(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let area=triAreaHeron(a,b,c);
   let a2=a*a;
   /* end vars */
   let v1 = a2+4*area;
   let v2 = 4*area+b2;
   let v3 = 4*area+c2;
   return [v1,v2,v3];
}

function bary_X591(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 2*a2-b2-c2-2*S;
   let v2 = -a2+2*b2-c2-2*S;
   let v3 = -a2-b2+2*c2-2*S;
   return [v1,v2,v3];
}

function bary_X592(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2/(2*SB*(a2+SB)*SC*(a2+SC)+a2*SA*(SA2+3*SB2+17*SB*SC+3*SC2)+SA2*(7*SB2+16*SB*SC+7*SC2));
   let v2 = b2/(2*SA*(b2+SA)*SC*(b2+SC)+b2*SB*(3*SA2+SB2+17*SA*SC+3*SC2)+SB2*(7*SA2+16*SA*SC+7*SC2));
   let v3 = c2/(2*SA*(c2+SA)*SB*(c2+SB)+(7*SA2+16*SA*SB+7*SB2)*SC2+c2*SC*(3*SA2+17*SA*SB+3*SB2+SC2));
   return [v1,v2,v3];
}

function bary_X593(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*a/(b+c)*(b+c);
   let v2 = b*b/(a+c)*(a+c);
   let v3 = c*c/(a+b)*(a+b);
   return [v1,v2,v3];
}

function bary_X594(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b+c)*(b+c);
   let v2 = (a+c)*(a+c);
   let v3 = (a+b)*(a+b);
   return [v1,v2,v3];
}

function bary_X595(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a2+a*b+a*c-b*c);
   let v2 = b2*(a*b+b2-a*c+b*c);
   let v3 = c2*(-(a*b)+a*c+b*c+c2);
   return [v1,v2,v3];
}

function bary_X596(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 1/(a2+a*b+a*c-b*c);
   let v2 = 1/(a*b+b2-a*c+b*c);
   let v3 = 1/(-(a*b)+a*c+b*c+c2);
   return [v1,v2,v3];
}

function bary_X597(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 4*a2+b2+c2;
   let v2 = a2+4*b2+c2;
   let v3 = a2+b2+4*c2;
   return [v1,v2,v3];
}

function bary_X598(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 1/(a2-2*b2-2*c2);
   let v2 = 1/(-2*a2+b2-2*c2);
   let v3 = 1/(-2*a2-2*b2+c2);
   return [v1,v2,v3];
}

function bary_X599(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2-2*b2-2*c2;
   let v2 = -2*a2+b2-2*c2;
   let v3 = -2*a2-2*b2+c2;
   return [v1,v2,v3];
}

function bary_X600(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let c2=c*c;
   let b2=b*b;
   let S=2*area;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b*c+2*S)*(a2*b*c-a*b2*c-a*b*c2+2*(a2-b2-c2)*S);
   let v2 = b2*(a*c+2*S)*(-(a2*b*c)+a*b2*c-a*b*c2+2*(-a2+b2-c2)*S);
   let v3 = c2*(a*b+2*S)*(-(a2*b*c)-a*b2*c+a*b*c2+2*(-a2-b2+c2)*S);
   return [v1,v2,v3];
}

function bary_X601(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let c3=c2*c;
   let SB=(c2+a2-b2)/2;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(4*area*area+b*c*SA);
   let v2 = b3*(4*area*area+a*c*SB);
   let v3 = c3*(4*area*area+a*b*SC);
   return [v1,v2,v3];
}

function bary_X602(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let c3=c2*c;
   let SB=(c2+a2-b2)/2;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(-4*area*area+b*c*SA);
   let v2 = b3*(-4*area*area+a*c*SB);
   let v3 = c3*(-4*area*area+a*b*SC);
   return [v1,v2,v3];
}

function bary_X603(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let c3=c2*c;
   let SB=(c2+a2-b2)/2;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(a+b-c)*(a-b+c)*SA;
   let v2 = b3*(a+b-c)*(-a+b+c)*SB;
   let v3 = (a-b+c)*(-a+b+c)*c3*SC;
   return [v1,v2,v3];
}

function bary_X604(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(a+b-c)*(a-b+c);
   let v2 = b3*(a+b-c)*(-a+b+c);
   let v3 = (a-b+c)*(-a+b+c)*c3;
   return [v1,v2,v3];
}

function bary_X605(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let area=triAreaHeron(a,b,c);
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(2*area+b*c);
   let v2 = b3*(2*area+a*c);
   let v3 = (2*area+a*b)*c3;
   return [v1,v2,v3];
}

function bary_X606(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let area=triAreaHeron(a,b,c);
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(-2*area+b*c);
   let v2 = b3*(-2*area+a*c);
   let v3 = (-2*area+a*b)*c3;
   return [v1,v2,v3];
}

function bary_X607(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a2*(a-b-c)*SB*SC;
   let v2 = b2*(-a+b-c)*SA*SC;
   let v3 = (-a-b+c)*c2*SA*SB;
   return [v1,v2,v3];
}

function bary_X608(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a2*(a+b-c)*(a-b+c)*SB*SC;
   let v2 = b2*(a+b-c)*(-a+b+c)*SA*SC;
   let v3 = (a-b+c)*(-a+b+c)*c2*SA*SB;
   return [v1,v2,v3];
}

function bary_X609(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(2*a2+b*c);
   let v2 = b2*(2*b2+a*c);
   let v3 = c2*(a*b+2*c2);
   return [v1,v2,v3];
}

function bary_X610(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(-(a2*SA)+SB*SC);
   let v2 = b*(-(b2*SB)+SA*SC);
   let v3 = c*(SA*SB-c2*SC);
   return [v1,v2,v3];
}

function bary_X611(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let area=triAreaHeron(a,b,c);
   let a2=a*a;
   /* end vars */
   let v1 = a2*(8*area*area+b*c*(a2+b2+c2));
   let v2 = b2*(8*area*area+a*c*(a2+b2+c2));
   let v3 = c2*(8*area*area+a*b*(a2+b2+c2));
   return [v1,v2,v3];
}

function bary_X612(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2+b2+2*b*c+c2);
   let v2 = b*(a2+b2+2*a*c+c2);
   let v3 = c*(a2+2*a*b+b2+c2);
   return [v1,v2,v3];
}

function bary_X613(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let area=triAreaHeron(a,b,c);
   let a2=a*a;
   /* end vars */
   let v1 = a2*(-8*area*area+b*c*(a2+b2+c2));
   let v2 = b2*(-8*area*area+a*c*(a2+b2+c2));
   let v3 = c2*(-8*area*area+a*b*(a2+b2+c2));
   return [v1,v2,v3];
}

function bary_X614(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2+b2-2*b*c+c2);
   let v2 = b*(a2+b2-2*a*c+c2);
   let v3 = c*(a2-2*a*b+b2+c2);
   return [v1,v2,v3];
}

function bary_X615(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let area=triAreaHeron(a,b,c);
   let a2=a*a;
   /* end vars */
   let v1 = a2-4*area;
   let v2 = -4*area+b2;
   let v3 = -4*area+c2;
   return [v1,v2,v3];
}

function bary_X616(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+6*a2*(a2-b2-c2)+2*(a2-b2-c2)*S*sqrt3;
   let v2 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+6*b2*(-a2+b2-c2)+2*(-a2+b2-c2)*S*sqrt3;
   let v3 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+6*c2*(-a2-b2+c2)+2*(-a2-b2+c2)*S*sqrt3;
   return [v1,v2,v3];
}

function bary_X617(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+6*a2*(a2-b2-c2)-2*(a2-b2-c2)*S*sqrt3;
   let v2 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+6*b2*(-a2+b2-c2)-2*(-a2+b2-c2)*S*sqrt3;
   let v3 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+6*c2*(-a2-b2+c2)-2*(-a2-b2+c2)*S*sqrt3;
   return [v1,v2,v3];
}

function bary_X618(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 5*a2*SA+2*SB*SC+2*area*(b2+c2)*sqrt3;
   let v2 = 5*b2*SB+2*SA*SC+2*area*(a2+c2)*sqrt3;
   let v3 = 2*SA*SB+5*c2*SC+2*area*(a2+b2)*sqrt3;
   return [v1,v2,v3];
}

function bary_X619(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 5*a2*SA+2*SB*SC-2*area*(b2+c2)*sqrt3;
   let v2 = 5*b2*SB+2*SA*SC-2*area*(a2+c2)*sqrt3;
   let v3 = 2*SA*SB+5*c2*SC-2*area*(a2+b2)*sqrt3;
   return [v1,v2,v3];
}

function bary_X620(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let a4=a2*a2;
   let SA=(b2+c2-a2)/2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = b4+c4-4*a2*SA;
   let v2 = a4+c4-4*b2*SB;
   let v3 = a4+b4-4*c2*SC;
   return [v1,v2,v3];
}

function bary_X621(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = -2*(a2-b2-c2)*S+(a2+b2-c2)*(a2-b2+c2)*sqrt3;
   let v2 = -2*(-a2+b2-c2)*S+(a2+b2-c2)*(-a2+b2+c2)*sqrt3;
   let v3 = -2*(-a2-b2+c2)*S+(a2-b2+c2)*(-a2+b2+c2)*sqrt3;
   return [v1,v2,v3];
}

function bary_X622(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 2*(a2-b2-c2)*S+(a2+b2-c2)*(a2-b2+c2)*sqrt3;
   let v2 = 2*(-a2+b2-c2)*S+(a2+b2-c2)*(-a2+b2+c2)*sqrt3;
   let v3 = 2*(-a2-b2+c2)*S+(a2-b2+c2)*(-a2+b2+c2)*sqrt3;
   return [v1,v2,v3];
}

function bary_X623(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = 2*area*(b2+c2)+(a2*SA+2*SB*SC)*sqrt3;
   let v2 = 2*area*(a2+c2)+(b2*SB+2*SA*SC)*sqrt3;
   let v3 = 2*area*(a2+b2)+(2*SA*SB+c2*SC)*sqrt3;
   return [v1,v2,v3];
}

function bary_X624(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = -2*area*(b2+c2)+(a2*SA+2*SB*SC)*sqrt3;
   let v2 = -2*area*(a2+c2)+(b2*SB+2*SA*SC)*sqrt3;
   let v3 = -2*area*(a2+b2)+(2*SA*SB+c2*SC)*sqrt3;
   return [v1,v2,v3];
}

function bary_X625(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(b2+c2)-2*(b4-b2*c2+c4);
   let v2 = b2*(a2+c2)-2*(a4-a2*c2+c4);
   let v3 = -2*(a4-a2*b2+b4)+(a2+b2)*c2;
   return [v1,v2,v3];
}

function bary_X626(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = b4+c4;
   let v2 = a4+c4;
   let v3 = a4+b4;
   return [v1,v2,v3];
}

function bary_X627(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)-2*(a2-b2-c2)*(a2+S*sqrt3);
   let v2 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)-2*(-a2+b2-c2)*(b2+S*sqrt3);
   let v3 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)-2*(-a2-b2+c2)*(c2+S*sqrt3);
   return [v1,v2,v3];
}

function bary_X628(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)-2*(a2-b2-c2)*(a2-S*sqrt3);
   let v2 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)-2*(-a2+b2-c2)*(b2-S*sqrt3);
   let v3 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)-2*(-a2-b2+c2)*(c2-S*sqrt3);
   return [v1,v2,v3];
}

function bary_X629(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 7*a2*SA+6*SB*SC+2*area*(b2+c2)*sqrt3;
   let v2 = 7*b2*SB+6*SA*SC+2*area*(a2+c2)*sqrt3;
   let v3 = 6*SA*SB+7*c2*SC+2*area*(a2+b2)*sqrt3;
   return [v1,v2,v3];
}

function bary_X630(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 7*a2*SA+6*SB*SC-2*area*(b2+c2)*sqrt3;
   let v2 = 7*b2*SB+6*SA*SC-2*area*(a2+c2)*sqrt3;
   let v3 = 6*SA*SB+7*c2*SC-2*area*(a2+b2)*sqrt3;
   return [v1,v2,v3];
}

function bary_X631(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 2*a2*SA+SB*SC;
   let v2 = 2*b2*SB+SA*SC;
   let v3 = SA*SB+2*c2*SC;
   return [v1,v2,v3];
}

function bary_X632(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 7*a2*SA+6*SB*SC;
   let v2 = 7*b2*SB+6*SA*SC;
   let v3 = 6*SA*SB+7*c2*SC;
   return [v1,v2,v3];
}

function bary_X633(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+2*(a2-b2-c2)*(a2-S*sqrt3);
   let v2 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+2*(-a2+b2-c2)*(b2-S*sqrt3);
   let v3 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+2*(-a2-b2+c2)*(c2-S*sqrt3);
   return [v1,v2,v3];
}

function bary_X634(orbit, [a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+2*(a2-b2-c2)*(a2+S*sqrt3);
   let v2 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+2*(-a2+b2-c2)*(b2+S*sqrt3);
   let v3 = (a+b-c)*(a-b+c)*(-a+b+c)*(a+b+c)+2*(-a2-b2+c2)*(c2+S*sqrt3);
   return [v1,v2,v3];
}

function bary_X635(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA+2*SB*SC+2*area*(b2+c2)*sqrt3;
   let v2 = b2*SB+2*SA*SC+2*area*(a2+c2)*sqrt3;
   let v3 = 2*SA*SB+c2*SC+2*area*(a2+b2)*sqrt3;
   return [v1,v2,v3];
}

function bary_X636(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let area=triAreaHeron(a,b,c);
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA+2*SB*SC-2*area*(b2+c2)*sqrt3;
   let v2 = b2*SB+2*SA*SC-2*area*(a2+c2)*sqrt3;
   let v3 = 2*SA*SB+c2*SC-2*area*(a2+b2)*sqrt3;
   return [v1,v2,v3];
}

function bary_X637(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = 2*area*SA+SB*SC;
   let v2 = 2*area*SB+SA*SC;
   let v3 = SA*SB+2*area*SC;
   return [v1,v2,v3];
}

function bary_X638(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = -2*area*SA+SB*SC;
   let v2 = -2*area*SB+SA*SC;
   let v3 = SA*SB-2*area*SC;
   return [v1,v2,v3];
}

function bary_X639(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = 2*area*(b2+c2)+a2*SA+2*SB*SC;
   let v2 = 2*area*(a2+c2)+b2*SB+2*SA*SC;
   let v3 = 2*area*(a2+b2)+2*SA*SB+c2*SC;
   return [v1,v2,v3];
}

function bary_X640(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = -2*area*(b2+c2)+a2*SA+2*SB*SC;
   let v2 = -2*area*(a2+c2)+b2*SB+2*SA*SC;
   let v3 = -2*area*(a2+b2)+2*SA*SB+c2*SC;
   return [v1,v2,v3];
}

function bary_X641(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = 2*area*(b2+c2)+3*a2*SA+2*SB*SC;
   let v2 = 2*area*(a2+c2)+3*b2*SB+2*SA*SC;
   let v3 = 2*area*(a2+b2)+2*SA*SB+3*c2*SC;
   return [v1,v2,v3];
}

function bary_X642(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = -2*area*(b2+c2)+3*a2*SA+2*SB*SC;
   let v2 = -2*area*(a2+c2)+3*b2*SB+2*SA*SC;
   let v3 = -2*area*(a2+b2)+2*SA*SB+3*c2*SC;
   return [v1,v2,v3];
}

function bary_X643(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (a*(-a+b+c))/(b2-c2);
   let v2 = (b*(a-b+c))/(-a2+c2);
   let v3 = ((a+b-c)*c)/(a2-b2);
   return [v1,v2,v3];
}

function bary_X644(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a*(-a+b+c))/(b-c);
   let v2 = (b*(a-b+c))/(-a+c);
   let v3 = ((a+b-c)*c)/(a-b);
   return [v1,v2,v3];
}

function bary_X645(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (-a+b+c)/(b2-c2);
   let v2 = (a-b+c)/(-a2+c2);
   let v3 = (a+b-c)/(a2-b2);
   return [v1,v2,v3];
}

function bary_X646(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (-a+b+c)/(a*(b-c));
   let v2 = (a-b+c)/(b*(-a+c));
   let v3 = (a+b-c)/((a-b)*c);
   return [v1,v2,v3];
}

function bary_X647(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*(b2-c2)*SA;
   let v2 = b2*(-a2+c2)*SB;
   let v3 = (a2-b2)*c2*SC;
   return [v1,v2,v3];
}

function bary_X648(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SA=(b2+c2-a2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = SB*(-SA+SB)*(SA-SC)*SC;
   let v2 = SA*(-SA+SB)*SC*(-SB+SC);
   let v3 = SA*SB*(SA-SC)*(-SB+SC);
   return [v1,v2,v3];
}

function bary_X649(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b-c);
   let v2 = b2*(-a+c);
   let v3 = (a-b)*c2;
   return [v1,v2,v3];
}

function bary_X650(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b-c)*(-a+b+c);
   let v2 = b*(-a+c)*(a-b+c);
   let v3 = (a-b)*(a+b-c)*c;
   return [v1,v2,v3];
}

function bary_X651(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/((b-c)*(-a+b+c));
   let v2 = b/((-a+c)*(a-b+c));
   let v3 = c/((a-b)*(a+b-c));
   return [v1,v2,v3];
}

function bary_X652(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*(a-b-c)*(b-c)*SA;
   let v2 = b2*(-a+b-c)*(-a+c)*SB;
   let v3 = (a-b)*(-a-b+c)*c2*SC;
   return [v1,v2,v3];
}

function bary_X653(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 1/((a-b-c)*(b-c)*SA);
   let v2 = 1/((-a+b-c)*(-a+c)*SB);
   let v3 = 1/((a-b)*(-a-b+c)*SC);
   return [v1,v2,v3];
}

function bary_X654(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*(a-b-c)*(b-c)*(b*c-2*SA);
   let v2 = b2*(-a+b-c)*(-a+c)*(a*c-2*SB);
   let v3 = (a-b)*(-a-b+c)*c2*(a*b-2*SC);
   return [v1,v2,v3];
}

function bary_X655(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 1/((a-b-c)*(b-c)*(b*c-2*SA));
   let v2 = 1/((-a+b-c)*(-a+c)*(a*c-2*SB));
   let v3 = 1/((a-b)*(-a-b+c)*(a*b-2*SC));
   return [v1,v2,v3];
}

function bary_X656(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*SA*(SB-SC);
   let v2 = b*SB*(-SA+SC);
   let v3 = c*(SA-SB)*SC;
   return [v1,v2,v3];
}

function bary_X657(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b-c)*(a-b-c)*(b-c);
   let v2 = b2*(-a+b-c)*(-a+b-c)*(-a+c);
   let v3 = (a-b)*(-a-b+c)*(-a-b+c)*c2;
   return [v1,v2,v3];
}

function bary_X658(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/((a-b-c)*(a-b-c)*(b-c));
   let v2 = 1/((-a+b-c)*(-a+b-c)*(-a+c));
   let v3 = 1/((a-b)*(-a-b+c)*(-a-b+c));
   return [v1,v2,v3];
}

function bary_X659(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(b-c)*(a2-b*c);
   let v2 = b*(-a+c)*(b2-a*c);
   let v3 = (a-b)*c*(-(a*b)+c2);
   return [v1,v2,v3];
}

function bary_X660(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a/((b-c)*(a2-b*c));
   let v2 = b/((-a+c)*(b2-a*c));
   let v3 = c/((a-b)*(-(a*b)+c2));
   return [v1,v2,v3];
}

function bary_X661(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(b2-c2);
   let v2 = b*(-a2+c2);
   let v3 = (a2-b2)*c;
   return [v1,v2,v3];
}

function bary_X662(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a/(b2-c2);
   let v2 = b/(-a2+c2);
   let v3 = c/(a2-b2);
   return [v1,v2,v3];
}

function bary_X663(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b-c)*(-a+b+c);
   let v2 = b2*(-a+c)*(a-b+c);
   let v3 = (a-b)*(a+b-c)*c2;
   return [v1,v2,v3];
}

function bary_X664(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/((a-b-c)*(b-c));
   let v2 = 1/((-a+b-c)*(-a+c));
   let v3 = 1/((a-b)*(-a-b+c));
   return [v1,v2,v3];
}

function bary_X665(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*((a-b)*(a-b)*(a+b-c)-(-a+c)*(-a+c)*(a-b+c));
   let v2 = b2*(-((a-b)*(a-b)*(a+b-c))+(b-c)*(b-c)*(-a+b+c));
   let v3 = ((-a+c)*(-a+c)*(a-b+c)-(b-c)*(b-c)*(-a+b+c))*c2;
   return [v1,v2,v3];
}

function bary_X666(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a-b)*(a-c)*(a2+b2-a*c-b*c)*(a2-a*b-b*c+c2);
   let v2 = (-a+b)*(b-c)*(a2+b2-a*c-b*c)*(-(a*b)+b2-a*c+c2);
   let v3 = (-a+c)*(-b+c)*(-(a*b)+b2-a*c+c2)*(a2-a*b-b*c+c2);
   return [v1,v2,v3];
}

function bary_X667(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b-c);
   let v2 = b3*(-a+c);
   let v3 = (a-b)*c3;
   return [v1,v2,v3];
}

function bary_X668(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(a*(b-c));
   let v2 = 1/(b*(-a+c));
   let v3 = 1/((a-b)*c);
   return [v1,v2,v3];
}

function bary_X669(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(b2-c2);
   let v2 = b4*(-a2+c2);
   let v3 = (a2-b2)*c4;
   return [v1,v2,v3];
}

function bary_X670(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 1/(a2*(b2-c2));
   let v2 = 1/(b2*(-a2+c2));
   let v3 = 1/((a2-b2)*c2);
   return [v1,v2,v3];
}

function bary_X671(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 1/(2*a2-b2-c2);
   let v2 = 1/(-a2+2*b2-c2);
   let v3 = 1/(-a2-b2+2*c2);
   return [v1,v2,v3];
}

function bary_X672(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b2-a*(b+c)+c2);
   let v2 = b2*(a2-b*(a+c)+c2);
   let v3 = (a2+b2-(a+b)*c)*c2;
   return [v1,v2,v3];
}

function bary_X673(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 1/(b2-a*(b+c)+c2);
   let v2 = 1/(a2-b*(a+c)+c2);
   let v3 = 1/(a2+b2-(a+b)*c);
   return [v1,v2,v3];
}

function bary_X674(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a2*(b3-a*(b2+c2)+c3);
   let v2 = b2*(a3-b*(a2+c2)+c3);
   let v3 = (a3+b3-(a2+b2)*c)*c2;
   return [v1,v2,v3];
}

function bary_X675(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = 1/(b3-a*(b2+c2)+c3);
   let v2 = 1/(a3-b*(a2+c2)+c3);
   let v3 = 1/(a3+b3-(a2+b2)*c);
   return [v1,v2,v3];
}

function bary_X676(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (b-c)*(2*a3-a2*b-b3-a2*c+b2*c+b*c2-c3);
   let v2 = (-a+c)*(-a3-a*b2+2*b3+a2*c-b2*c+a*c2-c3);
   let v3 = (a-b)*(-a3+a2*b+a*b2-b3-a*c2-b*c2+2*c3);
   return [v1,v2,v3];
}

function bary_X677(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/((b-c)*(2*a3-a2*b-b3-a2*c+b2*c+b*c2-c3));
   let v2 = b2/((-a+c)*(-a3-a*b2+2*b3+a2*c-b2*c+a*c2-c3));
   let v3 = c2/((a-b)*(-a3+a2*b+a*b2-b3-a*c2-b*c2+2*c3));
   return [v1,v2,v3];
}

function bary_X678(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(-2*a+b+c)*(-2*a+b+c);
   let v2 = b*(a-2*b+c)*(a-2*b+c);
   let v3 = (a+b-2*c)*(a+b-2*c)*c;
   return [v1,v2,v3];
}

function bary_X679(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/(-2*a+b+c)*(-2*a+b+c);
   let v2 = b/(a-2*b+c)*(a-2*b+c);
   let v3 = c/(a+b-2*c)*(a+b-2*c);
   return [v1,v2,v3];
}

function bary_X680(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c3=c2*c;
   let SB2=SB*SB;
   let b3=b2*b;
   let SA2=SA*SA;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*SA2*(-(b3*SB2)+c3*SC2);
   let v2 = b3*SB2*(a3*SA2-c3*SC2);
   let v3 = c3*(-(a3*SA2)+b3*SB2)*SC2;
   return [v1,v2,v3];
}

function bary_X681(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   let SC2=SC*SC;
   let c3=c2*c;
   let SB2=SB*SB;
   let b3=b2*b;
   let SA2=SA*SA;
   /* end vars */
   let v1 = 1/(a*SA2*(-(b3*SB2)+c3*SC2));
   let v2 = 1/(b*SB2*(a3*SA2-c3*SC2));
   let v3 = 1/(c*(-(a3*SA2)+b3*SB2)*SC2);
   return [v1,v2,v3];
}

function bary_X682(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c4=c2*c2;
   let SA2=SA*SA;
   let b4=b2*b2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*SA*(a2*SA+SB2+SC2);
   let v2 = b4*SB*(SA2+b2*SB+SC2);
   let v3 = c4*SC*(SA2+SB2+c2*SC);
   return [v1,v2,v3];
}

function bary_X683(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = b2*c2*SB*SC*(SA*(SA+SB)+a2*SC)*(a2*SB+SA*(SA+SC));
   let v2 = a2*c2*SA*SC*(SB*(SA+SB)+b2*SC)*(b2*SA+SB*(SB+SC));
   let v3 = a2*b2*SA*SB*(c2*SB+SC*(SA+SC))*(c2*SA+SC*(SB+SC));
   return [v1,v2,v3];
}

function bary_X684(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*(b2+c2+b4/(-a2+c2)+c4/(-a2+b2));
   let v2 = b2*(a2+c2+a4/(-b2+c2)+c4/(a2-b2));
   let v3 = (a2+b2+b4/(a2-c2)+a4/(b2-c2))*c2;
   return [v1,v2,v3];
}

function bary_X685(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = 1/((-b2+c2)*SA*(SA2-SB*SC));
   let v2 = 1/((a2-c2)*SB*(SB2-SA*SC));
   let v3 = 1/((-a2+b2)*SC*(-(SA*SB)+SC2));
   return [v1,v2,v3];
}

function bary_X686(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*SA*(SB-SC)*(-(SA*(SB-SC)*(SB-SC))+a2*(SA2-SB*SC));
   let v2 = b2*SB*(-SA+SC)*(-(SB*(-SA+SC)*(-SA+SC))+b2*(SB2-SA*SC));
   let v3 = c2*(SA-SB)*SC*(-((SA-SB)*(SA-SB)*SC)+c2*(-(SA*SB)+SC2));
   return [v1,v2,v3];
}

function bary_X687(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = 1/(SA*(SB-SC)*(-(SA*(SB-SC)*(SB-SC))+a2*(SA2-SB*SC)));
   let v2 = 1/(SB*(-SA+SC)*(-(SB*(-SA+SC)*(-SA+SC))+b2*(SB2-SA*SC)));
   let v3 = 1/((SA-SB)*SC*(-((SA-SB)*(SA-SB)*SC)+c2*(-(SA*SB)+SC2)));
   return [v1,v2,v3];
}

function bary_X688(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(b4-c4);
   let v2 = b4*(-a4+c4);
   let v3 = (a4-b4)*c4;
   return [v1,v2,v3];
}

function bary_X689(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = 1/(a2*(b4-c4));
   let v2 = 1/(b2*(-a4+c4));
   let v3 = 1/((a4-b4)*c2);
   return [v1,v2,v3];
}

function bary_X690(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (2*a2-b2-c2)*(b2-c2);
   let v2 = (-a2+2*b2-c2)*(-a2+c2);
   let v3 = (a2-b2)*(-a2-b2+2*c2);
   return [v1,v2,v3];
}

function bary_X691(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/((2*a2-b2-c2)*(b2-c2));
   let v2 = b2/((-a2+2*b2-c2)*(-a2+c2));
   let v3 = c2/((a2-b2)*(-a2-b2+2*c2));
   return [v1,v2,v3];
}

function bary_X692(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3/(b-c);
   let v2 = b3/(-a+c);
   let v3 = c3/(a-b);
   return [v1,v2,v3];
}

function bary_X693(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b-c)/a;
   let v2 = (-a+c)/b;
   let v3 = (a-b)/c;
   return [v1,v2,v3];
}

function bary_X694(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/(a4-b2*c2);
   let v2 = b2/(b4-a2*c2);
   let v3 = c2/(-(a2*b2)+c4);
   return [v1,v2,v3];
}

function bary_X695(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/(a4+b2*c2);
   let v2 = b2/(b4+a2*c2);
   let v3 = c2/(a2*b2+c4);
   return [v1,v2,v3];
}

function bary_X696(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a*b4-b4*c+a*c4-b*c4;
   let v2 = a4*b-a4*c-a*c4+b*c4;
   let v3 = -(a4*b)-a*b4+a4*c+b4*c;
   return [v1,v2,v3];
}

function bary_X697(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2/(a*b4-b4*c+a*c4-b*c4);
   let v2 = b2/(a4*b-a4*c-a*c4+b*c4);
   let v3 = c2/(-(a4*b)-a*b4+a4*c+b4*c);
   return [v1,v2,v3];
}

function bary_X698(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2*b4-b4*c2+a2*c4-b2*c4;
   let v2 = a4*b2-a4*c2-a2*c4+b2*c4;
   let v3 = -(a4*b2)-a2*b4+a4*c2+b4*c2;
   return [v1,v2,v3];
}

function bary_X699(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2/(a2*b4-b4*c2+a2*c4-b2*c4);
   let v2 = b2/(a4*b2-a4*c2-a2*c4+b2*c4);
   let v3 = c2/(-(a4*b2)-a2*b4+a4*c2+b4*c2);
   return [v1,v2,v3];
}

function bary_X700(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let b2=b*b;
   let c2=c*c;
   let a4=a2*a2;
   let b3=b2*b;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*b4-b4*c3+a3*c4-b3*c4;
   let v2 = a4*b3-a4*c3-a3*c4+b3*c4;
   let v3 = -(a4*b3)-a3*b4+a4*c3+b4*c3;
   return [v1,v2,v3];
}

function bary_X701(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let b2=b*b;
   let c2=c*c;
   let a4=a2*a2;
   let b3=b2*b;
   let c4=c2*c2;
   let c3=c2*c;
   let b4=b2*b2;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3*b4-b4*c3+a3*c4-b3*c4);
   let v2 = b2/(a4*b3-a4*c3-a3*c4+b3*c4);
   let v3 = c2/(-(a4*b3)-a3*b4+a4*c3+b4*c3);
   return [v1,v2,v3];
}

function bary_X702(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = 2/a4-1/b4-1/c4;
   let v2 = -(1/a4)+2/b4-1/c4;
   let v3 = -(1/a4)-1/b4+2/c4;
   return [v1,v2,v3];
}

function bary_X703(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/(a4*b4+a4*c4-2*b4*c4);
   let v2 = b2/(a4*b4-2*a4*c4+b4*c4);
   let v3 = c2/(-2*a4*b4+a4*c4+b4*c4);
   return [v1,v2,v3];
}

function bary_X704(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   let c5=c2*c3;
   let b5=b2*b3;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a5*b4+a5*c4-b5*c4-b4*c5;
   let v2 = a4*b5-a5*c4+b5*c4-a4*c5;
   let v3 = -(a5*b4)-a4*b5+a4*c5+b4*c5;
   return [v1,v2,v3];
}

function bary_X705(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let a4=a2*a2;
   let c5=c2*c3;
   let b5=b2*b3;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2/(a5*b4+a5*c4-b5*c4-b4*c5);
   let v2 = b2/(a4*b5-a5*c4+b5*c4-a4*c5);
   let v3 = c2/(-(a5*b4)-a4*b5+a4*c5+b4*c5);
   return [v1,v2,v3];
}

function bary_X706(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c4=c2*c2;
   let b2=b*b;
   let b4=b2*b2;
   let a4=a2*a2;
   let c6=c2*c4;
   let b6=b2*b4;
   let a6=a2*a4;
   /* end vars */
   let v1 = a6*b4+a6*c4-b6*c4-b4*c6;
   let v2 = a4*b6-a6*c4+b6*c4-a4*c6;
   let v3 = -(a6*b4)-a4*b6+a4*c6+b4*c6;
   return [v1,v2,v3];
}

function bary_X707(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c4=c2*c2;
   let b2=b*b;
   let b4=b2*b2;
   let a4=a2*a2;
   let c6=c2*c4;
   let b6=b2*b4;
   let a6=a2*a4;
   /* end vars */
   let v1 = a2/(a6*b4+a6*c4-b6*c4-b4*c6);
   let v2 = b2/(a4*b6-a6*c4+b6*c4-a4*c6);
   let v3 = c2/(-(a6*b4)-a4*b6+a4*c6+b4*c6);
   return [v1,v2,v3];
}

function bary_X708(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a4=a2*a2;
   let a6=a2*a4;
   let c7=c*c6;
   let b7=b*b6;
   let a7=a*a6;
   /* end vars */
   let v1 = a7*b4+a7*c4-b7*c4-b4*c7;
   let v2 = a4*b7-a7*c4+b7*c4-a4*c7;
   let v3 = -(a7*b4)-a4*b7+a4*c7+b4*c7;
   return [v1,v2,v3];
}

function bary_X709(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a4=a2*a2;
   let a6=a2*a4;
   let c7=c*c6;
   let b7=b*b6;
   let a7=a*a6;
   /* end vars */
   let v1 = a2/(a7*b4+a7*c4-b7*c4-b4*c7);
   let v2 = b2/(a4*b7-a7*c4+b7*c4-a4*c7);
   let v3 = c2/(-(a7*b4)-a4*b7+a4*c7+b4*c7);
   return [v1,v2,v3];
}

function bary_X710(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a2-b*c)*(a2+b*c)*(a4+b2*c2)*(b4+c4);
   let v2 = (b2-a*c)*(b2+a*c)*(b4+a2*c2)*(a4+c4);
   let v3 = (a4+b4)*(-(a*b)+c2)*(a*b+c2)*(a2*b2+c4);
   return [v1,v2,v3];
}

function bary_X711(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/((a2-b*c)*(a2+b*c)*(a4+b2*c2)*(b4+c4));
   let v2 = b2/((b2-a*c)*(b2+a*c)*(b4+a2*c2)*(a4+c4));
   let v3 = c2/((a4+b4)*(-(a*b)+c2)*(a*b+c2)*(a2*b2+c4));
   return [v1,v2,v3];
}

function bary_X712(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a*b3-b3*c+a*c3-b*c3;
   let v2 = a3*b-a3*c-a*c3+b*c3;
   let v3 = -(a3*b)-a*b3+a3*c+b3*c;
   return [v1,v2,v3];
}

function bary_X713(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a2/(a*b3-b3*c+a*c3-b*c3);
   let v2 = b2/(a3*b-a3*c-a*c3+b*c3);
   let v3 = c2/(-(a3*b)-a*b3+a3*c+b3*c);
   return [v1,v2,v3];
}

function bary_X714(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (b+c)*(a2*b2-a2*b*c+a2*c2-b2*c2);
   let v2 = (a+c)*(a2*b2-a*b2*c-a2*c2+b2*c2);
   let v3 = (a+b)*(-(a2*b2)+a2*c2-a*b*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X715(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/((b+c)*(a2*b2-a2*b*c+a2*c2-b2*c2));
   let v2 = b2/((a+c)*(a2*b2-a*b2*c-a2*c2+b2*c2));
   let v3 = c2/((a+b)*(-(a2*b2)+a2*c2-a*b*c2+b2*c2));
   return [v1,v2,v3];
}

function bary_X716(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = 2/a3-1/b3-1/c3;
   let v2 = -(1/a3)+2/b3-1/c3;
   let v3 = -(1/a3)-1/b3+2/c3;
   return [v1,v2,v3];
}

function bary_X717(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3*b3+a3*c3-2*b3*c3);
   let v2 = b2/(a3*b3-2*a3*c3+b3*c3);
   let v3 = c2/(-2*a3*b3+a3*c3+b3*c3);
   return [v1,v2,v3];
}

function bary_X718(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let a3=a2*a;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b+c)*(a4*b2-a4*b*c+a4*c2-b3*c3);
   let v2 = (a+c)*(a2*b4-a*b4*c+b4*c2-a3*c3);
   let v3 = (a+b)*(-(a3*b3)+a2*c4-a*b*c4+b2*c4);
   return [v1,v2,v3];
}

function bary_X719(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let a3=a2*a;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/((b+c)*(a4*b2-a4*b*c+a4*c2-b3*c3));
   let v2 = b2/((a+c)*(a2*b4-a*b4*c+b4*c2-a3*c3));
   let v3 = c2/((a+b)*(-(a3*b3)+a2*c4-a*b*c4+b2*c4));
   return [v1,v2,v3];
}

function bary_X720(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let a5=a2*a3;
   /* end vars */
   let v1 = a5*b3+a5*c3-b5*c3-b3*c5;
   let v2 = a3*b5-a5*c3+b5*c3-a3*c5;
   let v3 = -(a5*b3)-a3*b5+a3*c5+b3*c5;
   return [v1,v2,v3];
}

function bary_X721(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2/(a5*b3+a5*c3-b5*c3-b3*c5);
   let v2 = b2/(a3*b5-a5*c3+b5*c3-a3*c5);
   let v3 = c2/(-(a5*b3)-a3*b5+a3*c5+b3*c5);
   return [v1,v2,v3];
}

function bary_X722(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b+c)*(a2-b*c)*(b2-b*c+c2)*(a4+a2*b*c+b2*c2);
   let v2 = (a+c)*(b2-a*c)*(a2-a*c+c2)*(b4+a*b2*c+a2*c2);
   let v3 = (a+b)*(a2-a*b+b2)*(-(a*b)+c2)*(a2*b2+a*b*c2+c4);
   return [v1,v2,v3];
}

function bary_X723(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/((b+c)*(a2-b*c)*(b2-b*c+c2)*(a4+a2*b*c+b2*c2));
   let v2 = b2/((a+c)*(b2-a*c)*(a2-a*c+c2)*(b4+a*b2*c+a2*c2));
   let v3 = c2/((a+b)*(a2-a*b+b2)*(-(a*b)+c2)*(a2*b2+a*b*c2+c4));
   return [v1,v2,v3];
}

function bary_X724(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a4=a2*a2;
   let a6=a2*a4;
   let a3=a2*a;
   let c7=c*c6;
   let b7=b*b6;
   let c3=c2*c;
   let b3=b2*b;
   let a7=a*a6;
   /* end vars */
   let v1 = a7*b3+a7*c3-b7*c3-b3*c7;
   let v2 = a3*b7-a7*c3+b7*c3-a3*c7;
   let v3 = -(a7*b3)-a3*b7+a3*c7+b3*c7;
   return [v1,v2,v3];
}

function bary_X725(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let a4=a2*a2;
   let a6=a2*a4;
   let a3=a2*a;
   let c7=c*c6;
   let b7=b*b6;
   let c3=c2*c;
   let b3=b2*b;
   let a7=a*a6;
   /* end vars */
   let v1 = a2/(a7*b3+a7*c3-b7*c3-b3*c7);
   let v2 = b2/(a3*b7-a7*c3+b7*c3-a3*c7);
   let v3 = c2/(-(a7*b3)-a3*b7+a3*c7+b3*c7);
   return [v1,v2,v3];
}

function bary_X726(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*b2-b2*c+a*c2-b*c2;
   let v2 = a2*b-a2*c-a*c2+b*c2;
   let v3 = -(a2*b)-a*b2+a2*c+b2*c;
   return [v1,v2,v3];
}

function bary_X727(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/(a*b2-b2*c+a*c2-b*c2);
   let v2 = b2/(a2*b-a2*c-a*c2+b*c2);
   let v3 = c2/(-(a2*b)-a*b2+a2*c+b2*c);
   return [v1,v2,v3];
}

function bary_X728(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*Math.pow(-a+b+c,3);
   let v2 = b*Math.pow(a-b+c,3);
   let v3 = Math.pow(a+b-c,3)*c;
   return [v1,v2,v3];
}

function bary_X729(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/(a2*b2+a2*c2-2*b2*c2);
   let v2 = b2/(a2*b2-2*a2*c2+b2*c2);
   let v3 = c2/(-2*a2*b2+a2*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X730(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*b2+a3*c2-b3*c2-b2*c3;
   let v2 = a2*b3-a3*c2+b3*c2-a2*c3;
   let v3 = -(a3*b2)-a2*b3+a2*c3+b2*c3;
   return [v1,v2,v3];
}

function bary_X731(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3*b2+a3*c2-b3*c2-b2*c3);
   let v2 = b2/(a2*b3-a3*c2+b3*c2-a2*c3);
   let v3 = c2/(-(a3*b2)-a2*b3+a2*c3+b2*c3);
   return [v1,v2,v3];
}

function bary_X732(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2-b*c)*(a2+b*c)*(b2+c2);
   let v2 = (b2-a*c)*(b2+a*c)*(a2+c2);
   let v3 = (a2+b2)*(-(a*b)+c2)*(a*b+c2);
   return [v1,v2,v3];
}

function bary_X733(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/((a2-b*c)*(a2+b*c)*(b2+c2));
   let v2 = b2/((b2-a*c)*(b2+a*c)*(a2+c2));
   let v3 = c2/((a2+b2)*(-(a*b)+c2)*(a*b+c2));
   return [v1,v2,v3];
}

function bary_X734(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let a5=a2*a3;
   /* end vars */
   let v1 = a5*b2+a5*c2-b5*c2-b2*c5;
   let v2 = a2*b5-a5*c2+b5*c2-a2*c5;
   let v3 = -(a5*b2)-a2*b5+a2*c5+b2*c5;
   return [v1,v2,v3];
}

function bary_X735(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2/(a5*b2+a5*c2-b5*c2-b2*c5);
   let v2 = b2/(a2*b5-a5*c2+b5*c2-a2*c5);
   let v3 = c2/(-(a5*b2)-a2*b5+a2*c5+b2*c5);
   return [v1,v2,v3];
}

function bary_X736(orbit, [a,b,c]) {
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
   let v1 = a6*b2+a6*c2-b6*c2-b2*c6;
   let v2 = a2*b6-a6*c2+b6*c2-a2*c6;
   let v3 = -(a6*b2)-a2*b6+a2*c6+b2*c6;
   return [v1,v2,v3];
}

function bary_X737(orbit, [a,b,c]) {
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
   let v1 = a2/(a6*b2+a6*c2-b6*c2-b2*c6);
   let v2 = b2/(a2*b6-a6*c2+b6*c2-a2*c6);
   let v3 = c2/(-(a6*b2)-a2*b6+a2*c6+b2*c6);
   return [v1,v2,v3];
}

function bary_X738(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/Math.pow(-a+b+c,3);
   let v2 = b/Math.pow(a-b+c,3);
   let v3 = c/Math.pow(a+b-c,3);
   return [v1,v2,v3];
}

function bary_X739(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/(a*b+a*c-2*b*c);
   let v2 = b2/(a*b-2*a*c+b*c);
   let v3 = c2/(-2*a*b+a*c+b*c);
   return [v1,v2,v3];
}

function bary_X740(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (b+c)*(a2-b*c);
   let v2 = (a+c)*(b2-a*c);
   let v3 = (a+b)*(-(a*b)+c2);
   return [v1,v2,v3];
}

function bary_X741(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/((b+c)*(a2-b*c));
   let v2 = b2/((a+c)*(b2-a*c));
   let v3 = c2/((a+b)*(-(a*b)+c2));
   return [v1,v2,v3];
}

function bary_X742(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*b+a3*c-b3*c-b*c3;
   let v2 = a*b3-a3*c+b3*c-a*c3;
   let v3 = -(a3*b)-a*b3+a*c3+b*c3;
   return [v1,v2,v3];
}

function bary_X743(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3*b+a3*c-b3*c-b*c3);
   let v2 = b2/(a*b3-a3*c+b3*c-a*c3);
   let v3 = c2/(-(a3*b)-a*b3+a*c3+b*c3);
   return [v1,v2,v3];
}

function bary_X744(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let a3=a2*a;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b+c)*(a4-b3*c+b2*c2-b*c3);
   let v2 = (a+c)*(b4-a3*c+a2*c2-a*c3);
   let v3 = (a+b)*(-(a3*b)+a2*b2-a*b3+c4);
   return [v1,v2,v3];
}

function bary_X745(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let a3=a2*a;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/((b+c)*(a4-b3*c+b2*c2-b*c3));
   let v2 = b2/((a+c)*(b4-a3*c+a2*c2-a*c3));
   let v3 = c2/((a+b)*(-(a3*b)+a2*b2-a*b3+c4));
   return [v1,v2,v3];
}

function bary_X746(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let a5=a2*a3;
   /* end vars */
   let v1 = a5*b+a5*c-b5*c-b*c5;
   let v2 = a*b5-a5*c+b5*c-a*c5;
   let v3 = -(a5*b)-a*b5+a*c5+b*c5;
   return [v1,v2,v3];
}

function bary_X747(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2/(a5*b+a5*c-b5*c-b*c5);
   let v2 = b2/(a*b5-a5*c+b5*c-a*c5);
   let v3 = c2/(-(a5*b)-a*b5+a*c5+b*c5);
   return [v1,v2,v3];
}

function bary_X748(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3-2*a*b*c;
   let v2 = b3-2*a*b*c;
   let v3 = -2*a*b*c+c3;
   return [v1,v2,v3];
}

function bary_X749(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3-2*a*b*c);
   let v2 = b2/(b3-2*a*b*c);
   let v3 = c2/(-2*a*b*c+c3);
   return [v1,v2,v3];
}

function bary_X750(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3+2*a*b*c;
   let v2 = b3+2*a*b*c;
   let v3 = 2*a*b*c+c3;
   return [v1,v2,v3];
}

function bary_X751(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3+2*a*b*c);
   let v2 = b2/(b3+2*a*b*c);
   let v3 = c2/(2*a*b*c+c3);
   return [v1,v2,v3];
}

function bary_X752(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = 2*a3-b3-c3;
   let v2 = -a3+2*b3-c3;
   let v3 = -a3-b3+2*c3;
   return [v1,v2,v3];
}

function bary_X753(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(2*a3-b3-c3);
   let v2 = b2/(-a3+2*b3-c3);
   let v3 = c2/(-a3-b3+2*c3);
   return [v1,v2,v3];
}

function bary_X754(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = 2*a4-b4-c4;
   let v2 = -a4+2*b4-c4;
   let v3 = -a4-b4+2*c4;
   return [v1,v2,v3];
}

function bary_X755(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/(2*a4-b4-c4);
   let v2 = b2/(-a4+2*b4-c4);
   let v3 = c2/(-a4-b4+2*c4);
   return [v1,v2,v3];
}

function bary_X756(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b+c)*(b+c);
   let v2 = b*(a+c)*(a+c);
   let v3 = (a+b)*(a+b)*c;
   return [v1,v2,v3];
}

function bary_X757(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/(b+c)*(b+c);
   let v2 = b/(a+c)*(a+c);
   let v3 = c/(a+b)*(a+b);
   return [v1,v2,v3];
}

function bary_X758(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b+c)-a*(b3+c3);
   let v2 = b3*(a+c)-b*(a3+c3);
   let v3 = -((a3+b3)*c)+(a+b)*c3;
   return [v1,v2,v3];
}

function bary_X759(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3*(b+c)-a*(b3+c3));
   let v2 = b2/(b3*(a+c)-b*(a3+c3));
   let v3 = c2/(-((a3+b3)*c)+(a+b)*c3);
   return [v1,v2,v3];
}

function bary_X760(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(b+c)-a*(b4+c4);
   let v2 = b4*(a+c)-b*(a4+c4);
   let v3 = -((a4+b4)*c)+(a+b)*c4;
   return [v1,v2,v3];
}

function bary_X761(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/(a4*(b+c)-a*(b4+c4));
   let v2 = b2/(b4*(a+c)-b*(a4+c4));
   let v3 = c2/(-((a4+b4)*c)+(a+b)*c4);
   return [v1,v2,v3];
}

function bary_X762(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*Math.pow(b+c,3);
   let v2 = b*Math.pow(a+c,3);
   let v3 = Math.pow(a+b,3)*c;
   return [v1,v2,v3];
}

function bary_X763(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/Math.pow(b+c,3);
   let v2 = b/Math.pow(a+c,3);
   let v3 = c/Math.pow(a+b,3);
   return [v1,v2,v3];
}

function bary_X764(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*Math.pow(b-c,3);
   let v2 = b*Math.pow(-a+c,3);
   let v3 = Math.pow(a-b,3)*c;
   return [v1,v2,v3];
}

function bary_X765(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/(b-c)*(b-c);
   let v2 = b/(-a+c)*(-a+c);
   let v3 = c/(a-b)*(a-b);
   return [v1,v2,v3];
}

function bary_X766(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(b3+c3)-a3*(b4+c4);
   let v2 = b4*(a3+c3)-b3*(a4+c4);
   let v3 = -((a4+b4)*c3)+(a3+b3)*c4;
   return [v1,v2,v3];
}

function bary_X767(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/(a4*(b3+c3)-a3*(b4+c4));
   let v2 = b2/(b4*(a3+c3)-b3*(a4+c4));
   let v3 = c2/(-((a4+b4)*c3)+(a3+b3)*c4);
   return [v1,v2,v3];
}

function bary_X768(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = (b-c)*(a*b3+a*b2*c+b3*c+a*b*c2+b2*c2+a*c3+b*c3);
   let v2 = (-a+c)*(a3*b+a3*c+a2*b*c+a2*c2+a*b*c2+a*c3+b*c3);
   let v3 = (a-b)*(a3*b+a2*b2+a*b3+a3*c+a2*b*c+a*b2*c+b3*c);
   return [v1,v2,v3];
}

function bary_X769(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a2/((b-c)*(a*b3+a*b2*c+b3*c+a*b*c2+b2*c2+a*c3+b*c3));
   let v2 = b2/((-a+c)*(a3*b+a3*c+a2*b*c+a2*c2+a*b*c2+a*c3+b*c3));
   let v3 = c2/((a-b)*(a3*b+a2*b2+a*b3+a3*c+a2*b*c+a*b2*c+b3*c));
   return [v1,v2,v3];
}

function bary_X770(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c4=c2*c2;
   let SA2=SA*SA;
   let b4=b2*b2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(a-b-c)*(b-c)*(a4*b*c-b*(b-c)*(b-c)*c*(b+c)*(b+c)+4*a2*SB*SC+4*SA*(SB2+SC2));
   let v2 = b*(-a+b-c)*(-a+c)*(a*b4*c-a*c*(-a+c)*(-a+c)*(a+c)*(a+c)+4*b2*SA*SC+4*SB*(SA2+SC2));
   let v3 = (a-b)*c*(-a-b+c)*(-(a*(a-b)*(a-b)*b*(a+b)*(a+b))+a*b*c4+4*c2*SA*SB+4*(SA2+SB2)*SC);
   return [v1,v2,v3];
}

function bary_X771(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c4=c2*c2;
   let SA2=SA*SA;
   let b4=b2*b2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let a4=a2*a2;
   /* end vars */
   let v1 = a/((a-b-c)*(b-c)*(a4*b*c-b*(b-c)*(b-c)*c*(b+c)*(b+c)+4*a2*SB*SC+4*SA*(SB2+SC2)));
   let v2 = b/((-a+b-c)*(-a+c)*(a*b4*c-a*c*(-a+c)*(-a+c)*(a+c)*(a+c)+4*b2*SA*SC+4*SB*(SA2+SC2)));
   let v3 = c/((a-b)*(-a-b+c)*(-(a*(a-b)*(a-b)*b*(a+b)*(a+b))+a*b*c4+4*c2*SA*SB+4*(SA2+SB2)*SC));
   return [v1,v2,v3];
}

function bary_X772(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (b-c)*(a3*b3+a3*b2*c+a3*b*c2+a3*c3+b3*c3);
   let v2 = (-a+c)*(a3*b3+a2*b3*c+a*b3*c2+a3*c3+b3*c3);
   let v3 = (a-b)*(a3*b3+a3*c3+a2*b*c3+a*b2*c3+b3*c3);
   return [v1,v2,v3];
}

function bary_X773(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/((b-c)*(a3*b3+a3*b2*c+a3*b*c2+a3*c3+b3*c3));
   let v2 = b2/((-a+c)*(a3*b3+a2*b3*c+a*b3*c2+a3*c3+b3*c3));
   let v3 = c2/((a-b)*(a3*b3+a3*c3+a2*b*c3+a*b2*c3+b3*c3));
   return [v1,v2,v3];
}

function bary_X774(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = a*(a2*SB*SC+SA*(SB2+SC2));
   let v2 = b*(b2*SA*SC+SB*(SA2+SC2));
   let v3 = c*(c2*SA*SB+(SA2+SB2)*SC);
   return [v1,v2,v3];
}

function bary_X775(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = a/(a2*SB*SC+SA*(SB2+SC2));
   let v2 = b/(b2*SA*SC+SB*(SA2+SC2));
   let v3 = c/(c2*SA*SB+(SA2+SB2)*SC);
   return [v1,v2,v3];
}

function bary_X776(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let a2=a*a;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let a4=a2*a2;
   let b5=b2*b3;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = (b-c)*(a5*b3+a5*b2*c+a5*b*c2+a5*c3-b4*c4);
   let v2 = (-a+c)*(a3*b5+a2*b5*c+a*b5*c2+b5*c3-a4*c4);
   let v3 = (a-b)*(-(a4*b4)+a3*c5+a2*b*c5+a*b2*c5+b3*c5);
   return [v1,v2,v3];
}

function bary_X777(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let a2=a*a;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let a4=a2*a2;
   let b5=b2*b3;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2/((b-c)*(a5*b3+a5*b2*c+a5*b*c2+a5*c3-b4*c4));
   let v2 = b2/((-a+c)*(a3*b5+a2*b5*c+a*b5*c2+b5*c3-a4*c4));
   let v3 = c2/((a-b)*(-(a4*b4)+a3*c5+a2*b*c5+a*b2*c5+b3*c5));
   return [v1,v2,v3];
}

function bary_X778(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let a2=a*a;
   let b2=b*b;
   let b4=b2*b2;
   let a4=a2*a2;
   let c6=c2*c4;
   let b6=b2*b4;
   let a6=a2*a4;
   /* end vars */
   let v1 = (b-c)*(b+c)*(a6*b2+a6*c2-b4*c4);
   let v2 = (-a+c)*(a+c)*(a2*b6+b6*c2-a4*c4);
   let v3 = (a-b)*(a+b)*(-(a4*b4)+a2*c6+b2*c6);
   return [v1,v2,v3];
}

function bary_X779(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let a2=a*a;
   let b2=b*b;
   let b4=b2*b2;
   let a4=a2*a2;
   let c6=c2*c4;
   let b6=b2*b4;
   let a6=a2*a4;
   /* end vars */
   let v1 = a2/((b-c)*(b+c)*(a6*b2+a6*c2-b4*c4));
   let v2 = b2/((-a+c)*(a+c)*(a2*b6+b6*c2-a4*c4));
   let v3 = c2/((a-b)*(a+b)*(-(a4*b4)+a2*c6+b2*c6));
   return [v1,v2,v3];
}

function bary_X780(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let a2=a*a;
   let a3=a2*a;
   let a4=a2*a2;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let c3=c2*c;
   let b3=b2*b;
   let a6=a2*a4;
   let c7=c*c6;
   let a5=a2*a3;
   let b7=b*b6;
   let c5=c2*c3;
   let b5=b2*b3;
   let a7=a*a6;
   /* end vars */
   let v1 = (b-c)*(a7*b3+a7*b2*c+a7*b*c2+a7*c3-b6*c4-b5*c5-b4*c6);
   let v2 = (-a+c)*(a3*b7+a2*b7*c+a*b7*c2+b7*c3-a6*c4-a5*c5-a4*c6);
   let v3 = (a-b)*(-(a6*b4)-a5*b5-a4*b6+a3*c7+a2*b*c7+a*b2*c7+b3*c7);
   return [v1,v2,v3];
}

function bary_X781(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let a2=a*a;
   let a3=a2*a;
   let a4=a2*a2;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let c3=c2*c;
   let b3=b2*b;
   let a6=a2*a4;
   let c7=c*c6;
   let a5=a2*a3;
   let b7=b*b6;
   let c5=c2*c3;
   let b5=b2*b3;
   let a7=a*a6;
   /* end vars */
   let v1 = a2/((b-c)*(a7*b3+a7*b2*c+a7*b*c2+a7*c3-b6*c4-b5*c5-b4*c6));
   let v2 = b2/((-a+c)*(a3*b7+a2*b7*c+a*b7*c2+b7*c3-a6*c4-a5*c5-a4*c6));
   let v3 = c2/((a-b)*(-(a6*b4)-a5*b5-a4*b6+a3*c7+a2*b*c7+a*b2*c7+b3*c7));
   return [v1,v2,v3];
}

function bary_X782(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4-b2*c2)*(a4+b2*c2)*(b4-c4);
   let v2 = (b4-a2*c2)*(b4+a2*c2)*(-a4+c4);
   let v3 = (a4-b4)*(-(a2*b2)+c4)*(a2*b2+c4);
   return [v1,v2,v3];
}

function bary_X783(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/((a4-b2*c2)*(a4+b2*c2)*(b4-c4));
   let v2 = b2/((b4-a2*c2)*(b4+a2*c2)*(-a4+c4));
   let v3 = c2/((a4-b4)*(-(a2*b2)+c4)*(a2*b2+c4));
   return [v1,v2,v3];
}

function bary_X784(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b-c)*(a*b2+a*b*c+b2*c+a*c2+b*c2);
   let v2 = (-a+c)*(a2*b+a2*c+a*b*c+a*c2+b*c2);
   let v3 = (a-b)*(a2*b+a*b2+a2*c+a*b*c+b2*c);
   return [v1,v2,v3];
}

function bary_X785(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/((b-c)*(a*b2+a*b*c+b2*c+a*c2+b*c2));
   let v2 = b2/((-a+c)*(a2*b+a2*c+a*b*c+a*c2+b*c2));
   let v3 = c2/((a-b)*(a2*b+a*b2+a2*c+a*b*c+b2*c));
   return [v1,v2,v3];
}

function bary_X786(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (b-c)*(a2*b2+a2*b*c+a2*c2+b2*c2);
   let v2 = (-a+c)*(a2*b2+a*b2*c+a2*c2+b2*c2);
   let v3 = (a-b)*(a2*b2+a2*c2+a*b*c2+b2*c2);
   return [v1,v2,v3];
}

function bary_X787(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/((b-c)*(a2*b2+a2*b*c+a2*c2+b2*c2));
   let v2 = b2/((-a+c)*(a2*b2+a*b2*c+a2*c2+b2*c2));
   let v3 = c2/((a-b)*(a2*b2+a2*c2+a*b*c2+b2*c2));
   return [v1,v2,v3];
}

function bary_X788(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = 1/b3-1/c3;
   let v2 = -(1/a3)+1/c3;
   let v3 = 1/a3-1/b3;
   return [v1,v2,v3];
}

function bary_X789(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 1/(a*(b-c)*(b2+b*c+c2));
   let v2 = 1/(b*(-a+c)*(a2+a*c+c2));
   let v3 = 1/((a-b)*(a2+a*b+b2)*c);
   return [v1,v2,v3];
}

function bary_X790(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let a3=a2*a;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b-c)*(a4*b2+a4*b*c+a4*c2-b3*c3);
   let v2 = (-a+c)*(a2*b4+a*b4*c+b4*c2-a3*c3);
   let v3 = (a-b)*(-(a3*b3)+a2*c4+a*b*c4+b2*c4);
   return [v1,v2,v3];
}

function bary_X791(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let a3=a2*a;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/((b-c)*(a4*b2+a4*b*c+a4*c2-b3*c3));
   let v2 = b2/((-a+c)*(a2*b4+a*b4*c+b4*c2-a3*c3));
   let v3 = c2/((a-b)*(-(a3*b3)+a2*c4+a*b*c4+b2*c4));
   return [v1,v2,v3];
}

function bary_X792(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let a2=a*a;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let a4=a2*a2;
   let b5=b2*b3;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = (b-c)*(a5*b2+a5*b*c+a5*c2-b4*c3-b3*c4);
   let v2 = (-a+c)*(a2*b5+a*b5*c+b5*c2-a4*c3-a3*c4);
   let v3 = (a-b)*(-(a4*b3)-a3*b4+a2*c5+a*b*c5+b2*c5);
   return [v1,v2,v3];
}

function bary_X793(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let a2=a*a;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let a4=a2*a2;
   let b5=b2*b3;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2/((b-c)*(a5*b2+a5*b*c+a5*c2-b4*c3-b3*c4));
   let v2 = b2/((-a+c)*(a2*b5+a*b5*c+b5*c2-a4*c3-a3*c4));
   let v3 = c2/((a-b)*(-(a4*b3)-a3*b4+a2*c5+a*b*c5+b2*c5));
   return [v1,v2,v3];
}

function bary_X794(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b-c)*(a2-b*c)*(b2+b*c+c2)*(a4+a2*b*c+b2*c2);
   let v2 = (-a+c)*(b2-a*c)*(a2+a*c+c2)*(b4+a*b2*c+a2*c2);
   let v3 = (a-b)*(a2+a*b+b2)*(-(a*b)+c2)*(a2*b2+a*b*c2+c4);
   return [v1,v2,v3];
}

function bary_X795(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/((b-c)*(a2-b*c)*(b2+b*c+c2)*(a4+a2*b*c+b2*c2));
   let v2 = b2/((-a+c)*(b2-a*c)*(a2+a*c+c2)*(b4+a*b2*c+a2*c2));
   let v3 = c2/((a-b)*(a2+a*b+b2)*(-(a*b)+c2)*(a2*b2+a*b*c2+c4));
   return [v1,v2,v3];
}

function bary_X796(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let a2=a*a;
   let a3=a2*a;
   let a4=a2*a2;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let c3=c2*c;
   let b3=b2*b;
   let a6=a2*a4;
   let c7=c*c6;
   let a5=a2*a3;
   let b7=b*b6;
   let c5=c2*c3;
   let b5=b2*b3;
   let a7=a*a6;
   /* end vars */
   let v1 = (b-c)*(a7*b2+a7*b*c+a7*c2-b6*c3-b5*c4-b4*c5-b3*c6);
   let v2 = (-a+c)*(a2*b7+a*b7*c+b7*c2-a6*c3-a5*c4-a4*c5-a3*c6);
   let v3 = (a-b)*(-(a6*b3)-a5*b4-a4*b5-a3*b6+a2*c7+a*b*c7+b2*c7);
   return [v1,v2,v3];
}

function bary_X797(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let c6=c2*c4;
   let a2=a*a;
   let a3=a2*a;
   let a4=a2*a2;
   let b2=b*b;
   let b4=b2*b2;
   let b6=b2*b4;
   let c3=c2*c;
   let b3=b2*b;
   let a6=a2*a4;
   let c7=c*c6;
   let a5=a2*a3;
   let b7=b*b6;
   let c5=c2*c3;
   let b5=b2*b3;
   let a7=a*a6;
   /* end vars */
   let v1 = a2/((b-c)*(a7*b2+a7*b*c+a7*c2-b6*c3-b5*c4-b4*c5-b3*c6));
   let v2 = b2/((-a+c)*(a2*b7+a*b7*c+b7*c2-a6*c3-a5*c4-a4*c5-a3*c6));
   let v3 = c2/((a-b)*(-(a6*b3)-a5*b4-a4*b5-a3*b6+a2*c7+a*b*c7+b2*c7));
   return [v1,v2,v3];
}

function bary_X798(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b2-c2);
   let v2 = b3*(-a2+c2);
   let v3 = (a2-b2)*c3;
   return [v1,v2,v3];
}

function bary_X799(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 1/(a*(b2-c2));
   let v2 = 1/(b*(-a2+c2));
   let v3 = 1/((a2-b2)*c);
   return [v1,v2,v3];
}

function bary_X800(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = a2*(a2*SB*SC+SA*(SB2+SC2));
   let v2 = b2*(b2*SA*SC+SB*(SA2+SC2));
   let v3 = c2*(c2*SA*SB+(SA2+SB2)*SC);
   return [v1,v2,v3];
}

function bary_X801(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = 1/(a2*SB*SC+SA*(SB2+SC2));
   let v2 = 1/(b2*SA*SC+SB*(SA2+SC2));
   let v3 = 1/(c2*SA*SB+(SA2+SB2)*SC);
   return [v1,v2,v3];
}

function bary_X802(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (b-c)*(a3*b+a3*c-b2*c2);
   let v2 = (-a+c)*(a*b3+b3*c-a2*c2);
   let v3 = (a-b)*(-(a2*b2)+a*c3+b*c3);
   return [v1,v2,v3];
}

function bary_X803(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/((b-c)*(a3*b+a3*c-b2*c2));
   let v2 = b2/((-a+c)*(a*b3+b3*c-a2*c2));
   let v3 = c2/((a-b)*(-(a2*b2)+a*c3+b*c3));
   return [v1,v2,v3];
}

function bary_X804(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b2-c2)*(a4-b2*c2);
   let v2 = (-a2+c2)*(b4-a2*c2);
   let v3 = (a2-b2)*(-(a2*b2)+c4);
   return [v1,v2,v3];
}

function bary_X805(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/((b2-c2)*(a4-b2*c2));
   let v2 = b2/((-a2+c2)*(b4-a2*c2));
   let v3 = c2/((a2-b2)*(-(a2*b2)+c4));
   return [v1,v2,v3];
}

function bary_X806(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let a2=a*a;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let a4=a2*a2;
   let b5=b2*b3;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = (b-c)*(a5*b+a5*c-b4*c2-b3*c3-b2*c4);
   let v2 = (-a+c)*(a*b5+b5*c-a4*c2-a3*c3-a2*c4);
   let v3 = (a-b)*(-(a4*b2)-a3*b3-a2*b4+a*c5+b*c5);
   return [v1,v2,v3];
}

function bary_X807(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let a2=a*a;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let a4=a2*a2;
   let b5=b2*b3;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2/((b-c)*(a5*b+a5*c-b4*c2-b3*c3-b2*c4));
   let v2 = b2/((-a+c)*(a*b5+b5*c-a4*c2-a3*c3-a2*c4));
   let v3 = c2/((a-b)*(-(a4*b2)-a3*b3-a2*b4+a*c5+b*c5));
   return [v1,v2,v3];
}

function bary_X808(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let a2=a*a;
   let b2=b*b;
   let b4=b2*b2;
   let a4=a2*a2;
   let c6=c2*c4;
   let b6=b2*b4;
   let a6=a2*a4;
   /* end vars */
   let v1 = (b2-c2)*(a6-b4*c2-b2*c4);
   let v2 = (-a2+c2)*(b6-a4*c2-a2*c4);
   let v3 = (a2-b2)*(-(a4*b2)-a2*b4+c6);
   return [v1,v2,v3];
}

function bary_X809(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c4=c2*c2;
   let a2=a*a;
   let b2=b*b;
   let b4=b2*b2;
   let a4=a2*a2;
   let c6=c2*c4;
   let b6=b2*b4;
   let a6=a2*a4;
   /* end vars */
   let v1 = a2/((b2-c2)*(a6-b4*c2-b2*c4));
   let v2 = b2/((-a2+c2)*(b6-a4*c2-a2*c4));
   let v3 = c2/((a2-b2)*(-(a4*b2)-a2*b4+c6));
   return [v1,v2,v3];
}

function bary_X810(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let c3=c2*c;
   let SB=(c2+a2-b2)/2;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b2-c2)*SA;
   let v2 = b3*(-a2+c2)*SB;
   let v3 = (a2-b2)*c3*SC;
   return [v1,v2,v3];
}

function bary_X811(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 1/(a*(b2-c2)*SA);
   let v2 = 1/(b*(-a2+c2)*SB);
   let v3 = 1/((a2-b2)*c*SC);
   return [v1,v2,v3];
}

function bary_X812(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (b-c)*(a2-b*c);
   let v2 = (-a+c)*(b2-a*c);
   let v3 = (a-b)*(-(a*b)+c2);
   return [v1,v2,v3];
}

function bary_X813(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/((b-c)*(a2-b*c));
   let v2 = b2/((-a+c)*(b2-a*c));
   let v3 = c2/((a-b)*(-(a*b)+c2));
   return [v1,v2,v3];
}

function bary_X814(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (b-c)*(a3-b2*c-b*c2);
   let v2 = (-a+c)*(b3-a2*c-a*c2);
   let v3 = (a-b)*(-(a2*b)-a*b2+c3);
   return [v1,v2,v3];
}

function bary_X815(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/((b-c)*(a3-b2*c-b*c2));
   let v2 = b2/((-a+c)*(b3-a2*c-a*c2));
   let v3 = c2/((a-b)*(-(a2*b)-a*b2+c3));
   return [v1,v2,v3];
}

function bary_X816(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let a3=a2*a;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = (b-c)*(a4-b3*c-b2*c2-b*c3);
   let v2 = (-a+c)*(b4-a3*c-a2*c2-a*c3);
   let v3 = (a-b)*(-(a3*b)-a2*b2-a*b3+c4);
   return [v1,v2,v3];
}

function bary_X817(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let a3=a2*a;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/((b-c)*(a4-b3*c-b2*c2-b*c3));
   let v2 = b2/((-a+c)*(b4-a3*c-a2*c2-a*c3));
   let v3 = c2/((a-b)*(-(a3*b)-a2*b2-a*b3+c4));
   return [v1,v2,v3];
}

function bary_X818(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let a2=a*a;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let a4=a2*a2;
   let b5=b2*b3;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = (b-c)*(a5-b4*c-b3*c2-b2*c3-b*c4);
   let v2 = (-a+c)*(b5-a4*c-a3*c2-a2*c3-a*c4);
   let v3 = (a-b)*(-(a4*b)-a3*b2-a2*b3-a*b4+c5);
   return [v1,v2,v3];
}

function bary_X819(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let a2=a*a;
   let b2=b*b;
   let b3=b2*b;
   let a3=a2*a;
   let c5=c2*c3;
   let a4=a2*a2;
   let b5=b2*b3;
   let c4=c2*c2;
   let b4=b2*b2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2/((b-c)*(a5-b4*c-b3*c2-b2*c3-b*c4));
   let v2 = b2/((-a+c)*(b5-a4*c-a3*c2-a2*c3-a*c4));
   let v3 = c2/((a-b)*(-(a4*b)-a3*b2-a2*b3-a*b4+c5));
   return [v1,v2,v3];
}

function bary_X820(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let c3=c2*c;
   let b3=b2*b;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*SA2*(b2*SB2+c2*SC2);
   let v2 = b3*SB2*(a2*SA2+c2*SC2);
   let v3 = c3*(a2*SA2+b2*SB2)*SC2;
   return [v1,v2,v3];
}

function bary_X821(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = 1/(a*SA2*(b2*SB2+c2*SC2));
   let v2 = 1/(b*SB2*(a2*SA2+c2*SC2));
   let v3 = 1/(c*(a2*SA2+b2*SB2)*SC2);
   return [v1,v2,v3];
}

function bary_X822(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c3=c2*c;
   let SB2=SB*SB;
   let b3=b2*b;
   let SA2=SA*SA;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b2-c2)*SA2;
   let v2 = b3*(-a2+c2)*SB2;
   let v3 = (a2-b2)*c3*SC2;
   return [v1,v2,v3];
}

function bary_X823(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = 1/(a*(b2-c2)*SA2);
   let v2 = 1/(b*(-a2+c2)*SB2);
   let v3 = 1/((a2-b2)*c*SC2);
   return [v1,v2,v3];
}

function bary_X824(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = b3-c3;
   let v2 = -a3+c3;
   let v3 = a3-b3;
   return [v1,v2,v3];
}

function bary_X825(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a2/(b3-c3);
   let v2 = b2/(-a3+c3);
   let v3 = c2/(a3-b3);
   return [v1,v2,v3];
}

function bary_X826(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = b4-c4;
   let v2 = -a4+c4;
   let v3 = a4-b4;
   return [v1,v2,v3];
}

function bary_X827(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c4=c2*c2;
   let b4=b2*b2;
   /* end vars */
   let v1 = a2/(b4-c4);
   let v2 = b2/(-a4+c4);
   let v3 = c2/(a4-b4);
   return [v1,v2,v3];
}

function bary_X828(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c3=c2*c;
   let SB2=SB*SB;
   let b3=b2*b;
   let SA2=SA*SA;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*SA2*(b3*SB2+c3*SC2);
   let v2 = b3*SB2*(a3*SA2+c3*SC2);
   let v3 = c3*(a3*SA2+b3*SB2)*SC2;
   return [v1,v2,v3];
}

function bary_X829(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   let SC2=SC*SC;
   let c3=c2*c;
   let SB2=SB*SB;
   let b3=b2*b;
   let SA2=SA*SA;
   /* end vars */
   let v1 = 1/(a*SA2*(b3*SB2+c3*SC2));
   let v2 = 1/(b*SB2*(a3*SA2+c3*SC2));
   let v3 = 1/(c*(a3*SA2+b3*SB2)*SC2);
   return [v1,v2,v3];
}

function bary_X830(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(b-c)*(a2+b2+b*c+c2);
   let v2 = b*(-a+c)*(a2+b2+a*c+c2);
   let v3 = (a-b)*c*(a2+a*b+b2+c2);
   return [v1,v2,v3];
}

function bary_X831(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a/((b-c)*(a2+b2+b*c+c2));
   let v2 = b/((-a+c)*(a2+b2+a*c+c2));
   let v3 = c/((a-b)*(a2+a*b+b2+c2));
   return [v1,v2,v3];
}

function bary_X832(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(b-c)+a*(b4-c4);
   let v2 = b4*(-a+c)+b*(-a4+c4);
   let v3 = (a4-b4)*c+(a-b)*c4;
   return [v1,v2,v3];
}

function bary_X833(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/(a4*(b-c)+a*(b4-c4));
   let v2 = b2/(b4*(-a+c)+b*(-a4+c4));
   let v3 = c2/((a4-b4)*c+(a-b)*c4);
   return [v1,v2,v3];
}

function bary_X834(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b2-c2)+a2*(b3-c3);
   let v2 = b3*(-a2+c2)+b2*(-a3+c3);
   let v3 = (a3-b3)*c2+(a2-b2)*c3;
   return [v1,v2,v3];
}

function bary_X835(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3*(b2-c2)+a2*(b3-c3));
   let v2 = b2/(b3*(-a2+c2)+b2*(-a3+c3));
   let v3 = c2/((a3-b3)*c2+(a2-b2)*c3);
   return [v1,v2,v3];
}

function bary_X836(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*SA2*(b*SB2+c*SC2);
   let v2 = b2*SB2*(a*SA2+c*SC2);
   let v3 = c2*(a*SA2+b*SB2)*SC2;
   return [v1,v2,v3];
}

function bary_X837(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = 1/(SA2*(b*SB2+c*SC2));
   let v2 = 1/(SB2*(a*SA2+c*SC2));
   let v3 = 1/((a*SA2+b*SB2)*SC2);
   return [v1,v2,v3];
}

function bary_X838(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(b3-c3)+a3*(b4-c4);
   let v2 = b4*(-a3+c3)+b3*(-a4+c4);
   let v3 = (a4-b4)*c3+(a3-b3)*c4;
   return [v1,v2,v3];
}

function bary_X839(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/(a4*(b3-c3)+a3*(b4-c4));
   let v2 = b2/(b4*(-a3+c3)+b3*(-a4+c4));
   let v3 = c2/((a4-b4)*c3+(a3-b3)*c4);
   return [v1,v2,v3];
}

function bary_X840(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(2*a3-2*a2*b+a*b2-b3-2*a2*c+b2*c+a*c2+b*c2-c3);
   let v2 = b2/(-a3+a2*b-2*a*b2+2*b3+a2*c-2*b2*c+a*c2+b*c2-c3);
   let v3 = c2/(-a3+a2*b+a*b2-b3+a2*c+b2*c-2*a*c2-2*b*c2+2*c3);
   return [v1,v2,v3];
}

function bary_X841(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c4=c2*c2;
   let b4=b2*b2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let a4=a2*a2;
   /* end vars */
   let v1 = a2/(-(a4*Math.pow(SA,3))+SA*SB*SC*(SB2+10*SB*SC+SC2)+a2*(5*SA2*(SB-SC)*(SB-SC)-4*SB2*SC2));
   let v2 = b2/(-(b4*Math.pow(SB,3))+SA*SB*SC*(SA2+10*SA*SC+SC2)+b2*(5*SB2*(-SA+SC)*(-SA+SC)-4*SA2*SC2));
   let v3 = c2/(SA*SB*(SA2+10*SA*SB+SB2)*SC-c4*Math.pow(SC,3)+c2*(-4*SA2*SB2+5*(SA-SB)*(SA-SB)*SC2));
   return [v1,v2,v3];
}

function bary_X842(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2/(-(a2*(SA2+SB*SC))+2*SA*(SB2+SC2));
   let v2 = b2/(-(b2*(SB2+SA*SC))+2*SB*(SA2+SC2));
   let v3 = c2/(2*(SA2+SB2)*SC-c2*(SA*SB+SC2));
   return [v1,v2,v3];
}

function bary_X843(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA2=SA*SA;
   let SC2=SC*SC;
   let SB2=SB*SB;
   /* end vars */
   let v1 = a2/(2*(a2-SA)*SA+SB2-4*SB*SC+SC2);
   let v2 = b2/(SA2+2*(b2-SB)*SB-4*SA*SC+SC2);
   let v3 = c2/(SA2-4*SA*SB+SB2+2*(c2-SC)*SC);
   return [v1,v2,v3];
}

function bary_X844(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let s=(a+b+c)/2;
   let Sqrt=Math.sqrt;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   /* end vars */
   let v1 = a*(sa*sb*Sqrt((a*b)/(s*sc))+sa*Sqrt((a*c)/(s*sb))*sc-Sqrt((b*c)/(s*sa))*sb*sc);
   let v2 = b*(sa*sb*Sqrt((a*b)/(s*sc))-sa*Sqrt((a*c)/(s*sb))*sc+Sqrt((b*c)/(s*sa))*sb*sc);
   let v3 = c*(-(sa*sb*Sqrt((a*b)/(s*sc)))+sa*Sqrt((a*c)/(s*sb))*sc+Sqrt((b*c)/(s*sa))*sb*sc);
   return [v1,v2,v3];
}

function bary_X845(orbit, [a,b,c]) {
   /* begin vars */
   let sc=(a+b-c)/2;
   let sb=(c+a-b)/2;
   let sa=(b+c-a)/2;
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*(Sqrt((Math.pow(sa,3)*Math.pow(sb,3))/(a*b))+Sqrt((Math.pow(sa,3)*Math.pow(sc,3))/(a*c))-Sqrt((Math.pow(sb,3)*Math.pow(sc,3))/(b*c)));
   let v2 = b*(Sqrt((Math.pow(sa,3)*Math.pow(sb,3))/(a*b))-Sqrt((Math.pow(sa,3)*Math.pow(sc,3))/(a*c))+Sqrt((Math.pow(sb,3)*Math.pow(sc,3))/(b*c)));
   let v3 = c*(-Sqrt((Math.pow(sa,3)*Math.pow(sb,3))/(a*b))+Sqrt((Math.pow(sa,3)*Math.pow(sc,3))/(a*c))+Sqrt((Math.pow(sb,3)*Math.pow(sc,3))/(b*c)));
   return [v1,v2,v3];
}

function bary_X846(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(a*b+a*c+b*c+2*SA);
   let v2 = b*(a*b+a*c+b*c+2*SB);
   let v3 = c*(a*b+a*c+b*c+2*SC);
   return [v1,v2,v3];
}

function bary_X847(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = (b2*c2)/(SA*(-4*area*area+SA2));
   let v2 = (a2*c2)/(SB*(-4*area*area+SB2));
   let v3 = (a2*b2)/(SC*(-4*area*area+SC2));
   return [v1,v2,v3];
}

function bary_X848(orbit, [a,b,c]) {
   /* begin vars */
   let cosC=lawOfCosines(c,a,b);
   let sinC=getSin(cosC);
   let cosB=lawOfCosines(b,a,c);
   let sinB=getSin(cosB);
   let cosA=lawOfCosines(a,b,c);
   let sinA=getSin(cosA);
   let cotCp=getCotPrime(c,a,b);
   let cotC=cosC/sinC;
   let cotBp=getCotPrime(b,c,a);
   let cotB=cosB/sinB;
   let cotAp=getCotPrime(a,b,c);
   let cotA=cosA/sinA;
   /* end vars */
   let v1 = 1/(cotA-cotAp);
   let v2 = 1/(cotB-cotBp);
   let v3 = 1/(cotC-cotCp);
   return [v1,v2,v3];
}

function bary_X849(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3/(b+c)*(b+c);
   let v2 = b3/(a+c)*(a+c);
   let v3 = c3/(a+b)*(a+b);
   return [v1,v2,v3];
}

function bary_X850(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b2-c2)/a2;
   let v2 = (-a2+c2)/b2;
   let v3 = (a2-b2)/c2;
   return [v1,v2,v3];
}

function bary_X851(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   let c4=c2*c2;
   let a3=a2*a;
   let b4=b2*b2;
   let c3=c2*c;
   let b3=b2*b;
   let a4=a2*a2;
   /* end vars */
   let v1 = a*(b+c)*(a4-a2*b2+a2*b*c-b3*c-a2*c2+2*b2*c2-b*c3);
   let v2 = b*(a+c)*(-(a2*b2)+b4-a3*c+a*b2*c+2*a2*c2-b2*c2-a*c3);
   let v3 = (a+b)*c*(-(a3*b)+2*a2*b2-a*b3-a2*c2+a*b*c2-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X852(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*SA*(SA2*SB2+SA2*SC2-2*SB2*SC2);
   let v2 = b2*SB*(SA2*SB2-2*SA2*SC2+SB2*SC2);
   let v3 = c2*SC*(-2*SA2*SB2+SA2*SC2+SB2*SC2);
   return [v1,v2,v3];
}

function bary_X853(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let c4=c2*c2;
   let b5=b2*b3;
   let b4=b2*b2;
   let a4=a2*a2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a2*(a-b-c)*(a5*b2-a4*b3-a3*b4+a2*b5+a4*b2*c-a2*b4*c+a5*c2+a4*b*c2-2*b5*c2-a4*c3+2*b4*c3-a3*c4-a2*b*c4+2*b3*c4+a2*c5-2*b2*c5);
   let v2 = b2*(-a+b-c)*(a5*b2-a4*b3-a3*b4+a2*b5-a4*b2*c+a2*b4*c-2*a5*c2+a*b4*c2+b5*c2+2*a4*c3-b4*c3+2*a3*c4-a*b2*c4-b3*c4-2*a2*c5+b2*c5);
   let v3 = (-a-b+c)*c2*(-2*a5*b2+2*a4*b3+2*a3*b4-2*a2*b5+a5*c2-a4*b*c2-a*b4*c2+b5*c2-a4*c3-b4*c3-a3*c4+a2*b*c4+a*b2*c4-b3*c4+a2*c5+b2*c5);
   return [v1,v2,v3];
}

function bary_X854(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = -((a2*c2*(-(a2*SA)+b2*SB))/((a+b-c)*(-a+b+c)))+(a2*b2*(a2*SA-c2*SC))/((a-b+c)*(-a+b+c));
   let v2 = (b2*c2*(-(a2*SA)+b2*SB))/((a+b-c)*(a-b+c))-(a2*b2*(-(b2*SB)+c2*SC))/((a-b+c)*(-a+b+c));
   let v3 = -((b2*c2*(a2*SA-c2*SC))/((a+b-c)*(a-b+c)))+(a2*c2*(-(b2*SB)+c2*SC))/((a+b-c)*(-a+b+c));
   return [v1,v2,v3];
}

function bary_X855(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = -((a*c*(-(a2*SA)+b2*SB))/((a+b-c)*(-a+b+c)))+(a*b*(a2*SA-c2*SC))/((a-b+c)*(-a+b+c));
   let v2 = (b*c*(-(a2*SA)+b2*SB))/((a+b-c)*(a-b+c))-(a*b*(-(b2*SB)+c2*SC))/((a-b+c)*(-a+b+c));
   let v3 = -((b*c*(a2*SA-c2*SC))/((a+b-c)*(a-b+c)))+(a*c*(-(b2*SB)+c2*SC))/((a+b-c)*(-a+b+c));
   return [v1,v2,v3];
}

function bary_X856(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*SA*(-(b*c*(b+c)*SB*SC)+a2*SA*(b*SB+c*SC));
   let v2 = b*SB*(-(a*c*(a+c)*SA*SC)+b2*SB*(a*SA+c*SC));
   let v3 = c*SC*(-(a*b*(a+b)*SA*SB)+c2*(a*SA+b*SB)*SC);
   return [v1,v2,v3];
}

function bary_X857(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let SC=(a2+b2-c2)/2;
   let c3=c2*c;
   let SB=(c2+a2-b2)/2;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*(b+c)*SA-b3*SB-c3*SC;
   let v2 = -(a3*SA)+b2*(a+c)*SB-c3*SC;
   let v3 = -(a3*SA)-b3*SB+(a+b)*c2*SC;
   return [v1,v2,v3];
}

function bary_X858(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = c2*(a4-a2*b2+b4-c4)+b2*(a4-b4-a2*c2+c4);
   let v2 = c2*(a4-a2*b2+b4-c4)+a2*(-a4+b4-b2*c2+c4);
   let v3 = b2*(a4-b4-a2*c2+c4)+a2*(-a4+b4-b2*c2+c4);
   return [v1,v2,v3];
}

function bary_X859(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a2*(a+b)*(a+c)*(a*b*c-b*SB-c*SC);
   let v2 = (a+b)*b2*(b+c)*(a*b*c-a*SA-c*SC);
   let v3 = (a+c)*(b+c)*c2*(a*b*c-a*SA-b*SB);
   return [v1,v2,v3];
}

function bary_X860(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (b+c)*(b*c-2*SA)*SB*SC;
   let v2 = (a+c)*SA*(a*c-2*SB)*SC;
   let v3 = (a+b)*SA*SB*(a*b-2*SC);
   return [v1,v2,v3];
}

function bary_X861(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(-a+b+c)*((a+b-c)*c*(-(a2*SA)+b2*SB)-b*(a-b+c)*(a2*SA-c2*SC));
   let v2 = b*(a-b+c)*(-((a+b-c)*c*(-(a2*SA)+b2*SB))+a*(-a+b+c)*(-(b2*SB)+c2*SC));
   let v3 = (a+b-c)*c*(b*(a-b+c)*(a2*SA-c2*SC)-a*(-a+b+c)*(-(b2*SB)+c2*SC));
   return [v1,v2,v3];
}

function bary_X862(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a*(b+c)*(-a2+b*c)*SB*SC;
   let v2 = b*(a+c)*(-b2+a*c)*SA*SC;
   let v3 = (a+b)*c*(a*b-c2)*SA*SB;
   return [v1,v2,v3];
}

function bary_X863(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c3=c2*c;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*(-(SA/b3)-SA/c3)+SB/b+SC/c;
   let v2 = SA/a+b2*(-(SB/a3)-SB/c3)+SC/c;
   let v3 = SA/a+SB/b+c2*(-(SC/a3)-SC/b3);
   return [v1,v2,v3];
}

function bary_X864(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let c4=c2*c2;
   let b4=b2*b2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*(-(SA/b4)-SA/c4)+SB/b2+SC/c2;
   let v2 = SA/a2+b2*(-(SB/a4)-SB/c4)+SC/c2;
   let v3 = SA/a2+SB/b2+c2*(-(SC/a4)-SC/b4);
   return [v1,v2,v3];
}

function bary_X865(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*(SB-SC)*(SB-SC)*(a2*SB*SC-SA*(SA2+SB*SC));
   let v2 = b2*(-SA+SC)*(-SA+SC)*(b2*SA*SC-SB*(SB2+SA*SC));
   let v3 = c2*(SA-SB)*(SA-SB)*(c2*SA*SB-SC*(SA*SB+SC2));
   return [v1,v2,v3];
}

function bary_X866(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let c3=c2*c;
   let SB=(c2+a2-b2)/2;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(b-c)*(a3*(b-c)*SA-b3*c*SB+b*c3*SC+a*b*c*(b*SB-c*SC));
   let v2 = b*(-a+c)*(a3*c*SA+b3*(-a+c)*SB-a*c3*SC+a*b*c*(-(a*SA)+c*SC));
   let v3 = (a-b)*c*(-(a3*b*SA)+a*b3*SB+a*b*c*(a*SA-b*SB)+(a-b)*c3*SC);
   return [v1,v2,v3];
}

function bary_X867(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let SC=(a2+b2-c2)/2;
   let c3=c2*c;
   let SB=(c2+a2-b2)/2;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = (b-c)*(a2*(-b+c)*SA+b3*SB-c3*SC+a*(-(b2*SB)+c2*SC));
   let v2 = (-a+c)*(-(a3*SA)+b2*(a-c)*SB+c3*SC+b*(a2*SA-c2*SC));
   let v3 = (a-b)*(a3*SA-b3*SB+c*(-(a2*SA)+b2*SB)+(-a+b)*c2*SC);
   return [v1,v2,v3];
}

function bary_X868(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = (SB-SC)*(SB-SC)*(-SA2+SB*SC);
   let v2 = (-SA+SC)*(-SA+SC)*(-SB2+SA*SC);
   let v3 = (SA-SB)*(SA-SB)*(SA*SB-SC2);
   return [v1,v2,v3];
}

function bary_X869(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b2+b*c+c2);
   let v2 = b3*(a2+a*c+c2);
   let v3 = (a2+a*b+b2)*c3;
   return [v1,v2,v3];
}

function bary_X870(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 1/(a*(b2+b*c+c2));
   let v2 = 1/(b*(a2+a*c+c2));
   let v3 = 1/((a2+a*b+b2)*c);
   return [v1,v2,v3];
}

function bary_X871(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = 1/(a3*(b2+b*c+c2));
   let v2 = 1/(b3*(a2+a*c+c2));
   let v3 = 1/((a2+a*b+b2)*c3);
   return [v1,v2,v3];
}

function bary_X872(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = Math.pow(a,3)*(b+c)*(b+c);
   let v2 = Math.pow(b,3)*(a+c)*(a+c);
   let v3 = (a+b)*(a+b)*Math.pow(c,3);
   return [v1,v2,v3];
}

function bary_X873(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(a*(b+c)*(b+c));
   let v2 = 1/(b*(a+c)*(a+c));
   let v3 = 1/((a+b)*(a+b)*c);
   return [v1,v2,v3];
}

function bary_X874(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2-b*c)/(a*b-a*c);
   let v2 = (b2-a*c)/(-(a*b)+b*c);
   let v3 = (-(a*b)+c2)/(a*c-b*c);
   return [v1,v2,v3];
}

function bary_X875(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2*(a*b-a*c))/(a2-b*c);
   let v2 = (b2*(-(a*b)+b*c))/(b2-a*c);
   let v3 = ((a*c-b*c)*c2)/(-(a*b)+c2);
   return [v1,v2,v3];
}

function bary_X876(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a*b-a*c)/(a2-b*c);
   let v2 = (-(a*b)+b*c)/(b2-a*c);
   let v3 = (a*c-b*c)/(-(a*b)+c2);
   return [v1,v2,v3];
}

function bary_X877(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = (SA-SB)*SB*(SA-SC)*SC*(SA2-SB*SC);
   let v2 = SA*(-SA+SB)*(SB-SC)*SC*(SB2-SA*SC);
   let v3 = SA*SB*(-SA+SC)*(-SB+SC)*(-(SA*SB)+SC2);
   return [v1,v2,v3];
}

function bary_X878(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = (a2*SA*(SB-SC))/(SA2-SB*SC);
   let v2 = (b2*SB*(-SA+SC))/(SB2-SA*SC);
   let v3 = (c2*(SA-SB)*SC)/(-(SA*SB)+SC2);
   return [v1,v2,v3];
}

function bary_X879(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = (SA*(SB-SC))/(SA2-SB*SC);
   let v2 = (SB*(-SA+SC))/(SB2-SA*SC);
   let v3 = ((SA-SB)*SC)/(-(SA*SB)+SC2);
   return [v1,v2,v3];
}

function bary_X880(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4-b2*c2)/(a2*(b2-c2));
   let v2 = (b4-a2*c2)/(b2*(-a2+c2));
   let v3 = (-(a2*b2)+c4)/((a2-b2)*c2);
   return [v1,v2,v3];
}

function bary_X881(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a4*(b2-c2))/(a4-b2*c2);
   let v2 = (b4*(-a2+c2))/(b4-a2*c2);
   let v3 = ((a2-b2)*c4)/(-(a2*b2)+c4);
   return [v1,v2,v3];
}

function bary_X882(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = (a2*(b2-c2))/(a4-b2*c2);
   let v2 = (b2*(-a2+c2))/(b4-a2*c2);
   let v3 = ((a2-b2)*c2)/(-(a2*b2)+c4);
   return [v1,v2,v3];
}

function bary_X883(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b2-a*(b+c)+c2)/((a-b-c)*(b-c));
   let v2 = (a2-b*(a+c)+c2)/((-a+b-c)*(-a+c));
   let v3 = (a2+b2-(a+b)*c)/((a-b)*(-a-b+c));
   return [v1,v2,v3];
}

function bary_X884(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = (a2*(a-b-c)*(b-c))/(b2-a*(b+c)+c2);
   let v2 = (b2*(-a+b-c)*(-a+c))/(a2-b*(a+c)+c2);
   let v3 = ((a-b)*(-a-b+c)*c2)/(a2+b2-(a+b)*c);
   return [v1,v2,v3];
}

function bary_X885(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = ((a-b-c)*(b-c))/(b2-a*(b+c)+c2);
   let v2 = ((-a+b-c)*(-a+c))/(a2-b*(a+c)+c2);
   let v3 = ((a-b)*(-a-b+c))/(a2+b2-(a+b)*c);
   return [v1,v2,v3];
}

function bary_X886(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = 1/(a2*(b2-c2)*(-2*b2*c2+a2*(b2+c2)));
   let v2 = 1/(b2*(-a2+c2)*(-2*a2*c2+b2*(a2+c2)));
   let v3 = 1/((a2-b2)*c2*(-2*a2*b2+(a2+b2)*c2));
   return [v1,v2,v3];
}

function bary_X887(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c4=c2*c2;
   let b4=b2*b2;
   let a4=a2*a2;
   /* end vars */
   let v1 = a4*(b2-c2)*(-2*b2*c2+a2*(b2+c2));
   let v2 = b4*(-a2+c2)*(-2*a2*c2+b2*(a2+c2));
   let v3 = (a2-b2)*(-2*a2*b2+(a2+b2)*c2)*c4;
   return [v1,v2,v3];
}

function bary_X888(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(b2-c2)*(-2*b2*c2+a2*(b2+c2));
   let v2 = b2*(-a2+c2)*(-2*a2*c2+b2*(a2+c2));
   let v3 = (a2-b2)*c2*(-2*a2*b2+(a2+b2)*c2);
   return [v1,v2,v3];
}

function bary_X889(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(a*(b-c)*(-2*b*c+a*(b+c)));
   let v2 = 1/(b*(-a+c)*(-2*a*c+b*(a+c)));
   let v3 = 1/((a-b)*c*(-2*a*b+(a+b)*c));
   return [v1,v2,v3];
}

function bary_X890(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b-c)*(-2*b*c+a*(b+c));
   let v2 = b3*(-a+c)*(-2*a*c+b*(a+c));
   let v3 = (a-b)*(-2*a*b+(a+b)*c)*c3;
   return [v1,v2,v3];
}

function bary_X891(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b-c)*(-2*b*c+a*(b+c));
   let v2 = b*(-a+c)*(-2*a*c+b*(a+c));
   let v3 = (a-b)*c*(-2*a*b+(a+b)*c);
   return [v1,v2,v3];
}

function bary_X892(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 1/((b2-c2)*(-2*a2+b2+c2));
   let v2 = 1/((-a2+c2)*(a2-2*b2+c2));
   let v3 = 1/((a2-b2)*(a2+b2-2*c2));
   return [v1,v2,v3];
}

function bary_X893(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let a2=a*a;
   let b2=b*b;
   /* end vars */
   let v1 = 1/(b2*(a2+b*c)*c2);
   let v2 = 1/(a2*(b2+a*c)*c2);
   let v3 = 1/(a2*b2*(a*b+c2));
   return [v1,v2,v3];
}

function bary_X894(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2+b*c;
   let v2 = b2+a*c;
   let v3 = a*b+c2;
   return [v1,v2,v3];
}

function bary_X895(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2/((a2-2*SA)*SB*SC);
   let v2 = b2/(SA*(b2-2*SB)*SC);
   let v3 = c2/(SA*SB*(c2-2*SC));
   return [v1,v2,v3];
}

function bary_X896(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(2*a2-b2-c2);
   let v2 = b*(-a2+2*b2-c2);
   let v3 = c*(-a2-b2+2*c2);
   return [v1,v2,v3];
}

function bary_X897(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a/(2*a2-b2-c2);
   let v2 = b/(-a2+2*b2-c2);
   let v3 = c/(-a2-b2+2*c2);
   return [v1,v2,v3];
}

function bary_X898(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/((b-c)*(-2*b*c+a*(b+c)));
   let v2 = b/((-a+c)*(-2*a*c+b*(a+c)));
   let v3 = c/((a-b)*(-2*a*b+(a+b)*c));
   return [v1,v2,v3];
}

function bary_X899(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(-2/a+1/b+1/c);
   let v2 = b*(1/a-2/b+1/c);
   let v3 = (1/a+1/b-2/c)*c;
   return [v1,v2,v3];
}

function bary_X900(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b-c)*(-2*a+b+c);
   let v2 = (-a+c)*(a-2*b+c);
   let v3 = (a-b)*(a+b-2*c);
   return [v1,v2,v3];
}

function bary_X901(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/((b-c)*(-2*a+b+c));
   let v2 = b2/((-a+c)*(a-2*b+c));
   let v3 = c2/((a-b)*(a+b-2*c));
   return [v1,v2,v3];
}

function bary_X902(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(-2*a+b+c);
   let v2 = b2*(a-2*b+c);
   let v3 = (a+b-2*c)*c2;
   return [v1,v2,v3];
}

function bary_X903(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(-2*a+b+c);
   let v2 = 1/(a-2*b+c);
   let v3 = 1/(a+b-2*c);
   return [v1,v2,v3];
}

function bary_X904(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3/(a2+b*c);
   let v2 = b3/(b2+a*c);
   let v3 = c3/(a*b+c2);
   return [v1,v2,v3];
}

function bary_X905(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*(b-c)*SA;
   let v2 = b*(-a+c)*SB;
   let v3 = (a-b)*c*SC;
   return [v1,v2,v3];
}

function bary_X906(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let c3=c2*c;
   let SB=(c2+a2-b2)/2;
   let b3=b2*b;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = (2*a3*SA)/(b-c);
   let v2 = (2*b3*SB)/(-a+c);
   let v3 = (2*c3*SC)/(a-b);
   return [v1,v2,v3];
}

function bary_X907(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/((b2-c2)*(3*a2+b2+c2));
   let v2 = b2/((-a2+c2)*(a2+3*b2+c2));
   let v3 = c2/((a2-b2)*(a2+b2+3*c2));
   return [v1,v2,v3];
}

function bary_X908(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a*b*c-b*SB-c*SC;
   let v2 = a*b*c-a*SA-c*SC;
   let v3 = a*b*c-a*SA-b*SB;
   return [v1,v2,v3];
}

function bary_X909(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a2/(a*b*c-b*SB-c*SC);
   let v2 = b2/(a*b*c-a*SA-c*SC);
   let v3 = c2/(a*b*c-a*SA-b*SB);
   return [v1,v2,v3];
}

function bary_X910(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(2*a3-a2*b-b3-a2*c+b2*c+b*c2-c3);
   let v2 = b*(-a3-a*b2+2*b3+a2*c-b2*c+a*c2-c3);
   let v3 = c*(-a3+a2*b+a*b2-b3-a*c2-b*c2+2*c3);
   return [v1,v2,v3];
}

function bary_X911(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3/(2*a3-a2*(b+c)-(b-c)*(b-c)*(b+c));
   let v2 = b3/(2*b3-b2*(a+c)-(-a+c)*(-a+c)*(a+c));
   let v3 = c3/(-((a-b)*(a-b)*(a+b))-(a+b)*c2+2*c3);
   return [v1,v2,v3];
}

function bary_X912(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*SA*(a*((a+b-c)*(a-b+c)*(b+c)-2*a*SA)-4*SB*SC);
   let v2 = b*SB*(b*((a+b-c)*(a+c)*(-a+b+c)-2*b*SB)-4*SA*SC);
   let v3 = c*SC*(-4*SA*SB+c*((a+b)*(a-b+c)*(-a+b+c)-2*c*SC));
   return [v1,v2,v3];
}

function bary_X913(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2/(2*a*SA*((a+b-c)*(a-b+c)*(b+c)-2*a*SA)-8*SA*SB*SC);
   let v2 = b2/(2*b*SB*((a+b-c)*(a+c)*(-a+b+c)-2*b*SB)-8*SA*SB*SC);
   let v3 = c2/(-8*SA*SB*SC+2*c*SC*((a+b)*(a-b+c)*(-a+b+c)-2*c*SC));
   return [v1,v2,v3];
}

function bary_X914(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 2*a*SA*((a+b-c)*(a-b+c)*(b+c)-2*a*SA)-8*SA*SB*SC;
   let v2 = 2*b*SB*((a+b-c)*(a+c)*(-a+b+c)-2*b*SB)-8*SA*SB*SC;
   let v3 = -8*SA*SB*SC+2*c*SC*((a+b)*(a-b+c)*(-a+b+c)-2*c*SC);
   return [v1,v2,v3];
}

function bary_X915(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a/(SA*(a*((a+b-c)*(a-b+c)*(b+c)-2*a*SA)-4*SB*SC));
   let v2 = b/(SB*(b*((a+b-c)*(a+c)*(-a+b+c)-2*b*SB)-4*SA*SC));
   let v3 = c/(SC*(-4*SA*SB+c*((a+b)*(a-b+c)*(-a+b+c)-2*c*SC)));
   return [v1,v2,v3];
}

function bary_X916(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let a5=a2*a3;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*SA*(a5+2*a3*SA-a*(SB-SC)*(SB-SC)-2*(b3*SB+c3*SC));
   let v2 = b2*SB*(b5+2*b3*SB-b*(-SA+SC)*(-SA+SC)-2*(a3*SA+c3*SC));
   let v3 = c2*SC*(c5-c*(SA-SB)*(SA-SB)-2*(a3*SA+b3*SB)+2*c3*SC);
   return [v1,v2,v3];
}

function bary_X917(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let b5=b2*b3;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let a5=a2*a3;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 1/(SA*(a5+2*a3*SA-a*(SB-SC)*(SB-SC)-2*(b3*SB+c3*SC)));
   let v2 = 1/(SB*(b5+2*b3*SB-b*(-SA+SC)*(-SA+SC)-2*(a3*SA+c3*SC)));
   let v3 = 1/(SC*(c5-c*(SA-SB)*(SA-SB)-2*(a3*SA+b3*SB)+2*c3*SC));
   return [v1,v2,v3];
}

function bary_X918(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = (b-c)*(b2-a*(b+c)+c2);
   let v2 = (-a+c)*(a2-b*(a+c)+c2);
   let v3 = (a-b)*(a2+b2-(a+b)*c);
   return [v1,v2,v3];
}

function bary_X919(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2/((b-c)*(b2-a*(b+c)+c2));
   let v2 = b2/((-a+c)*(a2-b*(a+c)+c2));
   let v3 = c2/((a-b)*(a2+b2-(a+b)*c));
   return [v1,v2,v3];
}

function bary_X920(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a*(-(a2*SA2)+b2*SB2+c2*SC2);
   let v2 = b*(a2*SA2-b2*SB2+c2*SC2);
   let v3 = c*(a2*SA2+b2*SB2-c2*SC2);
   return [v1,v2,v3];
}

function bary_X921(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a/(-(a2*SA2)+b2*SB2+c2*SC2);
   let v2 = b/(a2*SA2-b2*SB2+c2*SC2);
   let v3 = c/(a2*SA2+b2*SB2-c2*SC2);
   return [v1,v2,v3];
}

function bary_X922(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(2*a2-b2-c2);
   let v2 = b3*(-a2+2*b2-c2);
   let v3 = (-a2-b2+2*c2)*c3;
   return [v1,v2,v3];
}

function bary_X923(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a3/(2*a2-b2-c2);
   let v2 = b3/(-a2+2*b2-c2);
   let v3 = c3/(-a2-b2+2*c2);
   return [v1,v2,v3];
}

function bary_X924(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = a2*(-4*area*area+SA2)*(SB-SC);
   let v2 = b2*(-4*area*area+SB2)*(-SA+SC);
   let v3 = c2*(SA-SB)*(-4*area*area+SC2);
   return [v1,v2,v3];
}

function bary_X925(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = 1/((-4*area*area+SA2)*(SB-SC));
   let v2 = 1/((-4*area*area+SB2)*(-SA+SC));
   let v3 = 1/((SA-SB)*(-4*area*area+SC2));
   return [v1,v2,v3];
}

function bary_X926(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a-b-c)*(b-c)*(-b2+a*(b+c)-c2);
   let v2 = b2*(-a+b-c)*(-a+c)*(-a2+b*(a+c)-c2);
   let v3 = (a-b)*(-a-b+c)*(-a2-b2+(a+b)*c)*c2;
   return [v1,v2,v3];
}

function bary_X927(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 1/((a-b-c)*(b-c)*(-b2+a*(b+c)-c2));
   let v2 = 1/((-a+b-c)*(-a+c)*(-a2+b*(a+c)-c2));
   let v3 = 1/((a-b)*(-a-b+c)*(-a2-b2+(a+b)*c));
   return [v1,v2,v3];
}

function bary_X928(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c3=c2*c;
   let SB2=SB*SB;
   let b3=b2*b;
   let SA2=SA*SA;
   let a3=a2*a;
   /* end vars */
   let v1 = a2*(b-c)*(-2*a2*b*c+a3*(b+c)-a*(b-c)*(b-c)*(b+c)+2*(SA2-SB*SC));
   let v2 = b2*(-a+c)*(-2*a*b2*c+b3*(a+c)-b*(-a+c)*(-a+c)*(a+c)+2*(SB2-SA*SC));
   let v3 = (a-b)*c2*(-((a-b)*(a-b)*(a+b)*c)-2*a*b*c2+(a+b)*c3+2*(-(SA*SB)+SC2));
   return [v1,v2,v3];
}

function bary_X929(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let c3=c2*c;
   let SB2=SB*SB;
   let b3=b2*b;
   let SA2=SA*SA;
   let a3=a2*a;
   /* end vars */
   let v1 = 1/((b-c)*(-2*a2*b*c+a3*(b+c)-a*(b-c)*(b-c)*(b+c)+2*(SA2-SB*SC)));
   let v2 = 1/((-a+c)*(-2*a*b2*c+b3*(a+c)-b*(-a+c)*(-a+c)*(a+c)+2*(SB2-SA*SC)));
   let v3 = 1/((a-b)*(-((a-b)*(a-b)*(a+b)*c)-2*a*b*c2+(a+b)*c3+2*(-(SA*SB)+SC2)));
   return [v1,v2,v3];
}

function bary_X930(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let SB2=SB*SB;
   let SA2=SA*SA;
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = 1/((b2-c2)*(12*area*area-SA2));
   let v2 = 1/((-a2+c2)*(12*area*area-SB2));
   let v3 = 1/((a2-b2)*(12*area*area-SC2));
   return [v1,v2,v3];
}

function bary_X931(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a/((a2+a*b+a*c+2*b*c)*(b2-c2));
   let v2 = b/((a*b+b2+2*a*c+b*c)*(-a2+c2));
   let v3 = c/((a2-b2)*(2*a*b+a*c+b*c+c2));
   return [v1,v2,v3];
}

function bary_X932(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a*(a-b)*(a-c))/(a*b+a*c-b*c);
   let v2 = (b*(-a+b)*(b-c))/(a*b-a*c+b*c);
   let v3 = (c*(-a+c)*(-b+c))/(-(a*b)+a*c+b*c);
   return [v1,v2,v3];
}

function bary_X933(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2/(SA*(SB-SC)*(a2*SA+2*SB*SC));
   let v2 = b2/(SB*(-SA+SC)*(b2*SB+2*SA*SC));
   let v3 = c2/((SA-SB)*SC*(2*SA*SB+c2*SC));
   return [v1,v2,v3];
}

function bary_X934(orbit, [a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-b)*(a+b-c)*(a+b-c)*(-a+c)*(a-b+c)*(a-b+c);
   let v2 = (a-b)*b*(b-c)*(a+b-c)*(a+b-c)*(-a+b+c)*(-a+b+c);
   let v3 = (b-c)*c*(-a+c)*(a-b+c)*(a-b+c)*(-a+b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X935(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = (SB*SC)/((SB-SC)*(SA*(a2+SA)-3*SB*SC));
   let v2 = (SA*SC)/((-SA+SC)*(SB*(b2+SB)-3*SA*SC));
   let v3 = (SA*SB)/((SA-SB)*(-3*SA*SB+SC*(c2+SC)));
   return [v1,v2,v3];
}

function bary_X936(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3-a2*b-a*b2+b3-a2*c+2*a*b*c+3*b2*c-a*c2+3*b*c2+c3);
   let v2 = b*(a3-a2*b-a*b2+b3+3*a2*c+2*a*b*c-b2*c+3*a*c2-b*c2+c3);
   let v3 = c*(a3+3*a2*b+3*a*b2+b3-a2*c+2*a*b*c-b2*c-a*c2-b*c2+c3);
   return [v1,v2,v3];
}

function bary_X937(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a/(a3-a2*b-a*b2+b3-a2*c+2*a*b*c+3*b2*c-a*c2+3*b*c2+c3);
   let v2 = b/(a3-a2*b-a*b2+b3+3*a2*c+2*a*b*c-b2*c+3*a*c2-b*c2+c3);
   let v3 = c/(a3+3*a2*b+3*a*b2+b3-a2*c+2*a*b*c-b2*c-a*c2-b*c2+c3);
   return [v1,v2,v3];
}

function bary_X938(orbit, [a,b,c]) {
   /* begin vars */
   let b2=b*b;
   let a2=a*a;
   let c2=c*c;
   let b3=b2*b;
   let b4=b2*b2;
   let a3=a2*a;
   let a4=a2*a2;
   let c4=c2*c2;
   let c3=c2*c;
   /* end vars */
   let v1 = Math.pow(a-b,3)*(a+b)-2*a*(a+b)*(a+b)*c-2*(a-b)*b*c2+2*a*c3-c4;
   let v2 = -a4+2*a3*b-2*a2*(b-c)*c+Math.pow(b-c,3)*(b+c)-2*a*b*(b+c)*(b+c);
   let v3 = -b4+2*b3*c-2*a*b2*(-a+c)+Math.pow(-a+c,3)*(a+c)-2*b*c*(a+c)*(a+c);
   return [v1,v2,v3];
}

function bary_X939(orbit, [a,b,c]) {
   /* begin vars */
   let b2=b*b;
   let a2=a*a;
   let c2=c*c;
   let b3=b2*b;
   let b4=b2*b2;
   let a3=a2*a;
   let a4=a2*a2;
   let c4=c2*c2;
   let c3=c2*c;
   /* end vars */
   let v1 = a2/(Math.pow(a-b,3)*(a+b)-2*a*(a+b)*(a+b)*c-2*(a-b)*b*c2+2*a*c3-c4);
   let v2 = b2/(-a4+2*a3*b-2*a2*(b-c)*c+Math.pow(b-c,3)*(b+c)-2*a*b*(b+c)*(b+c));
   let v3 = c2/(-b4+2*b3*c-2*a*b2*(-a+c)+Math.pow(-a+c,3)*(a+c)-2*b*c*(a+c)*(a+c));
   return [v1,v2,v3];
}

function bary_X940(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2+a*b+a*c+2*b*c);
   let v2 = b*(a*b+b2+2*a*c+b*c);
   let v3 = c*(2*a*b+a*c+b*c+c2);
   return [v1,v2,v3];
}

function bary_X941(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a/(a2+a*b+a*c+2*b*c);
   let v2 = b/(a*b+b2+2*a*c+b*c);
   let v3 = c/(2*a*b+a*c+b*c+c2);
   return [v1,v2,v3];
}

function bary_X942(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = b*(a+c)*SB+(a+b)*c*SC;
   let v2 = a*(b+c)*SA+(a+b)*c*SC;
   let v3 = a*(b+c)*SA+b*(a+c)*SB;
   return [v1,v2,v3];
}

function bary_X943(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let SA=(b2+c2-a2)/2;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   /* end vars */
   let v1 = a2/(b*(a+c)*SB+(a+b)*c*SC);
   let v2 = b2/(a*(b+c)*SA+(a+b)*c*SC);
   let v3 = c2/(a*(b+c)*SA+b*(a+c)*SB);
   return [v1,v2,v3];
}

function bary_X944(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b+c)-a*(b-c)*(b-c)*(b+c)+a2*(-2*b*c+2*SA)-2*SB*SC;
   let v2 = b3*(a+c)-b*(-a+c)*(-a+c)*(a+c)+b2*(-2*a*c+2*SB)-2*SA*SC;
   let v3 = -((a-b)*(a-b)*(a+b)*c)+(a+b)*c3-2*SA*SB+c2*(-2*a*b+2*SC);
   return [v1,v2,v3];
}

function bary_X945(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3*(b+c)-a*(b-c)*(b-c)*(b+c)+a2*(-2*b*c+2*SA)-2*SB*SC);
   let v2 = b2/(b3*(a+c)-b*(-a+c)*(-a+c)*(a+c)+b2*(-2*a*c+2*SB)-2*SA*SC);
   let v3 = c2/(-((a-b)*(a-b)*(a+b)*c)+(a+b)*c3-2*SA*SB+c2*(-2*a*b+2*SC));
   return [v1,v2,v3];
}

function bary_X946(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b+c)-a*(b-c)*(b-c)*(b+c)-2*a2*(b*c-SA)+4*SB*SC;
   let v2 = b3*(a+c)-b*(-a+c)*(-a+c)*(a+c)-2*b2*(a*c-SB)+4*SA*SC;
   let v3 = -((a-b)*(a-b)*(a+b)*c)+(a+b)*c3+4*SA*SB-2*c2*(a*b-SC);
   return [v1,v2,v3];
}

function bary_X947(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3*(b+c)-a*(b-c)*(b-c)*(b+c)-2*a2*(b*c-SA)+4*SB*SC);
   let v2 = b2/(b3*(a+c)-b*(-a+c)*(-a+c)*(a+c)-2*b2*(a*c-SB)+4*SA*SC);
   let v3 = c2/(-((a-b)*(a-b)*(a+b)*c)+(a+b)*c3+4*SA*SB-2*c2*(a*b-SC));
   return [v1,v2,v3];
}

function bary_X948(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(a3-a2*(b+c)-(b-c)*(b-c)*(b+c)+a*(b+c)*(b+c));
   let v2 = (a+b-c)*(-a+b+c)*(b3-b2*(a+c)-(-a+c)*(-a+c)*(a+c)+b*(a+c)*(a+c));
   let v3 = (a-b+c)*(-a+b+c)*(-((a-b)*(a-b)*(a+b))+(a+b)*(a+b)*c-(a+b)*c2+c3);
   return [v1,v2,v3];
}

function bary_X949(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/((a+b-c)*(a-b+c)*(a3-a2*(b+c)-(b-c)*(b-c)*(b+c)+a*(b+c)*(b+c)));
   let v2 = b2/((a+b-c)*(-a+b+c)*(b3-b2*(a+c)-(-a+c)*(-a+c)*(a+c)+b*(a+c)*(a+c)));
   let v3 = c2/((a-b+c)*(-a+b+c)*(-((a-b)*(a-b)*(a+b))+(a+b)*(a+b)*c-(a+b)*c2+c3));
   return [v1,v2,v3];
}

function bary_X950(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = (a-b-c)*(2*a3+a2*b+b3+a2*c-b2*c-b*c2+c3);
   let v2 = (-a+b-c)*(a3+a*b2+2*b3-a2*c+b2*c-a*c2+c3);
   let v3 = (-a-b+c)*(a3-a2*b-a*b2+b3+a*c2+b*c2+2*c3);
   return [v1,v2,v3];
}

function bary_X951(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/((a-b-c)*(2*a3+a2*b+b3+a2*c-b2*c-b*c2+c3));
   let v2 = b2/((-a+b-c)*(a3+a*b2+2*b3-a2*c+b2*c-a*c2+c3));
   let v3 = c2/((-a-b+c)*(a3-a2*b-a*b2+b3+a*c2+b*c2+2*c3));
   return [v1,v2,v3];
}

function bary_X952(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = a3*(b+c)-a*(b-c)*(b-c)*(b+c)+a2*(-2*b*c+SA)-2*SB*SC;
   let v2 = b3*(a+c)-b*(-a+c)*(-a+c)*(a+c)+b2*(-2*a*c+SB)-2*SA*SC;
   let v3 = -((a-b)*(a-b)*(a+b)*c)+(a+b)*c3-2*SA*SB+c2*(-2*a*b+SC);
   return [v1,v2,v3];
}

function bary_X953(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let a3=a2*a;
   /* end vars */
   let v1 = a2/(a3*(b+c)-a*(b-c)*(b-c)*(b+c)+a2*(-2*b*c+SA)-2*SB*SC);
   let v2 = b2/(b3*(a+c)-b*(-a+c)*(-a+c)*(a+c)+b2*(-2*a*c+SB)-2*SA*SC);
   let v3 = c2/(-((a-b)*(a-b)*(a+b)*c)+(a+b)*c3-2*SA*SB+c2*(-2*a*b+SC));
   return [v1,v2,v3];
}

function bary_X954(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   let SA=(b2+c2-a2)/2;
   let c5=c2*c3;
   let b5=b2*b3;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a*(a5-a*(SB-SC)*(SB-SC)+2*(b5+c5-c*(SA-SB)*(SA-SB)+2*b3*SB-b*(SA-SC)*(SA-SC)+2*c3*SC));
   let v2 = b*(b5-b*(-SA+SC)*(-SA+SC)+2*(a5+c5+2*a3*SA-c*(-SA+SB)*(-SA+SB)-a*(SB-SC)*(SB-SC)+2*c3*SC));
   let v3 = c*(c5-c*(SA-SB)*(SA-SB)+2*(a5+b5+2*a3*SA+2*b3*SB-b*(-SA+SC)*(-SA+SC)-a*(-SB+SC)*(-SB+SC)));
   return [v1,v2,v3];
}

function bary_X955(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   let SA=(b2+c2-a2)/2;
   let c5=c2*c3;
   let b5=b2*b3;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a/(a5-a*(SB-SC)*(SB-SC)+2*(b5+c5-c*(SA-SB)*(SA-SB)+2*b3*SB-b*(SA-SC)*(SA-SC)+2*c3*SC));
   let v2 = b/(b5-b*(-SA+SC)*(-SA+SC)+2*(a5+c5+2*a3*SA-c*(-SA+SB)*(-SA+SB)-a*(SB-SC)*(SB-SC)+2*c3*SC));
   let v3 = c/(c5-c*(SA-SB)*(SA-SB)+2*(a5+b5+2*a3*SA+2*b3*SB-b*(-SA+SC)*(-SA+SC)-a*(-SB+SC)*(-SB+SC)));
   return [v1,v2,v3];
}

function bary_X956(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a*b*c*(-a+b+c)+a2*SA;
   let v2 = a*b*c*(a-b+c)+b2*SB;
   let v3 = a*b*(a+b-c)*c+c2*SC;
   return [v1,v2,v3];
}

function bary_X957(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2/(a*b*c*(-a+b+c)+a2*SA);
   let v2 = b2/(a*b*c*(a-b+c)+b2*SB);
   let v3 = c2/(a*b*(a+b-c)*c+c2*SC);
   return [v1,v2,v3];
}

function bary_X958(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a-b-c)*(a2+a*b+a*c+2*b*c);
   let v2 = b*(-a+b-c)*(a*b+b2+2*a*c+b*c);
   let v3 = c*(-a-b+c)*(2*a*b+a*c+b*c+c2);
   return [v1,v2,v3];
}

function bary_X959(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a/((a-b-c)*(a2+a*b+a*c+2*b*c));
   let v2 = b/((-a+b-c)*(a*b+b2+2*a*c+b*c));
   let v3 = c/((-a-b+c)*(2*a*b+a*c+b*c+c2));
   return [v1,v2,v3];
}

function bary_X960(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(-a+b+c)*(a*b+b2+a*c+c2);
   let v2 = b*(a-b+c)*(a2+a*b+b*c+c2);
   let v3 = (a+b-c)*c*(a2+b2+a*c+b*c);
   return [v1,v2,v3];
}

function bary_X961(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a/((-a+b+c)*(a*b+b2+a*c+c2));
   let v2 = b/((a-b+c)*(a2+a*b+b*c+c2));
   let v3 = c/((a+b-c)*(a2+b2+a*c+b*c));
   return [v1,v2,v3];
}

function bary_X962(orbit, [a,b,c]) {
   /* begin vars */
   let b2=b*b;
   let a2=a*a;
   let c2=c*c;
   let b3=b2*b;
   let b4=b2*b2;
   let a3=a2*a;
   let a4=a2*a2;
   let c4=c2*c2;
   let c3=c2*c;
   /* end vars */
   let v1 = (a-b)*Math.pow(a+b,3)+2*a*(a-b)*(a-b)*c+2*b*(a+b)*c2-2*a*c3-c4;
   let v2 = -a4-2*a3*b+2*a*b*(b-c)*(b-c)+2*a2*c*(b+c)+(b-c)*Math.pow(b+c,3);
   let v3 = -b4-2*b3*c+2*b*c*(-a+c)*(-a+c)+2*a*b2*(a+c)+(-a+c)*Math.pow(a+c,3);
   return [v1,v2,v3];
}

function bary_X963(orbit, [a,b,c]) {
   /* begin vars */
   let b2=b*b;
   let a2=a*a;
   let c2=c*c;
   let b3=b2*b;
   let b4=b2*b2;
   let a3=a2*a;
   let a4=a2*a2;
   let c4=c2*c2;
   let c3=c2*c;
   /* end vars */
   let v1 = a2/((a-b)*Math.pow(a+b,3)+2*a*(a-b)*(a-b)*c+2*b*(a+b)*c2-2*a*c3-c4);
   let v2 = b2/(-a4-2*a3*b+2*a*b*(b-c)*(b-c)+2*a2*c*(b+c)+(b-c)*Math.pow(b+c,3));
   let v3 = c2/(-b4-2*b3*c+2*b*c*(-a+c)*(-a+c)+2*a*b2*(a+c)+(-a+c)*Math.pow(a+c,3));
   return [v1,v2,v3];
}

function bary_X964(orbit, [a,b,c]) {
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
   let v1 = a4+a3*(b+c)+a2*(b+c)*(b+c)+b*c*(b+c)*(b+c)+a*(b+c)*(b2+b*c+c2);
   let v2 = b4+b3*(a+c)+b2*(a+c)*(a+c)+a*c*(a+c)*(a+c)+b*(a+c)*(a2+a*c+c2);
   let v3 = a*b*(a+b)*(a+b)+(a+b)*(a2+a*b+b2)*c+(a+b)*(a+b)*c2+(a+b)*c3+c4;
   return [v1,v2,v3];
}

function bary_X965(orbit, [a,b,c]) {
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
   let v1 = a*(a4-a3*(b+c)+2*b*c*(b+c)*(b+c)+a*Math.pow(b+c,3)-a2*(b2+c2));
   let v2 = b*(b4-b3*(a+c)+2*a*c*(a+c)*(a+c)+b*Math.pow(a+c,3)-b2*(a2+c2));
   let v3 = c*(2*a*b*(a+b)*(a+b)+Math.pow(a+b,3)*c-(a2+b2)*c2-(a+b)*c3+c4);
   return [v1,v2,v3];
}

function bary_X966(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = b*c+a*(b+c)+SA;
   let v2 = a*c+b*(a+c)+SB;
   let v3 = a*b+(a+b)*c+SC;
   return [v1,v2,v3];
}

function bary_X967(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2/(b*c+a*(b+c)+SA);
   let v2 = b2/(a*c+b*(a+c)+SB);
   let v3 = c2/(a*b+(a+b)*c+SC);
   return [v1,v2,v3];
}

function bary_X968(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2-2*a*(b+c)-(b+c)*(b+c));
   let v2 = b*(b2-2*b*(a+c)-(a+c)*(a+c));
   let v3 = c*(-(a+b)*(a+b)-2*(a+b)*c+c2);
   return [v1,v2,v3];
}

function bary_X969(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a/(a2-2*a*(b+c)-(b+c)*(b+c));
   let v2 = b/(b2-2*b*(a+c)-(a+c)*(a+c));
   let v3 = c/(-(a+b)*(a+b)-2*(a+b)*c+c2);
   return [v1,v2,v3];
}

function bary_X970(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a4=a2*a2;
   let c3=c2*c;
   let b3=b2*b;
   let c4=c2*c2;
   let b4=b2*b2;
   let a3=a2*a;
   /* end vars */
   let v1 = a2*(a3*(b+c)*(b+c)+a2*(b+c)*(b2+c2)-(b+c)*(b4+c4)-a*(b4+2*b3*c+2*b*c3+c4));
   let v2 = b2*(b3*(a+c)*(a+c)+b2*(a+c)*(a2+c2)-(a+c)*(a4+c4)-b*(a4+2*a3*c+2*a*c3+c4));
   let v3 = c2*(-((a+b)*(a4+b4))-(a4+2*a3*b+2*a*b3+b4)*c+(a+b)*(a2+b2)*c2+(a+b)*(a+b)*c3);
   return [v1,v2,v3];
}

function bary_X971(orbit, [a,b,c]) {
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
   let v1 = a*(a4*(b+c)-(b-c)*(b-c)*Math.pow(b+c,3)-2*a3*(b2-b*c+c2)+2*a*(b-c)*(b-c)*(b2+b*c+c2));
   let v2 = b*(b4*(a+c)-(-a+c)*(-a+c)*Math.pow(a+c,3)-2*b3*(a2-a*c+c2)+2*b*(-a+c)*(-a+c)*(a2+a*c+c2));
   let v3 = c*(-((a-b)*(a-b)*Math.pow(a+b,3))+2*(a-b)*(a-b)*(a2+a*b+b2)*c-2*(a2-a*b+b2)*c3+(a+b)*c4);
   return [v1,v2,v3];
}

function bary_X972(orbit, [a,b,c]) {
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
   let v1 = a/(a4*(b+c)-(b-c)*(b-c)*Math.pow(b+c,3)-2*a3*(b2-b*c+c2)+2*a*(b-c)*(b-c)*(b2+b*c+c2));
   let v2 = b/(b4*(a+c)-(-a+c)*(-a+c)*Math.pow(a+c,3)-2*b3*(a2-a*c+c2)+2*b*(-a+c)*(-a+c)*(a2+a*c+c2));
   let v3 = c/(-((a-b)*(a-b)*Math.pow(a+b,3))+2*(a-b)*(a-b)*(a2+a*b+b2)*c-2*(a2-a*b+b2)*c3+(a+b)*c4);
   return [v1,v2,v3];
}

function bary_X973(orbit, [a,b,c]) {
   /* begin vars */
   let b2=b*b;
   let a2=a*a;
   let c2=c*c;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let b4=b2*b2;
   let a4=a2*a2;
   let SC2=SC*SC;
   let c4=c2*c2;
   let SB2=SB*SB;
   let SA2=SA*SA;
   /* end vars */
   let v1 = a2*(a2*SA+2*SB*SC)*(SA*SB*(SA2+7*SA*SB+2*SB2)*SC+c4*Math.pow(SC,3)+c2*(SA2*SB2+(SA2+6*SA*SB+SB2)*SC2));
   let v2 = b2*(b2*SB+2*SA*SC)*(a4*Math.pow(SA,3)+SA*SB*SC*(SB2+7*SB*SC+2*SC2)+a2*(SB2*SC2+SA2*(SB2+6*SB*SC+SC2)));
   let v3 = c2*(2*SA*SB+c2*SC)*(b4*Math.pow(SB,3)+SA*SB*SC*(2*SA2+7*SA*SC+SC2)+b2*(SA2*SC2+SB2*(SA2+6*SA*SC+SC2)));
   return [v1,v2,v3];
}

function bary_X974(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   let SC2=SC*SC;
   let b4=b2*b2;
   let SB2=SB*SB;
   let a4=a2*a2;
   let SA2=SA*SA;
   let c4=c2*c2;
   /* end vars */
   let v1 = a2*SA*(c4*Math.pow(SC,4)+Math.pow(SB,3)*SC*(-2*SA2+2*SA*SB-3*SA*SC+SB*SC)+c2*SA*(SA*Math.pow(SB,3)+(SA-3*SB)*Math.pow(SC,3)));
   let v2 = b2*SB*(a4*Math.pow(SA,4)+SA*Math.pow(SC,3)*(-3*SA*SB-2*SB2+SA*SC+2*SB*SC)+a2*SB*(Math.pow(SA,3)*(SB-3*SC)+SB*Math.pow(SC,3)));
   let v3 = c2*SC*(b4*Math.pow(SB,4)+b2*SC*(Math.pow(SA,3)*SC+Math.pow(SB,3)*(-3*SA+SC))+Math.pow(SA,3)*SB*(SA*SB+2*SA*SC-3*SB*SC-2*SC2));
   return [v1,v2,v3];
}

function bary_X975(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3+a2*(b+c)+Math.pow(b+c,3)+a*(b2+4*b*c+c2));
   let v2 = b*(b3+b2*(a+c)+Math.pow(a+c,3)+b*(a2+4*a*c+c2));
   let v3 = c*(Math.pow(a+b,3)+(a2+4*a*b+b2)*c+(a+b)*c2+c3);
   return [v1,v2,v3];
}

function bary_X976(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3+(b+c)*(b2+c2));
   let v2 = b*(b3+(a+c)*(a2+c2));
   let v3 = c*((a+b)*(a2+b2)+c3);
   return [v1,v2,v3];
}

function bary_X977(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a/(a3+(b+c)*(b2+c2));
   let v2 = b/(b3+(a+c)*(a2+c2));
   let v3 = c/((a+b)*(a2+b2)+c3);
   return [v1,v2,v3];
}

function bary_X978(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a*(a2*(b+c)-b*c*(b+c)+a*(b2-b*c+c2));
   let v2 = b*(b2*(a+c)-a*c*(a+c)+b*(a2-a*c+c2));
   let v3 = c*(-(a*b*(a+b))+(a2-a*b+b2)*c+(a+b)*c2);
   return [v1,v2,v3];
}

function bary_X979(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a/(a2*(b+c)-b*c*(b+c)+a*(b2-b*c+c2));
   let v2 = b/(b2*(a+c)-a*c*(a+c)+b*(a2-a*c+c2));
   let v3 = c/(-(a*b*(a+b))+(a2-a*b+b2)*c+(a+b)*c2);
   return [v1,v2,v3];
}

function bary_X980(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*((a*b+a*c+b*c)*(b2+c2)+a2*(b2+b*c+c2));
   let v2 = b*((a*b+a*c+b*c)*(a2+c2)+b2*(a2+a*c+c2));
   let v3 = c*((a2+b2)*(a*b+a*c+b*c)+(a2+a*b+b2)*c2);
   return [v1,v2,v3];
}

function bary_X981(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a/((a*b+a*c+b*c)*(b2+c2)+a2*(b2+b*c+c2));
   let v2 = b/((a*b+a*c+b*c)*(a2+c2)+b2*(a2+a*c+c2));
   let v3 = c/((a2+b2)*(a*b+a*c+b*c)+(a2+a*b+b2)*c2);
   return [v1,v2,v3];
}

function bary_X982(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(b2-b*c+c2);
   let v2 = b*(a2-a*c+c2);
   let v3 = (a2-a*b+b2)*c;
   return [v1,v2,v3];
}

function bary_X983(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a/(b2-b*c+c2);
   let v2 = b/(a2-a*c+c2);
   let v3 = c/(a2-a*b+b2);
   return [v1,v2,v3];
}

function bary_X984(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a*(b2+b*c+c2);
   let v2 = b*(a2+a*c+c2);
   let v3 = (a2+a*b+b2)*c;
   return [v1,v2,v3];
}

function bary_X985(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = a/(b2+b*c+c2);
   let v2 = b/(a2+a*c+c2);
   let v3 = c/(a2+a*b+b2);
   return [v1,v2,v3];
}

function bary_X986(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a*(b3+a*(b2+b*c+c2)+c3);
   let v2 = b*(a3+b*(a2+a*c+c2)+c3);
   let v3 = c*(a3+b3+(a2+a*b+b2)*c);
   return [v1,v2,v3];
}

function bary_X987(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   let a3=a2*a;
   let c3=c2*c;
   let b3=b2*b;
   /* end vars */
   let v1 = a/(b3+a*(b2+b*c+c2)+c3);
   let v2 = b/(a3+b*(a2+a*c+c2)+c3);
   let v3 = c/(a3+b3+(a2+a*b+b2)*c);
   return [v1,v2,v3];
}

function bary_X988(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3-a2*(b+c)-(3*a+b+c)*(b2+c2));
   let v2 = b*(b3-b2*(a+c)-(a+3*b+c)*(a2+c2));
   let v3 = c*(-((a2+b2)*(a+b+3*c))-(a+b)*c2+c3);
   return [v1,v2,v3];
}

function bary_X989(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a/(a3-a2*(b+c)-(3*a+b+c)*(b2+c2));
   let v2 = b/(b3-b2*(a+c)-(a+3*b+c)*(a2+c2));
   let v3 = c/(-((a2+b2)*(a+b+3*c))-(a+b)*c2+c3);
   return [v1,v2,v3];
}

function bary_X990(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let c3=c2*c;
   let b2=b*b;
   let b3=b2*b;
   let a2=a*a;
   let a3=a2*a;
   let c5=c2*c3;
   let c4=c2*c2;
   let b4=b2*b2;
   let b5=b2*b3;
   let a4=a2*a2;
   let a5=a2*a3;
   /* end vars */
   let v1 = a*(a5-2*a3*b*c-a4*(b+c)+(b-c)*(b-c)*Math.pow(b+c,3)-a*(b-c)*(b-c)*(b2+c2));
   let v2 = b*(b5-2*a*b3*c-b4*(a+c)+(-a+c)*(-a+c)*Math.pow(a+c,3)-b*(-a+c)*(-a+c)*(a2+c2));
   let v3 = c*((a-b)*(a-b)*Math.pow(a+b,3)-(a-b)*(a-b)*(a2+b2)*c-2*a*b*c3-(a+b)*c4+c5);
   return [v1,v2,v3];
}

function bary_X991(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a2*(a3*(b+c)-a*(b+c)*(b2+c2)-a2*(b2-b*c+c2)+(b-c)*(b3-c3));
   let v2 = b2*(b3*(a+c)-b*(a+c)*(a2+c2)-b2*(a2-a*c+c2)+(-a+c)*(-a3+c3));
   let v3 = c2*((a-b)*(a3-b3)-(a+b)*(a2+b2)*c-(a2-a*b+b2)*c2+(a+b)*c3);
   return [v1,v2,v3];
}

function bary_X992(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3*(b+c)-a*b*c*(b+c)-b*c*(b+c)*(b+c)+a2*(b2+c2));
   let v2 = b*(b3*(a+c)-a*b*c*(a+c)-a*c*(a+c)*(a+c)+b2*(a2+c2));
   let v3 = c*(-(a*b*(a+b)*(a+b))-a*b*(a+b)*c+(a2+b2)*c2+(a+b)*c3);
   return [v1,v2,v3];
}

function bary_X993(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3-b*c*(b+c)-a*(b2+c2));
   let v2 = b*(b3-a*c*(a+c)-b*(a2+c2));
   let v3 = c*(-(a*b*(a+b))-(a2+b2)*c+c3);
   return [v1,v2,v3];
}

function bary_X994(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a/(a3-b*c*(b+c)-a*(b2+c2));
   let v2 = b/(b3-a*c*(a+c)-b*(a2+c2));
   let v3 = c/(-(a*b*(a+b))-(a2+b2)*c+c3);
   return [v1,v2,v3];
}

function bary_X995(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   /* end vars */
   let v1 = a2*(a*b+b2+a*c-b*c+c2);
   let v2 = b2*(a2+a*b-a*c+b*c+c2);
   let v3 = (a2-a*b+b2+a*c+b*c)*c2;
   return [v1,v2,v3];
}

function bary_X996(orbit, [a,b,c]) {
   /* begin vars */
   let a2=a*a;
   let c2=c*c;
   let b2=b*b;
   /* end vars */
   let v1 = 1/(a*b+b2+a*c-b*c+c2);
   let v2 = 1/(a2+a*b-a*c+b*c+c2);
   let v3 = 1/(a2-a*b+b2+a*c+b*c);
   return [v1,v2,v3];
}

function bary_X997(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a*(a3-a*(b-c)*(b-c)-a2*(b+c)+(b+c)*(b2+c2));
   let v2 = b*(b3-b*(-a+c)*(-a+c)-b2*(a+c)+(a+c)*(a2+c2));
   let v3 = c*((a+b)*(a2+b2)-(a-b)*(a-b)*c-(a+b)*c2+c3);
   return [v1,v2,v3];
}

function bary_X998(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let c3=c2*c;
   let b3=b2*b;
   let a3=a2*a;
   /* end vars */
   let v1 = a/(a3-a*(b-c)*(b-c)-a2*(b+c)+(b+c)*(b2+c2));
   let v2 = b/(b3-b*(-a+c)*(-a+c)-b2*(a+c)+(a+c)*(a2+c2));
   let v3 = c/((a+b)*(a2+b2)-(a-b)*(a-b)*c-(a+b)*c2+c3);
   return [v1,v2,v3];
}

function bary_X999(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = a2*(2*b*c-SA);
   let v2 = b2*(2*a*c-SB);
   let v3 = c2*(2*a*b-SC);
   return [v1,v2,v3];
}

function bary_X1000(orbit, [a,b,c]) {
   /* begin vars */
   let c2=c*c;
   let b2=b*b;
   let a2=a*a;
   let SC=(a2+b2-c2)/2;
   let SB=(c2+a2-b2)/2;
   let SA=(b2+c2-a2)/2;
   /* end vars */
   let v1 = 1/(2*b*c-SA);
   let v2 = 1/(2*a*c-SB);
   let v3 = 1/(2*a*b-SC);
   return [v1,v2,v3];
}