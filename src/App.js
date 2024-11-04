import User from './User.js';
import Lotto from './Lotto.js';
import print from './util/print.js';

class App {
  constructor() {
    this.user = new User();
  }

  async run() {
    this.user.readPurchaseAmount();
    const lottoList = Lotto.purchaseLotto(this.user.purchaseCount);
    print.lottoList(lottoList);
    this.user.readWinningNumbers();
    this.user.readBonusNumber();

    const { winningNumbers, bonusNumber } = this.user.winningBonusNumbers;
    lottoList.forEach((lotto) =>
      lotto.matchNumbers(winningNumbers, bonusNumber),
    );
    print.winningStatistics();
    print.profitRate(this.user.purchaseAmount, Lotto.getTotalProfit);
  }
}

export default App;
