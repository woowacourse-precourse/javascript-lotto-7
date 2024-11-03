import LottoController from "./controller/lottoController.js";
import Lotto from "./Lotto.js";
import { InputValidation, InputView } from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
  async run() {
    const lottoAmount = await InputView.lottoAmount();

    const lottoController = new LottoController(Number(lottoAmount));

    OutputView.printLottoCount(lottoController);
    OutputView.printLottos(lottoController);
    OutputView.printNewLine();

    const winningNumbers = await InputView.lottoWinningNumbers();
    const winningLotto = new Lotto(
      winningNumbers.split(",").map((value) => Number(value))
    );
    const bonusStringNumber = await InputView.lottoBonusNumber(
      winningLotto.getNumbers()
    );
    const bonusNumber = Number(bonusStringNumber);

    lottoController.calculateWinningLottos(winningLotto, bonusNumber);

    OutputView.printStatisticsTitle();
    OutputView.printDivider();
    OutputView.printWinningStatistics(
      lottoController.getWinningPrizeStatistics()
    );

    OutputView.printProfit(lottoController.getProfitRate());
  }
}

export default App;
