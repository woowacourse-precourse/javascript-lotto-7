import { DOMAIN_ERRORS } from "../../constant/Error.js";
import { LOTTO_CONFIG } from "../../constant/LottoConfig.js";

class Cost {
  #cost;
  #count;

  constructor(cost) {
    Cost.#validateChangeExist(cost);
    this.#cost = cost;
    this.#count = cost / LOTTO_CONFIG.PRICE;
  }

  get cost() {
    return this.#cost;
  }

  get count() {
    return this.#count;
  }

  static #validateChangeExist(cost) {
    if (cost % LOTTO_CONFIG.PRICE !== 0) {
      throw new Error(DOMAIN_ERRORS.CHANGE_EXIST);
    }
  }
}

export default Cost ;
