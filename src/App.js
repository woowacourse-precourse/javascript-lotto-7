import {Random, Console}  from '@woowacourse/mission-utils';

class App {
  static PURCHASE_UNIT = 1000; // 구입 금액 단위 (1000원)
  static ERROR_MESSAGE_INVALID_AMOUNT = "[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.";
  static ERROR_MESSAGE_NOT_A_NUMBER = "[ERROR] 금액은 숫자로 입력해 주세요.";

  async run() {
    try {
      const purchaseAmount = this.inputPurchaseAmount();
      this.validatePurchaseAmount(purchaseAmount);
      // 이후 로직 실행 (로또 발행 등)
    } catch (error) {
      Console.error(error.message);
      await this.run();
    }
  }
  inputPurchaseAmount() {
    const amount = Number(prompt("구입금액을 입력해 주세요."));
    if(isNaN(amount)) {
      throw new Error(App.ERROR_MESSAGE_NOT_A_NUMBER);
    }
    return amount;
  }

  validatePurchaseAmount(amount) {
    if(amount % App.PURCHASE_UNIT !== 0) {
      throw new Error(App.ERROR_MESSAGE_INVALID_AMOUNT);
    }
  }

}

export default App;
