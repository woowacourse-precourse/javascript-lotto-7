import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_PRICE } from "./constants/gameRules.js";

class LottoGame {
  #lottoCount;
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor(purchaseAmount) {
    this.#lottoCount = purchaseAmount / LOTTO_PRICE;
    this.#lottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = null;
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  setLottos() {
    for (let i = 0; i < this.#lottoCount; i++) {
      this.#lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
  }
}

export default LottoGame;
