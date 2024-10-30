import { LOTTO_CONFIG } from '../constants/constants.js';
import { ERROR_MESSAGES } from '../constants/errorMessage.js';

const validator = {
  checkNumericString(value) {
    // Number() 변환 시 NaN, 음수, 소수, 지수 표현 문제 사전 방지
    if (!/^[0-9]+$/.test(value)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
  },
  checkSafeInteger(value) {
    if (!Number.isSafeInteger(value)) {
      throw new Error(ERROR_MESSAGES.SAFE_INTEGER);
    }
  },
  checkInteger(value) {
    this.checkNumericString(value);
    this.checkSafeInteger(Number(value));
  },
};

export const validatePurchasePrice = (purchasePrice) => {
  validator.checkInteger(purchasePrice);

  const parsedPurchasePrice = Number(purchasePrice);

  if (
    parsedPurchasePrice % LOTTO_CONFIG.PRICE !== 0 ||
    parsedPurchasePrice === 0
  ) {
    throw new Error(ERROR_MESSAGES.INVALID_PRICE);
  }
};

export const validateWinningNumber = (winningNumber) => {
  validator.checkInteger(winningNumber);
};

export const validateBonusNumber = (bonusNumber, winningLotto) => {
  validator.checkInteger(bonusNumber);

  const parsedBonusNumber = Number(bonusNumber);

  if (
    parsedBonusNumber < LOTTO_CONFIG.NUMBER_MIN ||
    parsedBonusNumber > LOTTO_CONFIG.NUMBER_MAX
  ) {
    throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
  }

  if (winningLotto.numbers.includes(parsedBonusNumber)) {
    throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
  }
};
