// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charObj = {}; //Try Object.new()
    
    //with forof create the counted object
    for(char of str) {
        charObj[char] = charObj[char] + 1 || 1; 
    }
    // for(char of str) {
    //     if(charObj[char]) 
    //         charObj[char]++;
    //     else
    //         charObj[char] = 1;
    // }
    
    //get max-valued char from charObj
    let max=0, maxChar;

    for(element in charObj) {
        if(charObj[element] > max) {
            max = charObj[element];
            maxChar = element;
        } 
    }
    return maxChar;
}

module.exports = maxChar;
