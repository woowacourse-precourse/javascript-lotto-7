import { output } from '../../util/IOUtil.js'
import { OUTPUT_MESSAGE } from '../constants/Message.js';

export function printPurchaseResult(count, lottos) {
  output(OUTPUT_MESSAGE.PURCHASED_LOTTO_COUNT(count) + lottos);
}

export function printEmptyLine() {
  output('');
}

export function printStartWinningResult() {
  output(OUTPUT_MESSAGE.WINNING_RESULT_TITLE);
}

function printWinningResultOnlyWinningNumbers(matchCount, amount, count) {
  output(OUTPUT_MESSAGE.WINNING_RESULT(matchCount, amount, count));
}

function printWinningResultWithBonus(matchCount, amount, count) {
  output(OUTPUT_MESSAGE.WINNING_RESULT_WITH_BONUS(matchCount, amount, count));
}

export function printWinningResult(winningResult) {
  printWinningResultOnlyWinningNumbers(winningResult.matchNumberCount, winningResult.prize, winningResult.count);

  if (winningResult.hasBonusNumberMatched) {
    printWinningResultWithBonus(
      winningResult.matchNumberCount,
      winningResult.bonusNumberMatchedPrize,
      winningResult.bonusNumberMatchedCount
    );
  }
}

export function printTotalRateOfReturn(rateOfReturn) {
  output(OUTPUT_MESSAGE.TOTAL_RATE_OF_RETURN(rateOfReturn));
}