import { MissionUtils } from '@woowacourse/mission-utils';

import Lotto from '../../Lotto.js';

export const createRandomLottoNumber = (lottoCount) => {
  const randomLottoNumber = Array.from(
    { length: lottoCount },
    () => new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)),
  );

  return randomLottoNumber;
};
