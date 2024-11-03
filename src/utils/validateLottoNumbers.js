import LOTTO_NUMBERS from '../constants/config.js';
import ERROR from '../constants/error.js';
import CustomError from './CustomError.js';

export function validateLength(numbers) {
  if (numbers.length !== LOTTO_NUMBERS.NUMBER_LENGTH) {
    throw new CustomError(ERROR.INVALID_LOTTO_NUMBER_COUNT);
  }
}
