import Validator from './Validator.js';
import { parseNumbers } from '../utils/Parser.js';
import WinningNumbers from '../model/WinningNumbers.js';
import InputView from '../view/InputView.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    const winningNumbers = new WinningNumbers(numbers);
    this.#numbers = winningNumbers.getWinningNumbers();
    const bonusNumber = winningNumbers.getBonusNumber();
  }

  static initializePurchaseAmount(amount) {
    const purchaseAmount = InputView.readPurchaseAmount();
    Validator.checkPurchaseAmount(amount);
  }
}

export default Lotto;
