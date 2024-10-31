import { MissionUtils } from '@woowacourse/mission-utils';
import LottoShop from './LottoShop.js';
import LottoBuyer from './LottoBuyer.js';
import OutputManager from './OutputManager.js';

class App {
  #lottoBuyer;
  #lottoShop;

  constructor() {
    this.#lottoBuyer = new LottoBuyer();
    this.#lottoShop = new LottoShop();
  }

  async run() {
    await this.#lottoBuyer.purchaseLotto();
    await this.#lottoShop.draw();

    const rankCountMap = this.#lottoShop.drawAll(this.#lottoBuyer.lottoArray);
    OutputManager.printWinningStatics(rankCountMap);

    const lottoPrizeMoney = LottoShop.calculateLottoPrizeMoney(rankCountMap);

    const rateOfReturn = LottoShop.calculateRateOfReturn(
      lottoPrizeMoney,
      this.#lottoBuyer.purchasePrice,
    );

    console.log(rateOfReturn);

    MissionUtils.Console.print('총 수익률은 62.5%입니다.');
  }
}

export default App;
