import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/message.js';
import ERROR_MESSAGE from '../utils/constants/errorMessage.js';
import PriceValidator from '../utils/validators/PriceValidator.js';

class InputView {
  constructor() {
    this.priceValidator = new PriceValidator();
  }

  async askPurchasePrice() {
    while (true) {
      try {
        let purchasePrice = await Console.readLineAsync(
          MESSAGE.USER_COST_PROMPT,
        );
        purchasePrice = Number(purchasePrice);
        this.priceValidator.allRunPriceValidator(purchasePrice);
        return purchasePrice;
      } catch (error) {
        Console.print(ERROR_MESSAGE.PRICE_ERROR);
      }
    }
  }
}
export default InputView;
