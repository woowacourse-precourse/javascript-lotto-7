import Generator from './Generator.js';
import InputProcessor from './InputProcessor.js';
import Validator from './Validator.js';
import LOTTO from './constants/lotto.js';
import MESSAGES from './constants/messages.js';
import handleError from './utils/handleError.js';

class App {
  #purchasePrice;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  async run() {
    try {
      this.#purchasePrice = await this.#getPurchasePrice();
      const quantity = this.#getPurchaseQuantity();
      const lottoGenerator = new Generator(quantity);
      const lottos = lottoGenerator.execute();
      this.winningNumbers = await this.#getWinningNumbers();
      this.#bonusNumber = await this.#getBonusNumber();
    } catch (error) {
      handleError(true, error);
    }
  }

  async #getPurchasePrice() {
    const input = await InputProcessor.get(MESSAGES.PRICE_INPUT);
    Validator.price(input);
    return input;
  }

  #getPurchaseQuantity() {
    const quantity = this.#purchasePrice / LOTTO.PRICE_UNIT;
    return quantity;
  }

  async #getWinningNumbers() {
    const input = await InputProcessor.get(MESSAGES.WINNING_NUMBER_INPUT);
    this.winningNumbers = input.split(',');
    Validator.winningNumbers(this.winningNumbers);
    return input;
  }

  async #getBonusNumber() {
    const input = await InputProcessor.get(MESSAGES.BONUS_NUMBER_INPUT);
    Validator.bonusNumber(this.winningNumbers, input);
    return input;
  }
}

export default App;
