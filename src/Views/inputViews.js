import { Console } from '@woowacourse/mission-utils';
import { PurchaseAmountValidator } from '../Controllers/Validator/purchaseAmountValidator.js';
import { WinningNumbersValidator } from '../Controllers/Validator/winningNumbersValidator.js';
import { BonusNumberValidator } from '../Controllers/Validator/bonusNumberValidator.js';

class PurchaseAmountInput {
  constructor() {
    this.purchaseAmount = 0;
    this.isValid = 0;
    this.validator = new PurchaseAmountValidator();
  }

  async getPurchaseAmountInput() {
    while (true) {
      try {
        this.purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        const trueCheck = this.validator.validatePurchaseAmount(this.purchaseAmount);
        if (trueCheck === true) {
          return this.purchaseAmount;
        }
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}

class WinningNumbersInput {
  constructor() {
    this.winningNumbers = 0;
    this.validator = new WinningNumbersValidator();
  }

  async getWinningNumbersInput() {
    while (true) {
      try {
        this.winningNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
        const trueCheck = this.validator.validateWinningNumbers(this.winningNumbers);
        if (trueCheck === true) {
          return this.winningNumbers;
        }
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}

class BonusNumberInput {
  constructor() {
    this.bonusNumber = 0;
    this.validator = new BonusNumberValidator();
  }

  async getBonusNumberInput() {
    while (true) {
      try {
        this.bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
        const trueCheck = this.validator.validateBonusNumber(this.bonusNumber);
        if (trueCheck === true) {
          return this.bonusNumber;
        }
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}

export { PurchaseAmountInput, WinningNumbersInput, BonusNumberInput };
