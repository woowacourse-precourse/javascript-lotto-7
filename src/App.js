import getValidatedBonusNumber from "./getInput/getvalidateInput/getValidatedBonusNumber.js";
import getValidatedPurchaseAmount from "./getInput/getvalidateInput/getValidatedPurchaseAmount.js";
import getValidatedWinningNumbers from "./getInput/getvalidateInput/getValidatedWinningNumbers.js";
import generateLottoByAmount from "./lottoUtils/generateLottoByAmount.js";
import getLottoResults from "./lottoUtils/getLottoResults.js";
import calculateReturnRate from "./lottoUtils/calculateReturnRate.js";
import printLottos from "./print/printLottos.js";
import printLottoResult from "./print/printLottoResult.js";
import printReturnRate from "./print/printReturnRate.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const purchaseAmount = await getValidatedPurchaseAmount();

      const lottos = generateLottoByAmount(purchaseAmount);
      printLottos(lottos);
      Console.print("");

      const winningNumbers = await getValidatedWinningNumbers();
      const bonusNumber = await getValidatedBonusNumber(winningNumbers);

      const lottoResults = getLottoResults(lottos, winningNumbers, bonusNumber);
      printLottoResult(lottoResults);

      const returnRate = calculateReturnRate(purchaseAmount, lottoResults);
      printReturnRate(returnRate);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
