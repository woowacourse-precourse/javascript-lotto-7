import LottoNumberValidator from '../utils/LottoNumberValidator.js';
import { LOTTO } from '../constant/Constants.js';

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    LottoNumberValidator.countCheck(numbers, LOTTO.WINNING_COUNT);
    LottoNumberValidator.rangeCheck(numbers);
    LottoNumberValidator.duplicationCheck(numbers);
  }
}
