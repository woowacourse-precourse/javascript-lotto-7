import { lottoConfig } from './lottoConfig.js';

export default class WinningLotto {
  #mainNumbers;
  #bonusNumber;
  #ERROR_MESSAGE = {
    INVALID_NUMBER_RANGE: `[ERROR] 번호의 범위는 ${lottoConfig.LOTTO_MIN_NUMBER}~${lottoConfig.LOTTO_MAX_NUMBER}여야합니다.\n`,
    MAIN_NUMBER_DUPLICATION: '[ERROR] 당첨 번호에 중복된 숫자가 있습니다.\n',
    BONUS_NUMBER_DUPLICATION: '[ERROR] 보너스 번호가 당첨번호와 중복됩니다.\n',
  };

  setMainNumbers(mainNumbers) {
    this.#validateMainNumbers(mainNumbers);
    this.#mainNumbers = mainNumbers;
  }

  setBonusNumber(bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  getMainNumbers() {
    return this.#mainNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validateMainNumbers(mainNumbers) {
    mainNumbers.forEach((number) => this.#checkNumberInRange(number));
    this.#checkMainNumbersDuplication(mainNumbers);
  }

  #validateBonusNumber(bonusNumber) {
    this.#checkNumberInRange(bonusNumber);
    this.#checkBonusNumberDuplication(bonusNumber);
  }

  #checkNumberInRange(number) {
    if (
      !(
        number >= lottoConfig.LOTTO_MIN_NUMBER &&
        number <= lottoConfig.LOTTO_MAX_NUMBER
      )
    ) {
      throw new Error(this.#ERROR_MESSAGE.INVALID_NUMBER_RANGE);
    }
  }

  #checkMainNumbersDuplication(mainNumbers) {
    const uniqueNumbers = new Set(mainNumbers);
    if (uniqueNumbers.size !== lottoConfig.LOTTO_NUM_COUNT) {
      throw new Error(this.#ERROR_MESSAGE.MAIN_NUMBER_DUPLICATION);
    }
  }

  #checkBonusNumberDuplication(bonusNumber) {
    const uniqueNumbers = new Set([...this.#mainNumbers, bonusNumber]);
    if (
      uniqueNumbers.size !==
      lottoConfig.LOTTO_NUM_COUNT + lottoConfig.LOTTO_BOUNS_NUMBER_COUNT
    ) {
      throw new Error(this.#ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION);
    }
  }
}
