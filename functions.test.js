import { length } from './functions.js';

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
