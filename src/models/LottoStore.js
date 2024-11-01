import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_COUNT } from "../constants/lottoValue.js";

class LottoStore {
  #money;

  #lottoCount;

  #lottoList;

  LOTTO_PRICE = 1000;

  buyLotto(money) {
    this.#money = this.#validate(money);
    this.#lottoCount = Math.floor(money / this.LOTTO_PRICE);
    this.#lottoList = new Array(this.#lottoCount).fill(0).map(LottoStore.#createLotto);
    return this.#lottoList;
  }

  static #createLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, LOTTO_COUNT);
    const lotto = new Lotto(numbers);
    return lotto.getLottoNumbers();
  }

  #validate(money) {
    if (!/^[0-9]+$/.test(money)) throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    return money;
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  getLottos() {
    return this.#lottoList;
  }

  getMoney() {
    return this.#money;
  }
}

export default LottoStore;
