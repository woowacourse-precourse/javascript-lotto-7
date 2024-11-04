import {
  LOTTO_LENGTH,
  LOTTO_NUMBER_END,
  LOTTO_NUMBER_START,
  ERROR_MESSAGE,
} from './constants.js';
import { throwError } from './utils/throwError.js';
import { isNumber, isNumberInRange } from './utils/validators.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  compare(winningNumbers, bonusNumber) {
    const matchCount = this.#countMatchingNumbers(winningNumbers);
    const hasBonusBall = this.#checkBonusNumber(matchCount, bonusNumber);

    return [matchCount, hasBonusBall];
  }

  #validateNumbers(numbers) {
    this.#checkLength(numbers);
    this.#checkDuplicates(numbers);
    this.#checkIsNumberArray(numbers);
    this.#checkNumberRange(numbers);
  }

  #checkLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throwError(ERROR_MESSAGE.LOTTO_CHECK_LENGTH);
    }
  }

  #checkDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throwError(ERROR_MESSAGE.LOTTO_CHECK_DUPLICATES);
    }
  }

  #checkIsNumberArray(numbers) {
    numbers.forEach((number) => {
      if (!isNumber(number)) {
        throwError(ERROR_MESSAGE.LOTTO_CHECK_NUMBER);
      }
    });
  }

  #checkNumberRange(numbers) {
    numbers.forEach((number) => {
      if (!isNumberInRange(number, LOTTO_NUMBER_START, LOTTO_NUMBER_END)) {
        throwError(ERROR_MESSAGE.LOTTO_CHECK_NUMBER_RANGE);
      }
    });
  }

  #countMatchingNumbers(winningNumbers) {
    return winningNumbers.filter((num) => this.#hasNumber(num)).length;
  }

  #checkBonusNumber(matchCount, bonusNumber) {
    return (
      this.#isBonusNumberCondition(matchCount) && this.#hasNumber(bonusNumber)
    );
  }

  #isBonusNumberCondition(matchCount) {
    return matchCount === LOTTO_LENGTH - 1;
  }

  #hasNumber(number) {
    const num = Number(number);
    return !Number.isNaN(num) && this.#numbers.includes(num);
  }
}

export default Lotto;
