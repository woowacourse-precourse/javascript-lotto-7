import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import Money from "./Money.js";
import ScratchedLottos from "./ScratchedLottos.js";
import showResultByLot from "./lotto/showResultByLot.js";
import { LOTTO_PRICE } from "./lotto/constants.js";

class App {
  async run() {
    const money = await Money.createPurchaseLotto();
    const lottoCount = Money.pay2Lotto(money.money, LOTTO_PRICE);

    const lottos = ScratchedLottos.create(lottoCount);
    lottos.print();

    const lotto = await Lotto.createWinningNumbers();

    const bonusNumber = await Bonus.createForLotto(lotto.numbers);

    showResultByLot(
      money.money,
      lottos.lottos,
      lotto.numbers,
      bonusNumber.number
    );
  }
}

export default App;
