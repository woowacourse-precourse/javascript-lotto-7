import ERROR from '../constants/error.js';
import CustomError from './CustomError.js';

const validatePurchaseAmout = (purchaseAmount) => {
  if (purchaseAmount % 1000 !== 0)
    throw new CustomError(ERROR.INVALID_PURCHASE_AMOUNT);
};

export default validatePurchaseAmout;
