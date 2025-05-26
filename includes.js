var includes = function (arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
  }
  return false;
};

const arr = [1, 2, 46, 7, 3];
const test1 = includes(arr, 46);
const test2 = includes(arr, 100);
console.log(test1);
console.log(test2);
