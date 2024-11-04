import LottoMachine from "./LottoMachine.js";
import Lotto from "./Lotto.js";
import {
  inputErrorControl,
  getUserInputAsync,
  printEmptyLine,
  printMessage,
} from "./utils/interface.js";
import BonusNumber from "./BonusNumber.js";
import { MESSAGE } from "./constants/messages.js";

class App {
  #lottoMachine;
  #winningLotto;
  #bonusNumber;

  async run() {
    await inputErrorControl(async () => {
      const userMoneyInput = await getUserInputAsync(MESSAGE.INPUT_MONEY);
      this.#lottoMachine = new LottoMachine(userMoneyInput);
    });

    printEmptyLine();
    printMessage(this.#lottoMachine.getTicketAmountString());
    printMessage(this.#lottoMachine.getTicketsNumberString());

    printEmptyLine();
    await inputErrorControl(async () => {
      const userLottoInput = await getUserInputAsync(MESSAGE.INPUT_WINNING_LOTTO);
      const lottoNumbers = userLottoInput.split(",").map(Number);
      this.#winningLotto = new Lotto(lottoNumbers);
    });

    printEmptyLine();
    await inputErrorControl(async () => {
      const userBonusInput = await getUserInputAsync(MESSAGE.INPUT_BONUS_NUMBER);
      const bonusNumber = Number(userBonusInput);
      this.#bonusNumber = new BonusNumber(this.#winningLotto, bonusNumber);
    });

    const resultString = this.#lottoMachine.getWinningLottoString({
      winningLotto: this.#winningLotto,
      bonusNumber: this.#bonusNumber,
    });
    printMessage(MESSAGE.OUTPUT_RESULT + resultString);

    const profitRate = this.#lottoMachine.getProfitRate();
    printMessage(MESSAGE.OUTPUT_PROFIT_RATE(profitRate));
  }
}

export default App;
