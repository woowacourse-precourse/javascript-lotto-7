import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import {
  validatePurchaseAmount,
  validateWinningNumber,
  validateBonus,
} from '../utils/validation.js';

class InputController {
  async getValidPurchaseAmount() {
    const purchaseAmount = await InputView.getPurchaseAmount();
    try {
      validatePurchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.getValidPurchaseAmount();
    }
  }

  async getValidWinningNumber() {
    const winningNumber = await InputView.getWinningNumber();
    try {
      validateWinningNumber(winningNumber);
      return winningNumber;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.getValidWinningNumber();
    }
  }

  async getValidBonusNumber(winningNumber) {
    const bonusNumber = await InputView.getBonusNumber();
    try {
      validateBonus(bonusNumber, winningNumber);
      return bonusNumber;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return this.getValidBonusNumber(winningNumber);
    }
  }
}

export default InputController;
