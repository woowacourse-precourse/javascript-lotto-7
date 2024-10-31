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

  matching(winning, bonus) {
    let result = [];

    this.#lottos.forEach((lotto) => {
      result.push([lotto.matchingWinning(winning), lotto.matchingBonus(bonus)]);
    });

    return result;
  }
}

export default User;
