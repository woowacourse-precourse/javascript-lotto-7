import validateAmount from "./validator/validateAmount.js";
import { InputView } from "./view/InputView.js";

class App {
  async run() {
    const amountInput = await InputView.getLottoAmount();
    const amount = validateAmount(amountInput);
    const lottoCount = amount / 1000;
  }
}

export default App;
