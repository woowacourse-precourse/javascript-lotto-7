import LOTTO_CONSTANTS from '../constants/lottoConstatns.js';
import ERROR_MESSAGES from '../constants/messages/errorMessages.js';
import lottoGenerator from '../utils/lottoGenerator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((num1, num2) => num1 - num2);
  }

  static getRandomNumbers() {
    const lottoNumbers = lottoGenerator(
      LOTTO_CONSTANTS.START_NUMBER,
      LOTTO_CONSTANTS.END_NUMBER,
      LOTTO_CONSTANTS.LOTTO_LENGTH,
    );

    return new Lotto(lottoNumbers);
  }

  static getPurchaesdLotto(lottoCount) {
    return Array.from(Array(lottoCount), () => Lotto.getRandomNumbers());
  }

  convertNumbersToString() {
    const stirng = `[${this.#numbers.join(', ')}]`;

    return stirng;
  }

  get numbers() {
    return this.#numbers;
  }

  static convertInputToNumbers(input) {
    const winningNumbers = input.split(',').map((str) => parseInt(str.trim(), 10));
    const winningLotto = new Lotto(winningNumbers);

    return winningLotto.numbers;
  }

  #validate(numbers) {
    this.#validateLottoLength(numbers);
    this.#validateType(numbers);
    this.#validateDuplication(numbers);
    this.#validateRange(numbers);
  }

  #validateLottoLength(numbers) {
    if (numbers.length !== LOTTO_CONSTANTS.LOTTO_LENGTH) {
      throw new Error(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_LENGTH_NOT_RIGHT}`);
    }
  }

  #validateType(numbers) {
    if (numbers.some((number) => typeof number !== 'number' || Number.isNaN(number))) {
      throw new Error(
        `${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_NUMBER_TYPE_NOT_NUMBER}`,
      );
    }
  }

  #validateDuplication(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_NUMBER_DUPLICATION}`);
    }
  }

  #validateRange(numbers) {
    const isValid = numbers.some(
      (number) => number > LOTTO_CONSTANTS.END_NUMBER || number < LOTTO_CONSTANTS.START_NUMBER,
    );

    if (isValid) {
      throw new Error(
        `${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_NUMBER_RANGE_NOT_RIGHT}`,
      );
    }
  }
}

export default Lotto;
