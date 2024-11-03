import Lotto from "./Lotto.js";
import { LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER } from "../constant/constants.js";
import { inValidMessages } from "../constant/message.js";

export class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    super(numbers);
    this.#validate(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber) {
    this.#validateRange(bonusNumber);
    this.#validateDuplicate(bonusNumber);
  }

  #validateRange(bonusNumber) {
    if (bonusNumber < LOTTO_MIN_NUMBER || bonusNumber > LOTTO_MAX_NUMBER) {
      throw new Error(inValidMessages.range);
    }
  }

  #validateDuplicate(bonusNumber) {
    if (this.getNumbers().includes(bonusNumber)) {
      throw new Error(inValidMessages.duplicateWithWinningNumbers);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}
