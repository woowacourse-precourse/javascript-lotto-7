import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.lottos = [];
  }

  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottoCount = this.calculateLottoCount(purchaseAmount);
    this.generateLottos(lottoCount);
    this.printLottos();
  }

  async getPurchaseAmount() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n", (input) => {
        const amount = parseInt(input, 10);
        if (isNaN(amount) || amount % 1000 !== 0) {
          throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
        }
        resolve(amount);
      });
    });
  }

  calculateLottoCount(amount) {
    return Math.floor(amount / 1000);
  }

  generateLottos(count) {
    this.lottos = Array.from({ length: count }, () => {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      return new Lotto(numbers);
    });
  }

  printLottos() {
    MissionUtils.Console.print(`${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }
}

export default App;
