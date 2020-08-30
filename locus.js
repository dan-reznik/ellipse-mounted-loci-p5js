 function draw_mounted_locus_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri,
    mounting, tri_type, stroke_w, ell_detect) {
    let [v1, v2] = getV1V2(a, mounting, 0.001);
    let ons = get_mounted_tri(a, tDeg, v1, v2);
    let ons_derived = get_derived_tri(ons.o,ons.s,tri_type);
    if (dr_tri) {
       draw_mounted(ons, clr, false, true);
       if (tri_type!="reference") draw_mounted(ons_derived, clr, false, false);
    }
    if (locus_type != 'none')
       draw_locus_branched(locus_branches, ons_derived, n, clr, stroke_w, locus_type, ell_detect);
       //draw_locus_only(locus, clr);
 }
 
 const dict_caustic = {
    billiard:caustic_billiard,
    homothetic:caustic_homothetic,
    incircle:caustic_incircle,
    inellipse:caustic_inellipse,
    dual:caustic_dual,
    poristic:caustic_poristic
};

 function draw_poncelet_locus_branched(n, a, tDeg, orbit_fn, mounting, locus_branches, clr, locus_type, dr_tri, tri_type,
    stroke_w, dr_caustic, ell_detect) {
    let ons = orbit_fn(a, tDeg);
    let ons_derived = get_derived_tri(ons.o,ons.s,tri_type);
    if (dr_tri) {
        if(mounting in dict_caustic && dr_caustic) {
            const clr_caustic = clr_invert_ui(clr_brown);
            if (mounting=="poristic") {
                const d = chapple_d(1,a+1);
                push();
                translate(-d,0);
                draw_boundary(1+a,1+a,clr_caustic);
                pop();
            } else
            draw_boundary(...dict_caustic[mounting](a),clr_caustic);
        }
       draw_orbit(ons, clr, false, true,false);
       if (tri_type!="reference") draw_orbit(ons_derived, clr, false, false, false);
    }
    if (locus_type != 'none')
       draw_locus_branched(locus_branches, ons_derived, n, clr, stroke_w, locus_type, ell_detect);
 }

 const dict_orbit_fn = {
    billiard:orbit_normals,
    homothetic:orbit_homothetic,
    incircle:orbit_incircle,
    inellipse:orbit_inellipse,
    dual:orbit_dual,
    poristic:orbit_poristic
};
 
function draw_billiard_or_mounted_branched(n, a, tDeg, locus_branches, clr, locus_type, dr_tri, mounting, tri_type,
    stroke_w, draw_caustic, ell_detect) {
        if (mounting in dict_orbit_fn)
            draw_poncelet_locus_branched(n, a, tDeg, dict_orbit_fn[mounting],
            mounting, locus_branches, clr, locus_type, dr_tri, tri_type, stroke_w, draw_caustic, ell_detect)
    else
            draw_mounted_locus_branched(n, a, tDeg, locus_branches, clr,
                locus_type, dr_tri, mounting, tri_type, stroke_w, ell_detect);
}

function create_locus_branches(a,tDegStep,tDegMax,bary_fn,xn_fn) {
    const eps = 0.001;
    const d_max = 0.1;
    const d_min = 0.01;
    const tDegStepMin = 0.001;
    const tDegStepMax = 1.0;
    const r_max = 10.0;

    let locus_array = [];
    let locus_Xn = [];
    let xn_next;
    let xn;
    let tDeg = eps;
      // seek first finite xn
    do {
        xn = xn_fn(a, tDeg, bary_fn);
        tDeg += tDegStepMax;
    } while (tDeg<tDegMax && (vNaN(xn) || magn(xn) > r_max)); // interrupt loop if cannot find valid
    if (tDeg > tDegMax) {
        let kx = r_max * 0.05;
        locus_array = [[[-kx, -kx],[kx,kx]],[[-kx,kx],[kx,-kx]]];
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
                } while (tDeg<tDegMax && (vNaN(xn) || magn(xn) > r_max));
                // creates new branch
                if (tDeg<tDegMax) { // prevent infinite point from being added
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
function billiard_tDegMax(a,b) {
    const a2 = a*a, b2 = b*b;
    const delta = Math.sqrt(a2*a2 - a2*b2 + b2*b2);
    const tan_tstar = (b/a2)*Math.sqrt(2*delta - a2 + 2*b2);
    return 1+toDeg(Math.PI-Math.atan(tan_tstar));
}

const dict_get_Xn = {
    billiard:get_Xn_orbit,
    homothetic:get_Xn_homothetic,
    incircle:get_Xn_incircle,
    inellipse:get_Xn_inellipse,
    dual:get_Xn_dual,
    poristic:get_Xn_poristic
};

 // no asymptotes
function make_locus_branched(a, n, tDegStep, mounting, locus_type, tri_type) {
    let bary_fn = get_fn_any(locus_type, n);
    let locus_array;
    if(mounting in dict_get_Xn) {
        const tDegMax = mounting=="billiard"?billiard_tDegMax(a,1):181;
        const xn_fn = dict_get_Xn[mounting];
        locus_array = create_locus_branches(a, tDegStep, tDegMax, bary_fn,
        (a0, tDeg0, bary_fn0) => xn_fn(a0, tDeg0, bary_fn0, tri_type));
    } else {// non-billiard
            const eps = 0.001;
            let [v1, v2] = getV1V2(a, mounting, eps);
            //let [v3, xn] = get_Xn_mounted(a, 0 + eps, v1, v2, bary_fn);
            locus_array = create_locus_branches(a, tDegStep, 360, bary_fn,
                (a0, tDeg0, bary_fn0) => { 
                    let [v3, xn] = get_Xn_mounted(a0, tDeg0, v1, v2, bary_fn0, tri_type);
                    return xn;
                });
    }
    //console.log(locus_array.length, locus_array.map(l => l.length));
    return locus_array;
}

function get_xmin(ps) {
    xs = ps.map(p=>p[0]);
    return Math.min(...xs);
 }
 function get_ymin(ps) {
    ys = ps.map(p=>p[1]);
    return Math.min(...ys);
 }
 
 function get_xmax(ps) {
    xs = ps.map(p=>p[0]);
    return Math.max(...xs);
 }
 function get_ymax(ps) {
    ys = ps.map(p=>p[1]);
    return Math.max(...ys);
 }

 function get_locus_bbox(locus) {
    const xmin = get_xmin(locus);
    const xmax = get_xmax(locus);
    const ymin = get_ymin(locus);
    const ymax = get_ymax(locus);
    const area = (xmax-xmin)*(ymax-ymin);    
    return {xmin:xmin,xmax:xmax,ymin:ymin,ymax:ymax,area:area};
 }
 
 function get_locus_branched_bbox(locus_branched) {
    let xmins = locus_branched.map(br => get_xmin(br));
    let xmin = Math.min(...xmins);
    let xmaxs = locus_branched.map(br => get_xmax(br));
    let xmax = Math.max(...xmaxs);
    let ymins = locus_branched.map(br => get_ymin(br));
    let ymin = Math.min(...ymins);
    let ymaxs = locus_branched.map(br => get_ymax(br));
    let ymax = Math.max(...ymaxs);
 
    let xmax2 = Math.max(Math.abs(xmin),Math.abs(xmax));
    let ymax2 = Math.max(Math.abs(ymin),Math.abs(ymax));
 
    return {xmin:xmin,xmax:xmax,xmax2:xmax2,ymin:ymin,ymax:ymax,ymax2:ymax2};
 }

 function locus_bbox(a, locus_type, locus_branched, ar, scale0) {
    var bbox, scale=scale0;
    const adj = 1.1;
    const r_max = 10;
    if (locus_type != "none") {
       bbox = get_locus_branched_bbox(locus_branched);
       do_it = true
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
          // g_width/(adj * 2 * bbox.ymax2 * g_width / g_height) =
          // = g_height/(2*adj*bbox.ymax2))
          // g_scale > 2*adj*bbox.xmax2;
          // bbox.xmax2 * g_width/g_scale < (g_width/2)/adj
          scale_min = 2 * adj * bbox.xmax2;
       } else { // bbox.xmax2
          //console.log("case 2","bbox.xmax2",bbox.xmax2,"a",a);
          scale = adj * 2 * bbox.xmax2;
          // bbox.ymax2 * g_width/g_scale < (g_height/2)/adj
          // g_scale > 2*adj*bbox.ymax2*g_width/g_height;
          scale_min = 2 * adj * bbox.ymax2 * ar;
       };
       //console.log("scale_min",scale_min,"g_scale",g_scale);
       if (scale < scale_min)
          scale = scale_min;
       if (scale < scale0)
          scale = scale0;
    }
    //console.log("bbox",bbox,"scale",scale);
    return(scale);
 }

function trunc_locus_xy(locus_branched,digs) {
   return locus_branched.map(b => b.map(p => trunc_xy(p,digs)));
}