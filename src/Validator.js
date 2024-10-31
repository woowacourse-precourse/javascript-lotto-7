class Validator {
  static validatePurchaseAmount(input) {
    const purchaseAmount = this.#convertToNumber(input);
    this.#validateAmountRange(purchaseAmount);
  }

  static #convertToNumber(input) {
    const number = Number(input);

    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    return number;
  }

  static #validateAmountRange(amount) {
    if (amount < 1000) {
      throw new Error('[ERROR] 구입 금액은 1,000원 이상이어야 합니다.');
    }

    if (amount > 100000) {
      throw new Error('[ERROR] 구입 금액은 100,000원을 넘을 수 없습니다.');
    }

    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위여야 합니다.');
    }
  }

  static validateWinningNumbers(numbers) {
    this.#validateLength(numbers);
    this.#validateNumberRange(numbers);
    this.#validateDuplicates(numbers);
  }

  static #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
  }

  static #validateDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 당첨 번호는 중복되지 않아야 합니다.');
    }
  }

  static #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      this.#validateInteger(number);
      this.#validateSingleNumberInRange(number);
    });
  }

  static #validateInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error('[ERROR] 당첨 번호는 정수만 입력할 수 있습니다.');
    }
  }

  static #validateSingleNumberInRange(number) {
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (!Number.isInteger(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 정수여야 합니다.');
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }

  static validateLotto(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 중복된 로또 번호가 있습니다.');
    }

    numbers.forEach((number) => {
      this.#validateSingleNumberInRange(number);
    });
  }
}

export default Validator;
