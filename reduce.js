let nums = [1, 2, 3, 4, 5];

const fn = (a, b) => a + b;

const init = 0;

var reduce = function (nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};

const result = reduce(nums, fn, init);
console.log(result);
