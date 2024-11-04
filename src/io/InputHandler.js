import { Console } from '@woowacourse/mission-utils';
import { CONFIG } from '../constants/index.js';
import { tryAgain } from '../utils/validateUtils.js';
import { InputValidator } from '../services/index.js';

class InputHandler {
  async processMoneyInput(query) {
    return await tryAgain(async () => {
      const moneyString = await this.#readInput(query);
      InputValidator.validateMoneyString(moneyString);
      return Number(moneyString);
    });
  }

  async processMainInput(query) {
    return await tryAgain(async () => {
      const mainNumberString = await this.#readInput(query);
      const mainNumbers = mainNumberString.split(CONFIG.numbersInputDelimiter).map(Number);
      return mainNumbers;
    });
  }

  async processBonusInput(query) {
    return await tryAgain(async () => {
      const BonusNumberString = await this.#readInput(query);
      return Number(BonusNumberString);
    });
  }

  async #readInput(query) {
    return await Console.readLineAsync(query);
  }
}

export default InputHandler;
