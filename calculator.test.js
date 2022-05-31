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

  test('can add two negative numbers', () => {
    expected = -7;
    actual = sum(-2, -5);
    expect(actual).toBe(expected);
  });

  test('can add a negative number to a positive number', () => {
    expected = 0;
    actual = sum(5, -5);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
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

  test('can subtract two negative numbers', () => {
    expected = -5;
    actual = subtract(-10, -5);
    expect(actual).toBe(expected);
  });

  test('can subtract a negative number from a positive number', () => {
    expected = -5;
    actual = subtract(-10, -5);
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

  test('can multiply two negative numbers', () => {
    expected = 20;
    actual = multiply(-5, -4);
    expect(actual).toBe(expected);
  });

  test('can multiply a negative number and a positive number', () => {
    expected = -30;
    actual = multiply(-5, 6);
    expect(actual).toBe(expected);
  });

  test('can multiply a by zero', () => {
    expected = 0;
    actual = multiply(0, 6);
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

  test('can divide a negtive number by a positive one', () => {
    expected = -3;
    actual = divide(-18, 6);
    expect(actual).toBe(expected);
  });

  test('can divide a negtive number by a negative number', () => {
    expected = 3;
    actual = divide(-18, -6);
    expect(actual).toBe(expected);
  });

  test('can divide a smaller number by a larger number', () => {
    expected = 0.1;
    actual = divide(5, 50);
    expect(actual).toBe(expected);
  });

  test('cannot divide by zero', () => {
    expected = Infinity;
    actual = divide(5, 0);
    expect(actual).toBe(expected);
  });

  test('zero can be divided by another number', () => {
    expected = 0;
    actual = divide(0, 5);
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

  test('can get the modulus of a negative number', () => {
    expected = -1; // why
    actual = modulus(-19, 6);
    expect(actual).toBe(expected);
  });

  test('can get the modulus of two negative numbers', () => {
    expected = -1; // why
    actual = modulus(-19, -6);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
  test('can get whether a positive number is even when it is', () => {
    expected = true;
    actual = even(32);
    expect(actual).toBe(expected);
  });

  test('can get whether a positive number is even when its not', () => {
    expected = false;
    actual = even(31);
    expect(actual).toBe(expected);
  });
});

describe('odd', () => {
  test('can get whether a positive number is odd when it is', () => {
    expected = true;
    actual = odd(15);
    expect(actual).toBe(expected);
  });

  test('can get whether a positive number is odd when its not', () => {
    expected = false;
    actual = odd(12);
    expect(actual).toBe(expected);
  });
});
