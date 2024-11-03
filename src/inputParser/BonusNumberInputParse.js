import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js';

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
    return Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  }

  #validate(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.');
    }
  }
}

export default BonusNumberInputParser;
