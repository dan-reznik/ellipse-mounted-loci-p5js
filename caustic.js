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