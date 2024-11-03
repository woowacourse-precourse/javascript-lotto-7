export default class ValidatePurchaseAmount {
  static MAX_AMOUNT = 100000;
  static MIN_AMOUNT = 1000;

  static validate(amount) {
    const parsedAmount = parseInt(amount, 10);

    if (!/^\d+$/.test(amount)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }

    if (parsedAmount <= 0 || parsedAmount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000의 배수인 양수여야 합니다.");
    }

    if (parsedAmount > ValidatePurchaseAmount.MAX_AMOUNT) {
      throw new Error("[ERROR] 구입 금액은 10만원 이하여야 합니다.");
    }
  }
}
