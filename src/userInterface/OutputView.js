import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_VIEW } from '../utils/Constants.js';

const outputView = {
  purchaseAmount: (amount) => {
    Console.print(OUTPUT_VIEW.purchaseAmount(amount));
  },

  winningStatisticsHeader: () => {
    Console.print(OUTPUT_VIEW.winningStatisticsHeader);
  },
};

export default outputView;
