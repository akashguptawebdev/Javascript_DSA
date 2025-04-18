// Notion link for Queue Implimentaion :- https://www.notion.so/Queue-1d971281bce98098ba65c4bb166f6245

class Queue{
    constructor(){
        this.Queue = [];
    }

    enqueue(data){
        this.Queue.push(data);
    }

    deQueue(){
        if(this.isEmpty()){
            console.log("cannot dequeu as queue is empty");
            return;
        }
       return this.Queue.shift();
    }
    peek(){
        if(this.isEmpty()){
            console.log("cannot peek as queue is empty");
            return;
        }
        return this.Queue[0];
    }
    isEmpty(){
        return this.Queue.length == 0;
    }
    size(){
        return this.Queue.length;
    }
    clean(){
        this.Queue = [];
    }
    print(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.Queue.join(" -> ");
    }
}

const que = new Queue();

que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4);
que.enqueue(5);
que.enqueue(6);
que.enqueue(7);

que.deQueue();
que.deQueue();
que.deQueue();
que.enqueue(10);
console.log(que.print())