import ERROR_MESSAGE from './constants/errorMessage.js';
import LOTTO_BOUNDARY from './constants/magicNumber.js';

class Validator {
  static validateLottoNumbers(numbers) {
    this.#validateNumbersLength(numbers);
    this.#validateNumbersDuplicate(numbers);

    numbers.forEach((number) => {
      this.#validateNumber(number);
    });
  }

  static validateBonusLottoNumber(winningNumbers, bonusNumber) {
    this.#validateNumber(bonusNumber);
    this.#validateContainWinningNumber(winningNumbers, bonusNumber);
  }

  static #validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_SIX_LENGTH);
    }
  }

  static #validateNumbersDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  static #validateNumber(number) {
    this.#validateNumberEmpty(number);
    this.#validateNumberContainString(number);
    this.#validateNumberInBoundary(number);
  }

  static #validateNumberEmpty(number) {
    if (number === '' || number === null) {
      throw new Error(ERROR_MESSAGE.EMPTY_NUMBER);
    }
  }

  static #validateNumberContainString(number) {
    if (Number.isNaN(Number(number)) === true) {
      throw new Error(ERROR_MESSAGE.CONTAIN_STRING);
    }
  }

  static #validateNumberInBoundary(number) {
    if (number < LOTTO_BOUNDARY.MIN || number > LOTTO_BOUNDARY.MAX) {
      throw new Error(ERROR_MESSAGE.NOT_BETWEEN_1_TO_45_NUMBER);
    }
  }

  static #validateContainWinningNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }
}

export default Validator;
