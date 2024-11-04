import { Random } from "@woowacourse/mission-utils";
import {
  LOTTO_COUNT,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
} from "./constants/lotto.js";

class LottoMachine {
  static createLotto() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_MIN_NUMBER,
      LOTTO_MAX_NUMBER,
      LOTTO_COUNT
    ).sort((a, b) => a - b);
  }

  static createLottos(amount) {
    return Array.from({ length: amount }, () => this.createLotto());
  }
}

export default LottoMachine;
