import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_VIEW, PRIZE_CALCULATOR } from '../utils/Constants.js';

const outputView = {
  printPurchaseAmount: (amount) => {
    Console.print(OUTPUT_VIEW.purchaseAmount(amount));
  },

  printLotto: (lottos) => {
    const lottoNumbers = lottos.map((lotto) => lotto.getNumbers());
    lottoNumbers.forEach((numbers) => {
      Console.print(numbers);
    });
  },

  printStatisticsHeader: () => {
    Console.print(OUTPUT_VIEW.statisticsHeader);
  },

  printSeparatingMark: () => {
    Console.print(OUTPUT_VIEW.separatingMark);
  },

  printStatistics: (matchingTable, prizeTable = PRIZE_CALCULATOR.prize) => {
    const { bonusWinningStandard, basicTag, bonusTag } = PRIZE_CALCULATOR;

    prizeTable.forEach((targetPrize, matchedCount) => {
      const lottoCount = matchingTable.get(matchedCount);
      const basicPrize = targetPrize[basicTag].toLocaleString();
      outputView.printWinningStatistics(matchedCount, lottoCount, basicPrize);

      if (matchedCount === bonusWinningStandard) {
        const bonusPrize = targetPrize[bonusTag].toLocaleString();
        outputView.printBonusStatistics(matchedCount, lottoCount, bonusPrize);
      }
    });
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
