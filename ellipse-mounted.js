function getV1V2(a, mounting, eps) {
    c = Math.sqrt(a * a - 1);
    f1 = [-c, 0];
    f2 = [c, 0];
    switch (mounting) {
        case "fs": return [f1, f2];
        case "fsCtr": return [f2, [eps, eps]];
        case "fsLeft": return [f1, [a, 0]];
        case "fsRight": return [fs2, [a, 0]];
        case "fsTop": return [fs2, [0, -1]];
        case "major": return [[-a, 0], [a, 0]];
        case "minor": return [[0, 1], [0, -1]];
        case "mixed": return [[a, 0], [0, -1]];
        case "ctrMajor": return [[eps, 0], [a, 0]];
        case "ctrMinor": return [[eps, 0], [0, -1]];
        case "cornerTL_BL": return [[-a, -1], [-a, 1]];
        case "cornerTL_TR": return [[-a, -1], [a, -1]];
        case "cornerTL_vtxL": [[a, -1], [-a, 0]];
        case "cornerTL_vtxT": [[-a, -1], [0, -1]];
        case "cornerTL_vtxB": [[-a, -1], [0, 1]];
        case "cornerTL_ctr": [[-a, -1], [eps, eps]];
        case "cornerTL_BR": [[-a, -1], [a, 1]];
        default: return [[-a, 1], [a, -1]];
    }
}

//getCtrOrBrocard[tri_, sides_, Xn_] :=
//  Switch[Xn,
//  -1, getFirstBrocardTrilin[tri, sides],
//   -2, getSecondBrocardTrilin[tri, sides],
//   _, getNewCenters[tri, sides, {Xn}][[1, 3]]];

function get_Xn_mounted(a, tDeg, v1, v2, trilin_fn) {
    let t = toRad(tDeg);
    let v3 = [a*Math.cos(t),Math.sin(t)];
    let tri = [v1,v2,v3];
    let xn = get_Xn_low(tri, tri_sides(tri), trilin_fn);
    return [v3,xn];
}