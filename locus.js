const dict_circles = {
    adams: circle_adams,
    apollonius_outer: circle_apollonius_outer,
    bevan: circle_bevan,
    brocard: circle_brocard,
    brocard2: circle_brocard2,
    circum: circle_circum, // (tri,sides)
    conway: circle_conway,
    cosine: circle_cosine,
    cosine_exc: circle_cosine_exc,
    ehrmann: circle_ehrmann,
    euler: circle_euler,
    fuhrmann: circle_fuhrmann,
    gallatly: circle_gallatly,
    gheorghe: circle_gheorghe,
    incircle: circle_incircle,
    lemoine: circle_lemoine,
    lester: circle_lester,
    mandart: circle_mandart,
    midarc1: circle_midarc_1,
    apollonius_isodyn1: circle_apollonius_isodyn_1,
    apollonius_isodyn2: circle_apollonius_isodyn_2,
    apollonius_isodyn3: circle_apollonius_isodyn_3,
    excircle1: circle_excircle_1,
    excircle2: circle_excircle_2,
    excircle3: circle_excircle_3,
    johnson1: circle_johnson_1,
    mixtilinear1: circle_mixtilinear_1,
    mixtilinear2: circle_mixtilinear_2,
    mixtilinear3: circle_mixtilinear_3,
    mixtilinear_apollonius_inner: circle_mixtilinear_apollonius_inner,
    mixtilinear1_exc: circle_mixtilinear_excircle_1,
    mixtilinear2_exc: circle_mixtilinear_excircle_2,
    mixtilinear3_exc: circle_mixtilinear_excircle_3,
    mixtilinear_exc_apollonius_outer: circle_mixtilinear_excircle_apollonius_outer,
    neuberg1: circle_neuberg_1,
    neuberg2: circle_neuberg_2,
    neuberg3: circle_neuberg_3,
    neuberg1r: circle_neuberg_refl_1,
    neuberg2r: circle_neuberg_refl_2,
    neuberg3r: circle_neuberg_refl_3,
    moses: circle_moses,
    moses_radical: circle_moses_radical,
    spieker: circle_spieker,
    parry: circle_parry,
    polar: circle_polar,
    power1: circle_power_1,
    reflection: circle_reflection,
    schoutte: circle_schoutte,
    tangent1: circle_tangent_1,
    taylor: circle_taylor
};

const dict_circle_triples = {
    apollonius_isodyns: {
        fns: [circle_apollonius_isodyn_1, circle_apollonius_isodyn_2, circle_apollonius_isodyn_3],
        names: ["apollonius1", "apollonius2", "apollonius3"]
    },
    excircles: {
        fns: [circle_excircle_1, circle_excircle_2, circle_excircle_3],
        names: ["excircle1", "excircle2", "excircle3"]
    },
    lemoines: {
        fns: [circle_lemoine, circle_cosine, circle_ehrmann],
        names: ["lemoine", "cosine", "ehrmann"]
    },
    brocards: {
        fns: [circle_brocard, circle_brocard2, circle_moses],
        names: ["brocard", "brocard2", "moses"]
    },
    midarcs: {
        fns: [circle_midarc_1, circle_midarc_2, circle_midarc_3],
        names: ["midarc1", "midarc2", "midarc3"]
    },
    mixtilinears: {
        fns: [circle_mixtilinear_1, circle_mixtilinear_2, circle_mixtilinear_3],
        names: ["mixtilin1", "mixtilin2", "mixtilin3"]
    },
    mixtilinear_excs: {
        fns: [circle_mixtilinear_excircle_1, circle_mixtilinear_excircle_2, circle_mixtilinear_excircle_3],
        names: ["mixtil_exc1", "mixtil_exc2", "mixtil_exc3"]
    },
    johnsons: {
        fns: [circle_johnson_1, circle_johnson_2, circle_johnson_3],
        names: ["johnson1","johnson2","johnson3"]
    },
    neubergs: {
        fns: [circle_neuberg_1, circle_neuberg_2, circle_neuberg_3],
        names: ["neuberg1", "neuberg2", "neuberg3"]
    },
    neuberg_refls: {
        fns: [circle_neuberg_refl_1, circle_neuberg_refl_2, circle_neuberg_refl_3],
        names: ["neuberg1r", "neuberg2r", "neuberg3r"]
    },
    inc_cir_eul: {
        fns: [circle_incircle, circle_circum, circle_euler],
        names: ["incircle", "circum", "euler"]
    },
    poincs: { // poincaré arcs with respect to the circumcircle
        fns: [circle_poinc_1, circle_poinc_2, circle_poinc_3],
        names: ["poinc1","poinc2","poinc3"]
    },
    powers: {
        fns: [circle_power_1, circle_power_2, circle_power_3],
        names: ["power1","power2","power3"]
    },
    tangents: {
        fns: [circle_tangent_1, circle_tangent_2, circle_tangent_3],
        names: ["tangent1","tangent2","tangent"]
    },
    bitangs_ext: {
        fns: [circle_bitang_ext_1, circle_bitang_ext_2, circle_bitang_ext_3],
        names: ["btg-ext1","btg-ext2","btg-ext3"]
    },
    bitangs_int: {
        fns: [circle_bitang_int_1, circle_bitang_int_2, circle_bitang_int_3],
        names: ["btg-int1","btg-int2","btg-int3"]
    },
    bitangs_inc_ext: {
        fns: [circle_bitang_inc_ext_1, circle_bitang_inc_ext_2, circle_bitang_inc_ext_3],
        names: ["btg-ext1","btg-ext2","btg-ext3"]
    },
    bitangs_inc_int: {
        fns: [circle_bitang_inc_int_1, circle_bitang_inc_int_2, circle_bitang_inc_int_3],
        names: ["btg-int1","btg-int2","btg-int3"]
    }
};

const dict_caustic = {
    billiard: caustic_billiard,
    homothetic: caustic_homothetic,
    incircle: caustic_incircle,
    inellipse: caustic_inellipse,
    dual: caustic_dual,
    excentral: caustic_excentral,
    excentral_affine: caustic_excentral_affine,
    // non concentric
    poristic: caustic_bicentric,
    brocard: caustic_brocard,
    macbeath: caustic_macbeath,
    isoX1: caustic_isoX1,
    isoX2: caustic_isoX2,
    isoX4: caustic_isoX4,
    isoX7: caustic_isoX7
};

const dict_two_point = {
    env: get_two_point_envelope,
    env1x: get_v1_x_envelope,
    env2x: get_v2_x_envelope,
    env3x: get_v3_x_envelope,
    ort: get_two_point_orthopole
}

const dict_vtx_xn = {
    env1x: 0,
    env2x: 1,
    env3x: 2
};

function tri_fns_invert(circ, a, mounting) {
    if (dict_tri_fns_inv[circ].caustic && mounting in dict_caustic) {
        const [ac, bc] = dict_caustic[mounting](a);
        return dict_tri_fns_inv[circ].fn(ac, bc);
    } else
        return dict_tri_fns_inv[circ].fn(a);
}

const dict_orbit_fn = {
    billiard: orbit_normals,
    homothetic: orbit_homothetic,
    incircle: orbit_incircle,
    inellipse: orbit_inellipse,
    dual: orbit_dual,
    excentral: orbit_excentral,
    excentral_affine: orbit_excentral_affine,
    // non-concentric
    poristic: orbit_bicentric,
    brocard: orbit_brocard,
    macbeath: orbit_macbeath,
    isoX1: orbit_isoX1,
    isoX2: orbit_isoX2,
    isoX4: orbit_isoX4,
    isoX7: orbit_isoX7
};

function get_mounted_derived(a, tDeg, mounting, tri_type, cpn, pn, circ, inv) {
    const inv_fn = get_inv_fn(a, circ, inv, mounting);
    const [v2, v3] = getV2V3(a, mounting, 0.001);
    const ons = get_mounted_tri(a, tDeg, v2, v3);
    const ons_derived0 = get_derived_tri(a, ons.o, ons.s, tri_type, cpn, pn, mounting);
    const ons_derived = (inv == "tri" || inv == "crem_tri") ? invert_tri(ons_derived0, inv_fn) :
        inv == "polar" ? polar_tri(ons_derived0, inv_fn, circ, a, mounting) :
        inv == "polar_sides" ? polar_tri_sides(ons_derived0, inv_fn, circ, a, mounting) : ons_derived0;
    return { inv_fn: inv_fn, ons: ons, derived0: ons_derived0, derived: ons_derived };
}

function get_poncelet_derived(a, tDeg, orbit_fn, mounting, tri_type, cpn, pn, circ, inv) {
    const inv_fn = get_inv_fn(a, circ, inv, mounting);
    let ons = orbit_fn(a, tDeg);
    const ons_derived0 = get_derived_tri(a, ons.o, ons.s, tri_type, cpn, pn, mounting);
    const ons_derived = (inv == "tri" || inv == "crem_tri") ? invert_tri(ons_derived0, inv_fn) :
        inv == "polar" ? polar_tri(ons_derived0, inv_fn, circ, a, mounting) :
        inv=="polar_sides" ? polar_tri_sides(ons_derived0, inv_fn, circ, a, mounting)  : ons_derived0;
    return { inv_fn: inv_fn, ons: ons, derived0: ons_derived0, derived: ons_derived };
}

function draw_mounted_locus_branched(n, a, tDeg, rot, locus_branches, clr, locus_type, dr_tri,
    mounting, tri_type, cpn, pn, stroke_w, ell_detect, draw_label, circ, inv) {
    const inv_fn = get_inv_fn(a, circ, inv, mounting);
    const [v2, v3] = getV2V3(a, mounting, 0.001);
    const ons = get_mounted_tri(a, tDeg, v2, v3);
    const ons_derived0 = get_derived_tri(a, ons.o, ons.s, tri_type, cpn, pn, mounting);
    const ons_derived = (inv == "tri" || inv == "crem_tri") ? invert_tri(ons_derived0, inv_fn) :
        inv == "polar" ? polar_tri(ons_derived0, inv_fn, circ, a, mounting) :
        inv == "polar_sides" ? polar_tri_sides(ons_derived0, inv_fn, circ, a, mounting) :
        ons_derived0;

    if (dr_tri) {
        draw_mounted(ons, clr, stroke_w, false, true);
        if (tri_type != "reference" || cpn != "off") draw_mounted(ons_derived0, clr, stroke_w, false, true);
        if (cpn in dict_tri_pfns) {
            if (tri_type != "reference") draw_tri2(ons_derived0.o_deriv, clr, stroke_w / 2);
            if (["flank", "extouch_outer"].includes(cpn)) { // draw X on each vertex
                ons_derived.o.map(vtx0 => draw_text2_rot('X' + pn, vtx0, clr, .66 * stroke_w, -dict_rot[rot], true));
            } else { // ons_derived0 will have intermediate fields o_deriv, s_deriv
                const pn_deriv = get_Xn_low_bary(ons_derived0.o_deriv, ons_derived0.s_deriv, get_fn_bary(pn));
                draw_point2(pn_deriv, clr, stroke_w / 2);
                draw_text2_rot('X' + pn, pn_deriv, clr, .66 * stroke_w, -dict_rot[rot], true);
            }
        }

        if (circ != "off" && ["tri", "polar", "polar_sides", "crem_tri"].includes(inv))
            draw_mounted(ons_derived, clr, stroke_w, false, false);
    }

    if (locus_type != 'none') {
        const tri_fn = (a0, tDeg0) => get_mounted_derived(a0, tDeg0, mounting, tri_type, cpn, pn, circ, inv).derived;
        const env = locus_type in dict_caustic_n ? get_side_envelope(a, tDeg, tri_fn, dict_caustic_n[locus_type]) :
            (locus_type in dict_vtx_xn || n != pn) && (locus_type in dict_two_point) ? dict_two_point[locus_type](a, tDeg, tri_fn, get_fn_bary(n), get_fn_bary(pn)) :
                [0, 0];
        if (dr_tri && (locus_type in dict_two_point) && (locus_type in dict_vtx_xn || n != pn)) {
            const [p1, p2] = locus_type in dict_vtx_xn ?
                get_vtx_xn(a, tDeg, tri_fn, get_fn_bary(n), dict_vtx_xn[locus_type]) :
                get_two_points(a, tDeg, tri_fn, get_fn_bary(n), get_fn_bary(pn));
            draw_line_dashed2(...collinear_endpoints([p1, p2, env]), clr, stroke_w);
            draw_point2(p1, clr, stroke_w / 2);
            draw_text2_rot('X' + n, p1, clr, .66 * stroke_w, -dict_rot[rot], true);
            draw_point2(p2, clr, stroke_w / 2);
            draw_text2_rot(locus_type in dict_vtx_xn ? ('P' + (1 + dict_vtx_xn[locus_type])) : ('X' + pn), p2, clr, .66 * stroke_w, -dict_rot[rot], true);
        }
        draw_locus_branched(locus_branches, ons_derived, n, pn, clr, stroke_w,
            locus_type, ell_detect, rot, draw_label, (inv == "xn" || inv == "crem_xn") ? inv_fn : inv_fn_identity,
            ["", "tri", "polar", "polar_sides", "crem_tri"].includes(inv) || tri_type in dict_tri_fns_inv /*|| tri_type in dict_tri_fns_cremona*/, env);
    }
    // dr label on center of circle
    if (dr_tri) {
        var o = null;
        if (circ in dict_circles)
            // &&& was ons_derived
            o = inv=="ref"?
            dict_circles[circ](ons.o, ons.s) : 
            dict_circles[circ](ons_derived0.o, ons_derived0.s);
        else if (circ in dict_tri_fns_inv) {
            o = tri_fns_invert(circ, a, mounting); // dict_tri_fns_inv[circ].fn(a);
        }
        if (o) {
            const { ctr, R, n } = o;
            draw_circle_low(ctr, R, clr, stroke_w, true);
            draw_text2_rot(circ + (n > 0 ? '(X' + n + ')' : ''), ctr, clr, .66 * stroke_w, -dict_rot[rot], true);
        }
    }
    // circle triples
    if (dr_tri && circ in dict_circle_triples) {
        // &&& was ons_derived
        const os = dict_circle_triples[circ].fns.map(f => (inv=="ref"?f(ons.o, ons.s):f(ons_derived0.o, ons_derived0.s)));
        const names = dict_circle_triples[circ].names;
        os.map((o, i) => {
            draw_circle_low(o.ctr, o.R, clr, stroke_w, true);
            draw_text2_rot(names[i] + (o.n > 0 ? '(X' + o.n + ')' : ''), o.ctr, clr, .66 * stroke_w, -dict_rot[rot], true);
        });
    }
}

const dict_circ_caustic = {
    isoX1: porism_isoX1,
    isoX2: porism_isoX2,
    isoX4: porism_isoX4,
    isoX7: porism_isoX7
};

function draw_poncelet_locus_branched(n, a, tDeg, rot, orbit_fn, mounting, locus_branches, clr, locus_type,
    dr_tri, tri_type, cpn, pn,
    stroke_w, draw_caustic, ell_detect, draw_label, circ, inv, clr_caustic) {
    const inv_fn = get_inv_fn(a, circ, inv, mounting);
    let ons = orbit_fn(a, tDeg);
    const ons_derived0 = get_derived_tri(a, ons.o, ons.s, tri_type, cpn, pn, mounting);
    const ons_derived = (inv == "tri" || inv == "crem_tri") ? invert_tri(ons_derived0, inv_fn) :
        inv == "polar" ? polar_tri(ons_derived0, inv_fn, circ, a, mounting) :
        inv == "polar_sides" ? polar_tri_sides(ons_derived0, inv_fn, circ, a, mounting) : ons_derived0;

    if (dr_tri) {
        // draw caustic
        if (mounting in dict_caustic && draw_caustic) {
            if (mounting == "poristic") {
                const d = chapple_d(1, a + 1);
                push();
                translate(-d, 0);
                draw_boundary(1 + a, 1 + a, clr_caustic, stroke_w);
                pop();
            } else if (mounting == "brocard") {
                const bp = porism_brocard(a);
                push();
                translate(...bp.x3); // true center
                draw_boundary(bp.R, bp.R, clr_caustic, stroke_w);
                pop();
            } else if (mounting == "macbeath") {
                const bp = porism_macbeath(a);
                push();
                translate(...bp.x3); // true center
                draw_boundary(bp.R, bp.R, clr_caustic, stroke_w);
                pop();
            } else if (mounting in dict_circ_caustic) {
                const ip = dict_circ_caustic[mounting](a);
                push();
                translate(...ip.ctr);
                draw_boundary(ip.r, ip.r, clr_caustic, stroke_w);
                draw_point2([0,0], clr_caustic, stroke_w / 2);
                pop();
            } else {
                const caustic_axes = dict_caustic[mounting](a);
                draw_boundary(...caustic_axes, clr_caustic, stroke_w);
                if (mounting != "billiard") draw_foci(...caustic_axes, clr_caustic, stroke_w);
            }
        }

        draw_orbit(ons, clr, stroke_w, false, true, false);
        if (tri_type != "reference" || cpn != "off") draw_orbit(ons_derived0, clr, stroke_w, false, true, false);
        if (cpn in dict_tri_pfns) {
            if (tri_type != "reference") draw_tri2(ons_derived0.o_deriv, clr, stroke_w / 2);
            if (["flank", "extouch_outer"].includes(cpn)) { // draw X on each vertex
                ons_derived.o.map(vtx0 => draw_text2_rot('X' + pn, vtx0, clr, .66 * stroke_w, -dict_rot[rot], true));
            } else { // ons_derived0 will have intermediate fields o_deriv, s_deriv
                const pn_deriv = get_Xn_low_bary(ons_derived0.o_deriv, ons_derived0.s_deriv, get_fn_bary(pn));
                draw_point2(pn_deriv, clr, stroke_w / 2);
                draw_text2_rot('X' + pn, pn_deriv, clr, .66 * stroke_w, -dict_rot[rot], true);
            }
        }
        if (circ != "off" && ["tri", "polar", "polar_sides", "crem_tri"].includes(inv))
            draw_orbit(ons_derived, clr, stroke_w, false, false, false);
    }

    if (locus_type != 'none') {
        let env = [0, 0];
        if (mounting in dict_orbit_fn) {
            const tri_fn = (a0, tDeg0) => get_orbit_derived(a0, tDeg0, dict_orbit_fn[mounting], tri_type, cpn, pn, inv, inv_fn, mounting, circ);
            env = locus_type in dict_caustic_n ? get_side_envelope(a, tDeg, tri_fn, dict_caustic_n[locus_type]) :
                (locus_type in dict_vtx_xn || n != pn) && (locus_type in dict_two_point) ?
                    dict_two_point[locus_type](a, tDeg, tri_fn, get_fn_bary(n), get_fn_bary(pn)) :
                    [0, 0];
            if (dr_tri && (locus_type in dict_two_point) && (locus_type in dict_vtx_xn || n != pn)) {
                const [p1, p2] = locus_type in dict_vtx_xn ?
                    get_vtx_xn(a, tDeg, tri_fn, get_fn_bary(n), dict_vtx_xn[locus_type]) :
                    get_two_points(a, tDeg, tri_fn, get_fn_bary(n), get_fn_bary(pn));
                draw_line_dashed2(...collinear_endpoints([p1, p2, env]), clr, stroke_w);
                draw_point2(p1, clr, stroke_w / 2);
                draw_text2_rot('X' + n, p1, clr, .66 * stroke_w, -dict_rot[rot], true);
                draw_point2(p2, clr, stroke_w / 2);
                draw_text2_rot(locus_type in dict_vtx_xn ? ('P' + (1 + dict_vtx_xn[locus_type])) : ('X' + pn), p2, clr, .66 * stroke_w, -dict_rot[rot], true);
            }
        }
        draw_locus_branched(locus_branches, ons_derived, n, pn, clr, stroke_w,
            locus_type, ell_detect, rot, draw_label, (inv == "xn" || inv == "crem_xn") ? inv_fn : inv_fn_identity,
            ["tri", "polar", "polar_sides", "crem_tri"].includes(inv) || tri_type in dict_tri_fns_inv /*|| tri_type in dict_tri_fns_cremona*/, env);
    }

    if (dr_tri) {
        var o = null;
        if (circ in dict_circles)
            // &&& was derived
            o = inv=="ref"?
            dict_circles[circ](ons.o, ons.s) : 
            dict_circles[circ](ons_derived0.o, ons_derived0.s);
        else if (circ in dict_tri_fns_inv) {
            o = tri_fns_invert(circ, a, mounting); // dict_tri_fns_inv[circ].fn(a);
        }
        if (o) {
            const { ctr, R, n } = o;
            draw_circle_low(ctr, R, clr, stroke_w, true);
            draw_text2_rot(circ + (n > 0 ? '(X' + n + ')' : ''), ctr, clr, .66 * stroke_w, -dict_rot[rot], true);
        }
    }
    // circle triples
    if (dr_tri && circ in dict_circle_triples) {
        // &&& was ons_derived
        const os = dict_circle_triples[circ].fns.map(f => (inv=="ref"?f(ons.o, ons.s):f(ons_derived0.o, ons_derived0.s)));
        const names = dict_circle_triples[circ].names;
        os.map((o, i) => {
            draw_circle_low(o.ctr, o.R, clr, stroke_w, true);
            draw_text2_rot(names[i] + (o.n > 0 ? '(X' + o.n + ')' : ''), o.ctr, clr, .66 * stroke_w, -dict_rot[rot], true);
        });
    }
}

//function draw_billiard_or_mounted_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri, mounting, tri_type,
//    stroke_w, draw_caustic, ell_detect) 

function draw_billiard_or_mounted_branched(a, tDeg, rot, stroke_w, draw_caustic,
    clr, n, locus_branches, locus_type, dr_tri, mounting, tri_type, cpn, cpnSel, pn, ell_detect, draw_label,
    circ, inv, clr_caustic) {
    if (mounting in dict_orbit_fn)
        draw_poncelet_locus_branched(n, a, tDeg, rot, dict_orbit_fn[mounting],
            mounting, locus_branches, clr, locus_type, dr_tri, tri_type, cpn, pn, stroke_w,
            draw_caustic, ell_detect, draw_label, circ, inv, clr_caustic)
    else
        draw_mounted_locus_branched(n, a, tDeg, rot, locus_branches, clr,
            locus_type, dr_tri, mounting, tri_type, cpn, pn, stroke_w, ell_detect, draw_label, circ, inv);
}

function create_locus_branches(a, tDegStep, tDegMax, r_max, xn_fn) {
    const eps = 0.001;
    const d_max = 0.1;
    const d_min = 0.01;
    const tDegStepMin = 0.001;
    const tDegStepMax = 1.0;

    let locus_array = [];
    let locus_Xn = [];
    let xn_next;
    let xn;
    let tDeg = eps;
    // seek first finite xn
    do {
        xn = xn_fn(a, tDeg);
        tDeg += tDegStepMax;
    } while (tDeg < tDegMax && (vNaN(xn) || magn(xn) > r_max)); // interrupt loop if cannot find valid
    if (tDeg > tDegMax) {
        let kx = r_max * 0.05;
        locus_array = [[[-kx, -kx], [kx, kx]], [[-kx, kx], [kx, -kx]]];
    } else {
        locus_Xn = [xn];
        locus_array.push(locus_Xn);
        // repositions tDeg at the next location
        tDeg += tDegStep - tDegStepMax;
        while (tDeg < tDegMax) {
            xn_next = xn_fn(a, tDeg);
            // should I start a new branch?
            if (vNaN(xn_next) || magn(xn_next) > r_max) {
                // seek next finite xn_next
                do {
                    xn = xn_fn(a, tDeg);
                    tDeg += tDegStepMax;
                } while (tDeg < tDegMax && (vNaN(xn) || magn(xn) > r_max));
                // creates new branch
                if (tDeg < tDegMax) { // prevent infinite point from being added
                    locus_Xn = [xn];
                    locus_array.push(locus_Xn);
                    tDeg += tDegStep - tDegStepMax;
                }
            } else {
                if (tDegStep < tDegStepMax && edist(xn, xn_next) < d_min) {
                    tDegStep *= 2;
                    tDeg += tDegStep;
                } else if (tDegStep > tDegStepMin && edist(xn, xn_next) > d_max) {
                    tDegStep *= .5;
                    tDeg -= tDegStep;
                } else {
                    xn = xn_next;
                    locus_Xn.push(xn);
                    tDeg += tDegStep;
                }
            }
        }
    }
    return locus_array;
}

// controls how many cyclic permutations are made to vertices to compute *side* caustics
const dict_caustic_n = {
    caustic: 0,
    caustic12: 0,
    caustic23: 1,
    caustic31: 2
}

// why so many ellipses, lemma 4, tan t*
function billiard_tDegMax(a, b) {
    const a2 = a * a, b2 = b * b;
    const delta = Math.sqrt(a2 * a2 - a2 * b2 + b2 * b2);
    const tan_tstar = (b / a2) * Math.sqrt(2 * delta - a2 + 2 * b2);
    return 1 + toDeg(Math.PI - Math.atan(tan_tstar));
}

const inv_fn_identity = (tri, sides, p) => p;

// please document why this...
function get_inv_fn(a, circ, inv, mounting) {
    switch (inv) {
        case "off": return inv_fn_identity;
        case "crem_xn":
        case "crem_tri":
            return (circ in dict_circles) ?
                (tri, sides, p) => cremona_inversion(p, dict_circles[circ](tri, sides).ctr) :
                (circ in dict_tri_fns_inv) ? (tri, sides, p) => cremona_inversion(p, tri_fns_invert(circ, a, mounting).ctr) :
                    inv_fn_identity;
        default:
            return (circ in dict_circles) ? (tri, sides, p) => circle_inversion(p, dict_circles[circ](tri, sides)) :
                (circ in dict_tri_fns_inv) ? (tri, sides, p) => circle_inversion(p, tri_fns_invert(circ, a, mounting)) :
                    inv_fn_identity;
    }
}
// no asymptotes
// to do caustic needs to process locus_type=="caustic"
function make_locus_branched(a, tDegStep, r_max,
    // indexed
    n, mounting, locus_type, tri_type, cpn, cpnSel, pn, circ, inv) {
    const inv_fn = get_inv_fn(a, circ, inv, mounting);
    const bary_fn = get_fn_any(locus_type, n);
    let locus_array;
    if (mounting in dict_orbit_fn) { //poncelet
        const tDegMax =
            ["graves", "flank1", "flank2", "flank3", "ext_outer1", "ext_outer2", "ext_outer3"].includes(tri_type) ||
                ["vtx", "vtx2", "vtx3", "caustic", "caustic23", "caustic31",
                    "f_vtx", "ort", "env1x", "env2x", "env3x"].includes(locus_type) ||
                ["extouch_outer", "subcevian1",  "subanticev1","subpedal1","subantiped1"].includes(cpn) ||
                ["excircle"].includes(circ) ? 360 : (mounting == "billiard" ? billiard_tDegMax(a, 1) : 181);
        locus_array = create_locus_branches(a, tDegStep, tDegMax, r_max,
            (a0, tDeg0) =>
                get_Xn_poncelet(a0, tDeg0, dict_orbit_fn[mounting], bary_fn, tri_type, cpn, pn, inv, inv_fn,
                    locus_type, mounting, circ));
    } else {// non-poncelet
        const eps = 0.001;
        let [v2, v3] = getV2V3(a, mounting, eps);
        //let [v3, xn] = get_Xn_mounted(a, 0 + eps, v1, v2, bary_fn);
        locus_array = create_locus_branches(a, tDegStep, 360, r_max,
            (a0, tDeg0) => {
                let [v1, xn] = get_Xn_mounted(a0, tDeg0, v2, v3, bary_fn, tri_type, cpn, pn, inv, inv_fn, locus_type, mounting, circ);
                return xn;
            });
    }
    //console.log(locus_array.length, locus_array.map(l => l.length));
    return locus_array;
}

function get_xmin(ps) {
    xs = ps.map(p => p[0]);
    return Math.min(...xs);
}
function get_ymin(ps) {
    ys = ps.map(p => p[1]);
    return Math.min(...ys);
}

function get_xmax(ps) {
    xs = ps.map(p => p[0]);
    return Math.max(...xs);
}
function get_ymax(ps) {
    ys = ps.map(p => p[1]);
    return Math.max(...ys);
}

function get_locus_bbox(locus) {
    const xmin = get_xmin(locus);
    const xmax = get_xmax(locus);
    const ymin = get_ymin(locus);
    const ymax = get_ymax(locus);
    const dx = xmax - xmin;
    const dy = ymax - ymin;
    const area = dx * dy;
    return {
        xmin: xmin, xmax: xmax, xmid: (xmin + xmax) / 2, ymin: ymin, ymax: ymax, ymid: (ymin + ymax) / 2,
        dx: dx, dy: dy, area: area
    };
}

// rot90(x,y) => (-y,x)
// rot180(x,y) => (-x,-y)
// rot270(x,y) => (y,-x)

function get_locus_branched_bbox(a, locus_branched) {
    let xmins = locus_branched.map(br => get_xmin(br));
    let xmin = Math.min(...xmins);
    let xmaxs = locus_branched.map(br => get_xmax(br));
    let xmax = Math.max(...xmaxs);
    let ymins = locus_branched.map(br => get_ymin(br));
    let ymin = Math.min(...ymins);
    let ymaxs = locus_branched.map(br => get_ymax(br));
    let ymax = Math.max(...ymaxs);

    // ellipse always included
    if (xmin > -a) xmin = -a;
    if (xmax < a) xmax = a;
    if (ymin > -1) ymin = -1;
    if (ymax < 1) ymax = 1;

    let xmax2 = Math.max(Math.abs(xmin), Math.abs(xmax));
    let ymax2 = Math.max(Math.abs(ymin), Math.abs(ymax));

    return {
        xmin: xmin, xmax: xmax, xmax2: xmax2, ymin: ymin, ymax: ymax, ymax2: ymax2,
        dx: xmax - xmin, dy: ymax - ymin, ctr_x: (xmin + xmax) / 2, ctr_y: (ymin + ymax) / 2
    };
}

function locus_bbox(a, locus_type, locus_branched, ar, scale0, r_max) {
    var bbox;
    let scale = scale0;
    const adj = 1.1;
    if (locus_type != "none") {
        bbox = get_locus_branched_bbox(a, locus_branched);
        if (bbox.ymax2 < 1)
            bbox.ymax2 = 1;
        if (bbox.xmax2 < a)
            bbox.xmax2 = a;
        // max bbox
        if (bbox.ymax2 > r_max)
            bbox.ymax2 = r_max;
        if (bbox.ymax2 > r_max)
            bbox.xmax2 = r_max;
        var scale_min;
        if (bbox.ymax2 > bbox.xmax2) {
            scale = adj * 2 * bbox.ymax2 * ar;
            // width/(adj * 2 * bbox.ymax2 * width / height) =
            // = height/(2*adj*bbox.ymax2))
            // scale > 2*adj*bbox.xmax2;
            // bbox.xmax2 * width/scale < (width/2)/adj
            scale_min = 2 * adj * bbox.xmax2;
        } else { // bbox.xmax2
            //console.log("case 2","bbox.xmax2",bbox.xmax2,"a",a);
            scale = adj * 2 * bbox.xmax2;
            // bbox.ymax2 * width/scale < (height/2)/adj
            // scale > 2*adj*bbox.ymax2*width/height;
            scale_min = 2 * adj * bbox.ymax2 * ar;
        };
        //console.log("scale_min",scale_min,"scale",scale);
        if (scale < scale_min)
            scale = scale_min;
        if (scale < scale0)
            scale = scale0;
    }
    //console.log("bbox",bbox,"scale",scale);
    return (scale);
}

function locus_bbox_ctr(a, locus_type, locus_branched, ar, scale0) {
    if (locus_type == "none")
        return { scale: scale0, ctr_x: 0, ctr_y: 0 };
    else {
        const adj = 1.1;
        const bbox = get_locus_branched_bbox(a, locus_branched);
        let scale_min, scale;
        if (bbox.dy > bbox.dx) {
            scale = adj * bbox.dy * ar;
            scale_min = adj * bbox.dx;
        } else {
            scale = adj * bbox.dx;
            scale_min = adj * bbox.dy * ar;
        };
        if (scale < scale_min)
            scale = scale_min;
        if (scale < scale0)
            scale = scale0;
        return { scale: scale, ctr_x: bbox.ctr_x, ctr_y: bbox.ctr_y };
    }
}

function trunc_locus_xy(locus_branched, digs) {
    return locus_branched.map(b => b.map(p => trunc_xy(p, digs)));
}

function feat_cmp(a, b) {
    if (a.properties.parent < b.properties.parent) {
        return -1;
    }
    if (a.properties.parent > b.properties.parent) {
        return 1;
    }
    // a deve ser igual a b
    return 0;
}

function locus_noise(locus, noise) {
    return locus.map(p => vnoise(p, noise));
}

function locus_branched_noise(locus_branched, noise) {
    return locus_branched.map(l => locus_noise(l, noise));
}

function locus_subpolys(locus_branched, noise) {
    var poly = {
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": locus_branched
        }
    };
    var sp = bundle.simplepolygon(poly);
    return sp.features.sort(feat_cmp).map(f => f.geometry.coordinates[0]);
}

// subpolys = bundle.simplepolygon(poly)
//subpolys.features.map(f=>f.geometry.coordinates[0])