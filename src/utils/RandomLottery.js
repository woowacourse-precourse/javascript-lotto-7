import { Random } from '@woowacourse/mission-utils';
import Lotto from '../models/Lotto.js';

const drawLottery = () => {
  const draw = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  const lotto = new Lotto(draw);
  return { draw, lotto };
};

export default drawLottery;
