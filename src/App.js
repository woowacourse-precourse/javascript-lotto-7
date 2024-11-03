import { Console } from '@woowacourse/mission-utils';
import User from './User';
import { OUTPUT_MESSAGE } from './constant';
import Lotto from './Lotto';
import print from './util/print';

class App {
  constructor() {
    this.user = new User();
  }

  async run() {
    this.user.readPurchaseAmount();
    Console.print(
      `\n${this.user.purchaseCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`,
    );
    const lottoList = Lotto.purchaseLotto(this.user.purchaseCount);
    print.lottoList(lottoList);
    this.user.readWinningNumbers();
  }
}

export default App;
