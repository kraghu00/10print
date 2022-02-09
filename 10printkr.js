const lbj = 486/538; const nix = (538-301)/538; const nix2 = (538-520)/538; const car = 297/538; const rea = (538-489)/538; const rea2 = (538-525)/538; const hwb = (538-426)/538; const cli = 370/538; const cli2 = 379/538; const gwb = (538-271)/538; const gwb2 = (538-286)/538; const obm = 365/538; const obm2 = 332/538; const trmp = (538-304)/538; const bid = 306/538;
const elecs = [lbj, nix, nix2, car, rea, rea2, hwb, cli, cli2, gwb, gwb2, obm, obm2, trmp, bid]
var pres = elecs[Math.floor(Math.random()*elecs.length)]

let w = process.stdout.columns
let output = ''

var pres = elecs[Math.floor(Math.random()*elecs.length)]
for (let i=0; i < w*6; i++) {
  if (pres > 0.5) {
    output += 'D'
  } else {
    output += 'R'
  }
}

// function square () {
//
// }
//
// draw()

console.log(output)
