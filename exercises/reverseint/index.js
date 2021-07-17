// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    return Math.sign(n) * parseInt([...n.toString()].reverse().join(''))
    // return Math.sign(n) * parseInt([...Math.sqrt(n*n).toString()].reverse().join(''));
    // let sign = Math.sign(n);
    // n = Math.sqrt(n*n);
    // return sign * parseInt([...n.toString()].reverse().join(''));
}

module.exports = reverseInt;
