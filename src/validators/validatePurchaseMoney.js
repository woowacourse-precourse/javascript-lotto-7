function validateIsNumber(money) {
  if (Number.isNaN(money)) {
    throw new Error('[ERROR] 구입금액에 숫자가 아닌 값이 입력되었습니다.');
  }
}

function validateIsInteger(money) {
  if (!Number.isInteger(money)) {
    throw new Error('[ERROR] 구입 금액은 정수로 입력해야 합니다.');
  }
}

function validateIsSafeInteger(money) {
  if (!Number.isSafeInteger(money)) {
    throw new Error('[ERROR] 너무 큰 금액은 입력할 수 없습니다.');
  }
}

function validateMinimumAmount(money) {
  if (money < 1000) {
    throw new Error('[ERROR] 최소 구입 금액은 1,000원입니다.');
  }
}

function validateIsThousandUnit(money) {
  if (money % 1000 !== 0) {
    throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
  }
}

export function validatePurchaseMoney(money) {
  validateIsNumber(money);
  validateIsInteger(money);
  validateIsSafeInteger(money);
  validateMinimumAmount(money);
  validateIsThousandUnit(money);
}
