import { Random } from '@woowacourse/mission-utils';

function getRandomSortedNumbers(min, max, count) {
  const numbers = Random.pickUniqueNumbersInRange(min, max, count);
  return numbers.sort((a, b) => a - b);
}

export default getRandomSortedNumbers;
