import { Random } from '@woowacourse/mission-utils';
import LOTTO from '../constants/Lotto.js';

const { MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_NUMBER_COUNT } = LOTTO;
const generateLotto = () =>
  Random.pickUniqueNumbersInRange(
    MIN_LOTTO_NUMBER,
    MAX_LOTTO_NUMBER,
    LOTTO_NUMBER_COUNT,
  ).sort((a, b) => a - b);

export default generateLotto;
