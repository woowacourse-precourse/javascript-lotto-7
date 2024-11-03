import Lotto from '../Lotto.js';
import generateLottoNumbers from '../utils/generateRandomNumbers.js';

class LottoGame {
  #lottos;

  setLotto(tickets) {
    this.#lottos = this.#generateLotto(tickets);
  }

  getLotto() {
    return this.#lottos.map((lotto) => lotto.getLottoNumbers());
  }

  #generateLotto(amount) {
    return Array.from(
      { length: amount },
      () => new Lotto(generateLottoNumbers()),
    );
  }
}

export default LottoGame;
