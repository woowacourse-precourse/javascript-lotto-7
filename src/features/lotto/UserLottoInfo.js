import { Console } from "@woowacourse/mission-utils";
import { LOTTO_UNIT_PRICE } from "../../constants/lotto.js";

export class UserLottoInfo {
  #inputPrice;
  #lottoCount;
  #lottos = [];

  constructor(price) {
    this.#inputPrice = price;
    this.#lottoCount = this.#inputPrice / LOTTO_UNIT_PRICE;
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  createLotto() {}
}
