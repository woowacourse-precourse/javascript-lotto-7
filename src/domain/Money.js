import ERROR_MESSAGE from '../constants/errorMessage.js';
import { MONEY_UNIT } from '../constants/lottoStandard.js';
import CustomError from '../CustomError.js';

class Money {
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = Number(money);
  }

  #validate(money) {
    this.#validateNotEmpty(money);
    this.#validateNumberType(money);
    this.#validateInBoundary(money);
    this.#validateDivideByBasicMoney(money);
  }

  #validateNotEmpty(money) {
    if (money === null || money === '') {
      throw new CustomError(ERROR_MESSAGE.EMPTY_MONEY);
    }
  }

  #validateNumberType(money) {
    if (Number.isNaN(Number(money))) {
      throw new CustomError(ERROR_MESSAGE.STRING_MONEY);
    }

    if (Number.isInteger(Number(money)) === false) {
      throw new CustomError(ERROR_MESSAGE.FLOAT_MONEY);
    }
  }

  #validateInBoundary(money) {
    if (money <= 0 || money > Number.MAX_SAFE_INTEGER) {
      throw new CustomError(ERROR_MESSAGE.NOT_POSITIVE_MONEY);
    }
  }

  #validateDivideByBasicMoney(money) {
    if (money % MONEY_UNIT !== 0) {
      throw new CustomError(ERROR_MESSAGE.NOT_DIVIDE_BY_BASIC_MONEY);
    }
  }

  getMoney() {
    return this.#money;
  }
}

export default Money;
