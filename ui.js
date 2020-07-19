function create_chk(n, x, y, bf=false, val=false) {
  let chk = createCheckbox(n, val);
  chk.parent('ui');
  chk.position(x, y);
  chk.changed(chk_redraw);
  chk.class(bf ? 'chkBold' : 'chk');
  return chk;
}

function create_chk_bold(n, x, y, val=false) {
  let chk = create_chk(n, x, y, false, val);
  chk.style('font-weight', 'bold');
  chk.style('color', 'blue');
  //chk.class('chk_bold');
  return chk;
}

function create_title(lab, x, y, prep = true) {
  let p = createP((prep ? '>>> ' : "") + lab);
  p.parent('ui');
  p.position(x, y);
  p.class('lab');
  return lab;
}

function create_slider(x, y) {
  s = createSlider(0, 255, 100);
  s.parent('ui');
  s.position(x, y);
  s.style('width', '100px');
  return s;
}

function create_radio_a(x, y) {
  let radio = createRadio();
  radio.class('chk');
  radio.parent('ui');
  radio.option('1.0', 1.00001);
  radio.option('1.1', 1.1);
  radio.option('1.25', 1.25);
  radio.option('1.352', 1.3522);
  radio.option('1.3924', 1.3924);
  radio.option('1.5', 1.5);
  radio.option('φ=1.618', 1.618034);
  radio.option('1.8364', 1.836377);
  radio.option('2.0', 2);
  radio.option('3.0', 3);
  radio.option('5.0', 5);
  radio._getInputChildrenArray()[6].checked = true;
  radio.position(x, y);
  radio.style('display', 'inline');
  radio.changed(radio_a_changed);
  return radio;
}

function create_radio_xn(x, y) {
  let radio = createRadio();
  radio.class('chk');
  radio.parent('ui');
  radio.option('N/A', 0);
  radio.option('X1', 1);
  radio.option('X2', 2);
  radio.option('X3', 3);
  radio.option('X4', 4);
  radio._getInputChildrenArray()[0].checked = true;
  radio.position(x, y);
  radio.style('display', 'inline');
  radio.changed(radio_xn_changed);
  return radio;
}

function create_title_ctr(lab, x, y, par, clr = 'red') {
  let p = createP(lab);
  p.parent(par);
  p.style('color', clr)
  return p;
}

function create_main_title(y) {
  let div = createDiv();
  let x = g_width / 2 - 160;
  div.parent('ui');
  div.position(x, y);
  div.style('text-align', 'center');
  div.class('lab');
  create_title_ctr("Loci of Centers of Ellipse-Mounted Triangles", 0, 0, div, 'blue');
  create_title_ctr("Left Click: stop/go, Right Click: reverse<br>Drag: move billiard, Wheel: zoom", 0, 0, div, 'red');
  return div;
}

