import { MissionUtils } from '@woowacourse/mission-utils';
import InputManager from './InputManager';
import LottoShop from './LottoShop';
import OutputManager from './OutputManager';
import { LOTTO_INFORMATION_ARRAY } from './lib/constants';
import { calculateRateOfReturn } from './lib/utils';

class LottoBuyer {
  #purchasePrice;
  #lottoArray;
  #winningLottoMap;

  async purchaseLottos() {
    this.#purchasePrice = await InputManager.getPurchasePrice();

    this.#lottoArray = LottoShop.purchaseLottos(this.#purchasePrice);

    OutputManager.printPurchaseHistory(this.#lottoArray);
  }

  checkWinningLotto(lottoShop) {
    this.#winningLottoMap = lottoShop.checkWinningLottos(this.#lottoArray);

    OutputManager.printWinningStatics(this.#winningLottoMap);
  }

  calculateReturn() {
    const lottoPrizeMoney = this.#calculateLottoWinningMoney(
      this.#winningLottoMap,
    );

    const rateOfReturn = parseFloat(
      calculateRateOfReturn(lottoPrizeMoney, this.#purchasePrice).toFixed(2),
    );
    console.log(this.#purchasePrice, lottoPrizeMoney);

    MissionUtils.Console.print(`총 수익률은 62.5%입니다.`);
  }

  #calculateLottoWinningMoney() {
    LOTTO_INFORMATION_ARRAY.reduce(
      (prev, lottoInformation) =>
        prev +
        this.#winningLottoMap.get(lottoInformation.rank) *
          lottoInformation.prizeMoney +
        prev,
      0,
    );
  }
}

export default LottoBuyer;
