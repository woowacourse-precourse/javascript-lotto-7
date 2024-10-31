import { INPUT_MESSAGE, OUTPUT_MESSAGE } from '../Constants/Message.js';
import { MissionUtils, Console } from '@woowacourse/mission-utils';

class LOTTO_MACHINE {
  async inputMoney(input) {
    await Console.readLineAsync(INPUT_MESSAGE.purchaseMoney);
    return input;
  }

  inputMoneyDevide(number) {
    if (input % 1000 === 0) {
      input / 1000;
      return number;
    }
  }

  purchaseQuntatityPrint(quantity) {
    Console.print(`${this.number}${OUTPUT_MESSAGE.purchaseQuantity}`);
    return quantity;
  }

  drawLottoNumber() {
    for (var i = 0; i === this.number; i++) {
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }
  }
}
