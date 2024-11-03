import { validateLottoNumber } from "./utils/validation.js";

class BonusNumber {
  #bonusNumber;

  constructor(winningLotto, number) {
    this.#validate(winningLotto, number);
    validateLottoNumber(number);
    this.#bonusNumber = number;
  }

  #validate(winningLotto, number) {
    if (winningLotto.hasSameNumber(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  hasBonusNumberIn(array) {
    return array.includes(this.#bonusNumber);
  }
}

export default BonusNumber;
