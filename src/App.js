import { Console, Random } from "@woowacourse/mission-utils";

import Input from "./Input.js";
import Output from "./Output.js";
import Lotto from "./Lotto.js";

class App {
  #money;
  #lottos;
  #winningNumber;
  #bonusNumber;
  #output;

  constructor() {
    this.input = new Input();
    this.#lottos = [];
  }

  async run() {
    try {
      this.#money = await this.input.getMoney();

      this.buyLottos();

      this.#output = new Output(this.#money, this.#lottos);
      this.#output.lottos();

      const numbers = await this.input.getWinningNumbers();
      this.#winningNumber = new Lotto(numbers);

      const bonusNumber = await this.input.getBonusNumber();
      this.isDuplicateBonus(bonusNumber);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  // 구입한 로또를 배열로 관리
  buyLottos() {
    for (let i = 0; i < this.#money / 1000; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);

      this.#lottos.push(lotto);
    }
  }

  // 입력받은 보너스 숫자가 당첨 번호와 중복되는지?
  isDuplicateBonus(bonusNumber) {
    for (const number of this.#winningNumber.getNumbers()) {
      if (number === bonusNumber)
        throw new Error("[ERROR] 보너스 숫자와 당첨 숫자가 중복됩니다.");
    }

    this.#bonusNumber = bonusNumber;
  }
}

export default App;
