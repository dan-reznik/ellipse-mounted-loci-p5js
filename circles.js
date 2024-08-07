function circle_unit(tri,sides) {
    return { ctr:[0,0], R:1, n:0 };
}

function circle_ctr(a) {
    return { ctr:[0,0], R:1, n:0 };
}

function circle_f1(a) {
    const ctr = [-Math.sqrt(a*a-1),0];
    return { ctr:ctr, R:1, n:0 };
}

function circle_f1c(ac,bc) {
    const ctr = ac>bc?[-Math.sqrt(ac*ac-bc*bc),0]:[0,Math.sqrt(bc*bc-ac*ac)];
    return { ctr:ctr, R:1, n:0 };
}

function circle_f2c(ac,bc) {
    const ctr = ac>bc?[Math.sqrt(ac*ac-bc*bc),0]:[0,-Math.sqrt(bc*bc-ac*ac)];
    return { ctr:ctr, R:1, n:0 };
}

function circle_f2(a) {
    const ctr = [Math.sqrt(a*a-1),0];
    return { ctr:ctr, R:1, n:0 };
}

function cremona_inversion(p,p0) {
    const rel = vdiff(p,p0);
    return vsum(p0, vinv(rel));
}

function cremona_f1(a,p) {
    const p0 = [-Math.sqrt(a*a-1),0];
    return cremona_inversion(p,p0);
}

function cremona_f2(a,p) {
    const p0 = [Math.sqrt(a*a-1),0];
    return cremona_inversion(p,p0);
}

function cremona_ctr(a,p) {
    const p0 = [0,0];
    return cremona_inversion(p,p0);
}

function circle_circum(tri,sides) {
    const x3 = get_Xn_cartesians(3, tri, sides);
    const R =  edist(x3,tri[0]);
    return { ctr:x3, R:R, n:3 };
}

function circle_incircle(tri,sides) {
    const x1 = get_Xn_cartesians(1, tri, sides);
    const r = get_inradius(sides);
    return { ctr:x1, R:r, n:1 };
}

function circle_euler(tri,sides) {
    const x5 = get_Xn_cartesians(5, tri, sides);
    const mid = vmid(tri[0],tri[1]);
    const R = edist(x5,mid);
    return { ctr:x5, R:R, n:5 };
}

function circle_cosine(tri,sides) {
    const x6 = get_Xn_cartesians(6, tri, sides);
    const R = product(sides)/sum_sqr(sides);
    return { ctr:x6, R:R, n:6 };
}

// Darij Grinberg, "Ehrmann's 3rd Lemoine Circle" -- https://jcgeometry.org/Articles/Volume1/JCG2012V1pp40-52.pdf
function circle_ehrmann(tri,sides) {
    // x576 = X3 + 1.5*(X6-X3)
    const x576 = get_Xn_cartesians(576, tri, sides);
    const circumR = get_circumradius(sides);
    const cosineR = product(sides)/sum_sqr(sides);
    const R = Math.sqrt(9*cosineR*cosineR+circumR*circumR)
    return { ctr:x576, R:R, n:576 };
}

function get_excircles(tri,sides) {
    const ts_exc = excentral_triangle(sides);
    const exc = generic_triangle(tri,sides,ts_exc);
    const area = tri_area(sides);
    const s = get_semiperimeter(sides);
    // https://mathworld.wolfram.com/Exradius.html
    const Rs = sides.map(li=>area/(s-li));
    return exc.map((e,i)=> ({ ctr:e, R:Rs[i] }));
}

//https://mathworld.wolfram.com/JohnsonCircles.html
function circle_johnson_low(tri,sides,n) {
    const x4 = get_Xn_cartesians(4, tri, sides);
    const x3_jhn = get_circumcenter([x4,tri[n==2?0:n+1],tri[n==0?2:n-1]]);
    const R = edist(x3_jhn, x4);
    return { ctr:x3_jhn, R:R, n:0 };
}

const circle_johnson_1 = (tri,sides) => circle_johnson_low(tri,sides,0);
const circle_johnson_2 = (tri,sides) => circle_johnson_low(tri,sides,1);
const circle_johnson_3 = (tri,sides) => circle_johnson_low(tri,sides,2);

function circle_excircle_low(tri,sides,n) {
    const ts_exc = excentral_triangle(sides);
    const exc = generic_triangle(tri,sides,ts_exc);
    const area = tri_area(sides);
    const s = get_semiperimeter(sides);
    const R = area/(s-sides[n]);
    return { ctr:exc[n], R:R, n:0 };
}

const circle_excircle_1 = (tri,sides) => circle_excircle_low(tri,sides,0);
const circle_excircle_2 = (tri,sides) => circle_excircle_low(tri,sides,1);
const circle_excircle_3 = (tri,sides) => circle_excircle_low(tri,sides,2);

// https://en.wikipedia.org/wiki/Poincar%C3%A9_disk_model
function get_poinc_coeffs([x1,y1], [x2,y2]) {
    const k = x1*y2 - y1*x2;
    const cx = (2/k)*(y1-y2);
    const cy = (2/k)*(x2-x1);
    return [1,1,cx,cy,1];
}

// https://en.wikipedia.org/wiki/Poincar%C3%A9_disk_model
function circle_poinc_low(tri,sides,n) {
    const x3 = get_circumcenter(tri);
    const invR = 1/get_circumradius(sides);
    // normalize it so x3 = (0,0), R = 1
    const tri0 = tri.map(v => vscale(vdiff(v,x3),invR));
    const from = tri0[n];
    const to = tri0[n == 2 ? 0 : n + 1];
    const coeffs = get_poinc_coeffs(from, to);
    const ctr0 = get_circ_ctr(coeffs);
    const R0 = get_circ_rad(coeffs);
    //return { ctr:vsum(ctr0,x3), R:R0/invR, n:0 };
    return { ctr:vsum(vscale(ctr0,1/invR),x3), R:R0/invR, n:0 };
}

const circle_poinc_1 = (tri,sides) => circle_poinc_low(tri,sides,0);
const circle_poinc_2 = (tri,sides) => circle_poinc_low(tri,sides,1);
const circle_poinc_3 = (tri,sides) => circle_poinc_low(tri,sides,2);

function circle_mixtilinear_low(tri,sides,n) {
    const ts = mixtilinear_triangle(sides);
    const mixt = generic_triangle(tri,sides,ts);
    const perp = closest_perp(mixt[n],tri[n],tri[n==2?0:n+1]);
    // https://mathworld.wolfram.com/Exradius.html
    //to do:
    const R=edist(mixt[n],perp);
    return { ctr:mixt[n], R:R, n:0 };
}

const circle_mixtilinear_1 = (tri,sides) => circle_mixtilinear_low(tri,sides,0);
const circle_mixtilinear_2 = (tri,sides) => circle_mixtilinear_low(tri,sides,1);
const circle_mixtilinear_3 = (tri,sides) => circle_mixtilinear_low(tri,sides,2);


// Thm 12: https://forumgeom.fau.edu/FG2006volume6/FG200601.pdf
function circle_mixtilinear_apollonius_inner(tri,sides) {
    const x1 = get_Xn_cartesians(1, tri, sides);
    const r = get_inradius(sides);
    const x3 = get_Xn_cartesians(3, tri, sides);
    const R = edist(x3,tri[0]);
    // divides OI in 4R : r
    const ctr = vinterp(x3, x1, (4*R)/(r+4*R));
    const theR = (3*R*r)/(4*R+r);
    return { ctr:ctr, R:theR, n:0 };
}

// Thm 11: https://forumgeom.fau.edu/FG2006volume6/FG200601.pdf
function circle_mixtilinear_excircle_apollonius_outer(tri,sides) {
    const x1 = get_Xn_cartesians(1, tri, sides);
    const r = get_inradius(sides);
    const x3 = get_Xn_cartesians(3, tri, sides);
    const R = edist(x3,tri[0]);
    // divides OI in -4R : 4R+r
    const ctr = vinterp(x3, x1, (-4*R)/r);
    const theR = (R/r)*(4*R-3*r);
    return { ctr:ctr, R:theR, n:0 };
}

function circle_mixtilinear_excircle_low(tri,sides,n) {
    const ts = mixtilinear2nd_triangle(sides);
    const mixt_exc = generic_triangle(tri,sides,ts);
    const x3 = get_Xn_cartesians(3, tri, sides);
    const R = edist(x3,tri[0]);
    const r=edist(mixt_exc[n],x3)-R;
    return { ctr:mixt_exc[n], R:r, n:0 };
}

const circle_mixtilinear_excircle_1 = (tri,sides) => circle_mixtilinear_excircle_low(tri,sides,0);
const circle_mixtilinear_excircle_2 = (tri,sides) => circle_mixtilinear_excircle_low(tri,sides,1);
const circle_mixtilinear_excircle_3 = (tri,sides) => circle_mixtilinear_excircle_low(tri,sides,2);

function circle_neuberg_low(tri, [s23, s31, s12], n, refl_circ=false) {
    const triL = [s12, s23, s31];
    const tri2L = triL.map(v => v * v);
    const triA = tri_area(triL);
    const cotW = sum(tri2L) / (4 * triA);
    const k = Math.sqrt(cotW * cotW - 3) / 2;
    const r = k * triL[n];
    const sides = tri.map((v, i) => vdiff(tri[i == 2 ? 0 : i + 1],v));
    //ctrs = MapThread[(#1 + #2/2 + perp[#2] cotW/2) &, {tri, sides}];
    const v1 = vsum(tri[n], vscale(sides[n], .5));
    const the_sign = (refl_circ?-1:1)*(vccw(...tri)?1:-1);
    const v2 = vscale(vperp(sides[n]), the_sign * cotW/2);
    const ctr = vsum(v1, v2);
    return { ctr: ctr, R: r, n: 0 };
}

const circle_neuberg_1 = (tri,sides) => circle_neuberg_low(tri,sides,0);
const circle_neuberg_2 = (tri,sides) => circle_neuberg_low(tri,sides,1);
const circle_neuberg_3 = (tri,sides) => circle_neuberg_low(tri,sides,2);

const circle_neuberg_refl_1 = (tri,sides) => circle_neuberg_low(tri,sides,0,true);
const circle_neuberg_refl_2 = (tri,sides) => circle_neuberg_low(tri,sides,1,true);
const circle_neuberg_refl_3 = (tri,sides) => circle_neuberg_low(tri,sides,2,true);

function circle_bitang_ext_low(tri,sides,n) {
    const ts_mtx = bitangent_ext_triangle(sides);
    const ctr = trilin_to_cartesian(tri,sides,ts_mtx[n]);
    const R = edist(ctr,tri[n]);
    return { ctr:ctr, R:R, n:0 };
}
const circle_bitang_ext_1 = (tri,sides) => circle_bitang_ext_low(tri,sides,0);
const circle_bitang_ext_2 = (tri,sides) => circle_bitang_ext_low(tri,sides,1);
const circle_bitang_ext_3 = (tri,sides) => circle_bitang_ext_low(tri,sides,2);

function circle_bitang_int_low(tri,sides,n) {
    const ts_mtx = bitangent_int_triangle(sides);
    const ctr = trilin_to_cartesian(tri,sides,ts_mtx[n]);
    const R = edist(ctr,tri[n]);
    return { ctr:ctr, R:R, n:0 };
}
const circle_bitang_int_1 = (tri,sides) => circle_bitang_int_low(tri,sides,0);
const circle_bitang_int_2 = (tri,sides) => circle_bitang_int_low(tri,sides,1);
const circle_bitang_int_3 = (tri,sides) => circle_bitang_int_low(tri,sides,2);


function circle_bitang_inc_ext_low(tri,sides,n) {
    const ts_mtx = bitangent_inc_ext_triangle(sides);
    const ts_int_mtx = intouch_triangle(sides);
    const ctr = trilin_to_cartesian(tri,sides,ts_mtx[n]);
    const int = trilin_to_cartesian(tri,sides,ts_int_mtx[n]);
    const R = edist(ctr,int);
    return { ctr:ctr, R:R, n:0 };
}
const circle_bitang_inc_ext_1 = (tri,sides) => circle_bitang_inc_ext_low(tri,sides,0);
const circle_bitang_inc_ext_2 = (tri,sides) => circle_bitang_inc_ext_low(tri,sides,1);
const circle_bitang_inc_ext_3 = (tri,sides) => circle_bitang_inc_ext_low(tri,sides,2);

function circle_bitang_inc_int_low(tri,sides,n) {
    const ts_mtx = bitangent_inc_int_triangle(sides);
    const ts_int_mtx = intouch_triangle(sides);
    const ctr = trilin_to_cartesian(tri,sides,ts_mtx[n]);
    const int = trilin_to_cartesian(tri,sides,ts_int_mtx[n]);
    const R = edist(ctr,int);
    return { ctr:ctr, R:R, n:0 };
}
const circle_bitang_inc_int_1 = (tri,sides) => circle_bitang_inc_int_low(tri,sides,0);
const circle_bitang_inc_int_2 = (tri,sides) => circle_bitang_inc_int_low(tri,sides,1);
const circle_bitang_inc_int_3 = (tri,sides) => circle_bitang_inc_int_low(tri,sides,2);


// https://mathworld.wolfram.com/TangentCircles.html
function circle_tangent_low(tri,sides,n) {
    const ctr = tri[n];
    const s = sum(sides)/2;
    const R = s-sides[n];
    return { ctr:ctr, R:R, n:0 };
}

const circle_tangent_1 = (tri,sides) => circle_tangent_low(tri,sides,0);
const circle_tangent_2 = (tri,sides) => circle_tangent_low(tri,sides,1);
const circle_tangent_3 = (tri,sides) => circle_tangent_low(tri,sides,2);

function circle_power_low(tri,sides,n) {
    const ctr = vmid(tri[n==2?0:n+1],tri[n==0?2:n-1]);
    const R = edist(ctr,tri[n]);
    return { ctr:ctr, R:R, n:0 };
}

const circle_power_1 = (tri,sides) => circle_power_low(tri,sides,0);
const circle_power_2 = (tri,sides) => circle_power_low(tri,sides,1);
const circle_power_3 = (tri,sides) => circle_power_low(tri,sides,2);

function circle_apollonius_isodyn_low(tri,sides,n) {
    const x15 = get_Xn_cartesians(15, tri, sides);
    const x16 = get_Xn_cartesians(16, tri, sides);
    const ctr = get_circumcenter([x15,x16,tri[n]]);
    const R = edist(ctr,tri[n]);
    return { ctr:ctr, R:R, n:0 };
}

const circle_apollonius_isodyn_1 = (tri,sides) => circle_apollonius_isodyn_low(tri,sides,0);
const circle_apollonius_isodyn_2 = (tri,sides) => circle_apollonius_isodyn_low(tri,sides,1);
const circle_apollonius_isodyn_3 = (tri,sides) => circle_apollonius_isodyn_low(tri,sides,2);

function circle_cosine_exc(tri,sides) {
    const exc_ts = excentral_triangle(sides);
    const exc = generic_triangle(tri,sides,exc_ts);
    let cc_exc = circle_cosine(exc,tri_sides(exc));
    cc_exc.n=9;
    return cc_exc;
}

function circle_brocard(tri,sides) {
    const x182 = get_Xn_cartesians(182, tri, sides);
    const x3 = get_Xn_cartesians(3, tri, sides);
    const R = edist(x3,x182);
    return { ctr:x182, R:R, n:182 };
}

function circle_brocard2(tri,sides) {
    const x3 = get_Xn_cartesians(3, tri, sides);
    const broc1 = barys_to_cartesian(tri, bary_brocard1(sides));
    const R = edist(x3,broc1);
    return { ctr:x3, R:R, n:3 };
}

function circle_moses(tri,sides) {
    const x39 = get_Xn_cartesians(39,tri,sides);
    const x115 = get_Xn_cartesians(115,tri,sides);
    const R = edist(x39,x115);
    return { ctr:x39, R:R, n:39};
}

function circle_moses_radical(tri,sides) {
    const x647 = get_Xn_cartesians(647,tri,sides);
    const x15 = get_Xn_cartesians(15,tri,sides);
    const R = edist(x647,x15);
    return { ctr:x647, R:R, n:647};
}

function circle_gheorghe(tri,sides) {
    const x649 = get_Xn_cartesians(649,tri,sides);
    const x15 = get_Xn_cartesians(15,tri,sides);
    const R = edist(x649,x15);
    return { ctr:x649, R:R, n:649};
}

function circle_lemoine(tri,sides) {
    const x182 = get_Xn_cartesians(182,tri,sides);
    const theR = get_circumradius(sides);
    const s2w = sin2_omega(sides);
    const cosw = Math.sqrt(1-s2w);
    const R = .5*theR/cosw;
    return { ctr:x182, R:R, n:182 };
}

function circle_adams(tri,[a,b,c]) {
    const x1 = get_Xn_cartesians(1,tri,[a,b,c]);
    const p = a*b+b*c+c*a;
    const r = get_inradius([a,b,c]);
    const s = get_semiperimeter([a,b,c]);
    const R = r*Math.sqrt(p*p-a*b*c*s-p*s*s)/(p-s*s);
    return { ctr:x1, R:R, n:1 };
}

function circle_spieker(tri,sides) {
    const x10 = get_Xn_cartesians(10,tri,sides);
    const R = 0.5*get_inradius(sides);
    return { ctr:x10, R:R, n:10 };
}

function circle_apollonius_outer(tri,sides) {
    const x970 = get_Xn_cartesians(970,tri,sides);
    const s = get_semiperimeter(sides);
    const r = get_inradius(sides);
    const R = (r*r+s*s)/(4*r);
    return { ctr:x970, R:R, n:970 };
}

function circle_conway(tri,sides) {
    const x1 = get_Xn_cartesians(1,tri,sides);
    const s = get_semiperimeter(sides);
    const r = get_inradius(sides);
    const R = Math.sqrt(r*r+s*s);
    return { ctr:x1, R:R, n:1 };
}

// https://mathworld.wolfram.com/ParryCircle.html
function circle_parry(tri,sides) {
    const x351 = get_Xn_cartesians(351,tri,sides);
    const cwy = get_conway(sides);
    const R = (product(sides)/3)*Math.abs(1/(cwy.Sa-cwy.Sb)+1/(cwy.Sb-cwy.Sc)+1/(cwy.Sc-cwy.Sa));
    return { ctr:x351, R:R, n:351 };
}

// https://mathworld.wolfram.com/FuhrmannCircle.html
function circle_fuhrmann(tri,sides) {
    const [x1,x3,x355] = [1,3,355].map(xn=>get_Xn_cartesians(xn,tri,sides));
    const R=edist(x1,x3);
    return { ctr:x355, R:R, n:355 };
}

function circle_gallatly(tri,sides) {
    const x39 = get_Xn_cartesians(39,tri,sides);
    const R=get_circumradius(sides)*Math.sqrt(sin2_omega(sides));
    return { ctr:x39, R:R, n:39 };
}


function circle_bevan(tri,sides) {
    const x40 = get_Xn_cartesians(40,tri,sides);
    const R=2*get_circumradius(sides);
    return { ctr:x40, R:R, n:40 };
}

// 8/6/2024: https://mathworld.wolfram.com/PolarCircle.html
function circle_polar(tri,sides) {
    const x4 = get_Xn_cartesians(4,tri,sides);
    const R = get_circumradius(sides);
    const l2 = sum(sides.map(s => s * s));
    const rpol2 = 4*R*R - l2/2;
    const rpol = sqrt(Math.abs(rpol2)); 
    return { ctr: x4, R: rpol, n:4 };
}

function circle_mandart(tri,sides) {
    const ext_ts = extouch_triangle(sides);
    const ext = generic_triangle(tri,sides,ext_ts);
    const ext_x3 = get_Xn_cartesians(3,ext,tri_sides(ext));
    const R=edist(ext_x3,ext[0]);
    return { ctr:ext_x3, R:R, n:1158 };
}

function circle_taylor(tri,sides) {
    x389 = get_Xn_cartesians(389,tri,sides);
    cs = tri_cosines(sides);
    cs2 = cs.map(c=>c*c);
    ss2 = cs2.map(c2=>1-c2);
    R=get_circumradius(sides)*Math.sqrt(product(cs2)+product(ss2));
    return { ctr:x389, R:R, n:389 };
}

function circle_reflection(tri,sides) {
    x195 = get_Xn_cartesians(195,tri,sides);
    const refl_ts = reflection_triangle(sides);
    const refl = generic_triangle(tri,sides,refl_ts);
    const refl_x3 = get_Xn_cartesians(3,refl,tri_sides(refl));
    const R=edist(refl_x3,refl[0]);
    return { ctr:x195, R:R, n:195 };
}

function circle_schoutte(tri,sides) {
    const [x15,x187] = [15,187].map(xn=>get_Xn_cartesians(xn,tri,sides));
    const R = edist(x187,x15);
    return { ctr:x187, R:R, n:187};  
}

// using "extra" barycentric
function circle_lester(tri,sides) {
    const bs = bary_X1116(sides);
    const x1116 = barys_to_cartesian(tri,bs);
    const x13 = get_Xn_cartesians(13,tri,sides)
    const R = edist(x1116,x13);
    return { ctr:x1116, R:R, n:1116}; 
}

function get_ctr_R(o, s, circ, a, mounting) {
    var o0 = null;
    if (circ in dict_circles)
      o0 = dict_circles[circ](o, s);
    else if (circ in dict_tri_fns_inv) {
      o0 = tri_fns_invert(circ, a, mounting); // dict_tri_fns_inv[circ].fn(a);
    }
    return o0;
  }


// Arseniy on 9/1/2023:
// Let O = center of incircle, X1
// Let X and Y be an intersection of OA with the incircle. 
// find a point O', such (AO'/AX)=(AO/AY) => AO' = (AO/AY)*AX
// call AO = 1, then AO' = AX/AY
function circle_midarc_low(tri,sides,n) {
    const A = tri[n];
    const ts = midarc_triangle(sides);
    const ma = generic_triangle(tri,sides,ts);
    const X = ma[n];
    const O = get_incenter(tri); // X1
    const Y = vrefl(X,O); // the other intersection
    Op = vinterp(A,O,edist(A,X)/edist(A,Y));
    const R=edist(Op,X);
    return { ctr:Op, R:R, n:0 };
}

const circle_midarc_1 = (tri,sides) => circle_midarc_low(tri,sides,0);
const circle_midarc_2 = (tri,sides) => circle_midarc_low(tri,sides,1);
const circle_midarc_3 = (tri,sides) => circle_midarc_low(tri,sides,2);
