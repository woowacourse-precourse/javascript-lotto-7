import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/messages.js';

class OutputView {
  static printPurchaseAmount(count) {
    OutputView.#printMessage(
      `${count} ${OUTPUT_MESSAGE.LOTTO_PURCHASE_MESSAGE}`
    );
  }

  static printLottoTicket(lottos) {
    OutputView.#printMessage(`[${lottos}]`);
  }

  static printLottoResult(result) {
    OutputView.#printMessage(OUTPUT_MESSAGE.LOTTO_RESULT_MESSAGE);
    OutputView.#printMessage(OUTPUT_MESSAGE.MATCH_3(result.fifth));
    OutputView.#printMessage(OUTPUT_MESSAGE.MATCH_4(result.fourth));
    OutputView.#printMessage(OUTPUT_MESSAGE.MATCH_5(result.third));
    OutputView.#printMessage(OUTPUT_MESSAGE.MATCH_5_WITH_BONUS(result.second));
    OutputView.#printMessage(OUTPUT_MESSAGE.MATCH_6(result.first));
  }

  static printProfitRate(profitRate) {
    OutputView.#printMessage(OUTPUT_MESSAGE.TOTAL_PROFIT_RATE(profitRate));
  }

  static #printMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
