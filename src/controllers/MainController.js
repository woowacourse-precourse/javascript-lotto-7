import InputController from './InputController.js';
import OutputView from '../views/OutputView.js';
import LottoManager from '../models/LottoManager.js';

class MainController {
  async start() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottoManager = new LottoManager(purchaseAmount);
    this.printLottoDetails(lottoManager);

    const { winningNumbers, bonusNumber } = await this.getWinningNumbers();
    lottoManager.setWinningNumbers(winningNumbers, bonusNumber);
    this.printResults(lottoManager);
  }

  async getPurchaseAmount() {
    return await InputController.getValidPurchaseAmount();
  }

  printLottoDetails(lottoManager) {
    OutputView.printPurchaseNumber(lottoManager.purchaseNumber);
    OutputView.printLineBreak();
    OutputView.printLottoList(lottoManager.lottoList);
  }

  async getWinningNumbers() {
    const winningNumbers = await InputController.getValidWinningNumbers();
    OutputView.printLineBreak();
    const bonusNumber =
      await InputController.getValidBonusNumber(winningNumbers);
    return { winningNumbers, bonusNumber };
  }

  printResults(lottoManager) {
    // calculateWinningLottoCounts 호출하여 당첨 횟수 계산 후 가져오기
    const winningLottoCounts = lottoManager.calculateWinningLottoCounts();
    OutputView.printWinningStatistics(winningLottoCounts);

    const rateOfReturn = lottoManager.calculateRateOfReturn();
    OutputView.printRateOfReturn(rateOfReturn);
  }
}

export default MainController;
