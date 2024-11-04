import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constant/message.js';
import { WINNING_HISTORY } from '../constant/prizes.js';

class Output {
  static printLottos(lottos) {
    Output.printPurchaseCount(lottos.length);

    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
    Console.print('');
  }

  static printPurchaseCount(purchaseCount) {
    Console.print(`\n${purchaseCount}개를 구매했습니다.`);
  }

  static printResultMessage() {
    Console.print(CONSOLE_MESSAGE.resultMessage);
  }

  static printWinningHistory(game) {
    WINNING_HISTORY.forEach((prize) => {
      Console.print(
        `${prize.description} (${prize.amount}) - ${game.getWinningResult(prize.rank)}개`,
      );
    });
  }

  static printWinningRate(winningRate) {
    Console.print(`총 수익률은 ${winningRate.toFixed(1)}%입니다.`);
  }
}

export default Output;
