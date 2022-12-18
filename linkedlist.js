class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    printdata() {
        console.log("Data");
        let current = this.head;
        while (current) {
            console.log(`${current.data}`);
            current = current.next;
        }
    }
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log('WRONG INPUT')
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while (index > count) {
            previous = current;
            count++;
            current = current.next;


        }
        node.next = current;
        previous.next = node;
        this.size++;

    }
    getAt(index) {
        if (index < 0 || index > this.size) {
            console.log('Wrong index entered');
            return;
        }
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                console.log(` at index ${index} : ${current.data}`);
            }
            count++;
            current = current.next;

        }
        return null;
    }
    removeAt(index) {
        if (index < 0 || index > this.size) {
            console.log('Wrong index entered');
            return;
        }
        if (index == 0) {
            this.head = this.head.next;
            return;
        }
        let current, previous;
        current = this.head;
        let count = 0;
        while (count < index) {
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;
    }
    clearList() {
        this.head = null;
        this.size = 0;
    }


}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertAt(500, 2);
ll.insertAt(600, 4);
ll.getAt(0);
console.log("data : ")
ll.printdata();

ll.removeAt(200);
console.log("data : ")
ll.printdata();