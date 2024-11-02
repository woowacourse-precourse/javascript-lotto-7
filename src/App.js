import BuyLotto from './BuyLotto.js';

class App {
  async run() {
    const buyLotto = new BuyLotto();
    const lottos = await buyLotto.buyLotto();
  }
}

export default App;
