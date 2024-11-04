import { PRICE_ERROR } from "../Message/Message.js";

class Price {
  #price;

  constructor(priceInput) {
    const priceNum = Number(priceInput);
    this.#validate(priceNum);
    this.#price = priceNum;
  }

  #validate(priceNum) {
    this.#checkIfNaN(priceNum);
    this.#checkIfInteger(priceNum);
    this.#checkIfPositive(priceNum);
    this.#checkIfThousand(priceNum);
  }

  #checkIfNaN(priceNum) {
    if (Number.isNaN(priceNum)) {
      throw new Error(PRICE_ERROR.IS_NOT_NUMBER);
    }
  }

  #checkIfInteger(priceNum) {
    if (!Number.isInteger(priceNum)) {
      throw new Error(PRICE_ERROR.IS_NOT_INTEGER);
    }
  }

  #checkIfPositive(priceNum) {
    if (priceNum <= 0) {
      throw new Error(PRICE_ERROR.IS_NOT_POSITIVE);
    }
  }

  #checkIfThousand(priceNum) {
    if (priceNum % 1000) {
      throw new Error(PRICE_ERROR.IS_NOT_THOUSAND);
    }
  }

  getPrice() {
    return this.#price;
  }
}

export default Price;
