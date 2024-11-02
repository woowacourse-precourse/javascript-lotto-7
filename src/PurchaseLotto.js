import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js'

export function purchaseLotto(purchaseCount) {
  const lottoList = []
  for (let i = 0; i < purchaseCount; i++) {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(numbers);
    lottoList.push(lotto);
  }
  return lottoList;
}

export function printPurchasedLotto(lottoList) {
  lottoList.forEach((lotto) => {
    lotto.printNumbers();
  });
}