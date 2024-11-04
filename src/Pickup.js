// Note: Every Constants must be named with screaming SNAKE_CASE
import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { LOTTO_RESULT_TABLE, INITIAL_LOTTO_RESULT_TABLE } from "./Constant.js";

export class PickUp {
  #lottoArray;
  #jackpot;
  #bonus;
  constructor() {
    this.#lottoArray = [];
    this.#jackpot = [];
    this.#bonus = 0;
  }
  getJackpot() {
    return this.#jackpot;
  }

  setJackpot(value) {
    this.#jackpot = value;
  }

  getBonus() {
    return this.#bonus;
  }

  setBonus(value) {
    this.#bonus = value;
  }

  getLottoArrays() {
    return this.#lottoArray;
  }
  pick() {
    this.#lottoArray.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
  }
  checkJackpot() {
    return this.#lottoArray
      .map((lotto) => lotto.equals(this.#jackpot, this.#bonus))
      .reduce((prev, curr) => {
        if (!prev[LOTTO_RESULT_TABLE[curr]]) prev[LOTTO_RESULT_TABLE[curr]] = 1;
        else prev[LOTTO_RESULT_TABLE[curr]] += 1;
        return prev;
      }, INITIAL_LOTTO_RESULT_TABLE);
  }
}
