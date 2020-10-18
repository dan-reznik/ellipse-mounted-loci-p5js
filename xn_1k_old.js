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

function bary_X1([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a;
   let v2 = b;
   let v3 = c;
   return [v1,v2,v3];
}

function bary_X2([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1;
   let v2 = 1;
   let v3 = 1;
   return [v1,v2,v3];
}

function bary_X3([a,b,c]) {
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

function bary_X4([a,b,c]) {
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

function bary_X5([a,b,c]) {
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

function bary_X6([a,b,c]) {
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

function bary_X7([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b-c)*(a-b+c);
   let v2 = (a+b-c)*(-a+b+c);
   let v3 = (a-b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X8([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = -a+b+c;
   let v2 = a-b+c;
   let v3 = a+b-c;
   return [v1,v2,v3];
}

function bary_X9([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-b-c);
   let v2 = b*(-a+b-c);
   let v3 = c*(-a-b+c);
   return [v1,v2,v3];
}

function bary_X10([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b+c;
   let v2 = a+c;
   let v3 = a+b;
   return [v1,v2,v3];
}

function bary_X11([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b-c)*(b-c)*(-a+b+c);
   let v2 = (-a+c)*(-a+c)*(a-b+c);
   let v3 = (a-b)*(a-b)*(a+b-c);
   return [v1,v2,v3];
}

function bary_X12([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(b+c)*(b+c);
   let v2 = (a+b-c)*(a+c)*(a+c)*(-a+b+c);
   let v3 = (a+b)*(a+b)*(a-b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X13([a,b,c]) {
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

function bary_X14([a,b,c]) {
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

function bary_X15([a,b,c]) {
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

function bary_X16([a,b,c]) {
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

function bary_X17([a,b,c]) {
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

function bary_X18([a,b,c]) {
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

function bary_X19([a,b,c]) {
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

function bary_X20([a,b,c]) {
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

function bary_X21([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b)*(a-b-c)*(a+c);
   let v2 = b*(a+b)*(-a+b-c)*(b+c);
   let v3 = c*(a+c)*(-a-b+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X22([a,b,c]) {
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

function bary_X23([a,b,c]) {
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

function bary_X24([a,b,c]) {
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

function bary_X25([a,b,c]) {
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

function bary_X26([a,b,c]) {
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

function bary_X27([a,b,c]) {
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

function bary_X28([a,b,c]) {
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

function bary_X29([a,b,c]) {
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

function bary_X30([a,b,c]) {
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

function bary_X31([a,b,c]) {
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

function bary_X32([a,b,c]) {
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

function bary_X33([a,b,c]) {
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

function bary_X34([a,b,c]) {
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

function bary_X35([a,b,c]) {
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

function bary_X36([a,b,c]) {
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

function bary_X37([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b+c);
   let v2 = b*(a+c);
   let v3 = (a+b)*c;
   return [v1,v2,v3];
}

function bary_X38([a,b,c]) {
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

function bary_X39([a,b,c]) {
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

function bary_X40([a,b,c]) {
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

function bary_X41([a,b,c]) {
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

function bary_X42([a,b,c]) {
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

function bary_X43([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a*b+a*c-b*c);
   let v2 = b*(a*b-a*c+b*c);
   let v3 = c*(-(a*b)+a*c+b*c);
   return [v1,v2,v3];
}

function bary_X44([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(2*a-b-c);
   let v2 = b*(-a+2*b-c);
   let v3 = c*(-a-b+2*c);
   return [v1,v2,v3];
}

function bary_X45([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-2*b-2*c);
   let v2 = b*(-2*a+b-2*c);
   let v3 = c*(-2*a-2*b+c);
   return [v1,v2,v3];
}

function bary_X46([a,b,c]) {
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

function bary_X47([a,b,c]) {
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

function bary_X48([a,b,c]) {
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

function bary_X49([a,b,c]) {
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

function bary_X50([a,b,c]) {
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

function bary_X51([a,b,c]) {
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

function bary_X52([a,b,c]) {
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

function bary_X53([a,b,c]) {
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

function bary_X54([a,b,c]) {
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

function bary_X55([a,b,c]) {
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

function bary_X56([a,b,c]) {
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

function bary_X57([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c);
   let v2 = b*(a+b-c)*(-a+b+c);
   let v3 = c*(a-b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X58([a,b,c]) {
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

function bary_X59([a,b,c]) {
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

function bary_X60([a,b,c]) {
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

function bary_X61([a,b,c]) {
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

function bary_X62([a,b,c]) {
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

function bary_X63([a,b,c]) {
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

function bary_X64([a,b,c]) {
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

function bary_X65([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b-c)*(a-b+c)*(b+c);
   let v2 = b*(a+b-c)*(a+c)*(-a+b+c);
   let v3 = (a+b)*c*(a-b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X66([a,b,c]) {
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

function bary_X67([a,b,c]) {
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

function bary_X68([a,b,c]) {
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

function bary_X69([a,b,c]) {
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

function bary_X70([a,b,c]) {
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

function bary_X71([a,b,c]) {
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

function bary_X72([a,b,c]) {
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

function bary_X73([a,b,c]) {
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

function bary_X74([a,b,c]) {
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

function bary_X75([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c;
   let v2 = a*c;
   let v3 = a*b;
   return [v1,v2,v3];
}

function bary_X76([a,b,c]) {
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

function bary_X77([a,b,c]) {
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

function bary_X78([a,b,c]) {
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

function bary_X79([a,b,c]) {
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

function bary_X80([a,b,c]) {
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

function bary_X81([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b)*(a+c);
   let v2 = b*(a+b)*(b+c);
   let v3 = c*(a+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X82([a,b,c]) {
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

function bary_X83([a,b,c]) {
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

function bary_X84([a,b,c]) {
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

function bary_X85([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*(-a+b-c)*(a+b-c)*c;
   let v2 = a*c*(-a-b+c)*(-a+b+c);
   let v3 = a*b*(a-b-c)*(a-b+c);
   return [v1,v2,v3];
}

function bary_X86([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b)*(a+c);
   let v2 = (a+b)*(b+c);
   let v3 = (a+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X87([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a*b-a*c-b*c)*(a*b-a*c+b*c);
   let v2 = b*(-(a*b)-a*c+b*c)*(-(a*b)+a*c+b*c);
   let v3 = c*(-(a*b)+a*c-b*c)*(a*b+a*c-b*c);
   return [v1,v2,v3];
}

function bary_X88([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b-2*c)*(a-2*b+c);
   let v2 = b*(a+b-2*c)*(-2*a+b+c);
   let v3 = c*(a-2*b+c)*(-2*a+b+c);
   return [v1,v2,v3];
}

function bary_X89([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(2*a+2*b-c)*(2*a-b+2*c);
   let v2 = b*(2*a+2*b-c)*(-a+2*b+2*c);
   let v3 = c*(2*a-b+2*c)*(-a+2*b+2*c);
   return [v1,v2,v3];
}

function bary_X90([a,b,c]) {
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

function bary_X91([a,b,c]) {
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

function bary_X92([a,b,c]) {
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

function bary_X93([a,b,c]) {
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

function bary_X94([a,b,c]) {
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

function bary_X95([a,b,c]) {
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

function bary_X96([a,b,c]) {
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

function bary_X97([a,b,c]) {
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

function bary_X98([a,b,c]) {
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

function bary_X99([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a-b)*(a+b)*(a-c)*(a+c);
   let v2 = (-a+b)*(a+b)*(b-c)*(b+c);
   let v3 = (-a+c)*(a+c)*(-b+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X100([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-b)*(a-c);
   let v2 = b*(-a+b)*(b-c);
   let v3 = c*(-a+c)*(-b+c);
   return [v1,v2,v3];
}

function bary_X101([a,b,c]) {
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

function bary_X102([a,b,c]) {
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

function bary_X103([a,b,c]) {
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

function bary_X104([a,b,c]) {
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

function bary_X105([a,b,c]) {
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

function bary_X106([a,b,c]) {
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

function bary_X107([a,b,c]) {
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

function bary_X108([a,b,c]) {
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

function bary_X109([a,b,c]) {
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

function bary_X110([a,b,c]) {
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

function bary_X111([a,b,c]) {
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

function bary_X112([a,b,c]) {
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

function bary_X113([a,b,c]) {
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

function bary_X114([a,b,c]) {
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

function bary_X115([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b-c)*(b-c)*(b+c)*(b+c);
   let v2 = (-a+c)*(-a+c)*(a+c)*(a+c);
   let v3 = (a-b)*(a-b)*(a+b)*(a+b);
   return [v1,v2,v3];
}

function bary_X116([a,b,c]) {
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

function bary_X117([a,b,c]) {
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

function bary_X118([a,b,c]) {
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

function bary_X119([a,b,c]) {
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

function bary_X120([a,b,c]) {
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

function bary_X121([a,b,c]) {
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

function bary_X122([a,b,c]) {
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

function bary_X123([a,b,c]) {
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

function bary_X124([a,b,c]) {
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

function bary_X125([a,b,c]) {
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

function bary_X126([a,b,c]) {
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

function bary_X127([a,b,c]) {
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

function bary_X128([a,b,c]) {
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

function bary_X129([a,b,c]) {
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

function bary_X130([a,b,c]) {
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

function bary_X131([a,b,c]) {
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

function bary_X132([a,b,c]) {
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

function bary_X133([a,b,c]) {
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

function bary_X134([a,b,c]) {
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

function bary_X135([a,b,c]) {
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

function bary_X136([a,b,c]) {
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

function bary_X137([a,b,c]) {
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

function bary_X138([a,b,c]) {
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

function bary_X139([a,b,c]) {
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

function bary_X140([a,b,c]) {
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

function bary_X141([a,b,c]) {
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

function bary_X142([a,b,c]) {
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

function bary_X143([a,b,c]) {
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

function bary_X144([a,b,c]) {
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

function bary_X145([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = -3*a+b+c;
   let v2 = a-3*b+c;
   let v3 = a+b-3*c;
   return [v1,v2,v3];
}

function bary_X146([a,b,c]) {
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

function bary_X147([a,b,c]) {
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

function bary_X148([a,b,c]) {
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

function bary_X149([a,b,c]) {
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

function bary_X150([a,b,c]) {
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

function bary_X151([a,b,c]) {
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

function bary_X152([a,b,c]) {
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

function bary_X153([a,b,c]) {
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

function bary_X154([a,b,c]) {
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

function bary_X155([a,b,c]) {
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

function bary_X156([a,b,c]) {
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

function bary_X157([a,b,c]) {
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

function bary_X158([a,b,c]) {
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

function bary_X159([a,b,c]) {
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

function bary_X160([a,b,c]) {
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

function bary_X161([a,b,c]) {
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

function bary_X162([a,b,c]) {
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

function bary_X163([a,b,c]) {
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

function bary_X164([a,b,c]) {
   /* begin vars */
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*(-Sqrt(a*(a+b-c)*(a-b+c))+Sqrt(b*(a+b-c)*(-a+b+c))+Sqrt(c*(a-b+c)*(-a+b+c)));
   let v2 = b*(Sqrt(a*(a+b-c)*(a-b+c))-Sqrt(b*(a+b-c)*(-a+b+c))+Sqrt(c*(a-b+c)*(-a+b+c)));
   let v3 = c*(Sqrt(a*(a+b-c)*(a-b+c))+Sqrt(b*(a+b-c)*(-a+b+c))-Sqrt(c*(a-b+c)*(-a+b+c)));
   return [v1,v2,v3];
}

function bary_X165([a,b,c]) {
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

function bary_X166([a,b,c]) {
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

function bary_X167([a,b,c]) {
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

function bary_X168([a,b,c]) {
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

function bary_X169([a,b,c]) {
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

function bary_X170([a,b,c]) {
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

function bary_X171([a,b,c]) {
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

function bary_X172([a,b,c]) {
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

function bary_X173([a,b,c]) {
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

function bary_X174([a,b,c]) {
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

function bary_X175([a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(a*(a-b-c)+S);
   let v2 = (a+b-c)*(-a+b+c)*(b*(-a+b-c)+S);
   let v3 = (a-b+c)*(-a+b+c)*(c*(-a-b+c)+S);
   return [v1,v2,v3];
}

function bary_X176([a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   let S=2*area;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(a*(a-b-c)-S);
   let v2 = (a+b-c)*(-a+b+c)*(b*(-a+b-c)-S);
   let v3 = (a-b+c)*(-a+b+c)*(c*(-a-b+c)-S);
   return [v1,v2,v3];
}

function bary_X177([a,b,c]) {
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

function bary_X178([a,b,c]) {
   /* begin vars */
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = Sqrt((a+b-c)*c)+Sqrt(b*(a-b+c));
   let v2 = Sqrt((a+b-c)*c)+Sqrt(a*(-a+b+c));
   let v3 = Sqrt(b*(a-b+c))+Sqrt(a*(-a+b+c));
   return [v1,v2,v3];
}

function bary_X179([a,b,c]) {
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

function bary_X180([a,b,c]) {
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

function bary_X181([a,b,c]) {
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

function bary_X182([a,b,c]) {
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

function bary_X183([a,b,c]) {
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

function bary_X184([a,b,c]) {
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

function bary_X185([a,b,c]) {
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

function bary_X186([a,b,c]) {
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

function bary_X187([a,b,c]) {
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

function bary_X188([a,b,c]) {
   /* begin vars */
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = a*Sqrt(b*c*(-a+b+c));
   let v2 = b*Sqrt(a*c*(a-b+c));
   let v3 = Sqrt(a*b*(a+b-c))*c;
   return [v1,v2,v3];
}

function bary_X189([a,b,c]) {
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

function bary_X190([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a-b)*(a-c);
   let v2 = (-a+b)*(b-c);
   let v3 = (-a+c)*(-b+c);
   return [v1,v2,v3];
}

function bary_X191([a,b,c]) {
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

function bary_X192([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*b+a*c-b*c;
   let v2 = a*b-a*c+b*c;
   let v3 = -(a*b)+a*c+b*c;
   return [v1,v2,v3];
}

function bary_X193([a,b,c]) {
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

function bary_X194([a,b,c]) {
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

function bary_X195([a,b,c]) {
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

function bary_X196([a,b,c]) {
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

function bary_X197([a,b,c]) {
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

function bary_X198([a,b,c]) {
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

function bary_X199([a,b,c]) {
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

function bary_X200([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-b-c)*(a-b-c);
   let v2 = b*(-a+b-c)*(-a+b-c);
   let v3 = c*(-a-b+c)*(-a-b+c);
   return [v1,v2,v3];
}

function bary_X201([a,b,c]) {
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

function bary_X202([a,b,c]) {
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

function bary_X203([a,b,c]) {
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

function bary_X204([a,b,c]) {
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

function bary_X205([a,b,c]) {
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

function bary_X206([a,b,c]) {
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

function bary_X207([a,b,c]) {
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

function bary_X208([a,b,c]) {
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

function bary_X209([a,b,c]) {
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

function bary_X210([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-b-c)*(b+c);
   let v2 = b*(-a+b-c)*(a+c);
   let v3 = (a+b)*c*(-a-b+c);
   return [v1,v2,v3];
}

function bary_X211([a,b,c]) {
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

function bary_X212([a,b,c]) {
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

function bary_X213([a,b,c]) {
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

function bary_X214([a,b,c]) {
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

function bary_X215([a,b,c]) {
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

function bary_X216([a,b,c]) {
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

function bary_X217([a,b,c]) {
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

function bary_X218([a,b,c]) {
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

function bary_X219([a,b,c]) {
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

function bary_X220([a,b,c]) {
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

function bary_X221([a,b,c]) {
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

function bary_X222([a,b,c]) {
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

function bary_X223([a,b,c]) {
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

function bary_X224([a,b,c]) {
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

function bary_X225([a,b,c]) {
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

function bary_X226([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*(b+c);
   let v2 = (a+b-c)*(a+c)*(-a+b+c);
   let v3 = (a+b)*(a-b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X227([a,b,c]) {
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

function bary_X228([a,b,c]) {
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

function bary_X229([a,b,c]) {
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

function bary_X230([a,b,c]) {
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

function bary_X231([a,b,c]) {
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

function bary_X232([a,b,c]) {
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

function bary_X233([a,b,c]) {
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

function bary_X234([a,b,c]) {
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

function bary_X235([a,b,c]) {
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

function bary_X236([a,b,c]) {
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

function bary_X237([a,b,c]) {
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

function bary_X238([a,b,c]) {
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

function bary_X239([a,b,c]) {
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

function bary_X240([a,b,c]) {
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

function bary_X241([a,b,c]) {
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

function bary_X242([a,b,c]) {
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

function bary_X243([a,b,c]) {
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

function bary_X244([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b-c)*(b-c);
   let v2 = b*(-a+c)*(-a+c);
   let v3 = (a-b)*(a-b)*c;
   return [v1,v2,v3];
}

function bary_X245([a,b,c]) {
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

function bary_X246([a,b,c]) {
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

function bary_X247([a,b,c]) {
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

function bary_X248([a,b,c]) {
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

function bary_X249([a,b,c]) {
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

function bary_X250([a,b,c]) {
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

function bary_X251([a,b,c]) {
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

function bary_X252([a,b,c]) {
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

function bary_X253([a,b,c]) {
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

function bary_X254([a,b,c]) {
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

function bary_X255([a,b,c]) {
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

function bary_X256([a,b,c]) {
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

function bary_X257([a,b,c]) {
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

function bary_X258([a,b,c]) {
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

function bary_X259([a,b,c]) {
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

function bary_X260([a,b,c]) {
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

function bary_X261([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b)*(a+b)*(a-b-c)*(a+c)*(a+c);
   let v2 = (a+b)*(a+b)*(-a+b-c)*(b+c)*(b+c);
   let v3 = (a+c)*(a+c)*(-a-b+c)*(b+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X262([a,b,c]) {
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

function bary_X263([a,b,c]) {
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

function bary_X264([a,b,c]) {
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

function bary_X265([a,b,c]) {
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

function bary_X266([a,b,c]) {
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

function bary_X267([a,b,c]) {
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

function bary_X268([a,b,c]) {
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

function bary_X269([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b-c)*(a+b-c)*(a-b+c)*(a-b+c);
   let v2 = b*(a+b-c)*(a+b-c)*(-a+b+c)*(-a+b+c);
   let v3 = c*(a-b+c)*(a-b+c)*(-a+b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X270([a,b,c]) {
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

function bary_X271([a,b,c]) {
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

function bary_X272([a,b,c]) {
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

function bary_X273([a,b,c]) {
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

function bary_X274([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*(a+b)*c*(a+c);
   let v2 = a*(a+b)*c*(b+c);
   let v3 = a*b*(a+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X275([a,b,c]) {
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

function bary_X276([a,b,c]) {
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

function bary_X277([a,b,c]) {
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

function bary_X278([a,b,c]) {
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

function bary_X279([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b-c)*(a+b-c)*(a-b+c)*(a-b+c);
   let v2 = (a+b-c)*(a+b-c)*(-a+b+c)*(-a+b+c);
   let v3 = (a-b+c)*(a-b+c)*(-a+b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X280([a,b,c]) {
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

function bary_X281([a,b,c]) {
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

function bary_X282([a,b,c]) {
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

function bary_X283([a,b,c]) {
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

function bary_X284([a,b,c]) {
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

function bary_X285([a,b,c]) {
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

function bary_X286([a,b,c]) {
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

function bary_X287([a,b,c]) {
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

function bary_X288([a,b,c]) {
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

function bary_X289([a,b,c]) {
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

function bary_X290([a,b,c]) {
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

function bary_X291([a,b,c]) {
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

function bary_X292([a,b,c]) {
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

function bary_X293([a,b,c]) {
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

function bary_X294([a,b,c]) {
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

function bary_X295([a,b,c]) {
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

function bary_X296([a,b,c]) {
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

function bary_X297([a,b,c]) {
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

function bary_X298([a,b,c]) {
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

function bary_X299([a,b,c]) {
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

function bary_X300([a,b,c]) {
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

function bary_X301([a,b,c]) {
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

function bary_X302([a,b,c]) {
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

function bary_X303([a,b,c]) {
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

function bary_X304([a,b,c]) {
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

function bary_X305([a,b,c]) {
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

function bary_X306([a,b,c]) {
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

function bary_X307([a,b,c]) {
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

function bary_X308([a,b,c]) {
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

function bary_X309([a,b,c]) {
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

function bary_X310([a,b,c]) {
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

function bary_X311([a,b,c]) {
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

function bary_X312([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c*(-a+b+c);
   let v2 = a*c*(a-b+c);
   let v3 = a*b*(a+b-c);
   return [v1,v2,v3];
}

function bary_X313([a,b,c]) {
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

function bary_X314([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*(a+b)*c*(a+c)*(-a+b+c);
   let v2 = a*(a+b)*c*(a-b+c)*(b+c);
   let v3 = a*b*(a+b-c)*(a+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X315([a,b,c]) {
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

function bary_X316([a,b,c]) {
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

function bary_X317([a,b,c]) {
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

function bary_X318([a,b,c]) {
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

function bary_X319([a,b,c]) {
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

function bary_X320([a,b,c]) {
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

function bary_X321([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c*(b+c);
   let v2 = a*c*(a+c);
   let v3 = a*b*(a+b);
   return [v1,v2,v3];
}

function bary_X322([a,b,c]) {
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

function bary_X323([a,b,c]) {
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

function bary_X324([a,b,c]) {
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

function bary_X325([a,b,c]) {
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

function bary_X326([a,b,c]) {
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

function bary_X327([a,b,c]) {
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

function bary_X328([a,b,c]) {
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

function bary_X329([a,b,c]) {
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

function bary_X330([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a*b-a*c-b*c)*(a*b-a*c+b*c);
   let v2 = (-(a*b)-a*c+b*c)*(-(a*b)+a*c+b*c);
   let v3 = (-(a*b)+a*c-b*c)*(a*b+a*c-b*c);
   return [v1,v2,v3];
}

function bary_X331([a,b,c]) {
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

function bary_X332([a,b,c]) {
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

function bary_X333([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a+b)*(a-b-c)*(a+c);
   let v2 = (a+b)*(-a+b-c)*(b+c);
   let v3 = (a+c)*(-a-b+c)*(b+c);
   return [v1,v2,v3];
}

function bary_X334([a,b,c]) {
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

function bary_X335([a,b,c]) {
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

function bary_X336([a,b,c]) {
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

function bary_X337([a,b,c]) {
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

function bary_X338([a,b,c]) {
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

function bary_X339([a,b,c]) {
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

function bary_X340([a,b,c]) {
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

function bary_X341([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b*c*(-a+b+c)*(-a+b+c);
   let v2 = a*c*(a-b+c)*(a-b+c);
   let v3 = a*b*(a+b-c)*(a+b-c);
   return [v1,v2,v3];
}

function bary_X342([a,b,c]) {
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

function bary_X343([a,b,c]) {
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

function bary_X344([a,b,c]) {
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

function bary_X345([a,b,c]) {
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

function bary_X346([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a-b-c)*(a-b-c);
   let v2 = (-a+b-c)*(-a+b-c);
   let v3 = (-a-b+c)*(-a-b+c);
   return [v1,v2,v3];
}

function bary_X347([a,b,c]) {
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

function bary_X348([a,b,c]) {
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

function bary_X349([a,b,c]) {
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

function bary_X350([a,b,c]) {
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

function bary_X351([a,b,c]) {
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

function bary_X352([a,b,c]) {
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

function bary_X353([a,b,c]) {
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

function bary_X354([a,b,c]) {
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

function bary_X355([a,b,c]) {
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

function bary_X356([a,b,c]) {
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

function bary_X357([a,b,c]) {
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

function bary_X358([a,b,c]) {
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

function bary_X359([a,b,c]) {
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

function bary_X360([a,b,c]) {
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

function bary_X361([a,b,c]) {
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

function bary_X362([a,b,c]) {
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

function bary_X363([a,b,c]) {
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

function bary_X364([a,b,c]) {
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

function bary_X365([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = Math.pow(a,1.5);
   let v2 = Math.pow(b,1.5);
   let v3 = Math.pow(c,1.5);
   return [v1,v2,v3];
}

function bary_X366([a,b,c]) {
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

function bary_X367([a,b,c]) {
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

function bary_X368([a,b,c]) {
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

function bary_X369([a,b,c]) {
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

function bary_X370([a,b,c]) {
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

function bary_X371([a,b,c]) {
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

function bary_X372([a,b,c]) {
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

function bary_X373([a,b,c]) {
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

function bary_X374([a,b,c]) {
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

function bary_X375([a,b,c]) {
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

function bary_X376([a,b,c]) {
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

function bary_X377([a,b,c]) {
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

function bary_X378([a,b,c]) {
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

function bary_X379([a,b,c]) {
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

function bary_X380([a,b,c]) {
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

function bary_X381([a,b,c]) {
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

function bary_X382([a,b,c]) {
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

function bary_X383([a,b,c]) {
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

function bary_X384([a,b,c]) {
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

function bary_X385([a,b,c]) {
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

function bary_X386([a,b,c]) {
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

function bary_X387([a,b,c]) {
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

function bary_X388([a,b,c]) {
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

function bary_X389([a,b,c]) {
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

function bary_X390([a,b,c]) {
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

function bary_X391([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a-b-c)*(3*a+b+c);
   let v2 = (-a+b-c)*(a+3*b+c);
   let v3 = (-a-b+c)*(a+b+3*c);
   return [v1,v2,v3];
}

function bary_X392([a,b,c]) {
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

function bary_X393([a,b,c]) {
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

function bary_X394([a,b,c]) {
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

function bary_X395([a,b,c]) {
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

function bary_X396([a,b,c]) {
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

function bary_X397([a,b,c]) {
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

function bary_X398([a,b,c]) {
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

function bary_X399([a,b,c]) {
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

function bary_X400([a,b,c]) {
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

function bary_X401([a,b,c]) {
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

function bary_X402([a,b,c]) {
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

function bary_X403([a,b,c]) {
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

function bary_X404([a,b,c]) {
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

function bary_X405([a,b,c]) {
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

function bary_X406([a,b,c]) {
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

function bary_X407([a,b,c]) {
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

function bary_X408([a,b,c]) {
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

function bary_X409([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a+b)*(a+c)*((a+b-c)*(a-b+c)*(b+c)*(b+c)+(a+b)*(a+c)*(-a+b+c)*(-a+b+c));
   let v2 = b*(a+b)*(b+c)*((a+b)*(a-b+c)*(a-b+c)*(b+c)+(a+b-c)*(a+c)*(a+c)*(-a+b+c));
   let v3 = c*(a+c)*(b+c)*((a+b-c)*(a+b-c)*(a+c)*(b+c)+(a+b)*(a+b)*(a-b+c)*(-a+b+c));
   return [v1,v2,v3];
}

function bary_X410([a,b,c]) {
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

function bary_X411([a,b,c]) {
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

function bary_X412([a,b,c]) {
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

function bary_X413([a,b,c]) {
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

function bary_X414([a,b,c]) {
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

function bary_X415([a,b,c]) {
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

function bary_X416([a,b,c]) {
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

function bary_X417([a,b,c]) {
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

function bary_X418([a,b,c]) {
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

function bary_X419([a,b,c]) {
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

function bary_X420([a,b,c]) {
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

function bary_X421([a,b,c]) {
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

function bary_X422([a,b,c]) {
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

function bary_X423([a,b,c]) {
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

function bary_X424([a,b,c]) {
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

function bary_X425([a,b,c]) {
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

function bary_X426([a,b,c]) {
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

function bary_X427([a,b,c]) {
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

function bary_X428([a,b,c]) {
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

function bary_X429([a,b,c]) {
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

function bary_X430([a,b,c]) {
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

function bary_X431([a,b,c]) {
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

function bary_X432([a,b,c]) {
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

function bary_X433([a,b,c]) {
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

function bary_X434([a,b,c]) {
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

function bary_X435([a,b,c]) {
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

function bary_X436([a,b,c]) {
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

function bary_X437([a,b,c]) {
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

function bary_X438([a,b,c]) {
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

function bary_X439([a,b,c]) {
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

function bary_X440([a,b,c]) {
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

function bary_X441([a,b,c]) {
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

function bary_X442([a,b,c]) {
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

function bary_X443([a,b,c]) {
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

function bary_X444([a,b,c]) {
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

function bary_X445([a,b,c]) {
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

function bary_X446([a,b,c]) {
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

function bary_X447([a,b,c]) {
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

function bary_X448([a,b,c]) {
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

function bary_X449([a,b,c]) {
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

function bary_X450([a,b,c]) {
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

function bary_X451([a,b,c]) {
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

function bary_X452([a,b,c]) {
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

function bary_X453([a,b,c]) {
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

function bary_X454([a,b,c]) {
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

function bary_X455([a,b,c]) {
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

function bary_X456([a,b,c]) {
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

function bary_X457([a,b,c]) {
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

function bary_X458([a,b,c]) {
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

function bary_X459([a,b,c]) {
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

function bary_X460([a,b,c]) {
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

function bary_X461([a,b,c]) {
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

function bary_X462([a,b,c]) {
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

function bary_X463([a,b,c]) {
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

function bary_X464([a,b,c]) {
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

function bary_X465([a,b,c]) {
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

function bary_X466([a,b,c]) {
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

function bary_X467([a,b,c]) {
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

function bary_X468([a,b,c]) {
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

function bary_X469([a,b,c]) {
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

function bary_X470([a,b,c]) {
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

function bary_X471([a,b,c]) {
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

function bary_X472([a,b,c]) {
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

function bary_X473([a,b,c]) {
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

function bary_X474([a,b,c]) {
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

function bary_X475([a,b,c]) {
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

function bary_X476([a,b,c]) {
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

function bary_X477([a,b,c]) {
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

function bary_X478([a,b,c]) {
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

function bary_X479([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = Math.pow(-a+b+c,-3);
   let v2 = Math.pow(a-b+c,-3);
   let v3 = Math.pow(a+b-c,-3);
   return [v1,v2,v3];
}

function bary_X480([a,b,c]) {
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

function bary_X481([a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = a-(4*area)/(-a+b+c);
   let v2 = b-(4*area)/(a-b+c);
   let v3 = (-4*area)/(a+b-c)+c;
   return [v1,v2,v3];
}

function bary_X482([a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = a+(4*area)/(-a+b+c);
   let v2 = b+(4*area)/(a-b+c);
   let v3 = (4*area)/(a+b-c)+c;
   return [v1,v2,v3];
}

function bary_X483([a,b,c]) {
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

function bary_X484([a,b,c]) {
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

function bary_X485([a,b,c]) {
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

function bary_X486([a,b,c]) {
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

function bary_X487([a,b,c]) {
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

function bary_X488([a,b,c]) {
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

function bary_X489([a,b,c]) {
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

function bary_X490([a,b,c]) {
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

function bary_X491([a,b,c]) {
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

function bary_X492([a,b,c]) {
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

function bary_X493([a,b,c]) {
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

function bary_X494([a,b,c]) {
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

function bary_X495([a,b,c]) {
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

function bary_X496([a,b,c]) {
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

function bary_X497([a,b,c]) {
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

function bary_X498([a,b,c]) {
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

function bary_X499([a,b,c]) {
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

function bary_X500([a,b,c]) {
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

function bary_X501([a,b,c]) {
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

function bary_X502([a,b,c]) {
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

function bary_X503([a,b,c]) {
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

function bary_X504([a,b,c]) {
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

function bary_X505([a,b,c]) {
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

function bary_X506([a,b,c]) {
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

function bary_X507([a,b,c]) {
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

function bary_X508([a,b,c]) {
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

function bary_X509([a,b,c]) {
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

function bary_X510([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(-Math.pow(a,1.5)+Math.pow(b,1.5)+Math.pow(c,1.5));
   let v2 = b*(Math.pow(a,1.5)-Math.pow(b,1.5)+Math.pow(c,1.5));
   let v3 = c*(Math.pow(a,1.5)+Math.pow(b,1.5)-Math.pow(c,1.5));
   return [v1,v2,v3];
}

function bary_X511([a,b,c]) {
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

function bary_X512([a,b,c]) {
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

function bary_X513([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b-c);
   let v2 = b*(-a+c);
   let v3 = (a-b)*c;
   return [v1,v2,v3];
}

function bary_X514([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = b-c;
   let v2 = -a+c;
   let v3 = a-b;
   return [v1,v2,v3];
}

function bary_X515([a,b,c]) {
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

function bary_X516([a,b,c]) {
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

function bary_X517([a,b,c]) {
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

function bary_X518([a,b,c]) {
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

function bary_X519([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 2*a-b-c;
   let v2 = -a+2*b-c;
   let v3 = -a-b+2*c;
   return [v1,v2,v3];
}

function bary_X520([a,b,c]) {
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

function bary_X521([a,b,c]) {
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

function bary_X522([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a-b-c)*(b-c);
   let v2 = (-a+b-c)*(-a+c);
   let v3 = (a-b)*(-a-b+c);
   return [v1,v2,v3];
}

function bary_X523([a,b,c]) {
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

function bary_X524([a,b,c]) {
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

function bary_X525([a,b,c]) {
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

function bary_X526([a,b,c]) {
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

function bary_X527([a,b,c]) {
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

function bary_X528([a,b,c]) {
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

function bary_X529([a,b,c]) {
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

function bary_X530([a,b,c]) {
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

function bary_X531([a,b,c]) {
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

function bary_X532([a,b,c]) {
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

function bary_X533([a,b,c]) {
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

function bary_X534([a,b,c]) {
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

function bary_X535([a,b,c]) {
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

function bary_X536([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*b+a*c-2*b*c;
   let v2 = a*b-2*a*c+b*c;
   let v3 = -2*a*b+a*c+b*c;
   return [v1,v2,v3];
}

function bary_X537([a,b,c]) {
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

function bary_X538([a,b,c]) {
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

function bary_X539([a,b,c]) {
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

function bary_X540([a,b,c]) {
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

function bary_X541([a,b,c]) {
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

function bary_X542([a,b,c]) {
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

function bary_X543([a,b,c]) {
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

function bary_X544([a,b,c]) {
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

function bary_X545([a,b,c]) {
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

function bary_X546([a,b,c]) {
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

function bary_X547([a,b,c]) {
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

function bary_X548([a,b,c]) {
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

function bary_X549([a,b,c]) {
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

function bary_X550([a,b,c]) {
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

function bary_X551([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 4*a+b+c;
   let v2 = a+4*b+c;
   let v3 = a+b+4*c;
   return [v1,v2,v3];
}

function bary_X552([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/((b+c)*(b+c)*(-a+b+c));
   let v2 = 1/((a+c)*(a+c)*(a-b+c));
   let v3 = 1/((a+b)*(a+b)*(a+b-c));
   return [v1,v2,v3];
}

function bary_X553([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (2*a+b+c)/(-a+b+c);
   let v2 = (a+2*b+c)/(a-b+c);
   let v3 = (a+b+2*c)/(a+b-c);
   return [v1,v2,v3];
}

function bary_X554([a,b,c]) {
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

function bary_X555([a,b,c]) {
   /* begin vars */
   let Sqrt=Math.sqrt;
   /* end vars */
   let v1 = (a+b-c)*(a-b+c)*Sqrt(b*(a+b-c)*c*(a-b+c));
   let v2 = (a+b-c)*(-a+b+c)*Sqrt(a*(a+b-c)*c*(-a+b+c));
   let v3 = (a-b+c)*(-a+b+c)*Sqrt(a*b*(a-b+c)*(-a+b+c));
   return [v1,v2,v3];
}

function bary_X556([a,b,c]) {
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

function bary_X557([a,b,c]) {
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

function bary_X558([a,b,c]) {
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

function bary_X559([a,b,c]) {
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

function bary_X560([a,b,c]) {
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

function bary_X561([a,b,c]) {
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

function bary_X562([a,b,c]) {
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

function bary_X563([a,b,c]) {
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

function bary_X564([a,b,c]) {
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

function bary_X565([a,b,c]) {
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

function bary_X566([a,b,c]) {
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

function bary_X567([a,b,c]) {
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

function bary_X568([a,b,c]) {
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

function bary_X569([a,b,c]) {
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

function bary_X570([a,b,c]) {
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

function bary_X571([a,b,c]) {
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

function bary_X572([a,b,c]) {
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

function bary_X573([a,b,c]) {
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

function bary_X574([a,b,c]) {
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

function bary_X575([a,b,c]) {
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

function bary_X576([a,b,c]) {
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

function bary_X577([a,b,c]) {
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

function bary_X578([a,b,c]) {
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

function bary_X579([a,b,c]) {
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

function bary_X580([a,b,c]) {
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

function bary_X581([a,b,c]) {
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

function bary_X582([a,b,c]) {
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

function bary_X583([a,b,c]) {
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

function bary_X584([a,b,c]) {
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

function bary_X585([a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = -a+b+2*area*(-(1/a)+1/b+1/c)+c;
   let v2 = a-b+2*area*(1/a-1/b+1/c)+c;
   let v3 = a+b+2*area*(1/a+1/b-1/c)-c;
   return [v1,v2,v3];
}

function bary_X586([a,b,c]) {
   /* begin vars */
   let area=triAreaHeron(a,b,c);
   /* end vars */
   let v1 = -a+b-2*area*(-(1/a)+1/b+1/c)+c;
   let v2 = a-b-2*area*(1/a-1/b+1/c)+c;
   let v3 = a+b-2*area*(1/a+1/b-1/c)-c;
   return [v1,v2,v3];
}

function bary_X587([a,b,c]) {
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

function bary_X588([a,b,c]) {
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

function bary_X589([a,b,c]) {
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

function bary_X590([a,b,c]) {
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

function bary_X591([a,b,c]) {
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

function bary_X592([a,b,c]) {
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

function bary_X593([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*a/(b+c)*(b+c);
   let v2 = b*b/(a+c)*(a+c);
   let v3 = c*c/(a+b)*(a+b);
   return [v1,v2,v3];
}

function bary_X594([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b+c)*(b+c);
   let v2 = (a+c)*(a+c);
   let v3 = (a+b)*(a+b);
   return [v1,v2,v3];
}

function bary_X595([a,b,c]) {
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

function bary_X596([a,b,c]) {
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

function bary_X597([a,b,c]) {
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

function bary_X598([a,b,c]) {
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

function bary_X599([a,b,c]) {
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

function bary_X600([a,b,c]) {
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

function bary_X601([a,b,c]) {
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

function bary_X602([a,b,c]) {
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

function bary_X603([a,b,c]) {
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

function bary_X604([a,b,c]) {
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

function bary_X605([a,b,c]) {
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

function bary_X606([a,b,c]) {
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

function bary_X607([a,b,c]) {
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

function bary_X608([a,b,c]) {
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

function bary_X609([a,b,c]) {
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

function bary_X610([a,b,c]) {
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

function bary_X611([a,b,c]) {
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

function bary_X612([a,b,c]) {
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

function bary_X613([a,b,c]) {
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

function bary_X614([a,b,c]) {
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

function bary_X615([a,b,c]) {
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

function bary_X616([a,b,c]) {
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

function bary_X617([a,b,c]) {
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

function bary_X618([a,b,c]) {
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

function bary_X619([a,b,c]) {
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

function bary_X620([a,b,c]) {
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

function bary_X621([a,b,c]) {
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

function bary_X622([a,b,c]) {
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

function bary_X623([a,b,c]) {
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

function bary_X624([a,b,c]) {
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

function bary_X625([a,b,c]) {
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

function bary_X626([a,b,c]) {
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

function bary_X627([a,b,c]) {
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

function bary_X628([a,b,c]) {
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

function bary_X629([a,b,c]) {
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

function bary_X630([a,b,c]) {
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

function bary_X631([a,b,c]) {
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

function bary_X632([a,b,c]) {
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

function bary_X633([a,b,c]) {
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

function bary_X634([a,b,c]) {
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

function bary_X635([a,b,c]) {
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

function bary_X636([a,b,c]) {
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

function bary_X637([a,b,c]) {
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

function bary_X638([a,b,c]) {
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

function bary_X639([a,b,c]) {
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

function bary_X640([a,b,c]) {
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

function bary_X641([a,b,c]) {
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

function bary_X642([a,b,c]) {
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

function bary_X643([a,b,c]) {
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

function bary_X644([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a*(-a+b+c))/(b-c);
   let v2 = (b*(a-b+c))/(-a+c);
   let v3 = ((a+b-c)*c)/(a-b);
   return [v1,v2,v3];
}

function bary_X645([a,b,c]) {
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

function bary_X646([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (-a+b+c)/(a*(b-c));
   let v2 = (a-b+c)/(b*(-a+c));
   let v3 = (a+b-c)/((a-b)*c);
   return [v1,v2,v3];
}

function bary_X647([a,b,c]) {
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

function bary_X648([a,b,c]) {
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

function bary_X649([a,b,c]) {
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

function bary_X650([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b-c)*(-a+b+c);
   let v2 = b*(-a+c)*(a-b+c);
   let v3 = (a-b)*(a+b-c)*c;
   return [v1,v2,v3];
}

function bary_X651([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/((b-c)*(-a+b+c));
   let v2 = b/((-a+c)*(a-b+c));
   let v3 = c/((a-b)*(a+b-c));
   return [v1,v2,v3];
}

function bary_X652([a,b,c]) {
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

function bary_X653([a,b,c]) {
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

function bary_X654([a,b,c]) {
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

function bary_X655([a,b,c]) {
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

function bary_X656([a,b,c]) {
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

function bary_X657([a,b,c]) {
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

function bary_X658([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/((a-b-c)*(a-b-c)*(b-c));
   let v2 = 1/((-a+b-c)*(-a+b-c)*(-a+c));
   let v3 = 1/((a-b)*(-a-b+c)*(-a-b+c));
   return [v1,v2,v3];
}

function bary_X659([a,b,c]) {
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

function bary_X660([a,b,c]) {
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

function bary_X661([a,b,c]) {
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

function bary_X662([a,b,c]) {
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

function bary_X663([a,b,c]) {
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

function bary_X664([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/((a-b-c)*(b-c));
   let v2 = 1/((-a+b-c)*(-a+c));
   let v3 = 1/((a-b)*(-a-b+c));
   return [v1,v2,v3];
}

function bary_X665([a,b,c]) {
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

function bary_X666([a,b,c]) {
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

function bary_X667([a,b,c]) {
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

function bary_X668([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(a*(b-c));
   let v2 = 1/(b*(-a+c));
   let v3 = 1/((a-b)*c);
   return [v1,v2,v3];
}

function bary_X669([a,b,c]) {
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

function bary_X670([a,b,c]) {
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

function bary_X671([a,b,c]) {
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

function bary_X672([a,b,c]) {
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

function bary_X673([a,b,c]) {
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

function bary_X674([a,b,c]) {
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

function bary_X675([a,b,c]) {
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

function bary_X676([a,b,c]) {
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

function bary_X677([a,b,c]) {
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

function bary_X678([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(-2*a+b+c)*(-2*a+b+c);
   let v2 = b*(a-2*b+c)*(a-2*b+c);
   let v3 = (a+b-2*c)*(a+b-2*c)*c;
   return [v1,v2,v3];
}

function bary_X679([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/(-2*a+b+c)*(-2*a+b+c);
   let v2 = b/(a-2*b+c)*(a-2*b+c);
   let v3 = c/(a+b-2*c)*(a+b-2*c);
   return [v1,v2,v3];
}

function bary_X680([a,b,c]) {
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

function bary_X681([a,b,c]) {
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

function bary_X682([a,b,c]) {
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

function bary_X683([a,b,c]) {
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

function bary_X684([a,b,c]) {
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

function bary_X685([a,b,c]) {
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

function bary_X686([a,b,c]) {
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

function bary_X687([a,b,c]) {
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

function bary_X688([a,b,c]) {
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

function bary_X689([a,b,c]) {
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

function bary_X690([a,b,c]) {
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

function bary_X691([a,b,c]) {
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

function bary_X692([a,b,c]) {
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

function bary_X693([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b-c)/a;
   let v2 = (-a+c)/b;
   let v3 = (a-b)/c;
   return [v1,v2,v3];
}

function bary_X694([a,b,c]) {
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

function bary_X695([a,b,c]) {
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

function bary_X696([a,b,c]) {
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

function bary_X697([a,b,c]) {
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

function bary_X698([a,b,c]) {
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

function bary_X699([a,b,c]) {
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

function bary_X700([a,b,c]) {
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

function bary_X701([a,b,c]) {
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

function bary_X702([a,b,c]) {
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

function bary_X703([a,b,c]) {
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

function bary_X704([a,b,c]) {
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

function bary_X705([a,b,c]) {
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

function bary_X706([a,b,c]) {
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

function bary_X707([a,b,c]) {
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

function bary_X708([a,b,c]) {
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

function bary_X709([a,b,c]) {
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

function bary_X710([a,b,c]) {
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

function bary_X711([a,b,c]) {
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

function bary_X712([a,b,c]) {
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

function bary_X713([a,b,c]) {
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

function bary_X714([a,b,c]) {
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

function bary_X715([a,b,c]) {
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

function bary_X716([a,b,c]) {
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

function bary_X717([a,b,c]) {
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

function bary_X718([a,b,c]) {
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

function bary_X719([a,b,c]) {
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

function bary_X720([a,b,c]) {
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

function bary_X721([a,b,c]) {
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

function bary_X722([a,b,c]) {
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

function bary_X723([a,b,c]) {
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

function bary_X724([a,b,c]) {
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

function bary_X725([a,b,c]) {
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

function bary_X726([a,b,c]) {
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

function bary_X727([a,b,c]) {
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

function bary_X728([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*Math.pow(-a+b+c,3);
   let v2 = b*Math.pow(a-b+c,3);
   let v3 = Math.pow(a+b-c,3)*c;
   return [v1,v2,v3];
}

function bary_X729([a,b,c]) {
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

function bary_X730([a,b,c]) {
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

function bary_X731([a,b,c]) {
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

function bary_X732([a,b,c]) {
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

function bary_X733([a,b,c]) {
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

function bary_X734([a,b,c]) {
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

function bary_X735([a,b,c]) {
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

function bary_X736([a,b,c]) {
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

function bary_X737([a,b,c]) {
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

function bary_X738([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/Math.pow(-a+b+c,3);
   let v2 = b/Math.pow(a-b+c,3);
   let v3 = c/Math.pow(a+b-c,3);
   return [v1,v2,v3];
}

function bary_X739([a,b,c]) {
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

function bary_X740([a,b,c]) {
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

function bary_X741([a,b,c]) {
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

function bary_X742([a,b,c]) {
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

function bary_X743([a,b,c]) {
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

function bary_X744([a,b,c]) {
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

function bary_X745([a,b,c]) {
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

function bary_X746([a,b,c]) {
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

function bary_X747([a,b,c]) {
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

function bary_X748([a,b,c]) {
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

function bary_X749([a,b,c]) {
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

function bary_X750([a,b,c]) {
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

function bary_X751([a,b,c]) {
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

function bary_X752([a,b,c]) {
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

function bary_X753([a,b,c]) {
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

function bary_X754([a,b,c]) {
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

function bary_X755([a,b,c]) {
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

function bary_X756([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b+c)*(b+c);
   let v2 = b*(a+c)*(a+c);
   let v3 = (a+b)*(a+b)*c;
   return [v1,v2,v3];
}

function bary_X757([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/(b+c)*(b+c);
   let v2 = b/(a+c)*(a+c);
   let v3 = c/(a+b)*(a+b);
   return [v1,v2,v3];
}

function bary_X758([a,b,c]) {
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

function bary_X759([a,b,c]) {
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

function bary_X760([a,b,c]) {
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

function bary_X761([a,b,c]) {
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

function bary_X762([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*Math.pow(b+c,3);
   let v2 = b*Math.pow(a+c,3);
   let v3 = Math.pow(a+b,3)*c;
   return [v1,v2,v3];
}

function bary_X763([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/Math.pow(b+c,3);
   let v2 = b/Math.pow(a+c,3);
   let v3 = c/Math.pow(a+b,3);
   return [v1,v2,v3];
}

function bary_X764([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*Math.pow(b-c,3);
   let v2 = b*Math.pow(-a+c,3);
   let v3 = Math.pow(a-b,3)*c;
   return [v1,v2,v3];
}

function bary_X765([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/(b-c)*(b-c);
   let v2 = b/(-a+c)*(-a+c);
   let v3 = c/(a-b)*(a-b);
   return [v1,v2,v3];
}

function bary_X766([a,b,c]) {
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

function bary_X767([a,b,c]) {
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

function bary_X768([a,b,c]) {
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

function bary_X769([a,b,c]) {
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

function bary_X770([a,b,c]) {
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

function bary_X771([a,b,c]) {
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

function bary_X772([a,b,c]) {
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

function bary_X773([a,b,c]) {
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

function bary_X774([a,b,c]) {
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

function bary_X775([a,b,c]) {
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

function bary_X776([a,b,c]) {
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

function bary_X777([a,b,c]) {
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

function bary_X778([a,b,c]) {
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

function bary_X779([a,b,c]) {
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

function bary_X780([a,b,c]) {
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

function bary_X781([a,b,c]) {
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

function bary_X782([a,b,c]) {
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

function bary_X783([a,b,c]) {
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

function bary_X784([a,b,c]) {
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

function bary_X785([a,b,c]) {
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

function bary_X786([a,b,c]) {
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

function bary_X787([a,b,c]) {
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

function bary_X788([a,b,c]) {
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

function bary_X789([a,b,c]) {
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

function bary_X790([a,b,c]) {
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

function bary_X791([a,b,c]) {
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

function bary_X792([a,b,c]) {
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

function bary_X793([a,b,c]) {
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

function bary_X794([a,b,c]) {
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

function bary_X795([a,b,c]) {
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

function bary_X796([a,b,c]) {
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

function bary_X797([a,b,c]) {
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

function bary_X798([a,b,c]) {
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

function bary_X799([a,b,c]) {
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

function bary_X800([a,b,c]) {
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

function bary_X801([a,b,c]) {
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

function bary_X802([a,b,c]) {
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

function bary_X803([a,b,c]) {
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

function bary_X804([a,b,c]) {
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

function bary_X805([a,b,c]) {
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

function bary_X806([a,b,c]) {
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

function bary_X807([a,b,c]) {
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

function bary_X808([a,b,c]) {
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

function bary_X809([a,b,c]) {
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

function bary_X810([a,b,c]) {
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

function bary_X811([a,b,c]) {
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

function bary_X812([a,b,c]) {
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

function bary_X813([a,b,c]) {
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

function bary_X814([a,b,c]) {
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

function bary_X815([a,b,c]) {
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

function bary_X816([a,b,c]) {
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

function bary_X817([a,b,c]) {
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

function bary_X818([a,b,c]) {
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

function bary_X819([a,b,c]) {
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

function bary_X820([a,b,c]) {
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

function bary_X821([a,b,c]) {
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

function bary_X822([a,b,c]) {
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

function bary_X823([a,b,c]) {
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

function bary_X824([a,b,c]) {
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

function bary_X825([a,b,c]) {
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

function bary_X826([a,b,c]) {
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

function bary_X827([a,b,c]) {
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

function bary_X828([a,b,c]) {
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

function bary_X829([a,b,c]) {
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

function bary_X830([a,b,c]) {
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

function bary_X831([a,b,c]) {
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

function bary_X832([a,b,c]) {
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

function bary_X833([a,b,c]) {
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

function bary_X834([a,b,c]) {
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

function bary_X835([a,b,c]) {
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

function bary_X836([a,b,c]) {
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

function bary_X837([a,b,c]) {
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

function bary_X838([a,b,c]) {
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

function bary_X839([a,b,c]) {
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

function bary_X840([a,b,c]) {
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

function bary_X841([a,b,c]) {
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

function bary_X842([a,b,c]) {
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

function bary_X843([a,b,c]) {
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

function bary_X844([a,b,c]) {
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

function bary_X845([a,b,c]) {
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

function bary_X846([a,b,c]) {
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

function bary_X847([a,b,c]) {
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

function bary_X848([a,b,c]) {
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

function bary_X849([a,b,c]) {
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

function bary_X850([a,b,c]) {
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

function bary_X851([a,b,c]) {
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

function bary_X852([a,b,c]) {
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

function bary_X853([a,b,c]) {
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

function bary_X854([a,b,c]) {
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

function bary_X855([a,b,c]) {
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

function bary_X856([a,b,c]) {
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

function bary_X857([a,b,c]) {
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

function bary_X858([a,b,c]) {
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

function bary_X859([a,b,c]) {
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

function bary_X860([a,b,c]) {
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

function bary_X861([a,b,c]) {
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

function bary_X862([a,b,c]) {
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

function bary_X863([a,b,c]) {
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

function bary_X864([a,b,c]) {
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

function bary_X865([a,b,c]) {
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

function bary_X866([a,b,c]) {
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

function bary_X867([a,b,c]) {
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

function bary_X868([a,b,c]) {
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

function bary_X869([a,b,c]) {
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

function bary_X870([a,b,c]) {
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

function bary_X871([a,b,c]) {
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

function bary_X872([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = Math.pow(a,3)*(b+c)*(b+c);
   let v2 = Math.pow(b,3)*(a+c)*(a+c);
   let v3 = (a+b)*(a+b)*Math.pow(c,3);
   return [v1,v2,v3];
}

function bary_X873([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(a*(b+c)*(b+c));
   let v2 = 1/(b*(a+c)*(a+c));
   let v3 = 1/((a+b)*(a+b)*c);
   return [v1,v2,v3];
}

function bary_X874([a,b,c]) {
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

function bary_X875([a,b,c]) {
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

function bary_X876([a,b,c]) {
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

function bary_X877([a,b,c]) {
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

function bary_X878([a,b,c]) {
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

function bary_X879([a,b,c]) {
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

function bary_X880([a,b,c]) {
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

function bary_X881([a,b,c]) {
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

function bary_X882([a,b,c]) {
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

function bary_X883([a,b,c]) {
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

function bary_X884([a,b,c]) {
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

function bary_X885([a,b,c]) {
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

function bary_X886([a,b,c]) {
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

function bary_X887([a,b,c]) {
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

function bary_X888([a,b,c]) {
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

function bary_X889([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(a*(b-c)*(-2*b*c+a*(b+c)));
   let v2 = 1/(b*(-a+c)*(-2*a*c+b*(a+c)));
   let v3 = 1/((a-b)*c*(-2*a*b+(a+b)*c));
   return [v1,v2,v3];
}

function bary_X890([a,b,c]) {
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

function bary_X891([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(b-c)*(-2*b*c+a*(b+c));
   let v2 = b*(-a+c)*(-2*a*c+b*(a+c));
   let v3 = (a-b)*c*(-2*a*b+(a+b)*c);
   return [v1,v2,v3];
}

function bary_X892([a,b,c]) {
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

function bary_X893([a,b,c]) {
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

function bary_X894([a,b,c]) {
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

function bary_X895([a,b,c]) {
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

function bary_X896([a,b,c]) {
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

function bary_X897([a,b,c]) {
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

function bary_X898([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a/((b-c)*(-2*b*c+a*(b+c)));
   let v2 = b/((-a+c)*(-2*a*c+b*(a+c)));
   let v3 = c/((a-b)*(-2*a*b+(a+b)*c));
   return [v1,v2,v3];
}

function bary_X899([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(-2/a+1/b+1/c);
   let v2 = b*(1/a-2/b+1/c);
   let v3 = (1/a+1/b-2/c)*c;
   return [v1,v2,v3];
}

function bary_X900([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (b-c)*(-2*a+b+c);
   let v2 = (-a+c)*(a-2*b+c);
   let v3 = (a-b)*(a+b-2*c);
   return [v1,v2,v3];
}

function bary_X901([a,b,c]) {
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

function bary_X902([a,b,c]) {
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

function bary_X903([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = 1/(-2*a+b+c);
   let v2 = 1/(a-2*b+c);
   let v3 = 1/(a+b-2*c);
   return [v1,v2,v3];
}

function bary_X904([a,b,c]) {
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

function bary_X905([a,b,c]) {
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

function bary_X906([a,b,c]) {
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

function bary_X907([a,b,c]) {
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

function bary_X908([a,b,c]) {
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

function bary_X909([a,b,c]) {
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

function bary_X910([a,b,c]) {
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

function bary_X911([a,b,c]) {
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

function bary_X912([a,b,c]) {
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

function bary_X913([a,b,c]) {
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

function bary_X914([a,b,c]) {
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

function bary_X915([a,b,c]) {
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

function bary_X916([a,b,c]) {
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

function bary_X917([a,b,c]) {
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

function bary_X918([a,b,c]) {
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

function bary_X919([a,b,c]) {
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

function bary_X920([a,b,c]) {
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

function bary_X921([a,b,c]) {
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

function bary_X922([a,b,c]) {
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

function bary_X923([a,b,c]) {
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

function bary_X924([a,b,c]) {
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

function bary_X925([a,b,c]) {
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

function bary_X926([a,b,c]) {
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

function bary_X927([a,b,c]) {
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

function bary_X928([a,b,c]) {
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

function bary_X929([a,b,c]) {
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

function bary_X930([a,b,c]) {
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

function bary_X931([a,b,c]) {
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

function bary_X932([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = (a*(a-b)*(a-c))/(a*b+a*c-b*c);
   let v2 = (b*(-a+b)*(b-c))/(a*b-a*c+b*c);
   let v3 = (c*(-a+c)*(-b+c))/(-(a*b)+a*c+b*c);
   return [v1,v2,v3];
}

function bary_X933([a,b,c]) {
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

function bary_X934([a,b,c]) {
   /* begin vars */

   /* end vars */
   let v1 = a*(a-b)*(a+b-c)*(a+b-c)*(-a+c)*(a-b+c)*(a-b+c);
   let v2 = (a-b)*b*(b-c)*(a+b-c)*(a+b-c)*(-a+b+c)*(-a+b+c);
   let v3 = (b-c)*c*(-a+c)*(a-b+c)*(a-b+c)*(-a+b+c)*(-a+b+c);
   return [v1,v2,v3];
}

function bary_X935([a,b,c]) {
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

function bary_X936([a,b,c]) {
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

function bary_X937([a,b,c]) {
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

function bary_X938([a,b,c]) {
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

function bary_X939([a,b,c]) {
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

function bary_X940([a,b,c]) {
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

function bary_X941([a,b,c]) {
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

function bary_X942([a,b,c]) {
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

function bary_X943([a,b,c]) {
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

function bary_X944([a,b,c]) {
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

function bary_X945([a,b,c]) {
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

function bary_X946([a,b,c]) {
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

function bary_X947([a,b,c]) {
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

function bary_X948([a,b,c]) {
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

function bary_X949([a,b,c]) {
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

function bary_X950([a,b,c]) {
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

function bary_X951([a,b,c]) {
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

function bary_X952([a,b,c]) {
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

function bary_X953([a,b,c]) {
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

function bary_X954([a,b,c]) {
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

function bary_X955([a,b,c]) {
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

function bary_X956([a,b,c]) {
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

function bary_X957([a,b,c]) {
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

function bary_X958([a,b,c]) {
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

function bary_X959([a,b,c]) {
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

function bary_X960([a,b,c]) {
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

function bary_X961([a,b,c]) {
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

function bary_X962([a,b,c]) {
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

function bary_X963([a,b,c]) {
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

function bary_X964([a,b,c]) {
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

function bary_X965([a,b,c]) {
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

function bary_X966([a,b,c]) {
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

function bary_X967([a,b,c]) {
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

function bary_X968([a,b,c]) {
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

function bary_X969([a,b,c]) {
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

function bary_X970([a,b,c]) {
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

function bary_X971([a,b,c]) {
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

function bary_X972([a,b,c]) {
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

function bary_X973([a,b,c]) {
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

function bary_X974([a,b,c]) {
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

function bary_X975([a,b,c]) {
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

function bary_X976([a,b,c]) {
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

function bary_X977([a,b,c]) {
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

function bary_X978([a,b,c]) {
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

function bary_X979([a,b,c]) {
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

function bary_X980([a,b,c]) {
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

function bary_X981([a,b,c]) {
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

function bary_X982([a,b,c]) {
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

function bary_X983([a,b,c]) {
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

function bary_X984([a,b,c]) {
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

function bary_X985([a,b,c]) {
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

function bary_X986([a,b,c]) {
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

function bary_X987([a,b,c]) {
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

function bary_X988([a,b,c]) {
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

function bary_X989([a,b,c]) {
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

function bary_X990([a,b,c]) {
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

function bary_X991([a,b,c]) {
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

function bary_X992([a,b,c]) {
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

function bary_X993([a,b,c]) {
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

function bary_X994([a,b,c]) {
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

function bary_X995([a,b,c]) {
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

function bary_X996([a,b,c]) {
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

function bary_X997([a,b,c]) {
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

function bary_X998([a,b,c]) {
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

function bary_X999([a,b,c]) {
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

function bary_X1000([a,b,c]) {
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