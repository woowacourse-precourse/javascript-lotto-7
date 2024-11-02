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

  static validateSixNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static validateUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복되는 번호가 존재합니다.');
    }
  }
}

export default Validation;
