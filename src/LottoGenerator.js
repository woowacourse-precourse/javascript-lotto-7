import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

export function generateLottos(amount) {
  const numOfLottos = Math.floor(amount / 1000);
  const lottos = [];
  for (let i = 0; i < numOfLottos; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottos.push(new Lotto(numbers));
  }
  return lottos;
}
