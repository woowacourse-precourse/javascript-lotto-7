import Lotto from "./Lotto.js";
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
    return purchaseMoney / 1000;
  }

  generateLotto() {
    const lottoHistory = new LottoHistory(this.#lottoCount);

    for (let i = 0; i < this.#lottoCount; i++) {
      this.#addLottoHistory(lottoHistory);
    }

    return lottoHistory;
  }

  #addLottoHistory(lottoHistory) {
    const generatedNumbers = RandomGenerator.generate(1, 45, 6);
    const generatedLotto = new Lotto(generatedNumbers);
    lottoHistory.addLotto(generatedLotto);
  }
}

export default LottoMachine;
