import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

class Generation {
  static generateLottos(amount) {
    let array = [];
    for (let i = 0; i < amount; i++) {
      array.push(
        new Lotto(
          Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
        )
      );
    }
    return array;
  }
}
export default Generation;
