import { Console } from '@woowacourse/mission-utils';
import {
  LOTTO_RESULT_MESSAGES,
  PROGRESS_MESSAGE,
} from '../constants/Message.js';

class OutputHandler {
  static showPurchsedLotto(lottoTickets) {
    Console.print(`${lottoTickets.length}${PROGRESS_MESSAGE.PURCHASE_RESULT}`);
    lottoTickets.forEach((lottoTicket) => {
      lottoTicket.showLottoNumber();
    });
  }
  static showWinningStatus(WinningStatus) {
    Console.print(PROGRESS_MESSAGE.WINNING_RESULT);
    Console.print(`${LOTTO_RESULT_MESSAGES.FIFTH}${WinningStatus[5]}개`);
    Console.print(`${LOTTO_RESULT_MESSAGES.FOURTH}${WinningStatus[4]}개`);
    Console.print(`${LOTTO_RESULT_MESSAGES.THIRD}${WinningStatus[3]}개`);
    Console.print(`${LOTTO_RESULT_MESSAGES.SECOND}${WinningStatus[2]}개`);
    Console.print(`${LOTTO_RESULT_MESSAGES.FIRST}${WinningStatus[1]}개`);
  }
  static showProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}% 입니다.`);
  }
}

export default OutputHandler;
