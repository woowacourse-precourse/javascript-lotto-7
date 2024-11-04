class LottoResult {
  #lottoList;
  #winningLotto;
  #bonusNumber;
  #result = [0, 0, 0, 0, 0]; // 5등 (3개 일치) -> 1등 (6개 일치) 순서
  #prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];

  constructor(lottoList, winningLotto, bonusNumber) {
    this.#lottoList = lottoList; // Lotto[]
    this.#winningLotto = winningLotto; // number[]
    this.#bonusNumber = bonusNumber; // number
    this.#calculateResults();
  }

  #calculateResults() {
    for (const lotto of this.#lottoList) {
      const matchNum = this.#countMatches(lotto); // 로또 번호 일치 개수
      const isBonusMatch = this.#isBonusMatched(lotto); // 보너스 번호 일치 여부
      this.#saveResult(matchNum, isBonusMatch); // 각 로또 별로 결과 저장
    }
  }

  #countMatches(lotto) {
    let matchCount = 0;
    for (const num of lotto.getLotto()) {
      if (this.#winningLotto.includes(num)) {
        matchCount += 1;
      }
    }
    return matchCount;
  }

  #isBonusMatched(lotto) {
    for (const num of lotto.getLotto()) {
      if (num === this.#bonusNumber) {
        return true;
      }
    }
    return false;
  }

  #saveResult(matchNum, isBonusMatch) {
    if (matchNum === 3) {
      this.#result[0]++;
      return;
    }
    if (matchNum === 4) {
      this.#result[1]++;
      return;
    }
    if (matchNum === 5) {
      this.#processFiveMatchResult(isBonusMatch);
      return;
    }
    if (matchNum === 6) {
      this.#result[4]++;
    }
  }

  #processFiveMatchResult(isBonusMatch) {
    if (isBonusMatch) {
      this.#result[3]++;
      return;
    }
    this.#result[2]++;
  }

  getLottoResult() {
    return this.#result;
  }

  getReturnRate() {
    const totalSpent = this.#calculateTotalSpent(); // 구입금액
    const profit = this.#calculateProfit(); // 수익
    return this.#calculateReturnRate(totalSpent, profit); // 수익률
  }

  #calculateTotalSpent() {
    return this.#lottoList.length * 1000;
  }

  #calculateProfit() {
    let totalProfit = 0;
    for (let i = 0; i < this.#result.length; i++) {
      totalProfit += this.#result[i] * this.#prizeMoney[i];
    }
    return totalProfit;
  }

  #calculateReturnRate(totalSpent, profit) {
    return ((profit / totalSpent) * 100).toFixed(1);
  }
}

export default LottoResult;
