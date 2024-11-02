import BuyLotto from './BuyLotto.js';
import LottoResult from './LottoResult.js';

class App {
  async run() {
    const buyLotto = new BuyLotto();
    const lottos = await buyLotto.buyLotto();
    const lottoResult = new LottoResult(lottos);
    const result = await lottoResult.lottoResult();
  }
}

export default App;
