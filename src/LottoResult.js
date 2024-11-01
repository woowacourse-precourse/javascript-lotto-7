class LottoResult {
  constructor() {
    this.matchCounts = { '1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 0 };
  }

  countMatches(matches, hasBonus) {
    if (matches === 6) {
      this.matchCounts['1등']++;
    } else if (matches === 5 && hasBonus) {
      this.matchCounts['2등']++;
    } else if (matches === 5) {
      this.matchCounts['3등']++;
    } else if (matches === 4) {
      this.matchCounts['4등']++;
    } else if (matches === 3) {
      this.matchCounts['5등']++;
    }
  }
}

export default LottoResult;
