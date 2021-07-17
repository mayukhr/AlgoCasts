class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const printList = function (head) {
    if(head) {
        console.log(head.val);
        printList(head.next);
    } else {
        return;
    }  
}

const aListNode = new ListNode (2, null)
const aLinkedList = new ListNode (1, aListNode);

const generatedLinkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

// printList(generatedLinkedList);

//1 -> 2 -> 3 -> 4 -> 5 -> null
//5 -> 4 -> 3 -> 2 -> 1 -> null
const reverseLinkedList = (head) => {
    let prev = null;
    let current = head;

    while(current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;   
}

printList(generatedLinkedList);
console.log('after reverse')
printList(reverseLinkedList(generatedLinkedList))