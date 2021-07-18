const binarySearch = require('./binary_search');

test('last element', () => {
    expect(binarySearch([1,2,5,6,8,66,77,88,99,3333,4444,66555], 1)).toEqual(1);
});
test('last element', () => {
    expect(binarySearch([1,2,5,6,8,66,77,88,99,3333,4444,66555], 66555)).toEqual(11);
});
test('last element', () => {
    expect(binarySearch([1,2,5,6,8,66,77,88,99,3333,4444,66555], 74)).toEqual(-1);
});
// console.log(binarySearch([1,2,5,6,8,66,77,88,99,3333,4444,66555], 1));
// console.log(binarySearch([1,2,5,6,8,66,77,88,99,3333,4444,66555], 66555));
// console.log(binarySearch([1,2,5,6,8,66,77,88,99,3333,4444,66555], 71));