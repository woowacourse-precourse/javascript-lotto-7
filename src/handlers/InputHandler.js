import { Console } from '@woowacourse/mission-utils';
import {
  validateBonusNumber,
  validateLottoNumbers,
  validatePurchaseMoney,
} from '../validators/index.js';
import { parseToNumber, parseWinningNumbers } from '../utils/Parser.js';

class InputHandler {
  static async #promptUserInput(message, parser, validator) {
    try {
      const userInput = await Console.readLineAsync(message);
      const parsedInput = parser(userInput);
      validator(parsedInput);
      return parsedInput;
    } catch (error) {
      Console.print(error.message);
      return this.#promptUserInput(message, parser, validator);
    }
  }

  static async getPurchaseMoney() {
    return this.#promptUserInput(
      '구입금액을 입력해 주세요.\n',
      parseToNumber,
      validatePurchaseMoney,
    );
  }

  static async getWinningNumbers() {
    return this.#promptUserInput(
      '\n당첨 번호를 입력해 주세요.\n',
      parseWinningNumbers,
      validateLottoNumbers,
    );
  }

  static async getBonusNumber(winningNumbers) {
    return this.#promptUserInput(
      '\n보너스 번호를 입력해 주세요.\n',
      parseToNumber,
      number => validateBonusNumber(number, winningNumbers),
    );
  }
}

export default InputHandler;
