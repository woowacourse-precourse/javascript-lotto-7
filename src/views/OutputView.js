import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Message.js';

class OutputView {
  static printStart() {
    Console.print(MESSAGES.INFO.START_PROGRAM);
  }

  static printLineBreak() {
    Console.print(MESSAGES.INFO.LINE_BREAK);
  }

  static printPurchaseNumber(purchaseNumber) {
    Console.print(
      MESSAGES.INFO.PURCHASE_QUANTITY.replace('{count}', purchaseNumber),
    );
  }

  static printLottoList(lottoList) {
    lottoList.forEach((item) => Console.print(`[${item.join(', ')}]`));
    Console.print(MESSAGES.INFO.LINE_BREAK);
  }

  static printWinningStatistics(winningLottoNumber) {
    Console.print(MESSAGES.INFO.LINE_BREAK);
    Console.print(MESSAGES.INFO.WINNING_STATISTICS);
    Console.print(MESSAGES.INFO.DASH_SYMBOL);
    Console.print(
      MESSAGES.PRIZE.MATCH_3.replace('{count}', winningLottoNumber[0]),
    );
    Console.print(
      MESSAGES.PRIZE.MATCH_4.replace('{count}', winningLottoNumber[1]),
    );
    Console.print(
      MESSAGES.PRIZE.MATCH_5.replace('{count}', winningLottoNumber[2]),
    );
    Console.print(
      MESSAGES.PRIZE.MATCH_5_WITH_BONUS.replace(
        '{count}',
        winningLottoNumber[3],
      ),
    );
    Console.print(
      MESSAGES.PRIZE.MATCH_6.replace('{count}', winningLottoNumber[4]),
    );
  }

  static printRateOfReturn(rateOfReturn) {
    Console.print(MESSAGES.RATE_OF_RETURN.replace('{rate}', rateOfReturn));
  }
}

export default OutputView;
