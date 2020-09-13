function draw_mounted_locus_branched(n, a, tDeg, rot, locus_branches, clr, locus_type, dr_tri,
    mounting, tri_type, stroke_w, ell_detect) {
    const [v2, v3] = getV2V3(a, mounting, 0.001);
    const ons = get_mounted_tri(a, tDeg, v2, v3);
    const ons_derived = get_derived_tri(ons.o, ons.s, tri_type);
    if (dr_tri) {
        draw_mounted(ons, clr, stroke_w, false, true);
        if (tri_type != "reference") draw_mounted(ons_derived, clr, stroke_w, false, false);
    }
    if (locus_type != 'none')
        draw_locus_branched(locus_branches, ons_derived, n, clr, stroke_w, locus_type, ell_detect, rot);
    //draw_locus_only(locus, clr);
}

const dict_caustic = {
    billiard: caustic_billiard,
    homothetic: caustic_homothetic,
    incircle: caustic_incircle,
    inellipse: caustic_inellipse,
    dual: caustic_dual,
    poristic: caustic_poristic,
    brocard: caustic_brocard
};

function draw_poncelet_locus_branched(n, a, tDeg, rot, orbit_fn, mounting, locus_branches, clr, locus_type, dr_tri, tri_type,
    stroke_w, dr_caustic, ell_detect) {
    let ons = orbit_fn(a, tDeg);
    let ons_derived = get_derived_tri(ons.o, ons.s, tri_type);
    if (dr_tri) {
        if (mounting in dict_caustic && dr_caustic) {
            const clr_caustic = clr_invert_ui(clr_brown);
            if (mounting == "poristic") {
                const d = chapple_d(1, a + 1);
                push();
                translate(-d, 0);
                draw_boundary(1 + a, 1 + a, clr_caustic, stroke_w);
                pop();
            } else
            if (mounting == "brocard") {
                const bp = brocard_porism(a);
                push();
                translate(...bp.x3);
                draw_boundary(bp.R, bp.R, clr_caustic, stroke_w);
                pop();
            } else
                draw_boundary(...dict_caustic[mounting](a), clr_caustic, stroke_w);
        }
        draw_orbit(ons, clr, stroke_w, false, true, false);
        if (tri_type != "reference") draw_orbit(ons_derived, clr, stroke_w, false, false, false);
    }
    if (locus_type != 'none')
        draw_locus_branched(locus_branches, ons_derived, n, clr, stroke_w, locus_type, ell_detect, rot);
}

const dict_orbit_fn = {
    billiard: orbit_normals,
    homothetic: orbit_homothetic,
    incircle: orbit_incircle,
    inellipse: orbit_inellipse,
    dual: orbit_dual,
    poristic: orbit_poristic,
    brocard: orbit_brocard
};

//function draw_billiard_or_mounted_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri, mounting, tri_type,
//    stroke_w, draw_caustic, ell_detect) 
    
function draw_billiard_or_mounted_branched(a, tDeg, rot, stroke_w, draw_caustic, 
    clr, n, locus_branches, locus_type, dr_tri, mounting, tri_type, ell_detect)
{
    if (mounting in dict_orbit_fn)
        draw_poncelet_locus_branched(n, a, tDeg, rot, dict_orbit_fn[mounting],
            mounting, locus_branches, clr, locus_type, dr_tri, tri_type, stroke_w, draw_caustic, ell_detect)
    else
        draw_mounted_locus_branched(n, a, tDeg, rot, locus_branches, clr,
            locus_type, dr_tri, mounting, tri_type, stroke_w, ell_detect);
}

function create_locus_branches(a, tDegStep, tDegMax, r_max, bary_fn, xn_fn) {
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
        xn = xn_fn(a, tDeg, bary_fn);
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
            xn_next = xn_fn(a, tDeg, bary_fn);
            // should I start a new branch?
            if (vNaN(xn_next) || magn(xn_next) > r_max) {
                // seek next finite xn_next
                do {
                    xn = xn_fn(a, tDeg, bary_fn);
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

// why so many ellipses, lemma 4, tan t*
function billiard_tDegMax(a, b) {
    const a2 = a * a, b2 = b * b;
    const delta = Math.sqrt(a2 * a2 - a2 * b2 + b2 * b2);
    const tan_tstar = (b / a2) * Math.sqrt(2 * delta - a2 + 2 * b2);
    return 1 + toDeg(Math.PI - Math.atan(tan_tstar));
}

const dict_get_Xn = {
    billiard: get_Xn_orbit,
    homothetic: get_Xn_homothetic,
    incircle: get_Xn_incircle,
    inellipse: get_Xn_inellipse,
    dual: get_Xn_dual,
    poristic: get_Xn_poristic,
    brocard: get_Xn_brocard
};

// no asymptotes
function make_locus_branched(a, tDegStep, r_max,
    // indexed
    n, mounting, locus_type, tri_type) {
    let bary_fn = get_fn_any(locus_type, n);
    let locus_array;
    if (mounting in dict_get_Xn) {
        const tDegMax = ["vtx", "f_vtx"].includes(locus_type) ? 360 : (mounting == "billiard" ? billiard_tDegMax(a, 1) : 181);
        const xn_fn = dict_get_Xn[mounting];
        locus_array = create_locus_branches(a, tDegStep, tDegMax, r_max, bary_fn,
            (a0, tDeg0, bary_fn0) => xn_fn(a0, tDeg0, bary_fn0, tri_type));
    } else {// non-poncelet
        const eps = 0.001;
        let [v2, v3] = getV2V3(a, mounting, eps);
        //let [v3, xn] = get_Xn_mounted(a, 0 + eps, v1, v2, bary_fn);
        locus_array = create_locus_branches(a, tDegStep, 360, r_max, bary_fn,
            (a0, tDeg0, bary_fn0) => {
                let [v1, xn] = get_Xn_mounted(a0, tDeg0, v2, v3, bary_fn0, tri_type);
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
    return { xmin: xmin, xmax: xmax, xmid: (xmin+xmax)/2, ymin: ymin, ymax: ymax, ymid : (ymin+ymax)/2,
        dx : dx, dy : dy, area: area };
}

// rot90(x,y) => (-y,x)
// rot180(x,y) => (-x,-y)
// rot270(x,y) => (y,-x)

function get_locus_branched_bbox(a,locus_branched) {
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
        bbox = get_locus_branched_bbox(a,locus_branched);
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

function locus_bbox_ctr(a,locus_type, locus_branched, ar, scale0) {
    if (locus_type == "none")
        return { scale: scale0, ctr_x: 0, ctr_y: 0 };
    else {
        const adj = 1.1;
        const bbox = get_locus_branched_bbox(a,locus_branched);
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
    if (a.properties.parent<b.properties.parent) {
      return -1;
    }
    if (a.properties.parent>b.properties.parent) {
      return 1;
    }
    // a deve ser igual a b
    return 0;
  }

function locus_noise(locus,noise) {
    return locus.map(p=>vnoise(p,noise));
}

function locus_branched_noise(locus_branched,noise) {
    return locus_branched.map(l=>locus_noise(l, noise));
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
    return sp.features.sort(feat_cmp).map(f=>f.geometry.coordinates[0]);
}

// subpolys = bundle.simplepolygon(poly)
//subpolys.features.map(f=>f.geometry.coordinates[0])