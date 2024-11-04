import { LOTTO, ERROR_MESSAGE } from '../constants/constants.js';
/**
/**
 * @param {Object} params
 * @param {string} params.command
   @returns {number}
 */
export const MoneyValidation = ({ command }) => {
  if (command === undefined || command.trim() === '') {
    throw new Error(ERROR_MESSAGE.INVALID_EMPTY_INPUT);
  }
  const money = Number(command);
  if (Number.isNaN(money)) {
    throw new Error(ERROR_MESSAGE.INVALID_MONEY_INPUT);
  }

  if (money <= 0) {
    throw new Error(ERROR_MESSAGE.INVALID_BIGGER_THAN_ZERO);
  }

  if (!Number.isInteger(money / LOTTO.PRICE)) {
    throw new Error(ERROR_MESSAGE.INVALID_AMOUNT);
  }
  return money;
};
