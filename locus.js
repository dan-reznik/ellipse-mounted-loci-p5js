/* function draw_mounted_locus(n, a, tDeg, locus, clr, locus_type, dr_tri,
    mounting) {
    let [v1, v2] = getV1V2(a, mounting, 0.001);
    let ons = get_mounted_tri(a, tDeg, v1, v2);
    if (dr_tri)
       draw_mounted(ons, clr, false, true);
    if (locus_type != 'none')
       draw_locus(locus, ons, n, clr, 0.01, locus_type);
       //draw_locus_only(locus, clr);
 } */

 function draw_mounted_locus_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri,
    mounting, tri_type) {
    let [v1, v2] = getV1V2(a, mounting, 0.001);
    let ons = get_mounted_tri(a, tDeg, v1, v2);
    let ons_derived = get_derived_tri(ons.o,ons.s,tri_type);
    if (dr_tri) {
       draw_mounted(ons, clr, false, true);
       if (tri_type!="reference") draw_mounted(ons_derived, clr, false, false);
    }
    if (locus_type != 'none')
       draw_locus_branched(locus_branches, ons_derived, n, clr, 0.01, locus_type);
       //draw_locus_only(locus, clr);
 }
 
 
 /* function draw_billiard_locus(n, a, tDeg, locus, clr, locus_type, dr_tri) {
    let ons = orbit_normals(a, tDeg);
    if (dr_tri)
       draw_orbit(ons, clr, false, true);
    if (locus_type != 'none')
       draw_locus(locus, ons, n, clr, 0.01, locus_type);
 } */
 
 function draw_billiard_locus_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri, tri_type) {
    let ons = orbit_normals(a, tDeg);
    let ons_derived = get_derived_tri(ons.o,ons.s,tri_type);
    if (dr_tri) {
       draw_orbit(ons, clr, false, true);
       if (tri_type!="reference") draw_orbit(ons_derived, clr, false, false, false);
    }
    if (locus_type != 'none')
       draw_locus_branched(locus_branches, ons_derived, n, clr, 0.01, locus_type);
 }
 
  function draw_homothetic_locus_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri, tri_type) {
    let ons = orbit_homothetic(a, tDeg);
    let ons_derived = get_derived_tri(ons.o,ons.s,tri_type);
    if (dr_tri) {
       draw_orbit(ons, clr, false, true,false);
       if (tri_type!="reference") draw_orbit(ons_derived, clr, false, false, false);
    }
    if (locus_type != 'none')
       draw_locus_branched(locus_branches, ons_derived, n, clr, 0.01, locus_type);
 }

/*  function draw_billiard_or_mounted(n, a, tDeg, locus, clr, locus_type, dr_tri, mounting) {
    if (mounting == "billiard") {
       draw_billiard_locus(n, a, tDeg, locus, clr, locus_type, dr_tri);
    } else  {
       draw_mounted_locus(n, a, tDeg, locus, clr, locus_type, dr_tri, mounting);
    }
 } */
 
function draw_billiard_or_mounted_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri, mounting, tri_type) {
    switch (mounting) {
        case "billiard":
            draw_billiard_locus_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri, tri_type);
            break;
        case "homothetic":
            draw_homothetic_locus_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri, tri_type);
            break;
        default:
            draw_mounted_locus_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri, mounting, tri_type);
    }
}

function create_locus_branches(a,tDegStep,tDegMax,trilin_fn,xn_fn) {
    const eps = 0.001;
    const d_max = 0.1;
    const d_min = 0.01;
    const tDegStepMin = 0.005;
    const tDegStepMax = 1.0;
    const r_max = 10.0;

    let locus_array = [];
    let locus_Xn = [];
    let xn_next;
    let xn;
    let tDeg = eps;
      // seek first finite xn
    do {
        xn = xn_fn(a, tDeg, trilin_fn);
        tDeg += tDegStepMax;
    } while (tDeg<tDegMax && magn(xn) > r_max); // interrupt loop if cannot find valid
    if (tDeg > tDegMax) {
        locus_Xn = [[0, 0]];
        locus_array.push(loxus_Xn);
    } else {
        locus_Xn = [xn];
        locus_array.push(locus_Xn);
        // repositions tDeg at the next location
        tDeg += tDegStep - tDegStepMax;
        while (tDeg < tDegMax) {
            xn_next = xn_fn(a, tDeg, trilin_fn);
            // should I start a new branch?
            if (magn(xn_next) > r_max) {
                // seek next finite xn_next
                do {
                    xn = xn_fn(a, tDeg, trilin_fn);
                    tDeg += tDegStepMax;
                } while (tDeg<tDegMax && magn(xn) > r_max);
                // creates new branch
                locus_Xn = [xn];
                locus_array.push(locus_Xn);
                tDeg += tDegStep - tDegStepMax;
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
 // no asymptotes
function make_locus_branched(a, n, tDegStep, mounting, locus_type, tri_type) {
    let trilin_fn = get_fn_any(locus_type, n);
    let locus_array;
    switch (mounting) {
        case "billiard":
            locus_array = create_locus_branches(a, tDegStep, 180, trilin_fn,
                (a0, tDeg0, trilin_fn0) => get_Xn_orbit(a0, tDeg0, trilin_fn0, tri_type));
            break;
        // &&& WORK HERE
        case "homothetic":
            locus_array = create_locus_branches(a, tDegStep, 180, trilin_fn,
                (a0, tDeg0, trilin_fn0) => get_Xn_homothetic(a0, tDeg0, trilin_fn0, tri_type));
            break;

        default: // non-billiard
            const eps = 0.001;
            let [v1, v2] = getV1V2(a, mounting, eps);
            //let [v3, xn] = get_Xn_mounted(a, 0 + eps, v1, v2, trilin_fn);
            locus_array = create_locus_branches(a, tDegStep, 360, trilin_fn,
                (a0, tDeg0, trilin_fn0) => { let [v3, xn] = get_Xn_mounted(a0, tDeg0, v1, v2, trilin_fn0, tri_type); return xn; });
    }
    //console.log(locus_array.length, locus_array.map(l => l.length));
    return locus_array;
}