import BuyLotto from "./BuyLotto.js";

class App {
  async run() {
    const buyLotto = new BuyLotto();
    await buyLotto.enterLottoPrice();
  }
}

export default App;
