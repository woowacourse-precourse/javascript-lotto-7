import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';

const OutputView = {
  printLottoAmount(amount) {
    Console.print(OUTPUT_MESSAGES.LOTTO_AMOUNT(amount));
  },

  printLottoNumbers(numbers) {
    Console.print(OUTPUT_MESSAGES.LOTTO_NUMBERS(numbers));
  },

  printWinningStats() {
    Console.print(OUTPUT_MESSAGES.WINNING_STATS);
  },

  printMatchResult({ three, four, five, bonus, six }) {
    Console.print(OUTPUT_MESSAGES.THREE_MATCH(three));
    Console.print(OUTPUT_MESSAGES.FOUR_MATCH(four));
    Console.print(OUTPUT_MESSAGES.FIVE_MATCH(five));
    Console.print(OUTPUT_MESSAGES.FIVE_MATCH_WITH_BONUS(bonus));
    Console.print(OUTPUT_MESSAGES.SIX_MATCH(six));
  },

  printTotalRevenue(rate) {
    Console.print(OUTPUT_MESSAGES.TOTAL_REVENUE(rate));
  },
};

export default OutputView;
