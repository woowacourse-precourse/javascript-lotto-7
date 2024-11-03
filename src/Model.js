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
}

export default Model;
