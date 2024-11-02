import { Random } from '@woowacourse/mission-utils';

const drawLottery = () => {
  const draw = Random.pickUniqueNumbersInRange(1, 45, 6);
  return draw.sort((a, b) => a - b);
};

export default drawLottery;
