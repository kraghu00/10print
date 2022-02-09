/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/
const lbj = 486/538; const nix = (538-301)/538; const nix2 = (538-520)/538; const car = 297/538; const rea = (538-489)/538; const rea2 = (538-525)/538; const hwb = (538-426)/538; const cli = 370/538; const cli2 = 379/538; const gwb = (538-271)/538; const gwb2 = (538-286)/538; const obm = 365/538; const obm2 = 332/538; const trmp = (538-304)/538; const bid = 306/538;
const elecs = [lbj, nix, nix2, car, rea, rea2, hwb, cli, cli2, gwb, gwb2, obm, obm2, trmp, bid]

const w = process.stdout.columns

// const BgBlue = '\x1b[44m'
// const BgRed = '\x1b[41m'
// const FgBrightBlue = '\x1b[94m'
// const BgBrightRed = '\x1b[91m'

function draw () {
  setTimeout(draw, 100)
  let output = ''

  for (let i = 0; i < w*2; i++) {
    var pres = elecs[Math.floor(Math.random()*elecs.length)]
    if (pres > 0.5) {
      output += '\x1b[44m'
    } else {
      output += '\x1b[41m'
    }
    if (Math.random() > pres) {
      output += '\x1b[91mR'
    } else {
      output += '\x1b[94mD'
    }
  }
  console.log(output)
}

draw()
