import validateAmount from "./validator/validateAmount.js";
import { InputView } from "./view/InputView.js";
import LottoService from "./services/LottoService.js";
import OutputView from "./view/OutputView.js";
import validateWinningNumbers from "./validator/validateWinningNumbers.js";
import validateBonusNumber from "./validator/validateBonusNumber.js";

class App {
  async run() {
    const amountInput = await InputView.getLottoAmount();
    const amount = validateAmount(amountInput);

    const lottoCount = amount / 1000;
    const lottoService = new LottoService();
    lottoService.generateLottos(lottoCount);

    OutputView.printLottoCount(lottoCount);
    OutputView.printLottoNumbers(lottoService.getLottos());

    const winningNumbersInput = await InputView.getWinningNumbers();
    const winningNumbers = validateWinningNumbers(winningNumbersInput);

    const bonusNumberInput = await InputView.getBonusNumber();
    const bonusNumber = validateBonusNumber(bonusNumberInput, winningNumbers);

    const matchCounts = lottoService.compareLottos(winningNumbers, bonusNumber);
    OutputView.printWinningStatistics(matchCounts);

    const profit = lottoService.calculateProfit(matchCounts, amount);
  }
}

export default App;
