import LottoMachine from "./LottoMachine.js";
import Lotto from "./Lotto.js";
import { getUserInputAsync, printEmptyLine, printMessage } from "./utils/interface.js";

class App {
  #lottoMachine;
  #lotto;

  async run() {
    await this.#getUserMoneyInput();

    printEmptyLine();
    printMessage(this.#lottoMachine.getTicketAmountString());
    printMessage(this.#lottoMachine.getTicketsNumberString());

    printEmptyLine();
    await this.#getUserLottoNumberInput();
  }

  async #getUserMoneyInput() {
    try {
      const userMoneyInput = await getUserInputAsync("구입금액을 입력해 주세요.\n");
      this.#lottoMachine = new LottoMachine(userMoneyInput);
    } catch (error) {
      printMessage(error.message);
      await this.#getUserMoneyInput();
    }
  }

  async #getUserLottoNumberInput() {
    try {
      const userLottoInput = await getUserInputAsync("당첨 번호를 입력해 주세요.\n");
      const lottoNumbers = userLottoInput.split(",").map(Number);
      this.#lotto = new Lotto(lottoNumbers);
    } catch (error) {
      printMessage(error.message);
      await this.#getUserLottoNumberInput();
    }
  }
}

export default App;
