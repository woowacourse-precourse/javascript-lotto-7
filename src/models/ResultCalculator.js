class ResultCalculator {
    constructor(lottos, winningNumbers, bonusNumber) {
      this.lottos = lottos;
      this.winningNumbers = winningNumbers;
      this.bonusNumber = bonusNumber;
      this.matchCounts = { 3: 0, 4: 0, 5: 0, 6: 0, "5+bonus": 0 };
      this.calculateResults();
    }
  
    calculateResults() {
      this.lottos.forEach((lotto) => {
        const matchedCount = this.countMatches(lotto.getNumbers());
        this.updateMatchCounts(matchedCount, lotto);
      });
    }
  
    countMatches(numbers) {
      return numbers.filter((num) => this.winningNumbers.includes(num)).length;
    }
  
    updateMatchCounts(matchedCount, lotto) {
      if (matchedCount === 6) this.matchCounts[6]++;
      else if (matchedCount === 5 && lotto.getNumbers().includes(this.bonusNumber)) this.matchCounts["5+bonus"]++;
      else if (matchedCount === 5) this.matchCounts[5]++;
      else if (matchedCount === 4) this.matchCounts[4]++;
      else if (matchedCount === 3) this.matchCounts[3]++;
    }
  
    getResults() {
      return this.matchCounts;
    }
  }
  
  export default ResultCalculator;
  