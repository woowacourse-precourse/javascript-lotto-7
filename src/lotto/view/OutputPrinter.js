import { output } from '../../util/IOUtil.js'
import { OUTPUT_MESSAGE } from '../constants/Message.js';

const printEmptyLine = () => {
  output('');
}

const printPurchaseResult = (count, lottos) => {
  output(OUTPUT_MESSAGE.PURCHASED_LOTTO_COUNT(count) + lottos);
}

const printPurchaseCountAndLottos = (lottoCount, lottos) => {
  const printLottos = lottos.map((lotto) => lotto.toString());
  printPurchaseResult(lottoCount, printLottos.join(`\n`));
  printEmptyLine();
}

const printStartWinningResult = () => {
  output(OUTPUT_MESSAGE.WINNING_RESULT_TITLE);
}

const printWinningResultOnlyWinningNumbers = (matchCount, amount, count) => {
  output(OUTPUT_MESSAGE.WINNING_RESULT(matchCount, amount, count));
}

const printWinningResultWithBonus = (matchCount, amount, count) => {
  output(OUTPUT_MESSAGE.WINNING_RESULT_WITH_BONUS(matchCount, amount, count));
}

const printWinningResult = (winningResult) => {
  printWinningResultOnlyWinningNumbers(winningResult.matchNumberCount, winningResult.prize, winningResult.count);

  if (winningResult.hasBonusNumberMatched) {
    printWinningResultWithBonus(
      winningResult.matchNumberCount,
      winningResult.bonusNumberMatchedPrize,
      winningResult.bonusNumberMatchedCount
    );
  }
}

const printWinningResults = (winningResults) => {
  printStartWinningResult();

  winningResults.forEach(result => {
    printWinningResult(result);
  });
}

const printTotalRateOfReturn = (rateOfReturn) => {
  output(OUTPUT_MESSAGE.TOTAL_RATE_OF_RETURN(rateOfReturn));
}

const outputPrinter = {
  printPurchaseCountAndLottos,
  printEmptyLine,
  printWinningResults,
  printTotalRateOfReturn
}

export default outputPrinter;