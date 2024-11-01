import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/IOMessages.js';

class OutputView {
  static printPurchasedLottos(lottos) {
    Console.print(OUTPUT_MESSAGES.purchased_lottos(lottos.length));
    lottos.forEach((lotto) => {
      Console.print(OUTPUT_MESSAGES.lotto_numbers(lotto));
    });
  }

  static printResult(prizeCounts) {
    Console.print(OUTPUT_MESSAGES.result_header);

    OUTPUT_MESSAGES.prize_counts.forEach(({ key, message }) => {
      Console.print(`${message} - ${prizeCounts[key]}개`);
    });
  }

  static printROI(ROI) {
    Console.print(OUTPUT_MESSAGES.roi(ROI));
  }

  static printError(message) {
    Console.print(message);
  }
}

export default OutputView;
