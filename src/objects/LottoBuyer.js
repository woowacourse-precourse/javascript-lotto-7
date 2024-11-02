import LottoShop from './LottoShop.js';
import { calculateRateOfReturn } from '../lib/utils.js';
import { InputManager, OutputManager } from '../helpers/index.js';
import Lotto from './Lotto.js';

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
    const lottoWinningMoney = this.#sumLottoWinningMoney();

    const rateOfReturn = parseFloat(
      calculateRateOfReturn(lottoWinningMoney, this.#purchasePrice).toFixed(2),
    );

    OutputManager.printRateOfReturn(rateOfReturn);
  }

  #sumLottoWinningMoney() {
    return [...this.#winningLottoMap.entries()].reduce(
      (sum, [rank, count]) => Lotto.getPrizeMoney(rank) * count + sum,
      0,
    );
  }
}

export default LottoBuyer;
