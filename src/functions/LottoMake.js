import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

export const getLottoBuyCount = (lottoButMoneyInput) => {
  return Math.floor(lottoButMoneyInput / 1000);
};

export const printLottoBuyCount = (lottoBuyCount) => {
  Console.print(`\n${lottoBuyCount}개를 구매했습니다.`);
};

const getRandomLottoNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};

export const makeLotto = () => {
  const lottoNumbers = getRandomLottoNumbers();
  return new Lotto(lottoNumbers);
};

export const makeLottoArray = (lottoBuyCount) => {
  let lottoArray = [];

  for (let i = 0; i < lottoBuyCount; i++) {
    const lotto = makeLotto();
    lottoArray.push(lotto);
  }

  return lottoArray;
};
