const inputValidator = {
  checkPurchaseAmount(value) {
    this.isEmpty(value);
    this.isNumber(value);
    this.isThousandUnit(value);
    return Number(value);
  },
  checkWinningNumbers(text) {
    this.isEmpty(text);
    this.isOnlyNumber(text);
    const numbers = text.split(",").map(Number);
    this.isInRange(numbers);
    this.isUniqueNumbers(numbers);
    this.isSix(numbers);
    return numbers;
  },
  checkBonusNumber(value, winningNumbers) {
    this.isEmpty(value);
    this.isNumber(value);
    const bonus = Number(value);
    this.isBonusInRange(bonus);
    this.isUniqueBonusNumber(bonus, winningNumbers);
    return bonus;
  },
  isEmpty(value) {
    if (!value || !value.trim()) {
      throw new Error("[ERROR] 입력이 비어 있습니다.");
    }
  },
  isNumber(value) {
    if (isNaN(value)) {
      throw new Error("[ERROR] 입력에 숫자가 아닌 문자가 포함되어 있습니다.");
    }
  },
  isThousandUnit(value) {
    if (Number(value) % 1000 !== 0) {
      throw new Error("[ERROR] 입력이 1000원 단위가 아닙니다.");
    }
  },
  isOnlyNumber(text) {
    const values = text.split(",");
    values.forEach((value) => {
      if (isNaN(value) || value.trim() === "") {
        throw new Error("[ERROR] 입력에 숫자가 아닌 문자가 포함되어 있습니다.");
      }
    });
  },
  isInRange(numbers) {
    const isOutOfRange = numbers.some((num) => num < 1 || num > 45);
    if (isOutOfRange) {
      throw new Error("[ERROR] 모든 번호가 1에서 45 사이의 번호가 아닙니다.");
    }
  },
  isUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 중복된 번호가 있습니다.");
    }
  },
  isSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 6개의 번호가 아닙니다.");
    }
  },
  isBonusInRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 1에서 45 사이의 번호가 아닙니다.");
    }
  },
  isUniqueBonusNumber(bonus, winningNumbers) {
    if (winningNumbers.includes(bonus)) {
      throw new Error("[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.");
    }
  },
};

export default inputValidator;
