import { Random } from '@woowacourse/mission-utils';
import InputHandler from "./InputHandler.js";
import { LOTTO_PRICE, LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_COUNT } from "./lottoConstants.js";
import OutputHandler from "./OutputHandler.js";
import Lotto from './Lotto.js';

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
      const lottoTickets = this.#generateLottoTickets(lottoCount);
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

  #generateLottoTickets(lottoCount) {
    let LottoTickets = [];
    for(let i = 0; i < lottoCount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_MIN,
        LOTTO_NUMBER_MAX,
        LOTTO_NUMBER_COUNT
      );

      lottoNumbers.sort((a, b) => a - b);
      const lottoTicket = new Lotto(lottoNumbers);
      LottoTickets.push(lottoTicket);
    }
    return LottoTickets;
  }
}

export default LottoManager;
