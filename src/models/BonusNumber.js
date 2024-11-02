import LOTTO_CONSTANTS from '../constants/lottoConstatns.js';

class BounsNumber {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    this.#validateType(bonusNumber);
    this.#validateDuplication(bonusNumber);
    this.#validateRange(bonusNumber);
    this.#validateInteger(bonusNumber);
  }

  #validateType(bonusNumber) {
    if (Number.isNaN(Number(bonusNumber))) {
      throw new Error('[ERROR] 보너스 번호는 숫자타입이어야 합니다.');
    }
  }

  #validateDuplication(bonusNumber) {
    if (this.#winningNumbers.includes(Number(bonusNumber))) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }

  #validateRange(bonusNumber) {
    const isValid =
      Number(bonusNumber) > LOTTO_CONSTANTS.END_NUMBER ||
      Number(bonusNumber) < LOTTO_CONSTANTS.START_NUMBER;

    if (isValid) {
      throw new Error(
        '[ERROR] 보너스 번호의 숫자 범위는 로또 번호의 숫자 범위와 같이 1~45여야 합니다.',
      );
    }
  }

  #validateInteger(bonusNumber) {
    if (Number(bonusNumber) !== parseInt(bonusNumber, 10)) {
      throw new Error('[ERROR] 보너스 번호는 정수형이어야 합니다.');
    }
  }
}

export default BounsNumber;
