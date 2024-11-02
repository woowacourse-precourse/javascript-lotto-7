import { Random } from '@woowacourse/mission-utils';

/**
 * 지정된 범위 내에서 고유한 숫자를 생성하는 함수
 * @param {number} min - 생성할 숫자의 최소값
 * @param {number} max - 생성할 숫자의 최대값
 * @param {number} count - 생성할 숫자의 개수
 * @returns {number[]} - 고유한 랜덤 숫자 배열
 */
const getSortedRandomNumbers = (min, max, count) => {
  return Random.pickUniqueNumbersInRange(min, max, count)
    .sort((a, b) => a - b);
};

export { 
  getSortedRandomNumbers,
};