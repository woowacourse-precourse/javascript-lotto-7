import { Console } from "@woowacourse/mission-utils";
import LottoManager from "../models/LottoManager.js";
import InputValidator from "../utils/InputValidator.js";
import ConsoleView from "../views/ConsoleView.js";

class App {
  async run() {
    ConsoleView.askPurchaseAmount((input) => this.handlePurchaseAmount(input));
  }

  handlePurchaseAmount(input) {
    try {
      const purchaseAmount = InputValidator.PurchaseAmount(input);
      console.log("구입 금액 유효성 통과:", purchaseAmount); // 디버깅 로그
      this.lottoManager = new LottoManager(purchaseAmount);
      ConsoleView.showLottos(this.lottoManager.getLottos());
      ConsoleView.askWinningNumbers((input) => this.handleWinningNumbers(input));
    } catch (error) {
      ConsoleView.showError(error);
      ConsoleView.askPurchaseAmount((input) => this.handlePurchaseAmount(input));
    }
  }

  handleWinningNumbers(input) {
    try {
      const winningNumbers = InputValidator.WinningNumbers(input);
      console.log("당첨 번호 유효성 통과:", winningNumbers); // 디버깅 로그
      ConsoleView.askBonusNumber((input) => this.handleBonusNumber(input, winningNumbers));
    } catch (error) {
      ConsoleView.showError(error);
      ConsoleView.askWinningNumbers((input) => this.handleWinningNumbers(input));
    }
  }

  handleBonusNumber(input, winningNumbers) {
    try {
      const bonusNumber = InputValidator.BonusNumber(input);
      console.log("보너스 번호 유효성 통과:", bonusNumber); // 디버깅 로그
      const results = this.lottoManager.calculateResults(winningNumbers, bonusNumber);
      ConsoleView.showResults(results);
    } catch (error) {
      ConsoleView.showError(error);
      ConsoleView.askBonusNumber((input) => this.handleBonusNumber(input, winningNumbers));
    }
  }
}

export default App;
