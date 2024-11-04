import { ErrorMessage } from '../../constants/ErrorMessage.js';
import { MagicNumber } from '../../constants/MagicNumber.js';

class LottoNumValidator {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (numbers.some(num => num === undefined || num === null || num === '')) {
      throw new Error(ErrorMessage.INVALID_INPUT);
    }
    if (numbers.some(num => num < MagicNumber.LOTTO_START || num > MagicNumber.LOTTO_END)) {
      throw new Error(ErrorMessage.OVER_RANGE);
    }
    if (numbers.some(num => isNaN(num))) {
      throw new Error(ErrorMessage.NOT_A_NUMBER);
    }
  }
}
export default LottoNumValidator;
