export class LottoInputValidator {
  static validatePurchaseAmount(amount) {
    // 입력값이 비어있는지 확인
    if (!amount.trim()) {
      throw new Error("[ERROR] 구입 금액이 입력되지 않았습니다.");
    }

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
    // 입력값이 비어있는지 확인
    if (!numbers.trim()) {
      throw new Error("[ERROR] 당첨 번호가 입력되지 않았습니다.");
    }

    const parsedNumbers = numbers.split(",").map((num) => {
      const trimmed = num.trim();
      if (!trimmed) {
        throw new Error("[ERROR] 빈 값은 입력할 수 없습니다.");
      }

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

  static validateBonusNumber(bonusNumber, winningNumbers) {
    // 입력값이 비어있는지 확인
    if (!bonusNumber.trim()) {
      throw new Error("[ERROR] 보너스 번호가 입력되지 않았습니다.");
    }

    // 여러 개의 숫자가 입력되었는지 확인
    if (bonusNumber.includes(",")) {
      throw new Error("[ERROR] 보너스 번호가 여러 개 입력되었습니다.");
    }

    const parsed = parseInt(bonusNumber);

    if (isNaN(parsed)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }

    if (parsed < 1 || parsed > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    if (winningNumbers.includes(parsed)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }

    return parsed;
  }
}
