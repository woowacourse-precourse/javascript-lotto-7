import ERROR_MESSAGE from "./constants/error.js";

export const validatePurchasingAmount = (userInputAmounts) => {
  if (userInputAmounts % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.INPUT_AMOUNT);
  }
};

export const validateWinningNumberRange = (winningNumbers) => {
  console.log(winningNumbers + "..");
  winningNumbers.forEach((number) => {
    if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGE.WINNING_NUMBER_RANGE);
    }
  });
};

export const validateWinningNumberDup = (winningNumbers) => {
  const uniqueNumbers = new Set(winningNumbers);
  if (uniqueNumbers.size !== winningNumbers.length) {
    throw new Error(ERROR_MESSAGE.WINNING_NUMBER_DUP);
  }
};

export const validateBonusNumberRange = (bounsNumbers) => {
  if (bounsNumbers < 1 || bounsNumbers > 45) {
    throw new Error(ERROR_MESSAGE.BONUS__NUMBER_RANGE);
  }
};
