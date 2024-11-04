import { Console } from '@woowacourse/mission-utils';
import { validateBonusNumber, validateLottoNumbers, validatePurchaseMoney } from '../validators/index.js';
import { parseToNumber, parseWinningNumbers } from '../utils/Parser.js';
import { INPUT_MESSAGES } from '../constants/index.js';

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
    return this.#promptUserInput(INPUT_MESSAGES.purchase_money, parseToNumber, validatePurchaseMoney);
  }

  static async getWinningNumbers() {
    return this.#promptUserInput(INPUT_MESSAGES.winning_numbers, parseWinningNumbers, validateLottoNumbers);
  }

  static async getBonusNumber(winningNumbers) {
    return this.#promptUserInput(INPUT_MESSAGES.bonus_number, parseToNumber, number =>
      validateBonusNumber(number, winningNumbers),
    );
  }
}

export default InputHandler;
