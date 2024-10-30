import {
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  LOTTO_PRICE_UNIT,
} from '../constants/constants.js';

const validator = {
  checkNumericString(value) {
    // Number() 변환 시 NaN, 음수, 소수, 지수 표현 문제 사전 방지
    if (!/^[0-9]+$/.test(value)) {
      throw new Error('[ERROR] 숫자가 아닌 문자가 포함되었습니다.');
    }
  },
  checkSafeInteger(value) {
    if (!Number.isSafeInteger(value)) {
      throw new Error('[ERROR] 안전 범위를 벗어난 숫자 입니다.');
    }
  },
};

export const validatePurchasePrice = (purchasePrice) => {
  validator.checkNumericString(purchasePrice);

  const parsedPurchasePrice = Number(purchasePrice);

  validator.checkSafeInteger(parsedPurchasePrice);

  if (
    parsedPurchasePrice % LOTTO_PRICE_UNIT !== 0 ||
    parsedPurchasePrice === 0
  ) {
    throw new Error('[ERROR] 구입 금액이 1000원 단위가 아닙니다.');
  }
};

export const validateWinningNumber = (winningNumber) => {
  validator.checkNumericString(winningNumber);
};

export const validateBonusNumber = (bonusNumber, winningLotto) => {
  validator.checkNumericString(bonusNumber);

  const parsedBonusNumber = Number(bonusNumber);
  if (
    parsedBonusNumber < LOTTO_NUMBER_MIN ||
    parsedBonusNumber > LOTTO_NUMBER_MAX
  ) {
    throw new Error('[ERROR] 로또 번호 범위(1 ~ 45)를 벗어난 숫자가 있습니다.');
  }

  if (winningLotto.numbers.includes(parsedBonusNumber)) {
    throw new Error('[ERROR] 보너스 번호와 당첨 번호가 중복됩니다.');
  }
};
