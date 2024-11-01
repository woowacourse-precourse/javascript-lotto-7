import InputView from "./views/InputView.js";
import LottoStore from "./LottoStore.js";

class App {
  async run() {
    const money = await InputView.getLottoMoney();
    const lottoStore = new LottoStore(money);
  }
}

export default App;
