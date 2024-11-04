import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from '../../shared/constants/constants.js';
import Lotto from '../../entities/Lotto.js';

export const LottoGenerator = (amount) => {
  const lottos = Array.from({ length: amount }, () =>
    MissionUtils.Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.SIZE).sort((a, b) => a - b),
  );

  lottos.forEach((element) => {
    MissionUtils.Console.print(`[${element.join(', ')}]`);
  });
  const lotto = lottos.map((element) => new Lotto(element));

  //TODO : Lotto 생성자로 넘겨주기
  return lotto;
};
