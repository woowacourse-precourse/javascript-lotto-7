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
    return this; // 이러면 setter를 chaining할 수 있다.
  }

  getBonus() {
    return this.#bonus;
  }

  setBonus(value) {
    this.#bonus = value;
    return this; // 이러면 setter를 chaining할 수 있다.
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
      .reduce((previous, current) => {
        if (!previous[LOTTO_RESULT_TABLE[current]]) {
          previous[LOTTO_RESULT_TABLE[current]] = 1;
          return previous;
        }
        previous[LOTTO_RESULT_TABLE[current]] += 1;
        return previous;
      }, INITIAL_LOTTO_RESULT_TABLE);
  }
}
