import { Console } from '@woowacourse/mission-utils';
import { PRIZE_CRITERIA } from '../constants/gameRule.js';
import { STATISTICS, FORMAT, TAGS } from '../constants/message.js';

const readAsyncInput = (message) => Console.readLineAsync(`${message}\n`);

const printMessage = (message) => Console.print(message);

const throwError = (message) => {
  const errorMessage = `${TAGS.ERROR} ${message}`;
  throw new Error(errorMessage);
};

/**
 * 통계 데이터를 포맷팅하여 출력 형식에 맞게 변환하는 함수
 * @param {object} statistics - 각 등수에 대한 당첨 통계 객체
 * @returns {string} 포맷팅된 통계 문자열
 * 
 * PRIZE_CRITERIA를 기준으로 통계를 출력하기 위해 순서를 반대로 뒤집은 후, 
 * 각 등수(rank)와 설명(description)을 기반으로 통계 메시지를 생성합니다.
 * 각 통계 항목은 줄바꿈(FORMAT.LINEBREAK)으로 구분되어 연결됩니다.
 */
const formatStatistics = (statistics) => {
  return Object.values(PRIZE_CRITERIA)
    .reverse() 
    .map(({ rank, description }) =>
      STATISTICS.STATISTICSMESSAGE(description, statistics[rank].count)
    )
    .join(FORMAT.LINEBREAK);
};

export { 
  readAsyncInput,
  printMessage,
  throwError,
  formatStatistics,
};
