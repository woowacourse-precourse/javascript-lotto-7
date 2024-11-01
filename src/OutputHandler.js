import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from './constants/Message.js';
import LOTTO_PRIZES from './Constants/LottoPrizes.js';

class OutputHandler {
  static showPurchsedLotto(lottoTickets) {
    Console.print(`${lottoTickets.length}${PROGRESS_MESSAGE.PURCHASE_RESULT}`);
    lottoTickets.forEach((lottoTicket) => {
      lottoTicket.showLottoNumber();
    });
  }
  static showWinningStatus(WinningStatus) {
    Console.print(PROGRESS_MESSAGE.WINNING_RESULT);
    Console.print(`${LOTTO_PRIZES.FIFTH}${WinningStatus.fifthPrizeCount}개`);
    Console.print(`${LOTTO_PRIZES.FOURTH}${WinningStatus.fourthPrizeCount}개`);
    Console.print(`${LOTTO_PRIZES.THIRD}${WinningStatus.thirdPrizeCount}개`);
    Console.print(`${LOTTO_PRIZES.SECOND}${WinningStatus.secondPrizeCount}개`);
    Console.print(`${LOTTO_PRIZES.FRIST}${WinningStatus.firstPrizeCount}개`);
  }
  static showProfitRate(profitRate) {
    Console.print(`총 수익률은 ${profitRate}% 입니다.`);
  }
}

export default OutputHandler;
