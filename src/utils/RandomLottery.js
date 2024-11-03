import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';

class DrawLottery {
  static myLotto = [];

  static drawLottery = () => {
    const draw = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    const lotto = new Lotto(draw);
    this.myLotto.push(lotto);
    return lotto;
  };
}

export default DrawLottery;
