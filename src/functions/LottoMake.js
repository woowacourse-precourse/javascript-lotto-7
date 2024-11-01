import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

export const getLottoBuyCount = (lottoButMoneyInput) => {
  return Math.floor(lottoButMoneyInput / 1000);
};

const getRandomLottoNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};

export const makeLotto = () => {
  const lottoNumbers = getRandomLottoNumbers();
  return new Lotto(lottoNumbers);
};

const makeLottoArray = (lottoBuyCount) => {
  let lottoArray = [];

  for (let i = 0; i < lottoBuyCount; i++) {
    const lotto = makeLotto();
    lottoArray.push(lotto);
  }

  return lottoArray;
};
