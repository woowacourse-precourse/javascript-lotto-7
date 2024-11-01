import { INPUT_ERROR_MESSAGES } from '../constants/index.js';
import { throwError } from '../utils/validateUtils.js';

const rules = {
  isNotNumber: (input) => !Number.isInteger(Number(input)),
  isNotThousandUnits: (input) => Number(input.slice(-3)) !== 0,
};

export const validateMoneyString = (money) => {
  if (rules.isNotNumber(money)) throwError(INPUT_ERROR_MESSAGES.notNumber);
  if (rules.isNotThousandUnits(money)) throwError(INPUT_ERROR_MESSAGES.notThousandUnits);
};
