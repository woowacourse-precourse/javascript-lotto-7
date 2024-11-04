import { MONEY_ERROR_MESSAGES } from '../contents/InputErrorMessages.js';
import { LOTTO } from '../contents/PrizeContents.js';
import ValidateNumber from './ValidateNumber.js';

class MoneyManager {
  #money;

  constructor(money) {
    this.#money = this.#validateMoney(money);
  }

  getLottoTicketCount() {
    return this.#money / LOTTO.PRICE;
  }

  #validateMoney(money) {
    ValidateNumber.checkMissing(money, MONEY_ERROR_MESSAGES.missingAmount);
    ValidateNumber.checkNumeric(money, MONEY_ERROR_MESSAGES.nonNumericInput);
    ValidateNumber.checkPurchaseUnit(money, MONEY_ERROR_MESSAGES.invalidUnit);
    return parseInt(money, 10);
  }
}

export default MoneyManager;
