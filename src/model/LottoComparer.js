class LottoComparer {
  static compare(lottoNumbers, winningNumbers, bonusNumber) {
    const matchCount = lottoNumbers.filter((num) =>
      winningNumbers.includes(num),
    ).length;
    const bonusMatch = lottoNumbers.includes(bonusNumber);

    return {
      matchCount,
      bonusMatch,
    };
  }
}

export default LottoComparer;
