import Console from "@woowacourse/mission-utils";

class App {
  async run() {
    let amount;
    while (true) {
      try {
        amount = await this.getPurchaseAmount();
        this.validatePurchaseAmount(amount);
        Console.print(`구입 금액: ${amount}원`);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getPurchaseAmount() {
    return new Promise((resolve) => {
      Console.readLineAsync("구입금액을 입력해 주세요.\n", (input) => {
        resolve(Number(input));
      });
    });
  }

  validatePurchaseAmount(amount) {
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }
  }
}

export default App;
