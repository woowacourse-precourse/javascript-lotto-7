import { MSG_PURCHASE_FEE, MSG_WINNING_NUMBERS } from "./constants.js";
import { getInput, printOutput } from "./handlers/IOhandler.js";
import getFee from "./processors/feeProcessor.js";
import getLottos from "./processors/lottoGenerator.js";
import getWinningNums from "./processors/winningNumsProcessor.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    try {
      const fee = getFee(await getInput(MSG_PURCHASE_FEE));
      const amount = fee / 1000;

      const lottos = getLottos(amount);
      printOutput(`\n${amount}개를 구매했습니다.`)
      printOutput(lottos.map(lotto => "[" + lotto.join(", ") + "]").join("\n"));

      const winningNums = getWinningNums(await getInput(MSG_WINNING_NUMBERS));

      const lotto = new Lotto(winningNums);
    } catch (err) {
      throw err;
    }
  }
}

export default App;
