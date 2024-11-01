import { ERROR_MESSAGE } from '../constants/messages.js';

class BonusNumber {
  constructor(number) {
    this.#checkEmptyInput(number);
    this.#checkNumberExceedsLimit(number);
    this.bonusNumber = number;
  }

  #checkEmptyInput(number) {
    if (!number || number.trim() === '') {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_COUNT);
    }
  }

  #checkNumberExceedsLimit(number) {
    const bonusNumber = number.split(',').map((num) => num.trim());
    if (bonusNumber.length > 1) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_EXCEEDS_LIMIT);
    }
  }
}

export default BonusNumber;
