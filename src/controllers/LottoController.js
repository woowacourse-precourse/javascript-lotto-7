import { Random } from "@woowacourse/mission-utils";
import Lotto from "../models/Lotto.js";

class LottoController {
  generateLottos(purchaseAmount) {
    const lottos = [];
    const count = purchaseAmount / 1000;

    for (let i = 0; i < count; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(randomNumbers);
      lottos.push(lotto);
    }

    return lottos;
  }

  extractWinningNumbers(winningNumbersInput) {
    return winningNumbersInput.split(',').map(Number);
  }
}

export default LottoController;