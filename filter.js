var filter = function (array, fn) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i)) {
      result.push(array[i]);
    }
  }
  return result;
};

const array = [1, 2, 3, 4, 5];
const fn = (num) => num > 2;

const result = filter(array, fn);
console.log(result); // Output: [3, 4, 5]

const result2 = filter(array, (nums) => nums % 2 === 0);
console.log("result 2", result2);
