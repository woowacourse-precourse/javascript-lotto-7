import { LOTTO } from "../Constants.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

export class LottoMarket {
  makeLottoNumbers() {
    const numbers = new Set();
    for (let i = 1; i <= LOTTO.NUMBERS_COUNT; i++) {
      const number = MissionUtils.Random.pickNumberInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER);
      numbers.add(number);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  userLottoNumbers(count) {
    const lottoNumbers = [];
    for (let i = 0; i < count; i++) {
      lottoNumbers.push(this.makeLottoNumbers());
    }
    return lottoNumbers;
  }
}