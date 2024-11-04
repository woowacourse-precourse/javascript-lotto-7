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

  #printLottoNumbers(lotto) {
    printOutput(OUTPUT_MESSAGES.LOTTO_SET(lotto.getLottoNumbers()));
  }

  printLottoSet(lottoSet) {
    lottoSet.forEach((lotto) => this.#printLottoNumbers(lotto));
  }

  async getWinningNumbers() {
    printNewLine();
    return await getInput(INPUT_MESSAGES.WINNING_NUMBERS);
  }

  async getBonusNumber() {
    printNewLine();
    return await getInput(INPUT_MESSAGES.BONUS_NUMBER);
  }
}

export default LottoView;
