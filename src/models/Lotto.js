import { Random } from '@woowacourse/mission-utils';
import LottoNumberValidator from '../validators/LottoNumberValidator.js';
import { NUMBER } from '../constants/constants.js';

class Lotto {
  #numbers;

  /**
   * @constructor
   * @param {number[]} numbers - 생성된 로또 번호 배열
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 랜덤하게 로또 번호를 생성한다.
   * @returns {number[]} 생성된 로또 번호 배열
   */
  static generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(
      NUMBER.min_range,
      NUMBER.max_range,
      NUMBER.expected_length,
    );
    return numbers.sort((a, b) => a - b);
  }

  /**
   * 로또 번호의 유효성을 검사한다.
   * @param {number[]} numbers - 검사할 로또 번호 배열
   * @private
   */
  #validate(numbers) {
    LottoNumberValidator.validate(numbers);
  }

  /**
   * 로또 번호를 반환한다.
   * @returns {number[]} 로또 번호 배열
   */
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
