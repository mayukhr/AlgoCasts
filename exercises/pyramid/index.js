// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let row = n;
    let column = 2*n-1;
    
    for(let i = 1; i <= row; i++) {
        let str = '';
        for(let a = 0; a< row-i; a++ ) {
            str = str + ' ';
        }
        for(let a = 0; a < column - 2*(row-i); a++ ) {
            str = str + '#';
        }
        for(let a = 0; a< row-i; a++ ) {
            str = str + ' ';
        }
        console.log(str );
    }
}

/*
for(let i = 1; i <= row; i++) {
    let str = '';
    for (let j = 1; j <= column; j++) {
        for(let a = 0; a< row-i; a++ ) {
            str = str + ' ';
        }
        for(let a = 0; a < column - 2*(row-i); a++ ) {
            str = str + '#';
        }
        for(let a = 0; a< row-i; a++ ) {
            str = str + ' ';
        }
    }
    console.log(str );
}
*/
pyramid(9);

module.exports = pyramid;
