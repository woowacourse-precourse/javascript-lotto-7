import Lotto from "./Lotto.js";

class App {
  async run() {
    const [usedMoney, lottos] = await Lotto.buy();

    const lotto = await Lotto.createWinningNumbers();

    const bonusNumber = await lotto.getBonusNumber();

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
