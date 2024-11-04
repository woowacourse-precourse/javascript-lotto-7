import Validator from "./Validator.js";

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.bonusNumber = this.validateBonusNumber(bonusNumber, winningNumbers);
  }

  validateBonusNumber(bonusNumber, winningNumbers) {
    // 보너스 번호가 숫자인지 확인
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }

    const number = Number(bonusNumber);

    // 보너스 번호가 1~45 사이인지 확인
    Validator.validateNumberRange([number], true);

    // 보너스 번호가 당첨 번호와 중복되지 않는지 확인
    if (winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
    }

    return number;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

export default BonusNumber;
