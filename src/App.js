import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  LOTTO_PRICE = 1000;

  async run() {
    const payment = await this.getPayment();
    const count = payment / this.LOTTO_PRICE;
    const lotteries = this.getLotteries(count);
  }

  async getPayment() {
    try {
      const payment =
        await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      return this.validatePayment(payment);
    } catch (e) {
      Console.print(e.message);
      return this.getPayment();
    }
  }

  validatePayment(payment_str) {
    const payment = Number(payment_str);
    if (isNaN(payment)) {
      throw new Error("[ERROR] 구입금액은 숫자로 입력하셔야 합니다.");
    }
    if (payment < 0) {
      throw new Error("[ERROR] 구입금액은 0원 이상 입력하셔야 합니다.");
    }
    if (payment % this.LOTTO_PRICE !== 0) {
      throw new Error("[ERROR] 구입금액은 1000원으로 나누어져야 합니다.");
    }
    return payment;
  }

  getLotteries(count) {
    const lotteries = [];
    for (let i = 0; i < count; i++) {
      const pickedNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumber = pickedNumber.map((v) => parseInt(v)).sort((a, b) => a - b);
      const lotto = new Lotto(sortedNumber);
      lotteries.push(lotto);
    }
    this.showLotteries(lotteries);
    return lotteries;
  }

  showLotteries(lotteries) {
    Console.print(`\n${lotteries.length}개를 구매했습니다.`);
    lotteries.forEach((lotto) => {
      Console.print(`[${lotto.getLotto().join(", ")}]`);
    });
  }
}

export default App;
