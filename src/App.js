import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #lottos = [];
  #winningNumbers = [];
  #bonusNumber;

  async run() {
    try {
      await this.purchaseLottos();
      await this.inputWinningNumbers();
      await this.inputBonusNumber();
      this.printResult();
    } catch (error) {
      Console.print(error.message);
    }
  }
  async getValidAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);

    if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return amount;
  }

  async purchaseLottos() {
    const amount = await this.getValidAmount();
    const count = amount / 1000;

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }

    Console.print(`\n${count}개를 구매했습니다.`);
    this.printLottos();
  }

  printLottos() {
    this.#lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(", ")}]`);
    });
  }

  async inputWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const numbers = this.parseNumbers(input);
    this.#winningNumbers = new Lotto(numbers).getNumbers();
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const number = Number(input);

    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    if (this.#winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }

    this.#bonusNumber = number;
  }

  parseNumbers(input) {
    const numbers = input.split(",").map((num) => Number(num.trim()));

    if (numbers.some(isNaN)) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }

    return numbers;
  }

  printResult() {
    const results = this.calculateResults();
    const profit = this.calculateProfit(results);

    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.second}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }

  calculateResults() {
    const results = { 3: 0, 4: 0, 5: 0, second: 0, 6: 0 };

    this.#lottos.forEach((lotto) => {
      const matchCount = lotto.match(this.#winningNumbers);
      if (matchCount === 5 && lotto.hasBonus(this.#bonusNumber)) {
        results.second += 1;
        return;
      }
      if (matchCount >= 3) {
        results[matchCount] += 1;
      }
    });

    return results;
  }

  calculateProfit(results) {
    const prizeMoney = {
      3: 5000,
      4: 50000,
      5: 1500000,
      second: 30000000,
      6: 2000000000,
    };

    const totalPrize = Object.entries(results).reduce(
      (sum, [rank, count]) => sum + prizeMoney[rank] * count,
      0
    );

    const totalCost = this.#lottos.length * 1000;
    return ((totalPrize / totalCost) * 100).toFixed(1);
  }
}

export default App;
