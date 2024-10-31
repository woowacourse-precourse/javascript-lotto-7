import * as Validator from '../util/Validator.js';
import { ERROR_MESSAGE } from './constants/Message.js';

const validateEmptyInput = (inputValue) => {
  if (Validator.isBlank(inputValue)) {
    throw new Error(ERROR_MESSAGE.ERROR_INPUT_EMPTY_VALUE);
  }

  if (Validator.isNull(inputValue)) {
    throw new Error(ERROR_MESSAGE.ERROR_INPUT_NULL_VALUE);
  }

  if (Validator.isUndefined(inputValue)) {
    throw new Error(ERROR_MESSAGE.ERROR_INPUT_UNDEFINED_VALUE);
  }
}

const validateZeroInput = (inputValue) => {
  if (Validator.isZero(inputValue)) {
    throw new Error(ERROR_MESSAGE.ERROR_INPUT_ZERO_VALUE);
  }
}

const checkValidInput = (inputValue) => {
  validateEmptyInput(inputValue);
  validateZeroInput(inputValue);
}

const validateNumericInput = (inputValue) => {
  if (!Validator.isNumeric(inputValue)) {
    throw new Error(ERROR_MESSAGE.ERROR_INPUT_ONLY_NUMERIC(inputValue));
  }
}

const validateAmountRule = (amount, maxAmount, amountUnit) => {
  if (Validator.isGreaterThan(amount, maxAmount)) {
    throw new Error(ERROR_MESSAGE.ERROR_PURCHASE_AMOUNT_EXCEEDED(maxAmount, amount));
  }

  if (!Validator.isDivisibleByDivisor(amount, amountUnit)) {
    throw new Error(ERROR_MESSAGE.ERROR_INCORRECT_AMOUNT_UNIT(amount, amountUnit));
  }
}

const validateAmountLessThanMaxAmount = (amount, maxAmount) => {
  if (!Validator.isLessThan(amount, maxAmount)) {
    throw new Error(ERROR_MESSAGE.ERROR_CONFIG_MAX_PURCHASE_AMOUNT_EXEEDED(amount, maxAmount))
  }
}

const checkValidNumberRange = (minNumber, maxNumber) => {
  if (!Validator.isLessThan(minNumber, maxNumber) || Validator.isEqualTo(minNumber, maxNumber)) {
    throw new Error(ERROR_MESSAGE.ERROR_CONFIG_INVALID_LOTTO_NUMBER_RANGE(minNumber, maxNumber));
  }
}

const validateLottoNumberCountInRange = (count, startNumber, endNumber) => {
  const validLottoNumberCount = endNumber - startNumber + 1;

  if (!Validator.isGreaterThan(validLottoNumberCount, count)) {
    throw new Error(ERROR_MESSAGE.ERROR_CONFIG_COUNT_GREATER_THAN_ALL_LOTTO_NUMBERS(count, validLottoNumberCount));
  }
}

const validateLottoNumberInRange = (number, startNumber, endNumber) => {
  if (!Validator.isNumberInRange(number, startNumber, endNumber)) {
    throw new Error(ERROR_MESSAGE.ERROR_NUMBER_OUT_OF_RANGE(number, startNumber, endNumber));
  }
}

const validateLottoNumberCount = (inputcount, numberCount) => {
  if (inputcount !== numberCount) {
    throw new Error(ERROR_MESSAGE.ERROR_INCORRECT_LOTTO_NUMBER_COUNT(inputcount, numberCount));
  }
}

const validateDuplicateNumbers = (numbers) => {
  if (Validator.isDuplicateValueInArray(numbers)) {
    throw new Error(ERROR_MESSAGE.ERROR_DUPLICATE_NUMBER);
  }
}
export function validateLottoAmountRule(amount, maxAmount) {
  checkValidInput(amount);
  checkValidInput(maxAmount);

  validateAmountLessThanMaxAmount(amount, maxAmount);
}

export function validateLottoNumberRule(count, startNumber, endNumber) {
  checkValidInput(count);
  checkValidInput(startNumber);
  checkValidInput(endNumber);

  checkValidNumberRange(startNumber, endNumber);
  validateLottoNumberCountInRange(count, startNumber, endNumber);
}

export function validatePurchaseAmount(amount, maxAmount, amountUnit) {
  checkValidInput(amount);
  validateNumericInput(amount);

  validateAmountRule(amount, maxAmount, amountUnit);
}

export function validateLottoNumbers(numbers, numberCount, numberRange) {
  validateLottoNumberCount(numbers.length, numberCount);
  numbers.forEach((number) => validateLottoNumberInRange(number, numberRange.startNumber, numberRange.endNumber));
  validateDuplicateNumbers(numbers);
}


