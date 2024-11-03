import { Console } from '@woowacourse/mission-utils';
import { PurchaseAmountValidator } from '../Controller/purchaseAmountValidator.js';
import { WinningNumbersValidator } from '../Controller/winningNumbersValidator.js';
import { BonusNumberValidator } from '../Controller/bonusNumberValidator.js';

export class Input {
  constructor() {
    this.purchaseAmount = null;
    this.winningNumbers = null;
    this.bonusNumber = null;

    this.purchaseAmountValidator = new PurchaseAmountValidator();
    this.winningNumbersValidator = new WinningNumbersValidator();
    this.bonusNumberValidator = new BonusNumberValidator();

    this.purchaseAmountMessage = '구입금액을 입력해 주세요.\n';
    this.winningNumbersMessage = '\n당첨 번호를 입력해 주세요.\n';
    this.bonusNumberMessage = '\n보너스 번호를 입력해 주세요.\n';
  }

  async getPurchaseAmountInput() {
    while (true) {
      try {
        this.purchaseAmount = await Console.readLineAsync(this.purchaseAmountMessage);
        this.validatePurchaseAmount(this.purchaseAmount);
        return this.purchaseAmount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getWinningNumbersInput() {
    while (true) {
      try {
        this.winningNumbers = await Console.readLineAsync(this.winningNumbersMessage);
        this.validateWinningNumbers(this.winningNumbers);
        return this.winningNumbers;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getBonusNumberInput() {
    while (true) {
      try {
        this.bonusNumber = await Console.readLineAsync(this.bonusNumberMessage);
        this.validateBonusNumber(this.bonusNumber);
        return this.bonusNumber;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  validatePurchaseAmount() {
    this.purchaseAmountValidator.validatePurchaseAmount(this.purchaseAmount);
  }

  validateWinningNumbers() {
    this.winningNumbersValidator.validateWinningNumbers(this.winningNumbers);
  }

  validateBonusNumber() {
    this.bonusNumberValidator.validateBonusNumber(this.bonusNumber);
  }
}