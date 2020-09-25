const gridLine = () => {
    console.log('  +---+---+---+---+---+---+---+')
}

const EMPTY = ' '
const J1X = 'X'
const J2O = 'O'

// rangé 1
let r1c1 = ' '
let r1c2 = ' '
let r1c3 = ' '
let r1c4 = ' '
let r1c5 = ' '
let r1c6 = ' '
let r1c7 = ' '
// rangé 2
let r2c1 = ' '
let r2c2 = ' '
let r2c3 = ' '
let r2c4 = ' '
let r2c5 = ' '
let r2c6 = ' '
let r2c7 = ' '
// rangé 3
let r3c1 = ' '
let r3c2 = ' '
let r3c3 = ' '
let r3c4 = ' '
let r3c5 = ' '
let r3c6 = ' '
let r3c7 = ' '
// rangé 4
let r4c1 = ' '
let r4c2 = ' '
let r4c3 = ' '
let r4c4 = ' '
let r4c5 = ' '
let r4c6 = ' '
let r4c7 = ' '
// rangé 5
let r5c1 = ' '
let r5c2 = ' '
let r5c3 = ' '
let r5c4 = ' '
let r5c5 = ' '
let r5c6 = ' '
let r5c7 = ' '
// rangé 6
let r6c1 = ' '
let r6c2 = ' '
let r6c3 = ' '
let r6c4 = ' '
let r6c5 = ' '
let r6c6 = ' '
let r6c7 = ' '

const grid = () => {
    console.log('    1   2   3   4   5   6   7')
    gridLine()
    console.log(
        `6 | ${r6c1} | ${r6c2} | ${r6c3} | ${r6c4} | ${r6c5} | ${r6c6} | ${r6c7} | `
    )
    gridLine()
    console.log(
        `5 | ${r5c1} | ${r5c2} | ${r5c3} | ${r5c4} | ${r5c5} | ${r5c6} | ${r5c7} |`
    )
    gridLine()
    console.log(
        `4 | ${r4c1} | ${r4c2} | ${r4c3} | ${r4c4} | ${r4c5} | ${r4c6} | ${r4c7} |`
    )
    gridLine()
    console.log(
        `3 | ${r3c1} | ${r3c2} | ${r3c3} | ${r3c4} | ${r3c5} | ${r3c6} | ${r3c7} |`
    )
    gridLine()
    console.log(
        `2 | ${r2c1} | ${r2c2} | ${r2c3} | ${r2c4} | ${r2c5} | ${r2c6} | ${r2c7} |`
    )
    gridLine()
    console.log(
        `1 | ${r1c1} | ${r1c2} | ${r1c3} | ${r1c4} | ${r1c5} | ${r1c6} | ${r1c7} |`
    )
    gridLine()
    console.log('    1   2   3   4   5   6   7')
}

grid()
