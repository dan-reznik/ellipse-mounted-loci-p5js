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
    const area = tri_area(sides);
    const s = 0.5*sum(sides);
    const r = area/s;
    return { ctr:x1, R:r };
}

function circle_brocard(tri,sides) {
    const x182 = get_Xn_cartesians(182, tri, sides);
    const x3 = get_Xn_cartesians(3, tri, sides);
    const R = edist(x3,x182);
    return { ctr:x182, R:R };
}
