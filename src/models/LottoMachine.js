import { LOTTO } from "../constants/Setting.js";
import Lotto from "../models/Lotto.js";
import LottoHistory from "./LottoHistory.js";
import RandomGenerator from "./RandomGenerator.js";

class LottoMachine {
  #purchaseMoney;
  #lottoCount;

  constructor(purchaseMoney) {
    this.#purchaseMoney = purchaseMoney;
    this.#lottoCount = this.#calculateLottoCount(purchaseMoney);
  }

  #calculateLottoCount(purchaseMoney) {
    return purchaseMoney / LOTTO.PRICE;
  }

  generateLotto() {
    const lottoHistory = new LottoHistory(this.#lottoCount);

    for (let i = 0; i < this.#lottoCount; i++) {
      this.#addLottoHistory(lottoHistory);
    }

    return lottoHistory;
  }

  #addLottoHistory(lottoHistory) {
    const generatedNumbers = RandomGenerator.generate(
      LOTTO.RANGE.MIN,
      LOTTO.RANGE.MAX,
      LOTTO.COUNT
    );
    const generatedLotto = new Lotto(generatedNumbers);
    lottoHistory.addLotto(generatedLotto);
  }
}

export default LottoMachine;
