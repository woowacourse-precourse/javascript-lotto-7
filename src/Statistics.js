import { Console } from '@woowacourse/mission-utils';
import { CONSTANTS } from './constants.js';

export function calculateStatistics(
  lottos,
  winningNumbers,
  bonusNumber,
  totalAmount
) {
  const rankCounts = {
    THREE_MATCH: 0,
    FOUR_MATCH: 0,
    FIVE_MATCH: 0,
    FIVE_MATCH_BONUS: 0,
    SIX_MATCH: 0,
  };

  lottos.forEach((lottoNumbers) => {
    const matchCount = lottoNumbers.filter((num) =>
      winningNumbers.includes(num)
    ).length;
    const hasBonus = lottoNumbers.includes(bonusNumber);

    if (matchCount === 6) rankCounts.SIX_MATCH++;
    else if (matchCount === 5 && hasBonus) rankCounts.FIVE_MATCH_BONUS++;
    else if (matchCount === 5) rankCounts.FIVE_MATCH++;
    else if (matchCount === 4) rankCounts.FOUR_MATCH++;
    else if (matchCount === 3) rankCounts.THREE_MATCH++;
  });

  const totalPrize =
    rankCounts.SIX_MATCH * CONSTANTS.WINNING_RANKS.SIX_MATCH.prize +
    rankCounts.FIVE_MATCH_BONUS *
      CONSTANTS.WINNING_RANKS.FIVE_MATCH_BONUS.prize +
    rankCounts.FIVE_MATCH * CONSTANTS.WINNING_RANKS.FIVE_MATCH.prize +
    rankCounts.FOUR_MATCH * CONSTANTS.WINNING_RANKS.FOUR_MATCH.prize +
    rankCounts.THREE_MATCH * CONSTANTS.WINNING_RANKS.THREE_MATCH.prize;

  const profitRate = ((totalPrize / totalAmount) * 100).toFixed(1);

  Console.print(CONSTANTS.MESSAGE_WINNING_STATISTICS);
  Console.print(
    `${CONSTANTS.WINNING_RANKS.THREE_MATCH.message}${rankCounts.THREE_MATCH}개`
  );
  Console.print(
    `${CONSTANTS.WINNING_RANKS.FOUR_MATCH.message}${rankCounts.FOUR_MATCH}개`
  );
  Console.print(
    `${CONSTANTS.WINNING_RANKS.FIVE_MATCH.message}${rankCounts.FIVE_MATCH}개`
  );
  Console.print(
    `${CONSTANTS.WINNING_RANKS.FIVE_MATCH_BONUS.message}${rankCounts.FIVE_MATCH_BONUS}개`
  );
  Console.print(
    `${CONSTANTS.WINNING_RANKS.SIX_MATCH.message}${rankCounts.SIX_MATCH}개`
  );
  Console.print(`${CONSTANTS.MESSAGE_PROFIT_RATE} ${profitRate}%입니다.`);
}
