import { Console } from '@woowacourse/mission-utils';

class Print {
  printStatistics(winning, rate) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${winning['3']}개`);
    Console.print(`4개 일치 (50,000원) - ${winning['4']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winning['5']}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winning['7']}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winning['6']}개`);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }

  printLottos(lottos) {
    lottos.forEach(lotto => Console.print(`[${lotto.join(', ')}]`));
    Console.print('');
  }
}

export default Print;
