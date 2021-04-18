//FullSimplify[
// Det[concyclic4row /@ {{x1, y1}, {x2, y2}, {x3, y3}, {x4, y4}}] == 0]
// 
// https://math.stackexchange.com/questions/1252944/technique-for-proving-four-given-points-to-be-concyclic
function concyclic4([x1, y1], [x2, y2], [x3, y3], [x4, y4]) {
    const x1s = x1 * x1, x2s = x2 * x2, x3s = x3 * x3, x4s = x4 * x4, y4s = y4 * y4;
    const det = x3s * (x4 * (y1 - y2) + x1 * (y2 - y4)) + x3 * (x4s * (-y1 + y2) - (x1s + (y1 - y2) * (y1 - y4)) * (y2 - y4)) +
        x2s * (-(x4 * y1) - x1 * y3 + x4 * y3 + x3 * (y1 - y4) + x1 * y4) +
        x2 * (x1s * (y3 - y4) + x3s * (-y1 + y4) + (y1 - y3) * (x4s + y1 * y3 - (y1 + y3) * y4 + y4s)) +
        (y2 - y3) * (x1s * x4 + x4 * (y1 - y2) * (y1 - y3) - x1 * (x4s + y2 * y3 - (y2 + y3) * y4 + y4s));
    return Math.abs(det) < 10e-9;
}

function concyclic_derived(tri,sides,k1,k2,derived_str) {
    // const keys = Object.keys(dict_tri_fns);
    const Xk1 = get_Xn_cartesians(k1,tri,sides);
    const Xk2 = get_Xn_cartesians(k2,tri,sides);
    const ts = dict_tri_fns[derived_str](sides);
    const tri_der = generic_triangle(tri, sides, ts);
    const sides_der = tri_sides(tri_der);
    const Xk1_der = get_Xn_cartesians(k1,tri_der,sides_der);
    const Xk2_der = get_Xn_cartesians(k2,tri_der,sides_der);
    return concyclic4(Xk1,Xk2,Xk1_der,Xk2_der);
}

// Object.keys(dict_tri_fns)
const concyclic_derived_all = (tri,sides,k1,k2) => Object.keys(dict_tri_fns).map(
    tri_str=> { return {tri:tri_str,k1:k1,k2:k2,cc:concyclic_derived(tri, sides, k1, k2, tri_str)}; })
    .filter(r=>r.cc);

function concyclic_derived_pairs(Xks) {
    const tri = [ [.2, .3], [.4,-.1], [-.1,.8] ];
    const sides = tri_sides(tri);
    const pairs = cartesian_prod(Xks);
    const results = pairs.map(p=>concyclic_derived_all(tri,sides,p[0],p[1]))
    .flat(1)
    .sort((a,b) => (a.tri > b.tri) ? 1 : ((b.tri > a.tri) ? -1 : 0));
    return results;
}

function test_concyclic_known() {
    const tri = [ [.2, .3], [.4,-.1], [-.1,.8]];
    const sides = tri_sides(tri);
    const cd_exc = concyclic_derived(tri, sides, 15, 16, "excentral");
    const cd_exc2 = concyclic_derived(tri, sides, 13, 14, "excentral");
    const cd_ort = concyclic_derived(tri, sides, 15, 16, "orthic");
    const cd_broc1 = concyclic_derived(tri, sides, 13, 14, "brocard1");
    const cd_broc2 = concyclic_derived(tri, sides, 13, 14, "brocard2");
    return 0;
}

// MAIN CALL
const concyclic_derived_pairs_csv = (Xks) => console.log("derived,k1,k2\n"+concyclic_derived_pairs(Xks)
.map(e => e.tri+","+e.k1+","+e.k2)
.join("\n"));



