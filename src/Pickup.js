// Note: Every Constants must be named with screaming SNAKE_CASE
import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

const lottoResultTable = {
  0: "당첨 없음",
  1: "3개 일치",
  2: "4개 일치",
  3: "5개 일치",
  4: "5개 일치 + 보너스",
  5: "6개 일치",
};

export class PickUp {
  #lottoArray;
  #jackpot;
  #bonus;
  constructor(jackpot, bonus) {
    this.#lottoArray = [];
    this.#jackpot = jackpot;
    this.#bonus = bonus;
  }
  getJackpot() {
    return this.#jackpot;
  }
  getBonus() {
    return this.#bonus;
  }
  getLottoArrays() {
    return this.#lottoArray;
  }
  pick() {
    this.#lottoArray.push(
      new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b))
    );
  }
  checkJackpot() {
    return this.#lottoArray
      .map((lotto) => lotto.equals(this.#jackpot, this.#bonus))
      .reduce(
        (prev, curr) => {
          if (!prev[lottoResultTable[curr]]) prev[lottoResultTable[curr]] = 1;
          else prev[lottoResultTable[curr]] += 1;
          return prev;
        },
        {
          "당첨 없음": 0,
          "3개 일치": 0,
          "4개 일치": 0,
          "5개 일치": 0,
          "5개 일치 + 보너스": 0,
          "6개 일치": 0,
        }
      );
  }
}
