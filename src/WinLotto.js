import { Console } from "@woowacourse/mission-utils";

export default class WinLotto {
  #purchasedLotto;
  #winningLotto;
  #bonusNumber;
  #results = { 3: 0, 4: 0, 5: 0, 6: 0, "5+bonus": 0 };
  #PRIZES = {
    3: 5000,
    4: 50000,
    5: 1500000,
    "5+bonus": 30000000,
    6: 2000000000,
  };
  #WINNING_STATISTICS_PROMPT = "당첨 통계";
  #DIVIDING_LINE = "---";
  #MATCH_THREE_PROMPT = `3개 일치 (5,000원) - `;
  #MATCH_FOUR_PROMPT = "4개 일치 (50,000원) - ";
  #MATCH_FIVE_PROMPT = "5개 일치 (1,500,000원) - ";
  #MATCH_FIVE_PLUS_PROMPT = "5개 일치, 보너스 볼 일치 (30,000,000원) - ";
  #MATCH_SIX_PROMPT = "6개 일치 (2,000,000,000원) - ";
  #TOTAL_RETURN = "총 수익률은 ";

  constructor(purchasedLotto, winningLotto, bonusNumber) {
    this.#purchasedLotto = purchasedLotto;
    this.#winningLotto = winningLotto.getNumbers();
    this.#bonusNumber = bonusNumber;
    this.#findWinLotto();
  }

  #findWinLotto() {
    this.#purchasedLotto.forEach((ticket) => {
      const matchedCount = ticket.filter((num) =>
        this.#winningLotto.includes(num)
      ).length;
      const hasBonus = ticket.includes(this.#bonusNumber);

      this.#determineRank(matchedCount, hasBonus);
    });
    this.printPrizes();
    this.printTotalReturn()
  }

  #determineRank(matchedCount, hasBonus) {
    if (matchedCount === 6) {
      this.#results[6]++;
    } else if (matchedCount === 5 && hasBonus) {
      this.#results["5+bonus"]++;
    } else if (matchedCount === 5) {
      this.#results[5]++;
    } else if (matchedCount === 4) {
      this.#results[4]++;
    } else if (matchedCount === 3) {
      this.#results[3]++;
    }
  }

  printPrizes() {
    Console.print(this.#WINNING_STATISTICS_PROMPT);
    Console.print(this.#DIVIDING_LINE);
    Console.print(`${this.#MATCH_THREE_PROMPT}${this.#results[3]}개`);
    Console.print(`${this.#MATCH_FOUR_PROMPT}${this.#results[4]}개`);
    Console.print(`${this.#MATCH_FIVE_PROMPT}${this.#results[5]}개`);
    Console.print(
      `${this.#MATCH_FIVE_PLUS_PROMPT}${this.#results["5+bonus"]}개`
    );
    Console.print(`${this.#MATCH_SIX_PROMPT}${this.#results[6]}개`);

  }
  
  printTotalReturn(){
    const totalPrize = Object.entries(this.#results).reduce(
      (acc, [key, count]) => acc + this.#PRIZES[key] * count,
      0
    );
    const purchaseAmount = this.#purchasedLotto.length * 1000;
    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);
    Console.print(`${this.#TOTAL_RETURN}${profitRate}%입니다.`);
  }
}
