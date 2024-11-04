import { Random } from '@woowacourse/mission-utils';
import { GAME_RULES } from '../constants/gameRule.js';

/**
 * 지정된 범위 내에서 고유한 숫자를 생성하는 함수
 * @param {number} min - 생성할 숫자의 최소값(포함)
 * @param {number} max - 생성할 숫자의 최대값(포함)
 * @param {number} count - 생성할 숫자의 개수
 * @returns {number[]} - 고유한 랜덤 숫자 배열
 */
const getSortedRandomNumbers = (min, max, count) => {
  return Random.pickUniqueNumbersInRange(min, max, count)
    .sort((a, b) => a - b);
};

const splitByDelimiter = (input) => input.split(GAME_RULES.DELIMITER).map(num => Number(num.trim()));

export { 
  getSortedRandomNumbers,
  splitByDelimiter,
};