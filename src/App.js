import { Console } from '@woowacourse/mission-utils';
import User from './User';
import { OUTPUT_MESSAGE } from './constant';

class App {
  constructor() {
    this.user = new User();
  }

  async run() {
    this.user.readPurchaseAmount();
    Console.print(
      `\n${this.user.purchaseCount}${OUTPUT_MESSAGE.PURCHASE_COUNT}`,
    );
  }
}

export default App;
