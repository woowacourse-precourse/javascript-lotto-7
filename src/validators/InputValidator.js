import { INVALID_USER_MONEY_ERROR_MESSAGE, INVALID_NUMBER_ERROR_MESSAGE } from '../constants/message.js';

import { LOTTO_PRICE } from '../constants/config.js';

export function validateUserMoney(userMoney) {
  if (userMoney % LOTTO_PRICE === 0) {
    return;
  }

  throw new Error(INVALID_USER_MONEY_ERROR_MESSAGE);
}

export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error(INVALID_NUMBER_ERROR_MESSAGE);
  }
}
