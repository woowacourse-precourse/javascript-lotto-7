import IOProcessor from './IOProcessor.js';

/**
 *
 */
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
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
