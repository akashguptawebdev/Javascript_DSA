class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    // Add an element in the correct position based on priority
    enqueue(value, priority) {
      if (value === undefined || priority === undefined) {
        console.warn("Cannot enqueue without both value and priority.");
        return;
      }
  
      const newNode = { value, priority };
  
      // Insert in correct position
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (priority < this.queue[i].priority) {
          this.queue.splice(i, 1, newNode, this.queue[i]);
          added = true;
          break;
        }
      }
  
      if (!added) {
        this.queue.push(newNode);
      }
    }
  
    // Remove and return the highest priority item
    dequeue() {
      if (this.isEmpty()) {
        console.warn("Queue is empty. Cannot dequeue.");
        return null;
      }
      return this.queue.shift();
    }
  
    // View the front item
    peek() {
      if (this.isEmpty()) {
        console.warn("Queue is empty. Nothing to peek.");
        return null;
      }
      return this.queue[0];
    }
  
    // Check if empty
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // Size of queue
    size() {
      return this.queue.length;
    }
  
    // Print queue for debugging
    print() {
      if (this.isEmpty()) {
        console.log("Priority Queue is empty.");
      } else {
        console.log(
          "Priority Queue (lowest number = highest priority):",
          this.queue.map((node) => `[${node.value}, p:${node.priority}]`).join(" -> ")
        );
      }
    }
  }
  
  // Example Usage
  const pq = new PriorityQueue();
  
  pq.enqueue("Akash", 2);
  pq.enqueue("Code", 10);
  pq.enqueue("Sleep", 3);
  
  pq.print();
  // Output: Priority Queue (lowest number = highest priority): [Code, p:1] -> [Akash, p:2] -> [Sleep, p:3]
  
  console.log(pq.dequeue());  // { value: 'Code', priority: 1 }
  pq.print();
  