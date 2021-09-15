function get_orbit_info_low(tri,sides,circ) {
    const L = 2.0 * get_semiperimeter(sides);
    const A = tri_area(sides);
    const r = get_inradius(sides);
    const R = get_circumradius(sides);
    const l2 = sum(sides.map(s=>s*s));
    const linv = sum(sides.map(s=>1/s));
    const l2inv = sum(sides.map(s=>1/(s*s)));
    const cotw =  l2/(4*A);
    const cosprod = product(tri_cosines(sides));
    const lprod = product(sides);

    const the_circ = (circ in dict_circles) ?  dict_circles[circ](tri,sides) : 0;

    return {L:L,A:A,r:r,R:R,rR:safe_div(r,R),cotw:cotw,l2:l2,linv:linv,l2inv:l2inv
      ,cosprod:cosprod,lprod:lprod,circR:the_circ.R};
 }
 
 function get_info_arr(info,info_der,not_ref) {
   const basics =  [info.L, info.A, info.r, info.R, info.rR,
       info.cotw, info.l2, info.linv, info.l2inv, info.cosprod,info.lprod, info.circR];
    return not_ref?
    basics.concat([info_der.L, info_der.A, info_der.r, info_der.R, info_der.rR,
       info_der.cotw, info_der.l2, info_der.linv, info_der.l2inv, info_der.cosprod,info_der.lprod, info_der.circR,
    // ["L'/L", "A'/A", "A'.A","Rc'/Rc"]
    safe_div(info_der.L, info.L), safe_div(info_der.A, info.A), info_der.A*info.A,
    safe_div(info_der.circR,info.circR)]):
    basics;
 }
 
 function get_orbit_info(orbit,derived,circ,not_ref) {
    const info = get_orbit_info_low(orbit.o, orbit.s, circ); // CHECK
    const info_der = not_ref ? get_orbit_info_low(derived.o,derived.s, circ) : info;
    const vals = get_info_arr(info,info_der, not_ref);

    return {info:info, info_der:info_der, vals:vals};
 }
 
 //  ["L", "A", "r", "R", "r/R", "cot(ω)", "Σs^2","Σ(1/s)","Σs^-2","∏cos","∏s", "Rc"]
 
 function get_orbit_biz(a, tDeg, mounting, tri_type, cpn, pn, circ, inv, not_ref) {
    const orbit = mounting in dict_orbit_fn ?
       get_poncelet_derived(a, tDeg, dict_orbit_fn[mounting], mounting, tri_type, cpn, pn, circ, inv) :
       get_mounted_derived(a, tDeg, mounting, tri_type, cpn, pn, circ, inv);
    const orbit_info = get_orbit_info(orbit.ons,orbit.derived,circ, not_ref);
    return {info:orbit_info,orbit:orbit.ons,derived:orbit.derived};
 }
 
 function get_orbit_info_both(a, tDeg, mounting, tri_type, cpn, cpnSel, pn, circ, inv) {
    const not_ref = tri_type != "reference" || (inv != "off"&&circ!="off") || cpn != "off";
    const biz1 = get_orbit_biz(a, tDeg, mounting, tri_type, cpn, pn, circ, inv, not_ref);
    const biz2 = get_orbit_biz(a, tDeg+5., mounting, tri_type, cpn, pn, circ, inv, not_ref);
    const biz3 = get_orbit_biz(a, tDeg-10., mounting, tri_type, cpn, pn, circ, inv, not_ref);
    
    const labs0 = ["L", "A", "r", "R", "r/R", "cot(ω)", "Σs^2","Σ(1/s)","Σs^-2","∏cos","∏s", "Rc"];
    // add marker 1,2,3 prior to each string and push "\n" first time you see one
    const labs = not_ref ? labs0.concat(labs0.map(l=>l+"'")).concat(["L'/L", "A'/A", "A'.A", "Rc'/Rc"]): labs0;
    let str_invs = [];
    //const ll = labs0.lengths;
     labs.map((l, i) => {
         //if ([ll, 2 * ll].includes(i)) str_invs.push("\n");
         if (!negl(biz1.info.vals[i])&&same_triple([biz1, biz2, biz3].map(b => b.info.vals[i])))
             str_invs.push(sprintf(l + "=%.5f", biz1.info.vals[i]));
     });
    const str_join = str_invs.join(", ");
    //const str_repl = str_join.replace(/(, \n)+, /g,"\n").replace(/, \n$/g,"");
    //return { o: biz1.derived.o, s: biz1.derived.s, str: str_repl, lines: str_repl.split("\n").length };
    return { o: biz1.derived.o, s: biz1.derived.s, str: str_join, lines: str_join.split("\n").length };
 }
 