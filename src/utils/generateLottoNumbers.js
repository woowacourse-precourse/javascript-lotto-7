import { Random } from '@woowacourse/mission-utils';
import { LOTTO_SETTINGS } from '../constants/index.js';

export function generateLottoNumbers() {
  const numbers = Random.pickUniqueNumbersInRange(
    LOTTO_SETTINGS.minimum_number,
    LOTTO_SETTINGS.maximum_number,
    LOTTO_SETTINGS.required_length,
  );
  return numbers.sort((a, b) => a - b);
}
