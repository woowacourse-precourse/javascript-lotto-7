import LottoMachine from "./LottoMachine.js";
import { getUserInputAsync } from "./utils/interface.js";

class App {
  async run() {
    const userMoneyInput = await getUserInputAsync("구입금액을 입력해 주세요.\n");
    const lottoMachine = new LottoMachine(userMoneyInput);
  }
}

export default App;
