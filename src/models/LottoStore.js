import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_COUNT } from "../constants/lottoValue.js";
import Validates from "../validates/Validates.js";
import MoneyError from "../errors/MoneyError.js";
import ObservableModel from "./ObservableModel.js";

class LottoStore extends ObservableModel {
  #money;

  #lottoCount;

  #lottoList;

  LOTTO_PRICE = 1000;

  buyLotto(money) {
    this.#money = this.#validate(money);
    this.#lottoCount = Math.floor(money / this.LOTTO_PRICE);
    this.#lottoList = new Array(this.#lottoCount).fill(0).map(LottoStore.#createLotto);

    this.notify({
      lottoCount: this.#lottoCount,
      lottoList: this.#lottoList,
    });

    return this.#lottoList;
  }

  static #createLotto() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, LOTTO_COUNT);
    const lotto = new Lotto(numbers);
    return lotto.getLottoNumbers();
  }

  #validate(money) {
    if (!Validates.isNumber(money)) throw new MoneyError("숫자만 입력 가능합니다.");
    if (Number(money) < this.LOTTO_PRICE) throw new MoneyError("최소 구매 금액은 1000원입니다.");
    if (Number(money) % this.LOTTO_PRICE) throw new MoneyError("1000원 단위로 구입 가능합니다.");

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
