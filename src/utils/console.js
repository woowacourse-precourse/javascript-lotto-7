import { Console } from '@woowacourse/mission-utils';
import { PRIZE_CRITERIA } from '../constants/gameRule.js';
import { STATISTICS, FORMAT, TAGS } from '../constants/message.js';

const readAsyncInput = (message) => Console.readLineAsync(`${message}\n`);

const printMessage = (message) => Console.print(message);

const throwError = (message) => {
  const errorMessage = `${TAGS.ERROR} ${message}`;
  throw new Error(errorMessage);
};

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
