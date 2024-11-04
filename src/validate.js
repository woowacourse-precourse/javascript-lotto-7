import { ERROR_MESSAGE, LOTTO_SINGLE_TICKET_PRICE } from './constants.js';
import { throwError } from './utils/throwError.js';

export const validatePurchaseAmount = (purchaseAmount) => {
  if (purchaseAmount % LOTTO_SINGLE_TICKET_PRICE) throwError(ERROR_MESSAGE.purchaseAmountError);
};
