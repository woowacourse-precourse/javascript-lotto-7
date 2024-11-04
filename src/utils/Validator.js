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

  validateWinningNumbersInput(winningNumbersInput) {
    const winningNumbersInputRegex = /^[\d,]+$/;
    if (!winningNumbersInputRegex.test(winningNumbersInput)) {
      throw new Error("[ERROR] 당첨 번호는 숫자와 쉼표로만 이루어져야 합니다.");
    }
  }

  validateDuplicateWinningNumbers(winningNumbers) {
    const testNumbers = new Set(winningNumbers);
    if (testNumbers.size !== winningNumbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복되지 않아야 합니다.");
    }
  }
}

export default Validator;