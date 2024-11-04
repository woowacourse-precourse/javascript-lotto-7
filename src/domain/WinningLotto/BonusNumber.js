import LottoNumber from "../../LottoNumber.js";
import { DOMAIN_ERRORS } from "../../constant/Error.js";

class BonusNumber extends LottoNumber {
  constructor(number, winningLotto) {
    super(number);
    this.#validateBonus(number, winningLotto);
  }

  #validateBonus(number, winningLotto) {
    if (winningLotto.includes(number)) {
      throw new Error(DOMAIN_ERRORS.DUPLICATE_BONUS);
    }
  }
}

export default BonusNumber;
