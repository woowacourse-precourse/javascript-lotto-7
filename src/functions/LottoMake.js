import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

export const getLottoBuyCount = (lottoButMoneyInput) => {
  return Math.floor(lottoButMoneyInput / 1000);
};

const getRandomLottoNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};

const makeLotto = () => {
  const lottoNumbers = getRandomLottoNumbers();
  return new Lotto(lottoNumbers);
};
