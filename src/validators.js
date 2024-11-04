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
    if (!value.trim()) {
      throw new Error(`[ERROR] ${fieldName}가 입력되지 않았습니다.`);
    }
  }

  static validateIsNumber(value) {
    if (isNaN(value)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
  }

  static validateMinimumAmount(amount) {
    if (amount < 1000) {
      throw new Error("[ERROR] 최소 구매금액은 1000원입니다.");
    }
  }

  static validateUnitAmount(amount) {
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
    if (!value) {
      throw new Error("[ERROR] 빈 값은 입력할 수 없습니다.");
    }
  }

  static validateNumberRange(num, fieldName) {
    if (num < 1 || num > 45) {
      throw new Error(
        `[ERROR] ${fieldName}는 1부터 45 사이의 숫자여야 합니다.`
      );
    }
  }

  static validateDuplicateNumbers(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 번호는 사용할 수 없습니다.");
    }
  }

  static validateNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
  }

  static validateSingleNumber(value) {
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
