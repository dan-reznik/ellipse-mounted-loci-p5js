
function least_squares_conic(ps) {
    const mtx = ps.map(p => { const [x, y] = p; return [x * x, x * y, y * y, x, y]; });
    const rhs = Array(ps.length).fill(-1);
    const cs = solve(mtx, rhs); // linalg.js
    const errs = ps.map(p => {
        const [x, y] = p; return cs[0] * x * x +
            cs[1] * x * y + cs[2] * y * y +
            cs[3] * x + cs[4] * y + 1;
    });
    const err2 = sum_sqr(errs);
    const delta = cs[0] * cs[2] - cs[1] * cs[1] / 4;
    const S = (-cs[1] * cs[1] + 4 * cs[0] * cs[2] - cs[2] * cs[3] * cs[3] +
        cs[1] * cs[3] * cs[4] - cs[0] * cs[4] * cs[4]) / 4.0;
    // g^2 - (cs[0]+cs[2]) g + (cs[0]*cs[2]-cs[1]*cs[1]/4) = 0
    const [ga, gb, gc] = [1, -cs[0] - cs[2], cs[0] * cs[2] - cs[1] * cs[1] / 4];
    [g1, g2] = quadRoots(ga, gb, gc);
    //console.log({ ga: ga, gb: gb, gc: gc, g1: g1, g2: g2, delta: delta });
    const ax1 = Math.sqrt(Math.abs(S / (g1 * delta)));
    const ax2 = Math.sqrt(Math.abs(S / (g2 * delta)));
    const major = ax1 >= ax2 ? ax1 : ax2;
    const minor = ax1 >= ax2 ? ax2 : ax1;

    const ctr = vscale([2 * cs[2] * cs[3] - cs[1] * cs[4],
    2 * cs[0] * cs[4] - cs[1] * cs[3]], 1 / (-4 * delta));

    const is_conic = negl(err2);
    let conic_type = "X";
    if (is_conic) {
        if (negl(delta)) conic_type = "P";
        else if (delta > 0) conic_type = negl2(major - minor) ? "C" : "E";
        else conic_type = "H";
    }

    return {
        is_conic: is_conic,
        conic_type: conic_type,
        a: major, b: minor, ar: safe_div(a,b),
        cs: cs, err2: err2, ctr: ctr
    };
}

/*
function least_squares_centered_ellipse(ps) {
    // mtx: N x 2
    const mtx = ps.map(p => { const [x, y] = p; return [x * x, y * y]; });
    // rhs: N x 1
    const rhs = Array(ps.length).fill(-1);
    // cs: 2 x 1
    const cs = solve(mtx, rhs);
    // Norm[mtx.cs-b]
    const norms = mtx.map((line, i) => dot(line, cs) - rhs[i]);
    const err = sum_sqr(norms);
    const [a, b] = cs.map(c => Math.sqrt(Math.abs(1 / c)));
    return { is_ell: negl(err), a: a, b: b, is_circ: negl(a - b) };
}
*/

function sample_ellipse(a, b, n) {
    // doesn't exist! Math.seed(0)
    let samples = [];
    let t;
    for (let i = 0; i < n; i++) {
        t = Math.random() * 2 * PI;
        samples.push([a * Math.cos(t), b * Math.sin(t)]);
    }
    return samples;
}

// fisher-yates shuffle
// stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
function sample_array(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

function sample_locus(locus, n) {
    // doesn't exist! Math.seed(0)
    let samples = [];
    let k;
    for (let i = 0; i < n; i++) {
        k = Math.floor(Math.random() * locus.length);
        samples.push(locus[k]);
    }
    return samples;
}

function longest_branch(locus_branched) {
    l_max = 0;
    i_max = 0;
    for (let i = 0; i<locus_branched.length;i++)
       if(locus_branched[i].length>l_max) {
           l_max = locus_branched[i].length;
           i_max = i;
       }
    return(locus_branched[i_max]);
}

function locus_conic(locus_branched) {
    let ret_val = "X";
    if (locus_branched.length > 0) {
        const l_max = longest_branch(locus_branched);
        // only one or two branches
        if (l_max.length > 20) {
            const bbox = get_locus_bbox(l_max);
            if (negl(bbox.area))
                ret_val = "*";
            else {
                //const locus_samples = sample_array(locus_branched[0],50);
                //const lsc = least_squares_conic(locus_samples);
                //const lsc = least_squares_centered_ellipse(locus_branched[0]);
                // translates locus since least_squares_conic is ill defined if zero-centered curve
                const lsc = least_squares_conic(l_max.map(v => vdiff(v, [bbox.xmin, bbox.ymin])));
                ret_val = lsc.conic_type;
            }
        }
    }
    return ret_val;
}

function get_ellipses(a, mnt, imax = 1000) {
    const tDegStep = 5.0;
    let locus, XEC, ellipses = [], circles = [], points = [], hyperbolas = [], parabolas = [];
    for (let i = 1; i <= imax; i++) {
        locus = make_locus_branched(a, i, tDegStep, mnt, "f_trilins", "reference");
        let type = locus_conic(locus);
        switch (type) {
            case "E": ellipses.push(i); break;
            case "H": hyperbolas.push(i); break;
            case "P": parabolas.push(i); break;
            case "C": circles.push(i); break;
            case "*": points.push(i); break;
            default: break;
        };
    }
    console.log("ellipses:", ellipses.length, JSON.stringify(ellipses));
    console.log("hyperbolas:", hyperbolas.length, JSON.stringify(hyperbolas));
    console.log("parabolas:", parabolas.length, JSON.stringify(parabolas));
    console.log("circles:", circles.length, JSON.stringify(circles));
    console.log("points:", points.length, JSON.stringify(points));
    return { ellipses: ellipses, hyperbolas: hyperbolas, parabolas: parabolas, circles: circles, points: points };
}