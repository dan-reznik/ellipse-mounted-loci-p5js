function getDelta(a, b) {
    const a2 = a * a, b2 = b * b;
    return Math.sqrt(a2 * a2 - a2 * b2 + b2 * b2);
}

function caustic_billiard(a) {
    const a2 = a * a;
    const delta = getDelta(a, 1);
    const ap = (a * a2) / (delta + 1);
    const bp = 1 / (a2 + delta);
    return [ap, bp];
}

function caustic_homothetic(a) {
    return [a / 2.0, 0.5];
}

// if an external ellipse with axes (a,1) is given.
function caustic_excentral_inner(a) {
    const a2 = a * a;
    const rad = Math.sqrt(1 + 14 * a2 + a2 * a2);
    const denom = 2 - 2 * a2;
    const ac = (a * (3 + a2 - rad)) / denom;
    const bc = (1 + 3 * a2 - rad) / denom;
    return [ac, bc];
}

// if true caustic w axes (a,1) is given
// https://dan-reznik.github.io/why-so-many-ellipses/
function caustic_excentral(a) {
    const b = 1;
    const d = getDelta(a, b);
    const ae = (b * b + d) / a;
    const be = (a * a + d) / b;
    return [ae, be];
}

function caustic_excentral_affine(a) {
    const [ap,bp]=caustic_billiard(a);
    const b=1;
    const d = getDelta(a, b);
    const c2 = a * a - b;
    // from 33 CBM paper, affine scaling which sends billiard caustic to circle
    const s = b * (d - c2) / (a * a * a);
    return [s*ap, bp];
}

function caustic_incircle(a) {
    const r = (a) / (a + 1);
    return [r, r];
}

function caustic_inellipse(a) {
    const R = (a + 1);
    return [R, R];
};

function caustic_dual(a) {
    const a2 = a * a;
    const bp = a2 / (a2 + 1);
    const ap = bp / a;
    return [ap, bp];
}

// assume incircle at 0,0
// R=1+a;
function caustic_bicentric(a) {
    return [1, 1];
}

function caustic_brocard(a) {
    const isos = getBrocardInellipseIsosceles(a, 1);
    const x3 = get_Xn_cartesians(3, isos[0], tri_sides(isos[0]));
    const R = edist(isos[0][0], x3);
    return [R, R];
}

function porism_brocard(a) {
    const isos = getBrocardInellipseIsosceles(a, 1);
    const x3 = get_Xn_cartesians(3, isos[0], tri_sides(isos[0]));
    const R = edist(isos[0][0], x3);
    return { R: R, x3: x3 };
}

// what comes in is axes of macbeath, where is circle (a,1)
function caustic_macbeath(a) {
    R=2*a;
    return [R, R];
}

function porism_macbeath(a) {
    const R = 2*a;
    const c = Math.sqrt(a*a-1);
    return { R: R, x3: [-c,0] };  
}

// porisms w/ circular caustic

// Derived by R. Garcia
// (b^4*(a^2 + x^2) + a^4*y^2 - a^2*b^2*(-a^2 + x^2 + y^2) - 2*a*b*Sqrt[(a^4 - a^2*x^2 + b^2*x^2)*(b^4 + a^2*y^2 - b^2*y^2)])/(a^2 - b^2)^2
function caustic_radius2(a,[x,y]) {
    const b=1;
    const a2=a*a, b2=b*b;
    const a4=a2*a2, b4=b2*b2;
    const x2=x*x,y2=y*y;
    const c2 = a2-b2;
    const rho2 = (a4 - x2*c2)*(b4 + y2*c2);
    r2= (b4*(a2+x2) + a4*(b2+y2) - a2*b2*(x2+y2) - 2*a*b*Math.sqrt(rho2))/(c2*c2);
    return r2;
}

function caustic_circX1(a) {
    const b=1;
    const c = Math.sqrt(Math.abs(a*a - b*b));
    return [c, 0];
}
 
 // DSR 8/7/24
function porism_circX1(a) {
    const a2 = a*a, b2 = 1;
    const c2 = a2-b2;
    const c = Math.sqrt(c2);
    const denom2 = 3*a2 + 2*a*Math.sqrt(2*a2-1) - 1;
    const r = 1/Math.sqrt(denom2);
    return { ctr: [c, 0], r:  r };  
}

// Ronaldo Garcia, 7-aug-2024, x2 stationary
// ctr=[0,c*b/(2*a)], caustic radius=b/2, X2 [0,c*b/(3*a)]
function caustic_circX2(a) {
    const b=1,a2=a*a,b2=b*b;
    const c2=a2-b2;
    const cy=Math.sqrt(c2)*b/(2*a);
    return [0,-cy];
}

function porism_circX2(a) {
    const b = 1;
    const ctr = caustic_circX2(a);
    return { ctr: ctr, r: b/2 };  
}

// derived by R. Garcia, Aug. 2024
// ctr=[a^2*c/(2*a^2 - c^2), 0] e raio=a*(a^2 - c^2)/(2*a^2 - c^2)  tem X4=[c,0] 
function caustic_circX4(a) {
    const a2 = a*a, b2 = 1;
    const c2 = a2-b2;
    const c = Math.sqrt(c2);
    const cx = (a2*c)/(2*a2 - c2);
    return [cx, 0];
 }
 
 function porism_circX4(a) {
    const a2 = a*a, b2 = 1;
    const c2 = a2-b2;
    const c = Math.sqrt(c2);
    const k = 2*a2 - c2;
    const cx = (a2*c)/k;
    const r = a*(a2 - c2)/k;
    return { ctr: [cx, 0], r:  r };  
 }

 // Ronaldo 7-ago-2024
 // ctr=[sqrt(4*a^4 - 5*a^2*b^2 + b^4)/(2*a), 0],  r=b^2/(2*a)
 function caustic_circX7(a) {
     const b=1,a2=a*a,b2=b*b;
     const a4=a2*a2,b4=b2*b2;
     const cx = Math.sqrt(4*a4-5*a2*b2+b4)/(2*a);
     return [cx,0];
  }
 
 function porism_circX7(a) {
     const b = 1;
     const ctr = caustic_circX7(a);
     const r = b*b/(2*a);
     return { ctr: ctr, r: r };  
 }

 function caustic_circHalf(a) {
    const ctr =[a/2,-1/2];
    return ctr;
 }

function porism_circHalf(a) {
    const ctr = caustic_circHalf(a);
    const r2 = caustic_radius2(a,ctr);
    return { ctr: ctr, r: Math.sqrt(r2) };  
}

function caustic_circThird(a) {
    const ctr =[a/3,-1/3];
    return ctr;
 }

function porism_circThird(a) {
    const ctr = caustic_circThird(a);
    const r2 = caustic_radius2(a,ctr);
    return { ctr: ctr, r: Math.sqrt(r2) };  
}
