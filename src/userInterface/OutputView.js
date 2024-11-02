import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_VIEW } from '../utils/Constants.js';

const outputView = {
  printPurchaseAmount: (amount) => {
    Console.print(OUTPUT_VIEW.purchaseAmount(amount));
  },

  printLotto: (lottos) => {
    const lottoNumbers = lottos.map((lotto) => lotto.getNumbers());
    const numbersToString = lottoNumbers.map((numbers) =>
      numbers.join(OUTPUT_VIEW.numberSeparator),
    );

    numbersToString.forEach((numbers) => {
      Console.print(OUTPUT_VIEW.lotto(numbers));
    });
  },

  printStatisticsHeader: () => {
    Console.print(OUTPUT_VIEW.statisticsHeader);
  },

  printSeparatingMark: () => {
    Console.print(OUTPUT_VIEW.separatingMark);
  },

  printWinningStatistics: (numbersOfMatched, matchingCount, prize) => {
    Console.print(
      OUTPUT_VIEW.winningStatistics(numbersOfMatched, matchingCount, prize),
    );
  },

  printBonusStatistics: (numbersOfMatched, matchingCount, prize) => {
    Console.print(
      OUTPUT_VIEW.bonusStatistics(numbersOfMatched, matchingCount, prize),
    );
  },

  printProfit: (profit) => {
    Console.print(OUTPUT_VIEW.profit(profit));
  },
};

export default outputView;
