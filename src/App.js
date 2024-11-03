import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";

class App {
  async run() {
    // 1. 로또 구매
    const [usedMoney, lottos] = await Lotto.buy();

    // 2. 로또 번호 받기
    const lotto = await Lotto.createWinningNumbers();

    // 3. 보너스 번호 받기
    const bonusNumber = (await Bonus.createForLotto(lotto.winnningNumbers))
      .number;

    // 4. 추첨 결과
    Lotto.showResultByLot(
      usedMoney,
      lottos,
      lotto.winnningNumbers,
      bonusNumber
    );

    return;
  }
}

export default App;
