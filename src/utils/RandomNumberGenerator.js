import { Random } from '@woowacourse/mission-utils';

const generateRandomNumbers = () => {
  const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return lottoNumbers.sort((a, b) => a - b);
};

export { generateRandomNumbers };
