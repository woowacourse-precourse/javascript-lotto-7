import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {
  LOTTO_PRICE,
  LOTTO_COUNT,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
} from "./constants.js";

class Model {
  buyLottos(money) {
    const PURCHASABLE_LOTTO_AMOUNT = Math.floor(money / LOTTO_PRICE);

    const LOTTOS = [];
    for (let i = 0; i < PURCHASABLE_LOTTO_AMOUNT; i++) {
      const LOTTO_NUMBER = Random.pickUniqueNumbersInRange(
        LOTTO_MIN_NUMBER,
        LOTTO_MAX_NUMBER,
        LOTTO_COUNT,
      );
      LOTTOS.push(new Lotto(LOTTO_NUMBER));
    }
    return LOTTOS;
  }

  getResults(lottos, winningNumbers, bonusNumber) {
    const RESULTS = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      0: 0,
    };

    for (const LOTTO of lottos) {
      const RESULT = LOTTO.getRank(winningNumbers, bonusNumber);
      RESULTS[RESULT]++;
    }

    return RESULTS;
  }
}

export default Model;
