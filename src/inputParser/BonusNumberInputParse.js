import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js';
import { MESSAGES } from '../constants.js';
import throwError from '../utils/throwError.js';

class BonusNumberInputParser extends InputParser {
  async readLoop() {
    try {
      const bonusNumberString = await this.#read();
      const bonusNumber = Number(bonusNumberString);

      this.#validate(bonusNumber);

      return bonusNumber;
    } catch (error) {
      Console.print(error.message);

      return this.readLoop();
    }
  }

  #read() {
    return Console.readLineAsync(`\n${MESSAGES.IO.INPUT.BONUS_NUMBER}\n`);
  }

  #validate(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throwError(MESSAGES.ERROR.BONUS_NUMBER.SHOULD_BE_NUMBER);
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throwError(MESSAGES.ERROR.BONUS_NUMBER.SHOULD_BE_IN_RANGE);
    }
  }
}

export default BonusNumberInputParser;
