import { Console } from "@woowacourse/mission-utils";
import LottoManager from "../models/LottoManager.js";
import InputValidator from "../utils/InputValidator.js";
import ConsoleView from "../views/ConsoleView.js";

class App {
  async run() {
    ConsoleView.askPurchaseAmount((input) => this.handlePurchaseAmout(input));
  }

  handlePurchaseAmount(input) {
    try {
      const purchaseAmount = InputValidator.validatePurchaseAmount(input);
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
      const winningNumbers = InputValidator.validateWinningNumbers(input);
      ConsoleView.askBonusNumber((input) => this.handleBonusNumber(input, winningNumbers));
    } catch (error) {
      ConsoleView.showError(error);
      ConsoleView.askWinningNumbers((input) => this.handleWinningNumbers(input));
    }
  }

  handleBonusNumber(input, winningNumbers) {
    try {
      const bonusNumber = InputValidator.validateBonusNumber(input);
      const results = this.lottoManager.calculateResults(winningNumbers, bonusNumber);
      ConsoleView.showResults(results);
    } catch (error) {
      ConsoleView.showError(error);
      ConsoleView.askBonusNumber((input) => this.handleBonusNumber(input, winningNumbers));
    }
  }
}

export default App;
