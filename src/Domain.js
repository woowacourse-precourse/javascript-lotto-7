import { OUTPUT_MESSAGE } from './Constants/Message';
import { Console } from '@woowacourse/mission-utils';

class LOTTO_MACHINE {
  inputMoneyDevide(input) {
    if (input % 1000 === 0) {
      return input / 1000;
    }
  }

  purchaseQuntatityPrint() {
    Console.print(`${this.inputMoneyDevide}${OUTPUT_MESSAGE.purchaseQuantity}`);
  }
}
