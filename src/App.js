import AllLotto from "./AllLotto.js";
import {
  promptPurchaseAmount,
  generateLottos,
  promptWinningNumbers,
  promptBonusNumber
} from './util/util.js';

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const totalLotto = this.getLottoCount(purchaseAmount);
    if (totalLotto < 1) return;

    const allLotto = await this.generateLottos(totalLotto);
    await this.processWinningNumbers(allLotto);
  }

  async getPurchaseAmount() {
    return await promptPurchaseAmount();
  }

  getLottoCount(purchaseAmount) {
    return purchaseAmount.getLottoCount();
  }

  async generateLottos(totalLotto) {
    const allLotto = new AllLotto();
    await generateLottos(totalLotto, allLotto);
    await allLotto.printAllLotto();
    return allLotto;
  }

  async processWinningNumbers(allLotto) {
    const winningNumbersArray = await promptWinningNumbers();
    if (winningNumbersArray === -1) return;

    const bonusNumber = await promptBonusNumber();
    await allLotto.setWinningLotto(winningNumbersArray, bonusNumber);
    await allLotto.printWinningResult();
  }

}

export default App;
