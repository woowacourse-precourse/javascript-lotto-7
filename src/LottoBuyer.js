import InputManager from './InputManager.js';
import LottoShop from './LottoShop.js';
import OutputManager from './OutputManager.js';
import { LOTTO_INFORMATIONS } from './lib/constants.js';
import { calculateRateOfReturn } from './lib/utils.js';

class LottoBuyer {
  #purchasePrice;
  #lottos;

  #winningLottoMap;

  async purchaseLottos() {
    this.#purchasePrice = await InputManager.getPurchasePrice();

    this.#lottos = LottoShop.orderLottos(this.#purchasePrice);
    OutputManager.printPurchaseHistory(this.#lottos);
  }

  checkWinningLotto(lottoCompany) {
    this.#winningLottoMap = lottoCompany.checkWinningLottos(this.#lottos);

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
    return LOTTO_INFORMATIONS.reduce(
      (cumulativeWinningMoney, lottoInformation) =>
        cumulativeWinningMoney +
        this.#winningLottoMap.get(lottoInformation.rank) *
          lottoInformation.prizeMoney,
      0,
    );
  }
}

export default LottoBuyer;
