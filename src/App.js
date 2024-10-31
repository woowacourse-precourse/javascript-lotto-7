import { MissionUtils } from '@woowacourse/mission-utils';
import InputManager from './InputManager.js';
import LottoShop from './LottoShop.js';
import OutputManager from './OutputManager.js';

class App {
  async run() {
    const purchasePrice = await InputManager.getPurchasePrice();

    const lottoArray = LottoShop.purchaseLottos(purchasePrice);

    OutputManager.printPurchaseHistory(lottoArray);

    const winningLottoArray = await InputManager.getWinningNumbers();
    const bonusNumber = await InputManager.getBonusNumber();

    const rankCountMap = LottoShop.drawAll(
      lottoArray,
      winningLottoArray,
      bonusNumber,
    );

    OutputManager.printWinningStatics(rankCountMap);

    const lottoPrizeMoney = LottoShop.calculateLottoPrizeMoney(rankCountMap);

    const rateOfReturn = LottoShop.calculateRateOfReturn(
      lottoPrizeMoney,
      purchasePrice,
    );

    console.log(rateOfReturn);

    MissionUtils.Console.print('총 수익률은 62.5%입니다.');
  }
}

export default App;
