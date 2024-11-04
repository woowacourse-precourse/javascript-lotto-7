import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LOTTO from "../constants/lotto.js";
import LOTTO_GAME from "../constants/lottoGame.js";

class LottoGame {
  #lottos;
  #purchasePrice;
  #result;

  constructor(purchasePrice) {
    this.#lottos = [];
    this.#purchasePrice = purchasePrice;
    this.#purchaseLottos();
  }

  #purchaseLottos() {
    while (this.#purchasePrice >= LOTTO.UNIT_PRICE) {
      this.#purchaseUnitLotto();
    }
  }

  #purchaseUnitLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO_GAME.START_NUMBER,
      LOTTO_GAME.END_NUMBER,
      LOTTO_GAME.NUMBER_COUNT
    );
    this.#lottos.push(new Lotto(numbers));
    this.#purchasePrice -= LOTTO.UNIT_PRICE;
  }

  lottoCount() {
    return this.#lottos.length;
  }
}

export default LottoGame;
