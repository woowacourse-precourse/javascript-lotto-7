import InputView from './View/InputView.js';

class App {
  #inputView = new InputView();

  async run() {
    const purchaseAmount = await this.#inputView.readLottoPurchaseAmount();
    console.log('purchaseAmount: ', purchaseAmount);
  }
}

export default App;
