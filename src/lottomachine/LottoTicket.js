class LottoTicket {
  matchCount;

  bonusCount;

  constructor(lottoNumbers) {
    this.lottoNumbers = lottoNumbers;
  }

  calculateMatchCount(winningNumbers) {
    this.matchCount = this.lottoNumbers.filter((number) =>
      winningNumbers.includes(number),
    ).length;
    return this.matchCount;
  }

  calculateBonusCount(bonusNumber) {
    this.bonusCount = this.lottoNumbers.filter(
      (number) => number === bonusNumber,
    ).length;
    return this.bonusCount;
  }
}

export default LottoTicket;
