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
    // 각 로또마다 결과 저장
    switch (matchNum) {
      case 3:
        this.#result[0]++;
        break;
      case 4:
        this.#result[1]++;
        break;
      case 5:
        if (isBonusMatch) {
          this.#result[3]++;
          return;
        }
        this.#result[2]++;
        break;
      case 6:
        this.#result[4]++;
        break;
      default:
        break;
    }
  }

  getLottoResult() {
    return this.#result;
  }

  getReturnRate() {
    let profit = 0;
    const lottoPrice = this.#lottoList.length * 1000;
    this.#result.forEach((result, index) => {
      profit += result * this.#prizeMoney[index];
    });

    return ((profit / lottoPrice) * 100).toFixed(1);
  }
}

export default LottoResult;
