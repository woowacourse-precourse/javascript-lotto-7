import { LOTTO } from "./constants/Constants.js";
import Lotto from "./Lotto.js";
import { RandomNumberGenerator } from "./utils/RandomNumberGenerator.js";

class User {
  #purchaseAmount;
  #lottos;

  constructor(money) {
    this.#purchaseAmount = money;
    this.#lottos = [];
    this.#issuance();
  }

  async #issuance() {
    for (let i = 0; i < this.#purchaseAmount / LOTTO.PRICE; i++) {
      this.#lottos.push(new Lotto(await RandomNumberGenerator()));
    }
  }
}

export default User;
