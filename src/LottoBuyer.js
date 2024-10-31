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
    const lottoWinningMoney = this.#calculateLottoWinningMoney();

    const rateOfReturn = parseFloat(
      calculateRateOfReturn(lottoWinningMoney, this.#purchasePrice).toFixed(2),
    );

    OutputManager.printRateOfReturn(rateOfReturn);
  }

  #calculateLottoWinningMoney() {
    return LOTTO_INFORMATION_ARRAY.reduce(
      (cumulativeWinningMoney, lottoInformation) =>
        cumulativeWinningMoney +
        this.#winningLottoMap.get(lottoInformation.rank) *
          lottoInformation.prizeMoney,

      0,
    );
  }
}

export default LottoBuyer;
