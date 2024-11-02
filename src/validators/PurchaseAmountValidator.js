import { ERROR_MESSAGE } from '../constants/message.js';
import { throwError } from '../utils/console.js';

const validate = {
  validateEmpty(price) {
    if (price === '') {
      throwError(ERROR_MESSAGE.EMPTY_INPUT);
    }
  },
};

function validatePurchaseAmount(price) {
  validate.validateEmpty(price);
}

export default validatePurchaseAmount;