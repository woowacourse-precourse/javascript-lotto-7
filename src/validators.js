export class LottoInputValidator {
  static validatePurchaseAmount(amount) {
    this.validateEmpty(amount, "구입 금액");
    this.validateIsNumber(amount);
    const parsedAmount = parseInt(amount);
    this.validateMinimumAmount(parsedAmount);
    this.validateUnitAmount(parsedAmount);
    return parsedAmount;
  }

  static validateWinningNumbers(numbers) {
    this.validateEmpty(numbers, "당첨 번호");
    const parsedNumbers = this.parseAndValidateNumbers(numbers);
    this.validateDuplicateNumbers(parsedNumbers);
    this.validateNumberCount(parsedNumbers);
    return parsedNumbers;
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    this.validateEmpty(bonusNumber, "보너스 번호");
    this.validateSingleNumber(bonusNumber);
    const parsed = parseInt(bonusNumber);
    this.validateIsNumber(bonusNumber);
    this.validateNumberRange(parsed, "보너스 번호");
    this.validateDuplicateWithWinning(parsed, winningNumbers);
    return parsed;
  }

  static validateEmpty(value, fieldName) {
    // 입력값이 비어있는지 확인
    if (!value.trim()) {
      throw new Error(`[ERROR] ${fieldName}가 입력되지 않았습니다.`);
    }
  }

  static validateIsNumber(value) {
    // 숫자 외의 문자가 포함되어 있는지 확인
    if (isNaN(value)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
  }

  static validateMinimumAmount(amount) {
    // 입력받은 값이 1000보다 낮은지 확인
    if (amount < 1000) {
      throw new Error("[ERROR] 최소 구매금액은 1000원입니다.");
    }
  }

  static validateUnitAmount(amount) {
    // 입력받은 값이 1000으로 나누어 떨어지지 않는지 확인
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로만 입력할 수 있습니다.");
    }
  }

  static parseAndValidateNumbers(numbers) {
    return numbers.split(",").map((num) => {
      const trimmed = num.trim();
      this.validateNonEmpty(trimmed);
      const parsed = parseInt(trimmed);
      this.validateIsNumber(parsed);
      this.validateNumberRange(parsed, "로또 번호");
      return parsed;
    });
  }

  static validateNonEmpty(value) {
    // 입력값이 비어있는지 확인
    if (!value) {
      throw new Error("[ERROR] 빈 값은 입력할 수 없습니다.");
    }
  }

  static validateNumberRange(num, fieldName) {
    // 입력값이 1~45 범위 이내인지 확인.
    if (num < 1 || num > 45) {
      throw new Error(
        `[ERROR] ${fieldName}는 1부터 45 사이의 숫자여야 합니다.`
      );
    }
  }

  static validateDuplicateNumbers(numbers) {
    // 입력값의 원소 중 중복된 원소가 있는지 확인
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 번호는 사용할 수 없습니다.");
    }
  }

  static validateNumberCount(numbers) {
    // 6개의 숫자가 입력되었는지 확인
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
  }

  static validateSingleNumber(value) {
    // 여러 개의 숫자가 입력되었는지 확인
    if (value.includes(",")) {
      throw new Error("[ERROR] 보너스 번호가 여러 개 입력되었습니다.");
    }
  }

  static validateDuplicateWithWinning(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}
