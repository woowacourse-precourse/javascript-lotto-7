import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils"; // 외부 라이브러리 나중

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    Console.print("");

    const { lottoCount, lottoArr } = Lotto.createLotto(purchaseAmount);
    Console.print(`${lottoCount}개를 구매했습니다.`);

    lottoArr.forEach((lotto) => {
      Console.print(`[${lotto.numbers.join(", ")}]`);
    });
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
