import { trimInputAndCheckEmpty } from './common.js';
import {
  ERROR_MESSAGES,
  LOTTO_TICKET_PRICE,
  MAX_PURCHASE_AMOUNT,
} from '../constants/constants.js';

const {
  INVALID_PURCHASE_AMOUNT_NOT_NUMBER,
  INVALID_PURCHASE_AMOUNT_NOT_TICKET_UNIT,
  INVALID_PURCHASE_AMOUNT_LIMIT,
} = ERROR_MESSAGES;

const isPromptAmountNumber = (amount) => {
  if (Number.isNaN(Number(amount))) {
    throw new Error(INVALID_PURCHASE_AMOUNT_NOT_NUMBER);
  }
  return Number(amount);
};

const isAmountWithinLimit = (amount) => {
  if (amount > MAX_PURCHASE_AMOUNT) {
    throw new Error(INVALID_PURCHASE_AMOUNT_LIMIT);
  }
  return amount;
};

const isValidTicketUnit = (amount) => {
  if (amount % LOTTO_TICKET_PRICE !== 0) {
    throw new Error(INVALID_PURCHASE_AMOUNT_NOT_TICKET_UNIT);
  }
  return amount;
};

const validateAmount = (amount) => {
  const amountAsString = String(amount);
  const trimmedAmount = trimInputAndCheckEmpty(amountAsString);
  const numericAmount = isPromptAmountNumber(trimmedAmount);
  const result = isAmountWithinLimit(numericAmount);
  return isValidTicketUnit(result);
};

export default validateAmount;
