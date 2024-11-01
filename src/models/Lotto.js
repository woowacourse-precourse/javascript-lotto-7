import { ConsoleIO } from '../io/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#printNumbers();
  }

  #printNumbers() {
    ConsoleIO.print(`[${this.#numbers.join(', ')}]`);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 중복되지 않은 로또 번호를 입력해주세요.');
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
