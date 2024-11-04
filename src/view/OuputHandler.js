import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGES } from '../contents/OutputPrintMessage';

class OutputHandler {
  printLottos(ticketCount, lotto) {
    MissionUtils.Console.print(MESSAGES.purchaseMessage(ticketCount));
    lotto.forEach((numbers) =>
      MissionUtils.Console.print(`[${numbers.join(', ')}]`),
    );
  }

  printResult(rankCounts) {
    MissionUtils.Console.print(MESSAGES.resultHeader);
    MissionUtils.Console.print(MESSAGES.resultDivider);
    MissionUtils.Console.print(
      `${MESSAGES.matchMessages.fifth}${rankCounts['fifth']}개`,
    );
    MissionUtils.Console.print(
      `${MESSAGES.matchMessages.fourth}${rankCounts['fourth']}개`,
    );
    MissionUtils.Console.print(
      `${MESSAGES.matchMessages.third}${rankCounts['third']}개`,
    );
    MissionUtils.Console.print(
      `${MESSAGES.matchMessages.second}${rankCounts['second']}개`,
    );
    MissionUtils.Console.print(
      `${MESSAGES.matchMessages.first}${rankCounts['first']}개`,
    );
  }

  printProfit(profit) {
    MissionUtils.Console.print(MESSAGES.profitMessage(profit));
  }
}

export default OutputHandler;
