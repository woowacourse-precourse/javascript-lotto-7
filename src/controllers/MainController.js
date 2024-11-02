import LottoController from './LottoController.js';
import InputController from './inputController.js';
import OutputView from '../views/OutputView.js';
import { calculateRateOfReturn } from '../utils/calculateRateOfReturn.js';

class MainController {
  purchaseAmount = 0;
  purchaseNumber = 0;
  lottoList = [];
  winningNumbers = [];
  bonusNumber = 0;

  async start() {
    const { purchaseAmount, purchaseNumber } =
      await InputController.getValidPurchaseNumber();
    this.purchaseAmount = purchaseAmount;
    this.purchaseNumber = purchaseNumber;

    OutputView.printPurchaseNumber(this.purchaseNumber);
    OutputView.printLineBreak();

    this.lottoList = LottoController.generateLotto(this.purchaseNumber);
    OutputView.printLottoList(this.lottoList);

    this.winningNumbers = await InputController.getValidWinningNumbers();
    OutputView.printLineBreak();

    this.bonusNumber = await InputController.getValidBonusNumber();
    this.winningNumbers.push(this.bonusNumber);

    const winningLottoNumber = LottoController.getWinningLottoNumber(
      this.lottoList,
      this.winningNumbers,
      this.bonusNumber,
    );
    OutputView.printWinningStatistics(winningLottoNumber);

    const rateOfReturn = calculateRateOfReturn(
      this.purchaseAmount,
      winningLottoNumber,
    );
    OutputView.printRateOfReturn(rateOfReturn);
  }
}

export default MainController;
