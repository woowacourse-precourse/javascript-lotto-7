import { Random } from '@woowacourse/mission-utils';

export function generateLottoNumbers() {
  const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return numbers.sort((a, b) => a - b);
}
