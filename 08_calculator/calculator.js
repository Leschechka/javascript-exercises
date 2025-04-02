const add = function (num1, num2) {
  return num1 + num2
	
};

const subtract = function (num1, num2) {
  return num1 - num2
	
};

const sum = function (nums) {
  if (nums.length == 0) return 0
  let res = 0
  for (const num of nums) {
    res += num
  }
	return res
};

const multiply = function (nums) {
  if (nums.length == 0) return 0
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res *= nums[i]
  }
  return res
};

const power = function (num, p) {
  return Math.pow(num, p)
	
};

const factorial = function (n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
