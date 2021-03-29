function get_subtris(o,ctr) {
   return  [
    [ctr,o[1],o[2]],
    [ctr,o[2],o[0]],
    [ctr,o[0],o[1]]];
}

function subtri_xn(o, s, ts, xk) {
    const xn = trilin_to_cartesian(o, s, ts);
    const subtris = get_subtris(o,xn);
    const xks = subtris.map((t,i)=>get_Xn_cartesians(xk,t,tri_sides(t)));
    return xks;
}

const subtri_x1 = (o, s, ts) => subtri_xn(o,s,ts,1);
const subtri_x2 = (o, s, ts) => subtri_xn(o,s,ts,2);
const subtri_x3 = (o, s, ts) => subtri_xn(o,s,ts,3);
const subtri_x4 = (o, s, ts) => subtri_xn(o,s,ts,4);
const subtri_x5 = (o, s, ts) => subtri_xn(o,s,ts,5);
const subtri_x6 = (o, s, ts) => subtri_xn(o,s,ts,6);
const subtri_x7 = (o, s, ts) => subtri_xn(o,s,ts,7);
const subtri_x8 = (o, s, ts) => subtri_xn(o,s,ts,8);
const subtri_x9 = (o, s, ts) => subtri_xn(o,s,ts,9);
const subtri_x10 = (o, s, ts) => subtri_xn(o,s,ts,10);
const subtri_x11 = (o, s, ts) => subtri_xn(o,s,ts,11);

