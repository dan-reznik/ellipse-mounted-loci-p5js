function getV2V3(a, mounting, eps) {
    c = Math.sqrt(a * a - 1);
    f1 = [-c, 0];
    f2 = [c, 0];
    const dict_v2v3 = {
        fs: [f1, f2],
        fsCtr: [f2, [eps, eps]],
        fsLeft: [f1, [a, 0]],
        fsRight: [f2, [a, 0]],
        fsTop: [f2, [0, -1]],
        major: [[-a, 0], [a, 0]],
        minor: [[0, 1], [0, -1]],
        mixed: [[a, 0], [0, -1]],
        ctrMajor: [[eps, 0], [a, 0]],
        ctrMinor: [[eps, 0], [0, -1]],
        TL_BL: [[-a, -1], [-a, 1]],
        TL_TR: [[-a, -1], [a, -1]],
        TL_vtxL: [[-a, -1], [-a, 0]],
        TL_vtxT: [[-a, -1], [0, -1]],
        TL_vtxB: [[-a, -1], [0, 1]],
        TL_ctr: [[-a, -1], [eps, eps]],
        TL_BR: [[-a, -1], [a, 1]]
    };
    return mounting in dict_v2v3 ? dict_v2v3[mounting] : [[-a, 1], [a, -1]];
}

function get_Xn_mounted_low(a,tDeg,v2,v3,tri_type,cpn,pn,inv,inv_fn,mounting,circ) {
    let t = toRad(tDeg);
    let v1 = [a * Math.cos(t), Math.sin(t)];
    let tri = [v1, v2, v3];
    let sides = tri_sides(tri);
    const ons_derived = get_derived_tri(a, tri, sides, tri_type, cpn,pn, mounting);
    return inv=="tri" ? invert_tri(ons_derived,inv_fn) :
    inv=="polar" ? polar_tri(ons_derived, inv_fn, circ, a, mounting) : ons_derived;
}

function get_Xn_mounted(a, tDeg, v2, v3, bary_fn, tri_type, cpn, pn, inv, inv_fn, locus_type, mounting,circ) {
    ons_derived = get_Xn_mounted_low(a,tDeg,v2,v3,tri_type,cpn,pn,inv,inv_fn,mounting,circ);
    const tri_fn = (a0,tDeg0)=>get_Xn_mounted_low(a0,tDeg0,v2,v3,tri_type,cpn,pn,inv,inv_fn,mounting,circ);
    const xn = locus_type in dict_caustic_n ? get_side_envelope(a, tDeg, tri_fn, dict_caustic_n[locus_type]) :
    locus_type in dict_two_point ? dict_two_point[locus_type](a, tDeg, tri_fn, bary_fn, get_fn_bary(pn)) :
         get_Xn_low_bary(ons_derived.o, ons_derived.s, bary_fn);
    const xn_inv = inv=="xn"?inv_fn(ons_derived.o,ons_derived.s, xn):xn;
    return [ons_derived.o[0], xn_inv];
}