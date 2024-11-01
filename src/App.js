import  Input  from './Input.js';
import { validateBonusNum, validatePurchaseAmount, validateWinnigNum } from './validate.js';
import { COMMON_MESSAGE } from './message.js';

class App {
  async run() {
    const inputPurchaseAmount = new Input(validatePurchaseAmount.validation);
    await inputPurchaseAmount.inputValue(COMMON_MESSAGE.INPUT_PURCHASE);
    inputPurchaseAmount.changeNum();
    const purchaseAmount = inputPurchaseAmount.getValue();

    const inputWinningNum = new Input(validateWinnigNum.validation);
    await inputWinningNum.inputValue(COMMON_MESSAGE.INPUT_WINNING_NUM);
    inputWinningNum.changeArray();
    const winnigNum = inputWinningNum.getValue();

    const inputBonusNum = new Input((bonusNum) => validateBonusNum.validation(bonusNum, winnigNum));
    await inputBonusNum.inputValue(COMMON_MESSAGE.INPUT_BONUS_NUM);
    inputBonusNum.changeNum();
    const bonusNum = inputBonusNum.getValue();
  }
}

export default App;
