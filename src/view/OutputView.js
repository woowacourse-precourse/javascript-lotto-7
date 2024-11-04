import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, PRIZE } from '../shared/constants/constants.js';
import { ProfitCalculator } from '../features/index.js';

const printMatchResult = (prizeKey, count) => {
  MissionUtils.Console.print(PRIZE[prizeKey](count).message);
};

const printProfit = (matchResults) => {
  const totalProfit = ProfitCalculator(matchResults);
  const profitRate = totalProfit.toFixed(1);

  MissionUtils.Console.print(MESSAGE.GET_WINNING_PROFIT(profitRate));
};

const printAllMatchResults = (matchResults) => {
  printMatchResult('THREE', matchResults.three);
  printMatchResult('FOUR', matchResults.four);
  printMatchResult('FIVE', matchResults.five);
  printMatchResult('FIVE_BONUS', matchResults.fiveBonus);
  printMatchResult('SIX', matchResults.six);
};

export const printResult = (matchResults) => {
  MissionUtils.Console.print(MESSAGE.GET_WINNING_RESULT);
  printAllMatchResults(matchResults);
  printProfit(matchResults);
};
