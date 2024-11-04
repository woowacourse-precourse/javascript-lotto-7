import ERROR_MESSAGE from "./constants/error.js";

export const validatePurchasingAmount = (userInputAmounts) => {
  // 입력이 숫자가 아닌 경우, 또는 1000으로 나누어 떨어지지 않는 경우, 또는 음수나 0인 경우 예외 발생
  if (
    !/^\d+$/.test(userInputAmounts) ||
    userInputAmounts <= 0 ||
    userInputAmounts % 1000 !== 0
  ) {
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
