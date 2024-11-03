import LOTTO_CONSTANTS from '../constants/lottoConstatns.js';
import ERROR_MESSAGES from '../constants/messages/errorMessages.js';

class Money {
  #money;

  constructor(money) {
    const parsedMoney = Number(money);
    this.#validate(parsedMoney);
    this.#money = parsedMoney;
  }

  calculateLottoCount() {
    return this.#money / LOTTO_CONSTANTS.LOTTO_PRICE;
  }

  #validate(money) {
    this.#validateType(money);
    this.#validateUnit(money);
  }

  #validateType(money) {
    if (Number.isNaN(money)) {
      throw Error(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.MONEY_TYPE_NOT_NUMBER}`);
    }
  }

  #validateUnit(money) {
    if (money % LOTTO_CONSTANTS.LOTTO_PRICE !== 0) {
      throw Error(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.MONEY_UNIT_NOT_RIGHT}`);
    }
  }
}

export default Money;
