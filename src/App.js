import AllLotto from "./AllLotto.js";
import {
  promptPurchaseAmount,
  generateLottos,
  promptWinningNumbers,
  promptBonusNumber
} from './util/util.js';

class App {
  async run() {
    const purchaseAmount = await promptPurchaseAmount();
    const totalLotto = purchaseAmount.getLottoCount();
    if (totalLotto < 1) return;
    const allLotto = new AllLotto();

    await generateLottos(totalLotto, allLotto);
    await allLotto.printAllLotto();

    const winningNumbersArray = await promptWinningNumbers();
    if (winningNumbersArray === -1) return;
    const bonusNumber = await promptBonusNumber();

    await allLotto.setWinningLotto(winningNumbersArray, bonusNumber);
    await allLotto.printWinningResult();
  }
}

export default App;
