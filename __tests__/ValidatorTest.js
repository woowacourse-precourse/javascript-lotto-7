import ERROR_MESSAGE from '../src/constants/ErrorConstant';
import Validator from '../src/utils/Validator';

describe('Validator', () => {
  test.each([
    {
      inputPurchasePrice: '1000.555',
      errorMessage: ERROR_MESSAGE.PURCHASE_PRICE_IS_NOT_INTEGER,
    },
    {
      inputPurchasePrice: '천원',
      errorMessage: ERROR_MESSAGE.PURCHASE_PRICE_IS_NOT_A_NUMBER,
    },
    {
      inputPurchasePrice: '-5000',
      errorMessage: ERROR_MESSAGE.PURCHASE_PRICE_IS_NEGATIVE,
    },
    {
      inputPurchasePrice: '0',
      errorMessage: ERROR_MESSAGE.PURCHASE_PRICE_IS_ZERO,
    },
    {
      inputPurchasePrice: '5500',
      errorMessage: ERROR_MESSAGE.PURCHASE_PRICE_AMOUNT_UNTI_MESSAGE,
    },
  ])('validatePurchasePrice()', ({ inputPurchasePrice, errorMessage }) => {
    expect(() => Validator.validatePurchasePrice(inputPurchasePrice)).toThrow(
      `[ERROR] ${errorMessage}`,
    );
  });
});
