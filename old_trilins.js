// TRILINEARS
function trilin_to_cartesian(
  [A, B, C], //(* vertices *)
  [a, b, c], // (* side lengths *)
  [x, y, z]) //(* trilinears *)
{
  //let denom = a * x + b * y + c * z;
  let v = [a * x, b * y, c * z];
  let denom = sum(v);
  return [dot(v, [A[0], B[0], C[0]]) / denom,
    dot(v, [A[1], B[1], C[1]]) / denom
  ];
}

function trilin_cyclic(orbit, fn, [a, b, c]) {
  tris = [fn(a, b, c), fn(b, c, a), fn(c, a, b)];
  return trilin_to_cartesian(orbit, [a, b, c], tris);
}

function call_raw(orbit, sides, fn_raw) {
  let t = fn_raw(sides);
  return trilin_to_cartesian(orbit, sides, t);
}

trilin_X1 = (orbit, sides) => trilin_to_cartesian(orbit, sides,
                                                  [1, 1, 1]);

trilin_X2 = (orbit, [a, b, c]) => trilin_to_cartesian(orbit, [a, b, c],
                                                      [1/a, 1/b, 1/c]);

function trilin_X3(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let a2 = a * a,
      b2 = b * b,
      c2 = c * c;
    return a * (b2 + c2 - a2);
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X4(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let a2 = a * a,
      b2 = b * b,
      c2 = c * c;
    return 1 / (b2 + c2 - a2) / a;
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X5(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let a2 = a * a,
      b2 = b * b,
      c2 = c * c;
    return b * c * (a2 * (b2 + c2) - (b2 - c2) * (b2 - c2));
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X7(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => b * c / (b + c - a);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X8(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => (b + c - a) / a;
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X9(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => b + c - a;
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X10(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => b * c * (b + c);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X11(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => b*c*(b+c-a)*(b-c)*(b-c);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X12(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => b*c*(b+c)*(b+c)/(b+c-a);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X40(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => b/(c+a-b)+c/(a+b-c)-a/(b+c-a);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X90(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let [a2,b2,c2]=[a*a,b*b,c*c];
    return 1/(a2*a+a2*(b+c)-a*(b2+c2)-(b-c)*(b2-c2));
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X142(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => b+c-(b-c)*(b-c)/a;
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

function trilin_X144(orbit, [a, b, c]) {
  let cyclic = (a, b, c) => 1/(a-b-c)+1/(a-b+c)+1/(a+b-c);
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}

// clawson of excentral
function trilin_X173(orbit, sides) {
  let cyclic = (a, b, c) => 1/(b*b+c*c-a*a);
  let exc = excentral_triangle(orbit, sides);
  let excSides = tri_sides(exc);
  return trilin_cyclic(exc, cyclic, excSides);
}

function trilin_orthic_inc(orbit, sides) {
  let ort = orthic_triangle(orbit, sides);
  let ort_s = tri_sides(ort);
  return trilin_X1(ort, ort_s);
}


// mitten of extangents of excentral
function trilin_X9_ext_exc(orbit, sides) {
  let exc = excentral_triangle(orbit, sides);
  let exc_sides = tri_sides(exc);
  let ext = extangents_triangle(exc, exc_sides);
  let ext_sides = tri_sides(ext);
  let x9_ext_exc = trilin_X9(ext, ext_sides);
  if (g_never) {
    g_never = false;
    //console.log({
      ext: ext,
      ext_sides: ext_sides,
      x9: x9_ext_exc
    });
  }
  return x9_ext_exc;
}

//X827: isot conj of X23285 (a^-2 p^-1), i.e.,
//X23285: b^2 c^2 (b^4-c^4)
//X827: 1/(a^2 b^2 c^2 (b^4-c^4))
function trilin_X827(orbit, [a, b, c]) {
  let cyclic = function(a, b, c) {
    let a2=a*a,c2=c*c,b2=b*b;
    return 1/(a2*b2*c2*(b2*b2-c2*c2));
  }
  return trilin_cyclic(orbit, cyclic, [a, b, c]);
}
