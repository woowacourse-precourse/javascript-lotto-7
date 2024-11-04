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

  async run() {
    try {
      // 로또 구매 후 출력
      this.#money = await Input.getMoney();

      for (let i = 0; i < this.#money / 1000; i++) {
        const lotto = Game.buyLotto();
        this.#lottos.push(lotto);
      }

      Print.lottos(this.#lottos);

      // 당첨 번호 입력
      const numbers = await Input.getWinningNumbers();
      this.#winningNumber = new Lotto(numbers);

      // 보너스 번호 입력
      const bonusNumber = await Input.getBonusNumber();
      this.isDuplicateBonus(bonusNumber);

      this.#winning();
      this.#printGameResult();
      this.#printProfitRate();
    } catch (error) {
      Console.print(error.message);
      throw error;
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
