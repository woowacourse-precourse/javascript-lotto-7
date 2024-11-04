import { MONEY_ERROR_MESSAGES } from '../contents/InputErrorMessages.js';
import { LOTTO } from '../contents/LottoConstants.js';
import InputValidatorUtils from './InputValidatorUtils.js';

class MoneyManager {
  #money;

  constructor(money) {
    this.#money = this.#validateMoney(money);
  }

  getLottoTicketCount() {
    return this.#money / LOTTO.PRICE;
  }

  #validateMoney(money) {
    InputValidatorUtils.checkMissing(money, MONEY_ERROR_MESSAGES.missingAmount);
    InputValidatorUtils.checkNumeric(
      money,
      MONEY_ERROR_MESSAGES.nonNumericInput,
    );
    InputValidatorUtils.checkPurchaseUnit(
      money,
      MONEY_ERROR_MESSAGES.invalidUnit,
    );
    return parseInt(money, 10);
  }
}

export default MoneyManager;
