import { InputView } from "./view/InputView.js";

class App {
  async run() {
    const amountInput = await InputView.getLottoAmount();
  }
}

export default App;
