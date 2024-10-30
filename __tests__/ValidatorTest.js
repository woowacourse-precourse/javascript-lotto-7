import {
  validatePurchaseAmount,
  validateWinningNumbers,
  validateBonusNumber,
} from '../src/util/validator.js';

describe('validatorTest', () => {
  describe('validatePurchaseAmount', () => {
    test('should throw error when input is wrong', () => {
      const inputs = ['100', '100k', '1100', '200000', '', '1000.5'];

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

  describe('validateWinningNumbers', () => {
    test('should throw error when input is wrong', () => {
      const inputs = [
        '1,2,3,4,5,a',
        '1,2,3,4,5,48',
        '',
        '1,2,3,4,5,6,7',
        '1,2,3,4,5',
        '1,2,3,4,5,5',
        '123456',
        '1,2.3,4,5,6',
        '1,2.5,3,4,5,6',
      ];

      inputs.forEach((input) => {
        expect(() => validateWinningNumbers(input)).toThrow();
      });
    });

    test('should not throw error when input is correct', () => {
      const inputs = ['1,2,3,4,5,6', '1,2,3,4,5,7', '1,2,3,4,5,8'];

      inputs.forEach((input) => {
        expect(() => validateWinningNumbers(input)).not.toThrow();
      });
    });
  });

  describe('validateBonusNumber', () => {
    test('should throw error when input is wrong', () => {
      const inputs = ['1', '46', '', 'a', '.', '1.5'];
      const winningNumbers = [1, 2, 3, 4, 5, 6];

      inputs.forEach((input) => {
        expect(() => validateBonusNumber(input, winningNumbers)).toThrow();
      });
    });

    test('should not throw error when input is correct', () => {
      const inputs = ['7', '45', '10'];
      const winningNumbers = [1, 2, 3, 4, 5, 6];

      inputs.forEach((input) => {
        expect(() => validateBonusNumber(input, winningNumbers)).not.toThrow();
      });
    });
  });
});
