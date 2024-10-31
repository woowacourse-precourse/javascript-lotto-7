import { OUTPUT_MESSAGE, BASIC_ERROR } from '../Constants/Message.js';
import { MissionUtils, Console } from '@woowacourse/mission-utils';

class LottoMachine {
  inputMoneyDevide(number) {
    if (number % 1000 === 0) {
      return number / 1000;
    }
    throw new Error(BASIC_ERROR.invalidMoney);
  }

  purchaseQuantityPrint(number) {
    const quantity = this.inputMoneyDevide(number);
    Console.print(`${quantity}${OUTPUT_MESSAGE.purchaseQuantity}`);
    return quantity;
  }

  drawLottoNumber(number) {
    const quantity = this.inputMoneyDevide(number);
    const lottoNumbers = [];

    for (let i = 0; i < quantity; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.push(numbers);
    }

    return lottoNumbers;
  }
}

export default LottoMachine;
