function circle_unit(tri,sides) {
    return { ctr:[0,0], R:1 };
}
function circle_circum(tri,sides) {
    const x3 = get_Xn_cartesians(3, tri, sides);
    const R =  edist(x3,tri[0]);
    return { ctr:x3, R:R };
}

function circle_incircle(tri,sides) {
    const x1 = get_Xn_cartesians(1, tri, sides);
    const r = get_inradius(sides);
    return { ctr:x1, R:r };
}

function circle_euler(tri,sides) {
    const x5 = get_Xn_cartesians(5, tri, sides);
    const mid = vmid(tri[0],tri[1]);
    const R = edist(x5,mid);
    return { ctr:x5, R:R };
}

function circle_cosine(tri,sides) {
    const x6 = get_Xn_cartesians(6, tri, sides);
    const R = product(sides)/sum_sqr(sides);
    return { ctr:x6, R:R };
}

function circle_cosine_exc(tri,sides) {
    const exc_ts = excentral_triangle(tri,sides);
    const exc = generic_triangle(tri,sides,exc_ts);
    return circle_cosine(exc,tri_sides(exc));
}

function circle_brocard(tri,sides) {
    const x182 = get_Xn_cartesians(182, tri, sides);
    const x3 = get_Xn_cartesians(3, tri, sides);
    const R = edist(x3,x182);
    return { ctr:x182, R:R };
}

function circle_brocard2(tri,sides) {
    const x3 = get_Xn_cartesians(3, tri, sides);
    const broc1 = barys_to_cartesian(tri, bary_brocard1(sides));
    const R = edist(x3,broc1);
    return { ctr:x3, R:R };
}

function circle_moses(tri,sides) {
    const x39 = get_Xn_cartesians(39,tri,sides);
    const x115 = get_Xn_cartesians(115,tri,sides);
    const R = edist(x39,x115);
    return { ctr:x39, R:R};
}

function circle_lemoine(tri,sides) {
    const x182 = get_Xn_cartesians(182,tri,sides);
    const theR = get_circumradius(sides);
    const s2w = sin2_omega(sides);
    const cosw = Math.sqrt(1-s2w);
    const R = .5*theR/cosw;
    return { ctr:x182, R:R };
}

function circle_adams(tri,[a,b,c]) {
    const x1 = get_Xn_cartesians(1,tri,[a,b,c]);
    const p = a*b+b*c+c*a;
    const r = get_inradius([a,b,c]);
    const s = get_semiperimeter([a,b,c]);
    const R = r*Math.sqrt(p*p-a*b*c*s-p*s*s)/(p-s*s);
    return { ctr:x1, R:R };
}

function circle_spieker(tri,sides) {
    const x10 = get_Xn_cartesians(10,tri,sides);
    const R = 0.5*get_inradius(sides);
    return { ctr:x10, R:R };
}

function circle_apollonius(tri,sides) {
    const x940 = get_Xn_cartesians(940,tri,sides);
    const s = get_semiperimeter(sides);
    const r = get_inradius(sides);
    const R = (r*r+s*s)/(4*r);
    return { ctr:x940, R:R };
}

function circle_conway(tri,sides) {
    const x1 = get_Xn_cartesians(1,tri,sides);
    const s = get_semiperimeter(sides);
    const r = get_inradius(sides);
    const R = Math.sqrt(r*r+s*s);
    return { ctr:x1, R:R };
}

// https://mathworld.wolfram.com/ParryCircle.html
function circle_parry(tri,sides) {
    const x351 = get_Xn_cartesians(351,tri,sides);
    const cwy = get_conway(sides);
    const R = (product(sides)/3)*Math.abs(1/(cwy.Sa-cwy.Sb)+1/(cwy.Sb-cwy.Sc)+1/(cwy.Sc-cwy.Sa));
    return { ctr:x351, R:R };
}

// https://mathworld.wolfram.com/FuhrmannCircle.html
function circle_fuhrmann(tri,sides) {
    const [x1,x3,x355] = [1,3,355].map(xn=>get_Xn_cartesians(xn,tri,sides));
    const R=edist(x1,x3);
    return { ctr:x355, R:R };
}

function circle_gallatly(tri,sides) {
    const x39 = get_Xn_cartesians(39,tri,sides);
    const R=get_circumradius(sides)*Math.sqrt(sin2_omega(sides));
    return { ctr:x39, R:R };
}


function circle_bevan(tri,sides) {
    const x40 = get_Xn_cartesians(40,tri,sides);
    const R=2*get_circumradius(sides);
    return { ctr:x40, R:R };
}

function circle_mandart(tri,sides) {
    const ext_ts = extouch_triangle(sides);
    const ext = generic_triangle(tri,sides,ext_ts);
    const ext_x3 = get_Xn_cartesians(3,ext,tri_sides(ext));
    const R=edist(ext_x3,ext[0]);
    return { ctr:ext_x3, R:R };
}

function circle_taylor(tri,sides) {
    x389 = get_Xn_cartesians(389,tri,sides);
    cs = tri_cosines(sides);
    cs2 = cs.map(c=>c*c);
    ss2 = cs2.map(c2=>1-c2);
    R=get_circumradius(sides)*Math.sqrt(product(cs2)+product(ss2));
    return { ctr:x389, R:R };
}

function circle_reflection(tri,sides) {
    x195 = get_Xn_cartesians(195,tri,sides);
    const refl_ts = reflection_triangle(sides);
    const refl = generic_triangle(tri,sides,refl_ts);
    const refl_x3 = get_Xn_cartesians(3,refl,tri_sides(refl));
    const R=edist(refl_x3,refl[0]);
    return { ctr:x195, R:R };
}

function circle_schoutte(tri,sides) {
    const [x15,x187] = [15,187].map(xn=>get_Xn_cartesians(xn,tri,sides));
    const R = edist(x187,x15);
    return { ctr:x187, R:R};  
}


