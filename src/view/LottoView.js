import { getInput, printOutput, printNewLine } from './view.js';
import {
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  PRIZE_MONEY,
  LOCALE,
} from '../constant/constant.js';

class LottoView {
  async getMoney() {
    return await getInput(INPUT_MESSAGES.MONEY);
  }

  async getWinningNumbers() {
    printNewLine();
    return await getInput(INPUT_MESSAGES.WINNING_NUMBERS);
  }

  async getBonusNumber() {
    printNewLine();
    return await getInput(INPUT_MESSAGES.BONUS_NUMBER);
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

  #getFormattedPrize(rank) {
    return PRIZE_MONEY[rank].toLocaleString(LOCALE);
  }

  printStatistics(statstics) {
    printNewLine();
    printOutput(OUTPUT_MESSAGES.STATISTIC);
    for (const [rank, count] of Object.entries(statstics)) {
      const prize = this.#getFormattedPrize(rank);
      printOutput(OUTPUT_MESSAGES.STATISTIC_TABLE(rank, count, prize));
    }
  }

  printProfitRate(profitRate) {
    printOutput(OUTPUT_MESSAGES.PROFIT_RATE(profitRate));
  }
}

export default LottoView;
