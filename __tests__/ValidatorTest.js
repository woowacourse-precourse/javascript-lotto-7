import ERROR_MESSAGE from '../src/constants/ErrorConstant.js';
import Validator from '../src/utils/Validator.js';

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
    expect(() => Validator.validatePurchasePrice(inputPurchasePrice)).toThrow(`[ERROR] ${errorMessage}`);
  });

  test.each([
    {
      inputWinningNumbers: '1-2-3-4-5-6',
      errorMessage: ERROR_MESSAGE.INVALID_WINNING_NUMBER_FORMAT,
    },
    {
      inputWinningNumbers: '1,2,3,4,5,6,7',
      errorMessage: ERROR_MESSAGE.INVALID_WINNING_NUMBER_COUNT,
    },
    {
      inputWinningNumbers: '1, 2, 3, 4, 5, 6, 7',
      errorMessage: ERROR_MESSAGE.INVALID_WINNING_NUMBER_COUNT,
    },
    {
      inputWinningNumbers: '1,-,3,4,5,6',
      errorMessage: ERROR_MESSAGE.WINNING_NUMBER_IS_NOT_A_NUMBER,
    },
    {
      inputWinningNumbers: '1 ,- , 3, 4 , 5 , 6 ',
      errorMessage: ERROR_MESSAGE.WINNING_NUMBER_IS_NOT_A_NUMBER,
    },
    {
      inputWinningNumbers: '47,1,2,3,4,5',
      errorMessage: ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE,
    },
    {
      inputWinningNumbers: '47, 1, 2, 3, 4, 5',
      errorMessage: ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE,
    },
    {
      inputWinningNumbers: '1.5,2.5,3.5,6.7,8,9',
      errorMessage: ERROR_MESSAGE.INVALID_WINNING_NUMBER_NOT_INTEGER,
    },
  ])('validateWinninNumbers()', ({ inputWinningNumbers, errorMessage }) => {
    expect(() => Validator.validateWinninNumbers(inputWinningNumbers)).toThrow(`[ERROR] ${errorMessage}`);
  });

  test.each([
    {
      inputBonusNumber: '일',
      errorMessage: ERROR_MESSAGE.BONUS_NUMBER_IS_NOT_A_NUMBER,
    },
    {
      inputBonusNumber: '50',
      errorMessage: ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE,
    },
    {
      inputBonusNumber: '10.23',
      errorMessage: ERROR_MESSAGE.INVALID_BONUS_NUMBER_NOT_INTEGER,
    },
  ])('validateBonusNumber()', ({ inputBonusNumber, errorMessage }) => {
    expect(() => Validator.validateBonusNumber(inputBonusNumber)).toThrow(`[ERROR] ${errorMessage}`);
  });
});
