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
}
