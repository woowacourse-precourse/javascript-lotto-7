import Lotto from './Lotto.js';

export default class WinningLotto {
  #winningNumbers;

  #bonusNumber;

  static #ERROR_MESSAGE = Object.freeze({
    INVALID_BONUS_NUMBER_RANGE:
      '[ERROR] 보너스 번호는 1부터 45 사이여야 합니다.',
    DUPLICATED_BONUS_NUMBER:
      '[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.',
  });

  static validateWinningNumbers(winningNumbers) {
    const splittedNumbers = winningNumbers.split(',').map(Number);
    const validLottoNumbers = Lotto.validate(splittedNumbers);
    return validLottoNumbers;
  }

  static validateBonusNumber(winningNumber, bonusNumber) {
    const number = Number(bonusNumber);
    if (number < 1 || number > 45) {
      throw new Error(WinningLotto.#ERROR_MESSAGE.INVALID_BONUS_NUMBER_RANGE);
    }

    if (winningNumber.includes(number)) {
      throw new Error(WinningLotto.#ERROR_MESSAGE.DUPLICATED_BONUS_NUMBER);
    }

    return number;
  }

  setWinningNumbers(winningNumbers) {
    const validWinningNumbers =
      WinningLotto.validateWinningNumbers(winningNumbers);
    this.#winningNumbers = validWinningNumbers;
  }

  setBonusNumber(bonusNumber) {
    const validBonusNumber = WinningLotto.validateBonusNumber(
      this.#winningNumbers,
      bonusNumber,
    );
    this.#bonusNumber = validBonusNumber;
  }
}
