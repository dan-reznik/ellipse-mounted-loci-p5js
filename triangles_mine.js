function template_ptriangle([a, b, c], [al, be, ga], row_pfn) {
  const mtx = [
    row_pfn([a, b, c], [al, be, ga]),
    rotate_tri_right(row_pfn([b, c, a], [be, ga, al])),
    rotate_tri_left(row_pfn([c, a, b], [ga, al, be]))
  ];
  return mtx;
}

function circumsimson_triangle([a, b, c], [alpha, beta, gamma]) {
  const row_pfn = ([a, b, c], [alpha, beta, gamma]) => {
    // moses' code in barycentrics
    const p = alpha * a, q = beta * b, r = gamma * c;
    const p2 = p * p;
    const a2 = a * a, b2 = b * b, c2 = c * c;
    const a4 = a2 * a2, b4 = b2 * b2, c4 = c2 * c2;
    //console.log([p,q,r,p2,a2,b2,c2,a4,b4,c4]);
    const z1 = a2 * (2 * b2 * p + a2 * q + b2 * q - c2 * q) * (2 * c2 * p + a2 * r - b2 * r + c2 * r) *
      (a2 * b2 * p2 - b4 * p2 + a2 * c2 * p2 + 2 * b2 * c2 * p2 - c4 * p2 + a4 * p * q - a2 * b2 * p * q +
        a2 * c2 * p * q + a4 * p * r + a2 * b2 * p * r - a2 * c2 * p * r + 2 * a4 * q * r);
    const z2 = -((a2 * p + b2 * p - c2 * p + 2 * a2 * q) * (a2 * c2 * p + b2 * c2 * p - c4 * p + a4 * r -
      a2 * b2 * r - a2 * c2 * r) * (a2 * b2 * p2 - b4 * p2 + b2 * c2 * p2 + a4 * p * q - a2 * b2 * p * q -
        a2 * c2 * p * q + 2 * a2 * b2 * p * r + a4 * q * r + a2 * b2 * q * r - a2 * c2 * q * r));
    const z3 = -((a2 * b2 * p - b4 * p + b2 * c2 * p + a4 * q - a2 * b2 * q - a2 * c2 * q) *
      (a2 * p - b2 * p + c2 * p + 2 * a2 * r) * (a2 * c2 * p2 + b2 * c2 * p2 - c4 * p2 + 2 * a2 * c2 * p * q +
        a4 * p * r - a2 * b2 * p * r - a2 * c2 * p * r + a4 * q * r - a2 * b2 * q * r + a2 * c2 * q * r));
    return [z1 / a, z2 / b, z3 / c];
  };
  return template_ptriangle([a, b, c], [alpha, beta, gamma], row_pfn);
}


// Tangent to circumcircle at A,B,C, externally-tangent to incircle
// Peter Moses, 4-aug-2022. Tangent to incircle at:
// z1= -(a*b - b2 + a*c + 2*b*c - c2)2;
// z2 = b2*(-a + b - c)*(-a + b + c)
// z3 = (a - b - c)*(a + b - c)*c2;
function bitangent_ext_triangle([a, b, c]) {
  const row_fn = (a, b, c) => {
    // moses' code in barycentrics
    const a2 = a * a, b2 = b * b, c2 = c * c;
    const a3 = a * a2, b3 = b * b2, c3 = c * c2;
    const a4 = a2 * a2, b4 = b2 * b2, c4 = c2 * c2;
    const b5 = b2 * b3, c5 = c2 * c3;

    const z1 = -(a3 * b2) + a2 * b3 + a * b4 - b5 - 4 * a3 * b * c - 3 * a2 * b2 * c + 4 * a * b3 * c +
      3 * b4 * c - a3 * c2 - 3 * a2 * b * c2 - 10 * a * b2 * c2 - 2 * b3 * c2 + a2 * c3 + 4 * a * b * c3 -
      2 * b2 * c3 + a * c4 + 3 * b * c4 - c5;
    const z2 = b2 * (-a + b + c) * (-a2 + b2 - c2);
    const z3 = c2 * (-a + b + c) * (-a2 - b2 + c2);

    return [z1 / a, z2 / b, z3 / c];
  };
  return template_triangle([a, b, c], row_fn);
}


// Tangent to circumcircle at A,B,C, internally-tangent to incircle
// Peter Moses, 4-aug-2022.  Tangent to incircle at:
// z1= (b - c)2*(a + b - c)*(a - b + c);
// z2= b2*(a + b - c)*(-a + b + c);
// z3= -((a - b - c)*c^2*(a - b + c));
function bitangent_int_triangle([a, b, c]) {
  const row_fn = (a, b, c) => {
    // moses' code in barycentrics
    const a2 = a * a, b2 = b * b, c2 = c * c;
    const b3 = b * b2, c3 = c * c2;
    const b4 = b2 * b2, c4 = c2 * c2;

    const z1 = a2 * b2 - b4 - 4 * a2 * b * c + 4 * b3 * c + a2 * c2 - 6 * b2 * c2 + 4 * b * c3 - c4;
    const z2 = b2 * (-a2 + b2 - c2);
    const z3 = c2 * (-a2 - b2 + c2);

    return [z1 / a, z2 / b, z3 / c];
  };
  return template_triangle([a, b, c], row_fn);
}

// Externally-tangent to incircle at vertices of intouch triangle
// Peter Moses, 8-aug-2022. Touchpoints on circumcircle:
// z1 = a2*(a + b - c)*(a - b + c);
// z2 = b*(a + b - c)*(-(a*b) + b2 - a*c - 2*b*c + c2);
// z3 = c*(a - b + c)*(-(a*b) + b2 - a*c - 2*b*c + c2);
function bitangent_inc_ext_triangle([a, b, c]) {
  const row_fn = (a, b, c) => {
    // moses' code in barycentrics
    const a2 = a * a, b2 = b * b, c2 = c * c;
    const a3 = a * a2, b3 = b * b2, c3 = c * c2;

    const z1 = 2 * a2 * (a + b - c) * (a - b + c);
    const z2 = (a + b - c) * (a3 + a2 * b - 3 * a * b2 + b3 - a2 * c - 4 * a * b * c - b2 * c - a * c2 - b * c2 + c3);
    const z3 = (a - b + c) * (a3 - a2 * b - a * b2 + b3 + a2 * c - 4 * a * b * c - b2 * c - 3 * a * c2 - b * c2 + c3);

    return [z1 / a, z2 / b, z3 / c];
  };
  return template_triangle([a, b, c], row_fn);
}

// Internally-tangent to incircle at vertices of intouch triangle
// Peter Moses, 8-aug-2022. Touchpoints on circumcircle:
// z1 = a2*(a + b - c)*(a - b + c);
// z2 = b*(b - c)*(a + b - c)*(-a + b + c); 
// z3 = (a - b - c)*(b - c)*c*(a - b + c);
function bitangent_inc_int_triangle([a, b, c]) {
  const row_fn = (a, b, c) => {
    // moses' code in barycentrics
    const a2 = a * a, b2 = b * b, c2 = c * c;
    const a4 = a2 * a2;

    const z1 = 2 * a4;
    const z2 = a2 * (a2 + 2 * a * b - b2 - 2 * a * c + c2);
    const z3 = a2 * (a2 - 2 * a * b + b2 + 2 * a * c - c2);


    return [z1 / a, z2 / b, z3 / c];
  };
  return template_triangle([a, b, c], row_fn);
}
