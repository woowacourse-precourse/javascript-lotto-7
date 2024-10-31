import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printPurchasedLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  static printResult(prizeCounts) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${prizeCounts[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${prizeCounts[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${prizeCounts[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${prizeCounts['5Bonus']}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${prizeCounts[6]}개`);
  }

  static printROI(ROI) {
    Console.print(`총 수익률은 ${ROI}%입니다.`);
  }
}

export default OutputView;
