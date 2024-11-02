import Lotto from './Lotto.js';
import Validator from './utils/Validator.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers) {
    super(numbers);
    this.#bonusNumber = null;
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    this.#checkDuplicateBonusNum(bonusNumber);
    Validator.checkValidRange(bonusNumber, 1, 45, '로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #checkDuplicateBonusNum(bonusNumber) {
    if (this.getNumbers().includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}

export default WinningLotto;
