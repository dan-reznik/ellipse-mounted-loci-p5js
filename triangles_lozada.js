function template_triangle([a, b, c], row_fn) {
    const ts = [
        row_fn(a, b, c),
        rotate_tri_right(row_fn(b, c, a)),
        rotate_tri_left(row_fn(c, a, b))
    ];
    return ts;
}

function atik_triangle([a, b, c]) {
    const row_fn = (a, b, c) => {
        const a2 = a * a, b2 = b * b, c2 = c * c, bc3 = (b + c) ** 3;
        return [-((b + c) * a2 - 2 * (b2 + c2) * a + bc3) / a, a2 - 2 * (b - c) * a + (b + 3 * c) * (b - c), a2 - 2 * (c - b) * a + (c + 3 * b) * (c - b)]
    };
    return template_triangle([a, b, c], row_fn);
}

function andromeda_triangle([a, b, c]) {
    const row_fn = (a, b, c) => { const a2 = a * a, bc2 = (b - c) ** 2; return [(a2 + 3 * bc2) / (3 * a2 + bc2), 1, 1] };
    return template_triangle([a, b, c], row_fn);
}

function antlia_triangle([a, b, c]) {
    //-(a^2+3*(b-c)^2)/(3*a^2+(b-c)^2) : 1 : 1
    const row_fn = (a, b, c) => { const a2 = a * a, bc2 = (b - c) ** 2; return [-(a2 + 3 * bc2) / (3 * a2 + bc2), 1, 1] };
    return template_triangle([a, b, c], row_fn);
}

function apollonius_triangle([a, b, c]) {
    //-((b+c)*a+b^2+c^2)^2*a/(a+b+c) : (a+c)^2*(a+b-c)*b :(a+b)^2*(a-b+c)*c
    const row_fn = (a, b, c) => { const b2=b*b,c2 = c * c, bc2 = (b - c) ** 2; return [-(((b + c) * a + b2 + c2) ** 2) * a / (a + b + c), ((a + c) ** 2) * (a + b - c) * b, ((a + b) ** 2) * (a - b + c) * c] };
    return template_triangle([a, b, c], row_fn);
}

function apus_triangle([a, b, c]) {
    const row_fn = (a, b, c) => [a / (a + b + c), -b / (a + b - c), -c / (a - b + c)];
    return template_triangle([a, b, c], row_fn);
}

function ayme_triangle([a, b, c]) {
    // (b+c)*(a^2+(b+c)^2)/a : -a^2-b^2+c^2 : -a^2-c^2+b^2
    const row_fn = (a, b, c) => { const a2 = a * a, b2 = b * b, c2 = c * c, bc2 = (b - c) ** 2; return [(b + c) * (a2 + (b + c) ** 2) / a, -a2 - b2 + c2, -a2 - c2 + b2] };
    return template_triangle([a, b, c], row_fn);
}

function bevan_antipodal_triangle([a, b, c]) {
    const row_fn = (a, b, c) => [-1 / (-a + b + c), 1 / (a - b + c), 1 / (a + b - c)];
    return template_triangle([a, b, c], row_fn);
}

function first_circumperp_triangle([a, b, c]) {
    const row_fn = (a, b, c) => [a, c - b, b - c];
    return template_triangle([a, b, c], row_fn);
}

function second_circumperp_triangle([a, b, c]) {
    const row_fn = (a, b, c) => [-a, b + c, b + c];
    return template_triangle([a, b, c], row_fn);
}

function excenters_incenter_reflection_triangle([a, b, c]) {
    const row_fn = (a, b, c) => [(-a + 3 * b + 3 * c) / (-3 * a + b + c), 1, 1];
    return template_triangle([a, b, c], row_fn);
}

function excenters_midpoint_triangle([a, b, c]) {
    const row_fn = (a, b, c) => [(-2 * a + b + c) / a, 1, 1];
    return template_triangle([a, b, c], row_fn);
}

function honsberger_triangle([a, b, c]) {
    //-(a^2+3*(b-c)^2)/(3*a^2+(b-c)^2) : 1 : 1
    const row_fn = (a, b, c) => { const bc2 = (b - c) ** 2; return [1 / ((b + c) * a - bc2), -1 / (b * (a - b + c)), -1 / (c * (a + b - c))] };
    return template_triangle([a, b, c], row_fn);
}

function inverse_in_excircles_triangle([a, b, c]) {
    //  -((b+c)*a+(b-c)^2)/(a*(a+b+c)) : 1 : 1
    const row_fn = (a, b, c) => { const bc2 = (b - c) ** 2; return [-((b + c) * a + bc2) / (a * (a + b + c)), 1, 1] };
    return template_triangle([a, b, c], row_fn);
}

function inverse_in_incircle_triangle([a, b, c]) {
    // ((b+c)*a-(b-c)^2)/(a*(-a+b+c)) : 1 : 1
    const row_fn = (a, b, c) => { const bc2 = (b - c) ** 2; return [((b + c) * a - bc2 )/ (a * (-a + b + c)), 1, 1] };
    return template_triangle([a, b, c], row_fn);
}

function kosnita_triangle([a, b, c]) {
    const row_fn = (a, b, c) => {
        const a2 = a * a, b2 = b * b, c2 = c * c;
        const a4 = a2 * a2, b4 = b2 * b2, c4 = c2 * c2;
        return [
            (a4 + (-2 * b2 - 2 * c2) * a2 + b4 + c4) * a,
            -b * (a4 + (-2 * b2 - c2) * a2 + (b2 - c2) * b2),
            -(a4 + (-b2 - 2 * c2) * a2 - c2 * (b2 - c2)) * c
        ]
    };
    return template_triangle([a, b, c], row_fn);
}

function mandart_excircles_triangle([a, b, c]) {
    const row_fn = (a, b, c) => { const bc2 = (b - c) ** 2; return [-bc2 * (a + b + c) / a, b * (a + b - c), c * (a - b + c)] };
    return template_triangle([a, b, c], row_fn);
}

function mandart_incircle_triangle([a, b, c]) {
    const row_fn = (a, b, c) => { const bc2 = (b - c) ** 2; return [(b + c - a) * bc2 / a, b * (a - b + c), c * (a + b - c)] };
    return template_triangle([a, b, c], row_fn);
}

function ursa_major_triangle([a, b, c]) {
    const row_fn = (a, b, c) => {
        const a2 = a * a, b2 = b * b, c2 = c * c;
        const ab2 = (a - b) ** 2, ac2 = (a - c) ** 2;
        return [-(b + c) * a2 + 2 * (b2 + c2) * a - (b + c) * (b2 + c2),
        (ab2 + (2 * a - c) * c) * (a - c),
        (ac2 + (2 * a - b) * b) * (a - b)]
    };
    return template_triangle([a, b, c], row_fn);
}

function ursa_minor_triangle([a, b, c]) {
    const row_fn = (a, b, c) => { const bc2 = (b - c) ** 2; return [-(b + c) * a - bc2, (a - b + c) * (a - c), (a + b - c) * (a - b)] };
    return template_triangle([a, b, c], row_fn);
}

function x3_abc_reflections_triangle([a, b, c]) {
    const row_fn = (a, b, c) => {
        const cw = get_conway([a, b, c]);
        return [-(3 * cw.S * cw.S + cw.Sb * cw.Sc) / a, cw.Sb * b, cw.Sc * c];
    }
    return template_triangle([a, b, c], row_fn);
}