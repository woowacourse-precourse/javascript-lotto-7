import { MissionUtils } from '@woowacourse/mission-utils';
import LOTTO_NUMBERS from '../constants/config.js';

const getRandomLottoNumbers = () =>
  MissionUtils.Random.pickUniqueNumbersInRange(
    LOTTO_NUMBERS.LOWER_BOUND,
    LOTTO_NUMBERS.UPPER_BOUND,
    LOTTO_NUMBERS.NUMBER_LENGTH,
  ).sort((a, b) => a - b);

export default getRandomLottoNumbers;
