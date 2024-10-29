const LOTTO_PRICE_UNIT = 1000;

const validator = {
  isNumericString(value) {
    // Number() 변환 시 NaN, 음수, 소수, 지수 표현 문제 사전 방지
    if (!/^[0-9]+$/.test(value)) {
      throw new Error('[ERROR] 숫자가 아닌 문자가 포함되었습니다.');
    }
  },
  isSafeInteger(value) {
    if (!Number.isSafeInteger(value)) {
      throw new Error('[ERROR] 안전 범위를 벗어난 숫자 입니다.');
    }
  },
};

export const validatePurchasePrice = (purchasePrice) => {
  validator.isNumericString(purchasePrice);

  const parsedPurchasePrice = Number(purchasePrice);

  validator.isSafeInteger(parsedPurchasePrice);

  if (
    parsedPurchasePrice % LOTTO_PRICE_UNIT !== 0 ||
    parsedPurchasePrice === 0
  ) {
    throw new Error('[ERROR] 구입 금액이 1000원 단위가 아닙니다.');
  }
};
