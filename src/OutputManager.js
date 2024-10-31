import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from './lib/constants.js';

class OutputManager {
  static printPurchaseCount(purchaseCount) {
    MissionUtils.Console.print(
      `${purchaseCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`,
    );
  }

  static printWinningStatics() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.WINNING_STATICS);
  }

  static printAllLottos(lotoArray) {
    MissionUtils.Console.print(`${lottoCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`);
    lottoArray.forEach((lotto) => lotto.printNumbers());
  }
}

export default OutputManager;
