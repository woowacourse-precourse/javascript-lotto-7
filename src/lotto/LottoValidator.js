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

const validateAmountRule = (amount, maxAmount, amountUnit) => {
  if (Validator.isGreaterThanMaxNumber(amount, maxAmount)) {
    throw new Error(ERROR_MESSAGE.ERROR_PURCHASE_AMOUNT_EXCEEDED);
  }

  if (Validator.isNotDivisibleByDivisor(amount, amountUnit)) {
    throw new Error(ERROR_MESSAGE.ERROR_INCORRECT_AMOUNT_UNIT);
  }
}

const validateAmountLessThanMaxAmount = (amount, maxAmount) => {
  if (!Validator.isLessThan(amount, maxAmount)) {
    throw new Error(ERROR_MESSAGE.ERROR_CONFIG_MAX_PURCHASE_AMOUNT_EXEEDED(amount, maxAmount))
  }
}

const checkValidNumberScope = (minNumber, maxNumber) => {
  if (!Validator.isLessThan(minNumber, maxNumber) || Validator.isEqualTo(minNumber, maxNumber)) {
    throw new Error(ERROR_MESSAGE.ERROR_CONFIG_INVALID_LOTTO_NUMBER_SCOPE(minNumber, maxNumber));
  }
}

const validateLottoNumberCount = (count, minNumber, maxNumber) => {
  const validLottoNumberCount = maxNumber - minNumber + 1;

  if (!Validator.isGreaterThan(validLottoNumberCount, count)) {
    throw new Error(ERROR_MESSAGE.ERROR_CONFIG_COUNT_GREATER_THAN_ALL_LOTTO_NUMBERS(count, validLottoNumberCount));
  }
}

export function validateLottoAmountRule(amount, maxAmount) {
  checkValidInput(amount);
  checkValidInput(maxAmount);

  validateAmountLessThanMaxAmount(amount, maxAmount);
}

export function validateLottoNumberRule(count, minNumber, maxNumber) {
  checkValidInput(count);
  checkValidInput(minNumber);
  checkValidInput(maxNumber);

  checkValidNumberScope(minNumber, maxNumber);
  validateLottoNumberCount(count, minNumber, maxNumber);
}

export function validatePurchaseAmount(amount, maxAmount, amountUnit) {
  checkValidInput(amount);
  validateAmountRule(amount, maxAmount, amountUnit);
}


