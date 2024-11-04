import { Console } from "@woowacourse/mission-utils";
import LottoManager from "./models/LottoManager";
import InputValidator from "./utils/InputValidator";

class App {
  run() {
    this.askPurchaseAmount();
  }

  askPurchaseAmount() {
    Console.readLineAsync('구입금액을 입력해 주세요.\n', (input) => {
      try {
        const purchaseAmount = InputValidator.validatePurchaseAmount(input);
        const lottoManager = new LottoManager(purchaseAmount);
        this.askWinningNumbers(lottoManager);
      } catch (error) {
        this.handleError(error, this.askPurchaseAmount.bind(this));
      }
    });
  }

  askWinningNumbers(lottoManager) {
    Console.readLineAsync('당첨 번호를 입력해 주세요.\n', (input) => {
      try {
        const winningNumbers = InputValidator.validateWinningNumbers(input);
        this.askBonusNumber(lottoManager, winningNumbers);
      } catch (error) {
        this.handleError(error, () => this.askWinningNumbers(lottoManager));
      }
    });
  }

  askBonusNumber(lottoManager, winningNumbers) {
    Console.readLineAsync('보너스 번호를 입력해 주세요.\n', (input) => {
      try {
        const bonusNumber = InputValidator.validateBonusNumber(input, winningNumbers);
        lottoManager.checkResults(winningNumbers, bonusNumber);
        Console.close();
      } catch (error) {
        this.handleError(error, () => this.askBonusNumber(lottoManager, winningNumbers));
      }
    });
  }

  handleError(error, retryFunction) {
    Console.print(error.message);
    retryFunction();
  }
}

export default App;
