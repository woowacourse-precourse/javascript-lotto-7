class LottoComparer {
  static countMatches(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter((num) => winningNumbers.includes(num)).length;
  }

  static hasBonusMatch(lottoNumbers, bonusNumber) {
    return lottoNumbers.includes(bonusNumber);
  }

  static compare(lottoNumbers, winningNumbers, bonusNumber) {
    return {
      matchCount: this.countMatches(lottoNumbers, winningNumbers),
      bonusMatch: this.hasBonusMatch(lottoNumbers, bonusNumber),
    };
  }
}

export default LottoComparer;
