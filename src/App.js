import validateAmount from "./validator/validateAmount.js";
import { InputView } from "./view/InputView.js";
import LottoService from "./services/LottoService.js";
import OutputView from "./view/OutputView.js";

class App {
  async run() {
    const amountInput = await InputView.getLottoAmount();
    const amount = validateAmount(amountInput);

    const lottoCount = amount / 1000;
    const lottoService = new LottoService();
    lottoService.generateLottos(lottoCount);

    OutputView.printLottoCount(lottoCount);
    OutputView.printLottoNumbers(lottoService.getLottos());

    const winningNumbers = InputView.getWinningNumbers();
  }
}

export default App;
