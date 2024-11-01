import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printRandomLottoNumbers(randomLottoNumbers) {
    Console.print(`\n${randomLottoNumbers.length}개를 구매했습니다.`);
    randomLottoNumbers.forEach((lottoNumber) => Console.print(`[${lottoNumber.getNumbers().join(', ')}]`));
  }

  static printWinningStatistics(winningStatistics) {
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${winningStatistics[0]}개
4개 일치 (50,000원) - ${winningStatistics[1]}개
5개 일치 (1,500,000원) - ${winningStatistics[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStatistics[3]}개
6개 일치 (2,000,000,000원) - ${winningStatistics[4]}개`);
  }

  static printEarningRate(earningRate) {
    Console.print(`총 수익률은 ${earningRate.toFixed(1).toLocaleString()}%입니다.`);
  }
}

export default OutputView;
