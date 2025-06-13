const add = function(arg1, arg2) {
	return arg1 + arg2;
};

const subtract = function(arg1, arg2) {
	return arg1 - arg2;
};

const sum = function(arr) {
	return arr.reduce((prev, curr) => prev += curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((prev, curr) => prev *= curr, 1);
};

const power = function(arg1, arg2) {
  return arg1**arg2;
};

const factorial = function(num) {
	let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
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
