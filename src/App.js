import Lotto from "./Lotto.js";

class App {
  async run() {
    await Lotto.buy();

    const lotto = await Lotto.createWinningNumbers();

    const numbers = lotto.winnningNumbers;

    const bonusNumber = await lotto.getBonusNumber();

    return;
  }
}

export default App;
