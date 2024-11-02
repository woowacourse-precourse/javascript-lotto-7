class Validator {
  validatePurchaseAmount(purchaseAmount) {
    if (!purchaseAmount) {
      throw new Error("[ERROR] 구매 금액을 입력해 주세요.");
    }
    if (isNaN(purchaseAmount)) {
      throw new Error("[ERROR] 로또 구매 금액은 숫자여야 합니다.");
    }
    if (purchaseAmount <= 0) {
      throw new Error("[ERROR] 로또 구매 금액은 0보다 커야 합니다.");
    }
    if (purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구매 금액은 1000원 단위로 이루어져야 합니다.");
    }
  }
}

export default Validator;