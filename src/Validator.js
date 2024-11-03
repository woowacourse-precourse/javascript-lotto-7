class Validator {
  static validatePrice(input) {
    this.validateIsInteger(input);
  }

  static validateParsePrice(input) {
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

  static validateNumber(input) {
    this.validateLottoNumber(input);
    input.forEach((number) => this.validateIsInteger(number));
  }

  static validateParseNumber(input) {
    input.forEach((number) => this.validateNumberRange(number));
    input.forEach((number) => this.validateIsNaN(number));
    input.forEach((number) => {
      const checkDuplicate = input.filter((el) => (el === number));
      this.validateIsDuplicate(checkDuplicate);
    });
  }

  static validateBonusNumber(input) {
    if (input.includes(',')) {
      throw new Error('[ERROR] 보너스 번호는 1개 입력해야 합니다.')
    }
    this.validateIsInteger(input);
  }

  static validateParseBonusNumber(input) {
    this.validateNumberRange(input);
    this.validateIsNaN(input);
  }

  static validateHasSameNumber(number, bonus) {
    number.forEach((input) => this.validateBonus(input, bonus));
  }

  static validateBonus(input, bonus) {
    if (input === bonus) {
      throw new Error('[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.')
    }
  }

  static validateLottoNumber(input) {
    if (input.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개 입력해야 합니다.')
    }
  }

  static validateNumberRange(number) {
    if (number <= 0 || number >= 46) {
      throw new Error('[ERROR] 1~45 사이의 숫자만 입력해야 합니다.')
    }
  }

  static validateIsNaN(number) {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.')
    }
  }

  static validateIsInteger(input) {
    if (input.includes('.')) {
      throw new Error('[ERROR] 소숫점을 입력할 수 없습니다.')
    }
  }

  static validateIsDuplicate(input) {
    if (input.length > 1) {
      throw new Error('[ERROR] 중복 숫자는 사용할 수 없습니다.')
    }
  }
}

export default Validator;
