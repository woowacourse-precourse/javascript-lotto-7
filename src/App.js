import { RepeatHandler } from "./handler/RepeatHandler.js";
import { PriceInputHandler } from "./handler/PriceInputHandler.js";

class App {
  #repeatHandler;
  #priceInputHandler;

  constructor() {
    this.#repeatHandler = new RepeatHandler();
    this.#priceInputHandler = new PriceInputHandler();
  }

  async run() {
    const input = await this.#repeatHandler.repeatUntilSuccess(async () => await this.#priceInputHandler.readPrice());
    console.log(input);
  }
}

export default App;
