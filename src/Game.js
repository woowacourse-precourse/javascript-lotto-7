import { Random } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class Game {
  constructor() {}

  static buyLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }
}

export default Game;
