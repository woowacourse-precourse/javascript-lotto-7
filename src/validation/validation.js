const validator = {
  isNumericString(value) {
    // Number() 변환 시 NaN, 음수, 소수, 지수 표현 문제 사전 방지
    if (!/^[0-9]+$/.test(value)) {
      throw new Error('[ERROR] 숫자가 아닌 문자가 포함되었습니다.');
    }
  },
};

export const validatePurchasePrice = (purchasePrice) => {
  validator.isNumericString(purchasePrice);
};
