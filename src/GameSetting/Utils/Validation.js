class Validation {
  static inputNaturalNumber(number) {
    let validatedNumber = Number(number);

    if (isNaN(validatedNumber)) {
      throw new Error("[ERROR] 숫자는 자연수로 입력 되어야 합니다.");
    }

    if (!Number.isInteger(validatedNumber) || validatedNumber < 1) {
      throw new Error("[ERROR] 숫자는 자연수로 입력 되어야 합니다.");
    }

    return validatedNumber;
  }

  static numbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  static numberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1-45여야 합니다.");
    }
  }

  static numbersDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복되는 숫자가 없어야 합니다.");
    }
  }
}

export default Validation;
