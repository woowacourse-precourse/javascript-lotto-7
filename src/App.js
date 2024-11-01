import Lotto from "./Lotto.js";

class App {
  async run() {
    await Lotto.buy();

    const lotto = await Lotto.createWinningNumbers();

    // lotto.winnningNumbers

    return;
  }
}

export default App;
