import { Console, Random } from "@woowacourse/mission-utils";

import Input from "./Input.js";
import Print from "./Print.js";
import Lotto from "./Lotto.js";
import Game from "./Game.js";

import { lottoInfo } from "./Static/const.js";

class App {
  #game;

  #money;
  #lottos;
  #winningNumber;
  #bonusNumber;

  #lottoResult = new Map();

  constructor() {
    this.#game = new Game();
    this.#lottos = [];

    this.#lottoResult = new Map(
      Object.keys(lottoInfo)
        .reverse()
        .map((rank) => [rank, 0])
    );
  }

  async #buyLottos() {
    this.#money = await Input.getMoney();
    this.#lottos = Array.from({ length: this.#money / 1000 }, () =>
      Game.buyLotto()
    );

    Print.lottos(this.#lottos);
  }

  async #inputWinningNumbers() {
    const numbers = await Input.getWinningNumbers();
    this.#winningNumber = new Lotto(numbers);
  }

  async #inputBonusNumber() {
    const bonusNumber = await Input.getBonusNumber();
    this.#isDuplicateBonus(bonusNumber);
  }

  async #retry(action) {
    while (true) {
      try {
        await action();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async run() {
    await this.#retry(() => this.#buyLottos());
    await this.#retry(() => this.#inputWinningNumbers());
    await this.#retry(() => this.#inputBonusNumber());

    this.#winning();
    this.#printGameResult();
    this.#printProfitRate();
  }

  // 입력받은 보너스 숫자가 당첨 번호와 중복되는지?
  #isDuplicateBonus(bonusNumber) {
    if (this.#winningNumber.getNumbers().includes(bonusNumber))
      throw new Error("[ERROR] 보너스 숫자와 당첨 숫자가 중복됩니다.");

    this.#bonusNumber = bonusNumber;
  }

  #getRank(matchCount, hasBonus) {
    return Object.entries(lottoInfo).find(
      ([_, info]) =>
        info.match === matchCount && info.needBonusBall === hasBonus
    )?.[0];
  }

  #winning() {
    for (const lotto of this.#lottos) {
      const matchNumbers = lotto
        .getNumbers()
        .filter((number) => this.#winningNumber.getNumbers().includes(number));

      const hasBonus =
        matchNumbers.length === 5 &&
        lotto.getNumbers().includes(this.#bonusNumber);

      const rank = this.#getRank(matchNumbers.length, hasBonus);

      if (rank) {
        this.#lottoResult.set(rank, this.#lottoResult.get(rank) + 1);
      }
    }
  }

  #printGameResult() {
    for (const [rank, count] of this.#lottoResult) {
      const { match, needBonusBall, prize } = lottoInfo[rank];
      if (!needBonusBall) {
        Console.print(
          `${match}개 일치 (${prize.toLocaleString()}원) - ${count}개`
        );
      } else {
        Console.print(
          `${match}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${count}개`
        );
      }
    }
  }

  #printProfitRate() {
    let totalPrize = 0;

    for (const [rank, count] of this.#lottoResult) {
      if (!count) continue;

      const { prize } = lottoInfo[rank];
      totalPrize += count * prize;
    }

    const profitRate = (totalPrize / this.#money) * 100;
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }
}

export default App;
