import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSAGE } from './constant';

class User {
  #purchaseCount;

  readPurchaseAmount() {
    const purchaseAmount = Console.readLineAsync(
      PROMPT_MESSAGE.PURCHASE_AMOUNT,
    );
  }
}

export default User;
