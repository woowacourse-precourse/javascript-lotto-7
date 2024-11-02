import InputHandler from "./InputHandler.js";
import { LOTTO_PRICE } from "./lottoConstants.js";
import OutputHandler from "./OutputHandler.js";

class LottoManager {
  #inputHandler;
  #outputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
    this.#outputHandler = new OutputHandler();
  }

  async start() {
    try {
      const amount = await this.#buyLotto();
      const lottoCount = this.#calculateLottoCount(amount);
      this.#outputHandler.printLottoCount(lottoCount);
    } catch (error) {
      throw error;
    }
  }

  async #buyLotto() {
    while (true) {
      try {
        const amount = await this.#inputHandler.getAmount();
        return amount;
      } catch (error) {
        this.#outputHandler.printErrorMessage(error.message);
      }
    }
  }

  #calculateLottoCount(amount) {
    return amount / LOTTO_PRICE;
  }
}

export default LottoManager;
