import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_COUNT } from "./constants/lottoValue.js";

class LottoStore {
  #lottoCount;

  #lottoList;

  LOTTO_PRICE = 1000;

  constructor(money) {
    this.#lottoCount = this.buyLotto(money);
    this.#lottoList = [];
  }

  buyLotto(money) {
    return Math.floor(money / this.LOTTO_PRICE);
  }

  createLotto() {
    for (let i = 0; i < this.#lottoCount; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, LOTTO_COUNT);
      const lotto = new Lotto(numbers);
      this.#lottoList.push(lotto.getLottoNumbers());
    }
    return this.#lottoList;
  }
}

export default LottoStore;
