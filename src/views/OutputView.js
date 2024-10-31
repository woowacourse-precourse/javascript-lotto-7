import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printPurchasedLotto(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const sortedNumbers = lotto.getNumbers().sort((a, b) => a - b);
      Console.print(`[${sortedNumbers.join(', ')}]`);
    });
  }

  printWinningStatistics(matchCounts, earningsRatio) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${matchCounts[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${matchCounts[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchCounts[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCounts.bonus}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${matchCounts[6]}개`);
    Console.print(`총 수익률은 ${earningsRatio}%입니다.`);
  }
}
export default OutputView;
