import LottoMachine from "./LottoMachine.js";
import Lotto from "./Lotto.js";
import { getUserInputAsync, printEmptyLine, printMessage } from "./utils/interface.js";
import BonusNumber from "./BonusNumber.js";
import { MESSAGE } from "./constants/messages.js";

class App {
  #lottoMachine;
  #winningLotto;
  #bonusNumber;

  async run() {
    await this.#getUserMoneyInput();

    printEmptyLine();
    printMessage(this.#lottoMachine.getTicketAmountString());
    printMessage(this.#lottoMachine.getTicketsNumberString());

    printEmptyLine();
    await this.#getUserLottoNumberInput();

    printEmptyLine();
    await this.#getUserBonusNumberInput();

    const resultString = this.#lottoMachine.getWinningLottery({
      winningLotto: this.#winningLotto,
      bonusNumber: this.#bonusNumber,
    });
    printMessage(MESSAGE.OUTPUT_RESULT + resultString);

    const profitRate = this.#lottoMachine.getProfitRate();
    printMessage(MESSAGE.OUTPUT_PROFIT_RATE(profitRate));
  }

  async #getUserMoneyInput() {
    try {
      const userMoneyInput = await getUserInputAsync(MESSAGE.INPUT_MONEY);
      this.#lottoMachine = new LottoMachine(userMoneyInput);
    } catch (error) {
      printMessage(error.message);
      await this.#getUserMoneyInput();
    }
  }

  async #getUserLottoNumberInput() {
    try {
      const userLottoInput = await getUserInputAsync(MESSAGE.INPUT_WINNING_LOTTO);
      const lottoNumbers = userLottoInput.split(",").map(Number);
      this.#winningLotto = new Lotto(lottoNumbers);
    } catch (error) {
      printMessage(error.message);
      await this.#getUserLottoNumberInput();
    }
  }

  async #getUserBonusNumberInput() {
    try {
      const userBonusInput = await getUserInputAsync(MESSAGE.INPUT_BONUS_NUMBER);
      const bonusNumber = Number(userBonusInput);
      this.#bonusNumber = new BonusNumber(this.#winningLotto, bonusNumber);
    } catch (error) {
      printMessage(error.message);
      await this.#getUserBonusNumberInput();
    }
  }
}

export default App;
