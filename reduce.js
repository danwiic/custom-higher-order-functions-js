let nums = [
  {
    price: 11,
    quantity: 2,
  },
  {
    price: 21,
    quantity: 6,
  },
  {
    price: 51,
    quantity: 7,
  },
  {
    price: 44,
    quantity: 3,
  },
  {
    price: 34,
    quantity: 5,
  },
];

const fn = (a, b) => a + b;

const init = 0;

var reduce = function (nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};

const result1 = reduce(
  nums,
  (acc, curr) => {
    const maxTotal = acc.price * acc.quantity;
    const currTotal = curr.price * curr.quantity;
    if (currTotal > maxTotal) {
      return curr;
    }
    return acc;
  },
  { price: 0, quantity: 0 }
);

console.log(result1); // { price: 51, quantity: 7 }

const result2 = reduce(
  nums,
  (acc, curr) => {
    const subtotal = curr.price * curr.quantity;
    acc.subtotals.push({ subtotal });
    acc.total += subtotal;
    return acc;
  },
  { subtotals: [], total: 0 }
);

console.log(result2);

// This example categorizes the total price based on price ranges
const result3 = reduce(
  nums,
  (acc, curr) => {
    if (curr.price < 20) acc.low += curr.price * curr.quantity;
    if (curr.price >= 20 && curr.price < 40)
      acc.mid += curr.price * curr.quantity;
    if (curr.price > 40) acc.high += curr.price * curr.quantity;
    return acc;
  },
  { low: 0, mid: 0, high: 0 }
);
console.log(result3);

// This example return the price range that satisfy the condition
const result4 = reduce(
  nums,
  (acc, curr) => {
    if (curr.price < 20) acc.low = curr.price * curr.quantity;
    if (curr.price >= 20 && curr.price < 40)
      acc.mid = curr.price * curr.quantity;
    if (curr.price > 40) acc.high = curr.price * curr.quantity;
    return acc;
  },
  { low: 0, mid: 0, high: 0 }
);
