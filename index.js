class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    insertAtEnd(head, x) {
        // Create a new node with value x
        let newNode = new Node(x);

        // If the linked list is empty, return the new node as head
        if (head === null) {
            return newNode;
        }

        // Traverse to the last node
        let tail = head;
        while (tail.next !== null) {
            tail = tail.next;
        }

        // Append the new node at the end
        tail.next = newNode;

        // Return the modified head
        return head;
    }
}

// Helper function to print the linked list
function printList(head) {
    let result = [];
    let tail = head;
    while (tail !== null) {
        result.push(tail.data);
        tail = tail.next;
    }
    console.log(result.join("->"));
}

// Example usage
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let solution = new Solution();
head = solution.insertAtEnd(head, 6);

printList(head); // Output: 1->2->3->4->5->6
