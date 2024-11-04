import { UTILS } from "../common/constants.js";

class BonusLotto {
  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    this.bonusNumber = bonusNumber;
  }

  validate(bonusNumber, winningNumbers) {
    if (bonusNumber === undefined || bonusNumber === null) {
      throw new Error("[ERROR] 보너스 번호를 입력해야 합니다.");
    }

    if (!UTILS.positive_integer.test(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 양의 정수로 입력해야 합니다.");
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 1 이상 45 이하의 숫자여야 합니다.");
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 중복 없이 입력해야 합니다.");
    }
  }
}

export default BonusLotto;
