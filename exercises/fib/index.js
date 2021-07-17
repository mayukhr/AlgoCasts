//memoize generic
function memoize (func) {
    const cache = {}
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }
        
        const result = func.apply(this, args);
        cache[args] = result;
        return result;
    }
} 

//recursive solution
function fib(n) {
    if (n <= 1)
        return n;
    else 
        return fib(n-1) + fib(n-2);
    
}

fib = memoize(fib);
module.exports = fib;











// Iterative solution
// function fib(n) {
//     let num_prev = 0;
//     let num = 1;
//     let num_next;

//     if (n === 0)
//         return 0;
//     else if (n === 1)
//         return num;
//     else {
//         for(let i=1; i<n; i++) {
//             num_next = num_prev + num;
//             num_prev = num;
//             num = num_next;
//         }
//         return num_next;
//     }
// }
