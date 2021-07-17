// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    reg_match = str.match(/[aeiou]/gi);

    return reg_match ? reg_match.length : 0;
}

// function vowels(str) {
//     const vowels_all = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (char of str) {
//         if (vowels_all.includes(char.toLowerCase())) {
//             count ++;
//         }
//     }
//     return count;
// }

module.exports = vowels;
