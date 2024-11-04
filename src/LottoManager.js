import InputHandler from "./InputHandler.js";
import OutputHandler from "./OutputHandler.js";
import Lotto from './Lotto.js';
import Validate from './Validate.js';
import LottoUtility from './LottoUtility.js';

class LottoManager {
  #inputHandler;
  #outputHandler;
  #validate;
  #lottoUtility;

  constructor() {
    this.#inputHandler = new InputHandler();
    this.#outputHandler = new OutputHandler();
    this.#validate = new Validate();
    this.#lottoUtility = new LottoUtility();
  }

  async start() {
    try {
      const amount = await this.#buyLotto();
      const lottoCount = this.#lottoUtility.calculateLottoCount(amount);
      this.#outputHandler.printLottoCount(lottoCount);

      const lottoTickets = this.#lottoUtility.generateLottoTickets(lottoCount);
      this.#outputHandler.printLottoTickets(lottoTickets);

      const winningLotto = await this.#createWinningLotto();
      const bonusNumber = await this.#createBonusNumber(winningLotto);
      const winningResult = this.#lottoUtility.checkWinningRank(lottoTickets, winningLotto, bonusNumber);
      this.#outputHandler.printWinningResult(winningResult);

      const profitRate = this.#lottoUtility.calculateProfitRate(winningResult, amount);
      this.#outputHandler.printProfitRate(profitRate);
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
