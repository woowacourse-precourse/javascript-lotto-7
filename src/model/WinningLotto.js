import { INPUT_ERROR_MESSAGE } from '../constant/errorMessage.js';
import { isCorrectLength, isCorrectRange, isNoOverlap } from '../util/validate';

class WinningLotto {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateNumber(numbers);
    this.#validateBonusNumber(bonusNumber);
    this.numbers = numbers;
    this.bonusNumber = bonusNumber;
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

  getWinningResult(lotto) {
    return lotto.reduce((acc, current) => {
      if (this.numbers.includes(current)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }

  isBonus(lotto) {
    if (lotto.includes(this.bonusNumber)) {
      return true;
    }
    return false;
  }
}

export default WinningLotto;
