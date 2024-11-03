import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js';
import { MESSAGES, WINNING_NUMBERS_SEPARATOR } from '../constants.js';

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
    return Console.readLineAsync(`\n${MESSAGES.IO.INPUT.WINNING_NUMBERS}\n`);
  }

  #splitWithComma(winningNumbersString) {
    return winningNumbersString.split(WINNING_NUMBERS_SEPARATOR).map(Number);
  }
}

export default WinningNumbersInputParser;
