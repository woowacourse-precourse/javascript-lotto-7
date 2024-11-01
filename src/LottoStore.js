import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_COUNT } from "./constants/lottoValue.js";

class LottoStore {
  #lottoCount;

  #lottoList;

  LOTTO_PRICE = 1000;

  constructor(money) {
    this.#lottoCount = this.buyLotto(money);
    this.#lottoList = new Array(this.#lottoCount).fill(0).map(LottoStore.#createLotto);
  }

  buyLotto(money) {
    return Math.floor(money / this.LOTTO_PRICE);
  }

  static #createLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, LOTTO_COUNT);
    const lotto = new Lotto(numbers);
    return lotto.getLottoNumbers();
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  getLottos() {
    return this.#lottoList;
  }
}

export default LottoStore;
