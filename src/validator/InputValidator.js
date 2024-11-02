import { Console } from '@woowacourse/mission-utils';
import {
  isCostInUnits,
  isNumbersInRange,
  isValidatePositiveInteger,
  isWinningNumbersFormat,
} from './validatorUtils.js';
import throwError from '../Error/handleError.js';

class InputValidator {
  static validatePurchaseCost(purchaseCost) {
    this.checkPositiveInteger(purchaseCost);
    if (!isCostInUnits(purchaseCost)) {
      throwError('[ERROR] 구입 금액은 1000원 단위이어야 합니다.');
    }
  }

  static validateNumbers(numbers) {
    this.checkLottoArray(numbers);
    this.checkDuplicates(numbers);
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    this.checkPositiveInteger(bonusNumber);
    if (!isNumbersInRange(bonusNumber)) {
      throwError('[ERROR] 보너스 번호는 1~45사이의 숫자이어야 합니다.');
    }
    if (winningNumbers.includes(bonusNumber)) {
      throwError('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }

  static checkDuplicates(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throwError('[ERROR] 로또 번호는 중복이 될 수 없습니다.');
    }
  }

  static checkPositiveInteger(number) {
    if (number === null) {
      throwError('[ERROR] 입력란에는 공란 없이 입력해야합니다.');
    }
    if (!isValidatePositiveInteger(number)) {
      throwError('[ERROR] 입력 값은 모두 양의 정수여야 합니다.');
    }
  }

  static checkLottoArray(array) {
    if (array.length !== 6 || array.some((num) => num === null)) {
      throwError('[ERROR] 당첨 번호는 6개이어야 합니다.');
    }
    this.checkArrayElements(array);
  }
  static checkArrayElements(array) {
    if (array.some((num) => !isValidatePositiveInteger(num))) {
      throwError('[ERROR] 로또 번호는 양수여야 합니다.');
    }
    if (array.some((num) => !isWinningNumbersFormat(num))) {
      throwError('[ERROR] 당첨 번호는 쉼표를 기준으로 구분됩니다.');
    }
    if (array.some((num) => !isNumbersInRange(num))) {
      throwError('[ERROR] 로또 번호는 1~45사이의 숫자이어야 합니다.');
    }
  }
}
export default InputValidator;
