import { MissionUtils } from '@woowacourse/mission-utils';

export function printLottoQuantity(lottos) {
  MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.\n`);
}

export function printLottos(lottos) {
  lottos.forEach((lotto) => {
    MissionUtils.Console.print(lotto.printNumbers());
  });
  MissionUtils.Console.print('\n');
}
