import { Console } from "@woowacourse/mission-utils";
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

  matching(winning, bonus) {
    let result = [];

    this.#lottos.forEach((lotto) => {
      result.push([lotto.matchingWinning(winning), lotto.matchingBonus(bonus)]);
    });

    return result;
  }

  returnRate(totalPrize) {
    return Calculator.returnRate(this.#purchaseAmount, totalPrize);
  }
}

export default User;
