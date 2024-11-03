import LottoMachine from "./LottoMachine.js";
import { getUserInputAsync, printMessage, printEmptyLine } from "./utils/interface.js";

class App {
  async run() {
    const userMoneyInput = await getUserInputAsync("구입금액을 입력해 주세요.\n");
    const lottoMachine = new LottoMachine(userMoneyInput);

    printEmptyLine();
    printMessage(lottoMachine.getTicketAmountString());

    printMessage(lottoMachine.getTicketsNumberString());
  }
}

export default App;
