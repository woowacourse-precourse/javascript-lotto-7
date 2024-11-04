import { LOTTO } from "../Constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

export class LottoMarket {
  makeLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < LOTTO.NUMBERS_COUNT) {
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