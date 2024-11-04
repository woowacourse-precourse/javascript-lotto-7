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
    }
  }
}

export default NumberValidator;
