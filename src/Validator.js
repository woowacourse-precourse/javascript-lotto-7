class Validator {
  static validateInputPrice(input) {
    if (typeof input !== 'number') {
      throw new Error('[ERROR] 입력값이 올바르지 않습니다.')
    }
    if (input < 1000) {
      throw new Error('[ERROR] 최소 1,000원 이상 입력해야 합니다.')
    }
    if (input % 1000 !== 0) {
      throw new Error('[ERROR] 입력값이 1,000원 단위로 나누어 떨어지지 않습니다.')
    }
  }

  static validateInputNumber(input) {
    this.#validateLottoNumber(input);
    input.forEach((number) => Validator.#validateNumberRange(number));
    input.forEach((number) => Validator.#validateIsNaN(number));
  }

  static validateBonusNumber(input) {
    if (input.includes(',')) {
      throw new Error('[ERROR] 보너스 번호는 1개 입력해야 합니다.')
    }
  }

  static validateParseBonusNumber(input) {
    this.#validateNumberRange(input);
    this.#validateIsNaN(input);
  }

  #validateLottoNumber(input) {
    if (input.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개 입력해야 합니다.')
    }
  }

  #validateNumberRange(number) {
    if (number <= 0 || number >= 46) {
      throw new Error('[ERROR] 보너스 번호는 1~45 사이의 숫자만 입력해야 합니다.')
    }
  }

  #validateIsNaN(number) {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 당첨 번호는 숫자만 입력할 수 있습니다.')
    }
  }
}

export default Validator;
