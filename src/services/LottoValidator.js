import { CONFIG, LOTTO_ERROR_MESSAGES } from '../constants/index.js';
import { throwError } from '../utils/validateUtils.js';

const rules = {
  isNotSixNumbers: (input) => input.length !== CONFIG.countOfLottoBalls,
  isNotDubplicated: (input) => input.length !== new Set(input).size,
  isNotInteger: (input) => input.some((number) => !Number.isInteger(number)),
  isOutOfRange: (input) => input < CONFIG.minBallNumber || input > CONFIG.maxBallNumber,
};

export const validate = (numbers) => {
  if (rules.isNotSixNumbers(numbers)) throwError(LOTTO_ERROR_MESSAGES.notSixNumbers);
  if (rules.isNotDubplicated(numbers)) throwError(LOTTO_ERROR_MESSAGES.notDubplicated);
  if (rules.isNotInteger(numbers)) throwError(LOTTO_ERROR_MESSAGES.notDubplicated);
  if (rules.isOutOfRange(numbers)) throwError(LOTTO_ERROR_MESSAGES.notDubplicated);
};
