class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// const stack = new Stack();

// stack.push(29);
// stack.peek(12);
// stack.peek(15);

// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());

var reverse = function (arr) {
  const result = [];
  const stack = new Stack();

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  while (!stack.isEmpty()) {
    result.push(stack.pop());
  }

  return result;
};

const test = [1, 2, 3, 4, 5];
console.log(reverse(test));
