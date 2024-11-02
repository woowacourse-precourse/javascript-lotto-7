import { ERROR_MESSAGE } from "./constants/errorMessage.js";

class MoneyValidator {
  money;

  constructor(money) {
    this.isNumber(money);
    this.isInvalid(money);
    this.money = money;
  }

  isNumber(money) {
    if (isNaN(money)) {
      throw new Error(ERROR_MESSAGE.MONEY.IS_NOT_NUMBER);
    }
    return money;
  }

  isInvalid(money) {
    if (Number(money) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.MONEY.VALIDATE);
    }
    return money;
  }
}

export default MoneyValidator;
