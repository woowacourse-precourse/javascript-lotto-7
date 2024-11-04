import { ERROR_MESSAGE } from "./constants/message.js";
import { LOTTO } from "./constants/Constants.js";

class Bonus {
  #bonusNumber;

  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    this.#bonusNumber = Number(bonusNumber);
  }

  validate(bonusNumber, winningNumbers) {
    const parseNumber = Number(bonusNumber);
    this.checkNunNumber(parseNumber);
    this.checkBonusRange(parseNumber);
    this.checkDuplicateBonus(parseNumber, winningNumbers);
  }

  checkNunNumber(parseNumber) {
    if (Number.isNaN(parseNumber)) {
      throw new Error(ERROR_MESSAGE.non_numeric_bonus);
    }
  }

  checkBonusRange(parseNumber) {
    if (parseNumber < LOTTO.minimum || parseNumber > LOTTO.maximum) {
      throw new Error(ERROR_MESSAGE.out_of_range_bonus);
    }
  }

  checkDuplicateBonus(parseNumber, winningNumbers) {
    if (winningNumbers.includes(parseNumber)) {
      throw new Error(ERROR_MESSAGE.duplicate_bonus);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default Bonus;
