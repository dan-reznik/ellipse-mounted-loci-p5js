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
    let test;
    test = concyclic_derived(tri, sides, 15, 16, "excentral");
    test = concyclic_derived(tri, sides, 13, 14, "excentral");
    test = concyclic_derived(tri, sides, 15, 16, "orthic");
    test = concyclic_derived(tri, sides, 13, 14, "brocard1");
    test = concyclic_derived(tri, sides, 13, 14, "brocard2");
    return 0;
}

function concyclicN(vs) {
    const x3 = get_circumcenter([vs[0],vs[1],vs[2]]);
    const R2 = edist2(vs[0],x3);
    let err2 = 0;
    for (let i = 3; i < vs.length; i++)
        err2 += Math.abs(edist2(vs[i],x3)-R2);
    return err2 < 10e-9;
}

// triples of concyclality

function concyclic_derived3(tri,sides,k1,k2,k3,derived_str) {
    const Xk1 = get_Xn_cartesians(k1,tri,sides);
    const Xk2 = get_Xn_cartesians(k2,tri,sides);
    const Xk3 = get_Xn_cartesians(k3,tri,sides);
    const ts = dict_tri_fns[derived_str](sides);
    const tri_der = generic_triangle(tri, sides, ts);
    const sides_der = tri_sides(tri_der);
    const Xk1_der = get_Xn_cartesians(k1,tri_der,sides_der);
    const Xk2_der = get_Xn_cartesians(k2,tri_der,sides_der);
    const Xk3_der = get_Xn_cartesians(k3,tri_der,sides_der);
    return concyclicN([Xk1,Xk2,Xk3,Xk1_der,Xk2_der,Xk3_der]);
}

const concyclic_derived_all3 = (tri,sides,k1,k2,k3) => Object.keys(dict_tri_fns).map(
    tri_str=> { return {tri:tri_str,k1:k1,k2:k2,k3:k3,cc:concyclic_derived3(tri, sides, k1, k2, k3, tri_str)}; })
    .filter(r=>r.cc);

function concyclic_derived_triples(Xks) {
    const tri = [ [.2, .3], [.4,-.1], [-.1,.8] ];
    const sides = tri_sides(tri);
    const triples = cartesian_triples(Xks);
    const results = triples.map(p=>concyclic_derived_all3(tri,sides,p[0],p[1],p[2]))
    .flat(1)
    .sort((a,b) => (a.tri > b.tri) ? 1 : ((b.tri > a.tri) ? -1 : 0));
    return results;
}

// quadruples of concyclality
function concyclic_derived4(tri,sides,k1,k2,k3,k4,derived_str) {
    const Xk1 = get_Xn_cartesians(k1,tri,sides);
    const Xk2 = get_Xn_cartesians(k2,tri,sides);
    const Xk3 = get_Xn_cartesians(k3,tri,sides);
    const Xk4 = get_Xn_cartesians(k4,tri,sides);
    const ts = dict_tri_fns[derived_str](sides);
    const tri_der = generic_triangle(tri, sides, ts);
    const sides_der = tri_sides(tri_der);
    const Xk1_der = get_Xn_cartesians(k1,tri_der,sides_der);
    const Xk2_der = get_Xn_cartesians(k2,tri_der,sides_der);
    const Xk3_der = get_Xn_cartesians(k3,tri_der,sides_der);
    const Xk4_der = get_Xn_cartesians(k4,tri_der,sides_der);
    return concyclicN([Xk1,Xk2,Xk3,Xk4,Xk1_der,Xk2_der,Xk3_der,Xk4_der]);
}

const concyclic_derived_all4 = (tri,sides,k1,k2,k3,k4) => Object.keys(dict_tri_fns).map(
    tri_str=> { return {tri:tri_str,k1:k1,k2:k2,k3:k3,k4:k4,cc:concyclic_derived4(tri, sides, k1, k2, k3, k4, tri_str)}; })
    .filter(r=>r.cc);

function concyclic_derived_quads(Xks) {
    const tri = [ [.2, .3], [.4,-.1], [-.1,.8] ];
    const sides = tri_sides(tri);
    const quads = cartesian_quads(Xks);
    const results = quads.map(p=>concyclic_derived_all4(tri,sides,p[0],p[1],p[2],p[3]))
    .flat(1)
    .sort((a,b) => (a.tri > b.tri) ? 1 : ((b.tri > a.tri) ? -1 : 0));
    return results;
}

// MAIN CALLs

//concyclic_derived_pairs_csv(int_seq(1,40))
const concyclic_derived_pairs_csv = (Xks) => console.log("derived,k1,k2\n"+concyclic_derived_pairs(Xks)
.map(e => e.tri+","+e.k1+","+e.k2)
.join("\n"));

//concyclic_derived_triples_csv(int_seq(1,40))
const concyclic_derived_triples_csv = (Xks) => console.log("derived,k1,k2,k3\n"+concyclic_derived_triples(Xks)
.map(e => e.tri+","+e.k1+","+e.k2+","+e.k3)
.join("\n"));

//concyclic_derived_quads_csv(int_seq(1,40))
const concyclic_derived_quads_csv = (Xks) => console.log("derived,k1,k2,k3,k4\n"+concyclic_derived_quads(Xks)
.map(e => e.tri+","+e.k1+","+e.k2+","+e.k3+","+e.k4)
.join("\n"));