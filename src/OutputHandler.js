import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from './constants/Message.js';

class OutputHandler {
  static showPurchsedLotto(lottoTickets) {
    Console.print(`${lottoTickets.length}${PROGRESS_MESSAGE.PURCHASE_RESULT}`);
    lottoTickets.forEach((lottoTicket) => {
      lottoTicket.showLottoNumber();
    });
  }
}

export default OutputHandler;
