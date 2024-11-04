import { INPUT_ERROR_MESSAGES } from '../contents/InputErrorMessages.js';
import { LOTTO_PRICE } from '../contents/PrizeContents.js';

class MoneyManager {
  #money;

  constructor(money) {
    this.#money = this.#validateMoney(money);
  }

  getLottoTicketCount() {
    return this.#money / LOTTO_PRICE;
  }

  #validateMoney(money) {
    this.#checkMissingAmount(money);
    this.#checkNumericInput(money);
    this.#checkPurchaseUnit(money);
    return parseInt(money, 10);
  }

  #checkMissingAmount(money) {
    if (money.length == 0) {
      throw new Error(`${INPUT_ERROR_MESSAGES.missingMoney}`);
    }
  }

  #checkNumericInput(money) {
    if (isNaN(money)) {
      throw new Error(`${INPUT_ERROR_MESSAGES.nonNumericInput}`);
    }
  }

  #checkPurchaseUnit(money) {
    if (parseInt(money, 10) % LOTTO_PRICE != 0) {
      throw new Error(`${INPUT_ERROR_MESSAGES.notUnits1000Won}`);
    }
  }
}

export default MoneyManager;
