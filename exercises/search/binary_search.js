const binarySearch = (arr=[], target=0) => {
    let arrStart = 0;
    let arrEnd = arr.length - 1;

    function search(start, end) {
        if(start>end) return -1;
        const mid = Math.floor((start + end)/2);

        if(arr[mid] === target) {
            return mid;
        }
        else if (target > mid) {
            return search(mid+1, end);
        }
        else if (target < mid) {
            return search(start, mid-1);
        }
         {
            return -1;
        }
    }

    return search(arrStart, arrEnd);

} 

module.exports = binarySearch;