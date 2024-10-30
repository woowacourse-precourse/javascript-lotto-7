import Generator from './Generator.js';
import InputProcessor from './InputProcessor.js';
import Validator from './Validator.js';
import MESSAGES from './constants/messages.js';

class App {
  PRICE_UNIT = 1000;

  #purchasePrice;

  #lottos;

  async run() {
    this.#purchasePrice = await this.#getPurchasePrice();
    Validator.price(this.#purchasePrice);
    const quantity = this.#getPurchaseQuantity();
    const lottoGenerator = new Generator(quantity);
    const lottos = lottoGenerator.execute();
    // TODO: 당첨 번호와 보너스 번호
  }

  async #getPurchasePrice() {
    const input = await InputProcessor.get(MESSAGES.PRICE_INPUT);
    return input;
  }

  #getPurchaseQuantity() {
    const quantity = this.#purchasePrice / this.PRICE_UNIT;
    return quantity;
  }
}

export default App;
