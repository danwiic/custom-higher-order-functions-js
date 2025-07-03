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

// var reverse = function (arr) {
//   const result = [];
//   const stack = new Stack();

//   for (let i = 0; i < arr.length; i++) {
//     stack.push(arr[i]);
//   }
//   while (!stack.isEmpty()) {
//     result.push(stack.pop());
//   }

//   return result;
// };

// const test = [1, 2, 3, 4, 5];
// console.log(reverse(test));

var check = function (str) {
  const stack = new Stack();
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.pop() !== pairs[char]) return false;
    }
  }
  return stack.isEmpty();
};

console.log(check("({[]})")); // true
console.log(check("([)]")); // false
console.log(check("{[]}"));

var evalRPN = function (tokens) {
  const stack = new Stack();

  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      if (token === "+" || token === "-" || token === "/" || token === "*") {
        const right = stack.pop();
        const left = stack.pop();

        switch (token) {
          case "+":
            stack.push(left + right);
            break;
          case "-":
            stack.push(left - right);
            break;
          case "/":
            // To mimic integer division behavior (truncate toward zero)
            stack.push(Math.trunc(left / right));
            break;
          case "*":
            stack.push(left * right);
            break;
          default:
            throw new Error("Invalid operator");
        }
      }
    }
  }

  return stack.pop();
};

const tokens1 = ["2", "1", "+", "3", "*"];
// Explanation: (2 + 1) * 3 = 9

const tokens2 = ["4", "13", "5", "/", "+"];
// Explanation: 4 + (13 / 5) = 6 (integer division truncates decimal)

const tokens3 = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
// More complex expression from LeetCode

console.log(evalRPN(tokens1)); // 9
console.log(evalRPN(tokens2)); // 6
console.log(evalRPN(tokens3)); // 22

