import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_VIEW } from '../utils/Constants.js';

const outputView = {
  purchaseAmount: (amount) => {
    Console.print(OUTPUT_VIEW.purchaseAmount(amount));
  },

  winningStatisticsHeader: () => {
    Console.print(OUTPUT_VIEW.winningStatisticsHeader);
  },

  separatingMark: () => {
    Console.print(OUTPUT_VIEW.separatingMark);
  },

  winningStatistics: (numbersOfMatched, matchingCount, prize) => {
    Console.print(
      OUTPUT_VIEW.winningStatistics(numbersOfMatched, matchingCount, prize),
    );
  },
};

export default outputView;
