import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #lottos = [];
  #winningLotto;
  #bonusNumber;

  async run() {
    try {
      await this.#purchaseLottos();
      await this.#setWinningNumbers();
      this.#printResults();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #readAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);
    
    if (isNaN(amount)) {
      throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
    }
    if (amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 0보다 커야 합니다.");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.");
    }
    
    return amount;
  }

  async #purchaseLottos() {
    const amount = await this.#readAmount();
    const lottoCount = Math.floor(amount / 1000);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    this.#generateLottos(lottoCount);
  }


  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }
  }

  async #setWinningNumbers() {
    const winningNumbers = await this.#readWinningNumbers();
    this.#winningLotto = new Lotto(winningNumbers);
    this.#bonusNumber = await this.#readBonusNumber();
  }

  async #readWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    return input.split(",").map((number) => Number(number.trim()));
  }

  async #readBonusNumber() {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n",
    );
    const number = Number(input);
    if (this.#winningLotto.contains(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
    return number;
  }

  #printResults() {
    const results = this.#calculateResults();
    this.#printWinningStatistics(results);
    this.#printProfitRate(results);
  }

  #calculateResults() {
    const results = { 3: 0, 4: 0, 5: 0, "5+": 0, 6: 0 };

    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.match(this.#winningLotto.getNumbers());
      this.#updateWinningRank(results, matchCount, lotto);
    });

    return results;
  }

  #printWinningStatistics(results) {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results["5+"]}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);
  }

  #printProfitRate(results) {
    const prizeMap = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+": 30000000,
      6: 2000000000,
    };

    const totalPrize = Object.entries(results).reduce(
      (sum, [rank, count]) => sum + prizeMap[rank] * count,
      0,
    );
    const purchaseAmount = this.#lottos.length * 1000;
    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);

    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
  #updateWinningRank(results, matchCount, lotto) {
    if (matchCount === 6) {
      results[6]++; // 1등
      return;
    }
    if (matchCount === 5 && lotto.contains(this.#bonusNumber)) {
      results["5+"]++; // 2등
      return;
    }
    if (matchCount === 5) {
      results[5]++; // 3등
      return;
    }
    if (matchCount === 4) {
      results[4]++; // 4등
      return;
    }
    if (matchCount === 3) {
      results[3]++; // 5등
    }
  }
}

export default App;
