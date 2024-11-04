import { INPUT_MESSAGE } from './constants/message.js';

class View {
  #io;

  constructor (io) {
    this.#io = io;
  }

  get_purchase () {
    return this.#io.in(INPUT_MESSAGE.PURCAHSE_AMOUNT);
  }

  get_winning_numbers () {
    return this.#io.in(INPUT_MESSAGE.WINNING_NUMBERS);
  }

  get_bonus_number () {
    return this.#io.in(INPUT_MESSAGE.BONUS_NUMBER);
  }
}