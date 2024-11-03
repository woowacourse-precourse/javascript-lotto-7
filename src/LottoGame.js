import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";

class LottoGame {
  #lottoTickets = [];
  #winningNumbers = [];
  #bonusNumber = 0;

  async start() {
    await this.#handlePurchase();
    this.#displayTickets();
    await this.#collectWinningNumbers();
    this.#showResults();
  }

  async #handlePurchase() {
    const amount = await this.#getValidatedAmount();
    this.#generateTickets(amount / 1000);
  }

  async #getValidatedAmount() {
    return new Promise(resolve => {
      Console.readLineAsync("구입금액을 입력해 주세요.\n").then(input => {
        const amount = Number(input);
        if (this.#isValidAmount(amount)) {
          resolve(amount);
        } else {
          Console.print("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
          resolve(this.#getValidatedAmount());
        }
      });
    });
  }

  #isValidAmount(amount) {
    return !isNaN(amount) && amount % 1000 === 0;
  }

  #generateTickets(count) {
    for (let i = 0; i < count; i++) {
      this.#lottoTickets.push(Lotto.generate());
    }
  }

  #displayTickets() {
    Console.print(`${this.#lottoTickets.length}개를 구매했습니다.`);
    this.#lottoTickets.forEach(ticket => Console.print(`[${ticket.getNumbers().join(", ")}]`));
  }

  async #collectWinningNumbers() {
    this.#winningNumbers = await this.#getValidatedNumbers("당첨 번호를 입력해 주세요.\n");
    this.#bonusNumber = await this.#getValidatedBonusNumber();
  }

  async #getValidatedNumbers(message) {
    return new Promise(resolve => {
      Console.readLineAsync(message).then(input => {
        const numbers = input.split(",").map(Number);
        if (this.#isValidNumbers(numbers)) {
          resolve(numbers);
        } else {
          Console.print("[ERROR] 잘못된 당첨 번호 입력입니다.");
          resolve(this.#getValidatedNumbers(message));
        }
      });
    });
  }

  #isValidNumbers(numbers) {
    return numbers.length === 6 && numbers.every(num => !isNaN(num) && num >= 1 && num <= 45);
  }

  async #getValidatedBonusNumber() {
    return new Promise(resolve => {
      Console.readLineAsync("보너스 번호를 입력해 주세요.\n").then(input => {
        const bonus = Number(input);
        if (this.#isValidBonusNumber(bonus)) {
          resolve(bonus);
        } else {
          Console.print("[ERROR] 잘못된 보너스 번호입니다.");
          resolve(this.#getValidatedBonusNumber());
        }
      });
    });
  }

  #isValidBonusNumber(bonus) {
    return !isNaN(bonus) && bonus >= 1 && bonus <= 45 && !this.#winningNumbers.includes(bonus);
  }

  #showResults() {
    const results = this.#calculateResults();
    this.#printResults(results);
  }

  #calculateResults() {
    const results = { 3: 0, 4: 0, 5: 0, "5+bonus": 0, 6: 0 };
    this.#lottoTickets.forEach(ticket => {
      const matchCount = this.#countMatches(ticket.getNumbers());
      this.#updateResults(results, matchCount, ticket);
    });
    return results;
  }

  #countMatches(numbers) {
    return numbers.filter(num => this.#winningNumbers.includes(num)).length;
  }

  #updateResults(results, matchCount, ticket) {
    if (matchCount === 6) results[6]++;
    else if (matchCount === 5) {
      const hasBonus = ticket.getNumbers().includes(this.#bonusNumber);
      hasBonus ? results["5+bonus"]++ : results[5]++;
    } else if (matchCount === 4) results[4]++;
    else if (matchCount === 3) results[3]++;
  }

  #printResults(results) {
    Console.print("당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results["5+bonus"]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);
    const profitRate = this.#calculateProfitRate(results);
    Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  #calculateProfitRate(results) {
    const totalPrize =
      results[3] * 5000 +
      results[4] * 50000 +
      results[5] * 1500000 +
      results["5+bonus"] * 30000000 +
      results[6] * 2000000000;
    const totalSpent = this.#lottoTickets.length * 1000;
    return (totalPrize / totalSpent) * 100;
  }
}

export default LottoGame;
