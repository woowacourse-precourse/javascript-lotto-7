import { LOTTO_CONFIG } from "./constant/LottoConfig.js";
import { DOMAIN_ERRORS } from "./constant/Error.js";

class LottoNumber {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = Number(number);
  }

  #validate(number) {
    if (number < LOTTO_CONFIG.NUMBER.MIN || number > LOTTO_CONFIG.NUMBER.MAX) {
      throw new Error(DOMAIN_ERRORS.OUT_OF_RANGE);
    }
  }

  get number() {
    return this.#number;
  }
}

export default LottoNumber;
