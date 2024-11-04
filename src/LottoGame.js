import { calculateYield, formatNumbers } from "./utils.js";

import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGame {
  #purchaseAmount;
  #tickets = [];
  #winningNumbers;
  #bonusNumber;
  #results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  static PRICE_PER_TICKET = 1000;
  static PRIZE_MONEY = {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
  };

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  purchaseTickets() {
    const ticketCount = Math.floor(
      this.#purchaseAmount / LottoGame.PRICE_PER_TICKET
    );
    Console.print(`\n${ticketCount}개를 구매했습니다.`);

    for (let i = 0; i < ticketCount; i++) {
      this.#tickets.push(Lotto.generate());
    }
  }

  printPurchasedTickets() {
    this.#tickets.forEach((ticket) => {
      Console.print(`[${formatNumbers(ticket.getNumbers())}]`);
    });
  }

  setWinningNumbers(numbers, bonusNumber) {
    this.#winningNumbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  calculateResults() {
    this.#tickets.forEach((ticket) => {
      const rank = this.#calculateRank(ticket);
      if (rank) this.#results[rank]++;
    });
  }

  #calculateRank(ticket) {
    const matchCount = ticket.countMatches(this.#winningNumbers);
    const hasBonus = ticket.hasNumber(this.#bonusNumber);

    if (matchCount === 6) return 1;
    if (matchCount === 5 && hasBonus) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return null;
  }

  printResults() {
    Console.print(`\n당첨 통계`);
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.#results[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#results[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#results[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#results[1]}개`);

    const profitRate = calculateYield(
      this.#results,
      this.#purchaseAmount,
      LottoGame.PRIZE_MONEY
    );
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default LottoGame;
