import { Console } from '@woowacourse/mission-utils';

class PrintResult {
  static printResult(matchCounts, totalYield) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${matchCounts[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${matchCounts[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchCounts[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCounts[5.5]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${matchCounts[6]}개`);
    Console.print(`총 수익률은 ${totalYield.toFixed(1)}%입니다.`);
  }
}

export default PrintResult;
