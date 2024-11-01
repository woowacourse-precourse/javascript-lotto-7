import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import ERRORS from '../constants/Errors.js';

class AppController {
  constructor() {
    this.lottoCount = 0;
    this.tickets = [];
    this.resultCounts = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };
    this.profitRate = 0.0;
  }

  async run() {
    try {
      // 1. 구입 금액 입력
      const purchaseAmount = await InputView.askPurchaseAmount();

      // 2. 당첨 번호 및 보너스 번호 입력
      const winningNumbers = await InputView.askWinningNumbers();
      const bonusNumber = await InputView.askBonusNumber();
    } catch (error) {
      OutputView.printError(error.message);
    }
  }
}

export default AppController;
