import { ERRORS } from '../constants/errors.js';
import Validator from '../utils/validator.js';

class Lotto {
  /** @type {number[]} */
  #numbers;

  /**
   * @param {number[]} numbers - 6개 로또 번호 배열
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * @param {number[]} numbers
   * @throws {Error} 로또 번호가 6개가 아닐 경우
   * @throws {Error} 중복된 번호가 있을 경우
   * @throws {Error} 유효하지 않은 번호가 있을 경우
   */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    this.#validateDuplicateNumbers(numbers);
    numbers.forEach((number) => Validator.validateLottoNumbers(number));
  }

  #validateDuplicateNumbers(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error(ERRORS.INVALID_DUPLICATE_LOTTO_NUMBER);
    }
  }

  /**
   * @returns {number[]} 오름차순으로 정렬된 로또 번호 배열
   */
  getSortedLottoNumbers() {
    return [...this.#numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
