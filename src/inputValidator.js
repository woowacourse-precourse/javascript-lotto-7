import ERROR_MESSAGES from "./ERROR_MESSAGES";

const inputValidator = {
  checkPurchaseAmount(value) {
    this.isEmpty(value);
    this.isNumber(value);
    this.isThousandUnit(value);
    return Number(value);
  },
  checkLottoNumbers(numbers) {
    this.isSix(numbers);
    this.isUniqueNumbers(numbers);
    this.isInRange(numbers);
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
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  },
  isNumber(value) {
    if (isNaN(value)) {
      throw new Error(ERROR_MESSAGES.INCLUDE_NOT_A_NUMBER);
    }
  },
  isThousandUnit(value) {
    if (Number(value) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.IS_NOT_THOUSAND_UNIT);
    }
  },
  isOnlyNumber(text) {
    const values = text.split(",");
    values.forEach((value) => {
      if (isNaN(value) || value.trim() === "") {
        throw new Error(ERROR_MESSAGES.INCLUDE_NOT_A_NUMBER);
      }
    });
  },
  isInRange(numbers) {
    const isOutOfRange = numbers.some((num) => num < 1 || num > 45);
    if (isOutOfRange) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
    }
  },
  isUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.HAS_DUPLICATE_NUMBER);
    }
  },
  isSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
    }
  },
  isBonusInRange(number) {
    if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
    }
  },
  isUniqueBonusNumber(bonus, winningNumbers) {
    if (winningNumbers.includes(bonus)) {
      throw new Error(ERROR_MESSAGES.HAS_DUPLICATE_NUMBER);
    }
  },
};

export default inputValidator;
