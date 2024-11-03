const DELIMITER = ",";
const ERROR_MESSAGES = {
  LOTTO_NUMBER_COUNT_ERROR: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE_NUMBER_ERROR: "[ERROR] 중복된 수가 입력되었습니다.",
  NATURAL_NUMBER_ERROR: "[ERROR] 자연수가 아닌 값이 포함되어 있습니다.",
  INVALID_NUMBER_RANGE_ERROR: "[ERROR] 로또 번호는 1에서 45 사이여야 합니다.",
  THOUSAND_UNIT_ERROR: "[ERROR] 1000원 단위가 아닌 값이 입력되었습니다.",
};

class InputFormatter {
  #purchaseAmount;
  #winningNumbers;
  #bonusNumber;

  constructor(purchaseAmount, winningNumbers, bonusNumber) {
    this.#purchaseAmount = this.#formatInputPurchaseAmount(purchaseAmount);
    this.#winningNumbers = this.#formatInputWinningNumbers(winningNumbers);
    this.#bonusNumber = this.#formatInputBonusNumber(bonusNumber);

    this.#validatePurchaseAmount(this.#purchaseAmount);
    this.#validateWinningNumbers(this.#winningNumbers);
    this.#validateBonusNumber(this.#bonusNumber);
  }

  #formatInputPurchaseAmount(purchaseAmount) {
    return parseFloat(purchaseAmount);
  }

  #formatInputWinningNumbers(winningNumbers) {
    return winningNumbers
      .split(DELIMITER)
      .map((number) => parseFloat(number.trim()));
  }

  #formatInputBonusNumber(bonusNumber) {
    return parseFloat(bonusNumber);
  }

  #validatePurchaseAmount(amount) {
    if (!Number.isInteger(amount) && amount > 0) {
      throw new Error(ERROR_MESSAGES.NATURAL_NUMBER_ERROR);
    }

    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.THOUSAND_UNIT_ERROR);
    }
  }

  #validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.LOTTO_NUMBER_COUNT_ERROR);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER_ERROR);
    }

    numbers.forEach((number) => {
      if (!Number.isInteger(number) && amount > 0) {
        throw new Error(ERROR_MESSAGES.NATURAL_NUMBER_ERROR);
      }

      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGES.INVALID_NUMBER_RANGE_ERROR);
      }
    });
  }

  #validateBonusNumber(number) {
    if (!Number.isInteger(number) && amount > 0) {
      throw new Error(ERROR_MESSAGES.NATURAL_NUMBER_ERROR);
    }

    if (this.#winningNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER_ERROR);
    }

    if (number < 1 || number > 45) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_RANGE_ERROR);
    }
  }

  get purchaseAmount() {
    return this.#purchaseAmount;
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default InputFormatter;
