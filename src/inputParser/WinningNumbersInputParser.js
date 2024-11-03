import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js';

class WinningNumbersInputParser extends InputParser {
  async readLoop() {
    try {
      const winningNumbersString = await this.#read();
      const winnigNumbers = this.#splitWithComma(winningNumbersString);

      this.#validate(winnigNumbers);

      return winnigNumbers;
    } catch (error) {
      Console.print(error.message);

      return this.readLoop();
    }
  }

  #read() {
    return Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  }

  #splitWithComma(numbersString) {
    return numbersString.split(',').map(Number);
  }

  #validate(winnigNumbers) {
    if (winnigNumbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (winnigNumbers.length !== new Set(winnigNumbers).size) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }

    if (winnigNumbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.');
    }
  }
}

export default WinningNumbersInputParser;
