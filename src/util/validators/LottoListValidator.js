import { ErrorMessage } from '../../constants/ErrorMessage.js';
import { MagicNumber } from '../../constants/MagicNumber.js';

class LottoListValidator {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (numbers.length !== MagicNumber.LOTTO_COUNT) {
      throw new Error(ErrorMessage.NOT_6_NUMS);
    }

    const numSet = new Set(numbers);
    if (numbers.length !== numSet.size) {
      throw new Error(ErrorMessage.DUPLICATED_NUM);
    }
  }
}
export default LottoListValidator;
