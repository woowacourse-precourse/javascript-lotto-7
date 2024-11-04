import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Drawing {
  static drawNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(numbers);
    return lotto.getLottoNumbers();
  }
}

export default Drawing;
