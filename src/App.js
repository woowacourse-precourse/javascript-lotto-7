import User from './User.js';
import Lotto from './Lotto.js';
import print from './util/print.js';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from './constant/index.js';

class App {
  constructor() {
    this.user = new User();
  }

  async run() {
    await this.user.readPurchaseAmount();
    Console.print(
      `\n${this.user.purchaseCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`,
    );
    const lottoList = Lotto.purchaseLotto(this.user.purchaseCount);
    print.lottoList(lottoList);
    await this.user.readWinningNumbers();
    await this.user.readBonusNumber();

    const { winningNumbers, bonusNumber } = this.user.winningBonusNumbers;
    Lotto.matchLotto(lottoList, winningNumbers, bonusNumber);

    print.winningStatistics();
    print.profitRate(this.user.purchaseAmount, Lotto.getTotalProfit());
  }
}

export default App;
