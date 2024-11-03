import {
  NUMBERS_ERROR,
  PURCHASE_AMOUNT_ERROR,
} from "../constants/errorMessage.js";
import { LOTTO_PRICE } from "../constants/gameRules.js";
import { checkDuplicateValueInArray } from "./checkDuplicateValue.js";

export const validatePurchaseAmount = (purchaseAmount) => {
  if (Number.isNaN(purchaseAmount)) {
    throw new Error(PURCHASE_AMOUNT_ERROR.NOT_A_NUMBER);
  }

  if (purchaseAmount !== 0 && !purchaseAmount) {
    throw new Error(PURCHASE_AMOUNT_ERROR.EMPTY_VALUE);
  }

  if (purchaseAmount < LOTTO_PRICE) {
    throw new Error(PURCHASE_AMOUNT_ERROR.UNDER_MIN_PRICE);
  }

  if (purchaseAmount % 1000 !== 0) {
    throw new Error(PURCHASE_AMOUNT_ERROR.NOT_DIVIDED);
  }
};

export const validateNumbers = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(NUMBERS_ERROR.COUNT_NOT_MET);
  }

  if (checkDuplicateValueInArray(numbers)) {
    throw new Error(NUMBERS_ERROR.DUPLICATE_NUMBERS);
  }

  numbers.forEach((number) => {
    if (Number.isNaN(number)) {
      throw new Error(NUMBERS_ERROR.NOT_A_NUMBER);
    }

    if (number < 1 || number > 45) {
      throw new Error(NUMBERS_ERROR.INVALID_RANGE);
    }

    if (!Number.isInteger(number)) {
      throw new Error(NUMBERS_ERROR.NOT_AN_INTEGER);
    }
  });
};
