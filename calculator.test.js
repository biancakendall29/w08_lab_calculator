// Complete the missing tests for sum. Delete .skip from the definitions in order to let them run.
// Write tests for the other functions you have defined. We want to see at least two tests for each function.

const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 202366;
    actual = sum(123456, 78910);
    expect(actual).toBe(expected);  
  });

  test.skip('can add two negative numbers', () => {
    expected = 3;
    actual = sum(-2, 5);
    expect(actual).toBe(expected);
  });

  test.skip('can add zero', () => {
    expected = 7;
    actual = sum(0, 7);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
