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
      const purchaseAmount = await this.handlePurchaseAmount();
      this.generateAndDisplayLottos(purchaseAmount);
      const { winningNumbers, bonusNumber } = await this.handleWinningNumbers();
      const resultCounts = this.calculateResults(winningNumbers, bonusNumber);
      const profitRate = this.calculateAndDisplayProfitRate(purchaseAmount);
      this.displayResults(resultCounts, profitRate);
    } catch (error) {
      this.handleError(error);
    }
  }

  //구매 금액을 입력받고 검증하는 메서드
  async handlePurchaseAmount() {
    const amount = await InputView.askPurchaseAmount();
    Validator.validatePurchaseAmount(amount);
    return amount;
  }

  //로또 티켓을 생성하고 출력하는 메서드
  generateAndDisplayLottos(purchaseAmount) {
    this.lottoController = new LottoController(purchaseAmount);
    this.lottoController.generateLottos();
    const tickets = this.lottoController.getLottos();
    OutputView.displayLottoCount(purchaseAmount);
    OutputView.displayLottoNumbers(tickets);
  }

  //당첨 번호와 보너스 번호를 입력받고 검증하는 메서드
  async handleWinningNumbers() {
    const winningNumbers = await InputView.askWinningNumbers();
    Validator.validateWinningNumbers(winningNumbers);

    const bonusNumber = await InputView.askBonusNumber();
    Validator.validateBonusNumber(bonusNumber, winningNumbers);

    return { winningNumbers, bonusNumber };
  }

  //당첨 결과를 계산하는 메서드
  calculateResults(winningNumbers, bonusNumber) {
    return this.lottoController.calculateResult(winningNumbers, bonusNumber);
  }

  //수익률을 계산하고 출력하는 메서드
  calculateAndDisplayProfitRate(purchaseAmount) {
    const profitRate = this.lottoController.calculateProfitRate(purchaseAmount);
    return profitRate;
  }

  //당첨 결과와 수익률을 출력하는 메서드
  displayResults(resultCounts, profitRate) {
    OutputView.displayResults(resultCounts);
    OutputView.displayProfitRate(profitRate);
  }

  handleError(error) {
    OutputView.displayError(error.message);
  }
}

export default AppController;
