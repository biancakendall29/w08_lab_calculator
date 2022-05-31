// Define the missing functions.
// odd and even should take a single number as an argument and return a boolean to say if the number is odd/even or not.
// The other functions should take two numbers as arguments and return the result of the appropriate operation, eg. sum takes two numbers and returns their sum
// sum is already defined as an example
// You can use named, anonymous or arrow functions

const sum = function(a, b){
    return a + b;
};

const subtract = (a, b) => Math.abs(a - b);
console.log(subtract(2, 3));

const multiply = (a, b) => (a * b);
console.log(multiply(2, 3));

const divide = (a, b) => (a / b);
console.log(divide(6, 3));

const modulus = (a, b) => (a % b);
console.log(modulus(6, 5));

const even = null;

const odd = null;

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
