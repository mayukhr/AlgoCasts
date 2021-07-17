// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

let capitalizeWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
}
function capitalize(str) {
    let strArr = str.split(' ');
    let capitalizedArr = [];

    for(let word of strArr) {
        capitalizedArr.push(capitalizeWord(word));
    }

    return capitalizedArr.join(' ');
}

// BRUTE FORCE METHOD
// function capitalize(str) {
//     const capitalizedArr = [];
//     for(let i = 0; i<str.length; i++) {
//         if(i === 0) {
//             capitalizedArr.push(str[i].toUpperCase());
//         }
//         else if( str[i] === ' '){
//             capitalizedArr.push(str[i]);
//             capitalizedArr.push(str[i+1].toUpperCase());
//             i++;
//         }
//         else {
//             capitalizedArr.push(str[i]);
//         }
//     }
//     return capitalizedArr.join('');
// }

module.exports = capitalize;
