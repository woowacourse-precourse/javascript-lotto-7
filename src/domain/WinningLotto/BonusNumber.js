import LottoNumber from "../../LottoNumber.js";
import isMatched from "../utils/isMatched.js";
import { DOMAIN_ERRORS } from "../../constant/Error.js";

class BonusNumber extends LottoNumber {
  constructor(number, winningLotto) {
    super(number);
    this.#validateBonus(number, winningLotto);
  }

  #validateBonus(number, winningLotto) {
    if (isMatched(number, winningLotto)) {
      throw new Error(DOMAIN_ERRORS.DUPLICATE_BONUS);
    }
  }
}

export default BonusNumber;
