import  Input  from './Input.js';
import { validatePurchaseAmount, validateWinnigNum } from './validate.js';
import { COMMON_MESSAGE } from './message.js';

class App {
  async run() {
    const inputPurchaseAmount = new Input(validatePurchaseAmount.validation);
    await inputPurchaseAmount.inputValue(COMMON_MESSAGE.INPUT_PURCHASE);
    const purchaseAmount = inputPurchaseAmount.getValue();

    const inputWinningNum = new Input(validateWinnigNum.validation);
    await inputWinningNum.inputValue(COMMON_MESSAGE.INPUT_WINNING_NUM);
    const winnigNum = inputWinningNum.getValue();
  }
}

export default App;
