export class LottoInputValidator {
  static validatePurchaseAmount(amount) {
    // 입력받은 값이 숫자가 아닌지 확인
    if (isNaN(amount)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }

    const parsedAmount = parseInt(amount);

    // 입력받은 값이 1000보다 낮은지 확인
    if (parsedAmount < 1000) {
      throw new Error("[ERROR] 최소 구매금액은 1000원입니다.");
    }

    // 입력받은 값이 1000으로 나누어 떨어지지 않는지 확인
    if (parsedAmount % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로만 입력할 수 있습니다.");
    }

    return parsedAmount;
  }
}
