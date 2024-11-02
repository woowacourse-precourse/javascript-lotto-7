import { Random } from '@woowacourse/mission-utils';

const generateLottoNumber = () => {
  const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return lottoNumbers.sort((a, b) => a - b);
};

export { generateLottoNumber };
