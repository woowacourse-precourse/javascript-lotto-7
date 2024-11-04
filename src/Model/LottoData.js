import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoData {
  constructor(amount) {
    this.amount = amount;
    this.count = amount / 1000;
    this.lotto = this.getNumbers(this.count);
  }

  randomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
  getNumbers(count) {
    try {
      const numbers = [];
      for (let i = 0; i < count; i++) {
        numbers.push(new Lotto(this.randomNumbers()));
      }
      return numbers;
    } catch (error) {
      Console.print(error.message);
    }
  }
  getLotto() {
    return this.lotto;
  }
  getLottoLength() {
    return this.lotto.length;
  }
}
export default LottoData;
