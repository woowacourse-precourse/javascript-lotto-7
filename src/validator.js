import { ERROR_MESSAGES } from './constants.js';

const validator = Object.freeze({
  budget(budget) {
    if (budget.trim() === '') throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    if (budget.includes(' ')) throw new Error(ERROR_MESSAGES.BLANK_INPUT);
    if (budget % 1000 !== 0) throw new Error(ERROR_MESSAGES.INVAILD_BUDGET_UNIT);
  },

  bonusNumber(bonusNumber, winningNumbers) {
    if (bonusNumber.trim() === '') {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
    if (bonusNumber.includes(' ')) {
      throw new Error(ERROR_MESSAGES.BLANK_INPUT);
    }
    if (bonusNumber < 1 || bonusNumber > 45 || !Number.isInteger(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
    }
    if (winningNumbers.getNumbers().includes(Number(bonusNumber))) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  },
});

export default validator;
