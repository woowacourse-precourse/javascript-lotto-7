class InputValidator {
  static validatePurchaseAmount(amount) {
    const parsedAmount = Number(amount);

    if (isNaN(parsedAmount)) {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    }

    if (parsedAmount <= 0) {
      throw new Error('[ERROR] 구입금액은 0보다 커야 합니다.');
    }

    if (parsedAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1,000원 단위여야 합니다.');
    }

    return parsedAmount;
  }
}
