import { MissionUtils } from '@woowacourse/mission-utils';

export function printLottoQuantity(lottos) {
  MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.\n`);
}
