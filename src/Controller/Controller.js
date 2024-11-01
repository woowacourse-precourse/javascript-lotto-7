import { DELIMITER, LOTTO_PRICE } from '../constants/constants.js';
import { ERROR_MESSAGES } from '../constants/messages.js';
import View from '../View/View.js';

class Controller {
  async #validateAmount(amount) {
    if (amount % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_PRICE);
    }
  }

  async #validateWinningNumbers(numbers) {
    const splittedNumbers = numbers.split(DELIMITER);

    if (!splittedNumbers) {
      throw new Error(ERROR_MESSAGES.EMPTY_LOTTO_NUMBERS);
    }

    if (!numbers.includes(DELIMITER)) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBERS);
    }

    if (splittedNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_COUNT);
    }
  }

  async execute() {
    const view = new View();

    const amount = await view.getAmount();
    await this.#validateAmount(amount);

    const winningNumbers = await view.getWinningNumbers();
    await this.#validateWinningNumbers(winningNumbers);

    await view.getBonusNumber();
  }
}

export default Controller;
