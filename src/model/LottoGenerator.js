import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGenerator {
  #payment;
  #amount;

  constructor(payment) {
    this.#payment = payment;
    this.#validatePayment(payment);
    this.#amount = this.#payment / 1000;
  }

  #validatePayment(payment) {
    if (Number(payment) % 1000 !== 0)
      throw new Error("[ERROR] 1000원 단위로 금액을 입력해야 합니다.");
  }

  buyLotto() {
    return this.#amount;
  }

  generateLotto() {
    const lotto = [];

    for (let i = 0; i < this.#amount; i++) {
      const num = Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto[i] = new Lotto(num);
    }
    return lotto;
  }
}

export default LottoGenerator;
