import InputView from "./views/InputView.js";
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

    const numbers = await InputView.getWinningNumbers();
    this.lottoPrize.createWinningNumbers(numbers);
    const bonusNumber = await InputView.getBonusNumber();
    this.lottoPrize.createBonusNumber(bonusNumber);
  }
}

export default App;
