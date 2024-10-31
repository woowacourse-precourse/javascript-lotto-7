import Lotto from "./Lotto.js";

class User {
  #purchaseAmount;
  #lottos;

  constructor(money) {
    this.#purchaseAmount = money;
    this.#lottos = [];
  }

  async getLotto(number) {
    this.#lottos.push(new Lotto(number));
  }
}

export default User;
