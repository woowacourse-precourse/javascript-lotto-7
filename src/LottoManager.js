import { Random } from '@woowacourse/mission-utils';
import InputHandler from "./InputHandler.js";
import {
  LOTTO_PRICE, LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_COUNT
} from "./lottoConstants.js";
import OutputHandler from "./OutputHandler.js";
import Lotto from './Lotto.js';
import Validate from './Validate.js';

class LottoManager {
  #inputHandler;
  #outputHandler;
  #validate;

  constructor() {
    this.#inputHandler = new InputHandler();
    this.#outputHandler = new OutputHandler();
    this.#validate = new Validate();
  }

  async start() {
    try {
      const amount = await this.#buyLotto();
      const lottoCount = this.#calculateLottoCount(amount);
      this.#outputHandler.printLottoCount(lottoCount);
      const lottoTickets = this.#generateLottoTickets(lottoCount);
      this.#outputHandler.printLottoTickets(lottoTickets);
      const winningLotto = await this.#createWinningLotto();
      const bonusNumber = await this.#createBonusNumber(winningLotto);
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
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_MIN,
        LOTTO_NUMBER_MAX,
        LOTTO_NUMBER_COUNT
      );
      const lottoTicket = new Lotto(lottoNumbers);
      LottoTickets.push(lottoTicket);
    }
    return LottoTickets;
  }

  async #createWinningLotto() {
    while (true) {
      try {
        const winningNumbers = await this.#inputHandler.getWinningNumbers();
        const winningLotto = new Lotto(winningNumbers);
        return winningLotto;
      } catch (error) {
        this.#outputHandler.printErrorMessage(error.message);
      }
    }
  }

  async #createBonusNumber(winningLotto) {
    while (true) {
      try {
        const bonusNumber = await this.#inputHandler.getBonusNumber();
        this.#validate.isDuplicateWithWinningNumbers(bonusNumber, winningLotto.getNumbers());
        return bonusNumber;
      } catch (error) {
        this.#outputHandler.printErrorMessage(error.message);
      }
    }
  }
}

export default LottoManager;
