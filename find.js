var find = function (arr, fn) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) return (result = arr[i]);
  }
};

const arr = [1, 2, 3, 4, 5];
const findTest = find(arr, (val) => val === 4);

console.log(findTest);
