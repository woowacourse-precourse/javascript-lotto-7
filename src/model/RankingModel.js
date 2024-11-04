export default class RankingModel {
  constructor(purchasedLotto, lotto, bonus) {
    this.purchasedLotto = purchasedLotto;
    this.winningLotto = [];
    this.matchingCount = [0, 0, 0, 0, 0];
    this.setWinningLotto(lotto, bonus);
  }

  setWinningLotto(lotto, bonus) {
    const winningNumbers = [lotto, Number(bonus)];
    this.winningLotto = winningNumbers;
  }

  countMatch() {
    const winningNumbers = this.winningLotto[0];
    const bonusNumber = this.winningLotto[1];

    this.purchasedLotto.forEach((purchasedLotto) => {
      const matchCount = this.getMatchCount(purchasedLotto, winningNumbers);
      this.updateMatchingCount(matchCount, purchasedLotto, bonusNumber);
    });

    return this.matchingCount;
  }

  getMatchCount(lotto, winningNumbers) {
    return lotto.filter((number) => winningNumbers.includes(number)).length;
  }

  updateMatchingCount(matchCount, purchasedLotto, bonus) {
    this.updateThreeMatch(matchCount);
    this.updateFourMatch(matchCount);
    this.updateFiveMatch(matchCount, purchasedLotto, bonus);
    this.updateSixMatch(matchCount);
  }

  updateThreeMatch(matchCount) {
    if (matchCount === 3) {
      this.matchingCount[0] += 1;
    }
  }

  updateFourMatch(matchCount) {
    if (matchCount === 4) {
      this.matchingCount[1] += 1;
    }
  }

  updateFiveMatch(matchCount, purchasedLotto, bonus) {
    if (matchCount === 5 && purchasedLotto.includes(bonus)) {
      this.matchingCount[3] += 1;
    }

    if (matchCount === 5 && !purchasedLotto.includes(bonus)) {
      this.matchingCount[2] += 1;
    }
  }

  updateSixMatch(matchCount) {
    if (matchCount === 6) {
      this.matchingCount[4] += 1;
    }
  }
}
