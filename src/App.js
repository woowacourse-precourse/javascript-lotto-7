// App.js
import { Console } from "@woowacourse/mission-utils";

class App {
  async getInput(message) {
    return new Promise((resolve) => {
      Console.readLineAsync(message).then((input) => {
        resolve(input.trim());
      });
    });
  }

  async run() {
    try {
      const purchaseAmount = await this.getInput("구입금액을 입력해 주세요.\n");
      this.validatePurchaseAmount(purchaseAmount);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  validatePurchaseAmount(amount) {
    const parsedAmount = parseInt(amount, 10);
    if (isNaN(parsedAmount) || parsedAmount % 1000 !== 0) {
      throw new Error("구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
  }
}

export default App;
