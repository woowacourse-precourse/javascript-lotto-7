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

export function printPrizes(prizes) {
  MissionUtils.Console.print('당첨 통계\n---\n');

  for (const [_, prize] of Object.entries(prizes)) {
    let BONUS_MESSAGE = ', 보너스 볼 일치';

    if (prize.bonus === false) {
      BONUS_MESSAGE = '';
    }

    MissionUtils.Console.print(`${prize.matchCount}개 일치${BONUS_MESSAGE} (${prize.money.toLocaleString()}원) - ${prize.count}개}`);
  }
}
