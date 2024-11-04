import { INPUT_MESSAGE } from '../constants/message.js';

class View {
  #io;

  constructor (io) {
    this.#io = io;
  }

  getPurchase () {
    return this.#io.in(INPUT_MESSAGE.PURCAHSE_AMOUNT);
  }

  getWinningNumbers () {
    return this.#io.in(INPUT_MESSAGE.WINNING_NUMBERS);
  }

  getBonusNumber () {
    return this.#io.in(INPUT_MESSAGE.BONUS_NUMBER);
  }
}

export default View;