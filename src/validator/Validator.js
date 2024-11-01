class Validator {
  static isEmpty(input) {
    if (!input) throw new Error("빈 값");
    return input;
  }

  static isSeparatedFormat(input, separator = ",") {
    const values = input.split(separator).map((value) => value.trim());
    if (values.length <= 1) throw new Error("입력 형식이 잘못됐습니다.");
    return values;
  }

  static isNumber(input) {
    const amount = Number(input);
    if (isNaN(amount)) throw new Error("숫자 타입 아님");
    return amount;
  }

  static isNumberInRange(input, min = 1, max = 45) {
    if (input < min || input > max)
      throw new Error(`값은 ${min}부터 ${max} 사이여야 합니다.`);
    return input;
  }

  static isDuplicate(input) {
    if (new Set(input).size !== input.length) throw new Error("중복");
    return input;
  }
}

export default Validator;
