import { ERROR_MESSAGE, LOTTO_NUMBERS_CONDITION, LOTTO_SINGLE_TICKET_PRICE, REGEX } from './constants.js';
import { throwError } from './utils/throwError.js';

export const validatePurchaseAmount = (purchaseAmount) => {
  if (!REGEX.validNumberFormat.test(purchaseAmount)) throwError(ERROR_MESSAGE.purchaseFormatError);
  if (purchaseAmount % LOTTO_SINGLE_TICKET_PRICE) throwError(ERROR_MESSAGE.purchaseAmountError);
};

const isIncludedRegex = (number, regex) => {
  return regex.test(number);
};

const isAllNumberType = (numbers) => {
  return numbers.every((number) => isIncludedRegex(number, REGEX.validNumberFormat));
};

const isUniqueCombination = (numbers) => {
  return new Set(numbers).size === numbers.length;
};

const isValidRange = (numbers) => {
  return numbers.every((number) => isIncludedRegex(number, REGEX.lottoNumberRange));
};

const isUniqueNumber = (numbers, newNumber) => {
  return !numbers.includes(+newNumber);
};

export const validateWinningNumbers = (numbers) => {
  if (!isAllNumberType(numbers)) throwError(ERROR_MESSAGE.inputFormatError);
  if (numbers.length !== 6) throwError(ERROR_MESSAGE.lottoNumbersCountError);
  if (!isUniqueCombination(numbers)) throwError(ERROR_MESSAGE.duplicatedNumbersError);
  if (!isValidRange(numbers)) throwError(ERROR_MESSAGE.lottoNumberRangeError);
};

export const validateBonusNumber = (bonusNumber, winningNumbers) => {
  if (!isIncludedRegex(bonusNumber, REGEX.validNumberFormat)) throwError(ERROR_MESSAGE.lottoNumberTypeError);
  if (!isIncludedRegex(bonusNumber, REGEX.lottoNumberRange)) throwError(ERROR_MESSAGE.lottoNumberRangeError);
  if (!isUniqueNumber(winningNumbers, bonusNumber)) throwError(ERROR_MESSAGE.notUniqueNumberError);
};
