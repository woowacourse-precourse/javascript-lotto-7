import { ERROR_MESSAGE } from '../constants/messages.js';

class BonusNumber {
  constructor(number) {
    this.#checkEmptyInput(number);
    this.bonusNumber = number;
  }

  #checkEmptyInput(number) {
    if (!number || number.trim() === '') {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_COUNT);
    }
  }
}

export default BonusNumber;
