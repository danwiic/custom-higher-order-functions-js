var some = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) return true;
  }
  return false;
};

const arrWithEven = [1, 2, 3, 5];
const arrWithoutEven = [1, 3, 5, 7];

const test1 = some(arrWithEven, (val) => val % 2 === 0);
const test2 = some(arrWithoutEven, (val) => val % 2 === 0);

console.log("Arr with even", test1);
console.log("Arr without even", test2);


