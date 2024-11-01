import { MissionUtils } from '@woowacourse/mission-utils';

export const getLottoBuyCount = (lottoButMoneyInput) => {
  return Math.floor(lottoButMoneyInput / 1000);
};

export const getRandomLottoNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};
