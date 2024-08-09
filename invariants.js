function get_orbit_info_low(tri, sides, circ) {
   const L = 2.0 * get_semiperimeter(sides);
   const A = tri_area(sides);
   const r = get_inradius(sides);
   const R = get_circumradius(sides);
   const rOvR = safe_div(r, R);
   const l2 = sum(sides.map(s => s*s));
   const rpol2 = 4*R*R-l2/2;  // r^2 of polar circle: https://mathworld.wolfram.com/PolarCircle.html
   const linv = sum(sides.map(s =>1/s));
   const l2inv = sum(sides.map(s => 1/(s*s)));
   // trig basics
   const cs = tri_cosines(sides);
   const ss = cs.map(c => Math.sqrt(1 - c*c));
   const ts = ss.map((s, i) => s / cs[i]);
   const secs = cs.map(c=>1/c);
   const cscs = ss.map(s=>1/s);
   const cots = ts.map(t =>1/t);
   // trigs halves
   const csHalf = cs.map(c=>Math.sqrt((1+c)/2));
   const ssHalf = cs.map(c=>Math.sqrt((1-c)/2));
   const tsHalf = cs.map(c => Math.sqrt((1-c)/(1+c))); // tan(t/2) = sqrt[(1-cos)/(1+cos)]
   const secsHalf = csHalf.map(c=>1/c);
   const cscsHalf = ssHalf.map(s=>1/s);
   const cotsHalf =  csHalf.map(c => Math.sqrt((1+c)/(1-c)));
   // trigs doubles
   const csDouble = cs.map(c=>2*c*c-1);  // cos(2t)=2 cos^2 - 1
   const ssDouble = ss.map((s, i) => 2*s[i]*cs[i]); // sin(2t)=2 sin cos
   const tsDouble = csDouble.map(c=>ssDouble[i]/c);
   const secsDouble = csDouble.map(c=>1/c);
   const cscsDouble = ssDouble.map(s=>1/s);
   const cotsDouble = csDouble.map(c=>c/ssDouble[i]);
   // sums
   const csum = sum(cs);
   const ssum = sum(ss);
   const tsum = sum(ts);
   const secsum = sum(secs);
   const cscsum = sum(cscs);
   const cotw = sum(cots); //  l2/(4*A);
   // sums half
   const cosHalfsum = sum(csHalf)
   const sinHalfsum= sum(ssHalf);
   const tanHalfsum = sum(tsHalf);
   const secHalfsum = sum(secsHalf);
   const cscHalfsum = sum(cscsHalf);
   const cotHalfsum = sum(cotsHalf);
   // sums double
   const cosDoublesum = sum(csDouble);
   const sinDoublesum = sum(ssDouble);
   const tanDoublesum = sum(tsDouble);
   const secDoublesum = sum(secsDouble);
   const cscDoublesum = sum(cscsDouble);
   const cotDoublesum = sum(cotsDouble);
   // prods
   const cosprod = product(cs);
   const sinprod = product(ss);
   const cotprod = product(cots);
   const lprod = product(sides);
   // cyclicals
   const cycs=[sides[0]*sides[1],sides[1]*sides[2],sides[2]*sides[0]];
   const cycsinv=cycs.map(cyc=>1/cyc);
   const cycs2=cycs.map(cyc=>cyc*cyc);
   // sums
   const lsumcyc = sum(cycs);
   const lsumcycinv = sum(cycsinv);
   const lsumcyc2 = sum(cycs2);
   const lsumcyc2inv = sum(cycs2.map(c=>1/c));
   // circle being displayed
   const the_circ = (circ in dict_circles) ? dict_circles[circ](tri, sides) : 0;

   return {
      L: L, A: A, r: r, R: R, rOvR: rOvR,
      cotw: cotw, // cotsum
      csum: csum, ssum: ssum, tsum: tsum,
      secsum: secsum, cscsum: cscsum,
      sinDoublesum: sinDoublesum, cosDoublesum: cosDoublesum, tanDoublesum: tanDoublesum,
      secDoublesum: secDoublesum, cscDoublesum: cscDoublesum, // new
      cotDoublesum: cotDoublesum,
      sinHalfsum: sinHalfsum, cosHalfsum: cosHalfsum, tanHalfsum: tanHalfsum, cotHalfsum: cotHalfsum,
      secHalfsum: secHalfsum, cscHalfsum: cscHalfsum, // new
      cosprod: cosprod, sinprod: sinprod, cotprod: cotprod,
      l2: l2, linv: linv, l2inv: l2inv, lprod: lprod,
      lsumcyc: lsumcyc, lsumcycinv: lsumcycinv, lsumcyc2: lsumcyc2, lsumcyc2inv: lsumcyc2inv, // new
      circR: the_circ.R, rpol2: rpol2
   };
}

function get_info_arr(info, info_der, not_ref) {
   const basics = [info.L, info.A, info.r, info.R, info.rOvR,
   info.cotw,
   info.csum, info.ssum, info.tsum,
   info.secsum, info.cscsum,
   info.sinDoublesum, info.cosDoublesum, info.tanDoublesum,
   info.secDoublesum, info.cscDoublesum, info.cotDoublesum,
   info.sinHalfsum, info.cosHalfsum, info.tanHalfsum,
   info.secHalfSum, info.cscHalfSum, info.cotHalfsum,
   info.cosprod, info.sinprod, info.cotprod,
   info.l2, info.linv, info.l2inv, info.lprod, info.lsumcyc, info.lsumcycinv, info.lsumcyc2, info.lsumcyc2inv, info.circR, info.rpol2];
   return not_ref ?
      basics.concat([
         info_der.L, info_der.A, info_der.r, info_der.R, info_der.rOvR,
         info_der.cotw,
         info_der.csum, info_der.ssum, info_der.tsum,
         info_der.secsum, info_der.cscsum,
         info_der.sinDoublesum, info_der.cosDoublesum, info_der.tanDoublesum,
         info_der.secDoublesum, info_der.cscDoublesum, info_der.cotDoublesum,
         info_der.sinHalfsum, info_der.cosHalfsum, info_der.tanHalfsum,
         info_der.secHalfsum, info_der.cscHalfsum, info_der.cotHalfsum,
         info_der.cosprod, info_der.sinprod, info_der.cotprod,
         info_der.l2, info_der.linv, info_der.l2inv, info_der.lprod,
         info_der.lsumcyc, info_der.lsumcycinv, info_der.lsumcyc2, info_der.lsumcyc2inv,
         info_der.circR, info_der.rpol2,
         // ["L'/L", "A'/A", "A'.A","Rc'/Rc"]
         safe_div(info_der.L, info.L), safe_div(info_der.A, info.A), info_der.A * info.A,
         safe_div(info_der.circR, info.circR)]) :
      basics;
}

function get_orbit_info(orbit, derived, circ, not_ref) {
   const info = get_orbit_info_low(orbit.o, orbit.s, circ); // CHECK
   const info_der = not_ref ? get_orbit_info_low(derived.o, derived.s, circ) : info;
   const vals = get_info_arr(info, info_der, not_ref);

   return { info: info, info_der: info_der, vals: vals };
}

function get_orbit_biz(a, tDeg, mounting, tri_type, cpn, pn, circ, inv, not_ref) {
   const orbit = mounting in dict_orbit_fn ?
      get_poncelet_derived(a, tDeg, dict_orbit_fn[mounting], mounting, tri_type, cpn, pn, circ, inv) :
      get_mounted_derived(a, tDeg, mounting, tri_type, cpn, pn, circ, inv);
   const orbit_info = get_orbit_info(orbit.ons, orbit.derived, circ, not_ref);
   return { info: orbit_info, orbit: orbit.ons, derived: orbit.derived };
}

function get_orbit_info_both(a, tDeg, mounting, tri_type, cpn, cpnSel, pn, circ, inv) {
   const not_ref = tri_type != "reference" || (inv != "off" && inv != "ref" && circ != "off") || cpn != "off";
   const biz1 = get_orbit_biz(a, tDeg + .1, mounting, tri_type, cpn, pn, circ, inv, not_ref);
   const biz2 = get_orbit_biz(a, tDeg + 5.1, mounting, tri_type, cpn, pn, circ, inv, not_ref);
   const biz3 = get_orbit_biz(a, tDeg - 10.1, mounting, tri_type, cpn, pn, circ, inv, not_ref);

   const labs0 = [
      "L", "A", "r", "R", "r/R", "cot(ω)",
      "Σcos", "Σsin", "Σtan",
      "Σsec", "Σcsc",
      "Σsin(2t)","Σcos(2t)","Σtan(2t)",
      "Σsec(2t)","Σcsc(2t)","Σcot(2t)",
      "Σsin(t/2)","Σcos(t/2)","Σtan(t/2)",
      "Σsec(t/2)","Σcsc(t/2)","Σcot(t/2)",
      "∏cos", "∏sin", "∏cot",
      "Σs^2", "Σ(1/s)", "Σs^-2", "∏s",
      "Σs,cyc","Σ(1/s),cyc","Σs^2,cyc","Σs^-2,cyc",
      "Rc", "rpol2"
   ];
   //"L", "A", "r", "R", "r/R", "cot(ω)", "Σtan",
   // "Σsin(2t)","Σcos(2t)","Σtan(2t)","Σsin(t/2)","Σcos(t/2)","Σtan(t/2)", 
   // "∏cot", "Σs^2", "Σ(1/s)", "Σs^-2", "∏cos", "∏s", "Rc"];
   // add marker 1,2,3 prior to each string and push "\n" first time you see one
   const labs = not_ref ? labs0.concat(labs0.map(l => l + "'")).concat(["L'/L", "A'/A", "A'.A", "Rc'/Rc"]) : labs0;
   let str_invs = [];
   //const ll = labs0.lengths;
   labs.map((l, i) => {
      //if ([ll, 2 * ll].includes(i)) str_invs.push("\n");
      if (!negl(biz1.info.vals[i]) && same_triple([biz1, biz2, biz3].map(b => b.info.vals[i])))
         str_invs.push(sprintf(l + "=%.5f", biz1.info.vals[i]));
   });
   const str_join = str_invs.join(", ");
   //const str_repl = str_join.replace(/(, \n)+, /g,"\n").replace(/, \n$/g,"");
   //return { o: biz1.derived.o, s: biz1.derived.s, str: str_repl, lines: str_repl.split("\n").length };
   return { o: biz1.derived.o, s: biz1.derived.s, str: str_join, lines: str_join.split("\n").length };
}
