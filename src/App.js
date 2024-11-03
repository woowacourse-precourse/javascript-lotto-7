import InputView from './View/InputView.js';

class App {
  async run() {
    const purchaseAmount = await InputView.readLottoPurchaseAmount();
    console.log('purchaseAmount: ', purchaseAmount);
  }
}

export default App;
