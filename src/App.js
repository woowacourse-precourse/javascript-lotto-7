import { INFO_MESSAGE } from "./libs/constants.js";
import { createLottoNumbers, createWinningLotto, getLottoPurchaseCountByAmountInput } from "./libs/helpers.js";
import { printResult } from "./libs/utils.js";
import { printLottos } from "./views/lotto.js";
import { printWinningStatus } from "./views/winningStatus.js";

class App {
  async run() {
    const calculatedAmount = await getLottoPurchaseCountByAmountInput();
    printResult(INFO_MESSAGE.PURCHASE_CONFORM(calculatedAmount));

    const lottoNumbers = createLottoNumbers(calculatedAmount);
    printLottos(lottoNumbers);

    const winningLotto = await createWinningLotto();

    const lottoResults = [];
    lottoNumbers.forEach((lottos) => lottoResults.push(winningLotto.getMatchCount(lottos.getNumbers())));
    printWinningStatus(lottoResults, calculatedAmount);
  }
}

export default App;
