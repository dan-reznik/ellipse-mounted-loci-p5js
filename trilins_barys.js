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
 // f(a,b,c) : f(b,c,a) : f(c,a,b)     and     f(a,c,b) : f(b,a,c) : f(c,b,a)

 function bary_beltrami1([a,b,c]) {
   const a2=a*a,b2=b*b,c2=c*c;
   return [a2*(b2-a2),b2*(c2-b2),c2*(a2-c2)];
}

function bary_beltrami2([a,b,c]) {
  const a2=a*a,b2=b*b,c2=c*c;
  return [a2*(c2-a2),b2*(a2-b2),c2*(b2-c2)];
}

// also: P(116) in https://faculty.evansville.edu/ck6/encyclopedia/BicentricPairs.html
function bary_bickart1([a,b,c]) {
  const a2=a*a,b2=b*b,c2=c*c;
  const a4=a2*a2,b4=b2*b2,c4=c2*c2;
  const a6=a4*a2,b6=b4*b2,c6=c4*c2;
  const Z = Math.sqrt(a4+b4+c4-a2*b2-b2*c2-c2*a2);
  const V=2*a2*b2*c2*(Z*Z*Z);
  const W=b6*c6+c6*a6+a6*b6-3*a4*b4*c4-(b4*c4+c4*a4+a4*b4)*Z*Z;
  const sqrtVmW=Math.sqrt(V-W);
  
  // barycentrics 
  const alpha = 2*(b2-c2)*(a4-b2*c2-a2*Z)+sqrtVmW;
  const beta = 2*(c2-a2)*(b4-c2*a2-b2*Z)+sqrtVmW;
  const gamma = 2*(a2-b2)*(c4-a2*b2-c2*Z)+sqrtVmW;
  return [alpha,beta,gamma];
}

function bary_bickart2([a,b,c]) {
  const a2=a*a,b2=b*b,c2=c*c;
  const a4=a2*a2,b4=b2*b2,c4=c2*c2;
  const a6=a4*a2,b6=b4*b2,c6=c4*c2;
  const Z = Math.sqrt(a4+b4+c4-a2*b2-b2*c2-c2*a2);
  const V=2*a2*b2*c2*(Z*Z*Z);
  const W=b6*c6+c6*a6+a6*b6-3*a4*b4*c4-(b4*c4+c4*a4+a4*b4)*Z*Z;
  const sqrtVmW=Math.sqrt(V-W);
  
  // barycentrics 
  const alpha = 2*(b2-c2)*(a4-b2*c2-a2*Z)-sqrtVmW;
  const beta = 2*(c2-a2)*(b4-c2*a2-b2*Z)-sqrtVmW;
  const gamma = 2*(a2-b2)*(c4-a2*b2-c2*Z)-sqrtVmW;
  return [alpha,beta,gamma];
}

 // https://mathworld.wolfram.com/BickartPoints.html
 /*
 function bary_bickart1_mw([a,b,c]) {
   const sqrt2=Math.sqrt(2.0);
   const a2=a*a,b2=b*b,c2=c*c;
   const a4=a2*a2,b4=b2*b2,c4=c2*c2;
   const area = tri_area([a,b,c]);
   const [cA,cB,cC] = tri_cosines([a,b,c]);
   const [sA,sB,sC] = [cA,cB,cC].map(x=>Math.sqrt(1-x*x));
   const cosBmC=cB*cC+sB*sC;
   const cosCmA=cC*cA+sC*sA;
   const cosAmB=cA*cB+sA*sB;
   const Z = Math.sqrt(a4+b4+c4-a2*b2-b2*c2-c2*a2);
   // barycentrics 
   const alpha = sqrt2*area+a*Math.sqrt(-a2+Z+b*c*cosBmC);
   const beta = sqrt2*area+b*Math.sqrt(-b2+Z+c*a*cosCmA);
   const gamma = sqrt2*area+c*Math.sqrt(-c2+Z+a*b*cosAmB)
   return [alpha,beta,gamma];
 }

 function bary_bickart2_mw([a,b,c]) {
  const sqrt2=Math.sqrt(2.0);
  const a2=a*a,b2=b*b,c2=c*c;
  const a4=a2*a2,b4=b2*b2,c4=c2*c2;
  const area = tri_area([a,b,c]);
  const [cA,cB,cC] = tri_cosines([a,b,c]);
  const [sA,sB,sC] = [cA,cB,cC].map(x=>Math.sqrt(1-x*x));
  const cosBmC=cB*cC+sB*sC;
  const cosCmA=cC*cA+sC*sA;
  const cosAmB=cA*cB+sA*sB;
  const Z = Math.sqrt(a4+b4+c4-a2*b2-b2*c2-c2*a2);
  // barycentrics 
  const alpha = sqrt2*area-a*Math.sqrt(-a2+Z+b*c*cosBmC);
  const beta = sqrt2*area-b*Math.sqrt(-b2+Z+c*a*cosCmA);
  const gamma = sqrt2*area-c*Math.sqrt(-c2+Z+a*b*cosAmB)
  return [alpha,beta,gamma];
}
*/


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
       fn = bary_brocard1;
       break;
     case 'brocard_2':
       fn = bary_brocard2;
       break;
    case 'beltrami_1':
       fn = bary_beltrami1;
       break;
     case 'beltrami_2':
       fn = bary_beltrami2;
       break;
       case 'bickart_1':
        fn = bary_bickart1;
        break;
      case 'bickart_2':
        fn = bary_bickart2;
        break;
     case 'vtx':
       fn = get_tri_v1_barys;
       break;
     default: fn = get_fn_bary(n);
  }
  return fn;
}

function bary_to_trilin(bs,sides)  {
  return bs.map((b,i)=>b/sides[i]);
}