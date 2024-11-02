import { Console } from '@woowacourse/mission-utils';
import { OUTPUT, PROMPT } from './constants/messages.js';

class OutputProcessor {
  static print(value) {
    Console.print(value);
  }

  static purchaseLotto(quantity) {
    OutputProcessor.print(PROMPT.QUANTITY(quantity));
  }

  static generateLottos(lottos) {
    OutputProcessor.print(lottos);
  }

  static printStatistics(winningCounts, totalRate) {
    OutputProcessor.print(`${PROMPT.WINNING_OUTPUT}
${OUTPUT.FIFTH_WINNING(winningCounts.fifth)}
${OUTPUT.FOURTH_WINNING(winningCounts.fourth)}
${OUTPUT.THIRH_WINNING(winningCounts.third)}
${OUTPUT.SECOND_WINNING(winningCounts.second)}
${OUTPUT.FIRST_WINNING(winningCounts.first)}
${OUTPUT.TOTAL_EARNINGS_RATE(totalRate)}
`);
  }
}

export default OutputProcessor;
