import { Random, Console } from '@woowacourse/mission-utils';

class App {
  static PURCHASE_UNIT = 1000; // 구입 금액 단위 (1000원)
  static ERROR_MESSAGE_INVALID_AMOUNT = "[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.";
  static ERROR_MESSAGE_NOT_A_NUMBER = "[ERROR] 금액은 숫자로 입력해 주세요.";

  run() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      try {
        const purchaseAmount = this.inputPurchaseAmount(input);
        this.validatePurchaseAmount(purchaseAmount);
        // 이후 로직 실행 (로또 발행 등)
      } catch (error) {
        Console.print(error.message);
        this.run();
      }
    });
  }

  inputPurchaseAmount(input) {
    const amount = Number(input);
    if (isNaN(amount)) {
      throw new Error(App.ERROR_MESSAGE_NOT_A_NUMBER);
    }
    return amount;
  }

  validatePurchaseAmount(amount) {
    if (amount % App.PURCHASE_UNIT !== 0) {
      throw new Error(App.ERROR_MESSAGE_INVALID_AMOUNT);
    }
  }
}

export default App;
