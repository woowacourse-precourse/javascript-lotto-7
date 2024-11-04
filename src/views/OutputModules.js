import { Console } from '@woowacourse/mission-utils';

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
}

export default OutputModules;
