import Lotto from "./Lotto.js";
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

  // 로또를 생성하는 메서드
  generateLotto() {
    // 구입 개수만큼 로또를 생성해야 함
    const lottoHistory = [];

    for (let i = 0; i < this.#lottoCount; i++) {
      const generatedNumbers = RandomGenerator.generate(1, 45, 6);
      const lotto = new Lotto(generatedNumbers);
      lottoHistory.push(lotto);
    }

    return lottoHistory;
  }
}

export default LottoMachine;
