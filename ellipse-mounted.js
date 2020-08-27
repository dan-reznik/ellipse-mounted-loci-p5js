function getV1V2(a, mounting, eps) {
    c = Math.sqrt(a * a - 1);
    f1 = [-c, 0];
    f2 = [c, 0];
    const dict = {
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
    return mounting in dict ? dict[mounting] : [[-a, 1], [a, -1]];
    /*  
     switch (mounting) {
         case "fs": return [f1, f2];
         case "fsCtr": return [f2, [eps, eps]];
         case "fsLeft": return [f1, [a, 0]];
         case "fsRight": return [f2, [a, 0]];
         case "fsTop": return [f2, [0, -1]];
         case "major": return [[-a, 0], [a, 0]];
         case "minor": return [[0, 1], [0, -1]];
         case "mixed": return [[a, 0], [0, -1]];
         case "ctrMajor": return [[eps, 0], [a, 0]];
         case "ctrMinor": return [[eps, 0], [0, -1]];
         case "cornerTL_BL": return [[-a, -1], [-a, 1]];
         case "cornerTL_TR": return [[-a, -1], [a, -1]];
         case "cornerTL_vtxL": return [[-a, -1], [-a, 0]];
         case "cornerTL_vtxT": return [[-a, -1], [0, -1]];
         case "cornerTL_vtxB": return [[-a, -1], [0, 1]];
         case "cornerTL_ctr": return [[-a, -1], [eps, eps]];
         case "cornerTL_BR": return [[-a, -1], [a, 1]];
         default: return [[-a, 1], [a, -1]];
     } */
}

function get_Xn_mounted(a, tDeg, v1, v2, bary_fn, tri_type) {
    let t = toRad(tDeg);
    let v3 = [a * Math.cos(t), Math.sin(t)];
    let tri = [v1, v2, v3];
    let sides = tri_sides(tri);
    let ons_derived = get_derived_tri(tri, sides, tri_type);
    let xn = get_Xn_low_bary(ons_derived.o, ons_derived.s, bary_fn);
    return [v3, xn];
}