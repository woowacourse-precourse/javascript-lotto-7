import { Console } from '@woowacourse/mission-utils';
import {
  ERROR_MESSAGES,
  LOTTO_NUM_MAX,
  LOTTO_NUM_MIN,
} from '../constant/constant.js';

class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, winningNumbers) {
    this.#validate(bonusNumber);
    this.#checkInclude(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber) {
    if (bonusNumber < LOTTO_NUM_MIN || bonusNumber > LOTTO_NUM_MAX) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
    }
    if (bonusNumber % 1 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_INTEGER);
    }
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_COUNT);
    }
  }

  #checkInclude(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER_DUPLICATE);
    }
  }
}

export default BonusNumber;
