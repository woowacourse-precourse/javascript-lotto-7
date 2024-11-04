import { CONFIG, INFO_MESSAGE } from "./libs/constants.js";
import { createWinningLotto, getLottoPurchaseCountByAmountInput } from "./libs/helpers.js";
import { pickUniqueNumbersInRange, printResult } from "./libs/utils.js";
import Lotto from "./models/Lotto.js";
import { printWinningStatus } from "./views/winningStatus.js";

class App {
  async run() {
    const calculatedAmount = await getLottoPurchaseCountByAmountInput();
    printResult(INFO_MESSAGE.PURCHASE_CONFORM(calculatedAmount));

    const lottoNumbers = Array.from({ length: calculatedAmount }, (_) => {
      const lotto = pickUniqueNumbersInRange(CONFIG.MIN_LOTTO_NUMBER, CONFIG.MAX_LOTTO_NUMBER, CONFIG.LOTTO_COUNT).sort(
        (a, b) => a - b
      );
      return new Lotto(lotto);
    });

    lottoNumbers.forEach((lotto) => `${lotto.print()}\n`);

    const winningLotto = await createWinningLotto();
    const lottoResults = [];
    lottoNumbers.forEach((lottos) => lottoResults.push(winningLotto.getMatchCount(lottos.getNumbers())));
    printWinningStatus(lottoResults, calculatedAmount);
  }
}

export default App;
