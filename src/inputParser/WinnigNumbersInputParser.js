import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js';

class WinningNumbersInputParser extends InputParser {
  async readLoop() {
    try {
      const winningNumbersString = await this.#read();
      const winningNumbers = this.#splitWithComma(winningNumbersString);

      return winningNumbers;
    } catch (error) {
      Console.print(error.message);

      return this.readLoop();
    }
  }

  #read() {
    return Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  }

  #splitWithComma(winningNumbersString) {
    return winningNumbersString.split(',').map(Number);
  }
}

export default WinningNumbersInputParser;
