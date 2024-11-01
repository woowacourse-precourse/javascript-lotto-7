class LottoStatistics {
  constructor(purchasedLottos, winningLotto) {
    this.purchasedLottos = purchasedLottos;
    this.winningLotto = winningLotto;
    this.winningStatistics = {
      3: { count: 0, prize: 5000 },
      4: { count: 0, prize: 50000 },
      5: { count: 0, prize: 1500000 },
      6: { count: 0, prize: 2000000000 },
      '5bonus': { count: 0, prize: 30000000 },
    };
  }

  calculateStatistics() {
    const winningNumbers = this.winningLotto.getNumbers();
    const bonusNumber = this.winningLotto.getBonusNumber();

    this.purchasedLottos.forEach((lotto) => {
      const matchedNumCount = LottoStatistics.#getMatchedNumCount(lotto, winningNumbers);
      const hasBonus = LottoStatistics.#hasBonusNumber(lotto, bonusNumber);
      this.#recordMatchedResult(matchedNumCount, hasBonus);
    });
  }

  static #getMatchedNumCount(lotto, winningNumbers) {
    return lotto.getNumbers().filter((num) => winningNumbers.includes(num)).length;
  }

  static #hasBonusNumber(lotto, bonusNumber) {
    return lotto.getNumbers().includes(bonusNumber);
  }

  #recordMatchedResult(matchedNumCount, hasBonus) {
    if (matchedNumCount === 5 && hasBonus) {
      this.winningStatistics['5bonus'].count += 1;
      return;
    }
    if (matchedNumCount >= 3) {
      this.winningStatistics[matchedNumCount].count += 1;
    }
  }
}

export default LottoStatistics;
