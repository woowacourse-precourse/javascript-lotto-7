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

  static validateWinningNumbers(numbers) {
    const parsedNumbers = numbers.split(",").map((num) => {
      const parsed = parseInt(num.trim());
      if (isNaN(parsed)) {
        throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
      }
      if (parsed < 1 || parsed > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
      return parsed;
    });

    if (new Set(parsedNumbers).size !== parsedNumbers.length) {
      throw new Error("[ERROR] 중복된 번호는 사용할 수 없습니다.");
    }

    if (parsedNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    return parsedNumbers;
  }
}
