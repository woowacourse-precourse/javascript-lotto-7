import { Console } from '@woowacourse/mission-utils';

class InputValidator {
  static validatePurchaseCost(cost) {
    if (isNaN(cost) || !Number.isInteger(cost) || cost <= 0) {
      throw new Error('[ERROR] 구입 금액은 양수여야 합니다.');
    }

    if (cost % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위이어야 합니다.');
    }
  }

  static validateWinningNumbers(numbers) {
    if (numbers.some((num) => num === null)) {
      throw new Error('[ERROR] 당첨 번호는 숫자 6개이어야 합니다.');
    }
    if (numbers.some((num) => !/^\d+$/.test(num))) {
      throw new Error('[ERROR] 당첨 번호는 쉼표를 기준으로 구분됩니다.');
    }
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
    if (
      numbers.some((num) => !Number.isInteger(num) || isNaN(num) || num <= 0)
    ) {
      throw new Error('[ERROR] 로또 번호는 양수여야 합니다.');
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error('[ERROR] 로또 번호는 1~45사이의 숫자이어야 합니다.');
    }
    const hasDuplicates = numbers.length !== new Set(numbers).size;
    if (hasDuplicates) {
      throw new Error('[ERROR] 로또 번호는 중복이 될 수 없습니다.');
    }
  }
  static validateBonusNumber(bonusNumber, winningNumbers) {
    if (bonusNumber === null) {
      throw new Error('[ERROR] 보너스 번호는 숫자 1개입니다.');
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1~45사이의 숫자이어야 합니다.');
    }
    if (
      !Number.isInteger(bonusNumber) ||
      isNaN(bonusNumber) ||
      bonusNumber <= 0
    ) {
      throw new Error('[ERROR] 보너스 번호는 1개의 양수여야 합니다.');
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}
export default InputValidator;
