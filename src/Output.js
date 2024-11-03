import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Logic from './Logic.js';

class Output {
  static printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((el) => {
      Console.print(el.getLottoNumber());
    });
  }

  static printResult(lottos, winningNumbers, bonusNumber) {
    Console.print('\n당첨 통계\n---\n');
    let result = Logic.matchingPlace(lottos, winningNumbers, bonusNumber);
    Console.print(`3개 일치 (5,000원) - ${result[0]}개\n`);
    Console.print(`4개 일치 (50,000원) - ${result[1]}개\n`);
    Console.print(`5개 일치 (1,500,000원) - ${result[2]}개\n`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개\n`);
    Console.print(`3개 일치 (2,000,000,000원) - ${result[4]}개\n`);
    Console.print(
      `총 수익률은 ${Logic.getProfit(result, lottos.length)}%입니다.`
    );
  }
}

export default Output;
