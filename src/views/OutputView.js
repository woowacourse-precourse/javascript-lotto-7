import { Console } from '@woowacourse/mission-utils';
import { MESSAGES, WINNING_PRIZES } from '../constants/Constants.js';

class OutputView {
  static printMessage(message) {
    Console.print(message);
  }

  static printRandomLottoNumbers(randomLottoNumbers) {
    Console.print(`\n${randomLottoNumbers.length}${MESSAGES.OUTPUT.BUY_LOTTO_COUNT}`);
    randomLottoNumbers.forEach((lottoNumber) => Console.print(`[${lottoNumber.getNumbers().join(', ')}]`));
  }

  static printWinningStatistics(winningStatistics) {
    Console.print(MESSAGES.OUTPUT.WINNING_STATISTICS);

    Object.values(WINNING_PRIZES).forEach((prize) => {
      Console.print(`${prize.MESSAGE} - ${winningStatistics[prize.COUNT]}개`);
    });
  }

  static printEarningRate(earningRate) {
    Console.print(
      `총 수익률은 ${earningRate.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })}%입니다.`
    );
  }
}

export default OutputView;
