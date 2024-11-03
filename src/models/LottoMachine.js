import { Random } from "@woowacourse/mission-utils";
import { GAME_CONSTANTS } from "../utils/GameConstants.js";
import Lotto from "./Lotto.js";

class LottoMachine {
  static generateLottos(amount) {
    const lottoCount = amount / GAME_CONSTANTS.PRICE;
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = this.generateLottoNumbers();
      lottos.push(new Lotto(numbers));
    }
    return lottos;
  }

  static generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      GAME_CONSTANTS.MIN_NUMBER,
      GAME_CONSTANTS.MAX_NUMBER,
      GAME_CONSTANTS.NUMBER_COUNT
    );
  }
}

export default LottoMachine;
