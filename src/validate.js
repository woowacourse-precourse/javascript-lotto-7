import { ERROR_MESSAGE } from './constants.js';
import { throwError } from './utils/throwError.js';

export const validatePurchaseAmount = (purchaseAmount) => {
  if (purchaseAmount % 1000) throwError(ERROR_MESSAGE.purchaseAmountError);
};
