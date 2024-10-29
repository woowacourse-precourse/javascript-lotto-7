import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/message.js';
import ERROR_MESSAGE from '../utils/constants/errorMessage.js';
import BuyLottoService from '../service/BuyLottoService.js';

class InputView {
  constructor() {
    this.buyLottoService = new BuyLottoService();
  }

  async askPurchasePrice() {
    while (true) {
      try {
        const purchasePrice = await Console.readLineAsync(
          MESSAGE.USER_COST_PROMPT,
        );
        this.buyLottoService.checkPurchasePrice(purchasePrice);
        return purchasePrice;
      } catch (error) {
        Console.print(ERROR_MESSAGE.PRICE_ERROR);
      }
    }
  }
}
export default InputView;
