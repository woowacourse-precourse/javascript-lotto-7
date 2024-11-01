import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

export function buyLottos(lottoCount) {
  const lottos = [];
  for (let i = 0; i < lottoCount; i++) {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    lottos.push(new Lotto(numbers));
  }
  return lottos;
}
