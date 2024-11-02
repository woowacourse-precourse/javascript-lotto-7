import { InputManager, OutputManager } from '../helpers/index.js';
import { calculateRateOfReturn } from '../lib/utils.js';
import LottoShop from './LottoShop.js';

class LottoBuyer {
  #purchasePrice;
  #lottos;

  #lottosResult;

  async purchaseLottos() {
    this.#purchasePrice = await InputManager.getPurchasePrice();

    this.#lottos = LottoShop.orderLottos(this.#purchasePrice);
    OutputManager.printPurchaseHistory(this.#lottos);
  }

  checkWinningLotto(lottoCompany) {
    this.#lottosResult = lottoCompany.checkWinningLotto(this.#lottos);

    OutputManager.printLottoResult(this.#lottosResult);
  }

  calculateReturn() {
    const lottoPrizeMoney = this.#lottosResult.getTotalPrizeMoney();

    const rateOfReturn = parseFloat(
      calculateRateOfReturn(lottoPrizeMoney, this.#purchasePrice).toFixed(2),
    );

    OutputManager.printRateOfReturn(rateOfReturn);
  }
}

export default LottoBuyer;
