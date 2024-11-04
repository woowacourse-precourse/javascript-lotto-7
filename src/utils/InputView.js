import { Console } from '@woowacourse/mission-utils';
import VIEWMESSAGES from '../resources/VIEWMESSAGES.js';
import validateInputMoney from './validation/validateInputMoney.js';

export async function inputPurchaseAmount() {
  while (true) {
    try {
      const inputMoney = await Console.readLineAsync(
        VIEWMESSAGES.INPUT_MONEY_AMOUNT_PROMPT,
      );
      validateInputMoney(inputMoney);
      return Number(inputMoney);
    } catch (error) {
      Console.print(error);
    }
  }
}
