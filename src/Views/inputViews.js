import { Console } from '@woowacourse/mission-utils';
import { PurchaseAmountValidator } from '../Controllers/Validator/purchaseAmountValidator.js';
import { WinningNumbersValidator } from '../Controllers/Validator/winningNumbersValidator.js';
import { BonusNumberValidator } from '../Controllers/Validator/bonusNumberValidator.js';

class Inputs {
  constructor() {
    this.purchaseAmountValidator = new PurchaseAmountValidator();
    this.winningNumbersValidator = new WinningNumbersValidator();
    this.BonusNumberValidator = new BonusNumberValidator();

    this.purchaseAmountMessage = '구입금액을 입력해 주세요.\n';
    this.winningNumbersMessage = '당첨 번호를 입력해 주세요.\n';
    this.bonusNumberMessage = '\n보너스 번호를 입력해 주세요.\n';
  }

  async getPurchaseAmountInput() {
    while (true) {
      try {
        const purchaseAmount = await Console.readLineAsync(this.purchaseAmountMessage);
        this.validatePurchaseAmount(purchaseAmount);
        return purchaseAmount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getWinningNumbersInput() {
    while (true) {
      try {
        const winningNumbers = await Console.readLineAsync(this.winningNumbersMessage);
        this.validateWinningNumbers(winningNumbers);
        return winningNumbers;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getBonusNumberInput() {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync(this.bonusNumberMessage);
        this.validateBonusNumber(bonusNumber);
        return bonusNumber;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  validatePurchaseAmount(purchaseAmount) {
    this.purchaseAmountValidator.validatePurchaseAmount(purchaseAmount);
  }

  validateWinningNumbers(winningNumbers) {
    this.winningNumbersValidator.validateWinningNumbers(winningNumbers);
  }

  validateBonusNumber(bonusNumber) {
    this.BonusNumberValidator.validateBonusNumber(bonusNumber);
  }
}

export { Inputs };
