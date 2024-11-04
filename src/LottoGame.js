import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO } from "./constants";
import Lotto from "./Lotto";

export default class LottoGame {
  #purchasedLottos;

  constructor() {
    this.#purchasedLottos = [];
  }

  purchaseLottos(amount) {
    const count = Math.floor(amount / LOTTO.PRICE);
    for (let i = 0; i < count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.NUMBERS_PER_TICKET
      );
      this.#purchasedLottos.push(new Lotto(numbers));
    }
    return count;
  }

  getPurchasedLottos() {
    return this.#purchasedLottos.map(lotto => lotto.getNumbers());
  }
}