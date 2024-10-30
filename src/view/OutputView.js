import { Console } from '@woowacourse/mission-utils';
import BuyLottoService from '../service/BuyLottoService.js';
import MESSAGE from '../utils/constants/message.js';
import Lotto from '../Lotto.js';

class OutputView {
  constructor() {
    this.buyLottoService = new BuyLottoService();
  }

  printLottoQuantity(price) {
    const LottoQuantity = this.buyLottoService.checkLottoAmount(price);
    Console.print(`${LottoQuantity}${MESSAGE.LOTTO_PURCHASE_MESSAGE}`);
    Console.print('');
    return LottoQuantity;
  }

  printPurchasedLotteries(quantity) {
    const lotteries = Lotto.createLotto(quantity);
    lotteries.forEach((lotto) => Console.print(lotto));

    return lotteries;
  }
}

export default OutputView;
