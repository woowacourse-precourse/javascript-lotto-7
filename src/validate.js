import { ERROR_MESSAGE, LOTTO_NUMBERS_CONDITION, LOTTO_SINGLE_TICKET_PRICE, REGEX } from './constants.js';
import { throwError } from './utils/throwError.js';

export const validatePurchaseAmount = (purchaseAmount) => {
  if (!REGEX.validNumberFormat.test(purchaseAmount)) throwError(ERROR_MESSAGE.purchaseFormatError);
  if (purchaseAmount % LOTTO_SINGLE_TICKET_PRICE) throwError(ERROR_MESSAGE.purchaseAmountError);
};

const isAllNumberType = (numbers) => {
  return numbers.every((number) => REGEX.validNumberFormat.test(number));
};

const isUniqueCombination = (numbers) => {
  return new Set(numbers).size === numbers.length;
};

const isValidRange = (numbers) => {
  return numbers.every((number) => REGEX.lottoNumberRange.test(number));
};

export const validateWinningNumbers = (numbers) => {
  if (!isAllNumberType(numbers)) throwError(ERROR_MESSAGE.inputFormatError);
  if (numbers.length !== 6) throwError(ERROR_MESSAGE.lottoNumbersCountError);
  if (!isUniqueCombination(numbers)) throwError(ERROR_MESSAGE.duplicatedNumbersError);
  if (!isValidRange(numbers)) throwError(ERROR_MESSAGE.lottoNumberRangeError);
};
