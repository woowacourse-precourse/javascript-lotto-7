import InputView from "./view/InputView.js";

class App {
  constructor() {
    this.inputView = new InputView();
  }
  async run() {
    this.inputView.getLottoPrice();
  }
}

export default App;
