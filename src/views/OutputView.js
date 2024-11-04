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

    const prizeMessages = [
      MESSAGES.PRIZE.MATCH_3,
      MESSAGES.PRIZE.MATCH_4,
      MESSAGES.PRIZE.MATCH_5,
      MESSAGES.PRIZE.MATCH_5_WITH_BONUS,
      MESSAGES.PRIZE.MATCH_6,
    ];
    prizeMessages.forEach((message, index) => {
      Console.print(message.replace('{count}', winningLottoNumber[index]));
    });
  }

  static printRateOfReturn(rateOfReturn) {
    Console.print(MESSAGES.RATE_OF_RETURN.replace('{rate}', rateOfReturn));
  }
}

export default OutputView;
