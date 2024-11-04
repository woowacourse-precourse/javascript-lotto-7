import { INPUT_ERROR_MESSAGE } from '../constant/errorMessage.js';
import {
  isCorrectLength,
  isCorrectRange,
  isNoOverlap,
} from '../util/validate.js';

class WinningLotto {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateNumber(numbers);
    this.#validateBonusNumber(bonusNumber);
    this.#validate(numbers, bonusNumber);
    this.numbers = numbers;
    this.bonusNumber = bonusNumber;
  }

  #validate(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error('[ERROR]');
    }
  }

  #validateNumber(numbers) {
    if (isCorrectLength(numbers.length)) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.CORRECT_NUMBERS}`);
    }
    const validate = numbers.every((number) => isCorrectRange(number));
    if (validate) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.CORRECT_RANGE}`);
    }
    if (isNoOverlap(numbers)) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.NO_OVERLAP}`);
    }
  }

  #validateBonusNumber(bonusNumber) {
    if (isCorrectRange(bonusNumber)) {
      throw new Error(`[ERROR] ${INPUT_ERROR_MESSAGE.CORRECT_RANGE}`);
    }
  }

  countWinningNumber(lotto) {
    const winningNumber = lotto.getNumbers().reduce((acc, current) => {
      if (this.numbers.includes(current)) {
        return acc + 1;
      }
      return acc;
    }, 0);

    if (lotto.getNumbers().includes(this.bonusNumber)) {
      return [winningNumber, true];
    }
    return [winningNumber, false];
  }

  isBonus(lotto) {
    if (lotto.includes(this.bonusNumber)) {
      return true;
    }
    return false;
  }
}

export default WinningLotto;
