import { Console } from '@woowacourse/mission-utils';
import { RANK_INFO } from '../constants.js';

class OutputModules {
  static printMessage(message) {
    Console.print(message);
  }

  static printLottos(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers().join(', ');
      Console.print(`[${numbers}]`);
    });
  }

  static printRankStatus(rank, result) {
    const { correctNumber, correctBonus, price } = RANK_INFO[rank];
    const formatedPrice = price.toLocaleString();

    if (correctBonus) {
      OutputModules.printMessage(
        `${correctNumber}개 일치, 보너스 볼 일치 (${formatedPrice}원) - ${result}개`,
      );

      return;
    }

    OutputModules.printMessage(`${correctNumber}개 일치 (${formatedPrice}원) - ${result}개`);
  }

  static printEarningRate(totalPrice, cash) {
    const earningRate = ((totalPrice / cash) * 100).toFixed(1);
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default OutputModules;
