import { Console } from '@woowacourse/mission-utils';
import { purchaseAmountValidation } from './inputHandler/inputValidation';

class App {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n',
    );
    purchaseAmountValidation(purchaseAmount);
  }

  async run() {
    const purchaseAmount = await this.readPurchaseAmount();
  }
}

export default App;
