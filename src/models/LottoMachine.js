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

  // 로또를 생성하는 메서드
  generateLotto() {
    // 구입 개수만큼 로또를 생성해야 함
    // 메서드 생성 시 반환되는 객체이므로 내부 의존성 생성
    const lottoHistory = new LottoHistory(this.#lottoCount);

    for (let i = 0; i < this.#lottoCount; i++) {
      const generatedNumbers = RandomGenerator.generate(1, 45, 6);
      const lotto = new Lotto(generatedNumbers);
      lottoHistory.addLotto(lotto);
    }

    return lottoHistory;
  }
}

export default LottoMachine;
