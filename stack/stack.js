// Notion link for stack Implimentaion :- https://www.notion.so/Stack-1d971281bce9806a9e5cc9df2e165d38

class stack {
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data);
    };

    pop(){
       return this.stack.pop();
    };

    peek(){
        return this.stack[this.stack.length-1];
    };

    isEmpty(){
        return this.stack.length === 0;
    }
    print() {
        if (this.isEmpty()) {
          console.log("Stack is empty.");
        } else {
          console.log("Stack contents (top -> bottom):", [...this.stack].reverse());
        }
      }
}

const st = new stack();

st.push(0)
st.push(1)
st.push(2)
st.push(3)
st.print()
