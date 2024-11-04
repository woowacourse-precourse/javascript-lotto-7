import Money from "./lotto/class/Money.js";
import Lotto from "./lotto/class/Lotto.js";
import Bonus from "./lotto/class/Bonus.js";
import ScratchedLottos from "./lotto/class/ScratchedLottos.js";
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
