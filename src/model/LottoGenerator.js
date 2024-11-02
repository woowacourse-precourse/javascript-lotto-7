import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGenerator {
  #payment;

  constructor(payment) {
    this.#payment = payment;
    this.#validatePayment(payment);
  }

  #validatePayment(payment) {
    if (Number(payment) % 1000 !== 0)
      throw new Error("[ERROR] 1000원 단위로 금액을 입력해야 합니다.");
  }

  buyLotto() {
    const amount = this.#payment / 1000;
    Console.print(`${amount}개를 구매했습니다.`);

    const lotto = [];
    this.generateLotto(lotto, amount);

    return lotto;
  }

  generateLotto(lotto, amount) {
    for (let i = 0; i < amount; i++) {
      const num = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto[i] = new Lotto(num);

      Console.print(`[${lotto[i].getNumbers().join(", ")}]`);
    }
    Console.print("\n");
  }
}

export default LottoGenerator;
