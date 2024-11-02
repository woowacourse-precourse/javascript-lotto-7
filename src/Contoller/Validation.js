class Validation {
  static validateThousandUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구매 금액은 1000원 단위여야 합니다.');
    }
  }

  static validateNotEmpty(input) {
    if (input === '') {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }
  }
}

export default Validation;
