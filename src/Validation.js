class Validation {
  static isNumber(input) {
    if (Number.isNaN(input)) {
      throw new Error('숫자만 입력 가능합니다.');
    }
  }
}

export default Validation;
