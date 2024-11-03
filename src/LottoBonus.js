import { ERROR_MESSAGE } from "./constants/error.js";
import { LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER } from "./constants/lotto.js";

class LottoBonus {
  #number;

  constructor(number, winningLottoNumbers) {
    this.#validate(number, winningLottoNumbers);
    this.#number = number;
  }

  #validate(number, winningLottoNumbers) {
    this.#validateNumber(number);
    this.#validateRange(number);
    this.#validateDuplicateWithWinningNumbers(number, winningLottoNumbers);
  }

  #validateNumber(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_BONUS_NUMBER);
    }
  }

  #validateRange(number) {
    if (number < LOTTO_MIN_NUMBER || number > LOTTO_MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_BONUS_RANGE);
    }
  }

  #validateDuplicateWithWinningNumbers(number, winningNumbers) {
    if (winningNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_LOTTO_BONUS_NUMBER);
    }
  }
}

export default LottoBonus;