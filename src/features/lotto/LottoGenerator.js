import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from '../../shared/constants/lotto.js';
import Lotto from '../../entities/Lotto.js';

export const LottoGenerator = (amount) => {
  const lottos = Array.from({ length: amount }, () =>
    MissionUtils.Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.SIZE).sort((a, b) => a - b),
  );

  lottos.forEach((element) => {
    MissionUtils.Console.print(`[${element.join(', ')}]`);
  });
  return lottos.map((element) => new Lotto(element));
};
