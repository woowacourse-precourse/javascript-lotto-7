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
}

export default Validator;
