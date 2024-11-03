// Note: Every Constants must be named with screaming SNAKE_CASE
import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

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
}
