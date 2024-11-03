import { ERROR_MESSAGE, CONDITIONS } from './constants.js';

class Validator {
  payment(number) {
    this.#checkEmpty(number);
    const payment = Number(number.trim());
    this.#checkNumber(payment);
    this.#checkPositiveInteger(payment);
    this.#checkCanUnit(payment);
    this.#checkWithinLimit(payment);
  }

  lottoNumbers(numbers) {
    this.#checkNumberCount(numbers);
    this.#checkDuplicates(numbers);
  }

  winningNumbers(numbers) {
    this.#checkEmpty(numbers);
    this.#checkWinningNumbersFormat(numbers.trim());
    const winningNumbers = numbers.trim().split(',').map(Number);
    winningNumbers.forEach((winningNumber) => {
      this.#checkNumberRange(winningNumber);
    });
  }

  bonusNumber(number, winningLotto) {
    this.#checkEmpty(number);
    const bonusNumber = Number(number.trim());
    this.#checkNumber(bonusNumber);
    this.#checkNumberRange(bonusNumber);
    this.#checkIncludeNumber(bonusNumber, winningLotto);
  }

  #checkEmpty(input) {
    if (input.trim() === '') throw new Error(ERROR_MESSAGE.INPUT_EMPTY);
  }

  #checkNumber(input) {
    if (Number.isNaN(input)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
  }

  #checkWinningNumbersFormat(input) {
    if (!CONDITIONS.WINNING_NUMBERS_REGEX.test(input.trim())) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS);
    }
  }

  #checkNumberCount(input) {
    if (input.length !== CONDITIONS.LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.NUMBERS_COUNT);
    }
  }

  #checkDuplicates(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ERROR_MESSAGE.SAME_NUMBER);
    }
  }

  #checkPositiveInteger(number) {
    if (number <= 0 || !Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
    }
  }

  #checkCanUnit(number) {
    if (number % CONDITIONS.PAYMENT_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_UNIT);
    }
  }

  #checkWithinLimit(number) {
    if (number >= CONDITIONS.PAYMENT_LIMIT) {
      throw new Error(ERROR_MESSAGE.OVER_MAXIMUM);
    }
  }

  #checkNumberRange(number) {
    if (number < CONDITIONS.MIN_NUMBER || number > CONDITIONS.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }

  #checkIncludeNumber(number, winningLotto) {
    if (winningLotto.checkBonusNumber(number)) {
      throw new Error(ERROR_MESSAGE.SAME_NUMBER);
    }
  }
}

export default Validator;
