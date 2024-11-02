import throwError from "../utils/throwError";

class Validator {
  static isEmpty(input) {
    if (!input) throwError("빈 값");
    return input;
  }

  static isSeparatedFormat(input, separator = ",") {
    const values = input.split(separator).map((value) => value.trim());
    if (values.length < 1) throwError("입력 형식이 잘못됐습니다.");
    return values;
  }

  static isNumber(input) {
    if (isNaN(input)) throwError("숫자 타입 아님");
    return Number(input);
  }

  static isNagativeNumber(input) {
    if (input < 0) throwError("음수");
    return input;
  }

  static isZero(input) {
    if (input === 0) throwError("0");
    return input;
  }

  static isNumberInRange(input, min = 1, max = 45) {
    if (input < min || input > max)
      throwError(`값은 ${min}부터 ${max} 사이여야 합니다.`);
    return input;
  }

  static isLengthSix(input) {
    if (input.length !== 6) throwError("로또 번호는 6개의 숫자여야 합니다.");
    return input;
  }

  static isDuplicate(input) {
    if (new Set(input).size !== input.length) throw new Error("중복");
    return input;
  }
}

export default Validator;
