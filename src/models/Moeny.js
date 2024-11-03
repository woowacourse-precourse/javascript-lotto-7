import { ERROR_MESSAGES } from "..messeges.js";

class Money {
  static LOTTO_PRICE_UNIT = 1000;

  #money;

  constructor(money) {
    const parsedMoney = Number(money);
    this.#validate(parsedMoney);
    this.#money = parsedMoney;
  }

  calculateLottoCount() {
    return this.#money / Money.LOTTO_PRICE_UNIT;
  }

  #validate(money) {
    this.#validateType(money);
    this.#validateUnit(money);
  }

  #validateType(money) {
    if (Number.isNaN(money)) {
      throw Error(
        `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.NOT_A_NUMBER}`
      );
    }
  }

  #validateUnit(money) {
    if (money % Money.LOTTO_PRICE_UNIT !== 0) {
      throw Error(
        `${ERROR_MESSAGES.ERROR_MESSAGE_PREFIX} ${ERROR_MESSAGES.MONEY_DEGREE}`
      );
    }
  }
}

export default Money;
