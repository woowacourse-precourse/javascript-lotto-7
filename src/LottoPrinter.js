import printOutput from './utils/printOutput.js';
import { OUTPUT_MESSAGE } from './constants/inputOutputMessages.js';

class LottoPrinter {
  static lottoNumbers(lottoNumbers) {
    printOutput(`\n${lottoNumbers.length}${OUTPUT_MESSAGE.PURCHASE_COUNT}`);
    lottoNumbers.forEach((lotto) =>
      printOutput(`[${lotto.getNumber().join(', ')}]`)
    );
    printOutput('');
  }

  static winningCount(winningCount) {
    printOutput(`\n${OUTPUT_MESSAGE.WINNING_STATISTICS}`);
    printOutput(OUTPUT_MESSAGE.HYPHENS);

    Object.entries(winningCount).forEach(([key, count]) => {
      printOutput(
        `${OUTPUT_MESSAGE[`MATCH_${key}`]}${count}${
          OUTPUT_MESSAGE.MATCH_COUNT_UNIT
        }`
      );
    });
  }

  static totalReturn(totalReturn) {
    printOutput(
      `${OUTPUT_MESSAGE.TOTAL_RETURN}${totalReturn}${OUTPUT_MESSAGE.PERCENTAGE_SUFFIX}`
    );
  }
}

export default LottoPrinter;
