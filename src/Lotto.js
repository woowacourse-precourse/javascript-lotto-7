import IOProcessor from './IOProcessor.js';
import { ERROR_MESSAGE } from './constant.js';

/**
 *
 */
class Lotto {
  #numbers;

  /**
   *
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#numbers.sort((a, b) => a - b);
  }

  /**
   *
   */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_LENGTH);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE);
    }
  }

  // TODO: 추가 기능 구현

  /**
   *
   */
  getNumbers() {
    return this.#numbers;
  }

  /**
   *
   */
  printLotto() {
    const ioProcessor = new IOProcessor();
    ioProcessor.processOuput(this.#numbers);
  }
}

export default Lotto;
