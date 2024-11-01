import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Validator from '../utils/Validator.js';
import ERRORS from '../constants/Errors.js';

class AppController {
  constructor() {
    this.tickets = [];
    this.resultCounts = { 3: 0, 4: 0, 5: 0, '5+bonus': 0, 6: 0 };
    this.profitRate = 0.0;
  }

  async run() {
    try {
      // 1. 구입 금액 입력
      const purchaseAmount = await InputView.askPurchaseAmount();
      Validator.validatePurchaseAmount(purchaseAmount);

      // 2. 로또 티켓 출력
      OutputView.displayLottoCount(purchaseAmount);
      OutputView.displayLottoNumbers(this.tickets);

      // 3. 당첨 번호 및 보너스 번호 입력
      const winningNumbers = await InputView.askWinningNumbers();
      const bonusNumber = await InputView.askBonusNumber();

      // 4. 당첨 결과 출력
      OutputView.displayResults(this.resultCounts);

      // 5. 수익률 출력
      OutputView.displayProfitRate(this.profitRate);
    } catch (error) {
      OutputView.displayError(error.message);
    }
  }
}

export default AppController;
