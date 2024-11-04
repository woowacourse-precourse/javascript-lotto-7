// @ts-check
class Lotto {
  /** @type {Array<number>} */
  #numbers;

  /**
   *
   * @param {Array<number>} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   *
   * @param {Array<number>} numbers
   */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR]');
    }
  }

  /**
   *
   * @returns {Array<number>}
   */
  getLotteryNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
