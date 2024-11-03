import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import Money from "./Money.js";
import { LOTTO_PRICE } from "./constants.js";
import ScratchedLottos from "./ScratchedLottos.js";

class App {
  async run() {
    // 1. 로또 구매
    const money = await Money.createPurchaseLotto();
    const lottoCount = Money.pay2Lotto(money.money, LOTTO_PRICE);

    const lottos = ScratchedLottos.create(lottoCount);
    lottos.print();

    // // 2. 로또 번호 받기
    const lotto = await Lotto.createWinningNumbers();

    // // 3. 보너스 번호 받기
    const bonusNumber = (await Bonus.createForLotto(lotto.winnningNumbers))
      .number;

    // 4. 추첨 결과
    Lotto.showResultByLot(
      money.money,
      lottos.lottos,
      lotto.winnningNumbers,
      bonusNumber
    );
  }
}

export default App;
