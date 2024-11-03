import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Validator from '../utils/Validator.js';
import LottoController from './LottoController.js';

class AppController {
  constructor() {
    this.lottoController = null;
  }

  async run() {
    try {
      // 1. 구입 금액 입력 및 검증
      const purchaseAmount = await InputView.askPurchaseAmount();
      Validator.validatePurchaseAmount(purchaseAmount);

      // 2. 로또 티켓 생성 및 출력
      this.lottoController = new LottoController(purchaseAmount);
      this.lottoController.generateLottos();
      const tickets = this.lottoController.getLottos();

      OutputView.displayLottoCount(purchaseAmount);
      OutputView.displayLottoNumbers(tickets);

      // 3. 당첨 번호 및 보너스 번호 입력 및 검증
      const winningNumbers = await InputView.askWinningNumbers();
      Validator.validateWinningNumbers(winningNumbers);

      const bonusNumber = await InputView.askBonusNumber();
      Validator.validateBonusNumber(bonusNumber, winningNumbers);

      // 4. 당첨 결과 계산
      const resultCounts = this.lottoController.calculateResult(
        winningNumbers,
        bonusNumber,
      );
      const profitRate =
        this.lottoController.calculateProfitRate(purchaseAmount);

      // 5. 당첨 결과 및 수익률 출력
      OutputView.displayResults(resultCounts);
      OutputView.displayProfitRate(profitRate);
    } catch (error) {
      OutputView.displayError(error.message);
    }
  }
}

export default AppController;
