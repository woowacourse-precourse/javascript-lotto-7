import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export class LottoList {
  #lottoList;

  constructor(quantity) {
    const lottoList = [];

    while (lottoList.length < quantity) {
      lottoList.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }

    this.#lottoList = lottoList.map((lotto) => new Lotto(lotto));
  }
}
