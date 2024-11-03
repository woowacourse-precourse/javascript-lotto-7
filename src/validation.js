import ERROR_MESSAGE from "./constants/error.js";

export const validatePurchasingAmount = (userInputAmounts) => {
  if (userInputAmounts % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.INPUT_AMOUNT);
  }
};
