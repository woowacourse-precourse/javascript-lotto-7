import Generator from './Generator.js';
import InputProcessor from './InputProcessor.js';
import Statistics from './Statistics.js';
import Validator from './Validator.js';
import { LOTTO } from './constants/lotto.js';
import { PROMPT } from './constants/messages.js';
import handleError from './utils/handleError.js';

class App {
  #purchasePrice;

  #winningNumbers;

  #bonusNumber;

  async run() {
    try {
      this.#purchasePrice = await this.#getPurchasePrice();
      const quantity = this.#getPurchaseQuantity();
      const lottoGenerator = new Generator(quantity);
      const lottos = lottoGenerator.execute();
      await this.#getWinningNumbers();
      await this.#getBonusNumber();
      const winningStatistics = new Statistics(lottos, this.#purchasePrice, this.#winningNumbers, this.#bonusNumber);
      winningStatistics.result();
    } catch (error) {
      handleError(true, error);
    }
  }

  async #getPurchasePrice() {
    const input = await InputProcessor.get(PROMPT.PRICE_INPUT);
    Validator.price(input);
    return input;
  }

  #getPurchaseQuantity() {
    const quantity = this.#purchasePrice / LOTTO.PRICE_UNIT;
    return quantity;
  }

  async #getWinningNumbers() {
    const input = await InputProcessor.get(PROMPT.WINNING_NUMBER_INPUT);
    this.#winningNumbers = input.split(',');
    Validator.winningNumbers(this.#winningNumbers);
  }

  async #getBonusNumber() {
    const input = await InputProcessor.get(PROMPT.BONUS_NUMBER_INPUT);
    Validator.bonusNumber(this.#winningNumbers, input);
    this.#bonusNumber = input;
  }
}

export default App;
