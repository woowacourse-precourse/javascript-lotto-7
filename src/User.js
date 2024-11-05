import Lotto from "./Lotto.js";
import { Calculator } from "./utils/Calculator.js";

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

  matchingWinning(winning) {
    let result = [];

    this.#lottos.forEach((lotto) => {
      result.push(lotto.matchingWinning(winning));
    });

    return result;
  }

  matchingBonus(bonus) {
    let result = [];

    this.#lottos.forEach((lotto) => {
      result.push(lotto.matchingBonus(bonus));
    });

    return result;
  }

  returnRate(totalPrize) {
    return Calculator.returnRate(this.#purchaseAmount, totalPrize);
  }
}

export default User;
