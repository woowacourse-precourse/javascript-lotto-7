import { Console } from "@woowacourse/mission-utils";

class App {
  run() {
    this.inputPurchaseAmount();
  }

  async inputPurchaseAmount() {
    const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.validatePurchaseAmount(amount);
  }

  validatePurchaseAmount(amount) {
    const purchaseAmount = Number(amount);

    if (Number.isNaN(purchaseAmount) || purchaseAmount % 1000 !== 0) {
      this.handleError("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    } else {
      this.purchaseAmount = purchaseAmount;
    }
  }

  handleError(message) {
    Console.print(message);
    this.inputPurchaseAmount(); // 잘못된 입력일 경우 재입력 요청
  }
}

export default App;
