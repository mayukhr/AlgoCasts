let a = [1,4,3,6,88,64,32,0,8];

function bubbleSort(arr=[]) {
    for (let i=0; i<arr.length - 1; i++ ) {
        for(let j=0; j<arr.length; j++) {
            if(arr[j]>arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(a));