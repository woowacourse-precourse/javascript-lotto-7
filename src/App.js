import InputProcessor from './InputProcessor.js';
import Validator from './Validator.js';
import MESSAGES from './constants/messages.js';

class App {
  #purchasePrice;

  async run() {
    this.#purchasePrice = await this.#getPurchasePrice();
    Validator.price(this.#purchasePrice);
  }

  async #getPurchasePrice() {
    const input = await InputProcessor.get(MESSAGES.PRICE_INPUT);
    return input;
  }
}

export default App;
