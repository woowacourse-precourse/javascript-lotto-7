import { Console } from "@woowacourse/mission-utils";

import Game from "./Game.js";
import Input from "./Input.js";
import Lotto from "./Lotto.js";
import Print from "./Print.js";

class App {
  #money;
  #lottos;
  #winningLotto;
  #bonusNumber;
  #result;

  constructor() {
    this.#lottos = [];
    this.#result = new Map();
  }

  async run() {
    await this.#buyLottos();

    Print.lottos(this.#lottos);

    await this.#inputWinningNumbers();
    await this.#inputBonusNumber();

    this.#result = Game.getResult(
      this.#lottos,
      this.#winningLotto,
      this.#bonusNumber
    );

    Print.lottoResult(this.#result);
    Print.profitRate(this.#money, this.#result);
  }

  async #retryUserInput(action) {
    while (true) {
      try {
        await action();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #buyLottos() {
    await this.#retryUserInput(async () => {
      this.#money = await Input.getMoney();
      this.#lottos = Array.from({ length: this.#money / 1000 }, () =>
        Game.buyLotto()
      );
    });
  }

  async #inputWinningNumbers() {
    await this.#retryUserInput(async () => {
      const numbers = await Input.getWinningNumbers();
      this.#winningLotto = new Lotto(numbers);
    });
  }

  async #inputBonusNumber() {
    await this.#retryUserInput(async () => {
      const bonusNumber = await Input.getBonusNumber();
      this.#isDuplicateBonus(bonusNumber);
    });
  }

  #isDuplicateBonus(bonusNumber) {
    if (this.#winningLotto.getNumbers().includes(bonusNumber))
      throw new Error("[ERROR] 보너스 숫자와 당첨 숫자가 중복됩니다.\n");

    this.#bonusNumber = bonusNumber;
  }
}

export default App;
