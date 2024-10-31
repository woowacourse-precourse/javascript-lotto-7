import { Console } from '@woowacourse/mission-utils';

class OutputView {
  printLottos(amount, lottos) {
    const lottoCount = Math.floor(amount / 1000);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  printMatchResults(statistics) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${statistics[3].count}개`);
    Console.print(`4개 일치 (50,000원) - ${statistics[4].count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${statistics[5].count}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistics['5+bonus'].count}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${statistics[6].count}개`);
  }
}

export default OutputView;
