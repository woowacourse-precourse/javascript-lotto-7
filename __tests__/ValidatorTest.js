import { validatePurchaseAmount } from '../src/util/validator.js';

describe('validatorTest', () => {
  describe('validatePurchaseAmount', () => {
    test('should throw error when input is wrong', () => {
      const inputs = ['100', '100k', '1100', '200000'];

      inputs.forEach((input) => {
        expect(() => validatePurchaseAmount(input)).toThrow();
      });
    });

    test('should not throw error when input is correct', () => {
      const inputs = ['1000', '2000', '100000'];

      inputs.forEach((input) => {
        expect(() => validatePurchaseAmount(input)).not.toThrow();
      });
    });
  });
});
