import { Console } from '@woowacourse/mission-utils';
import InputParser from './InputParser.js';
import { MESSAGES, WINNING_NUMBERS_SEPARATOR } from '../constants.js';
import throwError from '../utils/throwError.js';

class WinningNumbersInputParser extends InputParser {
  async readLoop() {
    try {
      const winningNumbersString = await this.#read();
      const winningNumbers = this.#splitWithComma(winningNumbersString);

      this.#validate(winningNumbers);

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

  #validate(numbers) {
    if (numbers.length !== 6) {
      throwError(MESSAGES.ERROR.LOTTO_NUMBER.SHOULD_BE_SIX);
    }

    if (numbers.length !== new Set(numbers).size) {
      throwError(MESSAGES.ERROR.LOTTO_NUMBER.SHOULD_BE_UNIQUE);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throwError(MESSAGES.ERROR.LOTTO_NUMBER.SHOULD_BE_IN_RANGE);
    }
  }
}

export default WinningNumbersInputParser;
