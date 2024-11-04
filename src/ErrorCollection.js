class ErrorCollection {
  checkLottoNumberCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkLottoNumberIntegers(numbers) {
    const allIntegers = numbers.every((num) => Number.isInteger(num));
    if (!allIntegers) {
      throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
    }
  }

  checkLottoNumberRange(numbers) {
    const inRange = numbers.every((num) => num >= 1 && num <= 45);
    if (!inRange) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 자연수여야 합니다.");
    }
  }

  checkLottoNumberDuplicates(numbers) {
    const noDuplicates = new Set(numbers).size === numbers.length;
    if (!noDuplicates) {
      throw new Error("[ERROR] 로또 번호에 중복이 있습니다.");
    }
  }

  checkBonusNumberInteger(bonus) {
    if (!Number.isInteger(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 정수여야 합니다.");
    }
  }

  checkBonusNumberRange(bonus) {
    if (bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 정수여야 합니다.");
    }
  }

  checkBonusNumberDuplicate(bonus, winningNumbers) {
    if (winningNumbers.includes(bonus)) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다."
      );
    }
  }

  checkPurchaseAmountInteger(amount) {
    if (!Number.isInteger(amount)) {
      throw new Error("[ERROR] 구입 금액은 정수여야 합니다.");
    }
  }

  checkPurchaseAmountPositive(amount) {
    if (amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 양의 정수여야 합니다.");
    }
  }

  checkPurchaseAmountDivisibility(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
  }
}

export default ErrorCollection;
