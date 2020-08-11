function regularPoly(n) {
    let v0 = [1,0];
    let vs = [v0];
    let dt = 2*Math.PI/n;
    let s = Math.sin(dt);
    let c = Math.cos(dt);
     for (let i=1; i<n; i++) {
      v0 = rotSinCos(v0,s,c);
      vs.push(v0);
    }
    return vs;
  } 

function rotPoly(poly, t) {
      let s = Math.sin(t);
      let c = Math.cos(t);
      return poly.map(v => rotSinCos(v,s,c))
  }

scalePoly = (poly, sx, sy) => poly.map(v => vscale_xy(v,sx,sy));