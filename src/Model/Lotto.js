import Rules from '../Utils/Rules.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.some((number) => isNaN(number))) {
      throw new Error('[ERROR] 로또 번호는 숫자로 구성되어야 합니다.');
    }
    if (Rules.isDuplicatedValue(numbers)) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
    if (Rules.isNotRangedValue(numbers)) {
      throw new Error('[ERROR] 로또 번호는 1~45 사이의 숫자이어야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getPrintString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
