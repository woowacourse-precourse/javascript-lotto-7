import BuyLotto from "./BuyLotto.js"
import WinLotto from './WinLotto.js'

class App {
  async run() {
    const buyLotto = new BuyLotto();
    await buyLotto.enterLottoPrice();
    new WinLotto(
      buyLotto.getPurchasedLotto(),
      buyLotto.getWinningLotto(),
      buyLotto.getBonusNumber()
    );
  }
}

export default App;
