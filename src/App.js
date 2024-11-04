// App.js
import { Console } from "@woowacourse/mission-utils";
import LottoMachine from "./LottoMachine.js";

class App {
  run() {
    this.start();
  }

  start() {
    Console.print("구입금액을 입력해 주세요.");
    Console.readLine("구입금액: ", (input) => {
      const purchaseAmount = Number(input);
      if (this.validatePurchaseAmount(purchaseAmount)) {
        const lottoCount = purchaseAmount / 1000;
        this.purchaseLottos(lottoCount);
      } else {
        Console.print("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
        this.start(); // 다시 입력 받기
      }
    });
  }

  validatePurchaseAmount(amount) {
    return amount >= 1000 && amount % 1000 === 0;
  }

  purchaseLottos(count) {
    Console.print(`${count}개를 구매했습니다.`);
    const lottoMachine = new LottoMachine();
    const lottos = lottoMachine.generateLottos(count);
    lottos.forEach((lotto) => Console.print(`[${lotto.numbers.join(", ")}]`));
  }
}

export default App;
