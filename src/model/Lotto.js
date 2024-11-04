import validateLottoNumbers from '../validators/LottoNumberValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 로또 번호를 반환하는 메서드
   * @returns {number[]} 로또 번호 배열
   */
  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    validateLottoNumbers(numbers);
  }
}

export default Lotto;
