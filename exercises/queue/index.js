// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.arr = [];
        this.index = 0;
    }
    add(element) {
        this.arr.push(element);
        // this.index++;
        return this.arr.length;
    }
    remove() {
        let a = this.arr.splice(this.index, this.index + 1)
        return a[0];
    }
}

module.exports = Queue;
