import { generateLottoNumbers } from './utils/generateLottoNumbers.js';

class LottoList {
  #lottoTickets;

  constructor(quantity) {
    this.#lottoTickets = Array.from({ length: quantity }, () => generateLottoNumbers());
  }

  getTickets() {
    return this.#lottoTickets;
  }
}

export default LottoList;
