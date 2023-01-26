import { length, push, pop, shift, unshift, some, every } from './functions.js';

describe('Given length function', () => {
  describe('When we have an Array', () => {
    test('Then if array`s lenght is 5 the result should be 5', () => {
      const arrayTest = [1, 'pepe', true, 0, 'Cova'];
      const expected = 5;
      const result = length(arrayTest);
      expect(result).toBe(expected);
    });
  });
});

describe('Given push function', () => {
  describe('When we have an Array and a new element', () => {
    test('Then the element adds to the array and the length grows n-element', () => {
      const arrayTest = [1, 'pepe', true, 0, 'Cova'];
      const element = 'Leandro';
      const expected = 6;
      const result = push(arrayTest, element);
      expect(result).toBe(expected);
    });
  });
});

describe('Given pop function', () => {
  describe('When we have an Array with n-elements', () => {
    test('Then the last element will be deleted will be returned', () => {
      const arrayTest = [1, 'pepe', true, 0, 'Cova'];
      const expected = 'Cova';
      const result = pop(arrayTest);
      expect(result).toBe(expected);
    });

    test('Then if the Array is empty, the return will be undefined', () => {
      const arrayTest = [];
      const expected = undefined;
      const result = pop(arrayTest);
      expect(result).toBe(expected);
    });
  });
});

describe('Given shift function', () => {
  describe('When we have an Array with n-elements', () => {
    test('Then the first element will be deleted will be returned', () => {
      const arrayTest = [1, 'pepe', true, 0, 'Cova'];
      const expected = 1;
      const result = shift(arrayTest);
      expect(result).toBe(expected);
    });

    test('Then if the Array is empty, the return will be undefined', () => {
      const arrayTest = [];
      const expected = undefined;
      const result = shift(arrayTest);
      expect(result).toBe(expected);
    });
  });
});

describe('Given unshift function', () => {
  describe('When we have an Array with n-elements', () => {
    test('Then n-element will be added to the beginning of the Array', () => {
      const arrayTest = [1, 'pepe', true, 0, 'Cova'];
      const element = 'Leandro';
      const expected = 6;
      const result = unshift(arrayTest, element);
      expect(result).toBe(expected);
    });

    test('Then if the Array is empty, the return will be undefined', () => {
      const arrayTest = [];
      const element = 'Leandro';
      const expected = undefined;
      const result = unshift(arrayTest, element);
      expect(result).toBe(expected);
    });
  });
});

describe('Given some function', () => {
  describe('When we have an Array and a condition', () => {
    test('Then if at least one element match with the condition, return true', () => {
      const arrayTest = [1, 'pepe', true, 10, 'Cova'];
      const expected = true;
      const result = some(arrayTest);
      expect(result).toBe(expected);
    });

    test('Then if there is no element that match with the condition, return false', () => {
      const arrayTest = [1, 'pepe', true, 11, 'Cova'];
      const expected = false;
      const result = some(arrayTest);
      expect(result).toBe(expected);
    });

    test('Then if the Array is empty, the return will be undefined', () => {
      const arrayTest = [];
      const expected = undefined;
      const result = some(arrayTest);
      expect(result).toBe(expected);
    });
  });
});

describe('Given every function', () => {
  describe('When we have an Array and a condition', () => {
    test('Then if all the element match with the condition, return true', () => {
      const arrayTest = [1, 5, 8, 10];
      const expected = true;
      const result = every(arrayTest);
      expect(result).toBe(expected);
    });

    test('Then if at least one element does not match with the condition, return false', () => {
      const arrayTest = [1, 5, 8, 10, 41];
      const expected = false;
      const result = every(arrayTest);
      expect(result).toBe(expected);
    });

    test('Then if the Array is empty, the return will be undefined', () => {
      const arrayTest = [];
      const expected = undefined;
      const result = every(arrayTest);
      expect(result).toBe(expected);
    });
  });
});
