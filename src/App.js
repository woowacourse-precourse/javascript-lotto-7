import { MissionUtils } from '@woowacourse/mission-utils';
import LottoStore from './LottoStore.js';
import { PRINT_MESSAGE } from './constants.js';

class App {
  #lottoStore;

  constructor() {
    this.#lottoStore = new LottoStore();
  }

  async run() {
    try {
      await this.#inputPayment();
      MissionUtils.Console.print(`\n${this.#lottoStore.getLottoCount()}${PRINT_MESSAGE.BUY_COUNT}`);
      MissionUtils.Console.print(this.#lottoStore.printLottoList());
      await this.#inputWinningNumbers();
      await this.#inputBonusNumber();
      MissionUtils.Console.print(`${PRINT_MESSAGE.OUTPUT_WINNING_RESULT}`);
      this.#lottoStore.checkWinningLotto();
      this.#lottoStore.printWinningResult();
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
    }
  }

  async #inputPayment() {
    const payment = await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.INPUT_PAYMENT);
    this.#lottoStore.buyLotto(payment);
  }

  async #inputWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.INPUT_WINNING_NUMBERS);
    this.#lottoStore.setWinningLotto(winningNumbers);
  }

  async #inputBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.INPUT_BONUS_NUMBER);
    this.#lottoStore.setBonusNumber(bonusNumber);
  }
}

export default App;
