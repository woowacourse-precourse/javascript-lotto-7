import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js'

export function generateLotto(purchaseCount) {
  const lottoList = []
  for (let i = 0; i < purchaseCount; i++) {
    const lotto = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    lottoList.push(lotto);
  }
  return lottoList;
}