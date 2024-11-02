import { Console } from '@woowacourse/mission-utils';
import { STATISTICS_MESSAGES, PRINT_MESSAGES } from '../constants/messages.js';

class OutputView {
  static printError(exception) {
    Console.print(`${exception.message}\n`);
  }

  static printMessage(message) {
    Console.print(message);
  }

  static printLottoBundle(lottoBundle) {
    lottoBundle.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  static printResult(winningStatistics, rangeOfReturn) {
    Console.print(PRINT_MESSAGES.OUTPUT.STATISTICS_HEADER);
    Object.values(STATISTICS_MESSAGES).forEach(({ message, key }) => {
      Console.print(`${message} - ${winningStatistics[key].count}개`);
    });
    Console.print(PRINT_MESSAGES.OUTPUT.RETURN_RATE(rangeOfReturn));
  }
}

export default OutputView;
