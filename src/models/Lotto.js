import { Random } from '@woowacourse/mission-utils';
import LottoNumberValidator from '../validators/LottoNumberValidator.js';
import { NUMBER } from '../constants/constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(
      NUMBER.min_range,
      NUMBER.max_range,
      NUMBER.expected_length,
    );
    return numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    LottoNumberValidator.validate(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
