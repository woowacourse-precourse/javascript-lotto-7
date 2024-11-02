import { Console } from '@woowacourse/mission-utils';
import Parser from '../utils/Parser.js';
import LottoValidator from '../utils/LottoValidator.js';
import InputView from '../views/InputView.js';

class InputController {
  static async getValidPurchaseNumber() {
    try {
      const input = await InputView.inputPurchaseAmount();
      const purchaseAmount = Parser.parseNumber(input);
      LottoValidator.validatePurchaseAmount(purchaseAmount);
      const purchaseNumber = purchaseAmount / 1000;
      return { purchaseAmount, purchaseNumber };
    } catch (error) {
      Console.print(error.message);
      return InputController.getValidPurchaseNumber();
    }
  }

  static async getValidWinningNumbers() {
    try {
      const inputArray = await InputView.inputWinningNumbers();
      const winningNumbers = Parser.parseNumberArray(inputArray);
      LottoValidator.validateWinningNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return InputController.getValidWinningNumbers();
    }
  }

  static async getValidBonusNumber() {
    try {
      const input = await InputView.inputBonusNumber();
      const bonusNumber = Parser.parseNumber(input);
      LottoValidator.validateBonusNumber(bonusNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return InputController.getValidBonusNumber();
    }
  }
}

export default InputController;
