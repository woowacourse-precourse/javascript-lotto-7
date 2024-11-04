import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoMachine {
  generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    return new Lotto(numbers);
  }
}

export default LottoMachine;
