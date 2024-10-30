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
      const winningNumbers = await this.#inputView.readWinningNumbers();
      console.log(winningNumbers);
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default LottoController;
