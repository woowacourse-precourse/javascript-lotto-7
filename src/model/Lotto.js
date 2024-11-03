import { Exception } from '../Utils.js';
import { LOTTO_NUMBER_LENGTH, LOTTO_NUMBER_RANGE } from '../Constants.js';
import LottoValidator from './LottoValidator.js';

class Lotto {
  /** @type {number[]} */
  #numbers;

  /** @param {number[]} numbers */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /** @param {number[]} numbers */
  #validate(numbers) {
    this.#validateNumber(numbers);
    this.#validateLength(numbers);
    this.#validateRange(numbers);
    this.#validateDuplicated(numbers);
  }

  /** @param {number[]} numbers */
  #validateNumber(numbers) {
    if (!LottoValidator.isSafeNumberAll(numbers)) {
      throw new Exception('유효하지 않은 로또 번호입니다');
    }
  }

  /** @param {number[]} numbers */
  #validateLength(numbers) {
    if (!LottoValidator.isCorrectLength(numbers)) {
      throw new Exception(`로또 번호는 ${LOTTO_NUMBER_LENGTH}개여야 합니다.`);
    }
  }

  /** @param {number[]} numbers */
  #validateRange(numbers) {
    const [MIN, MAX] = LOTTO_NUMBER_RANGE;

    if (!LottoValidator.isInRangeAll(numbers)) {
      throw new Exception(`로또 번호는 ${MIN}에서 ${MAX}사이여야 합니다.`);
    }
  }

  /** @param {number[]} numbers */
  #validateDuplicated(numbers) {
    if (LottoValidator.isDuplicated(numbers)) {
      throw new Exception('로또 번호는 중복될 수 없습니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
