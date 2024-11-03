import { Random } from '@woowacourse/mission-utils';
import { CONFIG } from '../constants/constants.js';

const generateRandomList = () => {
  const lottoNumbers = new Set();

  while (lottoNumbers.size < CONFIG.LOTTO_COUNT) {
    const number = Random.pickNumberInRange(
      CONFIG.LOTTO_MIN_NUMBER,
      CONFIG.LOTTO_MAX_NUMBER
    );
    lottoNumbers.add(number);
  }

  return [...lottoNumbers];
};

export default generateRandomList;
