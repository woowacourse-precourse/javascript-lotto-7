import { Console } from '@woowacourse/mission-utils';
import NumberValidator from '../utils/NumberValidator.js';
import LottoNumberValidator from '../utils/LottoNumberValidator.js';
import { LOTTO_ERRORS } from '../constants/constants.js';

class BonusNumber {
  #bonusNumber;

  constructor(number, winningNumber) {
    this.#validate(number, winningNumber);
    this.#bonusNumber = number;
  }

  static async createBonusNumber(winningNumber) {
    try {
      const bonusNumber =
        await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
      Console.print('');
      return new BonusNumber(bonusNumber, winningNumber);
    } catch (error) {
      Console.print(error.message);
      return this.createBonusNumber(winningNumber);
    }
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validate(number, winningNumber) {
    NumberValidator.validateIsEmpty(number);
    NumberValidator.validateIsOnlyDigits(number);

    const parsedNumber = parseInt(number, 10);
    LottoNumberValidator.validateLottoNumberRange(parsedNumber);
    this.#validateBonusInWinningNumber(parsedNumber, winningNumber);
  }

  #validateBonusInWinningNumber(bonusNumber, winningNumber) {
    if (winningNumber.includes(bonusNumber)) {
      throw new Error(LOTTO_ERRORS.BONUS_NUMBER_DUPLICATE);
    }
  }
}

export default BonusNumber;
