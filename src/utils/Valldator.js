import { ERROR_PREFIX } from '../constants';

class Validator {
  static isNumber(value) {
    if (isNaN(value)) throw new Error(`${ERROR_PREFIX} 숫자만 입력해주세요.`);
  }

  static isZero(value) {
    if (value == 0) {
      throw new Error('[ERROR] 0은 유효하지 않은 값입니다.');
    }
  }

  static isPositive(value) {
    if (value <= 0) throw new Error(`${ERROR_PREFIX} 0보다 큰 수를 입력해주세요.`);
  }

  static isInteger(value) {
    if (value % 1 != 0) throw new Error(`${ERROR_PREFIX} 정수를 입력해주세요.`);
  }
}

export default Validator;
