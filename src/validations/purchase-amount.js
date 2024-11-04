import { trimInputAndCheckEmpty } from './common.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

const {
  INVALID_PURCHASE_AMOUNT_NOT_NUMBER,
  INVALID_PURCHASE_AMOUNT_NOT_TICKET_UNIT,
} = ERROR_MESSAGES;

const LOTTO_TICKET_PRICE = 1000;

const isPromptAmountNumber = (amount) => {
  if (Number.isNaN(Number(amount))) {
    throw new Error(INVALID_PURCHASE_AMOUNT_NOT_NUMBER);
  }
  return Number(amount);
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
  return isValidTicketUnit(numericAmount);
};

export default validateAmount;
