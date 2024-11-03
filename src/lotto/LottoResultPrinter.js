import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants.js';

class LottoResultPrinter {
  #matchedCountPerMatchOption;

  #price;

  constructor(matchedCountPerMatchOption, price) {
    this.#matchedCountPerMatchOption = matchedCountPerMatchOption;
    this.#price = price;
  }

  printResult() {
    this.#print(MESSAGES.IO.OUTPUT.WINNING_STATISTICS);
    this.#printWinningResult();
    this.#printRateOfReturn();
  }

  #printWinningResult() {
    const matchResults = this.#matchedCountPerMatchOption.map(this.#formatMatchResult);
    this.#print(matchResults.join('\n'));
  }

  #formatMatchResult({ count, matchedCount, isBonus, prize }) {
    if (isBonus) {
      return MESSAGES.IO.OUTPUT.BONUS_MATCH_RESULT(count, prize, matchedCount);
    }

    return MESSAGES.IO.OUTPUT.MATCH_RESULT(count, prize, matchedCount);
  }

  #printRateOfReturn() {
    const totalPrize = this.#matchedCountPerMatchOption.reduce((acc, cur) => {
      const { matchedCount, prize } = cur;

      return acc + matchedCount * prize;
    }, 0);

    const rateOfReturnPercent = (totalPrize / this.#price) * 100;
    const rateOfReturn = rateOfReturnPercent.toFixed(1);

    this.#print(MESSAGES.IO.OUTPUT.TOTAL_RATE_OF_RETURN(rateOfReturn));
  }

  #print(message) {
    Console.print(message);
  }
}

export default LottoResultPrinter;
