import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import LottoStore from "./LottoStore.js";
import LottoPrize from "./LottoPrize.js";

class App {
  lottoPrize;

  constructor() {
    this.lottoPrize = new LottoPrize();
  }

  async run() {
    const money = await InputView.getLottoMoney();
    const lottoStore = new LottoStore(money);

    OutputView.printLottoCount(lottoStore.getLottoCount());
    OutputView.printLottos(lottoStore.getLottos());

    const numbers = await InputView.getWinningNumbers();
    this.lottoPrize.createWinningNumbers(numbers);
    const bonusNumber = await InputView.getBonusNumber();
    this.lottoPrize.createBonusNumber(bonusNumber);
  }
}

export default App;
