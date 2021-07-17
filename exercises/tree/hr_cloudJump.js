function jumpingOnClouds(c) {
    let counter = 0;
    for(let i = 0; i<c.length-1; i+=2) {
        counter++;
        if(c[i]===1) {
            i--;
        }
    }
    return counter;
}
console.log(jumpingOnClouds([0,0,0,0,1,0]));