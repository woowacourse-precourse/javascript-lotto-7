import { ERROR_PREFIX } from '../constants';

class Validator {
  static isNumber(value) {
    if (isNaN(value)) throw new Error(`${ERROR_PREFIX} 숫자만 입력해주세요.`);
  }
}

export default Validator;
