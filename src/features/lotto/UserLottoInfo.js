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
    this.#matchInfo = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  get lottos() {
    return this.#lottos;
  }
  get matchInfo() {
    return this.#matchInfo;
  }

  saveMatchInfo(matchCount, matchBonus) {
    if (matchCount < 3) return;
    const matchBonusCase = {
      true: 2,
      false: 3,
    };
    const matchCase = {
      6: 1,
      5: matchBonusCase[matchBonus],
      4: 4,
      3: 5,
    };
    this.#matchInfo[matchCase[matchCount]] += 1;
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
      this.saveMatchInfo(matchCount, matchBonus);
    });
  }
}
