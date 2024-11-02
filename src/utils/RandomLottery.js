import { Random } from '@woowacourse/mission-utils';

const drawLottery = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};

export default drawLottery;
