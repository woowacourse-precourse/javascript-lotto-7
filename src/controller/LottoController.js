import InputView from '../views/InputView.js';

class LottoController {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async play() {
    try {
      const amount = await this.#inputView.readLottoAmount();
      console.log(amount);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default LottoController;
