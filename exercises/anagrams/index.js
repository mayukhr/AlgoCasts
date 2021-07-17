// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION 2 Anagram
function anagrams(stringA, stringB) {
    let pureStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    let pureStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    
    return [...pureStringA].sort().join('') === [...pureStringB].sort().join('');
}
/*
function getCountedObject(string) {
    const countedObj = {};
    
    for (const char of [...string]) {
        countedObj[char] = countedObj[char] ? countedObj[char] + 1 : 1;
    }

    return countedObj;
}

function compareObjects (objA, objB) {
    if (Object.keys(objA).length != Object.keys(objB).length)
        return false;
    else {
        for (let key of Object.keys(objA)) {
            if(objA[key] !== objB[key]) 
                return false;  
        }
        return true;
    }
}

function anagrams(stringA, stringB) {
    let pureStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    let pureStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    
    let countedObjA = getCountedObject(pureStringA);
    let countedObjB = getCountedObject(pureStringB);

    return compareObjects(countedObjA, countedObjB);
}
*/
module.exports = anagrams;
