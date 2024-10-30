class Validator {
  static validatePurchaseAmount(amount) {
    const digitPattern = /^\d+$/;

    if (!digitPattern.test(amount)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }
  }
}

export default Validator;
