import { LOTTO_CONFIG, LOTTO_ERROR_MESSAGES } from '../constants/index.js';

class Validator {
  constructor() {
    this.rules = {
      isNotNumber: (number) => !Number.isInteger(number),
      isNotThousandUnits: (number) => Number(number.slice(-3)) !== 0,
    };
  }

  validateMoneyString(money) {
    if (this.rules.isNotNumber(money)) this.throwError(LOTTO_ERROR_MESSAGES.notNumber);
    if (this.rules.isNotThousandUnits(money)) this.throwError(LOTTO_ERROR_MESSAGES.notThousandUnits);
  }

  throwError(message) {
    throw new Error(LOTTO_CONFIG.errorPrefix + message);
  }
}

export default Validator;
