class LottoMatcher {
  constructor(myLottos, winningLotto, bonusNumber, lottoCalculator) {
    this.myLottos = myLottos;
    this.winningLotto = winningLotto;
    this.bonusNumber = bonusNumber;
    this.lottoCalculator = lottoCalculator;
  }
  #matchLottoNumber() {
    const winningNumber = this.winningLotto.lottoNumber;
    return this.myLottos.map((myLotto) =>
      myLotto.filter((lottoNumber) => winningNumber.includes(lottoNumber))
    );
  }

  #matchLottoCount(matchNumbers) {
    return matchNumbers.map((number) => number.length);
  }

  #hasBonusNumber(lotto) {
    return lotto.filter((number) => number === Number(this.bonusNumber));
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
