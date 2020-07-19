function sym_axes(a, b) {
  let a2 = a * a;
  let b2 = b * b;
  let a4 = a2 * a2
  let b4 = b2 * b2;
  let d = sqrt(a4 - a2 * b2 + b4);
  let denom = (3 * a4 - 2 * a2 * b2 + 3 * b4);
  let a6 = (-b4 - a2 * b2 - d * b2 + 3 * d * a2) * a / denom;
  let b6 = ( a4 + b2 * a2 + d * a2 - 3 * d * b2) * b / denom;
  return [a6, b6]
}

function sym_locus_mult(a, x6s, mult) {
  let [a6, b6] = sym_axes(a, 1);
  let x6i = x6s.map(x6 => ellInterRayb(a6, b6, [0, 0], x6));
  let x6m = x6s.map((x6, i) => ray(x6i[i], vdiff(x6, x6i[i]), mult));
  return x6m;
}