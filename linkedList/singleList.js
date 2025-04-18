class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const newNode = new Node(data);

        if(this.head == null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtLast(data){
        const newNode = new Node(data);

        if(this.head == null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
        
    }

    insertAfterKey(key , data){
        const newNode = new Node(data);
        let current  = this.head;
        while(current !== null && current.data != key){
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode
    }

    delete(data){
        let current = this.head;
        // let prev = null;
        while(current.next.data != data){
            // prev = current;
            current = current.next;
        }

        

    }

    traverse(){
        let current = this.head;
        let result = "";
        while(current != null){
            result+=current.data + " -> ";
            current = current.next;
        }
        console.log(result)
    }
}

const ll  = new SinglyLinkedList();

ll.addFirst(0);
// ll.insertAtLast();
ll.insertAtLast(2);
ll.insertAtLast(4);
ll.insertAtLast(5);
ll.insertAfterKey(0, 1)
ll.traverse();
