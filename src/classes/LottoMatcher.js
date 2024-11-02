class LottoMatcher {
  constructor(myLottos, winningLotto, bonusNumber) {
    this.myLottos = myLottos;
    this.winningLotto = winningLotto;
    this.bonusNumber = bonusNumber;
  }
  matchLottoNumber() {
    const winningNumber = this.winningLotto.lottoNumber;
    return this.myLottos.map((myLotto) =>
      myLotto.filter((lottoNumber) => winningNumber.includes(lottoNumber))
    );
  }

  matchLottoCount(matchNumbers) {
    return matchNumbers.map((number) => number.length);
  }

  hasBonusNumber(lotto) {
    return lotto.filter((number) => number === Number(this.bonusNumber));
  }

  matchBonus() {
    const bonusMatches = this.myLottos.map((lotto) =>
      this.hasBonusNumber(lotto)
    );
    return bonusMatches.map((bonus) => bonus.length === 1);
  }
}

export default LottoMatcher;
