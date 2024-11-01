import { Console } from '@woowacourse/mission-utils';
class App {
  constructor() {}

  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    if (!this.validatePurchaseAmount(Number(purchaseAmount))) {
      return;
    }

    return purchaseAmount;
  }

  validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액을 1,000원 단위로 입력해 주세요.');
    }

    return true;
  }

  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
  }
}

export default App;
