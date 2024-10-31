import InputView from './View/InputView.js';

class App {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    const purchaseAmount = this.inputView.getPuchaseAmount();
  }
}

export default App;
