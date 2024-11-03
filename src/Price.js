import { PRICE_ERROR } from "./Message/Message.js";

class Price {
  #price;

  constructor(priceInput) {
    const priceNum = Number(priceInput);
    this.#validate(priceNum);
    this.#price = priceNum;
  }

  #validate(priceNum) {
    if (Number.isNaN(priceNum)) {
      throw new Error(PRICE_ERROR.IS_NOT_NUMBER);
    }

    if (!Number.isInteger(priceNum)) {
      throw new Error(PRICE_ERROR.IS_NOT_INTEGER);
    }

    if (priceNum <= 0) {
      throw new Error(PRICE_ERROR.IS_NOT_POSITIVE);
    }

    if (priceNum % 1000) {
      throw new Error(PRICE_ERROR.IS_NOT_THOUSAND);
    }
  }

  getPrice() {
    return this.#price;
  }

}

export default Price;
