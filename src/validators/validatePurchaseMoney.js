import { MONEY_ERROR_MESSAGES, PURCHASE_MONEY } from '../constants/index.js';

function validateIsNumber(money) {
  if (Number.isNaN(money)) {
    throw new Error(MONEY_ERROR_MESSAGES.not_a_number);
  }
}

function validateIsInteger(money) {
  if (!Number.isInteger(money)) {
    throw new Error(MONEY_ERROR_MESSAGES.not_an_integer);
  }
}

function validateIsSafeInteger(money) {
  if (!Number.isSafeInteger(money)) {
    throw new Error(MONEY_ERROR_MESSAGES.unsafe_integer);
  }
}

function validateMinimumAmount(money) {
  if (money < PURCHASE_MONEY.minimum_amount) {
    throw new Error(MONEY_ERROR_MESSAGES.minimum_amount);
  }
}

function validateIsPurchaseUnit(money) {
  if (money % PURCHASE_MONEY.purchase_unit !== PURCHASE_MONEY.zero_amount) {
    throw new Error(MONEY_ERROR_MESSAGES.not_purchase_unit);
  }
}

export function validatePurchaseMoney(money) {
  validateIsNumber(money);
  validateIsInteger(money);
  validateIsSafeInteger(money);
  validateMinimumAmount(money);
  validateIsPurchaseUnit(money);
}
