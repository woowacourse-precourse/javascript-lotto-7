import { Console } from "@woowacourse/mission-utils";
import { LOTTO_NUMBER_COUNT, LOTTO_UNIT_PRICE } from "../../constants/lotto.js";
import Lotto from "./Lotto.js";
import { generateRandomNum } from "../../utils/generateRandomNum.js";
import { printOneLine } from "../../utils/console.js";

export class UserLottoInfo {
  #lottoCount;
  #lottos;
  #matchInfo;

  constructor(price) {
    this.#lottoCount = price / LOTTO_UNIT_PRICE;
    this.#lottos = [];
    this.#matchInfo = { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  get lottos() {
    return this.#lottos;
  }

  createLotto() {
    for (let i = 0; i < this.#lottoCount; i++) {
      const lotto = new Lotto(generateRandomNum(LOTTO_NUMBER_COUNT));
      lotto.orderNumbers();
      this.#lottos.push(lotto);
    }
  }
  checkLottoMatch(winningLotto, bonusBall) {
    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.countLottoMatches(winningLotto.numbers);
      const matchBonus = lotto.hasBonusBall(bonusBall);
      console.log(matchCount, matchBonus);
      //   this.#matchInfo[matchCount] += 1;
    });
  }
}
