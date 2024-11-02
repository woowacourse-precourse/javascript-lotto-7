class LottoResultAnalysis {
  constructor(winningNumbers, bonusNumber) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }
  checkRank(lottoTicket) {
    const matchedWinningCount = lottoTicket.countMatchedWinningNumbers(
      this.winningNumbers
    );
    const hasBunusNumber = lottoTicket.hasBunusNumber(this.bonusNumber);
    if (matchedWinningCount === 6) return 1;
    if (matchedWinningCount === 5 && hasBunusNumber) return 2;
    if (matchedWinningCount === 5 && !hasBunusNumber) return 3;
    if (matchedWinningCount === 4) return 4;
    if (matchedWinningCount === 3) return 5;

    return -1;
  }
}

export default LottoResultAnalysis;
