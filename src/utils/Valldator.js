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

  static isNotEmptyString(value) {
    if (value === '') throw new Error(`${ERROR_PREFIX} 어떤 값도 입력되지 않았습니다.`);
  }

  static isNumberInBoundary(
    value,
    minValue = SERVICE_CONSTANTS.numberMinBoundary,
    maxValue = SERVICE_CONSTANTS.numberMaxBoundsary,
  ) {
    if (value < minValue || value > maxValue)
      throw new Error(`${ERROR_PREFIX} ${minValue}이상 ${maxValue}이하의 값이 입력되어야 합니다.`);
  }
}

export default Validator;
