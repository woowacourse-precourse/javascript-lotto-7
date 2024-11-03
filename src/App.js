import { MSG_PURCHASE_FEE } from "./constants.js";
import { getInput, printOutput } from "./handlers/IOhandler.js";
import getFee from "./processors/feeProcessor.js";
import getLottos from "./processors/lottoGenerator.js";

class App {
  async run() {
    try {
      const feeInput = await getInput(MSG_PURCHASE_FEE);
      const fee = getFee(feeInput);
      const amount = fee / 1000;

      const lottos = getLottos(amount);
      printOutput(`\n${amount}개를 구매했습니다.`)
      printOutput(lottos.map(lotto => "[" + lotto.join(", ") + "]").join("\n"));
    } catch (err) {
      throw err;
    }
  }
}

export default App;
