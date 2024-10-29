import { Console } from '@woowacourse/mission-utils';
import BuyLottoService from '../service/BuyLottoService.js';
import MESSAGE from '../utils/constants/message.js';

class OutputView {
  constructor() {
    this.buyLottoService = new BuyLottoService();
  }

  printLottoQuantity(price) {
    const LottoQuantitiy = this.buyLottoService.checkLottoAmount(price);
    Console.print(`${LottoQuantitiy}${MESSAGE.LOTTO_PURCHASE_MESSAGE}`);
  }
}
export default OutputView;
