class MatchingResults {
  constructor() {
    this.results = {
      three: 0,
      four: 0,
      five: 0,
      fiveBonus: 0,
      six: 0,
    };
  }

  update(matchCount, hasBonus) {
    switch (matchCount) {
      case 6:
        this.results.six++;
        break;
      case 5:
        if (hasBonus) {
          this.results.fiveBonus++;
        } else {
          this.results.five++;
        }
        break;
      case 4:
        this.results.four++;
        break;
      case 3:
        this.results.three++;
        break;
      default:
        break;
    }
  }

  getResults() {
    return this.results;
  }
}
export default MatchingResults;
