import LottoManager from './components/LottoManager.js';

class App {
  async run() {
    const lottoManager = new LottoManager();

    await lottoManager.setLottoPurchasePrice();
    lottoManager.printPurchasedLotto();

    await lottoManager.setWinningLotto();
    lottoManager.printLottoResult();
  }
}

export default App;
