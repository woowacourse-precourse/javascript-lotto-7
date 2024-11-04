import { Console } from '@woowacourse/mission-utils';
import Parser from '../utils/Parser.js';
import LottoValidator from '../utils/LottoValidator.js';
import InputView from '../views/InputView.js';

class InputController {
  static async getValidPurchaseAmount() {
    try {
      const input = await InputView.inputPurchaseAmount();
      const purchaseAmount = Parser.parseNumber(input);
      LottoValidator.validatePurchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      Console.print(error.message);
      return InputController.getValidPurchaseAmount();
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

  static async getValidBonusNumber(winningNumbers) {
    try {
      const input = await InputView.inputBonusNumber();
      const bonusNumber = Parser.parseNumber(input);
      LottoValidator.validateBonusNumber(bonusNumber, winningNumbers);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return InputController.getValidBonusNumber(winningNumbers);
    }
  }
}

export default InputController;
