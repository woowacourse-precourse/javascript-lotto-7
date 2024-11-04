class LottoMatcher {
  constructor(myLottos, winningNumber, bonusNumber, lottoCalculator) {
    this.myLottos = myLottos;
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
    this.lottoCalculator = lottoCalculator;
  }
  #matchLottoNumber() {
    return this.myLottos.map((myLotto) =>
      myLotto.filter((lottoNumber) => this.winningNumber.includes(lottoNumber))
    );
  }

  #matchLottoCount(matchNumbers) {
    return matchNumbers.map((number) => number.length);
  }

  #hasBonusNumber(lotto) {
    return lotto.filter((number) => number === this.bonusNumber);
  }

  #matchBonusNumber() {
    const bonusMatches = this.myLottos.map((lotto) =>
      this.#hasBonusNumber(lotto)
    );
    return bonusMatches.map((bonus) => bonus.length === 1);
  }

  #matchLottoResults(matchCount, bonusMatch) {
    matchCount.forEach((count, index) => {
      this.lottoCalculator.calculateLottoRank(count, index, bonusMatch);
    });

    return this.lottoCalculator.getLottoResults();
  }

  matchLotto() {
    const myNumbers = this.#matchLottoNumber(this.myLottos);
    const bonusMatch = this.#matchBonusNumber(this.myLottos, this.bonusNumber);
    const matchCount = this.#matchLottoCount(myNumbers);
    return this.#matchLottoResults(matchCount, bonusMatch);
  }
}

export default LottoMatcher;
