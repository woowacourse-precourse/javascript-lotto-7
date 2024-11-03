import { Console, Random } from "@woowacourse/mission-utils";
import PurchaseAmount from "./PurchaseAmount.js";
import LottoMachine from "./LottoMachine.js";

class App {
  async run() {
    // 구매 금액 입력
    const amount = await this.getPurchasedAmount();
    
    // 구매한 수량 및 로또 번호 출력
    Console.print(`\n${amount}개를 구매했습니다.`);
    const lottos = LottoMachine.createLottos(amount);
    lottos.forEach((lotto) => Console.print(`[${lotto.join(', ')}]`));
  }

  async getPurchasedAmount() {
    try {
      const input = await Console.readLineAsync("구매 금액을 입력해 주세요.\n");
      const amount = new PurchaseAmount(Number(input));
      return amount.getAmount();
    } catch (error) {
      Console.print(error.message);
      await this.getPurchasedAmount();
    }
  }
}

export default App;
