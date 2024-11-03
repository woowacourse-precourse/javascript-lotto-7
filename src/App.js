import getPurchaseAmount from "./getInput/getPurchaseAmount.js";
import getWinningNumbers from "./getInput/getWinningNumbers.js";
import getBonusNumber from "./getInput/getBonusNumber.js";
import validatePurchaseAmount from "./validate/validatePurchaseAmount.js";
import validateWinningNumbers from "./validate/validateWinningNumbers.js";
import validateBonusNumber from "./validate/validateBonusNumber.js";
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
      const purchaseAmount = await getPurchaseAmount();
      validatePurchaseAmount(purchaseAmount);
      Console.print("");

      const lottos = generateLottoByAmount(purchaseAmount);
      printLottos(lottos);
      Console.print("");

      const winningNumbers = await getWinningNumbers();
      validateWinningNumbers(winningNumbers);
      Console.print("");

      const bonusNumber = await getBonusNumber();
      validateBonusNumber(bonusNumber, winningNumbers);
      Console.print("");

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
