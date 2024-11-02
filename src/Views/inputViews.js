import { Console } from '@woowacourse/mission-utils';
import { PurchaseAmountValidator } from '../Controllers/Validator/purchaseAmountValidator.js';
import { WinningNumbersValidator } from '../Controllers/Validator/winningNumbersValidator.js';
import { BonusNumberValidator } from '../Controllers/Validator/bonusNumberValidator.js';

class Inputs {
  constructor() {
    this.purchaseAmount = 0;
    this.winningNumbers = 0;
    this.bonusNumber = 0;
    this.purchaseAmountValidator = new PurchaseAmountValidator();
    this.winningNumbersValidator = new WinningNumbersValidator();
    this.BonusNumberValidator = new BonusNumberValidator();
  }

  async getPurchaseAmountInput() {
    while (true) {
      try {
        this.purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        return this.validatePurchaseAmount();
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  validatePurchaseAmount() {
    if (this.purchaseAmountValidator.validatePurchaseAmount(this.purchaseAmount)) {
      return this.purchaseAmount;
    }
  }

  async getWinningNumbersInput() {
    while (true) {
      try {
        this.winningNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
        return validateWinningNumbers();
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  validateWinningNumbers() {
    if (this.winningNumbersValidator.validateWinningNumbers(this.winningNumbers)) {
      return this.winningNumbers;
    }
  }

  async getBonusNumberInput() {
    while (true) {
      try {
        this.bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
        validateBonusNumber();
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  validateBonusNumber() {
    if (this.BonusNumberValidator.validateBonusNumber(this.bonusNumber)) {
      return this.bonusNumber;
    }
  }
}

export { Inputs };
