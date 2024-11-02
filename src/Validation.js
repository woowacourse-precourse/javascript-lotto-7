export function validatePurchaseAmount(purchaseAmountInput) {
  isNotEmpty(purchaseAmountInput);
  isNumerical(purchaseAmountInput);
  endsWithThreeZeros(purchaseAmountInput);
}

export function validateBonusNumber(bonusNumberInput) {
  isNotEmpty(bonusNumberInput);
  isNumerical(bonusNumberInput);
  isInRange(bonusNumberInput);
}

export function isNotEmpty(input) {
  if (!input) {
    throw new Error('[ERROR] 입력값이 없습니다.');
  }
};

export function isNumerical(input) {
  const regex = /^[0-9]*$/;
  if (!regex.test(input)) {
    throw new Error('[ERROR] 숫자만 입력해 주세요.');
  }
};

export function endsWithThreeZeros(input) {
  if (!input.endsWith('000')) {
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.');
  }
};

export function isInRange(input) {
  if (Number(input) < 1 || Number(input) > 45) {
    throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  }
};