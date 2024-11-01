import { LOTTO_ERROR_MESSAGES } from '../constants/index.js';
import { throwError } from '../utils/validateUtils.js';

class Validator {
  constructor() {
    this.rules = {
      isNotNumber: (input) => !Number.isInteger(Number(input)),
      isNotThousandUnits: (input) => Number(input.slice(-3)) !== 0,
    };
  }

  validateMoneyString(money) {
    if (this.rules.isNotNumber(money)) throwError(LOTTO_ERROR_MESSAGES.notNumber);
    if (this.rules.isNotThousandUnits(money)) throwError(LOTTO_ERROR_MESSAGES.notThousandUnits);
  }
}

export default Validator;
