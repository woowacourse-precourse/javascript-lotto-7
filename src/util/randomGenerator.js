//@ts-check

import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG } from '../constants/lotto.js';

/**
 * @returns {number[]}
 */
const generateRandomLottoNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    LOTTO_CONFIG.MIN_NUMBER,
    LOTTO_CONFIG.MAX_NUMBER,
    LOTTO_CONFIG.NUMBERS_PER
  );
};

export { generateRandomLottoNumbers };
