import ERROR_MESSAGE from './constants/errorMessage.js';
import LOTTO_BOUNDARY from './constants/magicNumber.js';

class Validator {
  static validateLottoNumbers(numbers) {
    this.#validateNumbersLength(numbers);

    numbers.forEach((number) => {
      this.#validateLottoNumber(number);
    });
  }

  static validateBonusLottoNumber(winningNumbers, bonusNumber) {
    this.#validateLottoNumber(bonusNumber);
    this.#validateContainWinningNumber(winningNumbers, bonusNumber);
  }

  static #validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.PROPER_LOTTO_NUMBERS);
    }
  }

  static #validateLottoNumber(number) {
    this.#validateNumberEmpty(number);
    this.#validateNumberContainString(number);
    this.#validateNumberInBoundary(number);
  }

  static #validateNumberEmpty(number) {
    if (number === '') {
      throw new Error(ERROR_MESSAGE.EMPTY_NUMBERS);
    }
  }

  static #validateNumberContainString(number) {
    if (Number.isNaN(Number(number)) === true) {
      throw new Error(ERROR_MESSAGE.NOT_CONTAIN_STRING_NUMBERS);
    }
  }

  static #validateNumberInBoundary(number) {
    if (number < LOTTO_BOUNDARY.MIN || number > LOTTO_BOUNDARY.MAX) {
      throw new Error(ERROR_MESSAGE.BETWEEN_1_TO_45_NUMBERS);
    }
  }

  static #validateContainWinningNumber(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.CONTAIN_WINNING_NUMBER);
    }
  }
}

export default Validator;
