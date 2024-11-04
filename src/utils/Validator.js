import { ERROR_PREFIX, SERVICE_CONSTANTS } from '../constants.js';

class Validator {
  static isNumber(value) {
    if (isNaN(value)) throw new Error(`${ERROR_PREFIX} 숫자만 입력해주세요.`);
  }

  static isNotZero(value) {
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

  static isRigthArrayLength(value, standard = SERVICE_CONSTANTS.defaultArrayLength) {
    if (value.length != standard)
      throw new Error(`${ERROR_PREFIX} 입력받은 데이터의 개수가 적절하지 않습니다.`);
  }

  static isNumberIsDividable(operator, operand = SERVICE_CONSTANTS.standardUnitAmount) {
    if (operator % operand)
      throw new Error(`${ERROR_PREFIX} 입력값은(${operator})는 ${operand}로 나누어지지 않습니다.`);
  }

  static isNotIncludeDuplicatedNumber(value) {
    if (new Set(value).size != value.length)
      throw new Error(`${ERROR_PREFIX} 중복된 값이 존재합니다.`);
  }

  static isNotIncludeList(value, array) {
    if (array.includes(value)) throw new Error(`${ERROR_PREFIX} 중복된 값을 활용할 수 없습니다.`);
  }
}

export default Validator;
