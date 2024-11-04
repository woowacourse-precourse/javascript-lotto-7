import { Console } from "@woowacourse/mission-utils";
import { LottoInputValidator } from "./validators.js";
import { createLottoInstances } from "./CreateLotto.js";
class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();

    Console.print("");
    Console.print(`${purchaseAmount / 1000}개를 구매했습니다.`);
    const lottoInstances = createLottoInstances(purchaseAmount / 1000);

    for (let i = 0; i < lottoInstances.length; i++) {
      lottoInstances[i].showNumber();
    }
  }

  async getPurchaseAmount() {
    while (true) {
      try {
        Console.print("구입금액을 입력해 주세요.");
        const input = await Console.readLineAsync("");
        return LottoInputValidator.validatePurchaseAmount(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
