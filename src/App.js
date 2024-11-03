import LottoMachine from "./LottoMachine.js";
import { getUserInputAsync, printEmptyLine, printMessage } from "./utils/interface.js";

class App {
  #lottoMachine;

  async run() {
    await this.#getUserMoneyInput();

    printEmptyLine();
    printMessage(this.#lottoMachine.getTicketAmountString());
    printMessage(this.#lottoMachine.getTicketsNumberString());
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
}

export default App;
