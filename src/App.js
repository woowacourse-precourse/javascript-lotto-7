import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils"; // 외부 라이브러리 나중

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const ticketCount = purchaseAmount / 1000;
  }

  async getPurchaseAmount() {
    Console.print("구입금액을 입력해 주세요.");
    const inputPurchase = await Console.readLineAsync("");

    const amount = Number(inputPurchase);
    this.validateAmount(amount);
    return amount;
  }

  validateAmount(amount) {
    if (isNaN(amount)) {
      Console.print("[ERROR] 금액은 숫자여야 합니다.");
      return;
    }
    if (amount % 1000 !== 0) {
      Console.print("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
      return;
    }
    if (amount <= 0) {
      Console.print("[ERROR] 정상적인 금액을 입력해주세요.");
      return;
    }
  }
}
export default App;

// - **로또 구입 금액 입력**: 로또 구입 금액을 입력받고,
// 입력 값이 1,000원 단위로 받을 수 있는 기능 구현
