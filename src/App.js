import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  static PRICE_PER_TICKET = 1000;

  async run() {
    try {
      const money = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      const lottos = this.purchaseLottos(Number(money));
      this.issueLottos(lottos);

    } catch (error) {
      Console.print(error.message); 
    }
}

  purchaseLottos(money) {
    if (!Number.isInteger(money) || money <= 0 || money % App.PRICE_PER_TICKET !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양의 정수여야 합니다.");
    }
    
    const count = money / App.PRICE_PER_TICKET;
    return Array.from({ length: count }, () => Lotto.generateLotto());
  }

  issueLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(`[${lotto.getNumbers().join(", ")}]`));
  }
}


export default App;