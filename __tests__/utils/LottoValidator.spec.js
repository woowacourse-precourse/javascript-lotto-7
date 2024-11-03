import { ERROR_MSG } from '../../src/constants/messages';
import {
  validatePurchaseAmount,
  validateWinningNumbers,
} from '../../src/utils/LottoValidator';

describe('utils/LottoValidator', () => {
  describe('validatePurchaseAmount()', () => {
    it.each([
      [1000, null],
      [5000, null],
      [10000, null],
      [1000.5, null],
      ['1000', null],

      [0, ERROR_MSG.INVALID_AMOUNT],
      ['asdf', ERROR_MSG.INVALID_AMOUNT],
      ['-1000', ERROR_MSG.NEGATIVE_AMOUNT],
      ['', ERROR_MSG.INVALID_AMOUNT],
      [null, ERROR_MSG.INVALID_AMOUNT],
      [undefined, ERROR_MSG.INVALID_AMOUNT],
      ['1000asdf', ERROR_MSG.INVALID_AMOUNT],
      [Infinity, ERROR_MSG.MAX_PURCHASE_AMOUNT],
      [110000, ERROR_MSG.MAX_PURCHASE_AMOUNT],
    ])(
      'should throw an error for invalid input %s',
      async (input, expectedError) => {
        if (expectedError) {
          expect(() => validatePurchaseAmount(input)).toThrow(
            `[ERROR] ${expectedError}`,
          );
        } else {
          expect(() => validatePurchaseAmount(input)).not.toThrow();
        }
      },
    );
  });

  describe('validateWinningNumbers()', () => {
    it.each([
      // valid
      ['1,2,3,4,5,6', null],
      ['10,20,30,40,41,42', null],
      ['1,2,3,4,5,45', null], // edge case

      // invalid length
      ['1,2,3,4,5', ERROR_MSG.INVALID_WINNING_NUMBERS],
      ['1,2,3,4,5,6,7', ERROR_MSG.INVALID_WINNING_NUMBERS],

      // duplicate
      ['1,1,1,1,1,1', ERROR_MSG.DUPLICATE_NUMBERS],
      ['1,2,3,4,5,5', ERROR_MSG.DUPLICATE_NUMBERS],
      ['1,1,2,3,4,5', ERROR_MSG.DUPLICATE_NUMBERS],

      // invalid character
      ['a,2,3,c,d,f', ERROR_MSG.INVALID_NUMBER_RANGE],
      ['a,2,3,4,5,6', ERROR_MSG.INVALID_NUMBER_RANGE],
      ['1,b,3,4,5,6', ERROR_MSG.INVALID_NUMBER_RANGE],
      ['1,2,3,4,5,x', ERROR_MSG.INVALID_NUMBER_RANGE],

      // Out of range
      ['0,1,2,3,4,5', ERROR_MSG.INVALID_NUMBER_RANGE],
      ['1,2,3,4,5,46', ERROR_MSG.INVALID_NUMBER_RANGE],
      ['50,51,52,53,54,55', ERROR_MSG.INVALID_NUMBER_RANGE],
      ['-5,1,2,3,4,5', ERROR_MSG.INVALID_NUMBER_RANGE],
    ])('should throw an error for invalid input %s', (input, expectedError) => {
      if (expectedError) {
        expect(() => validateWinningNumbers(input)).toThrow(
          `[ERROR] ${expectedError}`,
        );
      } else {
        expect(() => validateWinningNumbers(input)).not.toThrow();
      }
    });
  });

  //   describe('validateBonusNumber()', () => {});
});
