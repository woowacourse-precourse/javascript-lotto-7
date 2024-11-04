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

  static #printMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
