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
 
  function get_Xn_low(orbit, sides, fn_trilin) {
    return fn_trilin(orbit,sides);
  }

  function get_fn_trilin(n) {
    let fn_name = sprintf("trilin_X%d",n);
    return window[fn_name];
  }

  function get_Xn(orbit, sides, n) {
    return get_Xn_low(orbit, sides, get_fn_trilin(n));
  }

  // vs = vertices (2-vectors), bs = barycentrics (scalars)
  function barys_to_cartesian(vs, bs) {
    const bs_sum = sum(bs);
    const vs_scaled = vs.map((v,i)=>vscale(v,bs[i]));
    const vs_scaled_norm = vscale(vsum3(...vs_scaled),1/bs_sum);
    return vs_scaled_norm;
  }
  
  function get_Xn_low_bary(orbit, sides, fn_bary) {
    const bs = fn_bary(sides);
    return barys_to_cartesian(orbit, bs);
  }
    
  function get_fn_bary(n) {
    let fn_name = sprintf("bary_X%d",n);
    return window[fn_name];
  }
    
 /* function get_Xn_bary(orbit, sides, n) {
    const bs = fn_bary(sides);
    return get_Xn_low_bary(orbit, sides, get_fn_bary(n));
  }
  */

  function get_Xn_bary(sides, n) {
    const fn_bary = get_fn_bary(n);
    return fn_bary(sides);
  }

function get_Xn_cartesians(xnum,tri,sides) {
  const bs = get_Xn_bary(sides,xnum);
  return barys_to_cartesian(tri,bs);
}

 function bary_brocard1([a,b,c]) {
    return [(a*c)**2,(a*b)**2,(b*c)**2];
 }
 
 function bary_brocard2([a,b,c]) {
    return [(a*b)**2,(b*c)**2,(a*c)**2];
 }

 function get_brocard(n) {
  let brocard_name = sprintf("bary_brocard%d", n);
  return window[brocard_name];
}

function get_brocard_orbit_sides(orbit, sides, n) {
  return get_Xn_low_bary(orbit, sides, get_brocard(n));
}

function get_fn_any(locus_type, n) {
  if (locus_type.substr(0,2)=="f_")
     locus_type = locus_type.substr(2);
  let fn;
  switch (locus_type) {
     case 'brocard_1':
       fn = bary_brocard1; // get_brocard(1);
       break;
     case 'brocard_2':
       fn = bary_brocard2; // get_brocard(2);
       break;
     case 'vtx':
       fn = get_tri_v1_barys;
       break;
     default: fn = get_fn_bary(n);
  }
  return fn;
}