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
  test('can subtract two small positive numbers', () => {
    expected = 3;
    actual = subtract(5, 2);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => {
    expected = 44546;
    actual = subtract(123456, 78910);
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 10;
    actual = multiply(2, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => {
    expected = 7006652;
    actual = multiply(1234, 5678);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 5;
    actual = divide(15, 3);
    expect(actual).toBe(expected);
  });

  test('can divide a large positive number by a small one', () => {
    expected = 20576;
    actual = divide(123456, 6);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {
  test('can get the modulus of two small positive numbers', () => {
    expected = 3;
    actual = modulus(15, 4);
    expect(actual).toBe(expected);
  });

  test('can get the modulus between two large numbers', () => {
    expected = 372;
    actual = modulus(123456, 789);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {

});

describe('odd', () => {

});
