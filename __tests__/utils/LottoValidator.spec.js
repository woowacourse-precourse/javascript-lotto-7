import { ERROR_MSG } from '../../src/constants/messages';
import { validatePurchaseAmount } from '../../src/utils/LottoValidator';

describe('utils/LottoValidator', () => {
  describe('validatePurchaseAmount()', () => {
    it.each([
      [1000, null],
      [5000, null],
      [10000, null],
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
      'should throw an error for invalid input "%s"',
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

  //   describe('validateWinningNumbers()', () => {});

  //   describe('validateBonusNumber()', () => {});
});
