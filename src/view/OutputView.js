import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printError(exception) {
    Console.print(exception.message);
  }

  static printMessage(message) {
    Console.print(message);
  }

  static printLottoBundle(lottoBundle) {
    lottoBundle.forEach((lotto) => {
      Console.print(OutputView.formatLottoNumbers(lotto.getNumbers()));
    });
    Console.print('');
  }

  static formatLottoNumbers(numbers) {
    return `[${numbers.join(', ')}]`;
  }

  static printResult(winningStatistics, rangeOfReturn) {
    Console.print('당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${winningStatistics[3].count}개`);
    Console.print(`4개 일치 (50,000원) - ${winningStatistics[4].count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningStatistics[5].count}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStatistics['5bonus'].count}개`,
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${winningStatistics[6].count}개`,
    );
    Console.print(`총 수익률은 ${rangeOfReturn}%입니다.`);
  }
}

export default OutputView;
