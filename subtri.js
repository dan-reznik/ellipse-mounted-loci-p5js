function get_subtris(o,ctr) {
   return  [
    [ctr,o[1],o[2]],
    [ctr,o[2],o[0]],
    [ctr,o[0],o[1]]];
}

function xn_map_triangle(o, s, ts, xk) {
    const xn = trilin_to_cartesian(o, s, ts);
    const subtris = get_subtris(o,xn);
    const xks = subtris.map((t,i)=>get_Xn_cartesians(xk,t,tri_sides(t)));
    return xks;
}

const x1_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,1);
const x2_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,2);
const x3_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,3);
const x4_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,4);
const x5_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,5);
const x6_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,6);
const x7_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,7);
const x8_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,8);
const x9_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,9);
const x10_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,10);
const x11_map_triangle = (o, s, ts) => xn_map_triangle(o,s,ts,11);