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
}

export default OutputModules;
