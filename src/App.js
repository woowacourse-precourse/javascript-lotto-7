import { Console, Random } from "@woowacourse/mission-utils";

import Input from "./Input.js";
import Output from "./Output.js";
import Lotto from "./Lotto.js";

import { lottoInfo } from "./Static/const.js";

class App {
  #money;
  #lottos;
  #winningNumber;
  #bonusNumber;
  #output;

  #lottoResult = new Map();

  constructor() {
    this.input = new Input();
    this.#lottos = [];

    this.#lottoResult = new Map(
      Object.keys(lottoInfo)
        .reverse()
        .map((rank) => [rank, 0])
    );
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

      this.#winning();
      this.#printResult();
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

  #printResult() {
    for (const [key, value] of this.#lottoResult) {
      const { match, needBonusBall, prize } = lottoInfo[key];
      if (!needBonusBall) {
        Console.print(
          `${match}개 일치 (${prize.toLocaleString()}원) - ${value}개`
        );
      } else {
        Console.print(
          `${match}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${value}개`
        );
      }
    }
  }
}

export default App;
