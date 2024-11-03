import { Random, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #lottos = [];

  async run() {
    try {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      await this.processPurchase(input);

    } catch (error) {
      if (!error.message.startsWith("[ERROR]")) {
        error.message = `[ERROR] ${error.message}`;
      }
      Console.print(error.message);
    }
  }

  async processPurchase(input) {
    const purchaseAmount = this.validatePurchaseAmount(input);
    const purchaseCount = purchaseAmount / 1000;
    Console.print(`\n${purchaseCount}개를 구매했습니다.`);

    this.generateLottos(purchaseCount);
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();

    const results = this.calculateResults(winningNumbers, bonusNumber);
    this.printStatistics(results, purchaseAmount);
  }

  validatePurchaseAmount(input) {
    const purchaseAmount = Number(input);

    if (isNaN(purchaseAmount) || purchaseAmount <= 0 || purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 숫자여야 합니다.");
    }

    return purchaseAmount;
  }

  generateLottos(purchaseCount) {
    this.#lottos = [];

    for (let i = 0; i < purchaseCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);

      Console.print(`[${numbers.join(", ")}]`);
    }
  }

  async getWinningNumbers() {
    const winningInput = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const winningNumbers = winningInput.split(",").map(num => Number(num.trim()));

    new Lotto(winningNumbers);
    return winningNumbers;
  }

  async getBonusNumber() {
    const bonusInput = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    return Number(bonusInput);
  }

  calculateResults(winningNumbers, bonusNumber) {
    const results = [
      { matches: 3, amount: 5000, count: 0 },
      { matches: 4, amount: 50000, count: 0 },
      { matches: 5, amount: 1500000, count: 0 },
      { matches: 5, amount: 30000000, count: 0, bonus: true },
      { matches: 6, amount: 2000000000, count: 0 }
    ];

    this.#lottos.forEach(lotto => {
      const matchCount = lotto.matchCount(winningNumbers);
      const hasBonus = lotto.hasBonus(bonusNumber);

      if (matchCount === 6) results[4].count++;
      else if (matchCount === 5 && hasBonus) results[3].count++;
      else if (matchCount === 5) results[2].count++;
      else if (matchCount === 4) results[1].count++;
      else if (matchCount === 3) results[0].count++;
    });

    return results;
  }

  printStatistics(results, purchaseAmount) {
    const totalPrize = results.reduce((sum, result) => sum + (result.amount * result.count), 0);
    const profit = (totalPrize / purchaseAmount * 100).toFixed(1);

    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${results[0].count}개
4개 일치 (50,000원) - ${results[1].count}개
5개 일치 (1,500,000원) - ${results[2].count}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[3].count}개
6개 일치 (2,000,000,000원) - ${results[4].count}개
총 수익률은 ${profit}%입니다.`);
  }

}

export default App;