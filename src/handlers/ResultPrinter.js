import { Console } from '@woowacourse/mission-utils';
import IO_MESSAGES from '../constants/ioMessages.js';

class ResultPrinter {
  static printResults(matchTable, money, purchaseAmount) {
    const profitRate = ((money / purchaseAmount) * 100).toFixed(1);

    Console.print(IO_MESSAGES.STATISTICS_HEADER);
    Console.print(IO_MESSAGES.MATCH_3(matchTable[4]));
    Console.print(IO_MESSAGES.MATCH_4(matchTable[3]));
    Console.print(IO_MESSAGES.MATCH_5(matchTable[2]));
    Console.print(IO_MESSAGES.MATCH_5_BONUS(matchTable[1]));
    Console.print(IO_MESSAGES.MATCH_6(matchTable[0]));
    Console.print(IO_MESSAGES.PROFIT_RATE(profitRate));
  }
}

export default ResultPrinter;
