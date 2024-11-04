import { LOTTO } from "../Constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

export class LottoMarket {
  makeLottoNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBERS_COUNT
    );
    return numbers.sort((a, b) => a - b);
  }

  userLottoNumbers(count) {
    const lottoNumbers = [];
    for (let i = 0; i < count; i++) {
      lottoNumbers.push(this.makeLottoNumbers());
    }
    return lottoNumbers;
  }
}