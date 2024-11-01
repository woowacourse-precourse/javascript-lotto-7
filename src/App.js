import  Input  from './Input.js';
import { validatePurchaseAmount } from './validate.js';
import { COMMON_MESSAGE } from './message.js';

class App {
  async run() {
    const inputPurchaseAmount = new Input(validatePurchaseAmount.validation);
    await inputPurchaseAmount.inputValue(COMMON_MESSAGE.INPUT_PURCHASE);
    const purchaseAmount = inputPurchaseAmount.getValue();
  }
}

export default App;
