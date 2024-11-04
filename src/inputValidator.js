import ERROR_MESSAGES from "./ERROR_MESSAGES.js";

const inputValidator = {
  checkPurchaseAmount(value) {
    this.isEmpty(value);
    const amount = this.isNumber(value);
    this.isInteger(amount);
    this.isPositive(amount);
    this.isThousandUnit(amount);
    return amount;
  },
  checkLottoNumbers(numbers) {
    this.isSixLength(numbers);
    this.isUniqueNumbers(numbers);
    this.isInRange(numbers);
  },
  checkWinningNumbers(text) {
    this.isEmpty(text);
    const splitText = text
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t !== "");
    this.isSixLength(splitText);
    this.isOnlyNumber(splitText);
    const numbers = splitText.map(Number);
    this.isIntegerArray(numbers);
    this.isPositiveArray(numbers);
    this.isInRange(numbers);
    this.isUniqueNumbers(numbers);
    return numbers;
  },
  checkBonusNumber(value, winningNumbers) {
    this.isEmpty(value);
    const bonus = this.isNumber(value);
    this.isInteger(bonus);
    this.isPositive(bonus);
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
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    }
    return Number(value);
  },
  isPositive(value) {
    if (value <= 0) {
      throw new Error(ERROR_MESSAGES.NOT_POSITIVE_NUMBER);
    }
  },
  isThousandUnit(value) {
    if (value % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.NOT_THOUSAND_UNIT);
    }
  },
  isSixLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
    }
  },
  isUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.HAS_DUPLICATE_NUMBER);
    }
  },
  isInRange(numbers) {
    const isOutOfRange = numbers.some((num) => num < 1 || num > 45);
    if (isOutOfRange) {
      throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
    }
  },
  isOnlyNumber(values) {
    values.forEach((value) => {
      if (isNaN(value)) {
        throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
      }
    });
  },
  isInteger(value) {
    if (!Number.isInteger(value)) {
      throw new Error(ERROR_MESSAGES.NOT_A_INTEGER);
    }
  },
  isPositiveArray(array) {
    array.forEach((value) => {
      this.isPositive(value);
    });
  },
  isIntegerArray(array) {
    array.forEach((value) => {
      this.isInteger(value);
    });
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
