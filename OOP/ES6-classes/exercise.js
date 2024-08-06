class Stack {
  #stack = [];

  push(item) {
    this.#stack.push(item);
  }
  pop() {
    if (this.#stack.length > 0) {
      return this.#stack.pop();
    }
    throw new Error("Stack is empty");
  }
  peek() {
    if (this.#stack.length > 0) {
      return this.#stack[this.#stack.length - 1];
    }
    throw new Error("Stack is empty");
  }

  get count(){
    return this.#stack.length
  }
  
}

const myStack = new Stack();
myStack.push("a");
myStack.push("b");
myStack.push("c");

console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
