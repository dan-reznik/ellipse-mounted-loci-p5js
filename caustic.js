function getDelta(a,b) {
    const a2 = a*a, b2=b*b;
    return Math.sqrt(a2*a2-a2*b2+b2*b2);
}

function caustic_billiard(a) {
    const a2 = a*a;
    const delta = getDelta(a,1);
    const ap = (a*a2)/(delta + 1);
    const bp = 1/(a2 + delta);
    return [ap, bp];
}

function caustic_homothetic(a) {
    return [a/2.0,0.5];
}

// if an external ellipse with axes (a,1) is given.
function caustic_excentral_inner(a) {
    const a2=a*a;
    const rad = Math.sqrt(1 + 14*a2 + a2*a2);
    const denom = 2 - 2*a2;
    const ac = (a*(3 + a2 - rad))/denom;
    const bc = (1 + 3*a2 - rad)/denom;
    return [ac,bc];
}

// if true caustic w axes (a,1) is given
// https://dan-reznik.github.io/why-so-many-ellipses/
function caustic_excentral(a) {
    const b = 1;
   const d = getDelta(a,b);
   const ae=(b*b+d)/a;
   const be=(a*a+d)/b;
   return [ae,be];
}

function caustic_incircle(a) {
    const r = (a)/(a+1);
    return [r,r];
}

function caustic_inellipse(a) {
    const R=(a+1);
    return [R,R];
};

function caustic_dual(a) {
    const a2=a*a;
    const bp = a2/(a2+1);
    const ap = bp/a;
    return [ap,bp];
}

// assume incircle at 0,0
function caustic_poristic(a) {
    return [1,1];
}

function caustic_brocard(a) {
    const isos = getBrocardInellipseIsosceles(a, 1);
    const x3 = get_Xn_cartesians(3,isos[0],tri_sides(isos[0]));
    const R = edist(isos[0][0],x3);
    return [R,R];
}

function brocard_porism(a) {
    const isos = getBrocardInellipseIsosceles(a, 1);
    const x3 = get_Xn_cartesians(3,isos[0],tri_sides(isos[0]));
    const R = edist(isos[0][0],x3);
    return {R:R,x3:x3};
}