import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './lib/constants.js';

class Input {
  #purchasePrice;

  async getPurchasePrice() {
    this.#purchasePrice = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.PURCHASE_PRICE,
    );
    return this.#purchasePrice;
  }
}

export default Input;
