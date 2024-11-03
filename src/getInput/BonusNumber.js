import { Console } from '@woowacourse/mission-utils';
import NumberValidator from '../utils/NumberValidator.js';

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
    NumberValidator.validateIsNumber(number);
    NumberValidator.validateNoDecimal(number);

    const parsedNumber = parseFloat(number);
    NumberValidator.validateIsInteger(parsedNumber);
    NumberValidator.validateLottoNumberRange(parsedNumber);
    this.#validateBonusInWinningNumber(parsedNumber, winningNumber);
  }

  #validateBonusInWinningNumber(bonusNumber, winningNumber) {
    if (winningNumber.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}

export default BonusNumber;
