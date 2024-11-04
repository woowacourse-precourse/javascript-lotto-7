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
        const inputNumber = Number(input);
        this.#lottoMachine = new LottoMachine(inputNumber);
      },
    });

    printMessage(this.#lottoMachine.getTicketsString());

    await getInputWithErrorHandling({
      inputMessage: MESSAGE.INPUT_WINNING_LOTTO,
      handleInputFn: (input) => {
        const numbers = input.split(",").map(Number);
        this.#winningLotto = new Lotto(numbers);
      },
    });

    await getInputWithErrorHandling({
      inputMessage: MESSAGE.INPUT_BONUS_NUMBER,
      handleInputFn: (input) => {
        const inputNumber = Number(input);
        this.#bonusNumber = new BonusNumber(inputNumber, this.#winningLotto);
      },
    });

    this.#lottoMachine.countWinningLotto({
      winningLotto: this.#winningLotto,
      bonusNumber: this.#bonusNumber,
    });
    printMessage(MESSAGE.OUTPUT_RESULT + this.#lottoMachine.getLottoResultString());
  }
}

export default App;
