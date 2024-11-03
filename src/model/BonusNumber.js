import { Console } from '@woowacourse/mission-utils';
class BonusNumber {
  #bonusNumber;

  constructor(bonusNumber, winningNumbers) {
    this.#validate(bonusNumber);
    this.#checkInclude(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  #validate(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호 숫자 범위는 1~45 입니다.');
    }
    if (bonusNumber % 1 !== 0) {
      throw new Error('[ERROR] 보너스 번호는 정수만 입력 가능합니다.');
    }
    if (isNaN(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 하나의 숫자만 입력 가능합니다.');
    }
  }

  #checkInclude(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}

export default BonusNumber;
