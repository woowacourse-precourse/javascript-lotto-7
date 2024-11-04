class Ranking {
    static compareRank(lottoList, winningNumbers, bonusNumber) {
      const rankCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  
      lottoList.forEach((lotto) => {
        const rank = this.calculateRank(lotto, winningNumbers, bonusNumber);
        if (rank) rankCount[rank]++;
      });
  
      return rankCount;
    }
  
    static calculateRank(lotto, winningNumbers, bonusNumber) {
      const matchedCount = lotto.countMatchingNumbers(winningNumbers);
      const hasBonus = lotto.includesBonusNumber(bonusNumber);
  
      if (matchedCount === 6) return 1;
      if (matchedCount === 5 && hasBonus) return 2;
      if (matchedCount === 5) return 3;
      if (matchedCount === 4) return 4;
      if (matchedCount === 3) return 5;
      return null;
    }
  }
  
  export default Ranking;