import {
  TYPE_ERROR,
  LOTTO_NUMBER_ERROR,
  PURCHASE_AMOUNT_ERROR,
} from "../constants/errorMessage.js";
import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
  NUMBERS_COUNT,
} from "../constants/gameRules.js";
import { hasDuplicates, isDuplicateInArray } from "./checkDuplicateValue.js";

const validateNumberRange = (number) => {
  if (number < LOTTO_MIN_NUMBER || number > LOTTO_MAX_NUMBER) {
    throw new Error(LOTTO_NUMBER_ERROR.INVALID_RANGE);
  }
};

const validateNumberType = (number) => {
  if (Number.isNaN(number)) {
    throw new Error(TYPE_ERROR.NOT_A_NUMBER);
  }

  if (!Number.isInteger(number)) {
    throw new Error(TYPE_ERROR.NOT_AN_INTEGER);
  }
};

const validateValue = (value) => {
  if (!value && value !== 0) {
    throw new Error(TYPE_ERROR.EMPTY_VALUE);
  }
};

export const validatePurchaseAmount = (number) => {
  validateNumberType(number);
  validateValue(number);

  if (number < LOTTO_PRICE) {
    throw new Error(PURCHASE_AMOUNT_ERROR.UNDER_MIN_PRICE);
  }

  if (number % 1000 !== 0) {
    throw new Error(PURCHASE_AMOUNT_ERROR.NOT_DIVIDED);
  }
};

export const validateNumbers = (numbers) => {
  validateValue(numbers);

  if (numbers.length !== NUMBERS_COUNT) {
    throw new Error(LOTTO_NUMBER_ERROR.COUNT_NOT_MET);
  }

  if (hasDuplicates(numbers)) {
    throw new Error(LOTTO_NUMBER_ERROR.DUPLICATE_NUMBERS);
  }

  numbers.forEach((number) => {
    validateNumberType(number);
    validateValue(number);
    validateNumberRange(number);
  });
};

export const validateBonusNumber = (array, number) => {
  validateValue(number);
  validateNumberType(number);

  if (isDuplicateInArray(array, number)) {
    throw new Error(BONUS_NUMBER_ERROR.DUPLICATE_NUMBERS);
  }

  validateNumberRange(number);
};
