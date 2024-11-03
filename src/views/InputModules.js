import { Console } from '@woowacourse/mission-utils';
import ValidatorModule from '../utils/ValidatorModules.js';

class InputModules {
  static async getPurchaseCash() {
    const userInput = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const purchaseCash = Number(userInput);

    ValidatorModule.checkPurchaseCash(purchaseCash);

    return purchaseCash;
  }
}

export default InputModules;
