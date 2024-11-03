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
    this.#print('\n당첨 통계\n---');
    this.#printWinningResult();
    this.#printRateOfReturn();
  }

  #printWinningResult() {
    const matchResults = [];

    this.#matchedCountPerMatchOption.forEach(({ count, matchedCount, isBonus, prize }) => {
      if (isBonus) {
        matchResults.push(MESSAGES.IO.OUTPUT.BONUS_MATCH_RESULT(count, prize, matchedCount));
        return;
      }

      matchResults.push(MESSAGES.IO.OUTPUT.MATCH_RESULT(count, prize, matchedCount));
    });

    this.#print(matchResults.join('\n'));
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
