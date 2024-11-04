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

  static validateWinningNumbers(input) {
    const numbers = input.split(',').map((num) => {
      const parsed = Number(num.trim());
      if (isNaN(parsed)) {
        throw new Error('[ERROR] 당첨 번호는 숫자여야 합니다.');
      }
      return parsed;
    });

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }

    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');
    }

    return numbers;
  }

  static validateBonusNumber(number, winningNumbers) {
    const parsed = Number(number);

    if (isNaN(parsed)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }

    if (parsed < 1 || parsed > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

    if (winningNumbers.includes(parsed)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }

    return parsed;
  }
}
export default InputValidator;
