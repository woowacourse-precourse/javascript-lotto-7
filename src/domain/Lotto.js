import utils from '../utils/utils.js';
import VALUES from '../constants/values.js';
import MESSAGES from '../constants/messages.js';

class Lotto {
  static #FORMAT = /^\d+(,\d+)*$/;

  static #MESSAGE = {
    format: '[ERROR] 쉼표와 숫자를 제외한 다른 문자를 입력했습니다.',
    size: '[ERROR] 숫자를 6개 입력하지 않았습니다.',
  };

  #numbers;

  constructor(numbersInput) {
    this.#updateNumbers(numbersInput);
    this.#validate(numbersInput);
  }

  #updateNumbers(numbersInput) {
    const numbers = Lotto.#convertStringToNumericArray(numbersInput);
    this.#numbers = utils.sortRandoms(numbers);
  }

  static #convertStringToNumericArray(numbersInput) {
    const numbers = [];

    numbersInput.split(VALUES.separator).forEach((string) => {
      numbers.push(Number(string));
    });

    return numbers;
  }

  #validate(numbersInput) {
    utils.validateEmpty(numbersInput);
    Lotto.#validateFormat(numbersInput);
    this.#validateSize();

    this.#numbers.forEach((number) => {
      this.#validateDuplications(number);
      utils.validateSafeInteger(number);
      utils.validateRange(number);
    });
  }

  static #validateFormat(numbersInput) {
    if (!Lotto.#FORMAT.test(numbersInput)) {
      throw new Error(Lotto.#MESSAGE.format);
    }
  }

  #validateSize() {
    if (this.#numbers.length !== VALUES.range.size) {
      throw new Error(Lotto.#MESSAGE.size);
    }
  }

  #validateDuplications(number) {
    const firstIndex = this.#numbers.indexOf(number);
    const lastIndex = this.#numbers.lastIndexOf(number);

    if (firstIndex !== lastIndex) {
      throw new Error(MESSAGES.duplications);
    }
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
