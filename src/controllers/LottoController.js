import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { validatePurchaseAmount } from '../utils/validateInput.js';
import CustomError from '../utils/CustomError.js';
import { validateLottoNumbers } from '../utils/validateLottoNumbers.js';

class LottoController {
  static async handlePurchaseAmount() {
    try {
      const purchaseAmountString = await InputView.readPurchaseAmount();
      const purchaseAmount = validatePurchaseAmount(purchaseAmountString);
      OutputView.printPurchaseCount(purchaseAmount / 1000);
      return purchaseAmount;
    } catch (error) {
      if (error instanceof CustomError) {
        OutputView.printError(error.message, error.name);
        return this.handlePurchaseAmount();
      }
      throw error;
    }
  }

  static async getWinningNumbers() {
    try {
      const winningNumbersString = await InputView.readWinningNumbers();
      const winningNumbers = winningNumbersString
        .split(',')
        .map((num) => parseInt(num.trim(), 10));
      validateLottoNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      if (error instanceof CustomError) {
        OutputView.printError(error.message, error.name);
        return this.getWinningNumbers();
      }
      throw error;
    }
  }
}

export default LottoController;
