import { generateRandomNumbers } from '../utils/RandomNumberGenerator.js';
import Lotto from './Lotto.js';

class LottoTickets {
  constructor(lottoCount) {
    this.tickets = this.#generateLottoTickets(lottoCount);
  }

  #generateLottoTickets(lottoCount) {
    return Array.from(
      { length: lottoCount },
      () => new Lotto(generateRandomNumbers())
    );
  }

  getTickets() {
    return this.tickets.map((ticket) => ticket.getNumbers());
  }
}

export default LottoTickets;
