import { MissionUtils } from '@woowacourse/mission-utils';

import { OUTPUT } from '../../../constants/constants.js';

export const printWinningStatistics = async (results) => {
  await MissionUtils.Console.print(`\n${OUTPUT.TOTAL_RESULT}`);
  await MissionUtils.Console.print('---');
  await MissionUtils.Console.print(`${OUTPUT.CORRECT_COUNT_THREE}${results.match3}${OUTPUT.CORRECT_NUMBER}`);
  await MissionUtils.Console.print(`${OUTPUT.CORRECT_COUNT_FOUR}${results.match4}${OUTPUT.CORRECT_NUMBER}`);
  await MissionUtils.Console.print(`${OUTPUT.CORRECT_COUNT_FIVE}${results.match5}${OUTPUT.CORRECT_NUMBER}`);
  await MissionUtils.Console.print(`${OUTPUT.CORRECT_COUNT_FIVE_BONUS}${results.match5Bonus}${OUTPUT.CORRECT_NUMBER}`);
  await MissionUtils.Console.print(`${OUTPUT.CORRECT_COUNT_SIX}${results.match6}${OUTPUT.CORRECT_NUMBER}`);
};

export const printTotalProfit = async (profitRate) => {
  await MissionUtils.Console.print(`${OUTPUT.TOTAL_PROFIT_OPEN}${profitRate}${OUTPUT.TOTAL_PROFIT_CLOSE}\n`);
};
