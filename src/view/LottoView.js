import { getInput, printOutput, printNewLine } from './view.js';
import { INPUT_MESSAGES, OUTPUT_MESSAGES } from '../constant/constant.js';

class LottoView {
  async getMoney() {
    return await getInput(INPUT_MESSAGES.MONEY);
  }

  printLottoAmount(amount) {
    printNewLine();
    printOutput(OUTPUT_MESSAGES.LOTTO_AMOUNT(amount));
  }
}

export default LottoView;
