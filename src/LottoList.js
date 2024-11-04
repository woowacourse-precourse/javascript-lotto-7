import { Console } from '@woowacourse/mission-utils';
import { generateLottoNumbers } from './utils/generateLottoNumbers.js';

class LottoList {
  #lottoTickets;

  constructor(quantity) {
    this.#lottoTickets = Array.from({ length: quantity }, () =>
      generateLottoNumbers(),
    );
  }

  getTickets() {
    return this.#lottoTickets;
  }

  printTickets() {
    this.#lottoTickets.forEach(ticket => Console.print(ticket));
  }
}

export default LottoList;
