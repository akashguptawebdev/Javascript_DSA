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

    insert(data){
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

        if (!this.head) return;

        while(current !== null && current.data != key){
            current = current.next;
        }

        if (!current) return;
        newNode.next = current.next;
        current.next = newNode

    }

    delete(data){
        let current = this.head;
        let prev = null;

        if(current.data == data){
            this.head = current.next;
            return;
        }

        while(current && current.data != data){
            prev = current;
            current = current.next;
        }

        if(!current){
            return
        }
        prev.next = current.next;
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

ll.insert(0);
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(5);
ll.delete(0)
ll.traverse();
