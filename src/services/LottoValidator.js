import { LOTTO_ERROR_MESSAGES } from '../constants';
import { throwError } from '../utils/validateUtils.js';

const rules = {
  isNotSixNumbers: (input) => input.length !== 6,
  isNotDubplicated: (input) => input.length !== new Set(input).size,
};

export const validate = (numbers) => {
  if (rules.isNotSixNumbers(numbers)) throwError(LOTTO_ERROR_MESSAGES.notSixNumbers);
  if (rules.isNotDubplicated(numbers)) throwError(LOTTO_ERROR_MESSAGES.notDubplicated);
};
