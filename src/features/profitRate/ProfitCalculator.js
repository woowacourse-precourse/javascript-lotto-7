import { LOTTO, PRIZE } from '../../shared/constants/constants.js';

export const ProfitCalculator = (matchResults) => {
  const totalPrize =
    PRIZE.THREE(matchResults.three).amount * matchResults.three +
    PRIZE.FOUR(matchResults.four).amount * matchResults.four +
    PRIZE.FIVE(matchResults.five).amount * matchResults.five +
    PRIZE.FIVE_BONUS(matchResults.fiveBonus).amount * matchResults.fiveBonus +
    PRIZE.SIX(matchResults.six).amount * matchResults.six;
  const totalPurchaseAmount = matchResults.totalPurchase * LOTTO.PRICE;
  return (totalPrize / totalPurchaseAmount) * 100;
};
