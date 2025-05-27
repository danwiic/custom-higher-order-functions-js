class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

var fifo = function (arr) {
  const queue = new Queue();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    queue.enqueue(arr[i]);
  }
  while (!queue.isEmpty()) {
    result.push(queue.dequeue());
  }
  return result;
};

const test = [1, 2, 3, 4, 5];
console.log(fifo(test));
