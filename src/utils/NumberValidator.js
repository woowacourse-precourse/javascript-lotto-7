class NumberValidator {
  static validateIsEmpty(value) {
    if (!value) {
      throw new Error('[ERROR] 빈 문자열입니다.');
    }
  }

  static validateIsNumber(value) {
    if (Number.isNaN(parseFloat(value))) {
      throw new Error('[ERROR] 숫자로 변환되지 않습니다.');
    }
  }

  static validateNoDecimal(value) {
    if (value.toString().includes('.')) {
      throw new Error('[ERROR] 소수점이 포함되어 있습니다.');
    }
  }

  static validateIsInteger(value) {
    if (!Number.isInteger(value)) {
      throw new Error('[ERROR] 정수가 아닙니다.');
    }
  }

  static validateIsPositive(value) {
    if (value <= 0) {
      throw new Error('[ERROR] 양수가 아닙니다.');
    }
  }

  static validateLottoNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  static validateDivisibleBy1000(value) {
    if (value % 1000 !== 0) {
      throw new Error('[ERROR] 1000으로 나누어지지 않습니다.');
    }
  }
}

export default NumberValidator;
