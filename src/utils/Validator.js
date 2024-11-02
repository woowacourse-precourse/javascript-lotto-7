class Validator {
  static cashValidation(string) {
    if (!/^-?\d*\.?\d+$/.test(string)) {
      throw new Error('[ERROR] 숫자 형식이 아닙니다.');
    }

    const number = Number(string);

    if (number < 0) {
      throw new Error('[ERROR] 양수를 입력해주세요.');
    }
    if (!Number.isInteger(number)) {
      throw new Error('[ERROR] 정수만 입력 가능합니다.');
    }

    if (number % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
  }
}

export default Validator;
