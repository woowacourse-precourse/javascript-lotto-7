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

  static validateIsNumber(input) {
    if (isNaN(input)) {
      throw new Error('[ERROR] 숫자로 입력해야 합니다.');
    }
  }

  static validateCommaSeparatedFormat(numbers) {
    if (
      numbers.includes(',,') ||
      numbers.startsWith(',') ||
      numbers.endsWith(',')
    ) {
      throw new Error('[ERROR] 구분자가 잘못되었습니다.');
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

  static validatePositiveInteger(number) {
    if (!(Number.isInteger(number) && number > 0)) {
      throw new Error('[ERROR] 모든 숫자는 양의 정수여야 합니다.');
    }
  }

  static validateNumberInRange(number) {
    if (!(number >= 1 && number <= 45)) {
      throw new Error('[ERROR] 모든 숫자는 1부터 45 사이여야 합니다.');
    }
  }

  static validateUniqueBonusNumber(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 당첨번호와 중복되는 번호입니다.');
    }
  }
}

export default Validation;
