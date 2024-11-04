import { lotto } from "../constants/lottoConstants.js";
import {
  generateLottos,
  printLottoResult,
  printLottos,
} from "../modules/lottoService.js";
import {
  getValidatedBonusNumber,
  getValidatedPurchaseAmount,
  getValidatedWinningNumbers,
} from "../modules/userInput.js";

class App {
  async run() {
    const purchaseAmount = await getValidatedPurchaseAmount();

    const lottoCount = Math.floor(purchaseAmount / lotto.PRICE);

    const lottos = generateLottos(lottoCount);

    printLottos(lottos);

    const winningNumbers = await getValidatedWinningNumbers();

    const bonusNumber = await getValidatedBonusNumber(winningNumbers);

    printLottoResult(lottos, winningNumbers, bonusNumber, purchaseAmount);
  }
}

export default App;
