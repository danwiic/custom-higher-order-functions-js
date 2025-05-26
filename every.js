var every = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) return false;
  }
  return true;
};

const arrWithEven = [2, 4, 6, 8, 10];
const arrWithoutEven = [1, 3, 5, 7];

const test1 = every(arrWithEven, (val) => val % 2 === 0);
const test2 = every(arrWithoutEven, (val) => val % 2 === 0);

console.log("Arr with even", test1);
console.log("Arr without even", test2);
