import ERROR_MESSAGE from "./constants/error.js";

export const validatePurchasingAmount = (userInputAmounts) => {
  if (userInputAmounts % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.INPUT_AMOUNT);
  }
};

export const validateBonusNumber = (bonusNumber, winningNumbers) => {
  if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER);
  }
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER_DUP);
  }
};
