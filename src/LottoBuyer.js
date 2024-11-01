import InputManager from './InputManager.js';
import LottoShop from './LottoShop.js';
import OutputManager from './OutputManager.js';
import { WINNING_PRICE_MAP } from './lib/constants.js';
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
    const lottoWinningMoney = this.#sumLottoWinningMoney();

    const rateOfReturn = parseFloat(
      calculateRateOfReturn(lottoWinningMoney, this.#purchasePrice).toFixed(2),
    );

    OutputManager.printRateOfReturn(rateOfReturn);
  }

  #sumLottoWinningMoney() {
    return [...this.#winningLottoMap.entries()].reduce(
      (sum, [rank, count]) => WINNING_PRICE_MAP[rank] ?? 0 * count + sum,
      0,
    );
  }
}

export default LottoBuyer;
