import { ERROR_MESSAGES } from './constants.js';

const validator = Object.freeze({
  budget(budget) {
    if (budget.trim() === '') throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    if (budget.includes(' ')) throw new Error(ERROR_MESSAGES.BLANK_INPUT);
    if (budget % 1000 !== 0) throw new Error(ERROR_MESSAGES.INVAILD_BUDGET_UNIT);
  },
});

export default validator;
