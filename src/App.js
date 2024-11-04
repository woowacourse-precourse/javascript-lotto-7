import LottoMachine from "./LottoMachine.js";
import Lotto from "./Lotto.js";
import { getInputWithErrorHandling, printMessage } from "./utils/interface.js";
import BonusNumber from "./BonusNumber.js";
import { MESSAGE } from "./constants/messages.js";

class App {
  #lottoMachine;
  #winningLotto;
  #bonusNumber;

  async run() {
    await getInputWithErrorHandling({
      inputMessage: MESSAGE.INPUT_MONEY,
      handleInputFn: (input) => {
        this.#lottoMachine = new LottoMachine(input);
      },
    });

    printMessage(this.#lottoMachine.getTicketsString());

    await getInputWithErrorHandling({
      inputMessage: MESSAGE.INPUT_WINNING_LOTTO,
      handleInputFn: (input) => {
        this.#winningLotto = new Lotto(input);
      },
    });

    await getInputWithErrorHandling({
      inputMessage: MESSAGE.INPUT_BONUS_NUMBER,
      handleInputFn: (input) => {
        this.#bonusNumber = new BonusNumber(input, this.#winningLotto);
      },
    });

    const resultString = this.#lottoMachine.getWinningLottoString({
      winningLotto: this.#winningLotto,
      bonusNumber: this.#bonusNumber,
    });
    printMessage(MESSAGE.OUTPUT_RESULT + resultString);

    printMessage(this.#lottoMachine.getProfitRateString());
  }
}

export default App;
