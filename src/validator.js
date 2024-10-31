import { ERROR_MESSAGES } from './constants.js';

const validator = Object.freeze({
  budget(budget) {
    if (budget.trim() === '') throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    if (budget.includes(' ')) throw new Error(ERROR_MESSAGES.BLANK_INPUT);
    if (budget % 1000 !== 0) throw new Error(ERROR_MESSAGES.INVAILD_BUDGET_UNIT);
  },

  bonusNumber(bonusNumber, winningNumbers) {
    if (bonusNumber.trim() === '') throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    if (bonusNumber.includes(' ')) throw new Error(ERROR_MESSAGES.LOTTO_NUMBERS_RANGE);

    if (bonusNumber < 1 || bonusNumber > 45 || !Number.isInteger(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBERS_RANGE);
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBERS_DUPLICATE);
    }
  },
});

export default validator;
